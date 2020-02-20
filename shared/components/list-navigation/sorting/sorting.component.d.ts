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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SortingComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SortingComponent, "cx-sorting", never, {
    "sortOptions": "sortOptions";
    "selectedOption": "selectedOption";
    "placeholder": "placeholder";
    "sortLabels": "sortLabels";
}, {
    "sortListEvent": "sortListEvent";
}, never>;
}

//# sourceMappingURL=sorting.component.d.ts.map