import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people/people.service';
import { Person } from '../models/person';

@Component({
selector: 'app-testr',
templateUrl: './testr.component.html',
styleUrls: ['./testr.component.css'],
providers: [PeopleService]
})
export class TestrComponent implements OnInit {
	model = new Person('', 0);

	 constructor(private peopleService: PeopleService) { }
	ngOnInit() {  }
	onSubmit() { this.peopleService.sendPerson(this.model); }
}
