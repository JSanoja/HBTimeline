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
      title: 'Gatite',
      url: '',
      id: '7wvMSA5_9o4'
    },
    {
      title: 'Gatite',
      url: '',
      id: 'GV6_UeW6Mbs'
    },
    {
      title: 'Gatite',
      url: '',
      id: 'JzlvAD1upiE'
    },
    {
      title: 'Gatite',
      url: '',
      id: 'MsyvJI099Vc'
    },
    {
      title: 'Gatite',
      url: '',
      id: 'Wz2_9zl0MJM'
    },
    {
      title: 'Gatite',
      url: '',
      id: 'yl5_2MCizGY'
    },
    {
      title: 'Gatite',
      url: '',
      id: 'YQjiO4o_NgI'
    },
    {
      title: 'Gatite',
      url: '',
      id: 'O3GDC_CObwg'
    },
    {
      title: 'Gatite',
      url: '',
      id: 'MPX0GL0einY'
    },
    {
      title: 'Gatite',
      url: '',
      id: 'ymEwUeZIIIc'
    },
    {
      title: 'Gatite',
      url: '',
      id: 'P5VC3qLx0-0'
    },
    {
      title: 'Gatite',
      url: '',
      id: 'kyXeueAH6Ls'
    },
    {
      title: 'Gatite',
      url: '',
      id: 'D7BSBdY0GtU'
    }
  ];
  data2: Array<IdataTimeline> = [
    {
      title: 'Perrite',
      url: '',
      id: '7JM4L8C8Mg8'
    },
    {
      title: 'Perrite',
      url: '',
      id: 'Z73AltthF6I'
    },
    {
      title: 'Perrite',
      url: '',
      id: '57JE64Cf_yQ'
    },
    {
      title: 'Perrite',
      url: '',
      id: 'ZRsbnuI3_uE'
    },
    {
      title: 'Perrite',
      url: '',
      id: 'jsRPxfo1NPE'
    },
    {
      title: 'Perrite',
      url: '',
      id: 'sHKkbOjCcx0'
    },
    {
      title: 'Perrite',
      url: '',
      id: 'DtRHJ6DKR2k'
    },
    {
      title: 'Perrite',
      url: '',
      id: '1GfYMaocQP0'
    },
    {
      title: 'Perrite',
      url: '',
      id: 'tMuhqwnO6JI'
    },
    {
      title: 'Perrite',
      url: '',
      id: 'uVeeNbX1XWY'
    },
    {
      title: 'Perrite',
      url: '',
      id: 'M0E_8CnVm8s'
    },
    {
      title: 'Perrite',
      url: '',
      id: 'X2u3kKlkKn4'
    },
    {
      title: 'Perrite',
      url: '',
      id: 'kgvFtwRhJXU'
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
