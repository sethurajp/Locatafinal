import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapViewPage } from '../map-view/map-view';

@Component({
  selector: 'page-route-map',
  templateUrl: 'route-map.html'
})
export class RouteMapPage {

  constructor(public navCtrl: NavController) {
  }
  goToMapView(params){
    if (!params) params = {};
    this.navCtrl.push(MapViewPage);
  }
}
