import { StoreDataService } from '@spartacus/core';
import * as ɵngcc0 from '@angular/core';
export declare class AbstractStoreItemComponent {
    protected storeDataService: StoreDataService;
    location: any;
    constructor(storeDataService: StoreDataService);
    getDirections(location: any): string;
    getFormattedStoreAddress(addressParts: string[]): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AbstractStoreItemComponent, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<AbstractStoreItemComponent, never, never, { "location": "location"; }, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3Qtc3RvcmUtaXRlbS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiYWJzdHJhY3Qtc3RvcmUtaXRlbS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQTs7Ozs7Ozs7QUFNQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3JlRGF0YVNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQWJzdHJhY3RTdG9yZUl0ZW1Db21wb25lbnQge1xuICAgIHByb3RlY3RlZCBzdG9yZURhdGFTZXJ2aWNlOiBTdG9yZURhdGFTZXJ2aWNlO1xuICAgIGxvY2F0aW9uOiBhbnk7XG4gICAgY29uc3RydWN0b3Ioc3RvcmVEYXRhU2VydmljZTogU3RvcmVEYXRhU2VydmljZSk7XG4gICAgZ2V0RGlyZWN0aW9ucyhsb2NhdGlvbjogYW55KTogc3RyaW5nO1xuICAgIGdldEZvcm1hdHRlZFN0b3JlQWRkcmVzcyhhZGRyZXNzUGFydHM6IHN0cmluZ1tdKTogc3RyaW5nO1xufVxuIl19