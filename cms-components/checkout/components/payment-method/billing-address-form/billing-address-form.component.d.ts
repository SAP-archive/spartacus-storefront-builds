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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlsbGluZy1hZGRyZXNzLWZvcm0uY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImJpbGxpbmctYWRkcmVzcy1mb3JtLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7QUFVQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ291bnRyeSwgUmVnaW9uLCBVc2VyQWRkcmVzc1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBCaWxsaW5nQWRkcmVzc0Zvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByb3RlY3RlZCB1c2VyQWRkcmVzc1NlcnZpY2U6IFVzZXJBZGRyZXNzU2VydmljZTtcbiAgICByZWdpb25zJDogT2JzZXJ2YWJsZTxSZWdpb25bXT47XG4gICAgYmlsbGluZ0FkZHJlc3M6IEZvcm1Hcm91cDtcbiAgICBjb3VudHJpZXMkOiBPYnNlcnZhYmxlPENvdW50cnlbXT47XG4gICAgc2VsZWN0ZWRDb3VudHJ5JDogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz47XG4gICAgY29uc3RydWN0b3IodXNlckFkZHJlc3NTZXJ2aWNlOiBVc2VyQWRkcmVzc1NlcnZpY2UpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgY291bnRyeVNlbGVjdGVkKGNvdW50cnk6IENvdW50cnkpOiB2b2lkO1xuICAgIHJlZ2lvblNlbGVjdGVkKHJlZ2lvbjogUmVnaW9uKTogdm9pZDtcbn1cbiJdfQ==