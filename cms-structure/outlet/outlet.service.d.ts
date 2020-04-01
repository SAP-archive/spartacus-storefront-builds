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
    remove(outlet: string, position?: OutletPosition, value?: T): void;
    private store;
    protected removeValueOrAll(store: Map<string, T[]>, outlet: string, value?: T): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OutletService<any>, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsib3V0bGV0LnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPdXRsZXRQb3NpdGlvbiB9IGZyb20gJy4vb3V0bGV0Lm1vZGVsJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE91dGxldFNlcnZpY2U8VCA9IFRlbXBsYXRlUmVmPGFueT4+IHtcbiAgICBwcml2YXRlIHRlbXBsYXRlc1JlZnM7XG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZXNSZWZzQmVmb3JlO1xuICAgIHByaXZhdGUgdGVtcGxhdGVzUmVmc0FmdGVyO1xuICAgIC8qKlxuICAgICAqIEFkZHMgYSB0ZW1wbGF0ZSBvciBDb21wb25lbnRGYWN0b3J5LCBzbyB0aGF0IFVJIG91dGxldHMgY2FuIGJlIHJlcGxhY2VkIGR5bmFtaWNhbGx5LlxuICAgICAqIFRoZSBVSSBwb3NpdGlvbiB3aGVyZSB0aGlzIHRlbXBsYXRlIG9yIENvbXBvbmVudEZhY3RvcnkgaXMgaW5zZXJ0ZWQgaXMgZ2l2ZW4gYnkgYVxuICAgICAqIHN0cmluZyByZWZlcmVuY2UgKGNhbGxlZCBgb3V0bGV0YCkgYW5kIG9wdGlvbmFsIGBPdXRsZXRQb3NpdGlvbmAuIFRoZSBgT3V0bGV0UG9zaXRpb25gXG4gICAgICogaXMgZWl0aGVyIGJlZm9yZSBvciBhZnRlciwgb3IgcmVwbGFjZXMgdGhlIGVudGlyZSBVSS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBvdXRsZXQgdGhlIFVJIGxvY2F0aW9uIHJlcHJlc2VudGVkIGJ5IGEgc3RyaW5nXG4gICAgICogQHBhcmFtIHRlbXBsYXRlIHRoZSBgVGVtcGxhdGVSZWZgIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGluc2VydCBVSVxuICAgICAqIEBwYXJhbSBwb3NpdGlvbiB0aGUgYE91dGxldFBvc2l0aW9uYCBpbiB0aGUgVUlcbiAgICAgKi9cbiAgICBhZGQob3V0bGV0OiBzdHJpbmcsIHRlbXBsYXRlOiBULCBwb3NpdGlvbj86IE91dGxldFBvc2l0aW9uKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gZmFjdG9yeSBUaGUgYENvbXBvbmVudEZhY3RvcnlgIHRoYXQgd2lsbCBiZSBkeW5hbWljYWxseSBhZGRlZCB0byB0aGUgb3V0bGV0IFVJXG4gICAgICovXG4gICAgYWRkKG91dGxldDogc3RyaW5nLCBmYWN0b3J5OiBULCBwb3NpdGlvbj86IE91dGxldFBvc2l0aW9uKTogdm9pZDtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIFJldHVybnMgYSBzaW5nbGUgb2JqZWN0IG9yIG11bHRpcGxlIG9iamVjdHMgZm9yIHRoZSBnaXZlbiBvdXRsZXQgcmVmZXJlbmNlLFxuICAgICAqIGRlcGVuZGluZyBvbiB0aGUgYHN0YWNrZWRgIGFyZ3VtZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIG91dGxldCBUaGUgb3V0bGV0IHJlZmVyZW5jZVxuICAgICAqIEBwYXJhbSBwb3NpdGlvbiB0aGUgb3V0bGV0IHBvc2l0aW9uLCBgT3V0bGV0UG9zaXRpb24uYmVmb3JlYCwgYE91dGxldFBvc2l0aW9uLkFGVEVSYCBvciBgT3V0bGV0UG9zaXRpb24uUkVQTEFDRWBcbiAgICAgKiBAcGFyYW0gc3RhY2tlZCBJbmRpY2F0ZXMgd2hldGhlciBhbiBhcnJheSBvZiBvdXRsZXQgY29tcG9uZW50cyBpcyByZXR1cm5lZFxuICAgICAqL1xuICAgIGdldChvdXRsZXQ6IHN0cmluZywgcG9zaXRpb24/OiBPdXRsZXRQb3NpdGlvbiwgc3RhY2tlZD86IGJvb2xlYW4pOiBUW10gfCBUO1xuICAgIHJlbW92ZShvdXRsZXQ6IHN0cmluZywgcG9zaXRpb24/OiBPdXRsZXRQb3NpdGlvbiwgdmFsdWU/OiBUKTogdm9pZDtcbiAgICBwcml2YXRlIHN0b3JlO1xuICAgIHByb3RlY3RlZCByZW1vdmVWYWx1ZU9yQWxsKHN0b3JlOiBNYXA8c3RyaW5nLCBUW10+LCBvdXRsZXQ6IHN0cmluZywgdmFsdWU/OiBUKTogdm9pZDtcbn1cbiJdfQ==