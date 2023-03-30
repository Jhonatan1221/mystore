import { Component, Input } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  showImg = true;


  onLoaded(img: string) {
    console.log('Log padre');
  }
  toggleImg(){
    this.showImg = !this.showImg;
  }
}

