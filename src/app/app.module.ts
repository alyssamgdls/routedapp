import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentEntryComponent } from "./student-entry/student-entry.component";
import { StudentDisplayComponent } from "./student-display/student-display.component";
import { SharedService } from "./shared.service";

const navRoutes: Routes = [
  {path: 'entry', component: StudentEntryComponent},
  {path: 'display', component: StudentDisplayComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    StudentEntryComponent,
    StudentDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(navRoutes)

  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
