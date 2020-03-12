import { StoreDataService } from '@spartacus/core';
import * as ɵngcc0 from '@angular/core';
export declare class AbstractStoreItemComponent {
    protected storeDataService: StoreDataService;
    location: any;
    constructor(storeDataService: StoreDataService);
    getDirections(location: any): string;
    getFormattedStoreAddress(addressParts: string[]): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AbstractStoreItemComponent>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<AbstractStoreItemComponent, never, never, {
    "location": "location";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3Qtc3RvcmUtaXRlbS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiYWJzdHJhY3Qtc3RvcmUtaXRlbS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQTs7Ozs7Ozs7OztBQU1BIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmVEYXRhU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBYnN0cmFjdFN0b3JlSXRlbUNvbXBvbmVudCB7XG4gICAgcHJvdGVjdGVkIHN0b3JlRGF0YVNlcnZpY2U6IFN0b3JlRGF0YVNlcnZpY2U7XG4gICAgbG9jYXRpb246IGFueTtcbiAgICBjb25zdHJ1Y3RvcihzdG9yZURhdGFTZXJ2aWNlOiBTdG9yZURhdGFTZXJ2aWNlKTtcbiAgICBnZXREaXJlY3Rpb25zKGxvY2F0aW9uOiBhbnkpOiBzdHJpbmc7XG4gICAgZ2V0Rm9ybWF0dGVkU3RvcmVBZGRyZXNzKGFkZHJlc3NQYXJ0czogc3RyaW5nW10pOiBzdHJpbmc7XG59XG4iXX0=