import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

      listUser : User[] = []
      Column : string[] = ["id","name","email","delete"]
     constructor(private service:ServiceService){}

  ngOnInit(): void {
this.getAllUsers()
  }
getAllUsers(){
  this.service.fetchAllUsers().subscribe((res:User[])=>
    this.listUser = res )
}
delete(id:number){
  this.service.deleteUser(id).subscribe();
}
}
