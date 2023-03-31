import { Component } from '@angular/core';

@Component({
  selector: 'app-append-quiz',
  templateUrl: './append-quiz.component.html',
  styleUrls: ['./append-quiz.component.css']
})
export class AppendQuizComponent {
 organizationName=["ecat","net"]
 onChageFetchDataFromDropDown(event:any)
 {
  console.log(event.target.value);
 }
}
