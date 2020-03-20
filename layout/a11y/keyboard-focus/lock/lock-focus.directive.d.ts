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
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<LockFocusDirective, never, never, {}, {
    "unlock": "unlock";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jay1mb2N1cy5kaXJlY3RpdmUuZC50cyIsInNvdXJjZXMiOlsibG9jay1mb2N1cy5kaXJlY3RpdmUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZEQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvY2tGb2N1c0NvbmZpZyB9IGZyb20gJy4uL2tleWJvYXJkLWZvY3VzLm1vZGVsJztcbmltcG9ydCB7IFRyYXBGb2N1c0RpcmVjdGl2ZSB9IGZyb20gJy4uL3RyYXAvdHJhcC1mb2N1cy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTG9ja0ZvY3VzU2VydmljZSB9IGZyb20gJy4vbG9jay1mb2N1cy5zZXJ2aWNlJztcbi8qKlxuICogRGlyZWN0aXZlIHRoYXQgYWRkcyBwZXJzaXN0ZW5jZSBmb3IgZm9jdXNzZWQgZWxlbWVudCBpbiBjYXNlXG4gKiB0aGUgZWxlbWVudHMgYXJlIGJlaW5nIHJlYnVpbGQuIFRoaXMgaGFwcGVucyBvZnRlbiB3aGVuIGNoYW5nZVxuICogZGV0ZWN0aW9uIGtpY2tzIGluIGJlY2F1c2Ugb2YgbmV3IGRhdGEgc2V0IGZyb20gdGhlIGJhY2tlbmQuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIExvY2tGb2N1c0RpcmVjdGl2ZSBleHRlbmRzIFRyYXBGb2N1c0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gICAgcHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICAgcHJvdGVjdGVkIHNlcnZpY2U6IExvY2tGb2N1c1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjI7XG4gICAgcHJvdGVjdGVkIGRlZmF1bHRDb25maWc6IExvY2tGb2N1c0NvbmZpZztcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBMb2NrRm9jdXNDb25maWc7XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHRoYXQgdGhlIGhvc3QgaXMgY29uZmlndXJlZCB0byB1c2UgbG9ja2luZy4gVGhpcyBpcyBhdmFpbGFibGUgYXMgYVxuICAgICAqIENTUyBjbGFzcyBgZm9jdXMtbG9ja2AuXG4gICAgICovXG4gICAgc2hvdWxkTG9jazogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgdGhhdCB0aGUgaG9zdCBpcyBsb2NrZWQuIFRoaXMgaXMgYXZhaWxhYmxlIGFzIGEgQ1NTIGNsYXNzIGBpcy1sb2NrZWRgLlxuICAgICAqL1xuICAgIGlzTG9ja2VkOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIGhvc3QgaXMgdW5sb2NrZWQuXG4gICAgICovXG4gICAgdW5sb2NrOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogV2hlbiB0aGUgdXNlciBzZWxlY3RzIGVudGVyIG9yIHNwYWNlLCB0aGUgZm9jdXNhYmxlIGNoaWxkcyBhcmVcbiAgICAgKiB1bmxvY2tlZCwgd2hpY2ggbWVhbnMgdGhhdCB0aGUgdGFiaW5kZXggaXMgc2V0IHRvIDAuXG4gICAgICovXG4gICAgaGFuZGxlRW50ZXIoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEluIGNhc2UgYW55IG9mIHRoZSBjaGlsZHJlbiBlbGVtZW50cyBpcyB0b3VjaGVkIGJ5IHRoZSBtb3VzZSxcbiAgICAgKiB3ZSB1bmxvY2sgdGhlIGdyb3VwIHRvIG5vdCBicmVhayB0aGUgbW91c2UtZXhwZXJpZW5jZS5cbiAgICAgKi9cbiAgICBoYW5kbGVDbGljayhldmVudDogVUlFdmVudCk6IHZvaWQ7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgc2VydmljZTogTG9ja0ZvY3VzU2VydmljZSwgcmVuZGVyZXI6IFJlbmRlcmVyMik7XG4gICAgcHJvdGVjdGVkIGxvY2tGb2N1cygpOiB2b2lkO1xuICAgIHByb3RlY3RlZCB1bmxvY2tGb2N1cyhldmVudD86IFVJRXZlbnQpOiB2b2lkO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQ7XG4gICAgaGFuZGxlRm9jdXMoZXZlbnQ/OiBLZXlib2FyZEV2ZW50KTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBXaGVuIHRoZSBoYW5kbGVGb2N1cyBpcyBjYWxsZWQgd2l0aG91dCBhbiBhY3R1YWwgZXZlbnQsIGl0J3MgY29taW5nIGZyb20gQXV0b2ZvY3VzLlxuICAgICAqIEluIHRoaXMgY2FzZSB3ZSB1bmxvY2sgdGhlIGZvY3VzYWJsZSBjaGlsZHJlbiBpbiBjYXNlIHRoZXJlJ3MgYSBmb2N1c2FibGUgY2hpbGQgdGhhdFxuICAgICAqIHdhcyB1bmxvY2tlZCBiZWZvcmUuXG4gICAgICpcbiAgICAgKiBXZSBrZWVwIHRoaXMgcHJpdmF0ZSB0byBub3QgcG9sdXRlIHRoZSBBUEkuXG4gICAgICovXG4gICAgcHJpdmF0ZSBzaG91bGRVbmxvY2tBZnRlckF1dG9mb2N1cztcbiAgICAvKipcbiAgICAgKiBBZGQgdGhlIHRhYmluZGV4IGF0dHJpYnV0ZSB0byB0aGUgZm9jdXNhYmxlIGNoaWxkcmVuIGVsZW1lbnRzXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFkZFRhYmluZGV4VG9DaGlsZHJlbihpPzogbnVtYmVyKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBVdGlsaXR5IG1ldGhvZCwgcmV0dXJucyBhbGwgZm9jdXNhYmxlIGNoaWxkcmVuIGZvciB0aGUgaG9zdCBlbGVtZW50LlxuICAgICAqXG4gICAgICogV2Uga2VlcCB0aGlzIHByaXZhdGUgdG8gbm90IHBvbHV0ZSB0aGUgQVBJLlxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0IGhhc0ZvY3VzYWJsZUNoaWxkcmVuKCk7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZm9jdXNhYmxlIGNoaWxkcmVuIG9mIHRoZSBob3N0IGVsZW1lbnQuIElmIHRoZSBob3N0IGVsZW1lbnRcbiAgICAgKiBpcyBjb25maWd1cmVkIHRvIGJlIGxvY2tlZCwgdGhlIHF1ZXJ5IGlzIHJlc3RyaWN0ZWQgdG8gY2hpbGQgZWxlbWVudHNcbiAgICAgKiB3aXRoIGEgdGFiaW5kZXggIT09IGAtMWAuXG4gICAgICpcbiAgICAgKiBXZSBrZWVwIHRoaXMgcHJpdmF0ZSB0byBub3QgcG9sdXRlIHRoZSBBUEkuXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXQgZm9jdXNhYmxlKCk7XG59XG4iXX0=