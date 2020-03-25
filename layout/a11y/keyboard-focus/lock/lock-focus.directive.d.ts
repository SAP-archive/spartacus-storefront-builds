import { AfterViewInit, ElementRef, EventEmitter, OnInit, Renderer2 } from '@angular/core';
import { LockFocusConfig } from '../keyboard-focus.model';
import { TrapFocusDirective } from '../trap/trap-focus.directive';
import { LockFocusService } from './lock-focus.service';
/**
 * Directive that adds persistence for focussed element in case
 * the elements are being rebuild. This happens often when change
 * detection kicks in because of new data set from the backend.
 */
import * as ɵngcc0 from '@angular/core';
export declare class LockFocusDirective extends TrapFocusDirective implements OnInit, AfterViewInit {
    protected elementRef: ElementRef;
    protected service: LockFocusService;
    protected renderer: Renderer2;
    protected defaultConfig: LockFocusConfig;
    protected config: LockFocusConfig;
    /**
     * Indicates that the host is configured to use locking. This is available as a
     * CSS class `focus-lock`.
     */
    shouldLock: boolean;
    /**
     * Indicates that the host is locked. This is available as a CSS class `is-locked`.
     */
    isLocked: boolean;
    /**
     * Emits an event when the host is unlocked.
     */
    unlock: EventEmitter<boolean>;
    /**
     * When the user selects enter or space, the focusable childs are
     * unlocked, which means that the tabindex is set to 0.
     */
    handleEnter(event: KeyboardEvent): void;
    /**
     * In case any of the children elements is touched by the mouse,
     * we unlock the group to not break the mouse-experience.
     */
    handleClick(event: UIEvent): void;
    constructor(elementRef: ElementRef, service: LockFocusService, renderer: Renderer2);
    protected lockFocus(): void;
    protected unlockFocus(event?: UIEvent): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    handleFocus(event?: KeyboardEvent): void;
    handleEscape(event: KeyboardEvent): void;
    /**
     * When the handleFocus is called without an actual event, it's coming from Autofocus.
     * In this case we unlock the focusable children in case there's a focusable child that
     * was unlocked before.
     *
     * We keep this private to not polute the API.
     */
    private shouldUnlockAfterAutofocus;
    /**
     * Add the tabindex attribute to the focusable children elements
     */
    protected addTabindexToChildren(i?: number): void;
    /**
     * Utility method, returns all focusable children for the host element.
     *
     * We keep this private to not polute the API.
     */
    private get hasFocusableChildren();
    /**
     * Returns the focusable children of the host element. If the host element
     * is configured to be locked, the query is restricted to child elements
     * with a tabindex !== `-1`.
     *
     * We keep this private to not polute the API.
     */
    private get focusable();
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LockFocusDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<LockFocusDirective, never, never, {}, {
    "unlock": "unlock";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jay1mb2N1cy5kaXJlY3RpdmUuZC50cyIsInNvdXJjZXMiOlsibG9jay1mb2N1cy5kaXJlY3RpdmUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4REEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NrRm9jdXNDb25maWcgfSBmcm9tICcuLi9rZXlib2FyZC1mb2N1cy5tb2RlbCc7XG5pbXBvcnQgeyBUcmFwRm9jdXNEaXJlY3RpdmUgfSBmcm9tICcuLi90cmFwL3RyYXAtZm9jdXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IExvY2tGb2N1c1NlcnZpY2UgfSBmcm9tICcuL2xvY2stZm9jdXMuc2VydmljZSc7XG4vKipcbiAqIERpcmVjdGl2ZSB0aGF0IGFkZHMgcGVyc2lzdGVuY2UgZm9yIGZvY3Vzc2VkIGVsZW1lbnQgaW4gY2FzZVxuICogdGhlIGVsZW1lbnRzIGFyZSBiZWluZyByZWJ1aWxkLiBUaGlzIGhhcHBlbnMgb2Z0ZW4gd2hlbiBjaGFuZ2VcbiAqIGRldGVjdGlvbiBraWNrcyBpbiBiZWNhdXNlIG9mIG5ldyBkYXRhIHNldCBmcm9tIHRoZSBiYWNrZW5kLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBMb2NrRm9jdXNEaXJlY3RpdmUgZXh0ZW5kcyBUcmFwRm9jdXNEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgIHByb3RlY3RlZCBzZXJ2aWNlOiBMb2NrRm9jdXNTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyO1xuICAgIHByb3RlY3RlZCBkZWZhdWx0Q29uZmlnOiBMb2NrRm9jdXNDb25maWc7XG4gICAgcHJvdGVjdGVkIGNvbmZpZzogTG9ja0ZvY3VzQ29uZmlnO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB0aGF0IHRoZSBob3N0IGlzIGNvbmZpZ3VyZWQgdG8gdXNlIGxvY2tpbmcuIFRoaXMgaXMgYXZhaWxhYmxlIGFzIGFcbiAgICAgKiBDU1MgY2xhc3MgYGZvY3VzLWxvY2tgLlxuICAgICAqL1xuICAgIHNob3VsZExvY2s6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHRoYXQgdGhlIGhvc3QgaXMgbG9ja2VkLiBUaGlzIGlzIGF2YWlsYWJsZSBhcyBhIENTUyBjbGFzcyBgaXMtbG9ja2VkYC5cbiAgICAgKi9cbiAgICBpc0xvY2tlZDogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSBob3N0IGlzIHVubG9ja2VkLlxuICAgICAqL1xuICAgIHVubG9jazogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFdoZW4gdGhlIHVzZXIgc2VsZWN0cyBlbnRlciBvciBzcGFjZSwgdGhlIGZvY3VzYWJsZSBjaGlsZHMgYXJlXG4gICAgICogdW5sb2NrZWQsIHdoaWNoIG1lYW5zIHRoYXQgdGhlIHRhYmluZGV4IGlzIHNldCB0byAwLlxuICAgICAqL1xuICAgIGhhbmRsZUVudGVyKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBJbiBjYXNlIGFueSBvZiB0aGUgY2hpbGRyZW4gZWxlbWVudHMgaXMgdG91Y2hlZCBieSB0aGUgbW91c2UsXG4gICAgICogd2UgdW5sb2NrIHRoZSBncm91cCB0byBub3QgYnJlYWsgdGhlIG1vdXNlLWV4cGVyaWVuY2UuXG4gICAgICovXG4gICAgaGFuZGxlQ2xpY2soZXZlbnQ6IFVJRXZlbnQpOiB2b2lkO1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHNlcnZpY2U6IExvY2tGb2N1c1NlcnZpY2UsIHJlbmRlcmVyOiBSZW5kZXJlcjIpO1xuICAgIHByb3RlY3RlZCBsb2NrRm9jdXMoKTogdm9pZDtcbiAgICBwcm90ZWN0ZWQgdW5sb2NrRm9jdXMoZXZlbnQ/OiBVSUV2ZW50KTogdm9pZDtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkO1xuICAgIGhhbmRsZUZvY3VzKGV2ZW50PzogS2V5Ym9hcmRFdmVudCk6IHZvaWQ7XG4gICAgaGFuZGxlRXNjYXBlKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBXaGVuIHRoZSBoYW5kbGVGb2N1cyBpcyBjYWxsZWQgd2l0aG91dCBhbiBhY3R1YWwgZXZlbnQsIGl0J3MgY29taW5nIGZyb20gQXV0b2ZvY3VzLlxuICAgICAqIEluIHRoaXMgY2FzZSB3ZSB1bmxvY2sgdGhlIGZvY3VzYWJsZSBjaGlsZHJlbiBpbiBjYXNlIHRoZXJlJ3MgYSBmb2N1c2FibGUgY2hpbGQgdGhhdFxuICAgICAqIHdhcyB1bmxvY2tlZCBiZWZvcmUuXG4gICAgICpcbiAgICAgKiBXZSBrZWVwIHRoaXMgcHJpdmF0ZSB0byBub3QgcG9sdXRlIHRoZSBBUEkuXG4gICAgICovXG4gICAgcHJpdmF0ZSBzaG91bGRVbmxvY2tBZnRlckF1dG9mb2N1cztcbiAgICAvKipcbiAgICAgKiBBZGQgdGhlIHRhYmluZGV4IGF0dHJpYnV0ZSB0byB0aGUgZm9jdXNhYmxlIGNoaWxkcmVuIGVsZW1lbnRzXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFkZFRhYmluZGV4VG9DaGlsZHJlbihpPzogbnVtYmVyKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBVdGlsaXR5IG1ldGhvZCwgcmV0dXJucyBhbGwgZm9jdXNhYmxlIGNoaWxkcmVuIGZvciB0aGUgaG9zdCBlbGVtZW50LlxuICAgICAqXG4gICAgICogV2Uga2VlcCB0aGlzIHByaXZhdGUgdG8gbm90IHBvbHV0ZSB0aGUgQVBJLlxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0IGhhc0ZvY3VzYWJsZUNoaWxkcmVuKCk7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZm9jdXNhYmxlIGNoaWxkcmVuIG9mIHRoZSBob3N0IGVsZW1lbnQuIElmIHRoZSBob3N0IGVsZW1lbnRcbiAgICAgKiBpcyBjb25maWd1cmVkIHRvIGJlIGxvY2tlZCwgdGhlIHF1ZXJ5IGlzIHJlc3RyaWN0ZWQgdG8gY2hpbGQgZWxlbWVudHNcbiAgICAgKiB3aXRoIGEgdGFiaW5kZXggIT09IGAtMWAuXG4gICAgICpcbiAgICAgKiBXZSBrZWVwIHRoaXMgcHJpdmF0ZSB0byBub3QgcG9sdXRlIHRoZSBBUEkuXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXQgZm9jdXNhYmxlKCk7XG59XG4iXX0=