import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }
  
  @Input() page!: number;
  @Output () pageChange = new EventEmitter<number>();

  changePage(newPage:any){
    console.log("New page: ", newPage);
    this.pageChange.emit(newPage);
  }

  ngOnInit(): void {

  }

}
