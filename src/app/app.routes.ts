import { Routes } from '@angular/router';
import { IniciozeroComponent } from './iniciozero/iniciozero.component';
import { LoginzeroComponent } from './loginzero/loginzero.component';


export const routes: Routes = [
    {path:"iniciozero", component: IniciozeroComponent},
    {path:"loginzero", component: LoginzeroComponent},
    {path:"", redirectTo:"/iniciozero",pathMatch:"full"},

];
