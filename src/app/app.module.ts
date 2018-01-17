import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import 'angular';
import {UpgradeModule} from '@angular/upgrade/static';
import {AppComponent} from './app.component';

import '../old-app/todo';
import '../old-app/components/todo';
import {TodoDirective} from './components/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoDirective
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  providers: [{
    provide: '$scope',
    useFactory: i => i.get('$rootScope'),
    deps: ['$injector']
  }],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(private upgrade: UpgradeModule) {
    this.upgrade.bootstrap(document.body, ['todoApp'], {strictDi: true});
  }
}
