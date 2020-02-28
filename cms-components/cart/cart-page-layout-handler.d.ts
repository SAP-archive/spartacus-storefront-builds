import { CartService, SelectiveCartService, FeatureConfigService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { PageLayoutHandler } from '../../cms-structure/page/page-layout/page-layout-handler';
import * as ɵngcc0 from '@angular/core';
export declare class CartPageLayoutHandler implements PageLayoutHandler {
    private cartService;
    private selectiveCartService?;
    private featureConfig?;
    constructor(cartService: CartService, selectiveCartService: SelectiveCartService, featureConfig: FeatureConfigService);
    /**
     * @deprecated Since 1.5
     * Add selectiveCartService and featureConfig for save for later.
     * Remove issue: #5958
     */
    constructor(cartService: CartService);
    handle(slots$: Observable<string[]>, pageTemplate?: string, section?: string): Observable<string[]>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CartPageLayoutHandler>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYWdlLWxheW91dC1oYW5kbGVyLmQudHMiLCJzb3VyY2VzIjpbImNhcnQtcGFnZS1sYXlvdXQtaGFuZGxlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7QUFZQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJ0U2VydmljZSwgU2VsZWN0aXZlQ2FydFNlcnZpY2UsIEZlYXR1cmVDb25maWdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0LWhhbmRsZXInO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2FydFBhZ2VMYXlvdXRIYW5kbGVyIGltcGxlbWVudHMgUGFnZUxheW91dEhhbmRsZXIge1xuICAgIHByaXZhdGUgY2FydFNlcnZpY2U7XG4gICAgcHJpdmF0ZSBzZWxlY3RpdmVDYXJ0U2VydmljZT87XG4gICAgcHJpdmF0ZSBmZWF0dXJlQ29uZmlnPztcbiAgICBjb25zdHJ1Y3RvcihjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsIHNlbGVjdGl2ZUNhcnRTZXJ2aWNlOiBTZWxlY3RpdmVDYXJ0U2VydmljZSwgZmVhdHVyZUNvbmZpZzogRmVhdHVyZUNvbmZpZ1NlcnZpY2UpO1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIFNpbmNlIDEuNVxuICAgICAqIEFkZCBzZWxlY3RpdmVDYXJ0U2VydmljZSBhbmQgZmVhdHVyZUNvbmZpZyBmb3Igc2F2ZSBmb3IgbGF0ZXIuXG4gICAgICogUmVtb3ZlIGlzc3VlOiAjNTk1OFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSk7XG4gICAgaGFuZGxlKHNsb3RzJDogT2JzZXJ2YWJsZTxzdHJpbmdbXT4sIHBhZ2VUZW1wbGF0ZT86IHN0cmluZywgc2VjdGlvbj86IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nW10+O1xufVxuIl19