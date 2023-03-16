import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Email:string='Email';
  PWD:string='pwd';

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit(): void {

  }
  Login(Email:string,PWD:string):any  {
   
   
    var param = {Email:Email,Password:PWD}; 
    //console.log(param);
    
    this.http.get<any>('http://localhost:37466/api/users/Login?Email='+Email+'&Password='+PWD).subscribe(data => {
       
    
     console.log(data);
     
      if(data.Status=='Error') { alert(data.Message);}
        else{
          localStorage.setItem("User",JSON.stringify(data));
          //console.log(data.userName=='Admin');return;
          if(data.isAdmin==true){
		alert("Admin login successful");
           window.location.href='/home'}
          else{
          window.location.href='/home';}
        }
        
        
      });
 return false;

  }

}
function go(arg0: string) {
  throw new Error('Function not implemented.');
}
