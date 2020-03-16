import { MOVE_FOCUS, TrapFocusConfig } from '../keyboard-focus.model';
import { TabFocusService } from '../tab/tab-focus.service';
import * as ɵngcc0 from '@angular/core';
export declare class TrapFocusService extends TabFocusService {
    /**
     * Indicates whether any of the child elements of the host are focusable.
     *
     * @param host `HTMLElement` that is used to query the focusable elements.
     */
    hasFocusableChildren(host: HTMLElement): boolean;
    /**
     * Focus the next or previous element of all available focusable elements.
     * The focus is _trapped_ in case there's no next or previous available element.
     * The focus will automatically move the start or end of the list.
     */
    moveFocus(host: HTMLElement, config: TrapFocusConfig, increment: MOVE_FOCUS, event: UIEvent): void;
    protected getTrapStart(trap: boolean | 'start' | 'end'): boolean;
    protected getTrapEnd(trap: boolean | 'start' | 'end'): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TrapFocusService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhcC1mb2N1cy5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInRyYXAtZm9jdXMuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQWVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTU9WRV9GT0NVUywgVHJhcEZvY3VzQ29uZmlnIH0gZnJvbSAnLi4va2V5Ym9hcmQtZm9jdXMubW9kZWwnO1xuaW1wb3J0IHsgVGFiRm9jdXNTZXJ2aWNlIH0gZnJvbSAnLi4vdGFiL3RhYi1mb2N1cy5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFRyYXBGb2N1c1NlcnZpY2UgZXh0ZW5kcyBUYWJGb2N1c1NlcnZpY2Uge1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIGFueSBvZiB0aGUgY2hpbGQgZWxlbWVudHMgb2YgdGhlIGhvc3QgYXJlIGZvY3VzYWJsZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBob3N0IGBIVE1MRWxlbWVudGAgdGhhdCBpcyB1c2VkIHRvIHF1ZXJ5IHRoZSBmb2N1c2FibGUgZWxlbWVudHMuXG4gICAgICovXG4gICAgaGFzRm9jdXNhYmxlQ2hpbGRyZW4oaG9zdDogSFRNTEVsZW1lbnQpOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEZvY3VzIHRoZSBuZXh0IG9yIHByZXZpb3VzIGVsZW1lbnQgb2YgYWxsIGF2YWlsYWJsZSBmb2N1c2FibGUgZWxlbWVudHMuXG4gICAgICogVGhlIGZvY3VzIGlzIF90cmFwcGVkXyBpbiBjYXNlIHRoZXJlJ3Mgbm8gbmV4dCBvciBwcmV2aW91cyBhdmFpbGFibGUgZWxlbWVudC5cbiAgICAgKiBUaGUgZm9jdXMgd2lsbCBhdXRvbWF0aWNhbGx5IG1vdmUgdGhlIHN0YXJ0IG9yIGVuZCBvZiB0aGUgbGlzdC5cbiAgICAgKi9cbiAgICBtb3ZlRm9jdXMoaG9zdDogSFRNTEVsZW1lbnQsIGNvbmZpZzogVHJhcEZvY3VzQ29uZmlnLCBpbmNyZW1lbnQ6IE1PVkVfRk9DVVMsIGV2ZW50OiBVSUV2ZW50KTogdm9pZDtcbiAgICBwcm90ZWN0ZWQgZ2V0VHJhcFN0YXJ0KHRyYXA6IGJvb2xlYW4gfCAnc3RhcnQnIHwgJ2VuZCcpOiBib29sZWFuO1xuICAgIHByb3RlY3RlZCBnZXRUcmFwRW5kKHRyYXA6IGJvb2xlYW4gfCAnc3RhcnQnIHwgJ2VuZCcpOiBib29sZWFuO1xufVxuIl19