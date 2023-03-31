import { Component } from '@angular/core';
import { elementAt } from 'rxjs';
import { QuizService } from 'src/app/shared/services/quiz.service';

@Component({
  selector: 'app-append-quiz',
  templateUrl: './append-quiz.component.html',
  styleUrls: ['./append-quiz.component.css']
})
export class AppendQuizComponent {
  organizationName = ["ecat", "net"];
  subjectName = [];
  setNumber=[]

  constructor(private _quizeServie: QuizService) { }

  onChageFetchDataFromDropDown(event:any) {
    let value=event.target.value;
    this._quizeServie.appendquiz(value).subscribe((res:any)=>{
      const mySubjectNameArr = res.Result[0].quize.map((element:any) => element.subject);
      this.subjectName = mySubjectNameArr;
      console.log(mySubjectNameArr); // check the contents of myarr
      const mySetNumber=res.Result[0].quize.map((item:any)=>item.setName);
      this.setNumber=mySetNumber;
      console.log(mySetNumber)
    });
  }
  
}
