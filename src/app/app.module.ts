import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import 'angular';
import {UpgradeModule} from '@angular/upgrade/static';
import {AppComponent} from './app.component';

import '../old-app/todo';
import '../old-app/components/todo';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {
  }

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['todoApp'], {strictDi: true});
  }
}
