import { Component, OnInit, Input } from '@angular/core';
import { BaseForm } from '../Models/base-form.model';
import { ProjectStructureModel } from '../Models/project-structure.model';

@Component({
  selector: 'app-dynamic-ng-dynamic-component',
  templateUrl: './ng-dynamic-component.component.html',
  styleUrls: []
})
export class NgDynamicComponent extends BaseForm implements OnInit {

  constructor(public prjDetail: ProjectStructureModel) { super(); }

  ngOnInit() {
  }

}
