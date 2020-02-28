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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsic29ydGluZy5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNvcnRNb2RlbCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTb3J0aW5nQ29tcG9uZW50IHtcbiAgICBzb3J0T3B0aW9uczogU29ydE1vZGVsW107XG4gICAgc2VsZWN0ZWRPcHRpb246IHN0cmluZztcbiAgICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICAgIHNvcnRMYWJlbHM6IHtcbiAgICAgICAgW2NvZGU6IHN0cmluZ106IHN0cmluZztcbiAgICB9O1xuICAgIHNvcnRMaXN0RXZlbnQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xuICAgIGNvbnN0cnVjdG9yKCk7XG4gICAgc29ydExpc3Qoc29ydENvZGU6IHN0cmluZyk6IHZvaWQ7XG59XG4iXX0=