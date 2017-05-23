import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger(
      'enterAnimation', [
        transition (':enter', [
          style ({opacity: 0 }),
          animate ('200ms', style ({opacity: 1 }))
        ]),
        transition(':leave', [
          style ({opacity: 1 }),
          animate ('200ms', style ({opacity: 0 }))
        ])
      ]
    ),
  ]
})
export class NavbarComponent implements OnInit {
  dropdown = false;
  form: FormGroup;
  disable = false;

  constructor(private auth: AuthService,
    private api: ApiService,
    private fb: FormBuilder,
    private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
    this.form = this.fb.group({
      Url: ['', Validators.required],
      Description: ['']
    });
  }

  dropdownChange() {
    this.dropdown = !this.dropdown;
  }

  onSubmit() {
    this.disable = true;
    this.api.addImg(this.form.value, this.auth.userProfile).subscribe(
      response => {
        this.form.reset();
        this.disable = false;
        this._flashMessagesService.show('Pic was added!', { cssClass: 'alert-success', timeout: 2000 });
        const pic = JSON.parse(response['_body']);
        this.api.addPic(pic, this.auth.userProfile);
      },
      error => {
        console.log(error);
        this.disable = false;
      },
      () => console.log('complete')
    );
  }

}
