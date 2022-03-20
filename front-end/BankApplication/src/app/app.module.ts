import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCardComponent } from './components/add-card/add-card.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';

import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
//update the routes array
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'cards', component: CardsListComponent },
  { path: 'cards/:id', component: CardsListComponent },
  { path: 'add', component: AddCardComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    AddCardComponent,
    CardDetailsComponent,
    CardsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //import the added modules
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
