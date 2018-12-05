import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { Ratio } from '../fb-ratio/ratio.model'
import { AuthServiceProvider } from '../auth-service/auth-service';


/*
  Generated class for the OrderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RatioService {

    constructor(public firestore: AngularFirestore, private auth: AuthServiceProvider) { }

    sendRatio(info: Ratio): Promise<void> {
        let id = this.firestore.createId();

        let ratio = {
            "id": id,
            "date": new Date().toISOString(),
            "userEmail": this.auth.getEmail(),
            "id_trainer": info.id_trainer,
            "id_customer": info.id_customer
        }
        return this.firestore.doc<Ratio>(`ratio/${id}`).set(ratio);
    }

    getRatioList(): AngularFirestoreCollection<Ratio> {
        return this.firestore.collection(`ratio`, ref => ref.where('userEmail', '==', this.auth.getEmail()).orderBy('date', "desc"));
    }
}
