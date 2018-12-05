import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, AlertController, LoadingController } from 'ionic-angular';
import { SchedulePage } from '../schedule/schedule';

import { AssessmentsPage } from '../assessments/assessments';
import { Observable } from 'rxjs/Observable';
import { Trainer } from '../../../providers/fb-trainer/trainer.model';
import { TrainerService } from '../../../providers/fb-trainer/trainer.service';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  // stdRatioList: StudentsRatio[] = [];
  trainer: any;
  paramId: string;
  public trainerById: Observable<Trainer[]>;

  // private studentsRatioService: ListStudentsRatioProvider, IT WAS IN THE CONSTRUCTOR

  constructor(public navCtrl: NavController, public navParams: NavParams, private trnrSrvc: TrainerService,
    public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    this.trainer = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    //this.getListCustomers();

    this.paramId = this.navParams.get('id');
    this.loadTrainerById(this.paramId);
    //this.trainer = this.trainerById;
  }

  pushSchedulePage() {
    this.navCtrl.push(SchedulePage, {
    });
  }
  
  pushAssessments(){
    this.navCtrl.push(AssessmentsPage, {
    });
  }

  loadTrainerById(id: string){
    const loading: Loading = this.loadingCtrl.create(
      {
        spinner: 'circles',
        content: 'Buscando Trainers por Habilidades, Aguarde!'
      }
    );
    loading.present();

    this.trainerById = this.trnrSrvc.getTrainerById(id).valueChanges();
    this.trainerById.subscribe(
      data => {}
    )

    loading.dismiss();
  }

  pushProfile(){
    this.navCtrl.push(ProfilePage, {
    });
  }
}
