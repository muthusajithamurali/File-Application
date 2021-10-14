import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userid=""
  uname=""
  pswd=""
  
  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  register(){
  
    var userid=this.userid;
    var uname=this.uname;
    var pswd=this.pswd;
    var result=this.ds.register(userid,uname,pswd)
    if(result){
      alert("register successful")
      this.router.navigateByUrl("")
    }
    else{
      alert("User Exists!!!!please Login")
      this.router.navigateByUrl("")
    }
    
  }
  

}
