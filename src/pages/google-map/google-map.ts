import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare let google:any;
/**
 * Generated class for the GoogleMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-google-map',
  templateUrl: 'google-map.html',
})
export class GoogleMapPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  marker: any;
  selectedPosition: any;
  callbackToPrevious: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation, private toastCtrl: ToastController) {
    this.callbackToPrevious = this.navParams.get('callback');
  }

  ionViewDidLoad() {
    console.log("finished load");
    this.loadMap();
  }

  loadMap() {
    console.log("start load map");
    let latLng = new google.maps.LatLng(13.652516, 100.493703);
    let mapOptions = {
      center: new google.maps.LatLng(13.651960, 100.495096),
      zoom: 6,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.geolocation.getCurrentPosition({ timeout: 10000, enableHighAccuracy: true }).then((position) => {
      mapOptions.zoom = 17;
      latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      mapOptions.center = latLng;
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    },(err) => {
      console.log("Geolocation Not Pass");
      console.log(err);
    });

    // let mapOptions = {
    //   center: latLng,
    //   zoom: 17,
    //   mapTypeId: google.maps.MapTypeId.ROADMAP
    // }
    // this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

  addMarker() {
    if (this.marker) {
      this.marker.setMap(null);
    }
    this.marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.BOUNCE,
      position: this.map.getCenter()
    });
    this.selectedPosition = { lat: this.map.getCenter().lat(), lng: this.map.getCenter().lng() };
    let content = "ส่งของที่นี่";
    //this.callbackToPrevious("Test Data").then(()=>{this.navCtrl.pop()})
    this.addInfoWindow(this.marker, content);
  }

  addInfoWindow(marker, content) {
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }

  selectedPlace() {
    if (this.marker) {
      let geocoder = new google.maps.Geocoder;
      geocoder.geocode({ 'location': this.selectedPosition }, (results, status) => {
        if (status === 'OK') {
          if (results[0]) {
            console.log(results[0]);
            console.log();
            this.callbackToPrevious(results[0].formatted_address).then((() => { this.navCtrl.pop() }));
          } else {
            window.alert('No results found');
          }
        } else {
          window.alert('Geocoder failed due to: ' + status);
        }
      });
    } else {
      let toast = this.toastCtrl.create({
        message: 'กรุณา Mark สถานที่จัดส่งสินค้าก่อน',
        duration: 3000,
        position: 'bottom',
        showCloseButton: true
      });
      toast.present();
    }
  }

}
