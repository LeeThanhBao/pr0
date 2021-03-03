import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './pages/footer/footer.component';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const config = {
  apiKey: "AIzaSyAPUq073NCzk_Cw2ex0yIzNnHSyacb_5eo",
    authDomain: "memos-a4a21.firebaseapp.com",
    projectId: "memos-a4a21",
    storageBucket: "memos-a4a21.appspot.com",
    messagingSenderId: "425019375866",
    appId: "1:425019375866:web:b15b9b8016300549998943",
    measurementId: "G-TFK0VLYVSV"
};

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
