import { Component, OnInit } from '@angular/core';
import { NgComponentOutletComponent } from './dynamic-ng-component-outlet/ng-component-outlet.component';
import { ComponentFactoryResolverComponent } from './dynamic-component-factory-resolver/component-factory-resolver.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Dynamic components';

  dynamicComponents: any[] = [ComponentFactoryResolverComponent, NgComponentOutletComponent];
  
  constructor(public router: Router) {
  }

  ngOnInit(): void {
  }
}
