import { EventEmitter } from '@angular/core';
import { ICON_TYPE } from '../../../misc/icon';
export declare enum ViewModes {
    Grid = "grid",
    List = "list"
}
export declare class ProductViewComponent {
    iconTypes: typeof ICON_TYPE;
    mode: ViewModes;
    modeChange: EventEmitter<string>;
    readonly buttonClass: string;
    /**
     * Display icons inversely to allow users to
     * see the view they will navigate to
     */
    readonly viewMode: ICON_TYPE.GRID | ICON_TYPE.LIST;
    changeMode(): void;
}
