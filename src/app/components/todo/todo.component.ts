import {Directive, ElementRef, Injector} from '@angular/core';
import {UpgradeComponent} from '@angular/upgrade/static';

@Directive({
  selector: 'app-todo'
})
export class TodoDirective extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super('app-todo', elementRef, injector);
  }
}
