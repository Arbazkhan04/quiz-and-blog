import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { elementAt } from 'rxjs';
import { QuizService } from 'src/app/shared/services/quiz.service';

@Component({
  selector: 'app-append-quiz',
  templateUrl: './append-quiz.component.html',
  styleUrls: ['./append-quiz.component.css']
})
export class AppendQuizComponent {

  organizationName = ["ecat", "net"];
  subjectName = [];//simple 
  setNumber = [];
  mySubUni={};//fetch uni
  uniSetNo={}
  id: string = "";
  questionObjectentity: FormGroup | any;
  subjectName2: string = "";
  setNumber2: string = "";
  organizationName2: string = "";



  constructor(
    private _quizeServie: QuizService,
    private fb: FormBuilder
  ) { this.buildForm() }


  buildForm() {
    this.questionObjectentity = this.fb.group({
      subject: ['', Validators.required],
      organization: ['', Validators.required],
      setName: ['', Validators.required],
      description: ['', Validators.required],
      alternatives: this.fb.array([
        this.generateAlternative(),
        this.generateAlternative(),
        this.generateAlternative(),
        this.generateAlternative(),
      ])
    })
  }


  generateAlternative() {
    return this.fb.group({
      text: ['', Validators.required],
      isCorrect: [false]
    })
  }


  submitForm() {
    console.log(this.questionObjectentity.value);
    let result = this.questionObjectentity.value;
    this._quizeServie.append_Quiz_Array(result, this.id).subscribe((res: any) => {
      res.Result;
    })
  }

  onChangeSubjectData(event: any) {
    this.subjectName2 = event.target.value
    console.log(event.target.value)
  }

  onChangeSetNumbertData(event: any) {
    this.setNumber2 = event.target.value
    console.log(event.target.value)
    this._quizeServie.findDocIdByOrgazationSubAndSetName(this.organizationName2, this.setNumber2, this.subjectName2).subscribe((res: any) => {
      console.log(res.Result)
      this.id=res.Result._id;
      console.log(this.id)

    })
  }


  onChageFetchDataFromDropDown(event: any) {
    this.organizationName2 = event.target.value;
    let value = event.target.value;
    this._quizeServie.appendquiz(value).subscribe((res: any) => {
      const mySubjectNameArr = res.Result.map((element: any) => element.subject);
      // this.subjectName = mySubjectNameArr;
      // this.subjectName=[...new Set(mySubjectNameArr)]
      this.subjectName=Array.from(new Set(mySubjectNameArr))//work in typeScript
      console.log(this.subjectName)
      // this.mySubUni = new Set([...mySubjectNameArr]);
      // console.log(this.mySubUni);
      console.log(mySubjectNameArr); // check the contents of myarr
      const mySetNumber = res.Result.map((item: any) => item.setName);
      this.setNumber=Array.from(new Set(mySetNumber))//work in typeScript
      console.log(this.setNumber)
      // this.id = res.Result.map((item: any) => item._id);
      // console.log(this.id)
      // console.log(mySetNumber)
    });
    
  }
 


}
