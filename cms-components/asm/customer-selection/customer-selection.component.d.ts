import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AsmService, GlobalMessageService } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class CustomerSelectionComponent implements OnInit, OnDestroy {
    private fb;
    private asmService;
    protected globalMessageService: GlobalMessageService;
    form: FormGroup;
    private submitClicked;
    private subscription;
    searchResultsLoading$: Observable<boolean>;
    submitEvent: EventEmitter<{
        customerId: string;
    }>;
    constructor(fb: FormBuilder, asmService: AsmService, globalMessageService: GlobalMessageService);
    ngOnInit(): void;
    private handleSearchResults;
    onSubmit(): void;
    isNotValid(formControlName: string): boolean;
    ngOnDestroy(): void;
}
