import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from "@angular/forms";


@Component({
  selector: 'app-calculate-loan',
  templateUrl: './calculate-loan.component.html',
  styleUrls: ['./calculate-loan.component.css']
})
export class CalculateLoanComponent implements OnInit {

  formatterPercent = (value: number): string => `${value} %`;
  parserPercent = (value: string): string => value.replace(' %', '');

  calculateLoanForm: FormGroup = this.fb.group({
    totalLoans: [1, [Validators.required]],
    loanAmount: [0, [Validators.required]],
    interestRate: [0, [Validators.required]],
    amortering: [0, [Validators.required]],
    manadsavgift: [0, [Validators.required]],
  });
  totalAmountPerMonth: number = 0;
  totalAmountForInterestRate: number = 0;
  totalAmountWithoutInterestRate: number = 0;

  constructor(private  fb : FormBuilder) {}

  ngOnInit(): void {
    this.calculateLoanForm.valueChanges.subscribe(() => this.submitForm())
  }

  submitForm() {
    const {interestRate, loanAmount, totalLoans, amortering, manadsavgift} = this.calculateLoanForm.value
    const rate = interestRate / 100;

    const singleLoanCost = loanAmount * rate / 12;
    this.totalAmountForInterestRate =  singleLoanCost * totalLoans;
    this.totalAmountPerMonth = singleLoanCost * totalLoans + +amortering + +manadsavgift;
    this.totalAmountWithoutInterestRate  = +amortering + +manadsavgift;
  }

}
