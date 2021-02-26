import { LoginandregisterComponent } from './components/loginandregister/loginandregister.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PhotosComponent } from './components/photos/photos.component';
import { VideosComponent } from './components/videos/videos.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginandregisterComponent,
  },
  {
    path: 'photos',
    component: PhotosComponent,
  },
  {
    path: 'videos',
    component: VideosComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
