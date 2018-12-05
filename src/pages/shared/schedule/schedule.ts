import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController, Loading, ToastController } from 'ionic-angular';
import { ScheduleService } from '../../../providers/fb-schedule/schedule.service';
import { Schedule } from '../../../providers/fb-schedule/schedule.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/**
 * Generated class for the SchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {

  public timeScdl = {
    month: '2019-10-05',
    time: '12:00'
  }

  scdl: Schedule;
  scheduleForm: FormGroup;

  constructor(public fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl: LoadingController, private toast: ToastController,
    public alertCtrl: AlertController, private sclSrvc:ScheduleService) 
    {
      this.scheduleForm = this.fb.group(
        {
          customerName: ['', [Validators.required]],
          trainerName: ['', [Validators.required]],
          dateSchedule: [''],
          timeSchedule: [''],
          gatheringPlace: ['', [Validators.required]],
        }
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulePage');
  }

  sendData(): void {
    const loading: Loading = this.loadingCtrl.create(
      {
        spinner: 'circles',
        content: 'Registrando Agendamento, por favor aguarde!'
      }
    );
    loading.present();

    let data = this.scheduleForm.value;
    let scdl = {
      id: null,
      userEmail: null,
      date: null,
      customerName: data.customerName,
      trainerName: data.trainerName,
      dateSchedule: data.dateSchedule,
      timeSchedule: data.timeSchedule,
      gatheringPlace: data.gatheringPlace
    };
    this.sclSrvc.sendSchedule(scdl).then(
      () => {
        loading.dismiss().then(() => {
          this.toast.create({message: 'Treinamento agendado com sucesso', duration: 3000}).present();
        });
      },
      error => {
        loading.dismiss().then(() => {
          this.toast.create({message: 'Erro ao agendar treinamento', duration: 3000}).present();
        });
      }
    );
  }
}
