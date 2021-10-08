import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Components/Pages/home/home.component';
import { ContentComponent } from './Components/Pages/content/content.component';
import { ContactMeComponent } from './Components/Pages/contact-me/contact-me.component';
import { AboutComponent } from './Components/Pages/about/about.component';
import { NotFoundComponent } from './Components/Pages/not-found/not-found.component';


const routes: Routes = [
  { path:"",component:HomeComponent },
  { path:"home", redirectTo:"" },
  { path:"content", component:ContentComponent},
  { path:"contactme", component:ContactMeComponent},
  { path:"about", component:AboutComponent},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const  routingComponents = [HomeComponent,ContentComponent,ContactMeComponent,AboutComponent]
