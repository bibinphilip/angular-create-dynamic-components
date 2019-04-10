import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component1 } from './component1.component';
import { Component2 } from './component2.component';

const routes: Routes = [
  { path: 'ComponentFactoryResolver', component: Component1 },
  { path: 'ngComponentOutlet', component: Component2 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
