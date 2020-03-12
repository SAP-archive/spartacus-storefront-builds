import { TemplateRef } from '@angular/core';
import { OutletPosition } from './outlet.model';
import * as ɵngcc0 from '@angular/core';
export declare class OutletService<T = TemplateRef<any>> {
    private templatesRefs;
    private templatesRefsBefore;
    private templatesRefsAfter;
    /**
     * Adds a template or ComponentFactory, so that UI outlets can be replaced dynamically.
     * The UI position where this template or ComponentFactory is inserted is given by a
     * string reference (called `outlet`) and optional `OutletPosition`. The `OutletPosition`
     * is either before or after, or replaces the entire UI.
     *
     * @param outlet the UI location represented by a string
     * @param template the `TemplateRef` that will be used to insert UI
     * @param position the `OutletPosition` in the UI
     */
    add(outlet: string, template: T, position?: OutletPosition): void;
    /**
     * @param factory The `ComponentFactory` that will be dynamically added to the outlet UI
     */
    add(outlet: string, factory: T, position?: OutletPosition): void;
    /**
     *
     * Returns a single object or multiple objects for the given outlet reference,
     * depending on the `stacked` argument.
     *
     * @param outlet The outlet reference
     * @param position the outlet position, `OutletPosition.before`, `OutletPosition.AFTER` or `OutletPosition.REPLACE`
     * @param stacked Indicates whether an array of outlet components is returned
     */
    get(outlet: string, position?: OutletPosition, stacked?: boolean): T[] | T;
    private store;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OutletService<any>>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsib3V0bGV0LnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4QkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3V0bGV0UG9zaXRpb24gfSBmcm9tICcuL291dGxldC5tb2RlbCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBPdXRsZXRTZXJ2aWNlPFQgPSBUZW1wbGF0ZVJlZjxhbnk+PiB7XG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZXNSZWZzO1xuICAgIHByaXZhdGUgdGVtcGxhdGVzUmVmc0JlZm9yZTtcbiAgICBwcml2YXRlIHRlbXBsYXRlc1JlZnNBZnRlcjtcbiAgICAvKipcbiAgICAgKiBBZGRzIGEgdGVtcGxhdGUgb3IgQ29tcG9uZW50RmFjdG9yeSwgc28gdGhhdCBVSSBvdXRsZXRzIGNhbiBiZSByZXBsYWNlZCBkeW5hbWljYWxseS5cbiAgICAgKiBUaGUgVUkgcG9zaXRpb24gd2hlcmUgdGhpcyB0ZW1wbGF0ZSBvciBDb21wb25lbnRGYWN0b3J5IGlzIGluc2VydGVkIGlzIGdpdmVuIGJ5IGFcbiAgICAgKiBzdHJpbmcgcmVmZXJlbmNlIChjYWxsZWQgYG91dGxldGApIGFuZCBvcHRpb25hbCBgT3V0bGV0UG9zaXRpb25gLiBUaGUgYE91dGxldFBvc2l0aW9uYFxuICAgICAqIGlzIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIsIG9yIHJlcGxhY2VzIHRoZSBlbnRpcmUgVUkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb3V0bGV0IHRoZSBVSSBsb2NhdGlvbiByZXByZXNlbnRlZCBieSBhIHN0cmluZ1xuICAgICAqIEBwYXJhbSB0ZW1wbGF0ZSB0aGUgYFRlbXBsYXRlUmVmYCB0aGF0IHdpbGwgYmUgdXNlZCB0byBpbnNlcnQgVUlcbiAgICAgKiBAcGFyYW0gcG9zaXRpb24gdGhlIGBPdXRsZXRQb3NpdGlvbmAgaW4gdGhlIFVJXG4gICAgICovXG4gICAgYWRkKG91dGxldDogc3RyaW5nLCB0ZW1wbGF0ZTogVCwgcG9zaXRpb24/OiBPdXRsZXRQb3NpdGlvbik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGZhY3RvcnkgVGhlIGBDb21wb25lbnRGYWN0b3J5YCB0aGF0IHdpbGwgYmUgZHluYW1pY2FsbHkgYWRkZWQgdG8gdGhlIG91dGxldCBVSVxuICAgICAqL1xuICAgIGFkZChvdXRsZXQ6IHN0cmluZywgZmFjdG9yeTogVCwgcG9zaXRpb24/OiBPdXRsZXRQb3NpdGlvbik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBSZXR1cm5zIGEgc2luZ2xlIG9iamVjdCBvciBtdWx0aXBsZSBvYmplY3RzIGZvciB0aGUgZ2l2ZW4gb3V0bGV0IHJlZmVyZW5jZSxcbiAgICAgKiBkZXBlbmRpbmcgb24gdGhlIGBzdGFja2VkYCBhcmd1bWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBvdXRsZXQgVGhlIG91dGxldCByZWZlcmVuY2VcbiAgICAgKiBAcGFyYW0gcG9zaXRpb24gdGhlIG91dGxldCBwb3NpdGlvbiwgYE91dGxldFBvc2l0aW9uLmJlZm9yZWAsIGBPdXRsZXRQb3NpdGlvbi5BRlRFUmAgb3IgYE91dGxldFBvc2l0aW9uLlJFUExBQ0VgXG4gICAgICogQHBhcmFtIHN0YWNrZWQgSW5kaWNhdGVzIHdoZXRoZXIgYW4gYXJyYXkgb2Ygb3V0bGV0IGNvbXBvbmVudHMgaXMgcmV0dXJuZWRcbiAgICAgKi9cbiAgICBnZXQob3V0bGV0OiBzdHJpbmcsIHBvc2l0aW9uPzogT3V0bGV0UG9zaXRpb24sIHN0YWNrZWQ/OiBib29sZWFuKTogVFtdIHwgVDtcbiAgICBwcml2YXRlIHN0b3JlO1xufVxuIl19