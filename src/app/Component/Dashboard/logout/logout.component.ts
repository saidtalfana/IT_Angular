import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor(private router:Router){}

      ckeck=false

  logout(ckeck:boolean){
  if(ckeck){
     localStorage.removeItem("jwt")
     this.router.navigateByUrl("")
  }
  else{
    alert("something not correct")
  }
}}
