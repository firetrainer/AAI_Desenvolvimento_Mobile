import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, AlertController, LoadingController } from 'ionic-angular';

import { ProfilePage } from '../profile/profile';
import { Trainer } from '../../../providers/fb-trainer/trainer.model';
import { Observable } from 'rxjs/Observable';
import { TrainerService } from '../../../providers/fb-trainer/trainer.service';

/**
 * Generated class for the TrainersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trainers',
  templateUrl: 'trainers.html',
})
export class TrainersPage {

  param: string;

  public nameFirst: string;
  public ageFirst: any;

  public nameSecond: string;
  public ageSecond: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private trnrSrvc: TrainerService,
              public loadingCtrl: LoadingController, public alertCtrl: AlertController) {}

  openListTrainers(catObject){
    this.navCtrl.push(ProfilePage, catObject);
  }

  ionViewDidLoad() {
    this.param = this.navParams.get('param');
    this.loadTrainerListSkills(this.param);
  }

  public trainerListFB_Skill01: Observable<Trainer[]>;
  public trainerListFB_Skill02: Observable<Trainer[]>;

  loadTrainerListSkills(skill: string){
    const loading: Loading = this.loadingCtrl.create(
      {
        spinner: 'circles',
        content: 'Buscando Trainers por Habilidades, Aguarde!'
      }
    );
    loading.present();

    this.trainerListFB_Skill01 = this.trnrSrvc.getTrainerListSkill01(skill).valueChanges();
    this.trainerListFB_Skill01.subscribe(
      data => {
        console.log('data................', data);
        this.nameFirst = data[0].name;
        this.ageFirst = data[0].age;
      }
    )

    this.trainerListFB_Skill02 = this.trnrSrvc.getTrainerListSkill02(skill).valueChanges();
    this.trainerListFB_Skill02.subscribe(
      data => {
        console.log('data................', data);
        this.nameSecond = data[0].name;
        this.ageSecond = data[0].age;
      }
    )

    loading.dismiss();
  }

  pushProfile(id: string){
    this.navCtrl.push(ProfilePage, {
      id: id
    });
  }

//teste: string;
  openProfile(prm: number, id: string){
    if(prm == 1){
      this.pushProfile(id);
      //this.teste = id;
    }else{
      this.pushProfile(id);
      //this.teste = id;
    }
  }
}
