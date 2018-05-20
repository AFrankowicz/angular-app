import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { TestcComponent } from './testc/testc.component';
import { PeopleService } from './people/people.service';
import { TestrComponent } from './testr/testr.component';

const appRoutes: Routes = [
  { path: '', component: TestcComponent, pathMatch: 'full'},
  { path: 'testr', component: TestrComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TestcComponent,
    TestrComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
