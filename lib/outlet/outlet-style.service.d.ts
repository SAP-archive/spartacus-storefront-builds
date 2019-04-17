import { ElementRef } from '@angular/core';
export declare class OutletStyleService {
    private templateRefs;
    add(outlet: string, elem: ElementRef<any>): void;
    get(outlet: string): ElementRef<any>;
}
