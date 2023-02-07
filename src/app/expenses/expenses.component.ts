import { Component } from '@angular/core';
import { Expense} from '../expense';
import { EXPENSES} from '../mock-expenses';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss'],
  
})


export class ExpensesComponent {
  expenses = EXPENSES; 

  selectedExpense?: Expense;
  
  onSelect(expense: Expense): void {
    this.selectedExpense = expense;
  }

}


