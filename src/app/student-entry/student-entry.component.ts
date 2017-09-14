import { Component, OnInit } from '@angular/core';
import { SharedService } from "../shared.service";

@Component({
  selector: 'app-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent implements OnInit {

  constructor(private dataStore: SharedService) { }

  ngOnInit() {
  }

  onSubmit(nameForm){
    this.dataStore.addNewStud(nameForm.value.num, nameForm.value.fname, nameForm.value.lname, nameForm.value.prog, nameForm.value.yr)
    nameForm.reset();
  }

}