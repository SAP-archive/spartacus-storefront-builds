import { Observable } from 'rxjs';
import { OutletDirective } from './outlet.directive';
import * as ɵngcc0 from '@angular/core';
export declare class OutletRendererService {
    private outletRefs;
    /**
     * Dynamically render the templates in the specified array
     *
     * @param outlet
     */
    render(outlet: string): void;
    /**
     * Register outlet to be available to render dynamically
     *
     * @param cxOutlet
     * @param context
     */
    register(cxOutlet: string, context: OutletDirective): void;
    /**
     * Returns map of outlets
     *
     */
    getOutletRef(outlet: string): Observable<OutletDirective>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OutletRendererService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LXJlbmRlcmVyLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsib3V0bGV0LXJlbmRlcmVyLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE91dGxldERpcmVjdGl2ZSB9IGZyb20gJy4vb3V0bGV0LmRpcmVjdGl2ZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBPdXRsZXRSZW5kZXJlclNlcnZpY2Uge1xuICAgIHByaXZhdGUgb3V0bGV0UmVmcztcbiAgICAvKipcbiAgICAgKiBEeW5hbWljYWxseSByZW5kZXIgdGhlIHRlbXBsYXRlcyBpbiB0aGUgc3BlY2lmaWVkIGFycmF5XG4gICAgICpcbiAgICAgKiBAcGFyYW0gb3V0bGV0XG4gICAgICovXG4gICAgcmVuZGVyKG91dGxldDogc3RyaW5nKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBvdXRsZXQgdG8gYmUgYXZhaWxhYmxlIHRvIHJlbmRlciBkeW5hbWljYWxseVxuICAgICAqXG4gICAgICogQHBhcmFtIGN4T3V0bGV0XG4gICAgICogQHBhcmFtIGNvbnRleHRcbiAgICAgKi9cbiAgICByZWdpc3RlcihjeE91dGxldDogc3RyaW5nLCBjb250ZXh0OiBPdXRsZXREaXJlY3RpdmUpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgbWFwIG9mIG91dGxldHNcbiAgICAgKlxuICAgICAqL1xuICAgIGdldE91dGxldFJlZihvdXRsZXQ6IHN0cmluZyk6IE9ic2VydmFibGU8T3V0bGV0RGlyZWN0aXZlPjtcbn1cbiJdfQ==