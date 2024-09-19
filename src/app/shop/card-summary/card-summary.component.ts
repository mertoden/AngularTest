import { Component } from '@angular/core';
import { Card } from '../../model/card.model';

@Component({
  selector: 'card-summary',
  templateUrl: './card-summary.component.html',
  styleUrls: ['./card-summary.component.css'] // styleUrl değil styleUrls olmalı
})
export class CardSummaryComponent {

  // Constructor doğru bir şekilde sınıfın içinde olmalı
  constructor(public card: Card) {}

}
