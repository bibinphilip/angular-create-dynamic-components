import { Component, OnInit, ComponentRef, Injector } from '@angular/core';
import { NgDynamicComponent } from './dynamic-ng-dynamic-component/ng-dynamic-component.component';
import { ProjectStructureModel } from './Models/project-structure.model';
import { ProjectStructureFactory } from './Services/project-structure.factory';

@Component({
  selector: 'app-component3',
  template: `<ndc-dynamic [ndcDynamicComponent]="currentComponent" [ndcDynamicInjector]="injectData"
  [ndcDynamicInputs]="dynamicComponentInputs" (ndcDynamicCreated)="componentCreated($event)">
</ndc-dynamic>`,
  styleUrls: []
})
export class Component3 implements OnInit {

  dynamicComponentInputs: any;
  injectData: Injector;
  currentComponent = NgDynamicComponent;

  constructor() {
    // pass data to the dynamic component using Injector
    const prjstructDetail = new ProjectStructureModel();
    prjstructDetail.Title = 'ngDynamicComponent Plugin example';

    // inject the necessary data
    this.injectData = Injector.create({
      providers: [
        { provide: ProjectStructureModel, useValue: prjstructDetail },
        { provide: 'ProjectDetails', useFactory: ProjectStructureFactory(), deps: [ProjectStructureModel] }
      ]
    });

    // set data to dynamic component's properties
    this.dynamicComponentInputs = {
      ImageUrl: '../../assets/prj_struct2.png'
    };
  }

  ngOnInit() {
  }

  componentCreated(compRef: ComponentRef<any>) {
    console.log('component created');
  }

}
