import { Component } from '@angular/core';
import { Expense} from '../expense';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss'],
  
})


export class ExpensesComponent {
  expense : Expense = {
    id: 1,
    name : "Internet"
  };
}


