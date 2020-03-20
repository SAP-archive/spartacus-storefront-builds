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
    HostBinding(`attr.${FOCUS_ATTR}`)
], PersistFocusDirective.prototype, "attr", void 0);
__decorate([
    HostListener('focus', ['$event'])
], PersistFocusDirective.prototype, "handleFocus", null);
PersistFocusDirective = __decorate([
    Directive() // selector: '[cxPersistFocus]',
], PersistFocusDirective);
export { PersistFocusDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdC1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9wZXJzaXN0L3BlcnNpc3QtZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsYUFBYSxFQUNiLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLFlBQVksRUFDWixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFFLFVBQVUsRUFBc0IsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUU5RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlCRztBQUVILElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXNCLFNBQVEsbUJBQW1CO0lBZ0M1RCxZQUNZLFVBQXNCLEVBQ3RCLE9BQTRCO1FBRXRDLEtBQUssQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFIakIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixZQUFPLEdBQVAsT0FBTyxDQUFxQjtRQWhDOUIsa0JBQWEsR0FBdUIsRUFBRSxDQUFDO1FBRWpEOzs7O1dBSUc7UUFDSCwyQkFBMkI7UUFDakIsV0FBTSxHQUF1QixFQUFFLENBQUM7SUEyQjFDLENBQUM7SUFsQkQ7OztPQUdHO0lBR0gsV0FBVyxDQUFDLEtBQXFCOztRQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV2QyxNQUFBLEtBQUssMENBQUUsY0FBYyxHQUFHO1FBQ3hCLE1BQUEsS0FBSywwQ0FBRSxlQUFlLEdBQUc7SUFDM0IsQ0FBQztJQVNELFFBQVE7UUFDTixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDOUMsQ0FBQztJQUVTLHVCQUF1QjtRQUMvQixJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxFQUFFLEVBQUU7WUFDekQsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDcEM7UUFDRCxLQUFLLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7U0FDMUM7SUFDSCxDQUFDO0lBRUQsSUFBYyxXQUFXO1FBQ3ZCLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDakUsQ0FBQztJQUVEOzs7T0FHRztJQUNILElBQWMsR0FBRzs7UUFDZixhQUFRLElBQUksQ0FBQyxNQUE2QiwwQ0FBRSxHQUFHLENBQUM7SUFDbEQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBYyxLQUFLO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FDckMsSUFBSSxDQUFDLElBQUksRUFDVCxJQUFJLENBQUMsTUFBNEIsQ0FDbEMsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBOztZQWhEeUIsVUFBVTtZQUNiLG1CQUFtQjs7QUFqQkw7SUFBbEMsV0FBVyxDQUFDLFFBQVEsVUFBVSxFQUFFLENBQUM7bURBQWM7QUFRaEQ7SUFEQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7d0RBTWpDO0FBOUJVLHFCQUFxQjtJQURqQyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0M7R0FDaEMscUJBQXFCLENBaUZqQztTQWpGWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCbG9ja0ZvY3VzRGlyZWN0aXZlIH0gZnJvbSAnLi4vYmxvY2svYmxvY2stZm9jdXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IEZPQ1VTX0FUVFIsIFBlcnNpc3RGb2N1c0NvbmZpZyB9IGZyb20gJy4uL2tleWJvYXJkLWZvY3VzLm1vZGVsJztcbmltcG9ydCB7IFBlcnNpc3RGb2N1c1NlcnZpY2UgfSBmcm9tICcuL3BlcnNpc3QtZm9jdXMuc2VydmljZSc7XG5cbi8qKlxuICogRGlyZWN0aXZlIHRoYXQgcHJvdmlkZXMgcGVyc2lzdGVuY2Ugb2YgdGhlIGZvY3VzZWQgc3RhdGUuIFRoaXMgaXMgdXNlZnVsXG4gKiB3aGVuIGEgZ3JvdXAgb2YgZm9jdXNhYmxlIGVsZW1lbnRzIGdvdCByZWZvY3VzZWQgb3IgZXZlbiByZWNyZWF0ZWQuIFRoYXRcbiAqIGhhcHBlbnMgb2Z0ZW4gd2hlbiB0aGUgRE9NIGlzIGNvbnN0cnVjdGVkIHdpdGggYW4gYCpuZ0lmYCBvciBgKm5nRm9yYC5cbiAqXG4gKiBUaGUgZm9jdXMgc3RhdGUgaXMgYmFzZWQgb24gYSBjb25maWd1cmVkIF9rZXlfLCB3aGljaCBjYW4gYmUgcGFzc2VkIGluIHRoZVxuICogY29uZmlnIGlucHV0LCBlaXRoZXIgYnkgdXNpbmcgYSBzdHJpbmcgcHJpbWl0aXZlIG9yIGBQZXJzaXN0Rm9jdXNDb25maWcua2V5YDpcbiAqXG4gKiBgYGBodG1sXG4gKiA8YnV0dG9uIGN4UGVyc2lzdEZvY3VzPVwibXlLZXlcIj48L2J1dHRvbj5cbiAqIDxidXR0b24gY3hGb2N1cz1cIm15S2V5XCI+PC9idXR0b24+XG4gKiA8YnV0dG9uIFtjeEZvY3VzXT1cInt7a2V5OidteUtleSd9XCI+PC9idXR0b24+XG4gKiBgYGBcbiAqXG4gKiBUaGUgZm9jdXMgc3RhdGUgY2FuIGJlIHBhcnQgb2YgYSBmb2N1cyBfZ3JvdXBfLCBzbyB0aGF0IHRoZSBzdGF0ZSBpcyBzaGFyZWRcbiAqIGFuZCByZW1lbWJlciBmb3IgdGhlIGdpdmVuIGdyb3VwLiBJbiBvcmRlciB0byBkZXRlY3QgdGhlIHBlcnNpc3RlbmNlIGZvciBhXG4gKiBnaXZlbiBlbGVtZW50LCB3ZSBzdG9yZSB0aGUgcGVyc2lzdGVuY2Uga2V5IGFzIGEgZGF0YSBhdHRyaWJ1dGUgKGBkYXRhLWN4LWZvY3VzYCk6XG4gKlxuICogYGBgaHRtbFxuICogPGJ1dHRvbiBkYXRhLWN4LWZvY3VzPVwibXlLZXlcIj48L2J1dHRvbj5cbiAqIGBgYFxuICpcbiAqIE90aGVyIGtleWJvYXJkIGZvY3VzIGRpcmVjdGl2ZXMgY2FuIHJlYWQgdGhlIGtleSB0byB1bmRlcnN0YW5kIHdoZXRoZXIgdGhlIGVsZW1lbnRcbiAqIHNob3VsZCByZXRyaWV2ZSBmb2N1cy5cbiAqXG4gKi9cbkBEaXJlY3RpdmUoKSAvLyBzZWxlY3RvcjogJ1tjeFBlcnNpc3RGb2N1c10nLFxuZXhwb3J0IGNsYXNzIFBlcnNpc3RGb2N1c0RpcmVjdGl2ZSBleHRlbmRzIEJsb2NrRm9jdXNEaXJlY3RpdmVcbiAgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBwcm90ZWN0ZWQgZGVmYXVsdENvbmZpZzogUGVyc2lzdEZvY3VzQ29uZmlnID0ge307XG5cbiAgLyoqXG4gICAqIFRoZSBwZXJzaXN0ZW5jZSBrZXkgY2FuIGJlIHBhc3NlZCBkaXJlY3RseSBvciB0aHJvdWdoIHRoZSBgRm9jdXNDb25maWcua2V5YC5cbiAgICogV2hpbGUgdGhpcyBjb3VsZCBiZSBjb25zaWRlcmVkIGEgZ2xvYmFsIGtleSwgdGhlIGxpa2VsaW5lc3Mgb2YgY29uZmxpY3RzXG4gICAqIGlzIHZlcnkgc21hbGwgc2luY2UgdGhlIGtleSBpcyBjbGVhcmVkIHdoZW4gdGhlIGZvY3VzIGlzIGNoYW5nZWQuXG4gICAqL1xuICAvLyBASW5wdXQoJ2N4UGVyc2lzdEZvY3VzJylcbiAgcHJvdGVjdGVkIGNvbmZpZzogUGVyc2lzdEZvY3VzQ29uZmlnID0ge307XG5cbiAgLyoqXG4gICAqIFRoZSBwZXJzaXN0YW5jZSBrZXkgaXMgbWFpbnRhaW5lZCBpbiBhbiBlbGVtZW50IGF0dHJpYnV0ZSBmb3Igb3RoZXJcbiAgICogaW1wbGVtZW50YXRpb25zLiBUaGlzIGlzIG5lZWRlZCB0byBlbnN1cmUgdGhhdCB3ZSBjYW4gcmVzb2x2ZSB0aGUgZm9jdXNcbiAgICogc3RhdGUgaW4gY2FzZSBvZiBhIHJlcGFpbnQuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoYGF0dHIuJHtGT0NVU19BVFRSfWApIGF0dHI6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHBlcnNpc3RlbmNlIGtleSBpcyBtYWludGFpbmVkIGluIGEgc2luZ2xldG9uIGNyb3NzIHRoZSBhcHAgdG8gZW5zdXJlIHdlXG4gICAqIGNhbiByZXNldCB0aGUgZm9jdXMgaWYgdGhlIERPTSBnZXRzIHJlYnVpbGQuXG4gICAqL1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJywgWyckZXZlbnQnXSlcbiAgaGFuZGxlRm9jdXMoZXZlbnQ/OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgdGhpcy5zZXJ2aWNlLnNldCh0aGlzLmtleSwgdGhpcy5ncm91cCk7XG5cbiAgICBldmVudD8ucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudD8uc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcm90ZWN0ZWQgc2VydmljZTogUGVyc2lzdEZvY3VzU2VydmljZVxuICApIHtcbiAgICBzdXBlcihlbGVtZW50UmVmLCBzZXJ2aWNlKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gICAgdGhpcy5hdHRyID0gdGhpcy5rZXkgPyB0aGlzLmtleSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXREZWZhdWx0Q29uZmlndXJhdGlvbigpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuY29uZmlnID09PSAnc3RyaW5nJyAmJiB0aGlzLmNvbmZpZyAhPT0gJycpIHtcbiAgICAgIHRoaXMuY29uZmlnID0geyBrZXk6IHRoaXMuY29uZmlnIH07XG4gICAgfVxuICAgIHN1cGVyLnNldERlZmF1bHRDb25maWd1cmF0aW9uKCk7XG4gIH1cblxuICAvKipcbiAgICogRm9jdXMgdGhlIGVsZW1lbnQgZXhwbGljaXRseSBpZiBpdCB3YXMgZm9jdXNlZCBiZWZvcmUuXG4gICAqL1xuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMuaXNQZXJzaXN0ZWQpIHtcbiAgICAgIHRoaXMuaG9zdC5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBpc1BlcnNpc3RlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLmtleSAmJiB0aGlzLnNlcnZpY2UuZ2V0KHRoaXMuZ3JvdXApID09PSB0aGlzLmtleTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBrZXkgZm9yIHRoZSBob3N0IGVsZW1lbnQsIHdoaWNoIGlzIHVzZWQgdG8gcGVyc2lzdCB0aGVcbiAgICogZm9jdXMgc3RhdGUuIFRoaXMgaXMgdXNlZnVsIGluIGNhc2VzIHdoZXJlIHRoZSBET00gaXMgcmVidWlsZC5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQga2V5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICh0aGlzLmNvbmZpZyBhcyBQZXJzaXN0Rm9jdXNDb25maWcpPy5rZXk7XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyB0aGUgcGVyc2lzdGVuY2UgZ3JvdXAgKGlmIGFueSkgZm9yIHRoZSBmb2N1c2FibGUgZWxlbWVudHMuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGdyb3VwKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc2VydmljZS5nZXRQZXJzaXN0ZW5jZUdyb3VwKFxuICAgICAgdGhpcy5ob3N0LFxuICAgICAgdGhpcy5jb25maWcgYXMgUGVyc2lzdEZvY3VzQ29uZmlnXG4gICAgKTtcbiAgfVxufVxuIl19