import { Injectable } from '@angular/core';
import { Question } from './question.model';
import { teory } from './data';
import { signs } from './data';
import { intersections } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  TEORY = teory;
  SIGNS = signs;
  INTERSECTIONS = intersections;
  filteredTeory: Question[];
  practiceTestTeory: Question[] = [];
  practiceTestSigns: Question[]= [];
  practiceTestIntersections: Question[] = [];
  practiceTestQuestions: Question[] = [];

  getQuestions(field):Question[] {
    return [...field];
  }
  
  createSubarrays(field, numberOfQuestions, array){
    for(var i = 0; i < numberOfQuestions; i++){
      let randomNumber = Math.floor(Math.random() * field.length);
      array.push(field[randomNumber]);
      field.splice(randomNumber, 1);
    }
  }

  createPracticeTest(category) {
    this.practiceTestQuestions = [];
    let numberOfTeoryQuestions;
    this.filteredTeory =  [...this.TEORY].filter((question) => question.categories.includes(category));
    if(category === "A" || category === "B"){
      numberOfTeoryQuestions = 10;
    } else {
      numberOfTeoryQuestions = 15;
    }

    this.createSubarrays(this.filteredTeory, numberOfTeoryQuestions, this.practiceTestQuestions);
    this.createSubarrays([...this.SIGNS], 5, this.practiceTestQuestions);
    this.createSubarrays([...this.INTERSECTIONS], 5, this.practiceTestQuestions);
    return this.practiceTestQuestions;
  }

  constructor() { }
}
