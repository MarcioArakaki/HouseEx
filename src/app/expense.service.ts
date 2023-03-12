import { Injectable } from '@angular/core';
import { Expense } from './expense';
import { EXPENSES } from './mock-expenses';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private expensesUrl = "http://localhost:5000/Expenses";
  
  constructor(private messageService: MessageService, private http: HttpClient) { }

  getExpense(id: number): Observable<Expense> {
    this.Log(`fetched expense id=${id}`);
    return  this.http.get<Expense>(`${this.expensesUrl}/${id}`);
  }

  getExpenses(): Observable<Expense[]> {
    this.Log(`fetched expenses`);
    return this.http.get<Expense[]>(this.expensesUrl);
  }

  private Log(message: string)
  {
    this.messageService.add(`ExpenseService: ${message}`);
  }
  
}
