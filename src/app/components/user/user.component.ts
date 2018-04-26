import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
 
})
//Must export to have access outside of this file
export class UserComponent implements OnInit {
    //Properties
    // Best practice with properties is to use types
    //i.e string, number, boolean etc.
    //User types assigned below in interface User {}
    user: User;

    //Methods
    constructor() {      
        //Use this.'property name' after setting a type in the property above
        
    }

    ngOnInit() {
        this.user = {
            firstName: 'John',
            lastName : 'Doe',
            age: 30,
            address: {
                street: '50 Main st',
                city: 'Boston',
                state: 'MA'
            }
        }
    }
}

