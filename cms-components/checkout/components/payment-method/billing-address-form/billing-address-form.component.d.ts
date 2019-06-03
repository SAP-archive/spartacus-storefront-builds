import { FormGroup } from '@angular/forms';
import { Country } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class BillingAddressFormComponent {
    billingAddress: FormGroup;
    countries$: Observable<Country[]>;
    countrySelected(country: Country): void;
}
