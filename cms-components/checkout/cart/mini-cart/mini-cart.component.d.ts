import { CartService, CmsMiniCartComponent } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ICON_TYPES } from '../../../../cms-components/misc/icon/index';
import { CmsComponentData } from '../../../../cms-structure/page/model/cms-component-data';
export declare class MiniCartComponent {
    protected component: CmsComponentData<CmsMiniCartComponent>;
    protected cartService: CartService;
    iconTypes: typeof ICON_TYPES;
    constructor(component: CmsComponentData<CmsMiniCartComponent>, cartService: CartService);
    readonly quantity$: Observable<number>;
    readonly total$: Observable<string>;
}
