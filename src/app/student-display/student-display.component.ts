import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-display',
  templateUrl: './student-display.component.html',
  styleUrls: ['./student-display.component.css']
})
export class StudentDisplayComponent implements OnInit {
  studColl: Array<object>;

  constructor(private dataStore: SharedService) { }

  ngOnInit() {
    this.studColl = this.dataStore.getStud();
  }

}