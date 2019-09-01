import { Component, ChangeDetectionStrategy, OnInit  } from '@angular/core';

import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PersonService } from './service/person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  public title = 'Create-Dynamic-Forms-In-Angular';
  public personsService: any;

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

  // private person = new Object();
  constructor(private personService: PersonService) { }
  loadContacts() {
    // console.log(this.person);
    this.personService.getPersonForm().subscribe(data => {
        this.personsService = data;
        console.log(this.personsService);
    });
  }

  ngOnInit() {
    this.loadContacts();
  }
}
