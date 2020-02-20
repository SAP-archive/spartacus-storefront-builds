import { EventEmitter } from '@angular/core';
import { ICON_TYPE } from '../../../misc/icon/icon.model';
import * as ɵngcc0 from '@angular/core';
export declare enum ViewModes {
    Grid = "grid",
    List = "list"
}
export declare class ProductViewComponent {
    iconTypes: typeof ICON_TYPE;
    mode: ViewModes;
    modeChange: EventEmitter<string>;
    get buttonClass(): string;
    /**
     *   Display icons inversely to allow users
     *   to see the view they will navigate to
     */
    get viewMode(): ICON_TYPE.GRID | ICON_TYPE.LIST;
    changeMode(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductViewComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ProductViewComponent, "cx-product-view", never, {
    "mode": "mode";
}, {
    "modeChange": "modeChange";
}, never>;
}

//# sourceMappingURL=product-view.component.d.ts.map