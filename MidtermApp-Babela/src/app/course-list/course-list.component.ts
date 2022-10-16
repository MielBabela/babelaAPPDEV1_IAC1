import { Component,Input,  OnInit } from '@angular/core';

import {Course} from '../courses'
import {COURSES} from '../samp.courses'

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses=COURSES;
  title="course info";
  @Input() course?: Course[] = []; //pass input to other compnents
  selectedCourse?: Course;
  onSelect(course: Course): void{
    this.selectedCourse = course;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
