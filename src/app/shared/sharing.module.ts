import { NgModule } from '@angular/core';
import { ThingsByAreaIdPipe } from './pipes/things-by-area-id.pipe';

@NgModule({
  declarations: [ThingsByAreaIdPipe],
  exports: [ThingsByAreaIdPipe],
})
export class SharingModule {}
