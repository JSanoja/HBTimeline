import { Component, OnInit } from '@angular/core';
import { IdataTimeline } from './interfaces/interfaces';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'elo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  data1: Array<IdataTimeline> = [
    {
      title: 'Gato',
      url: '',
      id: '7wvMSA5_9o4'
    },
    {
      title: 'Gato',
      url: '',
      id: 'GV6_UeW6Mbs'
    }
  ];
  data2: Array<IdataTimeline> = [
    {
      title: 'Perro',
      url: '',
      id: '7JM4L8C8Mg8'
    },
    {
      title: 'Perro',
      url: '',
      id: 'Z73AltthF6I'
    }
  ];
  title = 'HBTimeline';
  cats: Array<string> = [];
  dogs: Array<string> = [];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get('https://api.thecatapi.com/v1/images/search?limit=30&mime_types=gif&order=Random&size=small').subscribe((data: any) => {
      data.forEach(da => {
        this.cats.push(da.url);
      });
    });
    this.http.get('https://api.thedogapi.com/v1/images/search?limit=30&mime_types=gif&order=Random&size=small').subscribe((data: any) => {
      data.forEach(da => {
        this.dogs.push(da.url);
      });
    });
  }
}
