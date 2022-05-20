import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FilmsService } from '../../films.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private films: FilmsService) { }

  // Mensaje que le enviamos al padre con las nuevas peliculas  
  @Output()
  buscarPelicula = new EventEmitter<Object>();

  // Variable del hijo que recibira el valor de la busqueda
  searchTerm: string = '';

  // Funcion para buscar peliculas por titulo
  searchFilm() {
    // Si el titulo de la pelicula esta vacio no hacemos nada.
    if(this.searchTerm.trim() == ''){
      return;
    }

    this.films.searchedFilms(this.searchTerm, "title").subscribe(film => {
      this.buscarPelicula.emit(film);
    });
  }

  ngOnInit(): void {

  }

}
