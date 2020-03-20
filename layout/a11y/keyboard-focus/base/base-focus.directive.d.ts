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
     *
     * We keep this utility method private to not pollute the API.
     */
    private get requiresExplicitTabIndex();
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BaseFocusDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<BaseFocusDirective, never, never, {
    "tabindex": "tabindex";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1mb2N1cy5kaXJlY3RpdmUuZC50cyIsInNvdXJjZXMiOlsiYmFzZS1mb2N1cy5kaXJlY3RpdmUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFhQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNENBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXNlRm9jdXNDb25maWcgfSBmcm9tICcuLi9rZXlib2FyZC1mb2N1cy5tb2RlbCc7XG5pbXBvcnQgeyBCYXNlRm9jdXNTZXJ2aWNlIH0gZnJvbSAnLi9iYXNlLWZvY3VzLnNlcnZpY2UnO1xuLyoqXG4gKiBBYnN0cmFjdCBkaXJlY3RpdmUgdGhhdCBwcm92aWRlcyBhIGNvbW1vbiBpbnRlcmZhY2UgZm9yIGFsbCBmb2N1cyBkaXJlY3RpdmVzOlxuICogLSBCbG9jayBGb2N1c1xuICogLSBQZXJzaXN0IEZvY3VzXG4gKiAtIEVzY2FwZSBGb2N1c1xuICogLSBBdXRvIEZvY3VzXG4gKiAtIFRhYiBGb2N1c1xuICogLSBUcmFwIEZvY3VzXG4gKiAtIExvY2sgRm9jdXNcbiAqL1xuZXhwb3J0IGRlY2xhcmUgYWJzdHJhY3QgY2xhc3MgQmFzZUZvY3VzRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG4gICAgcHJvdGVjdGVkIHNlcnZpY2U6IEJhc2VGb2N1c1NlcnZpY2U7XG4gICAgLyoqXG4gICAgICogT3B0aW9uYWwgY29uZmlndXJhdGlvbiBmb3IgdGhlIGZvY3VzIGRpcmVjdGl2ZSBkcml2ZXMgdGhlIGJlaGF2aW91ciBvZiB0aGUga2V5Ym9hcmRcbiAgICAgKiBmb2N1cyBkaXJlY3RpdmUuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogQmFzZUZvY3VzQ29uZmlnO1xuICAgIC8qKlxuICAgICAqIEEgZGVmYXVsdCBjb25maWcgY2FuIGJlIHByb3ZpZGVkIGZvciBlYWNoIGRpcmVjdGl2ZSBpZiBhIHNwZWNpZmljIGZvY3VzIGRpcmVjdGl2ZVxuICAgICAqIGlzIHVzZWQgZGlyZWN0bHkuIGkuZS4gYDxkaXYgY3hBdXRvRm9jdXM+PC9kaXY+YFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBkZWZhdWx0Q29uZmlnOiBCYXNlRm9jdXNDb25maWc7XG4gICAgdGFiaW5kZXg6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Piwgc2VydmljZTogQmFzZUZvY3VzU2VydmljZSk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSB0aGUgKGlucHV0KSBjb25maWcgaWYgaXQgdW5kZWZpbmVkIG9yIGFuIGVtcHR5IHN0cmluZywgd2l0aCB0aGVcbiAgICAgKiBgZGVmYXVsdENvbmZpZ2AuIFRoZSBgZGVmYXVsdENvbmZpZ2AgbWlnaHQgYmUgc3BlY2lmaWVkIGZvciBlYWNoIGRpcmVjdGl2ZVxuICAgICAqIGRpZmZlcmVudGx5LiBJZiBhIHNwZWNpZmljIGRpcmVjdGl2ZSBpcyB1c2VkIChpLmUuIGBjeEF1dG9Gb2N1c2ApLCB0aGVcbiAgICAgKiBzcGVjaWZpYyAoaW5oZXJpdGVkKSBkZWZhdWx0Q29uZmlnIHdpbGwgYmUgdXNlZC5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgc2V0RGVmYXVsdENvbmZpZ3VyYXRpb24oKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBIZWxwZXIgbWV0aG9kIHRvIHJldHVybiB0aGUgaG9zdCBlbGVtZW50IGZvciB0aGUgZGlyZWN0aXZlXG4gICAgICogZ2l2ZW4gYnkgdGhlIGBlbGVtZW50UmVmYC5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0IGhvc3QoKTogSFRNTEVsZW1lbnQ7XG4gICAgLyoqXG4gICAgICogRm9yY2UgYSB0YWJpbmRleCBvbiB0aGUgaG9zdCBlbGVtZW50IGlmIGl0IGlzIF9yZXF1cmllZF8gdG8gbWFrZSB0aGUgZWxlbWVudFxuICAgICAqIGZvY3VzYWJsZS4gSWYgdGhlIGVsZW1lbnQgaXMgZm9jdXNhYmxlIGJ5IG5hdHVyZSBvciBieSBhIGdpdmVuIHRhYmluZGV4LCB0aGVcbiAgICAgKiBgdGFiaW5kZXhgIGlzIG5vdCBhcHBsaWVkLlxuICAgICAqXG4gICAgICogQnV0dG9ucywgYWN0aXZlIGxpbmtzLCBldGMuIGRvIG5vIG5lZWQgYW4gZXhwbGljaXQgdGFiaW5kZXggdG8gcmVjZWl2ZSBmb2N1cy5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgc2V0IHJlcXVpcmVkVGFiaW5kZXgodGFiaW5kZXg6IG51bWJlcik7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBob3N0IGVsZW1lbnQgZG9lcyBub3QgaGF2ZSBhIHRhYmluZGV4IGRlZmluZWRcbiAgICAgKiBhbmQgaXQgYWxzbyBkb2Vzbid0IGdldCBmb2N1cyBieSBicm93c2VycyBuYXR1cmUgKGkuZS4gYnV0dG9uIG9yXG4gICAgICogYWN0aXZlIGxpbmspLlxuICAgICAqXG4gICAgICogV2Uga2VlcCB0aGlzIHV0aWxpdHkgbWV0aG9kIHByaXZhdGUgdG8gbm90IHBvbGx1dGUgdGhlIEFQSS5cbiAgICAgKi9cbiAgICBwcml2YXRlIGdldCByZXF1aXJlc0V4cGxpY2l0VGFiSW5kZXgoKTtcbn1cbiJdfQ==