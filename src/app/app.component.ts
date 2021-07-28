import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  newses: any[] = [];
  posts: any[];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getNews().subscribe((data: any) => {
      console.log(data.data);
      this.newses = data.data
      this.posts = this.newses.slice(0, 7);
    })
  }

  title = 'Project2';

  toggle = false;

  pageEvent(pageEvent: any) {
    console.log(pageEvent);
    const x = pageEvent.pageSize * pageEvent.pageIndex;
    this.posts = this.newses.slice(x, x + pageEvent.pageSize);
  }
}
