import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { Expense } from '../expense';


@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private expensesUrl = "http://localhost:5000/Expenses";
  
  constructor(private messageService: MessageService, private http: HttpClient) { }

  getExpense(id: number): Observable<Expense> {
    return this.http.get<Expense>(`${this.expensesUrl}/${id}`)
      .pipe(
        tap(_ => this.Log(`fetched expense id=${id}`)),
        catchError(this.handleError<Expense>(`getExpense id=${id}`)));
  }

  getExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>(this.expensesUrl)
      .pipe(
        tap(_ => this.Log('fetched expenses')),
        catchError(this.handleError<Expense[]>('getExpenses',[])));
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.Log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
    
  }

  private Log(message: string)
  {
    this.messageService.add(`ExpenseService: ${message}`);
  }
  
}
