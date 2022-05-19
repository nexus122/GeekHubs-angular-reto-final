import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class FilmsService {
  constructor(private http: HttpClient) { };
  getFilms() {
    // Configuración de la api.
    let apiKey = "2c53d67881f19d681628fcbe5343b8c4";
    let apiPage = 1;

    // Metodo de busqueda de peliculas.
    let searchTerm = 'popular' // Empezamos buscando por populares.

    // Definimos la URL para hacer las busquedas.
    let url = `https://api.themoviedb.org/3/movie/${searchTerm}?api_key=${apiKey}&language=es-ES&page=${apiPage}`;

    // Hacemos la peticion a la API y devolvemos los datos.
    return this.http.get(url);
  }

  getFilm(searchTerm: string, searchType: string) {
    // Configuración de la api.
    let apiKey = "2c53d67881f19d681628fcbe5343b8c4";    

    // Definimos la URL para hacer las busquedas.
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}&language=es-ES`;
    return this.http.get(url);
  }

  getGenreTable() {
    // Configuración de la api.
    let apiKey = "2c53d67881f19d681628fcbe5343b8c4";

    // Definimos la URL para hacer las busquedas.
    let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=es-ES`;
    return this.http.get(url);
  }
}
