import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PhotosComponent } from './components/photos/photos.component';
import { VideosComponent } from './components/videos/videos.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginandregisterComponent } from './components/loginandregister/loginandregister.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhotosComponent,
    VideosComponent,
    ProfileComponent,
    LoginandregisterComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
