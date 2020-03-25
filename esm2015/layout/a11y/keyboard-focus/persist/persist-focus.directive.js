import { __decorate } from "tslib";
import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener, OnInit, } from '@angular/core';
import { BlockFocusDirective } from '../block/block-focus.directive';
import { FOCUS_ATTR } from '../keyboard-focus.model';
import { PersistFocusService } from './persist-focus.service';
/**
 * Directive that provides persistence of the focused state. This is useful
 * when a group of focusable elements got refocused or even recreated. That
 * happens often when the DOM is constructed with an `*ngIf` or `*ngFor`.
 *
 * The focus state is based on a configured _key_, which can be passed in the
 * config input, either by using a string primitive or `PersistFocusConfig.key`:
 *
 * ```html
 * <button cxPersistFocus="myKey"></button>
 * <button cxFocus="myKey"></button>
 * <button [cxFocus]="{{key:'myKey'}"></button>
 * ```
 *
 * The focus state can be part of a focus _group_, so that the state is shared
 * and remember for the given group. In order to detect the persistence for a
 * given element, we store the persistence key as a data attribute (`data-cx-focus`):
 *
 * ```html
 * <button data-cx-focus="myKey"></button>
 * ```
 *
 * Other keyboard focus directives can read the key to understand whether the element
 * should retrieve focus.
 *
 */
