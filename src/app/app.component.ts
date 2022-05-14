import { Component } from '@angular/core';
import { FilmsService } from './films.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // Cargamos una lista de peliculas y una pelicula en concreto.
  peliculas: any= [];
  pelicula: any = [];
  modalVisible: boolean = false;

  // En el constructor de la clase declaramos que utilizaremos http.
  constructor(private films: FilmsService) {};

  searchMovies(){
    this.films.getFilms().subscribe(films => {
      console.log("Data: ", films);
      this.peliculas = films;
      this.pelicula = this.peliculas.results[0];
    });
  }
  
  procesaPropagar(films:Object){
    this.peliculas = films;
  }

  procesaPropagar2(film:any){
    console.log("Film: ", film);
    this.pelicula = film;
    this.modalVisible = true;
  }

  openFilmModal(film:any){
    console.log("Nos ha llegado el film del hijo: ", film);
    this.pelicula = film;
  }
  closeModal(cerrar:boolean){
    console.log("Cerrar modal");
    this.modalVisible = cerrar;
  }

  ngOnInit() {
    this.searchMovies();    
  }
  

}