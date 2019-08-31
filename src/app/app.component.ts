import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Create-Dynamic-Forms-In-Angular';

  public person = {
    firstname: {
      label: 'FirstName',
      value: 'Kumar',
      type: 'text'
    },
    surname: {
      label: 'SurName',
      value: 'Shan',
      type: 'text'
    },
    age: {
      label: 'Age',
      value: 30,
      type: 'number'
    },
    twitter: {
      label: 'Twitter',
      value: '@KumarShan',
      type: 'text'
    }
  };
}
