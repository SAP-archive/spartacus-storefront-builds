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
     * Returns all focusable child elements of the host element.
     *
     * @param host The host element is used to query child focusable elements.
     * @param locked Indicates if locked elements (tabindex=-1) should be returned, defaults to false.
     * @param invisible Indicates if invisible child elements should be returned, defaults to false.
     */
    findFocusable(host: HTMLElement, locked?: boolean, invisible?: boolean): HTMLElement[];
    protected isActive(el: HTMLElement): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TabFocusService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWZvY3VzLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsidGFiLWZvY3VzLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdXRvRm9jdXNTZXJ2aWNlIH0gZnJvbSAnLi4vYXV0b2ZvY3VzL2F1dG8tZm9jdXMuc2VydmljZSc7XG5pbXBvcnQgeyBNT1ZFX0ZPQ1VTLCBUYWJGb2N1c0NvbmZpZyB9IGZyb20gJy4uL2tleWJvYXJkLWZvY3VzLm1vZGVsJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFRhYkZvY3VzU2VydmljZSBleHRlbmRzIEF1dG9Gb2N1c1NlcnZpY2Uge1xuICAgIC8qKlxuICAgICAqIE1vdmVzIHRvIHRoZSBuZXh0IChvciBwcmV2aW91cykgdGFiLlxuICAgICAqL1xuICAgIG1vdmVUYWIoaG9zdDogSFRNTEVsZW1lbnQsIGNvbmZpZzogVGFiRm9jdXNDb25maWcsIGluY3JlbWVudDogTU9WRV9GT0NVUywgZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIGJ1aWxkcyBvdXQgdmlydHVhbCBzbGlkZXMgb3V0IG9mIHRoZSBmdWxsIHNjcm9sbGFibGUgYXJlYSwgdG8gYWxsb3dcbiAgICAgKiBmb3IgbWF4aW11bSBmbGV4aWJpbGl0eSBmb3IgdGhlIHVuZGVybHlpbmcgbGF5b3V0IHdpdGhvdXQgdXNpbmcgaGFyZGNvZGVkXG4gICAgICogc2xpZGUgc2l6ZXMuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGZpbmROZXh0U2Nyb2xsYWJsZShob3N0OiBIVE1MRWxlbWVudCwgY29uZmlnOiBUYWJGb2N1c0NvbmZpZywgaW5jcmVtZW50OiBNT1ZFX0ZPQ1VTKTogSFRNTEVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIGZpbmROZXh0KGhvc3Q6IEhUTUxFbGVtZW50LCBjb25maWc6IFRhYkZvY3VzQ29uZmlnLCBpbmNyZW1lbnQ6IE1PVkVfRk9DVVMpOiBIVE1MRWxlbWVudDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBhY3RpdmUgZm9jdXNhYmxlIGNoaWxkIGVsZW1lbnQuIElmIHRoZXJlJ3Mgbm8gYWN0aXZlXG4gICAgICogZm9jdXNhYmxlIGNoaWxkIGVsZW1lbnQsIHRoZSBmaXJzdCBmb2N1c2FibGUgY2hpbGQgaXMgcmV0dXJuZWQuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldEFjdGl2ZUNoaWxkKGhvc3Q6IEhUTUxFbGVtZW50LCBjb25maWc6IFRhYkZvY3VzQ29uZmlnKTogSFRNTEVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIGdldENoaWxkcmVuKGhvc3Q6IEhUTUxFbGVtZW50LCBjb25maWc6IFRhYkZvY3VzQ29uZmlnKTogSFRNTEVsZW1lbnRbXTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFsbCBmb2N1c2FibGUgY2hpbGQgZWxlbWVudHMgb2YgdGhlIGhvc3QgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBob3N0IFRoZSBob3N0IGVsZW1lbnQgaXMgdXNlZCB0byBxdWVyeSBjaGlsZCBmb2N1c2FibGUgZWxlbWVudHMuXG4gICAgICogQHBhcmFtIGxvY2tlZCBJbmRpY2F0ZXMgaWYgbG9ja2VkIGVsZW1lbnRzICh0YWJpbmRleD0tMSkgc2hvdWxkIGJlIHJldHVybmVkLCBkZWZhdWx0cyB0byBmYWxzZS5cbiAgICAgKiBAcGFyYW0gaW52aXNpYmxlIEluZGljYXRlcyBpZiBpbnZpc2libGUgY2hpbGQgZWxlbWVudHMgc2hvdWxkIGJlIHJldHVybmVkLCBkZWZhdWx0cyB0byBmYWxzZS5cbiAgICAgKi9cbiAgICBmaW5kRm9jdXNhYmxlKGhvc3Q6IEhUTUxFbGVtZW50LCBsb2NrZWQ/OiBib29sZWFuLCBpbnZpc2libGU/OiBib29sZWFuKTogSFRNTEVsZW1lbnRbXTtcbiAgICBwcm90ZWN0ZWQgaXNBY3RpdmUoZWw6IEhUTUxFbGVtZW50KTogYm9vbGVhbjtcbn1cbiJdfQ==