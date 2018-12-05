import { Component, Input } from '@angular/core';
import { NavController, Loading, LoadingController, AlertController, NavParams, MenuController } from 'ionic-angular';
import { CustomersPage } from '../customers/customers';
import { TrainersPage } from '../shared/trainers/trainers';
import { ProfilePage } from '../shared/profile/profile';
import { Observable } from 'rxjs/Observable';
import { Trainer } from '../../providers/fb-trainer/trainer.model';
import { TrainerService } from '../../providers/fb-trainer/trainer.service';
// import { Camera, CameraOptions } from '@ionic-native/camera';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private trnrSrvc: TrainerService,
    public loadingCtrl: LoadingController, public alertCtrl: AlertController, public menuCtrl: MenuController) 
    {

  }

  meuNome = "TESTE";

  @Input() info;

  pushPageCustomers() {
    this.navCtrl.push(CustomersPage, {
      id: "123",
      name: "teste"
    });
  }

  pushPageTrainers(param: string) {
    this.navCtrl.push(TrainersPage, {
      param: param
    });
  }

  // puchProfileTrainers(catObject){
  //   this.navCtrl.push(ProfilePage, catObject);
  // }

  // SKILLS ==================================================
  getSkillsAerobica() { this.pushPageTrainers("Aeróbica"); }

  getSkillsAlongamento() { this.pushPageTrainers("Alongamento"); }

  getSkillsArtesMarciais() { this.pushPageTrainers("Artes Marciais"); }

  getSkillsBoxe() { this.pushPageTrainers("Boxe"); }

  getSkillsCorrida() { this.pushPageTrainers("Corrida"); }

  getSkillsJiuJitsu() { this.pushPageTrainers("Jiu-Jitsu"); }

  getSkillsMusculacao() { this.pushPageTrainers("Musculação"); }

  getSkillsNatacao() { this.pushPageTrainers("Natação"); }


}
