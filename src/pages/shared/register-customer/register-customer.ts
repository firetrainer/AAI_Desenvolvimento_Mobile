import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, Alert, Loading } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from '../../../providers/fb-customers/customer.service';
import { AuthServiceProvider } from '../../../providers/auth-service/auth-service';
import { HomePage } from '../../home/home';

import { storage } from 'firebase';
import { Camera, CameraOptions } from '@ionic-native/camera';
import * as firebase from 'firebase';
import { AngularFirestore } from 'angularfire2/firestore';

/**
 * Generated class for the RegisterCustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register-customer',
  templateUrl: 'register-customer.html',
})
export class RegisterCustomerPage {

  imageSource: any;
  theImage: any;
  result: any;
  image: any;
  pictures: any;
  namePicture: string;

  haveImage = false;

  customerForm: FormGroup;
  magSignupError: any;
  newId: string;

  constructor(private camera: Camera, public navCtrl: NavController, public navParams: NavParams, private csmrSrvc: CustomerService,
    public loadingCtrl: LoadingController, public alertCtrl: AlertController, public fb: FormBuilder, private auth: AuthServiceProvider,
    public firestore: AngularFirestore) {
    this.customerForm = this.fb.group(
      {
        userEmail: ['', [Validators.email]],
        name: ['', [Validators.required]],
        age: ['', [Validators.required]],
        cpf: ['', [Validators.required]],
        foneNumber: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        imgPath: [''],
        location: ['', [Validators.required]],
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterCustomerPage');
  }

  // CREATING USER INFORMATION
  sendData(): void {
    const loading: Loading = this.loadingCtrl.create(
      {
        spinner: 'circles',
        content: 'Registrando, por favor aguarde!'
      }
    );
    loading.present();

    let data = this.customerForm.value;
    this.newId = this.firestore.createId();

    if (this.haveImage) {
      this.namePicture = 'picture_' + this.newId;
    } else {
      this.namePicture = 'NO_PICTURE';
    }

    let cstmr = {
      id: this.newId,
      userEmail: data.userEmail,
      date: null,
      name: data.name,
      age: data.age,
      cpf: data.cpf,
      foneNumber: data.foneNumber,
      password: data.password,
      imgPath: this.namePicture,
      location: data.location
    };
    this.csmrSrvc.sendCustomer(cstmr).then(
      () => {
        loading.dismiss().then(() => {
          const alert: Alert = this.alertCtrl.create({
            message: 'Registrado com sucesso!',
            buttons: [{ text: 'Ok' }],
          });
          alert.present();

        });
      },
      error => {
        loading.dismiss().then(() => {
          const alert: Alert = this.alertCtrl.create({
            message: error.message,
            buttons: [{ text: 'Ok', role: 'cancelar' }],
          });
          alert.present();
        });
      }
    );

    this.signup(data.userEmail, data.password); // SENDING DATA
    if (this.haveImage) { this.sendImage() }    // SENDING IMAGE
    loading.dismiss();
  }

  // SIGNUP - CREATING USER FIREBASE
  signup(email: string, password: string) {
    let credentials = {
      email: email,
      password: password
    };
    this.auth.signUp(credentials).then(
      () => this.navCtrl.setRoot(HomePage),
      error => this.magSignupError = error.message
    );
  }

  // FIREBASE STORAGE =======================================
  // CAMERA----
  async takePicture() {
    try {
      const OPTIONS: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        allowEdit: true, // CROP IMAGE
        targetHeight: 800,
        targetWidth: 800
      }

      this.result = await this.camera.getPicture(OPTIONS);

      this.image = `data:image/jpeg;base64,${this.result}`
      this.haveImage = true;
    } catch (err) {
      console.error(err);
    }
  }

  // GALLERY---
  getImageFromGalery() {
    const OPTIONS: CameraOptions = {
      quality: 80,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false,
      allowEdit: true,
      targetHeight: 600,
      targetWidth: 600
    }

    this.camera.getPicture(OPTIONS).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });

    this.haveImage = true;
  }

  // SEND IMAGE TO STORAGE
  msgSent: String;
  sendImage() {
    try {
      this.pictures = storage().ref('img/' + this.namePicture);
      this.pictures.putString(this.image, 'data_url');
      this.msgSent = "Foto enviada!"
    } catch (error) {
      this.msgSent = "Não foi possível enviar!"
    }
  }

  // BRINGING PICTURE
  getImageFromFireStogare() {
    firebase.storage().ref().child('img/' + this.imageSource).getDownloadURL()
      .then((url) => {
        this.theImage = url;
      })
  }
}
