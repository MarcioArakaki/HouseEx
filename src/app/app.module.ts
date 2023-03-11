import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { MessagesComponent } from './messages/messages.component';
import { ExpenseDetailComponent } from './expense-detail/expense-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ExpensesComponent,
    MessagesComponent,
    ExpenseDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
