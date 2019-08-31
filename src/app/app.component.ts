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
  public fieldLable = 'FirstName';
  public fieldName = 'firstname';
  public fieldValue = 'Kumar';

  ngOnInit() {
    this.form = new FormGroup({
      [this.fieldName]: new FormControl(this.fieldValue)
    });
  }
}
