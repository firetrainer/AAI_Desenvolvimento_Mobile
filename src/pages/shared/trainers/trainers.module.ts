import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrainersPage } from './trainers';

@NgModule({
  declarations: [
    TrainersPage,
  ],
  imports: [
    IonicPageModule.forChild(TrainersPage),
  ],
})
export class TrainersPageModule {}
