import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'movies', component: MoviesComponent },
  { path: 'carddetails/:id/:movie', component: CardDetailsComponent },
  { path: 'tvshows', component: TvshowsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
