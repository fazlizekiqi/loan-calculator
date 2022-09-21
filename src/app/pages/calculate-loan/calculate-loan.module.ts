import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculateLoanComponent } from './calculate-loan.component';
import { Routes } from "@angular/router";
import { CalculateLoanRoutingModule } from "./calculate-loan-routing.module";
import { NzInputNumberModule } from "ng-zorro-antd/input-number";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NzFormItemComponent, NzFormModule } from "ng-zorro-antd/form";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzResultModule } from "ng-zorro-antd/result";

@NgModule({
  declarations: [
    CalculateLoanComponent
  ],
  imports: [
    CommonModule,
    CalculateLoanRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    NzFormModule,
    NzCardModule,
    NzButtonModule,
    NzIconModule,
    NzResultModule,
    NzInputNumberModule
  ]
})
export class CalculateLoanModule { }
