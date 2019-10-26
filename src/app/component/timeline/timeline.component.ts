import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IdataTimeline } from 'src/app/interfaces/interfaces';




@Component({
  selector: 'elo-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})

export class TimelineComponent implements OnInit {
  @Input() data: IdataTimeline;
  @Input() avatar: Array<string>;
  player: YT.Player;
  constructor(private http: HttpClient) { }
  ngOnInit() {
  }

  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }

}
