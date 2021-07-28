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
  list: boolean = false;

  images: string[] = [
    "../assets/1.jpg",
    "../assets/2.jpg",
    "../assets/3.jpg",
    "../assets/4.jpg",
    "../assets/5.jpg",
    "../assets/6.jpg",
    "../assets/7.png",
    "../assets/8.png",
    "../assets/9.jpg",
    "../assets/10.png"
  ]

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getNews().subscribe((data: any) => {
      let index = 0;
      this.newses = data.data.map(news=>{
        const x = Math.floor(Math.random() * 9) + 1
        news.index = index;
        news.src = this.images[x];
        index++;
        return news;
      })
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

  close(index, i) {
    const x = this.newses.pop()
    x.index = index;
    this.newses.splice(index, 1, x);
    this.posts.splice(i, 1, x);
  }
}
