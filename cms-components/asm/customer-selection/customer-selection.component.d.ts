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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItc2VsZWN0aW9uLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJjdXN0b21lci1zZWxlY3Rpb24uY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFzbUNvbmZpZywgQXNtU2VydmljZSwgQ3VzdG9tZXJTZWFyY2hQYWdlLCBVc2VyIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEN1c3RvbWVyU2VsZWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgZmI7XG4gICAgcHJpdmF0ZSBhc21TZXJ2aWNlO1xuICAgIHByaXZhdGUgY29uZmlnO1xuICAgIGZvcm06IEZvcm1Hcm91cDtcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbjtcbiAgICBzZWFyY2hSZXN1bHRzTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgc2VhcmNoUmVzdWx0czogT2JzZXJ2YWJsZTxDdXN0b21lclNlYXJjaFBhZ2U+O1xuICAgIHNlbGVjdGVkQ3VzdG9tZXI6IFVzZXI7XG4gICAgc3VibWl0RXZlbnQ6IEV2ZW50RW1pdHRlcjx7XG4gICAgICAgIGN1c3RvbWVySWQ6IHN0cmluZztcbiAgICB9PjtcbiAgICByZXN1bHRMaXN0OiBFbGVtZW50UmVmO1xuICAgIHNlYXJjaFRlcm06IEVsZW1lbnRSZWY7XG4gICAgY29uc3RydWN0b3IoZmI6IEZvcm1CdWlsZGVyLCBhc21TZXJ2aWNlOiBBc21TZXJ2aWNlLCBjb25maWc6IEFzbUNvbmZpZyk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBwcml2YXRlIGhhbmRsZVNlYXJjaFRlcm07XG4gICAgc2VsZWN0Q3VzdG9tZXJGcm9tTGlzdChjdXN0b21lcjogVXNlcik6IHZvaWQ7XG4gICAgb25TdWJtaXQoKTogdm9pZDtcbiAgICBvbkRvY3VtZW50Q2xpY2soZXZlbnQ6IGFueSk6IHZvaWQ7XG4gICAgY2xvc2VSZXN1bHRzKCk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==