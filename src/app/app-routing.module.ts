import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from 'src/app/login/login.component';
import { AppComponent } from 'src/app/app.component';
import { HomeComponent} from 'src/app/home/home.component';
const routes: Routes = [
      { path: '', component: HomeComponent},
      { path: 'login', component: LoginComponent },
      { path: 'movies:id', component: AppComponent}
];
// const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
