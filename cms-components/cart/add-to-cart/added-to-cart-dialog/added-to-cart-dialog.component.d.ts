import { ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cart, CartService, OrderEntry } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ICON_TYPE } from '../../../../cms-components/misc/icon/index';
import { ModalService } from '../../../../shared/components/modal/index';
export declare class AddedToCartDialogComponent implements OnInit {
    protected modalService: ModalService;
    protected cartService: CartService;
    protected fb: FormBuilder;
    iconTypes: typeof ICON_TYPE;
    entry$: Observable<OrderEntry>;
    cart$: Observable<Cart>;
    loaded$: Observable<boolean>;
    quantity: number;
    firstUpdate: boolean;
    showItemIncrLabel: boolean;
    dialog: ElementRef;
    form: FormGroup;
    constructor(modalService: ModalService, cartService: CartService, fb: FormBuilder);
    ngOnInit(): void;
    dismissModal(reason?: any): void;
    removeEntry(item: OrderEntry): void;
    updateEntry({ item, updatedQuantity }: {
        item: any;
        updatedQuantity: any;
    }): void;
    private createEntryFormGroup;
}
