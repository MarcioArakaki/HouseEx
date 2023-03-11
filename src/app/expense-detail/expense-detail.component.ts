import { Component, Input } from '@angular/core';
import { Expense } from '../expense';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.component.html',
  styleUrls: ['./expense-detail.component.scss']
})
export class ExpenseDetailComponent {
  @Input() expense?: Expense;
}
