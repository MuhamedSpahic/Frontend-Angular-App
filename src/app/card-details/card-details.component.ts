import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/data.service';
@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {
  title: string;
  overview: string;
  overviewHeader: string;
  constructor(private _location: Location, private route: ActivatedRoute, private service: DataService) {}
  image = 'https://image.tmdb.org/t/p/w500';
  hasVideo = false;
  player: YT.Player;
  video: string;
  ngOnInit() {
    this.route.params.subscribe( params => {
      const id = params.id;
      const isMovie = (params.movie === 'true');
      if (isMovie) {
        // get movie detail
        this.service.getMovieById(id).subscribe(movie => {
          this.overviewHeader = 'Movie Overview';
          this.title = movie.original_title;
          this.overview = movie.overview;
          this.service.getMovieTrailer(id).subscribe(
            trailer => {
            if (trailer['results'].length > 0) {
              this.hasVideo = true;
              this.video = trailer.results[0].key;
            } else {
              this.image += movie.backdrop_path;
            }
            }
          );
        });
      } else {
        // get show detail
        this.service.getShowById(id).subscribe(show => {
          this.overviewHeader = 'TV Show Overview';
          this.title = show.original_name;
          this.overview = show.overview;
          this.service.getShowTrailer(id).subscribe( trailer => {
            if (trailer['results'].length > 0)  {
              this.hasVideo = true;
              this.video = trailer.results[0].key;

            } else {
              this.image += show.backdrop_path;
            }
            });
        });
      }
    });
  }
  back() {
    this._location.back();
  }
  savePlayer(player) {
    this.player = player;
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }
}
