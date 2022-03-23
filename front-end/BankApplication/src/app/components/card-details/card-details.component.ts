import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditCard } from 'src/app/models/credit-card.model';
import { CreditCardService } from 'src/app/services/credit-card.service';
@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CreditCardDetailsComponent implements OnInit {
  @Input() viewMode = false;
  @Input() currentCreditCard: CreditCard = {
    accountNr: '',
    owner: '',
    balance: 0
  };


  message = '';
  constructor(
    private creditCardService: CreditCardService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getCreditCard(this.route.snapshot.params["id"]);
    }
  }

  getCreditCard(id: string): void {
    this.creditCardService.get(id)
      .subscribe({
        next: (data) => {
          this.currentCreditCard = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  updateBalance(newBalance: number): void {
    const data = {
      title: this.currentCreditCard.accountNr,
      description: this.currentCreditCard.owner,
      balance: newBalance
    };
    this.message = '';
    this.creditCardService.update(this.currentCreditCard.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentCreditCard.balance = newBalance;
          this.message = res.message ? res.message : 'The balance was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }
  updateCreditCard(): void {
    this.message = '';
    this.creditCardService.update(this.currentCreditCard.id,
      this.currentCreditCard)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This card was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }
  deleteCreditCard(): void {
    this.creditCardService.delete(this.currentCreditCard.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/credit-cards']);
        },
        error: (e) => console.error(e)
      });
  }
}


