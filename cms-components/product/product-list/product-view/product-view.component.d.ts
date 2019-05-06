import { EventEmitter } from '@angular/core';
import { ICON_TYPES } from '../../../misc/icon';
export declare enum ViewModes {
    Grid = "grid",
    List = "list"
}
export declare class ProductViewComponent {
    iconTypes: typeof ICON_TYPES;
    mode: ViewModes;
    modeChange: EventEmitter<string>;
    readonly buttonClass: string;
    readonly viewMode: ICON_TYPES.GRID_MODE | ICON_TYPES.LIST_MODE;
    changeMode(): void;
}
