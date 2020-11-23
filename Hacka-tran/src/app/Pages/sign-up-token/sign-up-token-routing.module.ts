import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpTokenPage } from './sign-up-token.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpTokenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpTokenPageRoutingModule {}
