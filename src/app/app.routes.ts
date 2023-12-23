import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DogComponent } from './dog/dog.component';
import { AddDogComponent } from './add-dog/add-dog.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'dog', component: DogComponent },
  { path: 'dog/add', component: AddDogComponent },
];
