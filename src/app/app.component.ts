import { Component } from '@angular/core';
import { FilmsService } from './films.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  peliculas: any = [];
  // En el constructor de la clase declaramos que utilizaremos http.
  constructor(private films: FilmsService) {    
  }

  searchMovies(){
    this.films.getFilms().subscribe(films => {
      console.log("Data: ", films);
      this.peliculas = films;
    });
  }
  
  procesaPropagar(films:Object){
    this.peliculas = films;
  }

  ngOnInit() {
    this.searchMovies();
  }
  

}