import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapViewPage } from '../map-view/map-view';

@Component({
  selector: 'page-terms-and-conditions',
  templateUrl: 'terms-and-conditions.html'
})
export class TermsAndConditionsPage {

  constructor(public navCtrl: NavController) {
  }
  goToMapView(params){
    if (!params) params = {};
    this.navCtrl.push(MapViewPage);
  }
}
