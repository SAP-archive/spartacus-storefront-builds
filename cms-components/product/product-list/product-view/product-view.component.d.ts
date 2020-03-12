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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12aWV3LmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJwcm9kdWN0LXZpZXcuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vbWlzYy9pY29uL2ljb24ubW9kZWwnO1xuZXhwb3J0IGRlY2xhcmUgZW51bSBWaWV3TW9kZXMge1xuICAgIEdyaWQgPSBcImdyaWRcIixcbiAgICBMaXN0ID0gXCJsaXN0XCJcbn1cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFByb2R1Y3RWaWV3Q29tcG9uZW50IHtcbiAgICBpY29uVHlwZXM6IHR5cGVvZiBJQ09OX1RZUEU7XG4gICAgbW9kZTogVmlld01vZGVzO1xuICAgIG1vZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xuICAgIGdldCBidXR0b25DbGFzcygpOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogICBEaXNwbGF5IGljb25zIGludmVyc2VseSB0byBhbGxvdyB1c2Vyc1xuICAgICAqICAgdG8gc2VlIHRoZSB2aWV3IHRoZXkgd2lsbCBuYXZpZ2F0ZSB0b1xuICAgICAqL1xuICAgIGdldCB2aWV3TW9kZSgpOiBJQ09OX1RZUEUuR1JJRCB8IElDT05fVFlQRS5MSVNUO1xuICAgIGNoYW5nZU1vZGUoKTogdm9pZDtcbn1cbiJdfQ==