import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userid=""
  pswd=""
  

  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }
  login(){
    
    var userid=this.userid;
    var pswd=this.pswd;
    var result=this.ds.login(userid,pswd)
      if(result){
        alert("Login successful")
        this.router.navigateByUrl("home")
    }
  }


}
