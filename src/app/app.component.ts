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
      type: 'text',
      validators: {
        required: true
      }
    },
    surname: {
      label: 'SurName',
      value: 'Shan',
      type: 'text'
    },
    gender: {
      label: 'Gender',
      value: 'F',
      type: 'radio',
      options: [
        { label: 'Male', value: 'M'},
        { label: 'Female', value: 'F'},
      ]
    },
    age: {
      label: 'Age',
      value: 30,
      type: 'number',
      validators: {
        min: 18
      }
    },
    twitter: {
      label: 'Twitter',
      value: '@KumarShan',
      type: 'text'
    },
    city: {
      label: 'City',
      value: 'NY',
      type: 'select',
      options: [
        { label: '(choose one)', value: ''},
        { label: 'New York', value: 'NY'},
        { label: 'Los Angeles', value: 'LA'},
        { label: 'Singapore', value: 'SG'},
        { label: 'Sydney', value: 'SYD'}
      ]
    },
    country: {
      label: 'Country',
      value: 'US',
      type: 'select',
      options: [
        { label: '(choose one)', value: ''},
        { label: 'India', value: 'IND'},
        { label: 'United States', value: 'US'},
        { label: 'Australia', value: 'AUS'},
        { label: 'Singapore', value: 'SG'}
      ]
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
