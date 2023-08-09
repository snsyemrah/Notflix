import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotographsComponent} from 'src/app/photographs/photographs.component';
import { LoginComponent} from 'src/app/login/login.component';
import { HomeComponent } from 'src/app/home/home.component';
const routes: Routes = [
      { path: '', component: HomeComponent},
      { path: 'login', component: LoginComponent },
//       { path: 'movies:id', component: AppComponent}
];
// const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
