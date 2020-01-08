import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'What\'s for Lunch?';

  cuisines: any[] = [
    { 
      value: 'thai', 
      viewValue: 'Thai'
    },
    { 
      value: 'indian', 
      viewValue: 'Indian'
    },
    { 
      value: 'japanese', 
      viewValue: 'Japanese'
    },
    { 
      value: 'italian', 
      viewValue: 'Italian'
    }
  ];

  distances: number[] = [1, 5, 10, 20, 50];
}
