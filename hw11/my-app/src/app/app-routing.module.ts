import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DirectoryComponent } from './directory/directory.component';

const routes: Routes = [

  {path:"",pathMatch:"full", component: DirectoryComponent},
  {path:"contactUs",component: ContactUsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
