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
  
//Constructor more used for dependency injection
  constructor() { }


//Lifecycle method, runs automatically when the component is initialized
//Used for things like ajax calls
  ngOnInit() {
      this.users = [
        {
          firstName: 'John',
          lastName : 'Doe',
          age: 30,
          address: {
              street: '50 Main st',
              city: 'Boston',
              state: 'MA'
          }
      },
      {
          firstName: 'Kevin',
          lastName : 'Johnson',
          age: 34,
          address: {
              street: '20 School st',
              city: 'Lynn',
              state: 'MA'
        }
    },
    {
        firstName: 'Karen',
        lastName : 'Williams',
        age: 26,
        address: {
            street: '55 Mill st',
            city: 'Miami',
            state: 'FL'
      }
  }
      ];
      this.showExtended = false;
//calls the addUser method below on our User Array
      this.addUser({
        firstName: 'David',
        lastName : 'Jackson',
        age: 44,
        address: {
            street: '12 Wake St',
            city: 'Miami',
            state: 'FL'
      }
  })
  }

  addUser(user: User) {
    this.users.push(user);
  }

}
