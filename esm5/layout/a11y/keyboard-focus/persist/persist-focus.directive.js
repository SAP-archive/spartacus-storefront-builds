import { __decorate, __extends } from "tslib";
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
var PersistFocusDirective = /** @class */ (function (_super) {
    __extends(PersistFocusDirective, _super);
    function PersistFocusDirective(elementRef, service) {
        var _this = _super.call(this, elementRef, service) || this;
        _this.elementRef = elementRef;
        _this.service = service;
        _this.defaultConfig = {};
        /**
         * The persistence key can be passed directly or through the `FocusConfig.key`.
         * While this could be considered a global key, the likeliness of conflicts
         * is very small since the key is cleared when the focus is changed.
         */
        // @Input('cxPersistFocus')
        _this.config = {};
        return _this;
    }
    /**
     * The persistence key is maintained in a singleton cross the app to ensure we
     * can reset the focus if the DOM gets rebuild.
     */
    PersistFocusDirective.prototype.handleFocus = function (event) {
        var _a, _b;
        this.service.set(this.key, this.group);
        (_a = event) === null || _a === void 0 ? void 0 : _a.preventDefault();
        (_b = event) === null || _b === void 0 ? void 0 : _b.stopPropagation();
    };
    PersistFocusDirective.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        this.attr = this.key ? this.key : undefined;
    };
    PersistFocusDirective.prototype.setDefaultConfiguration = function () {
        if (typeof this.config === 'string' && this.config !== '') {
            this.config = { key: this.config };
        }
        _super.prototype.setDefaultConfiguration.call(this);
    };
    /**
     * Focus the element explicitly if it was focused before.
     */
    PersistFocusDirective.prototype.ngAfterViewInit = function () {
        if (this.isPersisted) {
            this.host.focus({ preventScroll: true });
        }
    };
    Object.defineProperty(PersistFocusDirective.prototype, "isPersisted", {
        get: function () {
            return !!this.key && this.service.get(this.group) === this.key;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersistFocusDirective.prototype, "key", {
        /**
         * Returns the key for the host element, which is used to persist the
         * focus state. This is useful in cases where the DOM is rebuild.
         */
        get: function () {
            var _a;
            return (_a = this.config) === null || _a === void 0 ? void 0 : _a.key;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersistFocusDirective.prototype, "group", {
        /**
         * returns the persistence group (if any) for the focusable elements.
         */
        get: function () {
            return this.service.getPersistenceGroup(this.host, this.config);
        },
        enumerable: true,
        configurable: true
    });
    PersistFocusDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: PersistFocusService }
    ]; };
    __decorate([
        HostBinding("attr." + FOCUS_ATTR)
    ], PersistFocusDirective.prototype, "attr", void 0);
    __decorate([
        HostListener('focus', ['$event'])
    ], PersistFocusDirective.prototype, "handleFocus", null);
    PersistFocusDirective = __decorate([
        Directive() // selector: '[cxPersistFocus]',
    ], PersistFocusDirective);
    return PersistFocusDirective;
}(BlockFocusDirective));
export { PersistFocusDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdC1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9wZXJzaXN0L3BlcnNpc3QtZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsYUFBYSxFQUNiLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLFlBQVksRUFDWixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFFLFVBQVUsRUFBc0IsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUU5RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlCRztBQUVIO0lBQTJDLHlDQUFtQjtJQWdDNUQsK0JBQ1ksVUFBc0IsRUFDdEIsT0FBNEI7UUFGeEMsWUFJRSxrQkFBTSxVQUFVLEVBQUUsT0FBTyxDQUFDLFNBQzNCO1FBSlcsZ0JBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsYUFBTyxHQUFQLE9BQU8sQ0FBcUI7UUFoQzlCLG1CQUFhLEdBQXVCLEVBQUUsQ0FBQztRQUVqRDs7OztXQUlHO1FBQ0gsMkJBQTJCO1FBQ2pCLFlBQU0sR0FBdUIsRUFBRSxDQUFDOztJQTJCMUMsQ0FBQztJQWxCRDs7O09BR0c7SUFHSCwyQ0FBVyxHQUFYLFVBQVksS0FBcUI7O1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXZDLE1BQUEsS0FBSywwQ0FBRSxjQUFjLEdBQUc7UUFDeEIsTUFBQSxLQUFLLDBDQUFFLGVBQWUsR0FBRztJQUMzQixDQUFDO0lBU0Qsd0NBQVEsR0FBUjtRQUNFLGlCQUFNLFFBQVEsV0FBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzlDLENBQUM7SUFFUyx1REFBdUIsR0FBakM7UUFDRSxJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxFQUFFLEVBQUU7WUFDekQsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDcEM7UUFDRCxpQkFBTSx1QkFBdUIsV0FBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILCtDQUFlLEdBQWY7UUFDRSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUMxQztJQUNILENBQUM7SUFFRCxzQkFBYyw4Q0FBVzthQUF6QjtZQUNFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDakUsQ0FBQzs7O09BQUE7SUFNRCxzQkFBYyxzQ0FBRztRQUpqQjs7O1dBR0c7YUFDSDs7WUFDRSxhQUFRLElBQUksQ0FBQyxNQUE2QiwwQ0FBRSxHQUFHLENBQUM7UUFDbEQsQ0FBQzs7O09BQUE7SUFLRCxzQkFBYyx3Q0FBSztRQUhuQjs7V0FFRzthQUNIO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUNyQyxJQUFJLENBQUMsSUFBSSxFQUNULElBQUksQ0FBQyxNQUE0QixDQUNsQyxDQUFDO1FBQ0osQ0FBQzs7O09BQUE7O2dCQS9DdUIsVUFBVTtnQkFDYixtQkFBbUI7O0lBakJMO1FBQWxDLFdBQVcsQ0FBQyxVQUFRLFVBQVksQ0FBQzt1REFBYztJQVFoRDtRQURDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs0REFNakM7SUE5QlUscUJBQXFCO1FBRGpDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQztPQUNoQyxxQkFBcUIsQ0FpRmpDO0lBQUQsNEJBQUM7Q0FBQSxBQWpGRCxDQUEyQyxtQkFBbUIsR0FpRjdEO1NBakZZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJsb2NrRm9jdXNEaXJlY3RpdmUgfSBmcm9tICcuLi9ibG9jay9ibG9jay1mb2N1cy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRk9DVVNfQVRUUiwgUGVyc2lzdEZvY3VzQ29uZmlnIH0gZnJvbSAnLi4va2V5Ym9hcmQtZm9jdXMubW9kZWwnO1xuaW1wb3J0IHsgUGVyc2lzdEZvY3VzU2VydmljZSB9IGZyb20gJy4vcGVyc2lzdC1mb2N1cy5zZXJ2aWNlJztcblxuLyoqXG4gKiBEaXJlY3RpdmUgdGhhdCBwcm92aWRlcyBwZXJzaXN0ZW5jZSBvZiB0aGUgZm9jdXNlZCBzdGF0ZS4gVGhpcyBpcyB1c2VmdWxcbiAqIHdoZW4gYSBncm91cCBvZiBmb2N1c2FibGUgZWxlbWVudHMgZ290IHJlZm9jdXNlZCBvciBldmVuIHJlY3JlYXRlZC4gVGhhdFxuICogaGFwcGVucyBvZnRlbiB3aGVuIHRoZSBET00gaXMgY29uc3RydWN0ZWQgd2l0aCBhbiBgKm5nSWZgIG9yIGAqbmdGb3JgLlxuICpcbiAqIFRoZSBmb2N1cyBzdGF0ZSBpcyBiYXNlZCBvbiBhIGNvbmZpZ3VyZWQgX2tleV8sIHdoaWNoIGNhbiBiZSBwYXNzZWQgaW4gdGhlXG4gKiBjb25maWcgaW5wdXQsIGVpdGhlciBieSB1c2luZyBhIHN0cmluZyBwcmltaXRpdmUgb3IgYFBlcnNpc3RGb2N1c0NvbmZpZy5rZXlgOlxuICpcbiAqIGBgYGh0bWxcbiAqIDxidXR0b24gY3hQZXJzaXN0Rm9jdXM9XCJteUtleVwiPjwvYnV0dG9uPlxuICogPGJ1dHRvbiBjeEZvY3VzPVwibXlLZXlcIj48L2J1dHRvbj5cbiAqIDxidXR0b24gW2N4Rm9jdXNdPVwie3trZXk6J215S2V5J31cIj48L2J1dHRvbj5cbiAqIGBgYFxuICpcbiAqIFRoZSBmb2N1cyBzdGF0ZSBjYW4gYmUgcGFydCBvZiBhIGZvY3VzIF9ncm91cF8sIHNvIHRoYXQgdGhlIHN0YXRlIGlzIHNoYXJlZFxuICogYW5kIHJlbWVtYmVyIGZvciB0aGUgZ2l2ZW4gZ3JvdXAuIEluIG9yZGVyIHRvIGRldGVjdCB0aGUgcGVyc2lzdGVuY2UgZm9yIGFcbiAqIGdpdmVuIGVsZW1lbnQsIHdlIHN0b3JlIHRoZSBwZXJzaXN0ZW5jZSBrZXkgYXMgYSBkYXRhIGF0dHJpYnV0ZSAoYGRhdGEtY3gtZm9jdXNgKTpcbiAqXG4gKiBgYGBodG1sXG4gKiA8YnV0dG9uIGRhdGEtY3gtZm9jdXM9XCJteUtleVwiPjwvYnV0dG9uPlxuICogYGBgXG4gKlxuICogT3RoZXIga2V5Ym9hcmQgZm9jdXMgZGlyZWN0aXZlcyBjYW4gcmVhZCB0aGUga2V5IHRvIHVuZGVyc3RhbmQgd2hldGhlciB0aGUgZWxlbWVudFxuICogc2hvdWxkIHJldHJpZXZlIGZvY3VzLlxuICpcbiAqL1xuQERpcmVjdGl2ZSgpIC8vIHNlbGVjdG9yOiAnW2N4UGVyc2lzdEZvY3VzXScsXG5leHBvcnQgY2xhc3MgUGVyc2lzdEZvY3VzRGlyZWN0aXZlIGV4dGVuZHMgQmxvY2tGb2N1c0RpcmVjdGl2ZVxuICBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHByb3RlY3RlZCBkZWZhdWx0Q29uZmlnOiBQZXJzaXN0Rm9jdXNDb25maWcgPSB7fTtcblxuICAvKipcbiAgICogVGhlIHBlcnNpc3RlbmNlIGtleSBjYW4gYmUgcGFzc2VkIGRpcmVjdGx5IG9yIHRocm91Z2ggdGhlIGBGb2N1c0NvbmZpZy5rZXlgLlxuICAgKiBXaGlsZSB0aGlzIGNvdWxkIGJlIGNvbnNpZGVyZWQgYSBnbG9iYWwga2V5LCB0aGUgbGlrZWxpbmVzcyBvZiBjb25mbGljdHNcbiAgICogaXMgdmVyeSBzbWFsbCBzaW5jZSB0aGUga2V5IGlzIGNsZWFyZWQgd2hlbiB0aGUgZm9jdXMgaXMgY2hhbmdlZC5cbiAgICovXG4gIC8vIEBJbnB1dCgnY3hQZXJzaXN0Rm9jdXMnKVxuICBwcm90ZWN0ZWQgY29uZmlnOiBQZXJzaXN0Rm9jdXNDb25maWcgPSB7fTtcblxuICAvKipcbiAgICogVGhlIHBlcnNpc3RhbmNlIGtleSBpcyBtYWludGFpbmVkIGluIGFuIGVsZW1lbnQgYXR0cmlidXRlIGZvciBvdGhlclxuICAgKiBpbXBsZW1lbnRhdGlvbnMuIFRoaXMgaXMgbmVlZGVkIHRvIGVuc3VyZSB0aGF0IHdlIGNhbiByZXNvbHZlIHRoZSBmb2N1c1xuICAgKiBzdGF0ZSBpbiBjYXNlIG9mIGEgcmVwYWludC5cbiAgICovXG4gIEBIb3N0QmluZGluZyhgYXR0ci4ke0ZPQ1VTX0FUVFJ9YCkgYXR0cjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgcGVyc2lzdGVuY2Uga2V5IGlzIG1haW50YWluZWQgaW4gYSBzaW5nbGV0b24gY3Jvc3MgdGhlIGFwcCB0byBlbnN1cmUgd2VcbiAgICogY2FuIHJlc2V0IHRoZSBmb2N1cyBpZiB0aGUgRE9NIGdldHMgcmVidWlsZC5cbiAgICovXG5cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnLCBbJyRldmVudCddKVxuICBoYW5kbGVGb2N1cyhldmVudD86IEtleWJvYXJkRXZlbnQpIHtcbiAgICB0aGlzLnNlcnZpY2Uuc2V0KHRoaXMua2V5LCB0aGlzLmdyb3VwKTtcblxuICAgIGV2ZW50Py5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50Py5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByb3RlY3RlZCBzZXJ2aWNlOiBQZXJzaXN0Rm9jdXNTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIHNlcnZpY2UpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgICB0aGlzLmF0dHIgPSB0aGlzLmtleSA/IHRoaXMua2V5IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldERlZmF1bHRDb25maWd1cmF0aW9uKCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5jb25maWcgPT09ICdzdHJpbmcnICYmIHRoaXMuY29uZmlnICE9PSAnJykge1xuICAgICAgdGhpcy5jb25maWcgPSB7IGtleTogdGhpcy5jb25maWcgfTtcbiAgICB9XG4gICAgc3VwZXIuc2V0RGVmYXVsdENvbmZpZ3VyYXRpb24oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb2N1cyB0aGUgZWxlbWVudCBleHBsaWNpdGx5IGlmIGl0IHdhcyBmb2N1c2VkIGJlZm9yZS5cbiAgICovXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5pc1BlcnNpc3RlZCkge1xuICAgICAgdGhpcy5ob3N0LmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IGlzUGVyc2lzdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMua2V5ICYmIHRoaXMuc2VydmljZS5nZXQodGhpcy5ncm91cCkgPT09IHRoaXMua2V5O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGtleSBmb3IgdGhlIGhvc3QgZWxlbWVudCwgd2hpY2ggaXMgdXNlZCB0byBwZXJzaXN0IHRoZVxuICAgKiBmb2N1cyBzdGF0ZS4gVGhpcyBpcyB1c2VmdWwgaW4gY2FzZXMgd2hlcmUgdGhlIERPTSBpcyByZWJ1aWxkLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBrZXkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKHRoaXMuY29uZmlnIGFzIFBlcnNpc3RGb2N1c0NvbmZpZyk/LmtleTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIHRoZSBwZXJzaXN0ZW5jZSBncm91cCAoaWYgYW55KSBmb3IgdGhlIGZvY3VzYWJsZSBlbGVtZW50cy5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgZ3JvdXAoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmdldFBlcnNpc3RlbmNlR3JvdXAoXG4gICAgICB0aGlzLmhvc3QsXG4gICAgICB0aGlzLmNvbmZpZyBhcyBQZXJzaXN0Rm9jdXNDb25maWdcbiAgICApO1xuICB9XG59XG4iXX0=