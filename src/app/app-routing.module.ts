import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'calculate-loan', loadChildren: () => import('./pages/calculate-loan/calculate-loan.module').then(m => m.CalculateLoanModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
