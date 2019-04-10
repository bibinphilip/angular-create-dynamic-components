import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { BaseForm } from '../Models/base-form.model';
import { ProjectStructureModel } from '../Models/project-structure.model';

@Component({
  selector: 'app-component-factory-resolver',
  templateUrl: './component-factory-resolver.component.html',
  styleUrls: []
})
export class ComponentFactoryResolverComponent extends BaseForm implements OnInit, OnChanges {

  constructor(public prjDetail: ProjectStructureModel) { super(); }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }
}
