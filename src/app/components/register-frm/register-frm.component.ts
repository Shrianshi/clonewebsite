import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CountryService } from 'src/app/services/country.service';
import { PatternValidators } from 'src/app/constants/pattern.constants';


@Component({

  selector: 'app-register-frm',
  templateUrl: './register-frm.component.html',
  styleUrls: ['./register-frm.component.css']
})
export class RegisterFrmComponent {
  constructor(private apiService: CountryService) { }

  registerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(30), PatternValidators.nameValidator()]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(20), PatternValidators.nameValidator()]),
    email: new FormControl('', [Validators.required, Validators.email, PatternValidators.emailValidator()]),
    dob: new FormControl('', [Validators.required, PatternValidators.dateValidator()]),
    // countryCode: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3), PatternValidators.countryCodeValidator()]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(14), PatternValidators.numberValidator()]),
    country: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),

  });

  countries: any[] = [];
  states: any[] = [];
  cities: any[] = [];


  getMaxDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  ngOnInit() {
    this.apiService.getCountries().subscribe(
      (result) => {
        this.countries = result
        console.log(result)
      }, (error) => console.log('error', error)
    );
  }

  onCountryChange() {
    const selectedCountry = this.registerForm.get('country')?.value;
    this.apiService.getStates(selectedCountry).subscribe(
      (result) => {
        this.states = result
        this.registerForm?.get('state')?.setValue('');
        this.cities = [];
        this.registerForm?.get('city')?.setValue('');
        console.log(result)
      }, (error) => console.log('error', error)
    );
  }


  onStateChange() {
    const selectedCountry = this.registerForm.get('country')?.value;
    const selectedState = this.registerForm.get('state')?.value;
    console.log(selectedCountry, selectedState)
    this.apiService.getCities(selectedCountry, selectedState).subscribe(
      (result) => {
        this.cities = result
        console.log(result)
      }, (error) => console.log('error', error)
    );
  }

  onSubmit() {
    if (this.registerForm.valid) {
      window.alert("Form submitted successfully!")
      console.log(this.registerForm.value);
      this.registerForm.reset();
    }

  }


}
