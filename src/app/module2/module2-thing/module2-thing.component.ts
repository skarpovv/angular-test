import { Component, Input, OnInit } from '@angular/core';
import { Thing } from '../../api.service';

@Component({
  selector: 'app-module2-thing',
  templateUrl: './module2-thing.component.html',
  styleUrls: ['./module2-thing.component.scss'],
})
export class Module2ThingComponent {
  @Input() thing: Thing;
  constructor() {}
}
