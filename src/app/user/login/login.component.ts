import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showAlert = false;
  alertMsg = 'Please wait! We are logging to your account!';
  alertColor = 'blue';
  inSubmission = false;
  constructor(private auth: AngularFireAuth) {}
  credentials = {
    email: '',
    password: ''
  }
  async loggin() {
    this.showAlert = true;
    this.alertMsg = 'Please wait! We are logging to your account!';
    this.alertColor = 'blue';
    this.inSubmission = true;
    try {
      await this.auth.signInWithEmailAndPassword(
        this.credentials.email,
        this.credentials.password
      )
    } catch (error) {
      this.inSubmission = false;
      this.alertMsg = 'An unexpected error occured. Please try again later!'
      this.alertColor = 'red';
      console.log(error)
      return 
    }
   this.alertMsg = 'Success! You are now logged in!'
   this.alertColor = 'green';
  }
}
