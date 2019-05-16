import { AfterViewChecked, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Cart, CartService, OrderEntry } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ICON_TYPE } from '../../../../../cms-components/misc/icon/index';
export declare class AddedToCartDialogComponent implements OnInit, AfterViewChecked {
    activeModal: NgbActiveModal;
    protected cartService: CartService;
    protected fb: FormBuilder;
    iconTypes: typeof ICON_TYPE;
    entry$: Observable<OrderEntry>;
    cart$: Observable<Cart>;
    loaded$: Observable<boolean>;
    cartLoaded$: Observable<boolean>;
    quantity: number;
    previousLoaded: boolean;
    finishedLoading: boolean;
    firstUpdate: boolean;
    showItemIncrLabel: boolean;
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
