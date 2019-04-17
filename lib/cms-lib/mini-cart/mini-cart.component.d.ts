import { Observable } from 'rxjs';
import { CartService, CmsMiniCartComponent, Cart } from '@spartacus/core';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
export declare class MiniCartComponent {
    protected component: CmsComponentData<CmsMiniCartComponent>;
    protected cartService: CartService;
    cart$: Observable<Cart>;
    constructor(component: CmsComponentData<CmsMiniCartComponent>, cartService: CartService);
}
