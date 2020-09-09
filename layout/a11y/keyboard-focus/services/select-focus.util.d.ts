import { AutoFocusConfig } from '../keyboard-focus.model';
import * as ɵngcc0 from '@angular/core';
export declare class SelectFocusUtility {
    /**
     * Query selectors used to query focusable child elements of the host element.
     * The selectors are supplemented with `:not([disabled])` and `:not([hidden])`.
     */
    protected focusableSelectors: string[];
    protected focusableSelectorSuffix: string;
    query(host: HTMLElement, selector: string): HTMLElement[];
    findFirstFocusable(host: HTMLElement, config?: AutoFocusConfig): HTMLElement;
    /**
     * returns all focusable child elements of the host element. The element selectors
     * are build from the `focusableSelectors`.
     *
     * @param host the `HTMLElement` used to query focusable elements
     * @param locked indicates whether inactive (`tabindex="-1"`) focusable elements should be returned
     * @param invisible indicates whether hidden focusable elements should be returned
     */
    findFocusable(host: HTMLElement, locked?: boolean, invisible?: boolean): HTMLElement[];
    /**
     * Indicates whether the element is hidden by CSS. There are various CSS rules and
     * HTML structures which can lead to an hidden or invisible element. An `offsetParent`
     * of null indicates that the element or any of it's decendants is hidden (`display:none`).
     *
     * Oother techniques use the visibility (`visibility: hidden`), opacity (`opacity`) or
     * phyisical location on the element itself or any of it's anchestor elements. Those
     * technique require to work with the _computed styles_, which will cause a performance
     * downgrade. We don't do this in the standard implementaton.
     */
    protected isHidden(el: HTMLElement): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SelectFocusUtility, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWZvY3VzLnV0aWwuZC50cyIsInNvdXJjZXMiOlsic2VsZWN0LWZvY3VzLnV0aWwuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXV0b0ZvY3VzQ29uZmlnIH0gZnJvbSAnLi4va2V5Ym9hcmQtZm9jdXMubW9kZWwnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU2VsZWN0Rm9jdXNVdGlsaXR5IHtcbiAgICAvKipcbiAgICAgKiBRdWVyeSBzZWxlY3RvcnMgdXNlZCB0byBxdWVyeSBmb2N1c2FibGUgY2hpbGQgZWxlbWVudHMgb2YgdGhlIGhvc3QgZWxlbWVudC5cbiAgICAgKiBUaGUgc2VsZWN0b3JzIGFyZSBzdXBwbGVtZW50ZWQgd2l0aCBgOm5vdChbZGlzYWJsZWRdKWAgYW5kIGA6bm90KFtoaWRkZW5dKWAuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGZvY3VzYWJsZVNlbGVjdG9yczogc3RyaW5nW107XG4gICAgcHJvdGVjdGVkIGZvY3VzYWJsZVNlbGVjdG9yU3VmZml4OiBzdHJpbmc7XG4gICAgcXVlcnkoaG9zdDogSFRNTEVsZW1lbnQsIHNlbGVjdG9yOiBzdHJpbmcpOiBIVE1MRWxlbWVudFtdO1xuICAgIGZpbmRGaXJzdEZvY3VzYWJsZShob3N0OiBIVE1MRWxlbWVudCwgY29uZmlnPzogQXV0b0ZvY3VzQ29uZmlnKTogSFRNTEVsZW1lbnQ7XG4gICAgLyoqXG4gICAgICogcmV0dXJucyBhbGwgZm9jdXNhYmxlIGNoaWxkIGVsZW1lbnRzIG9mIHRoZSBob3N0IGVsZW1lbnQuIFRoZSBlbGVtZW50IHNlbGVjdG9yc1xuICAgICAqIGFyZSBidWlsZCBmcm9tIHRoZSBgZm9jdXNhYmxlU2VsZWN0b3JzYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBob3N0IHRoZSBgSFRNTEVsZW1lbnRgIHVzZWQgdG8gcXVlcnkgZm9jdXNhYmxlIGVsZW1lbnRzXG4gICAgICogQHBhcmFtIGxvY2tlZCBpbmRpY2F0ZXMgd2hldGhlciBpbmFjdGl2ZSAoYHRhYmluZGV4PVwiLTFcImApIGZvY3VzYWJsZSBlbGVtZW50cyBzaG91bGQgYmUgcmV0dXJuZWRcbiAgICAgKiBAcGFyYW0gaW52aXNpYmxlIGluZGljYXRlcyB3aGV0aGVyIGhpZGRlbiBmb2N1c2FibGUgZWxlbWVudHMgc2hvdWxkIGJlIHJldHVybmVkXG4gICAgICovXG4gICAgZmluZEZvY3VzYWJsZShob3N0OiBIVE1MRWxlbWVudCwgbG9ja2VkPzogYm9vbGVhbiwgaW52aXNpYmxlPzogYm9vbGVhbik6IEhUTUxFbGVtZW50W107XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgaGlkZGVuIGJ5IENTUy4gVGhlcmUgYXJlIHZhcmlvdXMgQ1NTIHJ1bGVzIGFuZFxuICAgICAqIEhUTUwgc3RydWN0dXJlcyB3aGljaCBjYW4gbGVhZCB0byBhbiBoaWRkZW4gb3IgaW52aXNpYmxlIGVsZW1lbnQuIEFuIGBvZmZzZXRQYXJlbnRgXG4gICAgICogb2YgbnVsbCBpbmRpY2F0ZXMgdGhhdCB0aGUgZWxlbWVudCBvciBhbnkgb2YgaXQncyBkZWNlbmRhbnRzIGlzIGhpZGRlbiAoYGRpc3BsYXk6bm9uZWApLlxuICAgICAqXG4gICAgICogT290aGVyIHRlY2huaXF1ZXMgdXNlIHRoZSB2aXNpYmlsaXR5IChgdmlzaWJpbGl0eTogaGlkZGVuYCksIG9wYWNpdHkgKGBvcGFjaXR5YCkgb3JcbiAgICAgKiBwaHlpc2ljYWwgbG9jYXRpb24gb24gdGhlIGVsZW1lbnQgaXRzZWxmIG9yIGFueSBvZiBpdCdzIGFuY2hlc3RvciBlbGVtZW50cy4gVGhvc2VcbiAgICAgKiB0ZWNobmlxdWUgcmVxdWlyZSB0byB3b3JrIHdpdGggdGhlIF9jb21wdXRlZCBzdHlsZXNfLCB3aGljaCB3aWxsIGNhdXNlIGEgcGVyZm9ybWFuY2VcbiAgICAgKiBkb3duZ3JhZGUuIFdlIGRvbid0IGRvIHRoaXMgaW4gdGhlIHN0YW5kYXJkIGltcGxlbWVudGF0b24uXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGlzSGlkZGVuKGVsOiBIVE1MRWxlbWVudCk6IGJvb2xlYW47XG59XG4iXX0=