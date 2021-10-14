import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
loading:boolean=false;
file=""

user=this.ds.currentuser
  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }
  
onChange(event:any){
  this.file=event.target.files[0];
   
}
onUpload(){
  this.loading=!this.loading;
  var file=this.file;
  var result=this.ds.onUpload(file)
    if(result){
      alert("uploded successful")
    }
 else{
   alert("No upload")
 }


} 
Download(){
  alert("downloaded")
}
}
