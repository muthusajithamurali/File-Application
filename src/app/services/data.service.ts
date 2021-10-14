import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentuser=""
  user:any={
    1001:{userid:1001, uname: "ram",password:"userone",file:[]},
    1002:{userid:1002, uname:"ravi",password:"usertwo",file:[]},
    1003:{userid:1003,uname:"sam",password:"userthree",file:[]}
   }
  

  constructor() { }
  register(userid:any,uname:any,password:any){
    let userdetails=this.user
    if(userid in userdetails){
      
      return false;
    }
    else{
      userdetails[userid]={
        userid,
        uname,
        password
      }
      return true;
    }

  }

  login(userid:any,pswd:any){

   let userdetails=this.user

  if(userid in userdetails){
    if(pswd==userdetails[userid]["password"]){
      this.currentuser=userdetails[userid]["uname"]
          return true;
          
       }
       else{
        alert("Incorrect password")
        return false;
       }
      }
     else{
        alert ("Invalid user")
        return false;
     }
    }

    onUpload(file:any){
       let userdetails=this.user
       if(file in userdetails){
         return false;
       }
       else{
         userdetails[file]={

         }
         return true;
       }
    }
}
