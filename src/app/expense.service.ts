import { Injectable } from '@angular/core';
import { Expense } from './expense';
import { EXPENSES } from './mock-expenses';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  
  constructor(private messageService: MessageService) { }

  getExpense(id: number): Observable<Expense> {
    const expense = EXPENSES.find(expense => expense.id === id)!;
    this.messageService.add(`ExpenseService: fetched expense id=${id}`);
    return of(expense);
  }

  getExpenses(): Observable<Expense[]> {
    const expenses = of(EXPENSES);
    this.messageService.add('ExpenseService: fetched expenses');
    return expenses
  }
  
}
