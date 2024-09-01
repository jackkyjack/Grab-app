import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRefresher, IonRefresherContent, IonFooter, IonButton, IonIcon, IonCard, IonInput, IonSearchbar, IonSegment, IonSegmentButton, IonLabel, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonCol, IonGrid, IonRow } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import { logoIonic } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
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
    IonInput,
    IonSearchbar,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonList,
    IonItem,
    IonCol,
    IonGrid,
    IonRow,
    IonRefresher,
    IonRefresherContent,],
})
export class HomePage {

  selectedValue: string = 'home';

  constructor(private location: Location) {
    addIcons({ logoIonic });
    this.shuffleArray(this.result);
  }

  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      this.shuffleArray(this.result);
      event.target.complete();
    }, 1000);
  }

  onSegmentChange(event: any) {
    this.selectedValue = event.detail.value;
    
  }

  goBack() {
    this.location.back();
  }

  public shops = [
    { title: '1test', image: '../assets/images/foods/images.jpg', rating: 1 , distance: 1 },
    { title: '2test', image: '../assets/images/foods/images.jpg', rating: 2 , distance: 2 },
    { title: '3test', image: '../assets/images/foods/images.jpg', rating: 3 , distance: 3 },
    { title: '4test', image: '../assets/images/foods/images.jpg', rating: 4 , distance: 4 },
    { title: '5test', image: '../assets/images/foods/images.jpg', rating: 5 , distance: 5 },
    { title: '6test', image: '../assets/images/foods/images.jpg', rating: 6 , distance: 6 },
    { title: '7test', image: '../assets/images/foods/images.jpg', rating: 7 , distance: 7 },
    { title: '8test', image: '../assets/images/foods/images.jpg', rating: 8 , distance: 8 },
    { title: '9test', image: '../assets/images/foods/images.jpg', rating: 9 , distance: 9 },
  ];  

  public result = [...this.shops];

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.result = this.shops.filter(item =>item.title.toLowerCase().includes(query));
  }

}
