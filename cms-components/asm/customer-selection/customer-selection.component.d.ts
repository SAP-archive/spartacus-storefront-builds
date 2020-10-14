import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AsmConfig, AsmService, CustomerSearchPage, User } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class CustomerSelectionComponent implements OnInit, OnDestroy {
    private fb;
    private asmService;
    private config;
    customerSelectionForm: FormGroup;
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CustomerSelectionComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CustomerSelectionComponent, "cx-customer-selection", never, {}, { "submitEvent": "submitEvent"; }, never, never>;
}

//# sourceMappingURL=customer-selection.component.d.ts.map