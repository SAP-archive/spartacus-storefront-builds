import { EventEmitter } from '@angular/core';
export declare enum ViewModes {
    Grid = "grid",
    List = "list"
}
export declare class ProductViewComponent {
    mode: ViewModes;
    modeChange: EventEmitter<string>;
    readonly buttonClass: string;
    changeMode(): void;
}
