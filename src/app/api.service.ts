import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable } from 'rxjs';

export interface Area {
  areaId: number;
  name: string;
}

export interface Thing {
  id: number;
  areaId: number;
  joinedWith: number | null;
  sku: string;
  defaultSku: string;
  status: string;
  countActive: number;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getAreas(): Observable<Array<Area>> {
    return this.http.get<Array<Area>>('/assets/areas.json');
  }
  getThings(): Observable<Array<Thing>> {
    return this.http.get<Array<Thing>>('/assets/things.json');
  }
}
