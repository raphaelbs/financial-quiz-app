import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EulaResolver } from './eula-dialog/eula.resolver';
import { InvestmentProfileComponent } from './investment-profile/investment-profile.component';
import { SummaryComponent } from './summary/summary.component';
import { SummaryResolver } from './summary/summary.resolver';
import { InvestmentProfileResolver } from './investment-profile/investment-profile.resolver';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'perfil',
        component: InvestmentProfileComponent,
        resolve: { form: InvestmentProfileResolver }
      },
      {
        path: 'sumario',
        component: SummaryComponent,
        resolve: { formOutput: SummaryResolver }
      },
      {
        path: '**',
        component: HomeComponent,
        resolve: { eula: EulaResolver }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
