import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AsmConfig, AsmService, CustomerSearchPage, User } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class CustomerSelectionComponent implements OnInit, OnDestroy {
    private fb;
    private asmService;
    private config;
    form: FormGroup;
    private subscription;
    searchResultsLoading$: Observable<boolean>;
    searchResults: Observable<CustomerSearchPage>;
    selectedCustomer: User;
    submitEvent: EventEmitter<{
        customerId: string;
    }>;
    resultList: ElementRef;
    searchTerm: ElementRef;
    constructor(fb: FormBuilder, asmService: AsmService, config: AsmConfig);
    ngOnInit(): void;
    private handleSearchTerm;
    selectCustomerFromList(customer: User): void;
    onSubmit(): void;
    onDocumentClick(event: any): void;
    closeResults(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CustomerSelectionComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CustomerSelectionComponent, "cx-customer-selection", never, {}, {
    "submitEvent": "submitEvent";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItc2VsZWN0aW9uLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJjdXN0b21lci1zZWxlY3Rpb24uY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBc21Db25maWcsIEFzbVNlcnZpY2UsIEN1c3RvbWVyU2VhcmNoUGFnZSwgVXNlciB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDdXN0b21lclNlbGVjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIGZiO1xuICAgIHByaXZhdGUgYXNtU2VydmljZTtcbiAgICBwcml2YXRlIGNvbmZpZztcbiAgICBmb3JtOiBGb3JtR3JvdXA7XG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb247XG4gICAgc2VhcmNoUmVzdWx0c0xvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIHNlYXJjaFJlc3VsdHM6IE9ic2VydmFibGU8Q3VzdG9tZXJTZWFyY2hQYWdlPjtcbiAgICBzZWxlY3RlZEN1c3RvbWVyOiBVc2VyO1xuICAgIHN1Ym1pdEV2ZW50OiBFdmVudEVtaXR0ZXI8e1xuICAgICAgICBjdXN0b21lcklkOiBzdHJpbmc7XG4gICAgfT47XG4gICAgcmVzdWx0TGlzdDogRWxlbWVudFJlZjtcbiAgICBzZWFyY2hUZXJtOiBFbGVtZW50UmVmO1xuICAgIGNvbnN0cnVjdG9yKGZiOiBGb3JtQnVpbGRlciwgYXNtU2VydmljZTogQXNtU2VydmljZSwgY29uZmlnOiBBc21Db25maWcpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBoYW5kbGVTZWFyY2hUZXJtO1xuICAgIHNlbGVjdEN1c3RvbWVyRnJvbUxpc3QoY3VzdG9tZXI6IFVzZXIpOiB2b2lkO1xuICAgIG9uU3VibWl0KCk6IHZvaWQ7XG4gICAgb25Eb2N1bWVudENsaWNrKGV2ZW50OiBhbnkpOiB2b2lkO1xuICAgIGNsb3NlUmVzdWx0cygpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=