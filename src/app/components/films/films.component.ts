import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  @Input() peliculas:any;
  @Output() cerrarModal = new EventEmitter<string>();

  constructor() { };

  buscarPelicula(film:any){
    console.log("Enviamos: ", film);
    this.cerrarModal.emit(film);
  }

  // Que se ejecuta al cargar ?
  ngOnInit(): void {
  }

}
