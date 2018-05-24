import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PeopleService } from '../people/people.service';

@Component({
  selector: 'app-testc',
  templateUrl: './testc.component.html',
  styleUrls: ['./testc.component.css'],
  providers: [PeopleService]
})
export class TestcComponent implements OnInit {
  helloText = "hello";
  allowClick = true;
  clickText = "not clicked";
  testText= "";
  show = false;
  arr = ["one", "two", "three", "four"];
  people = [];
  currentDate = null;

  constructor(private peopleService: PeopleService) {}


  ngOnInit() {
    this.people = this.peopleService.getPeople();
    this.peopleService.getTime().subscribe(
          data => { this.currentDate = data.json();}
    );
  }

  onClickFunc() {
    this.clickText = "clicked";
    this.allowClick = false;
  }

  showContent() {
    this.show = !this.show;
  }


}
