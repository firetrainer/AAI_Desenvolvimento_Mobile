import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { Schedule } from './schedule.model'
import { AuthServiceProvider } from '../auth-service/auth-service';


/*
  Generated class for the OrderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ScheduleService {

    constructor(public firestore: AngularFirestore, private auth: AuthServiceProvider) { }

    sendSchedule(info: Schedule): Promise<void> {
        let id = this.firestore.createId();

        let schedule = {
            "id": id,
            "userEmail": this.auth.getEmail(),
            "date": new Date().toISOString(),
            "customerName": info.customerName,
            "trainerName": info.trainerName,
            "dateSchedule": info.dateSchedule,
            "timeSchedule": info.timeSchedule,
            "gatheringPlace": info.gatheringPlace
        }
        return this.firestore.doc<Schedule>(`schedule/${id}`).set(schedule);
    }

    getScheduleList(): AngularFirestoreCollection<Schedule> {
        return this.firestore.collection(`schedule`, ref => ref.where('userEmail', '==', this.auth.getEmail()).orderBy('date', "desc"));
    }

}
