import { Component } from '@angular/core';
import { QuizService } from 'src/app/shared/services/quiz.service';

@Component({
  selector: 'app-append-quiz',
  templateUrl: './append-quiz.component.html',
  styleUrls: ['./append-quiz.component.css']
})
export class AppendQuizComponent {
 organizationName=["ecat","net"]
  
 constructor(private _quizeServie:QuizService)
 {}

 onChageFetchDataFromDropDown(event:any)
 {
  let value=event.target.value;
  this._quizeServie.appendquiz(value).subscribe((res)=>{
    res
  })
 }


}
