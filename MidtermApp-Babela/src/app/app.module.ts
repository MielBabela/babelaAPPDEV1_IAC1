import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './navi/navi.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseInfoComponent } from './course-info/course-info.component';
import { ArticlesComponent } from './articles/articles.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { ContactsInfoComponent } from './contacts-info/contacts-info.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    CourseListComponent,
    CourseInfoComponent,
    ArticlesComponent,
    AddCourseComponent,
    ContactsInfoComponent,
    HomeComponent,
    CourseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
