import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  @Input() peliculas:any;
  @Output() propagar2 = new EventEmitter<string>();

  constructor() { };

  procesaPropagar(film:any){
    console.log("Enviamos: ", film);
    this.propagar2.emit(film);
  }

  // Que se ejecuta al cargar ?
  ngOnInit(): void {
  }

}
