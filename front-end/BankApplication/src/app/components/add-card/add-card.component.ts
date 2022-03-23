import { Component, OnInit } from '@angular/core';
import { CreditCard } from 'src/app/models/credit-card.model';
import { CreditCardService } from
'src/app/services/credit-card.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCreditCardComponent implements OnInit {
  creditCard: CreditCard = {
    id: '',
    accountNr: '',
    owner: '',
    balance: 0,
  };

  submitted = false;

  constructor(private creditCardService: CreditCardService) { }

  ngOnInit(): void {}

  saveCreditCard(): void {
    const data = {
      id: this.creditCard.id,
      accountNr: this.creditCard.accountNr,
      owner: this.creditCard.owner,
      balance: this.creditCard.balance,
    };
    this.creditCardService.create(data)
    .subscribe({
      next: (res) => {
      console.log(res);
      this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newCreditCard(): void {
    this.submitted = false;
    this.creditCard = {
      id: '',
      accountNr: '',
      owner: '',
      balance: 0,
    };
  }
}
    
