import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFooter, IonButton, IonIcon, IonCard, IonInput } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import { logoIonic } from 'ionicons/icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
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
    RouterModule,
    IonIcon,
    IonCard,
    IonInput,]
})
export class RegisterPage implements OnInit {

  constructor(private location: Location) {
    addIcons({ logoIonic });
  }
  goBack() {
    this.location.back();
  }

  ngOnInit() {
  }

}
