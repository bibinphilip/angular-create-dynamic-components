import { Component, OnInit, ViewChild, ViewContainerRef, Injector, ComponentFactoryResolver } from '@angular/core';
import { ComponentFactoryResolverComponent } from './dynamic-component-factory-resolver/component-factory-resolver.component';
import { ProjectStructureModel } from './Models/project-structure.model';
import { ProjectStructureFactory } from './Services/project-structure.factory';
import { BaseForm } from './Models/base-form.model';

@Component({
  selector: 'app-component1',
  template: '<ng-container #viewContainer></ng-container>',
  styleUrls: []
})
export class Component1 implements OnInit {

  @ViewChild('viewContainer', { read: ViewContainerRef }) viewContainer: ViewContainerRef;
  injectData: Injector;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.createTemplate();
  }

  createTemplate(): void {
    // pass data to the dynamic component using Injector
    const prjDetail = new ProjectStructureModel();
    prjDetail.Title = 'ComponentFactoryResolver example';

    // inject the necessary data
    this.injectData = Injector.create({
      providers: [
        { provide: ProjectStructureModel, useValue: prjDetail },
        { provide: 'ProjectDetails', useFactory: ProjectStructureFactory(), deps: [ProjectStructureModel] }
      ]
    });

    this.viewContainer.clear();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ComponentFactoryResolverComponent);
    const componentRef = this.viewContainer.createComponent(componentFactory, 0, this.injectData);

    const createdComponent: BaseForm = componentRef.instance;

    // set data to dynamic component's properties
    createdComponent.ImageUrl = '../../assets/prj_struct0.png';
  }

}
