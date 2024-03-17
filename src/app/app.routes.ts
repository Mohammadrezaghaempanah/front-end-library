import { Routes } from '@angular/router';
import { PublicNavComponent } from './+Pages/+Public/public-nav/public-nav.component';
import { LibrarainsNavComponent } from './+Pages/+Librarians/librarains-nav/librarains-nav.component';
import { AdminsNavComponent } from './+Pages/+Admins/admins-nav/admins-nav.component';
import { PublichomeComponent } from './+Pages/+Public/publichome/publichome.component';
import { PublicbooksComponent } from './+Pages/+Public/publicbooks/publicbooks.component';
import { PublicmembersComponent } from './+Pages/+Public/publicmembers/publicmembers.component';
import { LibrariansborrowsComponent } from './+Pages/+Librarians/librariansborrows/librariansborrows.component';
import { LibrarianshomeComponent } from './+Pages/+Librarians/librarianshome/librarianshome.component';
import { LibrariansbooksComponent } from './+Pages/+Librarians/librariansbooks/librariansbooks.component';
import { LibrariansmembersComponent } from './+Pages/+Librarians/librariansmembers/librariansmembers.component';
import { AdminshomeComponent } from './+Pages/+Admins/adminshome/adminshome.component';
import { AdminslibrariansComponent } from './+Pages/+Admins/adminslibrarians/adminslibrarians.component';
import { LibrariansloginComponent } from './+Pages/+Public/librarianslogin/librarianslogin.component';
import { AdminsloginComponent } from './+Pages/+Public/adminslogin/adminslogin.component';

export const routes: Routes = [
    {path:'public', component:PublicNavComponent,children:[
        {path:'home',component:PublichomeComponent},
        {path:'books',component:PublicbooksComponent},
        {path:'members',component:PublicmembersComponent},
        {path:'librarianslogin',component:LibrariansloginComponent},
        {path:'adminslogin',component:AdminsloginComponent},
        {path:'',redirectTo:'home',pathMatch:'prefix'}

    ]},
    {path:'librarians',component:LibrarainsNavComponent,children:[
        {path:'home',component:LibrarianshomeComponent},
        {path:'books',component:LibrariansbooksComponent},
        {path:'members',component:LibrariansmembersComponent},
        {path:'borrows',component:LibrariansborrowsComponent},
        {path:'',redirectTo:'home',pathMatch:'prefix'}
    ]},
    {path:'admins',component:AdminsNavComponent,children:[
        {path:'home',component:AdminshomeComponent},
        {path:'librarians',component:AdminslibrariansComponent},
        {path:'',redirectTo:'home',pathMatch:'prefix'}
    ]},
    {path:'',redirectTo:'/public',pathMatch:'full'},
    {path:'**',redirectTo:'/public'}
  

];
