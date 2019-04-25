import { CartService, CmsMiniCartComponent, UICart } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CmsComponentData } from '../../../../cms-structure/page/index';
export declare class MiniCartComponent {
    protected component: CmsComponentData<CmsMiniCartComponent>;
    protected cartService: CartService;
    cart$: Observable<UICart>;
    constructor(component: CmsComponentData<CmsMiniCartComponent>, cartService: CartService);
}
