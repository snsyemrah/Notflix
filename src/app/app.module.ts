import { NgModule } from '@angular/core';
import { Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BannerComponent } from './banner/banner.component';
import { LoginComponent } from './login/login.component';
import { FilmstripComponent } from 'src/app/filmstrip/filmstrip.component';
import { HomeComponent } from 'src/app/home/home.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { MydirectiveDirective } from './mydirective.directive';
import { LoginDirective } from './login/login.directive';
import { FormsModule } from '@angular/forms';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { UserService } from 'src/app/services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    LoginComponent,
    FilmstripComponent,
    HomeComponent,
    HeaderComponent,
    MydirectiveDirective,
    LoginDirective,
    MoviedetailsComponent,
    AddmovieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
