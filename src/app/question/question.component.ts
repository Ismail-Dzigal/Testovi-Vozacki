import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() question: Question;
  @Input() indeks: number;
  @Output() pointsEmitted: EventEmitter<number> = new EventEmitter<number>();
  userAnswersArray: number[] = [0,0,0,0,0];
  questionDisable: boolean = false;
  points: number = 0;

  constructor() { }

  toggleAnswer(j): void {
    if(this.userAnswersArray[j] === 0){
      this.userAnswersArray[j] = j+1;
    } else {
      this.userAnswersArray[j] = 0;
    }
  }

  disableQuestion(): boolean {
    return this.questionDisable;
  }

  questionConfirmed(question): void {  
    this.questionDisable = true;

    if (JSON.stringify(question.correctArray) === JSON.stringify(this.userAnswersArray)) {
      switch(question.type){
        case 1: this.points = 2;
        break;
        case 2: this.points = 3;
        break;
        case 3: this.points = 5;
        break;
      } 
    }
    this.pointsEmitted.emit(this.points);
  }

  ngOnInit() {
  }

}
