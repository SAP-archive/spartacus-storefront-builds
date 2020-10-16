import { OnInit } from '@angular/core';
import { ActiveCartService, Cart, CmsParagraphComponent, CmsService, OrderEntry, SelectiveCartService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { Item } from '../cart-shared/cart-item/cart-item.component';
import * as ɵngcc0 from '@angular/core';
export declare class SaveForLaterComponent implements OnInit {
    protected cmsService: CmsService;
    protected cartService: ActiveCartService;
    protected selectiveCartService: SelectiveCartService;
    saveForLater$: Observable<Cart>;
    cart$: Observable<Cart>;
    entries$: Observable<OrderEntry[]>;
    cartLoaded$: Observable<boolean>;
    data$: Observable<CmsParagraphComponent>;
    isCartEmpty$: Observable<boolean>;
    constructor(cmsService: CmsService, cartService: ActiveCartService, selectiveCartService: SelectiveCartService);
    ngOnInit(): void;
    moveToCart(item: Item): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SaveForLaterComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SaveForLaterComponent, "cx-save-for-later", never, {}, {}, never, never>;
}

//# sourceMappingURL=save-for-later.component.d.ts.map