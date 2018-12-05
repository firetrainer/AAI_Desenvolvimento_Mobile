import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { Assessments } from '../fb-assessments/assessments.model'
import { AuthServiceProvider } from '../auth-service/auth-service';


/*
  Generated class for the OrderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AssessmentsService {

    constructor(public firestore: AngularFirestore, private auth: AuthServiceProvider) { }

    sendAssessments(info: Assessments): Promise<void> {
        let id = this.firestore.createId();

        let assessments = {
            "id": id,
            "date": new Date().toISOString(),
            "userEmail": this.auth.getEmail(),
            "id_trainer": info.id_trainer,
            "id_customer": info.id_customer,
            "description": info.description,
            "classification": info.classification,
            "evaluation": info.evaluation
        }
        return this.firestore.doc<Assessments>(`assessments/${id}`).set(assessments);
    }

    getAssessmentsList(): AngularFirestoreCollection<Assessments> {
        return this.firestore.collection(`assessments`, ref => ref.where('userEmail', '==', this.auth.getEmail()).orderBy('date', "desc"));
    }
}