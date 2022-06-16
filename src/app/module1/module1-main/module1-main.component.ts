import { Component, OnInit } from '@angular/core';
import { ApiService, Area } from '../../api.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-module1-main',
  templateUrl: './module1-main.component.html',
  styleUrls: ['./module1-main.component.scss'],
})
export class Module1MainComponent implements OnInit {
  areas: Array<Area> = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getAreas().subscribe(areas => {
      this.areas = areas;
      console.log(this.areas);
    });
  }
}
