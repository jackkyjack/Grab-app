import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRefresher, IonRefresherContent, IonFooter, IonButton, IonIcon, IonCard, IonInput, IonSearchbar, IonSegment, IonSegmentButton, IonLabel, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonCol, IonGrid, IonRow } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import { logoIonic } from 'ionicons/icons';

@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
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
export class FoodPage {

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
    { title: '1test', image: '../assets/images/foods/images.jpg', rating: 1, price: 10, type:"fast food", distance: 1, waitTime: 10 },
    { title: '2test', image: '../assets/images/foods/images.jpg', rating: 2, price: 20, type:"noodle", distance: 2, waitTime: 20 },
    { title: '3test', image: '../assets/images/foods/images.jpg', rating: 3, price: 30, type:"snack", distance: 3, waitTime: 30 },
    { title: '4test', image: '../assets/images/foods/images.jpg', rating: 4, price: 40, type:"tea", distance: 4, waitTime: 40 },
    { title: '5test', image: '../assets/images/foods/images.jpg', rating: 5, price: 50, type:"coffee", distance: 5, waitTime: 50 },
    { title: '6test', image: '../assets/images/foods/images.jpg', rating: 6, price: 60, type:"ham", distance: 6, waitTime: 60 },
    { title: '7test', image: '../assets/images/foods/images.jpg', rating: 7, price: 70, type:"pizza", distance: 7, waitTime: 70 },
    { title: '8test', image: '../assets/images/foods/images.jpg', rating: 8, price: 80, type:"rice", distance: 8, waitTime: 80 },
    { title: '9test', image: '../assets/images/foods/images.jpg', rating: 9, price: 90, type:"chiken", distance: 9, waitTime: 90 },
  ];  

  public result = [...this.shops];

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.result = this.shops.filter(item =>item.title.toLowerCase().includes(query));
  }


  ngOnInit() {
  }

}
