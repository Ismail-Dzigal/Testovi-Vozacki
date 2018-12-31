import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule} from '@angular/flex-layout';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LearnComponent } from './learn/learn.component';
import { PracticeComponent } from './practice/practice.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'learn', component: LearnComponent },
  { path: 'practice', component: PracticeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' }
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavListComponent,
    WelcomeComponent,
    LearnComponent,
    PracticeComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
