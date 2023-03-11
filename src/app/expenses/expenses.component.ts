import { Component } from '@angular/core';
import { Expense} from '../expense';
import { ExpenseService } from '../expense.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss'],
  
})




export class ExpensesComponent {
  expenses: Expense[] = [];

  selectedExpense?: Expense;

  constructor(private expenseService: ExpenseService, public messageService: MessageService) {
  
  }
  
  ngOnInit(): void {
    this.getExpenses();
  }

  getExpenses(): void{
    this.expenseService.getExpenses()
            .subscribe(expenses => this.expenses = expenses);
  }

  onSelect(expense: Expense): void {
    this.selectedExpense = expense;
    this.messageService.add(`ExpensesComponent: Selected expense id=${expense.name}`);
  }

}


