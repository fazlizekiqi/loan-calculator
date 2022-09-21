import { RouterModule, Routes } from "@angular/router";
import { CalculateLoanComponent } from "./calculate-loan.component";
import { NgModule } from "@angular/core";


const routes: Routes = [
  {
    path: '',
    component: CalculateLoanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculateLoanRoutingModule {}
