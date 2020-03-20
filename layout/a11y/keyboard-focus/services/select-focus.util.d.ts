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
     * @param locked indicates whether inactive (`tabindex="-1"`) focusable elements should be returend as well
     */
    findFocusable(host: HTMLElement, locked?: boolean): HTMLElement[];
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SelectFocusUtility>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWZvY3VzLnV0aWwuZC50cyIsInNvdXJjZXMiOlsic2VsZWN0LWZvY3VzLnV0aWwuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXV0b0ZvY3VzQ29uZmlnIH0gZnJvbSAnLi4va2V5Ym9hcmQtZm9jdXMubW9kZWwnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU2VsZWN0Rm9jdXNVdGlsaXR5IHtcbiAgICAvKipcbiAgICAgKiBRdWVyeSBzZWxlY3RvcnMgdXNlZCB0byBxdWVyeSBmb2N1c2FibGUgY2hpbGQgZWxlbWVudHMgb2YgdGhlIGhvc3QgZWxlbWVudC5cbiAgICAgKiBUaGUgc2VsZWN0b3JzIGFyZSBzdXBwbGVtZW50ZWQgd2l0aCBgOm5vdChbZGlzYWJsZWRdKWAgYW5kIGA6bm90KFtoaWRkZW5dKWAuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGZvY3VzYWJsZVNlbGVjdG9yczogc3RyaW5nW107XG4gICAgcHJvdGVjdGVkIGZvY3VzYWJsZVNlbGVjdG9yU3VmZml4OiBzdHJpbmc7XG4gICAgcXVlcnkoaG9zdDogSFRNTEVsZW1lbnQsIHNlbGVjdG9yOiBzdHJpbmcpOiBIVE1MRWxlbWVudFtdO1xuICAgIGZpbmRGaXJzdEZvY3VzYWJsZShob3N0OiBIVE1MRWxlbWVudCwgY29uZmlnPzogQXV0b0ZvY3VzQ29uZmlnKTogSFRNTEVsZW1lbnQ7XG4gICAgLyoqXG4gICAgICogcmV0dXJucyBhbGwgZm9jdXNhYmxlIGNoaWxkIGVsZW1lbnRzIG9mIHRoZSBob3N0IGVsZW1lbnQuIFRoZSBlbGVtZW50IHNlbGVjdG9yc1xuICAgICAqIGFyZSBidWlsZCBmcm9tIHRoZSBgZm9jdXNhYmxlU2VsZWN0b3JzYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBob3N0IHRoZSBgSFRNTEVsZW1lbnRgIHVzZWQgdG8gcXVlcnkgZm9jdXNhYmxlIGVsZW1lbnRzXG4gICAgICogQHBhcmFtIGxvY2tlZCBpbmRpY2F0ZXMgd2hldGhlciBpbmFjdGl2ZSAoYHRhYmluZGV4PVwiLTFcImApIGZvY3VzYWJsZSBlbGVtZW50cyBzaG91bGQgYmUgcmV0dXJlbmQgYXMgd2VsbFxuICAgICAqL1xuICAgIGZpbmRGb2N1c2FibGUoaG9zdDogSFRNTEVsZW1lbnQsIGxvY2tlZD86IGJvb2xlYW4pOiBIVE1MRWxlbWVudFtdO1xufVxuIl19