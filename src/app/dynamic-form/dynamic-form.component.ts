import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PersonService } from '../service/person.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  public form: FormGroup;
  @Input() formDataObj;
  // public fieldLable = 'Age';
  // public fieldName = 'age';
  // public fieldValue = '30';

  // More number of Fields


  personProps = [];

  constructor(private personService: PersonService) { }

  ngOnInit() {
    const formDataObj = {};
    console.log(formDataObj);
      console.log(this.formDataObj);
      for (const prop of Object.keys(this.formDataObj)) {
        console.log(prop);
          formDataObj[prop] = new FormControl(this.formDataObj[prop].value, this.mapValidator(this.formDataObj[prop].validators));
        /*
          {
            key: firstname,
            label: 'FirstName',
            type: 'text'
          }
         */
          this.personProps.push({
            key: prop,
            label: this.formDataObj[prop].label,
            type: this.formDataObj[prop].type,
            options: this.formDataObj[prop].options
          });
      }
    // this.form = new FormGroup({
    //   [this.fieldName]: new FormControl(this.fieldValue)
    // });

    this.form = new FormGroup(formDataObj);
  }

  mapValidator(validators) {
    if (validators) {
      return Object.keys(validators).map(validationType => {
        if (validationType === 'required') {
          return Validators.required;
        } else if (validationType === 'min') {
          return Validators.min(validators[validationType]);
        }
      });
    } else {
      return [];
    }
  }
}
