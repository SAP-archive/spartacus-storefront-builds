import { Cart, CartService, CmsMiniCartComponent } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CmsComponentData } from '../../../../cms-structure/page/index';
export declare class MiniCartComponent {
    protected component: CmsComponentData<CmsMiniCartComponent>;
    protected cartService: CartService;
    cart$: Observable<Cart>;
    constructor(component: CmsComponentData<CmsMiniCartComponent>, cartService: CartService);
}
