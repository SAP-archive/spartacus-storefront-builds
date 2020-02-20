import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Country, Region, UserAddressService } from '@spartacus/core';
import { BehaviorSubject, Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BillingAddressFormComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<BillingAddressFormComponent, "cx-billing-address-form", never, {
    "billingAddress": "billingAddress";
    "countries$": "countries$";
}, {}, never>;
}

//# sourceMappingURL=billing-address-form.component.d.ts.map