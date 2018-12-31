import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Question } from '../question.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  practiceTest: Question[] = [];
  allPoints: number = 0;
  maxPoints: number = 0;
  finishButton: boolean = false;
  testVisibility: boolean = true;

  constructor(private dataService:DataService, private router: Router) { }

  getPracticeTest(category:string): void {
    this.practiceTest = this.dataService.createPracticeTest(category);
    if(category === 'A' || category === 'B'){
      this.maxPoints = 60;
    } else {
      this.maxPoints = 70;
    }
    this.finishButton = true;
  }

  addPoints(points: number){
    this.allPoints += points;
  }

  completeTheTest(){
     this.testVisibility = false;
  }

  newTry(): void {
    this.router.navigateByUrl('/welcome', {skipLocationChange: true}).then(()=>
    this.router.navigate(['/practice'])); 
  }

  ngOnInit() {
 
  }

}
