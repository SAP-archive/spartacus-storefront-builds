import { WindowRef } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class CarouselService {
    private winRef;
    constructor(winRef: WindowRef);
    /**
     * The number of items shown in the carousel is calculated dividing
     * the host element width with the minimum item width.
     */
    getSize(nativeElement: HTMLElement, itemWidth: number): Observable<number>;
}
