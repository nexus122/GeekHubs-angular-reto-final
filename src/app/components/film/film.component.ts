import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {  

  @Input() pelicula:any;
  @Input() modalVisible:boolean | undefined;  
  @Output() closeFilmModal = new EventEmitter();

  constructor() { }

  closeModal(){
    console.log("Cerrar modal");
    this.modalVisible = false;
    this.closeFilmModal.emit(this.modalVisible);
  }

  ngOnInit(): void {

  }

}
