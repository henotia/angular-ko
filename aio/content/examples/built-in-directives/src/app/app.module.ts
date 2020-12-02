import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// #docregion import-forms-module
import { FormsModule } from '@angular/forms'; // <--- FormsModule 패키지 로드
// #enddocregion import-forms-module


import { AppComponent } from './app.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemSwitchComponents } from './item-switch.component';


// #docregion import-forms-module
@NgModule({
  // #enddocregion import-forms-module
  declarations: [
    AppComponent,
    ItemDetailComponent,
    ItemSwitchComponents
  ],
  // #docregion import-forms-module

  imports: [
    BrowserModule,
    FormsModule // <--- NgModule에 로드
  ],
  // #enddocregion import-forms-module
  providers: [],
  bootstrap: [AppComponent]
  // #docregion import-forms-module
})
export class AppModule { }
// #enddocregion import-forms-module
