import { Component, OnInit } from '@angular/core';
import { ApiService, Area, Thing } from '../../api.service';
import { delay, tap } from 'rxjs';

@Component({
  selector: 'app-module1-main',
  templateUrl: './module1-main.component.html',
  styleUrls: ['./module1-main.component.scss'],
})
export class Module1MainComponent implements OnInit {
  areas: Array<Area>;
  things: Array<Thing>;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getAreas().subscribe(res => {
      this.areas = res;
      console.log('area');
    });
    this.api.getThings().subscribe(res => {
      this.things = res;
      console.log('things');
    });
  }

  getThingsByAreaId(areaId: any): Array<Thing> {
    console.log('getThingsByAreaId');
    return this.things.filter(el => el.areaId === areaId);
  }
}
