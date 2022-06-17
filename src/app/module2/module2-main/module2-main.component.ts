import { Component, OnInit } from '@angular/core';
import { ApiService, Area, Thing } from '../../api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-module2-main',
  templateUrl: './module2-main.component.html',
  styleUrls: ['./module2-main.component.scss'],
})
export class Module2MainComponent implements OnInit {
  areas$: Observable<Array<Area>> | undefined;
  things$: Observable<Array<Thing>> | undefined;

  constructor(public api: ApiService) {}

  ngOnInit(): void {
    this.areas$ = this.api.getAreas();
    this.things$ = this.api.getThings();
  }
}
