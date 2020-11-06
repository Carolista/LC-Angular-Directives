import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'angular-forms-directives';
  compact: boolean;

  constructor() {
      this.compact = false;
  }

}
