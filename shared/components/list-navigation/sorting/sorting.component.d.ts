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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsic29ydGluZy5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU29ydE1vZGVsIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFNvcnRpbmdDb21wb25lbnQge1xuICAgIHNvcnRPcHRpb25zOiBTb3J0TW9kZWxbXTtcbiAgICBzZWxlY3RlZE9wdGlvbjogc3RyaW5nO1xuICAgIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gICAgc29ydExhYmVsczoge1xuICAgICAgICBbY29kZTogc3RyaW5nXTogc3RyaW5nO1xuICAgIH07XG4gICAgc29ydExpc3RFdmVudDogRXZlbnRFbWl0dGVyPHN0cmluZz47XG4gICAgY29uc3RydWN0b3IoKTtcbiAgICBzb3J0TGlzdChzb3J0Q29kZTogc3RyaW5nKTogdm9pZDtcbn1cbiJdfQ==