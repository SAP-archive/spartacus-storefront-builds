import { FormControl } from '@angular/forms';
import { RoutingService } from '@spartacus/core';
import { ICON_TYPE } from '../../../misc/icon';
import * as ɵngcc0 from '@angular/core';
export declare class StoreFinderSearchComponent {
    private routingService;
    searchBox: FormControl;
    iconTypes: typeof ICON_TYPE;
    constructor(routingService: RoutingService);
    findStores(address: string): void;
    viewStoresWithMyLoc(): void;
    onKey(event: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StoreFinderSearchComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<StoreFinderSearchComponent, "cx-store-finder-search", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLXNlYXJjaC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsic3RvcmUtZmluZGVyLXNlYXJjaC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7Ozs7O0FBUUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uL21pc2MvaWNvbic7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTdG9yZUZpbmRlclNlYXJjaENvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTtcbiAgICBzZWFyY2hCb3g6IEZvcm1Db250cm9sO1xuICAgIGljb25UeXBlczogdHlwZW9mIElDT05fVFlQRTtcbiAgICBjb25zdHJ1Y3Rvcihyb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UpO1xuICAgIGZpbmRTdG9yZXMoYWRkcmVzczogc3RyaW5nKTogdm9pZDtcbiAgICB2aWV3U3RvcmVzV2l0aE15TG9jKCk6IHZvaWQ7XG4gICAgb25LZXkoZXZlbnQ6IGFueSk6IHZvaWQ7XG59XG4iXX0=