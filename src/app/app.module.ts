import { NgModule } from '@angular/core';
import { Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PhotographsComponent } from './photographs/photographs.component';
import { BannerComponent } from './banner/banner.component';
import { LoginComponent } from './login/login.component';
import { FilmstripComponent } from './filmstrip/filmstrip.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotographsComponent,
    BannerComponent,
    LoginComponent,
    FilmstripComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
