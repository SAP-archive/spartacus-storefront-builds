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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsib3V0bGV0LnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4QkE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE91dGxldFBvc2l0aW9uIH0gZnJvbSAnLi9vdXRsZXQubW9kZWwnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgT3V0bGV0U2VydmljZTxUID0gVGVtcGxhdGVSZWY8YW55Pj4ge1xuICAgIHByaXZhdGUgdGVtcGxhdGVzUmVmcztcbiAgICBwcml2YXRlIHRlbXBsYXRlc1JlZnNCZWZvcmU7XG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZXNSZWZzQWZ0ZXI7XG4gICAgLyoqXG4gICAgICogQWRkcyBhIHRlbXBsYXRlIG9yIENvbXBvbmVudEZhY3RvcnksIHNvIHRoYXQgVUkgb3V0bGV0cyBjYW4gYmUgcmVwbGFjZWQgZHluYW1pY2FsbHkuXG4gICAgICogVGhlIFVJIHBvc2l0aW9uIHdoZXJlIHRoaXMgdGVtcGxhdGUgb3IgQ29tcG9uZW50RmFjdG9yeSBpcyBpbnNlcnRlZCBpcyBnaXZlbiBieSBhXG4gICAgICogc3RyaW5nIHJlZmVyZW5jZSAoY2FsbGVkIGBvdXRsZXRgKSBhbmQgb3B0aW9uYWwgYE91dGxldFBvc2l0aW9uYC4gVGhlIGBPdXRsZXRQb3NpdGlvbmBcbiAgICAgKiBpcyBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyLCBvciByZXBsYWNlcyB0aGUgZW50aXJlIFVJLlxuICAgICAqXG4gICAgICogQHBhcmFtIG91dGxldCB0aGUgVUkgbG9jYXRpb24gcmVwcmVzZW50ZWQgYnkgYSBzdHJpbmdcbiAgICAgKiBAcGFyYW0gdGVtcGxhdGUgdGhlIGBUZW1wbGF0ZVJlZmAgdGhhdCB3aWxsIGJlIHVzZWQgdG8gaW5zZXJ0IFVJXG4gICAgICogQHBhcmFtIHBvc2l0aW9uIHRoZSBgT3V0bGV0UG9zaXRpb25gIGluIHRoZSBVSVxuICAgICAqL1xuICAgIGFkZChvdXRsZXQ6IHN0cmluZywgdGVtcGxhdGU6IFQsIHBvc2l0aW9uPzogT3V0bGV0UG9zaXRpb24pOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBmYWN0b3J5IFRoZSBgQ29tcG9uZW50RmFjdG9yeWAgdGhhdCB3aWxsIGJlIGR5bmFtaWNhbGx5IGFkZGVkIHRvIHRoZSBvdXRsZXQgVUlcbiAgICAgKi9cbiAgICBhZGQob3V0bGV0OiBzdHJpbmcsIGZhY3Rvcnk6IFQsIHBvc2l0aW9uPzogT3V0bGV0UG9zaXRpb24pOiB2b2lkO1xuICAgIC8qKlxuICAgICAqXG4gICAgICogUmV0dXJucyBhIHNpbmdsZSBvYmplY3Qgb3IgbXVsdGlwbGUgb2JqZWN0cyBmb3IgdGhlIGdpdmVuIG91dGxldCByZWZlcmVuY2UsXG4gICAgICogZGVwZW5kaW5nIG9uIHRoZSBgc3RhY2tlZGAgYXJndW1lbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb3V0bGV0IFRoZSBvdXRsZXQgcmVmZXJlbmNlXG4gICAgICogQHBhcmFtIHBvc2l0aW9uIHRoZSBvdXRsZXQgcG9zaXRpb24sIGBPdXRsZXRQb3NpdGlvbi5iZWZvcmVgLCBgT3V0bGV0UG9zaXRpb24uQUZURVJgIG9yIGBPdXRsZXRQb3NpdGlvbi5SRVBMQUNFYFxuICAgICAqIEBwYXJhbSBzdGFja2VkIEluZGljYXRlcyB3aGV0aGVyIGFuIGFycmF5IG9mIG91dGxldCBjb21wb25lbnRzIGlzIHJldHVybmVkXG4gICAgICovXG4gICAgZ2V0KG91dGxldDogc3RyaW5nLCBwb3NpdGlvbj86IE91dGxldFBvc2l0aW9uLCBzdGFja2VkPzogYm9vbGVhbik6IFRbXSB8IFQ7XG4gICAgcHJpdmF0ZSBzdG9yZTtcbn1cbiJdfQ==