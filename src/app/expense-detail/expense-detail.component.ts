import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Expense } from '../expense';
import { ExpenseService } from '../services/expense.service';

@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.component.html',
  styleUrls: ['./expense-detail.component.scss']
})
export class ExpenseDetailComponent {
  @Input() expense?: Expense;


  constructor(
    private route: ActivatedRoute,
    private expenseService: ExpenseService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getExpense();
  }

  getExpense(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.expenseService.getExpense(id)
      .subscribe(expense => this.expense = expense);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.expense) {
      this.expenseService.updateExpense(this.expense)
        .subscribe(() => this.goBack());
    }

  }
}
