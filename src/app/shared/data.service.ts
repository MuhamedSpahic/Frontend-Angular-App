import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) {}
    tvShows: boolean;
    movies = [];
    shows = [];
    isTvShows() {
        return this.tvShows === undefined ? true : this.tvShows;
    }
    setTvShows(isShow) {
        this.tvShows = isShow;
    }
    // Uses http.get() to load data from a single API endpoint
    getMovies(): Observable<any>  {
        return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=a3b38d1ecc1f27affe5c4cd266780a64&language=en-US&page=1`);
    }
    getTvShows(): Observable<any>  {
        return this.http.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=a3b38d1ecc1f27affe5c4cd266780a64&language=en-US&page=1`);
    }
    getMovieTrailer(id) {
        return this.http.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=a3b38d1ecc1f27affe5c4cd266780a64&language=en-US`);
    }
    getShowTrailer(id) {
        return this.http.get(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=a3b38d1ecc1f27affe5c4cd266780a64&language=en-US`);
    }
    search(query: string, type: string): Observable<any> {
        // tslint:disable-next-line:max-line-length
        return this.http.get(`https://api.themoviedb.org/3/search/${type}?api_key=a3b38d1ecc1f27affe5c4cd266780a64&language=en-US&page=1&include_adult=false&query=${query}`);
    }
    // getMovieList() {
    //     return this.movies;
    // }
    // setMovieList(movies) {
    //     this.movies = movies;
    // }
    // getShowList() {
    //     return this.shows;
    // }
    // setShowList(shows) {
    //     this.shows = shows;
    // }
    getMovieById(id): Observable<any>  {
        return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=a3b38d1ecc1f27affe5c4cd266780a64&language=en-US`);
    }
    getShowById(id): Observable<any>  {
        return this.http.get(`https://api.themoviedb.org/3/tv/${id}?api_key=a3b38d1ecc1f27affe5c4cd266780a64&language=en-US`);
    }
}
