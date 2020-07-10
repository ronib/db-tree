import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TreeContainerComponent } from './components/tree-container/tree-container.component';
import { NodeComponent } from './components/node/node.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NodeLabelComponent } from './components/node-label/node-label.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TreeContainerComponent,
    NodeComponent,
    NodeLabelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
