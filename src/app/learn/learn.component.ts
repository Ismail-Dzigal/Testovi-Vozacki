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
  expand0: number = 10;
  expand1: number = 10;
  expand2: number = 10;
  disabledTeoryButton: boolean = false;
  disabledSignsButton: boolean = false;
  disabledIntersectionsButton: boolean = false;

  constructor(private dataService:DataService) { }

  erraseYourAnswers(): void {
    this.checkboxVisibility = !this.checkboxVisibility;
    setTimeout( ()=>{this.checkboxVisibility = !this.checkboxVisibility}, 500);
   
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

  showMore(tabIndex){
    if(tabIndex === 0){
      if(this.expand0 < this.filteredTeory.length){
        this.expand0 += 10;
      } else {
        this.disabledTeoryButton = true; 
      }
    } else if(tabIndex === 1){
      if(this.expand1 < this.signs.length){
        this.expand1 += 10;
      } else {
        this.disabledSignsButton = true; 
      }
    } else if(tabIndex === 2){
      if(this.expand2 < this.intersections.length){
        this.expand2 += 10;
      } else {
        this.disabledIntersectionsButton = true; 
      }
    }
  
  }

  ngOnInit() {
    this.teory = this.dataService.getQuestions(this.dataService.TEORY);
    this.filteredTeory = this.teory;
  }
}
