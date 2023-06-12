import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../shared/services/admin-login/login.service';

@Component({
  selector: 'app-admin-module',
  templateUrl: './admin-module.component.html',
  styleUrls: ['./admin-module.component.css']
})
export class AdminModuleComponent {


  constructor(
    private readonly loginSerice:LoginService,
    private readonly router:Router,
    private readonly toaster:ToastrService,
    ){
      
    }

  logOut(){
    this.loginSerice.deleteLoginTokenFromLocalStorage();
    this.router.navigate(['/home']);
    this.toaster.success('LogOut Success-Fully')
  }

}
