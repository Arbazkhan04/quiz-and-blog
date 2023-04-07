import { Component } from '@angular/core';
import { QuizService } from 'src/app/shared/services/quiz.service';

@Component({
  selector: 'app-quiz-analystics',
  templateUrl: './quiz-analystics.component.html',
  styleUrls: ['./quiz-analystics.component.css']
})
export class QuizAnalysticsComponent {
  organaztions = ["ecat", "net"];
  subjectName=[];
  organizationName2:string="";

   constructor(private _quizeServie:QuizService){}




  onChageFetchDataFromDropDown(event:any)
  {
    this.organizationName2 = event.target.value;
    let value = event.target.value;
    this._quizeServie.appendquiz(value).subscribe((res: any) => {
      const mySubjectNameArr = res.Result.map((element: any) => element.subject);
      this.subjectName=Array.from(new Set(mySubjectNameArr))//work in typeScript
      console.log(this.subjectName)
      
      console.log(mySubjectNameArr); // check the contents of myarr
     
    });
  }

  onChageFetchDataFormDubjectDropDown(event:any)//this. is used for get the value for set number 
  {
    console.log(event.target.value);
    let subName=event.target.value;
    console.log(subName);
    this._quizeServie.getetNumberByOrganizationAndSubjectName(this.organizationName2,subName).subscribe((res:any)=>{
      res.Result;
    })
  }
}
