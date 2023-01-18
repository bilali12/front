import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddstudentComponent } from './components/addstudent/addstudent.component';
import { AddsubjectComponent } from './components/addsubject/addsubject.component';
import { ViewsubjectComponent } from './components/viewsubject/viewsubject.component';
import { ViewstudentComponent } from './components/viewstudent/viewstudent.component';
import { UpdatestudentComponent } from './components/updatestudent/updatestudent.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddstudentComponent,
    AddsubjectComponent,
    ViewsubjectComponent,
    ViewstudentComponent,
    UpdatestudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
