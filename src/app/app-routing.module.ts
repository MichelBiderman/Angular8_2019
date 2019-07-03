import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiveListComponent } from './web-site/dives/dive-list/dive-list.component';
import { HomePageComponent } from './web-site/home-page/home-page.component';
import { Page404Component } from './web-site/page404/page404.component';
import { DiveDetailComponent } from './web-site/dives/dive-detail/dive-detail.component';
import { ContactFormComponent } from './web-site/contact-form/contact-form.component';


const routes: Routes = [
  // on définit ici les routes
  // path == url associé à un component
  // { path: "",component:HomePageComponent},
  { path: "", redirectTo:"home-page", pathMatch:"full"},
  { path:"liste-des-plongees", component:DiveListComponent},
  { path:"home-page", component:HomePageComponent},
  { path:"liste-des-plongees/:id", component:DiveDetailComponent},
  { path:"liste-des-plongees/**", component:Page404Component},
  { path:"contact", component:ContactFormComponent},
   // path:"**" : toujours en dernier !!!!
  { path:"**", component:Page404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 