import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { AppComponent } from 'src/app/app.component';
import { HomeComponent } from 'src/app/home/home.component';
import { MoviedetailsComponent } from 'src/app/moviedetails/moviedetails.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'movies/:id', component: MoviedetailsComponent },
  { path: 'addmovie', component: AddmovieComponent },
];
// const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
