import { __decorate } from "tslib";
import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener, Input, OnInit, } from '@angular/core';
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
        this.config = {};
    }
    /**
     * The persistence key is maintained in a singleton cross the app to ensure we
     * can reset the focus if the DOM gets rebuild.
     */
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
    Input('cxPersistFocus')
], PersistFocusDirective.prototype, "config", void 0);
__decorate([
    HostBinding(`attr.${FOCUS_ATTR}`)
], PersistFocusDirective.prototype, "attr", void 0);
__decorate([
    HostListener('focus', ['$event'])
], PersistFocusDirective.prototype, "handleFocus", null);
PersistFocusDirective = __decorate([
    Directive({
        selector: '[cxPersistFocus]',
    })
], PersistFocusDirective);
export { PersistFocusDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdC1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9wZXJzaXN0L3BlcnNpc3QtZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsYUFBYSxFQUNiLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxVQUFVLEVBQXNCLE1BQU0seUJBQXlCLENBQUM7QUFDekUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFOUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5Qkc7QUFJSCxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFzQixTQUFRLG1CQUFtQjtJQStCNUQsWUFDWSxVQUFzQixFQUN0QixPQUE0QjtRQUV0QyxLQUFLLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBSGpCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsWUFBTyxHQUFQLE9BQU8sQ0FBcUI7UUEvQjlCLGtCQUFhLEdBQXVCLEVBQUUsQ0FBQztRQUVqRDs7OztXQUlHO1FBQ2dDLFdBQU0sR0FBdUIsRUFBRSxDQUFDO0lBMkJuRSxDQUFDO0lBbEJEOzs7T0FHRztJQUdILFdBQVcsQ0FBQyxLQUFxQjs7UUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFdkMsTUFBQSxLQUFLLDBDQUFFLGNBQWMsR0FBRztRQUN4QixNQUFBLEtBQUssMENBQUUsZUFBZSxHQUFHO0lBQzNCLENBQUM7SUFTRCxRQUFRO1FBQ04sS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzlDLENBQUM7SUFFUyx1QkFBdUI7UUFDL0IsSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssRUFBRSxFQUFFO1lBQ3pELElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3BDO1FBQ0QsS0FBSyxDQUFDLHVCQUF1QixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQzFDO0lBQ0gsQ0FBQztJQUVELElBQWMsV0FBVztRQUN2QixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2pFLENBQUM7SUFFRDs7O09BR0c7SUFDSCxJQUFjLEdBQUc7O1FBQ2YsYUFBUSxJQUFJLENBQUMsTUFBNkIsMENBQUUsR0FBRyxDQUFDO0lBQ2xELENBQUM7SUFFRDs7T0FFRztJQUNILElBQWMsS0FBSztRQUNqQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQ3JDLElBQUksQ0FBQyxJQUFJLEVBQ1QsSUFBSSxDQUFDLE1BQTRCLENBQ2xDLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTs7WUFoRHlCLFVBQVU7WUFDYixtQkFBbUI7O0FBeEJmO0lBQXhCLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztxREFBMkM7QUFPaEM7SUFBbEMsV0FBVyxDQUFDLFFBQVEsVUFBVSxFQUFFLENBQUM7bURBQWM7QUFRaEQ7SUFEQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7d0RBTWpDO0FBN0JVLHFCQUFxQjtJQUhqQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsa0JBQWtCO0tBQzdCLENBQUM7R0FDVyxxQkFBcUIsQ0FnRmpDO1NBaEZZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCbG9ja0ZvY3VzRGlyZWN0aXZlIH0gZnJvbSAnLi4vYmxvY2svYmxvY2stZm9jdXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IEZPQ1VTX0FUVFIsIFBlcnNpc3RGb2N1c0NvbmZpZyB9IGZyb20gJy4uL2tleWJvYXJkLWZvY3VzLm1vZGVsJztcbmltcG9ydCB7IFBlcnNpc3RGb2N1c1NlcnZpY2UgfSBmcm9tICcuL3BlcnNpc3QtZm9jdXMuc2VydmljZSc7XG5cbi8qKlxuICogRGlyZWN0aXZlIHRoYXQgcHJvdmlkZXMgcGVyc2lzdGVuY2Ugb2YgdGhlIGZvY3VzZWQgc3RhdGUuIFRoaXMgaXMgdXNlZnVsXG4gKiB3aGVuIGEgZ3JvdXAgb2YgZm9jdXNhYmxlIGVsZW1lbnRzIGdvdCByZWZvY3VzZWQgb3IgZXZlbiByZWNyZWF0ZWQuIFRoYXRcbiAqIGhhcHBlbnMgb2Z0ZW4gd2hlbiB0aGUgRE9NIGlzIGNvbnN0cnVjdGVkIHdpdGggYW4gYCpuZ0lmYCBvciBgKm5nRm9yYC5cbiAqXG4gKiBUaGUgZm9jdXMgc3RhdGUgaXMgYmFzZWQgb24gYSBjb25maWd1cmVkIF9rZXlfLCB3aGljaCBjYW4gYmUgcGFzc2VkIGluIHRoZVxuICogY29uZmlnIGlucHV0LCBlaXRoZXIgYnkgdXNpbmcgYSBzdHJpbmcgcHJpbWl0aXZlIG9yIGBQZXJzaXN0Rm9jdXNDb25maWcua2V5YDpcbiAqXG4gKiBgYGBodG1sXG4gKiA8YnV0dG9uIGN4UGVyc2lzdEZvY3VzPVwibXlLZXlcIj48L2J1dHRvbj5cbiAqIDxidXR0b24gY3hGb2N1cz1cIm15S2V5XCI+PC9idXR0b24+XG4gKiA8YnV0dG9uIFtjeEZvY3VzXT1cInt7a2V5OidteUtleSd9XCI+PC9idXR0b24+XG4gKiBgYGBcbiAqXG4gKiBUaGUgZm9jdXMgc3RhdGUgY2FuIGJlIHBhcnQgb2YgYSBmb2N1cyBfZ3JvdXBfLCBzbyB0aGF0IHRoZSBzdGF0ZSBpcyBzaGFyZWRcbiAqIGFuZCByZW1lbWJlciBmb3IgdGhlIGdpdmVuIGdyb3VwLiBJbiBvcmRlciB0byBkZXRlY3QgdGhlIHBlcnNpc3RlbmNlIGZvciBhXG4gKiBnaXZlbiBlbGVtZW50LCB3ZSBzdG9yZSB0aGUgcGVyc2lzdGVuY2Uga2V5IGFzIGEgZGF0YSBhdHRyaWJ1dGUgKGBkYXRhLWN4LWZvY3VzYCk6XG4gKlxuICogYGBgaHRtbFxuICogPGJ1dHRvbiBkYXRhLWN4LWZvY3VzPVwibXlLZXlcIj48L2J1dHRvbj5cbiAqIGBgYFxuICpcbiAqIE90aGVyIGtleWJvYXJkIGZvY3VzIGRpcmVjdGl2ZXMgY2FuIHJlYWQgdGhlIGtleSB0byB1bmRlcnN0YW5kIHdoZXRoZXIgdGhlIGVsZW1lbnRcbiAqIHNob3VsZCByZXRyaWV2ZSBmb2N1cy5cbiAqXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjeFBlcnNpc3RGb2N1c10nLFxufSlcbmV4cG9ydCBjbGFzcyBQZXJzaXN0Rm9jdXNEaXJlY3RpdmUgZXh0ZW5kcyBCbG9ja0ZvY3VzRGlyZWN0aXZlXG4gIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgcHJvdGVjdGVkIGRlZmF1bHRDb25maWc6IFBlcnNpc3RGb2N1c0NvbmZpZyA9IHt9O1xuXG4gIC8qKlxuICAgKiBUaGUgcGVyc2lzdGVuY2Uga2V5IGNhbiBiZSBwYXNzZWQgZGlyZWN0bHkgb3IgdGhyb3VnaCB0aGUgYEZvY3VzQ29uZmlnLmtleWAuXG4gICAqIFdoaWxlIHRoaXMgY291bGQgYmUgY29uc2lkZXJlZCBhIGdsb2JhbCBrZXksIHRoZSBsaWtlbGluZXNzIG9mIGNvbmZsaWN0c1xuICAgKiBpcyB2ZXJ5IHNtYWxsIHNpbmNlIHRoZSBrZXkgaXMgY2xlYXJlZCB3aGVuIHRoZSBmb2N1cyBpcyBjaGFuZ2VkLlxuICAgKi9cbiAgQElucHV0KCdjeFBlcnNpc3RGb2N1cycpIHByb3RlY3RlZCBjb25maWc6IFBlcnNpc3RGb2N1c0NvbmZpZyA9IHt9O1xuXG4gIC8qKlxuICAgKiBUaGUgcGVyc2lzdGFuY2Uga2V5IGlzIG1haW50YWluZWQgaW4gYW4gZWxlbWVudCBhdHRyaWJ1dGUgZm9yIG90aGVyXG4gICAqIGltcGxlbWVudGF0aW9ucy4gVGhpcyBpcyBuZWVkZWQgdG8gZW5zdXJlIHRoYXQgd2UgY2FuIHJlc29sdmUgdGhlIGZvY3VzXG4gICAqIHN0YXRlIGluIGNhc2Ugb2YgYSByZXBhaW50LlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKGBhdHRyLiR7Rk9DVVNfQVRUUn1gKSBhdHRyOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBwZXJzaXN0ZW5jZSBrZXkgaXMgbWFpbnRhaW5lZCBpbiBhIHNpbmdsZXRvbiBjcm9zcyB0aGUgYXBwIHRvIGVuc3VyZSB3ZVxuICAgKiBjYW4gcmVzZXQgdGhlIGZvY3VzIGlmIHRoZSBET00gZ2V0cyByZWJ1aWxkLlxuICAgKi9cblxuICBASG9zdExpc3RlbmVyKCdmb2N1cycsIFsnJGV2ZW50J10pXG4gIGhhbmRsZUZvY3VzKGV2ZW50PzogS2V5Ym9hcmRFdmVudCkge1xuICAgIHRoaXMuc2VydmljZS5zZXQodGhpcy5rZXksIHRoaXMuZ3JvdXApO1xuXG4gICAgZXZlbnQ/LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQ/LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJvdGVjdGVkIHNlcnZpY2U6IFBlcnNpc3RGb2N1c1NlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZiwgc2VydmljZSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICAgIHRoaXMuYXR0ciA9IHRoaXMua2V5ID8gdGhpcy5rZXkgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2V0RGVmYXVsdENvbmZpZ3VyYXRpb24oKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmNvbmZpZyA9PT0gJ3N0cmluZycgJiYgdGhpcy5jb25maWcgIT09ICcnKSB7XG4gICAgICB0aGlzLmNvbmZpZyA9IHsga2V5OiB0aGlzLmNvbmZpZyB9O1xuICAgIH1cbiAgICBzdXBlci5zZXREZWZhdWx0Q29uZmlndXJhdGlvbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvY3VzIHRoZSBlbGVtZW50IGV4cGxpY2l0bHkgaWYgaXQgd2FzIGZvY3VzZWQgYmVmb3JlLlxuICAgKi9cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLmlzUGVyc2lzdGVkKSB7XG4gICAgICB0aGlzLmhvc3QuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgaXNQZXJzaXN0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5rZXkgJiYgdGhpcy5zZXJ2aWNlLmdldCh0aGlzLmdyb3VwKSA9PT0gdGhpcy5rZXk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUga2V5IGZvciB0aGUgaG9zdCBlbGVtZW50LCB3aGljaCBpcyB1c2VkIHRvIHBlcnNpc3QgdGhlXG4gICAqIGZvY3VzIHN0YXRlLiBUaGlzIGlzIHVzZWZ1bCBpbiBjYXNlcyB3aGVyZSB0aGUgRE9NIGlzIHJlYnVpbGQuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGtleSgpOiBzdHJpbmcge1xuICAgIHJldHVybiAodGhpcy5jb25maWcgYXMgUGVyc2lzdEZvY3VzQ29uZmlnKT8ua2V5O1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgdGhlIHBlcnNpc3RlbmNlIGdyb3VwIChpZiBhbnkpIGZvciB0aGUgZm9jdXNhYmxlIGVsZW1lbnRzLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBncm91cCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnNlcnZpY2UuZ2V0UGVyc2lzdGVuY2VHcm91cChcbiAgICAgIHRoaXMuaG9zdCxcbiAgICAgIHRoaXMuY29uZmlnIGFzIFBlcnNpc3RGb2N1c0NvbmZpZ1xuICAgICk7XG4gIH1cbn1cbiJdfQ==