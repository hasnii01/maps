import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GmapsComponent } from './gmaps/gmaps.component';
import { BmapsComponent } from './bmaps/bmaps.component';

const routes: Routes = [
  {path: 'gmap', component: GmapsComponent},
  {path: 'bmaps', component: BmapsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
