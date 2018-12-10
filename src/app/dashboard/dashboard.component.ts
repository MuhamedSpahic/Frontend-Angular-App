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
      }
     });
  }
  getMovies() {
    this.service.getMovies().subscribe(data => {
      if (data) {
        this.movies = data.results.slice(0, 10);
        // this.service.setMovieList(this.movies);
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
}
