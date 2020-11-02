import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActiveCartService, Product } from '@spartacus/core';
import { Subscription } from 'rxjs';
import { ModalRef } from '../../../shared/components/modal/modal-ref';
import { ModalService } from '../../../shared/components/modal/modal.service';
import { CurrentProductService } from '../../product/current-product.service';
export declare class AddToCartComponent implements OnInit, OnDestroy {
    protected modalService: ModalService;
    protected currentProductService: CurrentProductService;
    private cd;
    protected activeCartService: ActiveCartService;
    productCode: string;
    showQuantity: boolean;
    /**
     * As long as we do not support #5026, we require product input, as we need
     *  a reference to the product model to fetch the stock data.
     */
    product: Product;
    maxQuantity: number;
    modalRef: ModalRef;
    hasStock: boolean;
    quantity: number;
    protected numberOfEntriesBeforeAdd: number;
    subscription: Subscription;
    addToCartForm: FormGroup;
    constructor(modalService: ModalService, currentProductService: CurrentProductService, cd: ChangeDetectorRef, activeCartService: ActiveCartService);
    ngOnInit(): void;
    private setStockInfo;
    updateCount(value: number): void;
    addToCart(): void;
    private openModal;
    ngOnDestroy(): void;
}
