import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { CustomersPage } from '../pages/customers/customers';
import { TrainersPage } from '../pages/shared/trainers/trainers';

// PROTO
import { AssessmentsPage } from '../pages/shared/assessments/assessments';
import { MapPage } from '../pages/shared/map/map';
import { SearchByLocationPage } from '../pages/shared/search-by-location/search-by-location';
import { SchedulePage } from '../pages/shared/schedule/schedule';
import { ProfilePage } from '../pages/shared/profile/profile';
import { RegisterCustomerPage } from '../pages/shared/register-customer/register-customer';
import { RegisterTrainerPage } from '../pages/shared/register-trainer/register-trainer';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// PROVIDERS
import { MyProfilePage } from '../pages/my-profile/my-profile';

// FIREBASE
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import  firebaseConfig  from '../config';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { ScheduleService } from '../providers/fb-schedule/schedule.service';
import { TrainerService } from '../providers/fb-trainer/trainer.service';
import { CustomerService } from '../providers/fb-customers/customer.service';
import { AssessmentsService } from '../providers/fb-assessments/assessments.service';
import { RatioService } from '../providers/fb-ratio/ratio.service';
//import { AuthService } from '../services/auth.service';

// FIREBASE LOGIN SYSTEM
import { LoginFirePage } from '../pages/login-fire/login-fire';
import { SignupPage } from '../pages/signup/signup';

// FIREBASE STORAGE
import { AngularFirestoreModule } from 'angularfire2/firestore';

// IONIC-NATIVE
//import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CustomersPage,
    TrainersPage,
    AssessmentsPage,
    MapPage,
    SearchByLocationPage,
    SchedulePage,
    ProfilePage,
    LoginFirePage,
    SignupPage,
    RegisterCustomerPage,
    RegisterTrainerPage,
    MyProfilePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFirestoreModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CustomersPage,
    TrainersPage,
    AssessmentsPage,
    MapPage,
    SearchByLocationPage,
    SchedulePage,
    ProfilePage,
    LoginFirePage,
    SignupPage,
    RegisterCustomerPage,
    RegisterTrainerPage,
    MyProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    //Geolocation, 
    Camera,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AngularFireAuth,
    AuthServiceProvider,
    ScheduleService,
    TrainerService,
    CustomerService,
    AssessmentsService,
    RatioService
  ]
})
export class AppModule { }
