import { AfterContentInit, ElementRef, EventEmitter, OnInit, Renderer2 } from '@angular/core';
import { LockFocusConfig } from '../keyboard-focus.model';
import { TrapFocusDirective } from '../trap/trap-focus.directive';
import { LockFocusService } from './lock-focus.service';
/**
 * Directive that adds persistence for focussed element in case
 * the elements are being rebuild. This happens often when change
 * detection kicks in because of new data set from the backend.
 */
import * as ɵngcc0 from '@angular/core';
export declare class LockFocusDirective extends TrapFocusDirective implements OnInit, AfterContentInit {
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
    ngAfterContentInit(): void;
    handleFocus(event?: KeyboardEvent): void;
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
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<LockFocusDirective, "[cxLockFocus]", never, {
    "config": "cxLockFocus";
}, {
    "unlock": "unlock";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jay1mb2N1cy5kaXJlY3RpdmUuZC50cyIsInNvdXJjZXMiOlsibG9jay1mb2N1cy5kaXJlY3RpdmUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkRBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9ja0ZvY3VzQ29uZmlnIH0gZnJvbSAnLi4va2V5Ym9hcmQtZm9jdXMubW9kZWwnO1xuaW1wb3J0IHsgVHJhcEZvY3VzRGlyZWN0aXZlIH0gZnJvbSAnLi4vdHJhcC90cmFwLWZvY3VzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMb2NrRm9jdXNTZXJ2aWNlIH0gZnJvbSAnLi9sb2NrLWZvY3VzLnNlcnZpY2UnO1xuLyoqXG4gKiBEaXJlY3RpdmUgdGhhdCBhZGRzIHBlcnNpc3RlbmNlIGZvciBmb2N1c3NlZCBlbGVtZW50IGluIGNhc2VcbiAqIHRoZSBlbGVtZW50cyBhcmUgYmVpbmcgcmVidWlsZC4gVGhpcyBoYXBwZW5zIG9mdGVuIHdoZW4gY2hhbmdlXG4gKiBkZXRlY3Rpb24ga2lja3MgaW4gYmVjYXVzZSBvZiBuZXcgZGF0YSBzZXQgZnJvbSB0aGUgYmFja2VuZC5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTG9ja0ZvY3VzRGlyZWN0aXZlIGV4dGVuZHMgVHJhcEZvY3VzRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0IHtcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgICBwcm90ZWN0ZWQgc2VydmljZTogTG9ja0ZvY3VzU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMjtcbiAgICBwcm90ZWN0ZWQgZGVmYXVsdENvbmZpZzogTG9ja0ZvY3VzQ29uZmlnO1xuICAgIHByb3RlY3RlZCBjb25maWc6IExvY2tGb2N1c0NvbmZpZztcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgdGhhdCB0aGUgaG9zdCBpcyBjb25maWd1cmVkIHRvIHVzZSBsb2NraW5nLiBUaGlzIGlzIGF2YWlsYWJsZSBhcyBhXG4gICAgICogQ1NTIGNsYXNzIGBmb2N1cy1sb2NrYC5cbiAgICAgKi9cbiAgICBzaG91bGRMb2NrOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB0aGF0IHRoZSBob3N0IGlzIGxvY2tlZC4gVGhpcyBpcyBhdmFpbGFibGUgYXMgYSBDU1MgY2xhc3MgYGlzLWxvY2tlZGAuXG4gICAgICovXG4gICAgaXNMb2NrZWQ6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgaG9zdCBpcyB1bmxvY2tlZC5cbiAgICAgKi9cbiAgICB1bmxvY2s6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBXaGVuIHRoZSB1c2VyIHNlbGVjdHMgZW50ZXIgb3Igc3BhY2UsIHRoZSBmb2N1c2FibGUgY2hpbGRzIGFyZVxuICAgICAqIHVubG9ja2VkLCB3aGljaCBtZWFucyB0aGF0IHRoZSB0YWJpbmRleCBpcyBzZXQgdG8gMC5cbiAgICAgKi9cbiAgICBoYW5kbGVFbnRlcihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogSW4gY2FzZSBhbnkgb2YgdGhlIGNoaWxkcmVuIGVsZW1lbnRzIGlzIHRvdWNoZWQgYnkgdGhlIG1vdXNlLFxuICAgICAqIHdlIHVubG9jayB0aGUgZ3JvdXAgdG8gbm90IGJyZWFrIHRoZSBtb3VzZS1leHBlcmllbmNlLlxuICAgICAqL1xuICAgIGhhbmRsZUNsaWNrKGV2ZW50OiBVSUV2ZW50KTogdm9pZDtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBzZXJ2aWNlOiBMb2NrRm9jdXNTZXJ2aWNlLCByZW5kZXJlcjogUmVuZGVyZXIyKTtcbiAgICBwcm90ZWN0ZWQgbG9ja0ZvY3VzKCk6IHZvaWQ7XG4gICAgcHJvdGVjdGVkIHVubG9ja0ZvY3VzKGV2ZW50PzogVUlFdmVudCk6IHZvaWQ7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZDtcbiAgICBoYW5kbGVGb2N1cyhldmVudD86IEtleWJvYXJkRXZlbnQpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFdoZW4gdGhlIGhhbmRsZUZvY3VzIGlzIGNhbGxlZCB3aXRob3V0IGFuIGFjdHVhbCBldmVudCwgaXQncyBjb21pbmcgZnJvbSBBdXRvZm9jdXMuXG4gICAgICogSW4gdGhpcyBjYXNlIHdlIHVubG9jayB0aGUgZm9jdXNhYmxlIGNoaWxkcmVuIGluIGNhc2UgdGhlcmUncyBhIGZvY3VzYWJsZSBjaGlsZCB0aGF0XG4gICAgICogd2FzIHVubG9ja2VkIGJlZm9yZS5cbiAgICAgKlxuICAgICAqIFdlIGtlZXAgdGhpcyBwcml2YXRlIHRvIG5vdCBwb2x1dGUgdGhlIEFQSS5cbiAgICAgKi9cbiAgICBwcml2YXRlIHNob3VsZFVubG9ja0FmdGVyQXV0b2ZvY3VzO1xuICAgIC8qKlxuICAgICAqIEFkZCB0aGUgdGFiaW5kZXggYXR0cmlidXRlIHRvIHRoZSBmb2N1c2FibGUgY2hpbGRyZW4gZWxlbWVudHNcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYWRkVGFiaW5kZXhUb0NoaWxkcmVuKGk/OiBudW1iZXIpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFV0aWxpdHkgbWV0aG9kLCByZXR1cm5zIGFsbCBmb2N1c2FibGUgY2hpbGRyZW4gZm9yIHRoZSBob3N0IGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBXZSBrZWVwIHRoaXMgcHJpdmF0ZSB0byBub3QgcG9sdXRlIHRoZSBBUEkuXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXQgaGFzRm9jdXNhYmxlQ2hpbGRyZW4oKTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBmb2N1c2FibGUgY2hpbGRyZW4gb2YgdGhlIGhvc3QgZWxlbWVudC4gSWYgdGhlIGhvc3QgZWxlbWVudFxuICAgICAqIGlzIGNvbmZpZ3VyZWQgdG8gYmUgbG9ja2VkLCB0aGUgcXVlcnkgaXMgcmVzdHJpY3RlZCB0byBjaGlsZCBlbGVtZW50c1xuICAgICAqIHdpdGggYSB0YWJpbmRleCAhPT0gYC0xYC5cbiAgICAgKlxuICAgICAqIFdlIGtlZXAgdGhpcyBwcml2YXRlIHRvIG5vdCBwb2x1dGUgdGhlIEFQSS5cbiAgICAgKi9cbiAgICBwcml2YXRlIGdldCBmb2N1c2FibGUoKTtcbn1cbiJdfQ==