import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-test';
  myVariable = '';
  hello = '';
  hello1 = 14;
  hello3 = 78;

  setHello() {
    this.hello = 'hello';
  }
}
