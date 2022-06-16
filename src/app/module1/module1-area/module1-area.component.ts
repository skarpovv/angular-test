import { Component, Input, OnInit } from '@angular/core';
import { Area, Thing } from '../../api.service';

@Component({
  selector: 'app-module1-area',
  templateUrl: './module1-area.component.html',
  styleUrls: ['./module1-area.component.scss'],
})
export class Module1AreaComponent implements OnInit {
  @Input() area: Area;
  @Input() things: Array<Thing>;

  constructor() {}

  ngOnInit() {
    // let test: Array<Thing> = [];
    // this.things.forEach(el => {
    //   if (!el.joinedWith) test.push(el);
    // });
    // this.things = [...test];
  }

  getThings() {
    console.log(this.things);
  }
}
