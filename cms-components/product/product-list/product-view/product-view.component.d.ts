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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductViewComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ProductViewComponent, "cx-product-view", never, { "mode": "mode"; }, { "modeChange": "modeChange"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC12aWV3LmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJwcm9kdWN0LXZpZXcuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi9taXNjL2ljb24vaWNvbi5tb2RlbCc7XG5leHBvcnQgZGVjbGFyZSBlbnVtIFZpZXdNb2RlcyB7XG4gICAgR3JpZCA9IFwiZ3JpZFwiLFxuICAgIExpc3QgPSBcImxpc3RcIlxufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUHJvZHVjdFZpZXdDb21wb25lbnQge1xuICAgIGljb25UeXBlczogdHlwZW9mIElDT05fVFlQRTtcbiAgICBtb2RlOiBWaWV3TW9kZXM7XG4gICAgbW9kZUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XG4gICAgZ2V0IGJ1dHRvbkNsYXNzKCk6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiAgIERpc3BsYXkgaWNvbnMgaW52ZXJzZWx5IHRvIGFsbG93IHVzZXJzXG4gICAgICogICB0byBzZWUgdGhlIHZpZXcgdGhleSB3aWxsIG5hdmlnYXRlIHRvXG4gICAgICovXG4gICAgZ2V0IHZpZXdNb2RlKCk6IElDT05fVFlQRS5HUklEIHwgSUNPTl9UWVBFLkxJU1Q7XG4gICAgY2hhbmdlTW9kZSgpOiB2b2lkO1xufVxuIl19