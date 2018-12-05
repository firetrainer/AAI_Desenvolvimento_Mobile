import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// import { Geolocation } from '@ionic-native/geolocation';

declare var google;

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  map: any;

  // public geolocation: Geolocation
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');

    // const position = new google.maps.LatLng(-21.763409, -43.349034);

    // const mapOptions = {
    //   zoom: 18,
    //   center: position,
    //   //disableDefaultUI: true
    // }

    // this.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // const marker = new google.maps.Marker({
    //   position: position,
    //   map: this.map,

    //   //Titulo
    //   //title: 'Minha posição',

    //   //Animção
    //   //animation: google.maps.Animation.DROP, // BOUNCE

    //   //Icone
    //   //icon: 'assets/imgs/pessoa.png'
    // });

// =============================================================================================================================
    
    // this.geolocation.getCurrentPosition()
    //   .then((resp) => {
    //     const position = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);

    //     const mapOptions = {
    //       zoom: 18,
    //       center: position
    //     }

    //     this.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    //     const marker = new google.maps.Marker({
    //       position: position,
    //       map: this.map
    //     });

    //   }).catch((error) => {
    //     console.log('Erro ao tentar encontrar sua posição', error);
    //   });

// ===============================================================================================================================


    // logradouro: string;
  // numero: string;
  // bairro: string;
  // cidade: string;
  // estado: string;
  
  // private getEndereco() {
  //   return this.logradouro + ', ' + this.numero + ' - ' + this.bairro + ', ' + this.cidade + ' - ' + this.estado;
  // }

  // private getMapa() {
  //   return 'https://maps.googleapis.com/maps/api/staticmap?zoom=15&size=400x400&markers=color:red|' + this.getEndereco() + '&key=AIzaSyCxqgKqZMHNzOV2TETOwjRJAUpuh3aeK1c'
  // }

  //this.initializeMap();
  }

  // directionsService = new google.maps.DirectionsService();
  // directionsDisplay = new google.maps.DirectionsRenderer();

  // startPosition: any;
  // originPosition: string;
  // destinationPosition: string;

  // initializeMap() {
  //   this.startPosition = new google.maps.LatLng(-21.763409, -43.349034);

  //   const mapOptions = {
  //     zoom: 18,
  //     center: this.startPosition,
  //     disableDefaultUI: true
  //   }

  //   this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
  //   this.directionsDisplay.setMap(this.map);

  //   const marker = new google.maps.Marker({
  //     position: this.startPosition,
  //     map: this.map,
  //   });
  // }

  // calculateRoute() {
  //   if (this.destinationPosition && this.originPosition) {
  //     const request = {
  //       // Pode ser uma coordenada (LatLng), uma string ou um lugar
  //       origin: this.originPosition,
  //       destination: this.destinationPosition,
  //       travelMode: 'DRIVING'
  //     };

  //     this.traceRoute(this.directionsService, this.directionsDisplay, request);
  //   }
  // }

  // traceRoute(service: any, display: any, request: any) {
  //   service.route(request, function (result, status) {
  //     if (status == 'OK') {
  //       display.setDirections(result);
  //     }
  //   });
  // }

  
}
