import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private service: DataService) { }
  title = 'myFirstApp';
  isTvShows: boolean;
  isTopRated = false;
  search = '';
  movies = [];
  tvshows = [];
  ngOnInit() {
    this.isTvShows = this.service.isTvShows();
    if (this.isTvShows) {
      this.getShows();
    } else {
      this.getMovies();
    }
  }
  getShows() {
    this.service.getTvShows().subscribe(data => {
      if (data) {
        this.tvshows = data.results.slice(0, 10);
        // this.service.setShowList(this.tvshows);
        this.isTopRated = true;
      }
    });
  }
  getMovies() {
    this.service.getMovies().subscribe(data => {
      if (data) {
        this.movies = data.results.slice(0, 10);
        // this.service.setMovieList(this.movies);
        this.isTopRated = true;
      }
    });
  }
  onToggle() {
    this.service.setTvShows(!this.isTvShows);
    this.isTvShows = this.service.isTvShows();
    if (this.isTvShows) {
      this.getShows();
    } else {
      this.getMovies();
    }
  }
  getDetail(id) {
    const isMovie = this.isTvShows ? false : true;
    this.router.navigate([`/carddetails/${id}/${isMovie}`]);
  }
  searchItem(item: string) {
    if (item.length >= 3) {
      this.isTvShows ?
        this.service.search(item, 'tv').subscribe(
          data => {
            this.tvshows = data.results.slice(0, 10);
            this.isTopRated = false;
          }
        )
        :
        this.service.search(item, 'movie').subscribe(
          data => {
            this.movies = data.results.slice(0, 10);
            this.isTopRated = false;
          }
        );
    }
    if (item.length < 3 && !this.isTopRated) {
      // return again top rated movies/shows
      this.isTvShows ? this.getShows() : this.getMovies();
    }
  }
}
