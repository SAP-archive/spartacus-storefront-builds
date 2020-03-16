import { EscapeFocusService } from '../escape/escape-focus.service';
import { AutoFocusConfig, PersistFocusConfig } from '../keyboard-focus.model';
import * as ɵngcc0 from '@angular/core';
export declare class AutoFocusService extends EscapeFocusService {
    /**
     * Returns the first focusable child element of the host element.
     */
    findFirstFocusable(host: HTMLElement, config?: AutoFocusConfig): HTMLElement;
    /**
     * Indicates whether any of the focusabe child elements is focused.
     */
    hasPersistedFocus(host: HTMLElement, config: PersistFocusConfig): boolean;
    /**
     * Returns the element that has a persisted focus state.
     *
     * @param host the `HTMLElement` used to query for focusable children
     * @param group the optional group for the persistent state, to separate different focus
     *   groups and remain the persistance
     */
    protected getPersisted(host: HTMLElement, group?: string): HTMLElement;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AutoFocusService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1mb2N1cy5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImF1dG8tZm9jdXMuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXNjYXBlRm9jdXNTZXJ2aWNlIH0gZnJvbSAnLi4vZXNjYXBlL2VzY2FwZS1mb2N1cy5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dG9Gb2N1c0NvbmZpZywgUGVyc2lzdEZvY3VzQ29uZmlnIH0gZnJvbSAnLi4va2V5Ym9hcmQtZm9jdXMubW9kZWwnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQXV0b0ZvY3VzU2VydmljZSBleHRlbmRzIEVzY2FwZUZvY3VzU2VydmljZSB7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZmlyc3QgZm9jdXNhYmxlIGNoaWxkIGVsZW1lbnQgb2YgdGhlIGhvc3QgZWxlbWVudC5cbiAgICAgKi9cbiAgICBmaW5kRmlyc3RGb2N1c2FibGUoaG9zdDogSFRNTEVsZW1lbnQsIGNvbmZpZz86IEF1dG9Gb2N1c0NvbmZpZyk6IEhUTUxFbGVtZW50O1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIGFueSBvZiB0aGUgZm9jdXNhYmUgY2hpbGQgZWxlbWVudHMgaXMgZm9jdXNlZC5cbiAgICAgKi9cbiAgICBoYXNQZXJzaXN0ZWRGb2N1cyhob3N0OiBIVE1MRWxlbWVudCwgY29uZmlnOiBQZXJzaXN0Rm9jdXNDb25maWcpOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGVsZW1lbnQgdGhhdCBoYXMgYSBwZXJzaXN0ZWQgZm9jdXMgc3RhdGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gaG9zdCB0aGUgYEhUTUxFbGVtZW50YCB1c2VkIHRvIHF1ZXJ5IGZvciBmb2N1c2FibGUgY2hpbGRyZW5cbiAgICAgKiBAcGFyYW0gZ3JvdXAgdGhlIG9wdGlvbmFsIGdyb3VwIGZvciB0aGUgcGVyc2lzdGVudCBzdGF0ZSwgdG8gc2VwYXJhdGUgZGlmZmVyZW50IGZvY3VzXG4gICAgICogICBncm91cHMgYW5kIHJlbWFpbiB0aGUgcGVyc2lzdGFuY2VcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0UGVyc2lzdGVkKGhvc3Q6IEhUTUxFbGVtZW50LCBncm91cD86IHN0cmluZyk6IEhUTUxFbGVtZW50O1xufVxuIl19