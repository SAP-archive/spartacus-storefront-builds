import { EventEmitter, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
export interface Item {
    product?: any;
    quantity?: any;
    basePrice?: any;
    totalPrice?: any;
    updateable?: boolean;
}
export declare class CartItemComponent implements OnInit {
    compact: boolean;
    item: Item;
    potentialProductPromotions: any[];
    isReadOnly: boolean;
    cartIsLoading: boolean;
    remove: EventEmitter<any>;
    update: EventEmitter<any>;
    view: EventEmitter<any>;
    parent: FormGroup;
    ngOnInit(): void;
    isProductOutOfStock(product: any): boolean;
    updateItem(updatedQuantity: number): void;
    removeItem(): void;
    viewItem(): void;
}
