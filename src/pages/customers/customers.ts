import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, AlertController } from 'ionic-angular';

import { CustomerService } from '../../providers/fb-customers/customer.service';
import { Observable } from 'rxjs/Observable';
import { Customer } from '../../providers/fb-customers/customer.model';



/**
 * Generated class for the CustomersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customers',
  templateUrl: 'customers.html',
})
export class CustomersPage {

  public customerListFB: Observable<Customer[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private csmrSrvc: CustomerService,
    public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.loadCustomerList();
  }

  loadCustomerList(){
    const loading: Loading = this.loadingCtrl.create(
      {
        spinner: 'circles',
        content: 'Buscando Clientes, Aguarde!'
      }
    );
    loading.present();

    this.customerListFB = this.csmrSrvc.getCustomerList().valueChanges();
    this.customerListFB.subscribe(
      data => {
        if(data.length > 0){
          loading.dismiss();
        }
      }
    )
  }
}
