import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { AnnouncesComponentComponent } from '../app/announces-component/announces-component.component';
import { EstimateComponent } from "../app/estimate/estimate.component";
const routes: Routes = [
  {path: '', component: AppComponent, pathMatch: 'full'},
  { path: 'list', component: AnnouncesComponentComponent, pathMatch: 'full' },
  { path: 'estimate', component: EstimateComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
