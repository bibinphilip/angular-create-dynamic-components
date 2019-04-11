import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgComponentOutletComponent } from './dynamic-ng-component-outlet/ng-component-outlet.component';
import { ComponentFactoryResolverComponent } from './dynamic-component-factory-resolver/component-factory-resolver.component';
import { Component2 } from './component2.component';
import { Component1 } from './component1.component';
import { Component3 } from './component3.component';
import { NgDynamicComponent } from './dynamic-ng-dynamic-component/ng-dynamic-component.component';
import { DynamicModule } from 'ng-dynamic-component';

@NgModule({
   declarations: [
      AppComponent,
      NgComponentOutletComponent,
      ComponentFactoryResolverComponent,
      Component1,
      Component2,
      Component3,
      NgDynamicComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      DynamicModule.withComponents([NgDynamicComponent]),
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ],
   entryComponents: [
      ComponentFactoryResolverComponent,
      NgComponentOutletComponent      
   ]
})
export class AppModule { }
