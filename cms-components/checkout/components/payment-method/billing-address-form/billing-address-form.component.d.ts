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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlsbGluZy1hZGRyZXNzLWZvcm0uY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImJpbGxpbmctYWRkcmVzcy1mb3JtLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7QUFVQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvdW50cnksIFJlZ2lvbiwgVXNlckFkZHJlc3NTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQmlsbGluZ0FkZHJlc3NGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcm90ZWN0ZWQgdXNlckFkZHJlc3NTZXJ2aWNlOiBVc2VyQWRkcmVzc1NlcnZpY2U7XG4gICAgcmVnaW9ucyQ6IE9ic2VydmFibGU8UmVnaW9uW10+O1xuICAgIGJpbGxpbmdBZGRyZXNzOiBGb3JtR3JvdXA7XG4gICAgY291bnRyaWVzJDogT2JzZXJ2YWJsZTxDb3VudHJ5W10+O1xuICAgIHNlbGVjdGVkQ291bnRyeSQ6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+O1xuICAgIGNvbnN0cnVjdG9yKHVzZXJBZGRyZXNzU2VydmljZTogVXNlckFkZHJlc3NTZXJ2aWNlKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIGNvdW50cnlTZWxlY3RlZChjb3VudHJ5OiBDb3VudHJ5KTogdm9pZDtcbiAgICByZWdpb25TZWxlY3RlZChyZWdpb246IFJlZ2lvbik6IHZvaWQ7XG59XG4iXX0=