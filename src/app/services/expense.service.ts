import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Expense } from '../expense';


@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private expensesUrl = "http://localhost:5000/Expenses";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private messageService: MessageService, private http: HttpClient) { }

  getExpense(id: number): Observable<Expense> {
    return this.http.get<Expense>(`${this.expensesUrl}/${id}`)
      .pipe(
        tap(_ => this.log(`fetched expense id=${id}`)),
        catchError(this.handleError<Expense>(`getExpense id=${id}`)));
  }

  getExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>(this.expensesUrl)
      .pipe(
        tap(_ => this.log('fetched expenses')),
        catchError(this.handleError<Expense[]>('getExpenses',[])));
  }

  updateExpense(expense: Expense): Observable<any> {
    return this.http.put<Expense>(`${this.expensesUrl}/${expense.id}`, expense,this.httpOptions)
      .pipe(
        tap(_ => this.log(`update expense id=${expense.id}`)),
        catchError(this.handleError<any>(`updateExpense id=${expense.id}`)));
  }

  createExpense(expense: Expense): Observable<any> {
    return this.http.post<Expense>(this.expensesUrl, expense,this.httpOptions)
      .pipe(
        tap((newExpense: Expense) => this.log(`added expense w/ id=${newExpense.id}`)),
        catchError(this.handleError<any>('createExpense')));
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
    
    
  }

  private log(message: string)
  {
    this.messageService.add(`ExpenseService: ${message}`);
  }

 
  
}
