import { Injectable, ViewRef } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentInfoService {
  private subject = new Subject<any>();

  constructor() { }

  clear() {
    this.subject.next();
  }

  destroy() {
    this.subject.unsubscribe();
  }

  getComponent(): Observable<any> {
    return this.subject.asObservable();
  }

  sendComponent(domElement: any) {
    this.subject.next(domElement);
  }
}
