import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DistanceComponent } from './home/component/distance/distance.component';
import { ExperienceComponent } from './home/component/experience/experience.component';
import { CategoriesComponent } from './home/component/categories/categories.component';
import { StaysComponent } from './home/component/stays/stays.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DistanceComponent,
    ExperienceComponent,
    CategoriesComponent,
    StaysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
