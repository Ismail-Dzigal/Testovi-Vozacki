import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router) { }

  buttonClick(route): void {
    if(route === 'learn'){
      this.router.navigate(['/learn']);
    } else {
      this.router.navigate(['/practice']);
    }
  }

  ngOnInit() {
  }

}
