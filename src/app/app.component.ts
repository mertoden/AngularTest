import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShopModule } from './shop/shop.module';

@Component({
  standalone: true,
  selector: 'root',
  template: '<shop></shop>',
  imports: [ShopModule]
})
export class AppComponent {
}
