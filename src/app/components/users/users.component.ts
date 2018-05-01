import { Component, OnInit } from '@angular/core';
import{ User } from '../../models/User';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  //In HTTP Requests and getting callbacks
  loaded: boolean = false;
  enableAdd: boolean = true;
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
          age: 70,
          address: {
              street: '50 Main st',
              city: 'Boston',
              state: 'MA'
          },
          isActive: true,
          registered: new Date('01/02/2018 08:30:00'),
          hide: true
      },
      {
          firstName: 'Kevin',
          lastName : 'Johnson',
          age: 34,
          address: {
              street: '20 School st',
              city: 'Lynn',
              state: 'MA'
        },
        isActive: false,
        registered: new Date('03/11/2017 06:20:00'),
        hide: true
    },
    {
        firstName: 'Karen',
        lastName : 'Williams',
        age: 26,
        address: {
            street: '55 Mill st',
            city: 'Miami',
            state: 'FL'
      },
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

  addUser(user: User) {
    this.users.push(user);
  }

  // toggleHide(user) {
  //   user.hide = !user.hide;
  // } 
  //can put expression(user.hide = !user.hide) inside 
  //our click function in our html

  onSubmit(e) {
    console.log(123);
    e.preventDefault();
  }

  fireEvent(e) {
    console.log(e.target.value);
    console.log(e.type);
  }
}
