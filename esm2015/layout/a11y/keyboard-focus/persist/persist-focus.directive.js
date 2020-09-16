import { Directive, ElementRef, HostBinding, HostListener, } from '@angular/core';
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
export class PersistFocusDirective extends BlockFocusDirective {
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
        this.service.set(this.key, this.group);
        event === null || event === void 0 ? void 0 : event.preventDefault();
        event === null || event === void 0 ? void 0 : event.stopPropagation();
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
}
PersistFocusDirective.decorators = [
    { type: Directive }
];
PersistFocusDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: PersistFocusService }
];
PersistFocusDirective.propDecorators = {
    attr: [{ type: HostBinding, args: [`attr.${FOCUS_ATTR}`,] }],
    handleFocus: [{ type: HostListener, args: ['focus', ['$event'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdC1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9sYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9wZXJzaXN0L3BlcnNpc3QtZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxZQUFZLEdBRWIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFFLFVBQVUsRUFBc0IsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUU5RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlCRztBQUVILE1BQU0sT0FBTyxxQkFDWCxTQUFRLG1CQUFtQjtJQTJCM0IsWUFDWSxVQUFzQixFQUN0QixPQUE0QjtRQUV0QyxLQUFLLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBSGpCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsWUFBTyxHQUFQLE9BQU8sQ0FBcUI7UUEzQjlCLGtCQUFhLEdBQXVCLEVBQUUsQ0FBQztRQUVqRDs7OztXQUlHO1FBQ0gsMkJBQTJCO1FBQ2pCLFdBQU0sR0FBdUIsRUFBRSxDQUFDO0lBc0IxQyxDQUFDO0lBWkQsV0FBVyxDQUFDLEtBQXFCO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXZDLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxjQUFjLEdBQUc7UUFDeEIsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLGVBQWUsR0FBRztJQUMzQixDQUFDO0lBU0QsUUFBUTtRQUNOLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM5QyxDQUFDO0lBRVMsdUJBQXVCO1FBQy9CLElBQUksT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLEVBQUUsRUFBRTtZQUN6RCxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNwQztRQUNELEtBQUssQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILGVBQWU7UUFDYixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUMxQztJQUNILENBQUM7SUFFRCxJQUFjLFdBQVc7UUFDdkIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNqRSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsSUFBYyxHQUFHOztRQUNmLGFBQVEsSUFBSSxDQUFDLE1BQTZCLDBDQUFFLEdBQUcsQ0FBQztJQUNsRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFjLEtBQUs7UUFDakIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUNyQyxJQUFJLENBQUMsSUFBSSxFQUNULElBQUksQ0FBQyxNQUE0QixDQUNsQyxDQUFDO0lBQ0osQ0FBQzs7O1lBN0VGLFNBQVM7OztZQW5DUixVQUFVO1lBT0gsbUJBQW1COzs7bUJBK0N6QixXQUFXLFNBQUMsUUFBUSxVQUFVLEVBQUU7MEJBRWhDLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCbG9ja0ZvY3VzRGlyZWN0aXZlIH0gZnJvbSAnLi4vYmxvY2svYmxvY2stZm9jdXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IEZPQ1VTX0FUVFIsIFBlcnNpc3RGb2N1c0NvbmZpZyB9IGZyb20gJy4uL2tleWJvYXJkLWZvY3VzLm1vZGVsJztcbmltcG9ydCB7IFBlcnNpc3RGb2N1c1NlcnZpY2UgfSBmcm9tICcuL3BlcnNpc3QtZm9jdXMuc2VydmljZSc7XG5cbi8qKlxuICogRGlyZWN0aXZlIHRoYXQgcHJvdmlkZXMgcGVyc2lzdGVuY2Ugb2YgdGhlIGZvY3VzZWQgc3RhdGUuIFRoaXMgaXMgdXNlZnVsXG4gKiB3aGVuIGEgZ3JvdXAgb2YgZm9jdXNhYmxlIGVsZW1lbnRzIGdvdCByZWZvY3VzZWQgb3IgZXZlbiByZWNyZWF0ZWQuIFRoYXRcbiAqIGhhcHBlbnMgb2Z0ZW4gd2hlbiB0aGUgRE9NIGlzIGNvbnN0cnVjdGVkIHdpdGggYW4gYCpuZ0lmYCBvciBgKm5nRm9yYC5cbiAqXG4gKiBUaGUgZm9jdXMgc3RhdGUgaXMgYmFzZWQgb24gYSBjb25maWd1cmVkIF9rZXlfLCB3aGljaCBjYW4gYmUgcGFzc2VkIGluIHRoZVxuICogY29uZmlnIGlucHV0LCBlaXRoZXIgYnkgdXNpbmcgYSBzdHJpbmcgcHJpbWl0aXZlIG9yIGBQZXJzaXN0Rm9jdXNDb25maWcua2V5YDpcbiAqXG4gKiBgYGBodG1sXG4gKiA8YnV0dG9uIGN4UGVyc2lzdEZvY3VzPVwibXlLZXlcIj48L2J1dHRvbj5cbiAqIDxidXR0b24gY3hGb2N1cz1cIm15S2V5XCI+PC9idXR0b24+XG4gKiA8YnV0dG9uIFtjeEZvY3VzXT1cInt7a2V5OidteUtleSd9XCI+PC9idXR0b24+XG4gKiBgYGBcbiAqXG4gKiBUaGUgZm9jdXMgc3RhdGUgY2FuIGJlIHBhcnQgb2YgYSBmb2N1cyBfZ3JvdXBfLCBzbyB0aGF0IHRoZSBzdGF0ZSBpcyBzaGFyZWRcbiAqIGFuZCByZW1lbWJlciBmb3IgdGhlIGdpdmVuIGdyb3VwLiBJbiBvcmRlciB0byBkZXRlY3QgdGhlIHBlcnNpc3RlbmNlIGZvciBhXG4gKiBnaXZlbiBlbGVtZW50LCB3ZSBzdG9yZSB0aGUgcGVyc2lzdGVuY2Uga2V5IGFzIGEgZGF0YSBhdHRyaWJ1dGUgKGBkYXRhLWN4LWZvY3VzYCk6XG4gKlxuICogYGBgaHRtbFxuICogPGJ1dHRvbiBkYXRhLWN4LWZvY3VzPVwibXlLZXlcIj48L2J1dHRvbj5cbiAqIGBgYFxuICpcbiAqIE90aGVyIGtleWJvYXJkIGZvY3VzIGRpcmVjdGl2ZXMgY2FuIHJlYWQgdGhlIGtleSB0byB1bmRlcnN0YW5kIHdoZXRoZXIgdGhlIGVsZW1lbnRcbiAqIHNob3VsZCByZXRyaWV2ZSBmb2N1cy5cbiAqXG4gKi9cbkBEaXJlY3RpdmUoKSAvLyBzZWxlY3RvcjogJ1tjeFBlcnNpc3RGb2N1c10nLFxuZXhwb3J0IGNsYXNzIFBlcnNpc3RGb2N1c0RpcmVjdGl2ZVxuICBleHRlbmRzIEJsb2NrRm9jdXNEaXJlY3RpdmVcbiAgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBwcm90ZWN0ZWQgZGVmYXVsdENvbmZpZzogUGVyc2lzdEZvY3VzQ29uZmlnID0ge307XG5cbiAgLyoqXG4gICAqIFRoZSBwZXJzaXN0ZW5jZSBrZXkgY2FuIGJlIHBhc3NlZCBkaXJlY3RseSBvciB0aHJvdWdoIHRoZSBgRm9jdXNDb25maWcua2V5YC5cbiAgICogV2hpbGUgdGhpcyBjb3VsZCBiZSBjb25zaWRlcmVkIGEgZ2xvYmFsIGtleSwgdGhlIGxpa2VsaW5lc3Mgb2YgY29uZmxpY3RzXG4gICAqIGlzIHZlcnkgc21hbGwgc2luY2UgdGhlIGtleSBpcyBjbGVhcmVkIHdoZW4gdGhlIGZvY3VzIGlzIGNoYW5nZWQuXG4gICAqL1xuICAvLyBASW5wdXQoJ2N4UGVyc2lzdEZvY3VzJylcbiAgcHJvdGVjdGVkIGNvbmZpZzogUGVyc2lzdEZvY3VzQ29uZmlnID0ge307XG5cbiAgLyoqXG4gICAqIFRoZSBwZXJzaXN0ZW5jZSBrZXkgaXMgbWFpbnRhaW5lZCBpbiBhbiBlbGVtZW50IGF0dHJpYnV0ZSBmb3Igb3RoZXJcbiAgICogaW1wbGVtZW50YXRpb25zLiBUaGlzIGlzIG5lZWRlZCB0byBlbnN1cmUgdGhhdCB3ZSBjYW4gcmVzb2x2ZSB0aGUgZm9jdXNcbiAgICogc3RhdGUgaW4gY2FzZSBvZiBhIHJlcGFpbnQuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoYGF0dHIuJHtGT0NVU19BVFRSfWApIGF0dHI6IHN0cmluZztcblxuICBASG9zdExpc3RlbmVyKCdmb2N1cycsIFsnJGV2ZW50J10pXG4gIGhhbmRsZUZvY3VzKGV2ZW50PzogS2V5Ym9hcmRFdmVudCkge1xuICAgIHRoaXMuc2VydmljZS5zZXQodGhpcy5rZXksIHRoaXMuZ3JvdXApO1xuXG4gICAgZXZlbnQ/LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQ/LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJvdGVjdGVkIHNlcnZpY2U6IFBlcnNpc3RGb2N1c1NlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZiwgc2VydmljZSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICAgIHRoaXMuYXR0ciA9IHRoaXMua2V5ID8gdGhpcy5rZXkgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2V0RGVmYXVsdENvbmZpZ3VyYXRpb24oKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmNvbmZpZyA9PT0gJ3N0cmluZycgJiYgdGhpcy5jb25maWcgIT09ICcnKSB7XG4gICAgICB0aGlzLmNvbmZpZyA9IHsga2V5OiB0aGlzLmNvbmZpZyB9O1xuICAgIH1cbiAgICBzdXBlci5zZXREZWZhdWx0Q29uZmlndXJhdGlvbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvY3VzIHRoZSBlbGVtZW50IGV4cGxpY2l0bHkgaWYgaXQgd2FzIGZvY3VzZWQgYmVmb3JlLlxuICAgKi9cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLmlzUGVyc2lzdGVkKSB7XG4gICAgICB0aGlzLmhvc3QuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgaXNQZXJzaXN0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5rZXkgJiYgdGhpcy5zZXJ2aWNlLmdldCh0aGlzLmdyb3VwKSA9PT0gdGhpcy5rZXk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUga2V5IGZvciB0aGUgaG9zdCBlbGVtZW50LCB3aGljaCBpcyB1c2VkIHRvIHBlcnNpc3QgdGhlXG4gICAqIGZvY3VzIHN0YXRlLiBUaGlzIGlzIHVzZWZ1bCBpbiBjYXNlcyB3aGVyZSB0aGUgRE9NIGlzIHJlYnVpbGQuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGtleSgpOiBzdHJpbmcge1xuICAgIHJldHVybiAodGhpcy5jb25maWcgYXMgUGVyc2lzdEZvY3VzQ29uZmlnKT8ua2V5O1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgdGhlIHBlcnNpc3RlbmNlIGdyb3VwIChpZiBhbnkpIGZvciB0aGUgZm9jdXNhYmxlIGVsZW1lbnRzLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBncm91cCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnNlcnZpY2UuZ2V0UGVyc2lzdGVuY2VHcm91cChcbiAgICAgIHRoaXMuaG9zdCxcbiAgICAgIHRoaXMuY29uZmlnIGFzIFBlcnNpc3RGb2N1c0NvbmZpZ1xuICAgICk7XG4gIH1cbn1cbiJdfQ==