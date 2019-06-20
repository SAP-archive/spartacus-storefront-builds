import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Country, Region, UserAddressService } from '@spartacus/core';
import { BehaviorSubject, Observable } from 'rxjs';
export declare class BillingAddressFormComponent implements OnInit {
    protected userAddressService: UserAddressService;
    regions$: Observable<Region[]>;
    billingAddress: FormGroup;
    countries$: Observable<Country[]>;
    selectedCountry$: BehaviorSubject<string>;
    constructor(userAddressService: UserAddressService);
    ngOnInit(): void;
    countrySelected(country: Country): void;
    regionSelected(region: Region): void;
}
