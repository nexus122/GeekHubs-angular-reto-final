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
  maxPage: number = 501;

  // En el constructor de la clase declaramos que utilizaremos http.
  constructor(private films: FilmsService) {};

  searchMovies(){
    this.films.getPopularFilms().subscribe(films => {
      console.log("Buscamos la pelicula");
      this.peliculas = films;
      this.pelicula = this.peliculas.results[0];
      this.genreTable();      
    });
  };
  
  /* Tabla con todos los generos de pelicula designados */
  genreTable(){
    console.log("Buscamos los generos");
    this.films.getGenreTable().subscribe(generos => {      
      this.generos = generos;
      this.modGenresFilsm();
    });
  }

  buscarPelicula(films:Object){
    this.peliculas = films;
  };  

  cerrarModal(film:any){    
    this.pelicula = film;
    this.modalVisible = true;
    this.modGenresFilsm();
  };

  openFilmModal(film:any){
    this.pelicula = film;
  };


  closeModal(cerrar:boolean){
    this.modalVisible = cerrar;
  };

  modGenresFilsm(){
    console.log("Buscamos los generos para modificarlos en el objeto peliculas")
    // Simplificar los generos

    console.log("Generos antes: ", this.generos);

    if(this.generos.genres)
      this.generos = this.generos.genres;

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

  newPage(newpage:any){
    if(newpage <= 0) return; // Si el numero es menor, no hacer nada          
    if(newpage >= this.maxPage) return; // Si el numero es menor, no hacer nada

    this.page = newpage;

    this.films.getPopularFilms(newpage).subscribe(films => {    
      this.peliculas = films;
      this.pelicula = this.peliculas.results[0];
      this.genreTable();
    });

  }

  ngOnInit() {
    this.searchMovies();
  };
}