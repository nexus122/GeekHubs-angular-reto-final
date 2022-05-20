import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }
  
  @Input() page!: number;
  @Input() maxPage!: number;
  @Output () pageChange = new EventEmitter<any>();

  changePage(newPage:any){        
    this.pageChange.emit(newPage);
  }

  ngOnInit(): void {

  }

}
