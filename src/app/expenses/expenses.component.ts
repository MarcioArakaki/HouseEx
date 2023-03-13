import { Component } from '@angular/core';
import { Expense} from '../expense';
import { ExpenseService } from '../services/expense.service';
import { MessageService } from '../services/message.service';

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
  
  add(name : string, value: number): void {
    name = name.trim();
    if (!name) {return;}
    this.expenseService.createExpense({ name, value } as Expense)
      .subscribe(expense => {
        this.expenses.push(expense);
      });;
  }


}


