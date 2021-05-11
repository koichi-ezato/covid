import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JapanComponent} from './japan/japan.component';
import {SidenavComponent} from './sidenav/sidenav.component';
import {WorldComponent} from './world/world.component';


const routes: Routes = [
  {path: '', component: SidenavComponent,
    children: [
      {path: '', component: JapanComponent},
      {path: 'world', component: WorldComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true, useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
