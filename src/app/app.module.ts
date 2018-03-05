import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EChartOptionDirective } from './directive/echart-option.directive';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    EChartOptionDirective
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
