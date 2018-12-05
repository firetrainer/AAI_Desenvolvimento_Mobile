import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { storage } from 'firebase';
import { Camera, CameraOptions } from '@ionic-native/camera';

import * as firebase from 'firebase';

/**
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html',
})
export class MyProfilePage {

  imageSource: any;
  theImage: any;

  constructor(private camera: Camera, public navCtrl: NavController, public navParams: NavParams) {
    this.imageSource = 'pictures2018-12-04T14:31:25.811Z';
    this.getImageFromFireStogare();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyProfilePage');
  }

  result: any;
  image: any;
  pictures: any;
  namePicture = "pictures" + new Date().toISOString();

  showBtnSend = false;

  async takePicture() {
    // DEFINING CAMERA OPTIONS

    try {
      const OPTIONS: CameraOptions = {
        quality: 80,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        allowEdit: true,
        targetHeight: 800,
        targetWidth: 800
      }

      this.result = await this.camera.getPicture(OPTIONS);

      this.image = `data:image/jpeg;base64,${this.result}`
      //this.myPicture = `data:image/jpeg;base64,${RESULT}`;

      // this.pictures = storage().ref('img/pictures');
      // this.pictures.putString(this.image, 'data_url');

      this.showBtnSend = true;
    } catch (err) {
      console.error(err);
    }
  }

  getImageFromGalery() {
    const OPTIONS: CameraOptions = {
      quality: 80,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false
    }

    this.camera.getPicture(OPTIONS).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });

    this.showBtnSend = true;
  }

  cropImage() {
    const OPTIONS: CameraOptions = {
      quality: 80,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false,
      allowEdit: true,
      targetHeight: 300,
      targetWidth: 300
    }

    this.camera.getPicture(OPTIONS).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });

    this.showBtnSend = true;
  }

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

  getImageFromFireStogare() {
    firebase.storage().ref().child('img/' + this.imageSource).getDownloadURL()
      .then((url) => {
        this.theImage = url;
      })
  }
}
