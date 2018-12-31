import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Question } from '../question.model';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {
  
  checkboxVisibility: boolean = true;
  teory: Question[];
  filteredTeory: Question[];
  signs: Question[];
  intersections: Question[];

  constructor(private dataService:DataService) { }

  erraseYourAnswers(): void {
    this.checkboxVisibility = !this.checkboxVisibility;

  }

  showAnswers(question): void {
    question.correctAnswersVisibility = !question.correctAnswersVisibility;
  }

  filterQuestions(category: string): Question[] {
    this.filteredTeory = this.teory;
    return this.filteredTeory = this.filteredTeory.filter((question) => question.categories.includes(category));
  }

  loadQuestions(tabIndex): void {
    if(tabIndex === 1 && this.signs === undefined){
      this.signs = this.dataService.getQuestions(this.dataService.SIGNS);
    } else if (tabIndex === 2 && this.intersections === undefined){
      this.intersections = this.dataService.getQuestions(this.dataService.INTERSECTIONS);
    } else {
      this.filteredTeory = this.teory;
    }
  }

  ngOnInit() {
    this.teory = this.dataService.getQuestions(this.dataService.TEORY);
    this.filteredTeory = this.teory;
  }
}
