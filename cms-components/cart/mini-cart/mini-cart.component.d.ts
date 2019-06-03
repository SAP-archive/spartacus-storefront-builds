import { CartService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ICON_TYPE } from '../../misc/icon/index';
export declare class MiniCartComponent {
    protected cartService: CartService;
    iconTypes: typeof ICON_TYPE;
    quantity$: Observable<number>;
    total$: Observable<string>;
    constructor(cartService: CartService);
}
