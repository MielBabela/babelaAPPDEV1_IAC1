import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {Course} from 'src/app/courses'
@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {
  @Input() course?: Course;
  constructor() { }

  ngOnInit(): void {
  }

}
