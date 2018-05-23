import { Component, OnInit,ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import{ User } from '../../models/User';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  }
  users: User[];
  showExtended: boolean = true;
  //In HTTP Requests and getting callbacks
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm')form: any;
  data:any;


//Constructor more used for dependency injection
//Public or Private, Private means that service 
//can only be used within the class
  constructor(private userService: UserService) { }


//Lifecycle method, runs automatically when the component is initialized
//Used for things like ajax calls
  ngOnInit() {
    //when using an observable you need to subscribe to it with .subscribe
    this.userService.getData().subscribe(data => {
      console.log(data);
    });

      
    
      this.userService.getUsers().subscribe(users => {
        this.users = users;
        this.loaded = true; 
      });
      

          

//calls the addUser method (below) on our User Array
      // this.addUser({
      //   firstName: 'David',
      //   lastName : 'Jackson'   
      // });

    }

  // addUser() {
  //   this.user.isActive = true;
  //   this.user.registered = new Date();
  //   this.users.unshift(this.user);
  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  //     email: ''
  //   }
  // }


  onSubmit({value, valid}: {value: User, valid: boolean}) {
    if(!valid) {
      console.log('Form is not valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      this.userService.addUser(value)

      this.form.reset();
    }

  }

}
