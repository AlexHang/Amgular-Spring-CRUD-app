import { Component, OnInit } from '@angular/core';
import { CreditCard } from 'src/app/models/credit-card.model';
import { CreditCardService } from 'src/app/services/credit-card.service';
@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})

export class CardsListComponent implements OnInit {
  creditCards?: CreditCard[];
  currentcreditCard: CreditCard = {};
  currentIndex = -1;
  account = '';

  constructor(private creditCardService: CreditCardService) { }
  ngOnInit(): void {
    this.retrievecreditCards();
  }
  retrievecreditCards(): void {
    this.creditCardService.getAll()
      .subscribe({
        next: (data) => {
          this.creditCards = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  refreshList(): void {
    this.retrievecreditCards();
    this.currentcreditCard = {};
    this.currentIndex = -1;
  }
  setActivecreditCard(creditCard: CreditCard, index: number): void {
    this.currentcreditCard = creditCard;
    this.currentIndex = index;
  }
  removeAllcreditCards(): void {
    this.creditCardService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }
  searchAccount(): void {
    this.currentcreditCard = {};
    this.currentIndex = -1;
    this.creditCardService.findByAccount(this.account)
      .subscribe({
        next: (data) => {
          this.creditCards = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}

