import { Component } from '@angular/core';
import { User } from '../../models/user';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import {AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  user = {} as User;

  constructor(private afAuth:AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  async register(user: User) {
    try {
    const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    console.log(result);
    }
    catch (e) {
      console.error(e);
    }}

  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToSignup(params){
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }
}
