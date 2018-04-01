import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<app-header></app-header> <router-outlet></router-outlet>
  <router-outlet name='chat'></router-outlet>`,
})
export class AppComponent  { name = 'Angular'; }
