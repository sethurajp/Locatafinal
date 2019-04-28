import { Component } from '@angular/core';
import { NavController, NavParams, } from 'ionic-angular';
import { User } from '../../models/user';
import{AngularFireAuth} from 'angularfire2/auth';
import { SignupPage } from '../signup/signup';
import { MapViewPage } from '../map-view/map-view';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  user = {} as User;

  constructor(private afAuth: AngularFireAuth,
     public navCtrl: NavController, public navParams: NavParams) {
  }

  async login(user: User){
    try {
    const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    if(result) {
     this.navCtrl.setRoot(MapViewPage);
    }
  }
  catch (e) {
    console.error(e);
  }
    }
    
  goToSignup(params){
    if (!params) params = {};
    this.navCtrl.push(SignupPage);}

}
