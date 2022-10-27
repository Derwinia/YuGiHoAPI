import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YugihoComponent } from './yugiho/yugiho.component';

const routes: Routes = [
  {path : '', redirectTo : 'YuGiHo', pathMatch : 'full'},
  {path : 'YuGiHo', component : YugihoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
