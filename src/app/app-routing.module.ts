import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JapanComponent} from './japan/japan.component';
import {SidenavComponent} from './sidenav/sidenav.component';


const routes: Routes = [
  {path: '', component: SidenavComponent,
    children: [
      {path: '', component: JapanComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true, useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
