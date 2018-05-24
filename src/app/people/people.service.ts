import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Person } from '../models/person';
 
@Injectable()
export class PeopleService {
  constructor(private http: Http) { }
 
  getPeople(){
    return [
      {'name': 'John', 'age':21},
      {'name': 'Anna', 'age':22},
      {'name': 'Kate', 'age':34},
      {'name': 'Mark', 'age':18},
      {'name': 'Steve', 'age':29}
    ]
  }

  getTime() {
     return this.http.get("http://date.jsontest.com");
  }

  sendPerson(person) {
    console.log(person);
  }

}
