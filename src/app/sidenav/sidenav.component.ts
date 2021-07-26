import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  showFiller = false;

  constructor() { }

  ngOnInit(): void {
  }

}