let PersistFocusDirective = class PersistFocusDirective extends BlockFocusDirective {
    constructor(elementRef, service) {
        super(elementRef, service);
        this.elementRef = elementRef;
        this.service = service;
        this.defaultConfig = {};
        /**
         * The persistence key can be passed directly or through the `FocusConfig.key`.
         * While this could be considered a global key, the likeliness of conflicts
         * is very small since the key is cleared when the focus is changed.
         */
        // @Input('cxPersistFocus')
        this.config = {};
    }
    handleFocus(event) {
        var _a, _b;
        this.service.set(this.key, this.group);
        (_a = event) === null || _a === void 0 ? void 0 : _a.preventDefault();
        (_b = event) === null || _b === void 0 ? void 0 : _b.stopPropagation();
    }
    ngOnInit() {
        super.ngOnInit();
        this.attr = this.key ? this.key : undefined;
    }
    setDefaultConfiguration() {
        if (typeof this.config === 'string' && this.config !== '') {
            this.config = { key: this.config };
        }
        super.setDefaultConfiguration();
    }
    /**
     * Focus the element explicitly if it was focused before.
     */
    ngAfterViewInit() {
        if (this.isPersisted) {
            this.host.focus({ preventScroll: true });
        }
    }
    get isPersisted() {
        return !!this.key && this.service.get(this.group) === this.key;
    }
    /**
     * Returns the key for the host element, which is used to persist the
     * focus state. This is useful in cases where the DOM is rebuild.
     */
    get key() {
        var _a;
        return (_a = this.config) === null || _a === void 0 ? void 0 : _a.key;
    }
    /**
     * returns the persistence group (if any) for the focusable elements.
     */
    get group() {
        return this.service.getPersistenceGroup(this.host, this.config);
    }
};
PersistFocusDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: PersistFocusService }
];
__decorate([
    HostBinding(`attr.${FOCUS_ATTR}`)
], PersistFocusDirective.prototype, "attr", void 0);
__decorate([
    HostListener('focus', ['$event'])
], PersistFocusDirective.prototype, "handleFocus", null);
PersistFocusDirective = __decorate([
    Directive() // selector: '[cxPersistFocus]',
], PersistFocusDirective);
export { PersistFocusDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdC1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9wZXJzaXN0L3BlcnNpc3QtZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsYUFBYSxFQUNiLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLFlBQVksRUFDWixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFFLFVBQVUsRUFBc0IsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUU5RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlCRztBQUVILElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXNCLFNBQVEsbUJBQW1CO0lBMkI1RCxZQUNZLFVBQXNCLEVBQ3RCLE9BQTRCO1FBRXRDLEtBQUssQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFIakIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixZQUFPLEdBQVAsT0FBTyxDQUFxQjtRQTNCOUIsa0JBQWEsR0FBdUIsRUFBRSxDQUFDO1FBRWpEOzs7O1dBSUc7UUFDSCwyQkFBMkI7UUFDakIsV0FBTSxHQUF1QixFQUFFLENBQUM7SUFzQjFDLENBQUM7SUFaRCxXQUFXLENBQUMsS0FBcUI7O1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXZDLE1BQUEsS0FBSywwQ0FBRSxjQUFjLEdBQUc7UUFDeEIsTUFBQSxLQUFLLDBDQUFFLGVBQWUsR0FBRztJQUMzQixDQUFDO0lBU0QsUUFBUTtRQUNOLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM5QyxDQUFDO0lBRVMsdUJBQXVCO1FBQy9CLElBQUksT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLEVBQUUsRUFBRTtZQUN6RCxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNwQztRQUNELEtBQUssQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILGVBQWU7UUFDYixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUMxQztJQUNILENBQUM7SUFFRCxJQUFjLFdBQVc7UUFDdkIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNqRSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsSUFBYyxHQUFHOztRQUNmLGFBQVEsSUFBSSxDQUFDLE1BQTZCLDBDQUFFLEdBQUcsQ0FBQztJQUNsRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFjLEtBQUs7UUFDakIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUNyQyxJQUFJLENBQUMsSUFBSSxFQUNULElBQUksQ0FBQyxNQUE0QixDQUNsQyxDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7O1lBaER5QixVQUFVO1lBQ2IsbUJBQW1COztBQVpMO0lBQWxDLFdBQVcsQ0FBQyxRQUFRLFVBQVUsRUFBRSxDQUFDO21EQUFjO0FBR2hEO0lBREMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dEQU1qQztBQXpCVSxxQkFBcUI7SUFEakMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDO0dBQ2hDLHFCQUFxQixDQTRFakM7U0E1RVkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmxvY2tGb2N1c0RpcmVjdGl2ZSB9IGZyb20gJy4uL2Jsb2NrL2Jsb2NrLWZvY3VzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBGT0NVU19BVFRSLCBQZXJzaXN0Rm9jdXNDb25maWcgfSBmcm9tICcuLi9rZXlib2FyZC1mb2N1cy5tb2RlbCc7XG5pbXBvcnQgeyBQZXJzaXN0Rm9jdXNTZXJ2aWNlIH0gZnJvbSAnLi9wZXJzaXN0LWZvY3VzLnNlcnZpY2UnO1xuXG4vKipcbiAqIERpcmVjdGl2ZSB0aGF0IHByb3ZpZGVzIHBlcnNpc3RlbmNlIG9mIHRoZSBmb2N1c2VkIHN0YXRlLiBUaGlzIGlzIHVzZWZ1bFxuICogd2hlbiBhIGdyb3VwIG9mIGZvY3VzYWJsZSBlbGVtZW50cyBnb3QgcmVmb2N1c2VkIG9yIGV2ZW4gcmVjcmVhdGVkLiBUaGF0XG4gKiBoYXBwZW5zIG9mdGVuIHdoZW4gdGhlIERPTSBpcyBjb25zdHJ1Y3RlZCB3aXRoIGFuIGAqbmdJZmAgb3IgYCpuZ0ZvcmAuXG4gKlxuICogVGhlIGZvY3VzIHN0YXRlIGlzIGJhc2VkIG9uIGEgY29uZmlndXJlZCBfa2V5Xywgd2hpY2ggY2FuIGJlIHBhc3NlZCBpbiB0aGVcbiAqIGNvbmZpZyBpbnB1dCwgZWl0aGVyIGJ5IHVzaW5nIGEgc3RyaW5nIHByaW1pdGl2ZSBvciBgUGVyc2lzdEZvY3VzQ29uZmlnLmtleWA6XG4gKlxuICogYGBgaHRtbFxuICogPGJ1dHRvbiBjeFBlcnNpc3RGb2N1cz1cIm15S2V5XCI+PC9idXR0b24+XG4gKiA8YnV0dG9uIGN4Rm9jdXM9XCJteUtleVwiPjwvYnV0dG9uPlxuICogPGJ1dHRvbiBbY3hGb2N1c109XCJ7e2tleTonbXlLZXknfVwiPjwvYnV0dG9uPlxuICogYGBgXG4gKlxuICogVGhlIGZvY3VzIHN0YXRlIGNhbiBiZSBwYXJ0IG9mIGEgZm9jdXMgX2dyb3VwXywgc28gdGhhdCB0aGUgc3RhdGUgaXMgc2hhcmVkXG4gKiBhbmQgcmVtZW1iZXIgZm9yIHRoZSBnaXZlbiBncm91cC4gSW4gb3JkZXIgdG8gZGV0ZWN0IHRoZSBwZXJzaXN0ZW5jZSBmb3IgYVxuICogZ2l2ZW4gZWxlbWVudCwgd2Ugc3RvcmUgdGhlIHBlcnNpc3RlbmNlIGtleSBhcyBhIGRhdGEgYXR0cmlidXRlIChgZGF0YS1jeC1mb2N1c2ApOlxuICpcbiAqIGBgYGh0bWxcbiAqIDxidXR0b24gZGF0YS1jeC1mb2N1cz1cIm15S2V5XCI+PC9idXR0b24+XG4gKiBgYGBcbiAqXG4gKiBPdGhlciBrZXlib2FyZCBmb2N1cyBkaXJlY3RpdmVzIGNhbiByZWFkIHRoZSBrZXkgdG8gdW5kZXJzdGFuZCB3aGV0aGVyIHRoZSBlbGVtZW50XG4gKiBzaG91bGQgcmV0cmlldmUgZm9jdXMuXG4gKlxuICovXG5ARGlyZWN0aXZlKCkgLy8gc2VsZWN0b3I6ICdbY3hQZXJzaXN0Rm9jdXNdJyxcbmV4cG9ydCBjbGFzcyBQZXJzaXN0Rm9jdXNEaXJlY3RpdmUgZXh0ZW5kcyBCbG9ja0ZvY3VzRGlyZWN0aXZlXG4gIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgcHJvdGVjdGVkIGRlZmF1bHRDb25maWc6IFBlcnNpc3RGb2N1c0NvbmZpZyA9IHt9O1xuXG4gIC8qKlxuICAgKiBUaGUgcGVyc2lzdGVuY2Uga2V5IGNhbiBiZSBwYXNzZWQgZGlyZWN0bHkgb3IgdGhyb3VnaCB0aGUgYEZvY3VzQ29uZmlnLmtleWAuXG4gICAqIFdoaWxlIHRoaXMgY291bGQgYmUgY29uc2lkZXJlZCBhIGdsb2JhbCBrZXksIHRoZSBsaWtlbGluZXNzIG9mIGNvbmZsaWN0c1xuICAgKiBpcyB2ZXJ5IHNtYWxsIHNpbmNlIHRoZSBrZXkgaXMgY2xlYXJlZCB3aGVuIHRoZSBmb2N1cyBpcyBjaGFuZ2VkLlxuICAgKi9cbiAgLy8gQElucHV0KCdjeFBlcnNpc3RGb2N1cycpXG4gIHByb3RlY3RlZCBjb25maWc6IFBlcnNpc3RGb2N1c0NvbmZpZyA9IHt9O1xuXG4gIC8qKlxuICAgKiBUaGUgcGVyc2lzdGFuY2Uga2V5IGlzIG1haW50YWluZWQgaW4gYW4gZWxlbWVudCBhdHRyaWJ1dGUgZm9yIG90aGVyXG4gICAqIGltcGxlbWVudGF0aW9ucy4gVGhpcyBpcyBuZWVkZWQgdG8gZW5zdXJlIHRoYXQgd2UgY2FuIHJlc29sdmUgdGhlIGZvY3VzXG4gICAqIHN0YXRlIGluIGNhc2Ugb2YgYSByZXBhaW50LlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKGBhdHRyLiR7Rk9DVVNfQVRUUn1gKSBhdHRyOiBzdHJpbmc7XG5cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnLCBbJyRldmVudCddKVxuICBoYW5kbGVGb2N1cyhldmVudD86IEtleWJvYXJkRXZlbnQpIHtcbiAgICB0aGlzLnNlcnZpY2Uuc2V0KHRoaXMua2V5LCB0aGlzLmdyb3VwKTtcblxuICAgIGV2ZW50Py5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50Py5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByb3RlY3RlZCBzZXJ2aWNlOiBQZXJzaXN0Rm9jdXNTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIHNlcnZpY2UpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgICB0aGlzLmF0dHIgPSB0aGlzLmtleSA/IHRoaXMua2V5IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldERlZmF1bHRDb25maWd1cmF0aW9uKCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5jb25maWcgPT09ICdzdHJpbmcnICYmIHRoaXMuY29uZmlnICE9PSAnJykge1xuICAgICAgdGhpcy5jb25maWcgPSB7IGtleTogdGhpcy5jb25maWcgfTtcbiAgICB9XG4gICAgc3VwZXIuc2V0RGVmYXVsdENvbmZpZ3VyYXRpb24oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb2N1cyB0aGUgZWxlbWVudCBleHBsaWNpdGx5IGlmIGl0IHdhcyBmb2N1c2VkIGJlZm9yZS5cbiAgICovXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5pc1BlcnNpc3RlZCkge1xuICAgICAgdGhpcy5ob3N0LmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IGlzUGVyc2lzdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMua2V5ICYmIHRoaXMuc2VydmljZS5nZXQodGhpcy5ncm91cCkgPT09IHRoaXMua2V5O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGtleSBmb3IgdGhlIGhvc3QgZWxlbWVudCwgd2hpY2ggaXMgdXNlZCB0byBwZXJzaXN0IHRoZVxuICAgKiBmb2N1cyBzdGF0ZS4gVGhpcyBpcyB1c2VmdWwgaW4gY2FzZXMgd2hlcmUgdGhlIERPTSBpcyByZWJ1aWxkLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBrZXkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKHRoaXMuY29uZmlnIGFzIFBlcnNpc3RGb2N1c0NvbmZpZyk/LmtleTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIHRoZSBwZXJzaXN0ZW5jZSBncm91cCAoaWYgYW55KSBmb3IgdGhlIGZvY3VzYWJsZSBlbGVtZW50cy5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgZ3JvdXAoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmdldFBlcnNpc3RlbmNlR3JvdXAoXG4gICAgICB0aGlzLmhvc3QsXG4gICAgICB0aGlzLmNvbmZpZyBhcyBQZXJzaXN0Rm9jdXNDb25maWdcbiAgICApO1xuICB9XG59XG4iXX0=