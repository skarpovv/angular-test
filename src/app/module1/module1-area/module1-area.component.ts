import { Component, Input, OnInit } from '@angular/core';
import { Area, Thing } from '../../api.service';

@Component({
  selector: 'app-module1-area',
  templateUrl: './module1-area.component.html',
  styleUrls: ['./module1-area.component.scss'],
})
export class Module1AreaComponent {
  @Input() area: Area;
  @Input() things: Array<Thing>;

  constructor() {}

  getThings() {
    console.log(this.things);
  }
}
