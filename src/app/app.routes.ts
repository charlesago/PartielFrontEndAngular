import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {UserManagerComponent} from "./user-manager/user-manager.component";

export const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "home", component: HomeComponent
  },

  {
    path: "login", component: UserManagerComponent
  },
  {
    path: "logout", component: UserManagerComponent
  },
  {
    path: "register", component: UserManagerComponent
  },

];
