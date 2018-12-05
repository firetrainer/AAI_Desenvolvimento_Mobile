import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { Trainer } from '../fb-trainer/trainer.model'
import { AuthServiceProvider } from '../auth-service/auth-service';

/*
  Generated class for the OrderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TrainerService {

    constructor(public firestore: AngularFirestore, private auth: AuthServiceProvider) { }

    sendTrainer(info: Trainer): Promise<void> {
        let id = this.firestore.createId();

        let trainer = {
            "id": id,
            "date": new Date().toISOString(),
            "name": info.name,
            "age": info.age,
            "cpf": info.cpf,
            "foneNumber": info.foneNumber,
            "userEmail": info.userEmail,
            "password": info.password,
            "imgPath": info.imgPath,
            "about_me": info.about_me,
            "skill_01": info.skill_01,
            "skill_02": info.skill_02,
            "exp_date": info.exp_date,
            "evaluation_level": info.evaluation_level,
            "evaluation_count": info.evaluation_count,
            "qtt_students": info.qtt_students,
            "qtt_classes": info.qtt_classes,
            "experience": info.experience,
            "location": info.location,
        }
        return this.firestore.doc<Trainer>(`trainer/${id}`).set(trainer);
    }

    getTrainerList(): AngularFirestoreCollection<Trainer> {
        return this.firestore.collection(`trainer`, ref => ref.orderBy('name', "asc"));
    }

    getTrainerListSkill01(skill): AngularFirestoreCollection<Trainer> {
        return this.firestore.collection(`trainer`, ref => ref.where('skill_01', '==', skill));
    }

    getTrainerListSkill02(skill): AngularFirestoreCollection<Trainer> {
        return this.firestore.collection(`trainer`, ref => ref.where('skill_02', '==', skill));
    }

    getTrainerById(id): AngularFirestoreCollection<Trainer> {
        return this.firestore.collection(`trainer`, ref => ref.where('id', '==', id));
    }
}
