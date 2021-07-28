import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Output() toggle = new EventEmitter()
  countries: Country[] = [];
  showFiller = false;
  countryCode: string = '+91';
  filteredOptions: Observable<any[]>;

  grid: boolean = false;

  form: FormGroup = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phonenumber: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    countryCode: new FormControl('', [Validators.required]),
  });

  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {
    this.apiservice.getCountryWithCode().subscribe((data: Country[]) => {
      const x = data.map(a => {
        a.outputName = a.name + ' - ' + a.alpha2Code;
        a.outputCode = '+' + a.callingCodes[0];
        return a;
      })
      this.countries = x;
      // console.log(x);
    })
    this.filteredOptions = this.form.get('country').valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.country),
        map(country => country ? this._filter(country) : this.countries.slice())
      );
  }

  displayFn(user: Country): string {
    return user && user.outputName ? user.outputName : '';
  }

  private _filter(country: string): Country[] {
    const filterValue = country.toLowerCase();
    // return this.countries.filter(option => option?.outputName?.toLowerCase()?.startsWith(filterValue));
    return this.countries.filter(option => option?.outputName?.toLowerCase()?.indexOf(filterValue) >= 0);
  }
}

export interface Country {
  alpha2Code: string;
  callingCodes: string[];
  name: string;
  outputName: string;
  outputCode: string;
}