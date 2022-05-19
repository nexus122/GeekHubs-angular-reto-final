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

  generos: any = [];
  page: number = 1;
  title: any;

  // En el constructor de la clase declaramos que utilizaremos http.
  constructor(private films: FilmsService) {};

  searchMovies(){
    this.films.getPopularFilms().subscribe(films => {
      console.log("Data: ", films);
      this.peliculas = films;
      this.pelicula = this.peliculas.results[0];
      this.genreTable();
    });
  };
  
  /* Tabla con todos los generos de pelicula designados */
  genreTable(){
    this.films.getGenreTable().subscribe(generos => {
      console.log("Data: ", generos);      
      this.generos = generos;
      this.modGenresFilsm();
    });
  }

  procesaPropagar(films:Object){
    this.peliculas = films;
  };  

  procesaPropagar2(film:any){
    console.log("Film: ", film);
    this.pelicula = film;
    this.modalVisible = true;
  };

  openFilmModal(film:any){
    this.pelicula = film;
  };


  closeModal(cerrar:boolean){
    this.modalVisible = cerrar;
  };

  modGenresFilsm(){    
    // Simplificar los generos
    console.log("Holaaaa ");
    this.generos = this.generos.genres;
    console.log(this.generos);

    // Recorremos los generos y los asignamos a cada pelicula
    for(let i = 0; i < this.peliculas.results.length; i++){
      let generos:any = [];
      for(let j = 0; j < this.peliculas.results[i].genre_ids.length; j++){
        for(let k = 0; k < this.generos.length; k++){
          if(this.peliculas.results[i].genre_ids[j] == this.generos[k].id){
            generos.push(this.generos[k].name);
          }
        }
      }
      this.peliculas.results[i].generos = generos;
    }

  }

  newPage(page:number){
    console.log("APP New page: ", page);
  }
  ngOnInit() {
    this.searchMovies();
    
  };

  

}