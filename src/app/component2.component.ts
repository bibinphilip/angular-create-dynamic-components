import { Component, OnInit, Injector } from '@angular/core';
import { ComponentInfoService } from './Services/component-info.service';
import { NgComponentOutletComponent } from './dynamic-ng-component-outlet/ng-component-outlet.component';
import { Subscription } from 'rxjs';
import { ProjectStructureModel } from './Models/project-structure.model';
import { ProjectStructureFactory } from './Services/project-structure.factory';
import { BaseForm } from './Models/base-form.model';

@Component({
  selector: 'app-component2',
  template: '<ng-container *ngComponentOutlet="currentComponent;injector:injectData;"></ng-container>',
  styleUrls: []
})
export class Component2 implements OnInit {

  injectData: Injector;
  currentComponent = NgComponentOutletComponent;
  subscription: Subscription;

  constructor(private componentInfoService: ComponentInfoService, injector: Injector) {
    // pass data to the dynamic component using Injector
    const prjDetail = new ProjectStructureModel();
    prjDetail.Title = 'ngComponentOutlet example';

    // inject the necessary data
    this.injectData = Injector.create({
      providers: [
        { provide: ProjectStructureModel, useValue: prjDetail },
        { provide: 'ProjectDetails', useFactory: ProjectStructureFactory(), deps: [ProjectStructureModel, this.componentInfoService] }
      ],
      parent: injector
    });
  }

  ngOnInit() {
    this.subscription = this.componentInfoService.getComponent().subscribe(data => {
      this.bindTemplate(data);
    });
  }

  bindTemplate(component: BaseForm): void {
    // set data to dynamic component's properties
    component.ImageUrl = '../../assets/prj_struct1.png';
  }

}
