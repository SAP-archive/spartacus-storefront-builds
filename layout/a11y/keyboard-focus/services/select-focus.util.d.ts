import { AutoFocusConfig } from '../keyboard-focus.model';
import * as ɵngcc0 from '@angular/core';
export declare class SelectFocusUtility {
    /**
     * Query selectors used to query focusable child elements of the host element.
     * The selectors are supplemented with `:not([disabled])` and `:not([hidden])`.
     */
    protected focusableSelectors: string[];
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWZvY3VzLnV0aWwuZC50cyIsInNvdXJjZXMiOlsic2VsZWN0LWZvY3VzLnV0aWwuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdXRvRm9jdXNDb25maWcgfSBmcm9tICcuLi9rZXlib2FyZC1mb2N1cy5tb2RlbCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTZWxlY3RGb2N1c1V0aWxpdHkge1xuICAgIC8qKlxuICAgICAqIFF1ZXJ5IHNlbGVjdG9ycyB1c2VkIHRvIHF1ZXJ5IGZvY3VzYWJsZSBjaGlsZCBlbGVtZW50cyBvZiB0aGUgaG9zdCBlbGVtZW50LlxuICAgICAqIFRoZSBzZWxlY3RvcnMgYXJlIHN1cHBsZW1lbnRlZCB3aXRoIGA6bm90KFtkaXNhYmxlZF0pYCBhbmQgYDpub3QoW2hpZGRlbl0pYC5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZm9jdXNhYmxlU2VsZWN0b3JzOiBzdHJpbmdbXTtcbiAgICBxdWVyeShob3N0OiBIVE1MRWxlbWVudCwgc2VsZWN0b3I6IHN0cmluZyk6IEhUTUxFbGVtZW50W107XG4gICAgZmluZEZpcnN0Rm9jdXNhYmxlKGhvc3Q6IEhUTUxFbGVtZW50LCBjb25maWc/OiBBdXRvRm9jdXNDb25maWcpOiBIVE1MRWxlbWVudDtcbiAgICAvKipcbiAgICAgKiByZXR1cm5zIGFsbCBmb2N1c2FibGUgY2hpbGQgZWxlbWVudHMgb2YgdGhlIGhvc3QgZWxlbWVudC4gVGhlIGVsZW1lbnQgc2VsZWN0b3JzXG4gICAgICogYXJlIGJ1aWxkIGZyb20gdGhlIGBmb2N1c2FibGVTZWxlY3RvcnNgLlxuICAgICAqXG4gICAgICogQHBhcmFtIGhvc3QgdGhlIGBIVE1MRWxlbWVudGAgdXNlZCB0byBxdWVyeSBmb2N1c2FibGUgZWxlbWVudHNcbiAgICAgKiBAcGFyYW0gbG9ja2VkIGluZGljYXRlcyB3aGV0aGVyIGluYWN0aXZlIChgdGFiaW5kZXg9XCItMVwiYCkgZm9jdXNhYmxlIGVsZW1lbnRzIHNob3VsZCBiZSByZXR1cmVuZCBhcyB3ZWxsXG4gICAgICovXG4gICAgZmluZEZvY3VzYWJsZShob3N0OiBIVE1MRWxlbWVudCwgbG9ja2VkPzogYm9vbGVhbik6IEhUTUxFbGVtZW50W107XG59XG4iXX0=