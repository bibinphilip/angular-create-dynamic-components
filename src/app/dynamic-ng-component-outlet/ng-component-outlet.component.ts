import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { BaseForm } from '../Models/base-form.model';
import { ComponentInfoService } from '../Services/component-info.service';
import { ProjectStructureModel } from '../Models/project-structure.model';

@Component({
  selector: 'app-ng-component-outlet',
  templateUrl: './ng-component-outlet.component.html',
  styleUrls: []
})
export class NgComponentOutletComponent extends BaseForm implements OnInit, OnDestroy {

  constructor(public prjDetail: ProjectStructureModel, private componentInfoService: ComponentInfoService) { super(); }

  ngOnInit() {
    this.componentInfoService.sendComponent(this);
  }

  ngOnDestroy(): void {
    this.componentInfoService.clear();
  }

}
