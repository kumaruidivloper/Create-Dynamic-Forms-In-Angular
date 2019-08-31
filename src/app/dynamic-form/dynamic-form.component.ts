import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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

  ngOnInit() {
    const formDataObj = {};
    for (const prop of Object.keys(this.formDataObj)) {
        formDataObj[prop] = new FormControl(this.formDataObj[prop].value);
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
          type: this.formDataObj[prop].type
        });
    }
    // this.form = new FormGroup({
    //   [this.fieldName]: new FormControl(this.fieldValue)
    // });

    this.form = new FormGroup(formDataObj);
  }
}
