import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Geofence } from '@ionic-native/geofence';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController, 
  	private geofence: Geofence,
  	private alertCtrl: AlertController) {
 geofence.initialize().then(
    // resolved promise does not return a value
    () => console.log('Geofence Plugin Ready'),
    (err) => console.log(err)
  )
  }

  private addGeofence() {
  //options describing geofence
  let fence = {
    id: '69ca1b88-6fbe-4e80-a4d4-ff4d3748acdb', //any unique ID
    latitude:       4.773722, //center of geofence radius
    longitude:      100.936871,
    radius:         50, //radius to edge of geofence in meters
    transitionType: 3, //see 'Transition Types' below
    notification: { //notification settings
        id:             1, //any unique ID
        title:          'Welcome to MCKK', //notification title
        text:           'Welcome to MCKK. Opemn bluetooth to get best used of the app', //notification body
        openAppOnClick: true //open app when notification is tapped
    }
  }

  this.geofence.addOrUpdate(fence).then(
     () => {
     	let alert = this.alertCtrl.create({
    title: 'Sucesfully added',
    subTitle: 'Sucesfully added lat: '+ 4.773722 +' and ' +location,
    buttons: ['OK']
  });
  alert.present();
     },
     (err) => {
     	let alert = this.alertCtrl.create({
    title: 'Fail to add',
    subTitle: 'Fail to add location',
    buttons: ['OK']
  });
  alert.present();
     }
   );
}

}
