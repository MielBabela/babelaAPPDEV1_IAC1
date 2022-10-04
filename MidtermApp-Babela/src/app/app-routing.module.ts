import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { ArticlesComponent } from './articles/articles.component';
import { ContactsInfoComponent } from './contacts-info/contacts-info.component';
import { CourseInfoComponent } from './course-info/course-info.component';
import { CourseListComponent } from './course-list/course-list.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(
    [
    {path:'course-info', component: CourseInfoComponent},
    {path:'course-list', component: CourseListComponent},
    {path:'articles', component: ArticlesComponent},
    {path:'add-course', component: AddCourseComponent},
    {path:'contacts-info', component: ContactsInfoComponent }
    ]
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
