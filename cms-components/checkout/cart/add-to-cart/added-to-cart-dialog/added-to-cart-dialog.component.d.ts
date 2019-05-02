import { AfterViewChecked, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { CartService, Cart, OrderEntry } from '@spartacus/core';
export declare class AddedToCartDialogComponent implements OnInit, AfterViewChecked {
    activeModal: NgbActiveModal;
    protected cartService: CartService;
    protected fb: FormBuilder;
    entry$: Observable<OrderEntry>;
    cart$: Observable<Cart>;
    loaded$: Observable<boolean>;
    cartLoaded$: Observable<boolean>;
    quantity: number;
    headerLabel: string;
    previousLoaded: boolean;
    finishedLoading: boolean;
    private firstUpdate;
    dialog: ElementRef;
    form: FormGroup;
    constructor(activeModal: NgbActiveModal, cartService: CartService, fb: FormBuilder);
    ngOnInit(): void;
    ngAfterViewChecked(): void;
    removeEntry(item: any): void;
    updateEntry({ item, updatedQuantity }: {
        item: any;
        updatedQuantity: any;
    }): void;
    private createEntryFormGroup;
}
