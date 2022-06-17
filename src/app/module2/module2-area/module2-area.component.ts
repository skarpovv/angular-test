import { Component, Input, OnInit } from '@angular/core';
import { Area, Thing } from '../../api.service';

@Component({
  selector: 'app-module2-area',
  templateUrl: './module2-area.component.html',
  styleUrls: ['./module2-area.component.scss'],
})
export class Module2AreaComponent implements OnInit {
  @Input() area: Area;
  @Input() things: Array<Thing>;
  constructor() {}

  ngOnInit(): void {}
}
