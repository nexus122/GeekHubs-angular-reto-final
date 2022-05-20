import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class FilmsService {
    
  constructor(private http: HttpClient) {};

  getPopularFilms(apiPage:number = 1) { // Este metodo devuelve una lista de peliculas populares.
    // Configuración de la api.
    let apiKey = "2c53d67881f19d681628fcbe5343b8c4";    

    // Metodo de busqueda de peliculas.
    let searchTerm = 'popular' // Empezamos buscando por populares.

    // Definimos la URL para hacer las busquedas.
    let url = `https://api.themoviedb.org/3/movie/${searchTerm}?api_key=${apiKey}&language=es-ES&page=${apiPage}`;

    // Hacemos la peticion a la API y devolvemos los datos.
    return this.http.get(url);
  }

  searchedFilms(searchTerm: string, searchType: number) { // Este metodo devuelve una lista de peliculas buscadas.

    // Configuración de la api.
    let apiKey = "2c53d67881f19d681628fcbe5343b8c4";

    let type="";
    
    if(searchType == 1){
      type="movie";
    }else if(searchType == 2){
      type="tv";
    }    

    // Definimos la URL para hacer las busquedas.
    let url = `https://api.themoviedb.org/3/search/${type}?api_key=${apiKey}&query=${searchTerm}&language=es-ES`;
    console.log("Url: ", url);
    return this.http.get(url);
  }

  getGenreTable() { // Este metodo devuelve una tabla con todos los generos de peliculas.
    // Configuración de la api.
    let apiKey = "2c53d67881f19d681628fcbe5343b8c4";

    // Definimos la URL para hacer las busquedas.
    let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=es-ES`;
    return this.http.get(url);
  }
}
