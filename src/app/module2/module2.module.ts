import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module2MainComponent } from './module2-main/module2-main.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Module2MainComponent,
  },
];

@NgModule({
  declarations: [Module2MainComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class Module2Module {}
