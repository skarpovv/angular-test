import { Component, Input, OnInit } from '@angular/core';
import { Thing } from '../../api.service';

@Component({
  selector: 'app-module1-thing',
  templateUrl: './module1-thing.component.html',
  styleUrls: ['./module1-thing.component.scss'],
})
export class Module1ThingComponent {
  @Input() thing: Thing;
  constructor() {}
}
