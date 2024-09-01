import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFooter, IonButton } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-firstlogin',
  templateUrl: './firstlogin.page.html',
  styleUrls: ['./firstlogin.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonFooter,
    IonButton,
    RouterModule,]
})
export class FirstloginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


}
