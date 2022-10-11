import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MidtermApp-Babela';
  fname = "Ivan Miel"
  lname = "Babela"
  userIMG = "/assets/images/noot-noot-apocalypse.gif"
  type ="Student"
  isUnchanged = true;
  currentUser =this.lname +" "+ this.fname
  classes = 'special';
  anotherClass = 'happy';
  parentCourse = 'BS Computer Science'
  constructor() {}
}
