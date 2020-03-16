import { ElementRef, OnInit } from '@angular/core';
import { BaseFocusConfig } from '../keyboard-focus.model';
import { BaseFocusService } from './base-focus.service';
/**
 * Abstract directive that provides a common interface for all focus directives:
 * - Block Focus
 * - Persist Focus
 * - Escape Focus
 * - Auto Focus
 * - Tab Focus
 * - Trap Focus
 * - Lock Focus
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class BaseFocusDirective implements OnInit {
    protected elementRef: ElementRef<HTMLElement>;
    protected service: BaseFocusService;
    protected config: BaseFocusConfig;
    protected defaultConfig: BaseFocusConfig;
    tabindex: number;
    constructor(elementRef: ElementRef<HTMLElement>, service: BaseFocusService);
    ngOnInit(): void;
    /**
     * Override the (input) config if it undefined or an empty string, with the
     * `defaultConfig`. The `defaultConfig` might be specified for each directive
     * differently. If a specific directive is used (i.e. `cxAutoFocus`), the
     * specific (inherited) defaultConfig will be used.
     */
    protected setDefaultConfiguration(): void;
    /**
     * Helper method to return the host element for the directive
     * given by the `elementRef`.
     */
    protected get host(): HTMLElement;
    /**
     * Force a tabindex on the host element if it is _requried_ to make the element
     * focusable. If the element is focusable by nature or by a given tabindex, the
     * `tabindex` is not applied.
     *
     * Buttons, active links, etc. do no need an explicit tabindex to receive focus.
     */
    protected set requiredTabindex(tabindex: number);
    /**
     * Returns true if the host element does not have a tabindex defined
     * and it also doesn't get focus by browsers nature (i.e. button or
     * active link).
     *
     * We keep this utility method private to not pollute the API.
     */
    private get requiresExplicitTabIndex();
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BaseFocusDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<BaseFocusDirective, never, never, {
    "tabindex": "tabindex";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1mb2N1cy5kaXJlY3RpdmUuZC50cyIsInNvdXJjZXMiOlsiYmFzZS1mb2N1cy5kaXJlY3RpdmUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFhQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9DQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZUZvY3VzQ29uZmlnIH0gZnJvbSAnLi4va2V5Ym9hcmQtZm9jdXMubW9kZWwnO1xuaW1wb3J0IHsgQmFzZUZvY3VzU2VydmljZSB9IGZyb20gJy4vYmFzZS1mb2N1cy5zZXJ2aWNlJztcbi8qKlxuICogQWJzdHJhY3QgZGlyZWN0aXZlIHRoYXQgcHJvdmlkZXMgYSBjb21tb24gaW50ZXJmYWNlIGZvciBhbGwgZm9jdXMgZGlyZWN0aXZlczpcbiAqIC0gQmxvY2sgRm9jdXNcbiAqIC0gUGVyc2lzdCBGb2N1c1xuICogLSBFc2NhcGUgRm9jdXNcbiAqIC0gQXV0byBGb2N1c1xuICogLSBUYWIgRm9jdXNcbiAqIC0gVHJhcCBGb2N1c1xuICogLSBMb2NrIEZvY3VzXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGFic3RyYWN0IGNsYXNzIEJhc2VGb2N1c0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuICAgIHByb3RlY3RlZCBzZXJ2aWNlOiBCYXNlRm9jdXNTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBjb25maWc6IEJhc2VGb2N1c0NvbmZpZztcbiAgICBwcm90ZWN0ZWQgZGVmYXVsdENvbmZpZzogQmFzZUZvY3VzQ29uZmlnO1xuICAgIHRhYmluZGV4OiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sIHNlcnZpY2U6IEJhc2VGb2N1c1NlcnZpY2UpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgdGhlIChpbnB1dCkgY29uZmlnIGlmIGl0IHVuZGVmaW5lZCBvciBhbiBlbXB0eSBzdHJpbmcsIHdpdGggdGhlXG4gICAgICogYGRlZmF1bHRDb25maWdgLiBUaGUgYGRlZmF1bHRDb25maWdgIG1pZ2h0IGJlIHNwZWNpZmllZCBmb3IgZWFjaCBkaXJlY3RpdmVcbiAgICAgKiBkaWZmZXJlbnRseS4gSWYgYSBzcGVjaWZpYyBkaXJlY3RpdmUgaXMgdXNlZCAoaS5lLiBgY3hBdXRvRm9jdXNgKSwgdGhlXG4gICAgICogc3BlY2lmaWMgKGluaGVyaXRlZCkgZGVmYXVsdENvbmZpZyB3aWxsIGJlIHVzZWQuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHNldERlZmF1bHRDb25maWd1cmF0aW9uKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogSGVscGVyIG1ldGhvZCB0byByZXR1cm4gdGhlIGhvc3QgZWxlbWVudCBmb3IgdGhlIGRpcmVjdGl2ZVxuICAgICAqIGdpdmVuIGJ5IHRoZSBgZWxlbWVudFJlZmAuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldCBob3N0KCk6IEhUTUxFbGVtZW50O1xuICAgIC8qKlxuICAgICAqIEZvcmNlIGEgdGFiaW5kZXggb24gdGhlIGhvc3QgZWxlbWVudCBpZiBpdCBpcyBfcmVxdXJpZWRfIHRvIG1ha2UgdGhlIGVsZW1lbnRcbiAgICAgKiBmb2N1c2FibGUuIElmIHRoZSBlbGVtZW50IGlzIGZvY3VzYWJsZSBieSBuYXR1cmUgb3IgYnkgYSBnaXZlbiB0YWJpbmRleCwgdGhlXG4gICAgICogYHRhYmluZGV4YCBpcyBub3QgYXBwbGllZC5cbiAgICAgKlxuICAgICAqIEJ1dHRvbnMsIGFjdGl2ZSBsaW5rcywgZXRjLiBkbyBubyBuZWVkIGFuIGV4cGxpY2l0IHRhYmluZGV4IHRvIHJlY2VpdmUgZm9jdXMuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHNldCByZXF1aXJlZFRhYmluZGV4KHRhYmluZGV4OiBudW1iZXIpO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgaG9zdCBlbGVtZW50IGRvZXMgbm90IGhhdmUgYSB0YWJpbmRleCBkZWZpbmVkXG4gICAgICogYW5kIGl0IGFsc28gZG9lc24ndCBnZXQgZm9jdXMgYnkgYnJvd3NlcnMgbmF0dXJlIChpLmUuIGJ1dHRvbiBvclxuICAgICAqIGFjdGl2ZSBsaW5rKS5cbiAgICAgKlxuICAgICAqIFdlIGtlZXAgdGhpcyB1dGlsaXR5IG1ldGhvZCBwcml2YXRlIHRvIG5vdCBwb2xsdXRlIHRoZSBBUEkuXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXQgcmVxdWlyZXNFeHBsaWNpdFRhYkluZGV4KCk7XG59XG4iXX0=