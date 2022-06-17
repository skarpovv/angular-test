import { Pipe, PipeTransform } from '@angular/core';
import { Thing } from '../../api.service';

@Pipe({
  name: 'thingsByAreaId',
  pure: true,
})
export class ThingsByAreaIdPipe implements PipeTransform {
  transform(things: Array<Thing>, id: number): Array<Thing> {
    return things.filter(el => el.areaId === id);
  }
}
