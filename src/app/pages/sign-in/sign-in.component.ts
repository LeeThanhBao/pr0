import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private auth: AngularFireAuth,private router: Router  ) { }
  public user: firebase.default.UserInfo

  ngOnInit(): void {
this.auth.authState.subscribe((user) => {
      if (user) {
        this.user = user;
      }
    });
  }
  ngOnDestroy(): void {
    this.user = null;
  }

  async login() {
    const provider = new firebase.default.auth.GoogleAuthProvider();
    try {
      await this.auth.signInWithPopup(provider);
      this.router.navigate(['note-page']);
    }
    catch (err) {
      alert("login failed");
    }
  }

  async signOut() {
    try {
      await this.auth.signOut();
      this.user = null;
      this.router.navigate(['']);
    } catch (err) {
      alert("Sigout failed");

    }
  }

}
