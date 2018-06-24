import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EulaResolver } from './eula-dialog/eula.resolver';
import { InvestmentProfileComponent } from './investment-profile/investment-profile.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'perfil',
        component: InvestmentProfileComponent
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
