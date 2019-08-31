import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'Create-Dynamic-Forms-In-Angular';

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      firstname: new FormControl('Kumar')
    });
  }
}
