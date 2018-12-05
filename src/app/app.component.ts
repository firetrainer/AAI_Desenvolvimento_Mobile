import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthServiceProvider } from '../providers/auth-service/auth-service';

import { LoginFirePage } from '../pages/login-fire/login-fire';

import { HomePage } from '../pages/home/home';
import { SearchByLocationPage } from '../pages/shared/search-by-location/search-by-location';
import { MyProfilePage } from '../pages/my-profile/my-profile';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = TabsPage;

  rootPage: any = LoginFirePage;

  //testVelue = 'como assim?';
  @ViewChild(Nav) nav: Nav;

  activePage: any;

  pages: Array<{ title: string, component: any }>

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private auth: AuthServiceProvider) {
    this.initializaApp();
    statusBar.styleBlackOpaque();
    splashScreen.hide();
    this.pages = [
      {title: 'Home', component: HomePage},
      {title: 'Meu Perfil', component: MyProfilePage}
    ];
    this.activePage = this.pages[0];
  }

  initializaApp(){
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleBlackOpaque();
      this.splashScreen.hide();
    });
  }

  pushHomePage(page) {
    this.nav.setRoot(page.component);
    this.activePage = page;
  }

  // pushSearchPage() {
  //   this.nav.setRoot(SearchPage);
  // }

  checkActive(page){
    return page == this.activePage;
  }
}
