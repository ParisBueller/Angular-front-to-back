import { Component, OnInit } from '@angular/core';
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


//Constructor more used for dependency injection
  constructor() { }


//Lifecycle method, runs automatically when the component is initialized
//Used for things like ajax calls
  ngOnInit() {
   
      this.users = [
        {
          firstName: 'John',
          lastName : 'Doe',
          email: 'john@gmail.com',
          isActive: true,
          registered: new Date('01/02/2018 08:30:00'),
          hide: true
      },
      {
          firstName: 'Kevin',
          lastName : 'Johnson',
          email: 'kevin@yahoo.com',
          isActive: false,
          registered: new Date('03/11/2017 06:20:00'),
          hide: true
    },
    {
        firstName: 'Karen',
        lastName : 'Williams',
        email: 'karen@gmail.com',
        isActive: true,
        registered: new Date('11/02/2016 10:30:00'),
        hide: true
  }
      ];

      this.loaded = true;     

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


  onSubmit(e) {
    console.log(123);
    e.preventDefault();
  }

}
