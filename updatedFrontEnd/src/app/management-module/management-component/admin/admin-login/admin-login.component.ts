import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/shared/services/admin-login/login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  public LoginForm: any|FormGroup;
  public token:any;

  constructor(
    private formBuilder:FormBuilder,
    private readonly loginSerice:LoginService,
    private readonly router:Router,
    private readonly toaster:ToastrService,
    ) { 
    this.initializeMyLoginForm()
  }

  initializeMyLoginForm(){
    this.LoginForm = this.formBuilder.group({
      adminName: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]) ,
      password:new FormControl('',[Validators.required])
    })
  }

  SubmitLoginForm(){
    let formValues = this.LoginForm.value
     this.loginSerice.createLoginForm(formValues).subscribe(({message,token,data}:any)=>{
       this.toaster[data ? 'success' : 'error'](message);
       this.loginSerice.saveLoginTokenToLocalStorage(token);
       this.token = token;
       if(token === undefined){
        this.router.navigate(['/home']);
        // this.loginSerice.deleteLoginTokenFromLocalStorage()
       }
       else{
        this.router.navigate(['/admin-module/dashboard'])
       }
     })
  }

}
