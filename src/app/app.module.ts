import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoadingMediatorComponent } from './loading-mediator/loading-mediator.component';
import { TemplateLoaderComponent } from './loading-mediator/template-loader/template-loader.component';
import { SpinnerComponent } from './loading-mediator/spinner/spinner.component';
import { ListDisplayerComponent } from './list-displayer/list-displayer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingMediatorComponent,
    TemplateLoaderComponent,
    SpinnerComponent,
    ListDisplayerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
