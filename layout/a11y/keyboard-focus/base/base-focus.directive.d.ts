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
    /**
     * Optional configuration for the focus directive drives the behaviour of the keyboard
     * focus directive.
     */
    protected config: BaseFocusConfig;
    /**
     * A default config can be provided for each directive if a specific focus directive
     * is used directly. i.e. `<div cxAutoFocus></div>`
     */
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
     */
    protected get requiresExplicitTabIndex(): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BaseFocusDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<BaseFocusDirective, never, never, { "tabindex": "tabindex"; }, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1mb2N1cy5kaXJlY3RpdmUuZC50cyIsInNvdXJjZXMiOlsiYmFzZS1mb2N1cy5kaXJlY3RpdmUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFhQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VGb2N1c0NvbmZpZyB9IGZyb20gJy4uL2tleWJvYXJkLWZvY3VzLm1vZGVsJztcbmltcG9ydCB7IEJhc2VGb2N1c1NlcnZpY2UgfSBmcm9tICcuL2Jhc2UtZm9jdXMuc2VydmljZSc7XG4vKipcbiAqIEFic3RyYWN0IGRpcmVjdGl2ZSB0aGF0IHByb3ZpZGVzIGEgY29tbW9uIGludGVyZmFjZSBmb3IgYWxsIGZvY3VzIGRpcmVjdGl2ZXM6XG4gKiAtIEJsb2NrIEZvY3VzXG4gKiAtIFBlcnNpc3QgRm9jdXNcbiAqIC0gRXNjYXBlIEZvY3VzXG4gKiAtIEF1dG8gRm9jdXNcbiAqIC0gVGFiIEZvY3VzXG4gKiAtIFRyYXAgRm9jdXNcbiAqIC0gTG9jayBGb2N1c1xuICovXG5leHBvcnQgZGVjbGFyZSBhYnN0cmFjdCBjbGFzcyBCYXNlRm9jdXNEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcbiAgICBwcm90ZWN0ZWQgc2VydmljZTogQmFzZUZvY3VzU2VydmljZTtcbiAgICAvKipcbiAgICAgKiBPcHRpb25hbCBjb25maWd1cmF0aW9uIGZvciB0aGUgZm9jdXMgZGlyZWN0aXZlIGRyaXZlcyB0aGUgYmVoYXZpb3VyIG9mIHRoZSBrZXlib2FyZFxuICAgICAqIGZvY3VzIGRpcmVjdGl2ZS5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBCYXNlRm9jdXNDb25maWc7XG4gICAgLyoqXG4gICAgICogQSBkZWZhdWx0IGNvbmZpZyBjYW4gYmUgcHJvdmlkZWQgZm9yIGVhY2ggZGlyZWN0aXZlIGlmIGEgc3BlY2lmaWMgZm9jdXMgZGlyZWN0aXZlXG4gICAgICogaXMgdXNlZCBkaXJlY3RseS4gaS5lLiBgPGRpdiBjeEF1dG9Gb2N1cz48L2Rpdj5gXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGRlZmF1bHRDb25maWc6IEJhc2VGb2N1c0NvbmZpZztcbiAgICB0YWJpbmRleDogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LCBzZXJ2aWNlOiBCYXNlRm9jdXNTZXJ2aWNlKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHRoZSAoaW5wdXQpIGNvbmZpZyBpZiBpdCB1bmRlZmluZWQgb3IgYW4gZW1wdHkgc3RyaW5nLCB3aXRoIHRoZVxuICAgICAqIGBkZWZhdWx0Q29uZmlnYC4gVGhlIGBkZWZhdWx0Q29uZmlnYCBtaWdodCBiZSBzcGVjaWZpZWQgZm9yIGVhY2ggZGlyZWN0aXZlXG4gICAgICogZGlmZmVyZW50bHkuIElmIGEgc3BlY2lmaWMgZGlyZWN0aXZlIGlzIHVzZWQgKGkuZS4gYGN4QXV0b0ZvY3VzYCksIHRoZVxuICAgICAqIHNwZWNpZmljIChpbmhlcml0ZWQpIGRlZmF1bHRDb25maWcgd2lsbCBiZSB1c2VkLlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBzZXREZWZhdWx0Q29uZmlndXJhdGlvbigpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEhlbHBlciBtZXRob2QgdG8gcmV0dXJuIHRoZSBob3N0IGVsZW1lbnQgZm9yIHRoZSBkaXJlY3RpdmVcbiAgICAgKiBnaXZlbiBieSB0aGUgYGVsZW1lbnRSZWZgLlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXQgaG9zdCgpOiBIVE1MRWxlbWVudDtcbiAgICAvKipcbiAgICAgKiBGb3JjZSBhIHRhYmluZGV4IG9uIHRoZSBob3N0IGVsZW1lbnQgaWYgaXQgaXMgX3JlcXVyaWVkXyB0byBtYWtlIHRoZSBlbGVtZW50XG4gICAgICogZm9jdXNhYmxlLiBJZiB0aGUgZWxlbWVudCBpcyBmb2N1c2FibGUgYnkgbmF0dXJlIG9yIGJ5IGEgZ2l2ZW4gdGFiaW5kZXgsIHRoZVxuICAgICAqIGB0YWJpbmRleGAgaXMgbm90IGFwcGxpZWQuXG4gICAgICpcbiAgICAgKiBCdXR0b25zLCBhY3RpdmUgbGlua3MsIGV0Yy4gZG8gbm8gbmVlZCBhbiBleHBsaWNpdCB0YWJpbmRleCB0byByZWNlaXZlIGZvY3VzLlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBzZXQgcmVxdWlyZWRUYWJpbmRleCh0YWJpbmRleDogbnVtYmVyKTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGhvc3QgZWxlbWVudCBkb2VzIG5vdCBoYXZlIGEgdGFiaW5kZXggZGVmaW5lZFxuICAgICAqIGFuZCBpdCBhbHNvIGRvZXNuJ3QgZ2V0IGZvY3VzIGJ5IGJyb3dzZXJzIG5hdHVyZSAoaS5lLiBidXR0b24gb3JcbiAgICAgKiBhY3RpdmUgbGluaykuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldCByZXF1aXJlc0V4cGxpY2l0VGFiSW5kZXgoKTogYm9vbGVhbjtcbn1cbiJdfQ==