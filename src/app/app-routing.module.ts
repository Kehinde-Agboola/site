import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DistanceComponent } from './home/component/distance/distance.component';
// import { DestinationComponent } from './home/component/destination/destination.component';
import { CategoriesComponent } from './home/component/categories/categories.component';
import { ExperienceComponent } from './home/component/experience/experience.component';
import { StaysComponent } from './home/component/stays/stays.component';

const routes: Routes = [
  {path: '', component: HomeComponent,
  children: [
    {
      path: 'destination',
      component: DistanceComponent
    },
    { path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'experiences',
    component: ExperienceComponent
  },
  {
    path: 'stays',
    component: StaysComponent
  }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
