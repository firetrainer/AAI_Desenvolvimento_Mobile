import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { Customer } from '../fb-customers/customer.model'
import { AuthServiceProvider } from '../auth-service/auth-service';

import { Md5 } from 'ts-md5';

/*
  Generated class for the OrderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CustomerService {

    constructor(public firestore: AngularFirestore, private auth: AuthServiceProvider) { }

    sendCustomer(info: Customer): Promise<void> {
        let customer = {
            "id": info.id,
            "date": new Date().toISOString(),
            "name": info.name,
            "age": info.age,
            "cpf": info.cpf,
            "foneNumber": info.foneNumber,
            "userEmail": info.userEmail,
            "password": Md5.hashStr(info.password).toString(),
            "imgPath": info.imgPath,
            "location": info.location
        }
        return this.firestore.doc<Customer>(`customers/${info.id}`).set(customer);
    }

    getCustomerList(): AngularFirestoreCollection<Customer> {
        return this.firestore.collection(`customers`, ref => ref.where('userEmail', '==', this.auth.getEmail()).orderBy('date', "desc"));
    }


    // "userEmail": this.auth.getEmail(),
}
