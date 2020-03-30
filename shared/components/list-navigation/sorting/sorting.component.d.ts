import { EventEmitter } from '@angular/core';
import { SortModel } from '@spartacus/core';
import * as ɵngcc0 from '@angular/core';
export declare class SortingComponent {
    sortOptions: SortModel[];
    selectedOption: string;
    placeholder: string;
    sortLabels: {
        [code: string]: string;
    };
    sortListEvent: EventEmitter<string>;
    constructor();
    sortList(sortCode: string): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SortingComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SortingComponent, "cx-sorting", never, { "sortOptions": "sortOptions"; "selectedOption": "selectedOption"; "placeholder": "placeholder"; "sortLabels": "sortLabels"; }, { "sortListEvent": "sortListEvent"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsic29ydGluZy5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FBRUE7Ozs7Ozs7Ozs7OztBQVVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTb3J0TW9kZWwgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU29ydGluZ0NvbXBvbmVudCB7XG4gICAgc29ydE9wdGlvbnM6IFNvcnRNb2RlbFtdO1xuICAgIHNlbGVjdGVkT3B0aW9uOiBzdHJpbmc7XG4gICAgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgICBzb3J0TGFiZWxzOiB7XG4gICAgICAgIFtjb2RlOiBzdHJpbmddOiBzdHJpbmc7XG4gICAgfTtcbiAgICBzb3J0TGlzdEV2ZW50OiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcbiAgICBjb25zdHJ1Y3RvcigpO1xuICAgIHNvcnRMaXN0KHNvcnRDb2RlOiBzdHJpbmcpOiB2b2lkO1xufVxuIl19