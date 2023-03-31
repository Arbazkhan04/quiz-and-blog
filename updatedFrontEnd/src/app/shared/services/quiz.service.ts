import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }
  createQuiz(payload:any)
  {
    return this.http.post('http://localhost:4441/quizMangementRouter/quiz',payload)
  }
  appendquiz(organzantionName:string)//my mistake get organzztion 
  {
    return this.http.get(`http://localhost:4441/quizMangementRouter/getQuestionByOrganztionName/${organzantionName}`)
  }
  append_Quiz_Array(payload:any,id:any)
  {
    return this.http.post(`http://localhost:4441/quizMangementRouter/appendQuiz/${id}`,payload)
  }
  findDocIdByOrgazationSubAndSetName(org:string,set:string,subj:string)
  {
    return this.http.get(`http://localhost:4441/quizMangementRouter/findDocByOrganzation_SetNoAndSubjectName/${org}/${set}/${subj}`)
  }
  getSetNumberBySubName(subjectName:string)
  {
    return this.http.get(`http://localhost:4441/quizMangementRouter/getQuestionSetNumber/${subjectName}`)
  }
}