import { Component,Input,  OnInit } from '@angular/core';

import {Course} from '../courses'
import {COURSES} from '../samp.courses'

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  listcourses=COURSES;
  @Input() courses: Course[] = []; //pass input to other compnents

  constructor() { }

  ngOnInit(): void {
  }

}
