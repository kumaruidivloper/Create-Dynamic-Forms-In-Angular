import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'Create-Dynamic-Forms-In-Angular';

  public form: FormGroup;
  // public fieldLable = 'Age';
  // public fieldName = 'age';
  // public fieldValue = '30';

  // More number of Fields
  public person = {
    firstname: 'Kumar',
    surname: 'shan',
    age: 30,
    twitter: '@KumarShan'
  };

  personProps = [];

  ngOnInit() {
    const formDataObj = {};
    for (const prop of Object.keys(this.person)) {
        formDataObj[prop] = new FormControl(this.person[prop]);
        this.personProps.push(prop);
    }
    // this.form = new FormGroup({
    //   [this.fieldName]: new FormControl(this.fieldValue)
    // });

    this.form = new FormGroup(formDataObj);
  }
}
