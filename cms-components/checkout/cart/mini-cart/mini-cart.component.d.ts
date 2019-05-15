import { CartService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ICON_TYPES } from '../../../misc/icon/index';
export declare class MiniCartComponent {
    protected cartService: CartService;
    iconTypes: typeof ICON_TYPES;
    quantity$: Observable<number>;
    total$: Observable<string>;
    constructor(cartService: CartService);
}
