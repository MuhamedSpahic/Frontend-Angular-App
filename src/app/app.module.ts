import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { MoviesComponent } from './movies/movies.component';
import { FormsModule } from '@angular/forms';
import { CardDetailsComponent } from './card-details/card-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchPipe } from './shared/search.pipe';

import {YoutubePlayerModule} from 'ng2-youtube-player';
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TvshowsComponent,
    MoviesComponent,
    CardDetailsComponent,
    DashboardComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    YoutubePlayerModule
  ],
  exports: [
    SearchPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
