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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12aWV3LmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJwcm9kdWN0LXZpZXcuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uL21pc2MvaWNvbi9pY29uLm1vZGVsJztcbmV4cG9ydCBkZWNsYXJlIGVudW0gVmlld01vZGVzIHtcbiAgICBHcmlkID0gXCJncmlkXCIsXG4gICAgTGlzdCA9IFwibGlzdFwiXG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQcm9kdWN0Vmlld0NvbXBvbmVudCB7XG4gICAgaWNvblR5cGVzOiB0eXBlb2YgSUNPTl9UWVBFO1xuICAgIG1vZGU6IFZpZXdNb2RlcztcbiAgICBtb2RlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcbiAgICBnZXQgYnV0dG9uQ2xhc3MoKTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqICAgRGlzcGxheSBpY29ucyBpbnZlcnNlbHkgdG8gYWxsb3cgdXNlcnNcbiAgICAgKiAgIHRvIHNlZSB0aGUgdmlldyB0aGV5IHdpbGwgbmF2aWdhdGUgdG9cbiAgICAgKi9cbiAgICBnZXQgdmlld01vZGUoKTogSUNPTl9UWVBFLkdSSUQgfCBJQ09OX1RZUEUuTElTVDtcbiAgICBjaGFuZ2VNb2RlKCk6IHZvaWQ7XG59XG4iXX0=