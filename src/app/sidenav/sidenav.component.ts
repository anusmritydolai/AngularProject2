import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { environment as p } from 'src/environments/environment.prod';
@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  showFiller = false;

  constructor() { }

  ngOnInit(): void {
    console.log(environment.production);
    console.log(p.firebaseConfig);
    
  }

}
