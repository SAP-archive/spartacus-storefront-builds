import { AutoFocusService } from '../autofocus/auto-focus.service';
import { MOVE_FOCUS, TabFocusConfig } from '../keyboard-focus.model';
import * as ɵngcc0 from '@angular/core';
export declare class TabFocusService extends AutoFocusService {
    /**
     * Moves to the next (or previous) tab.
     */
    moveTab(host: HTMLElement, config: TabFocusConfig, increment: MOVE_FOCUS, event: KeyboardEvent): void;
    /**
     * builds out virtual slides out of the full scrollable area, to allow
     * for maximum flexibility for the underlying layout without using hardcoded
     * slide sizes.
     */
    protected findNextScrollable(host: HTMLElement, config: TabFocusConfig, increment: MOVE_FOCUS): HTMLElement;
    protected findNext(host: HTMLElement, config: TabFocusConfig, increment: MOVE_FOCUS): HTMLElement;
    /**
     * Returns the active focusable child element. If there's no active
     * focusable child element, the first focusable child is returned.
     */
    protected getActiveChild(host: HTMLElement, config: TabFocusConfig): HTMLElement;
    protected getChildren(host: HTMLElement, config: TabFocusConfig): HTMLElement[];
    /**
     * returns all focusable child elements of the host element.
     */
    findFocusable(host: HTMLElement, locked?: boolean): HTMLElement[];
    protected isActive(el: HTMLElement): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TabFocusService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWZvY3VzLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsidGFiLWZvY3VzLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1dG9Gb2N1c1NlcnZpY2UgfSBmcm9tICcuLi9hdXRvZm9jdXMvYXV0by1mb2N1cy5zZXJ2aWNlJztcbmltcG9ydCB7IE1PVkVfRk9DVVMsIFRhYkZvY3VzQ29uZmlnIH0gZnJvbSAnLi4va2V5Ym9hcmQtZm9jdXMubW9kZWwnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVGFiRm9jdXNTZXJ2aWNlIGV4dGVuZHMgQXV0b0ZvY3VzU2VydmljZSB7XG4gICAgLyoqXG4gICAgICogTW92ZXMgdG8gdGhlIG5leHQgKG9yIHByZXZpb3VzKSB0YWIuXG4gICAgICovXG4gICAgbW92ZVRhYihob3N0OiBIVE1MRWxlbWVudCwgY29uZmlnOiBUYWJGb2N1c0NvbmZpZywgaW5jcmVtZW50OiBNT1ZFX0ZPQ1VTLCBldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogYnVpbGRzIG91dCB2aXJ0dWFsIHNsaWRlcyBvdXQgb2YgdGhlIGZ1bGwgc2Nyb2xsYWJsZSBhcmVhLCB0byBhbGxvd1xuICAgICAqIGZvciBtYXhpbXVtIGZsZXhpYmlsaXR5IGZvciB0aGUgdW5kZXJseWluZyBsYXlvdXQgd2l0aG91dCB1c2luZyBoYXJkY29kZWRcbiAgICAgKiBzbGlkZSBzaXplcy5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZmluZE5leHRTY3JvbGxhYmxlKGhvc3Q6IEhUTUxFbGVtZW50LCBjb25maWc6IFRhYkZvY3VzQ29uZmlnLCBpbmNyZW1lbnQ6IE1PVkVfRk9DVVMpOiBIVE1MRWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgZmluZE5leHQoaG9zdDogSFRNTEVsZW1lbnQsIGNvbmZpZzogVGFiRm9jdXNDb25maWcsIGluY3JlbWVudDogTU9WRV9GT0NVUyk6IEhUTUxFbGVtZW50O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGFjdGl2ZSBmb2N1c2FibGUgY2hpbGQgZWxlbWVudC4gSWYgdGhlcmUncyBubyBhY3RpdmVcbiAgICAgKiBmb2N1c2FibGUgY2hpbGQgZWxlbWVudCwgdGhlIGZpcnN0IGZvY3VzYWJsZSBjaGlsZCBpcyByZXR1cm5lZC5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0QWN0aXZlQ2hpbGQoaG9zdDogSFRNTEVsZW1lbnQsIGNvbmZpZzogVGFiRm9jdXNDb25maWcpOiBIVE1MRWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgZ2V0Q2hpbGRyZW4oaG9zdDogSFRNTEVsZW1lbnQsIGNvbmZpZzogVGFiRm9jdXNDb25maWcpOiBIVE1MRWxlbWVudFtdO1xuICAgIC8qKlxuICAgICAqIHJldHVybnMgYWxsIGZvY3VzYWJsZSBjaGlsZCBlbGVtZW50cyBvZiB0aGUgaG9zdCBlbGVtZW50LlxuICAgICAqL1xuICAgIGZpbmRGb2N1c2FibGUoaG9zdDogSFRNTEVsZW1lbnQsIGxvY2tlZD86IGJvb2xlYW4pOiBIVE1MRWxlbWVudFtdO1xuICAgIHByb3RlY3RlZCBpc0FjdGl2ZShlbDogSFRNTEVsZW1lbnQpOiBib29sZWFuO1xufVxuIl19