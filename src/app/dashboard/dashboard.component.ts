import { Component } from '@angular/core';
import { Expense } from '../expense';
import { ExpenseService } from '../services/expense.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {

  expenses: Expense[] = [];

  constructor(private expenseService: ExpenseService) { 
  }

  ngOnInit(): void {
    this.GetExpenses();
  }

  GetExpenses(): void {
    this.expenseService.getExpenses()
      .subscribe(expenses => this.expenses = expenses.slice(0,4));
  }
}
