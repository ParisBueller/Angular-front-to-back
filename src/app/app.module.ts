import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//All Components must be imported to app.modulefrom their file location
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent 
    //Components also must be added to declarations in app.module
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
