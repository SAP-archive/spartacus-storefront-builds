import { __decorate, __extends } from "tslib";
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
        Input('cxPersistFocus')
    ], PersistFocusDirective.prototype, "config", void 0);
    __decorate([
        HostBinding("attr." + FOCUS_ATTR)
    ], PersistFocusDirective.prototype, "attr", void 0);
    __decorate([
        HostListener('focus', ['$event'])
    ], PersistFocusDirective.prototype, "handleFocus", null);
    PersistFocusDirective = __decorate([
        Directive({
            selector: '[cxPersistFocus]',
        })
    ], PersistFocusDirective);
    return PersistFocusDirective;
}(BlockFocusDirective));
export { PersistFocusDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdC1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9wZXJzaXN0L3BlcnNpc3QtZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsYUFBYSxFQUNiLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxVQUFVLEVBQXNCLE1BQU0seUJBQXlCLENBQUM7QUFDekUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFOUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5Qkc7QUFJSDtJQUEyQyx5Q0FBbUI7SUErQjVELCtCQUNZLFVBQXNCLEVBQ3RCLE9BQTRCO1FBRnhDLFlBSUUsa0JBQU0sVUFBVSxFQUFFLE9BQU8sQ0FBQyxTQUMzQjtRQUpXLGdCQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGFBQU8sR0FBUCxPQUFPLENBQXFCO1FBL0I5QixtQkFBYSxHQUF1QixFQUFFLENBQUM7UUFFakQ7Ozs7V0FJRztRQUNnQyxZQUFNLEdBQXVCLEVBQUUsQ0FBQzs7SUEyQm5FLENBQUM7SUFsQkQ7OztPQUdHO0lBR0gsMkNBQVcsR0FBWCxVQUFZLEtBQXFCOztRQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV2QyxNQUFBLEtBQUssMENBQUUsY0FBYyxHQUFHO1FBQ3hCLE1BQUEsS0FBSywwQ0FBRSxlQUFlLEdBQUc7SUFDM0IsQ0FBQztJQVNELHdDQUFRLEdBQVI7UUFDRSxpQkFBTSxRQUFRLFdBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM5QyxDQUFDO0lBRVMsdURBQXVCLEdBQWpDO1FBQ0UsSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssRUFBRSxFQUFFO1lBQ3pELElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3BDO1FBQ0QsaUJBQU0sdUJBQXVCLFdBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCwrQ0FBZSxHQUFmO1FBQ0UsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7U0FDMUM7SUFDSCxDQUFDO0lBRUQsc0JBQWMsOENBQVc7YUFBekI7WUFDRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ2pFLENBQUM7OztPQUFBO0lBTUQsc0JBQWMsc0NBQUc7UUFKakI7OztXQUdHO2FBQ0g7O1lBQ0UsYUFBUSxJQUFJLENBQUMsTUFBNkIsMENBQUUsR0FBRyxDQUFDO1FBQ2xELENBQUM7OztPQUFBO0lBS0Qsc0JBQWMsd0NBQUs7UUFIbkI7O1dBRUc7YUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FDckMsSUFBSSxDQUFDLElBQUksRUFDVCxJQUFJLENBQUMsTUFBNEIsQ0FDbEMsQ0FBQztRQUNKLENBQUM7OztPQUFBOztnQkEvQ3VCLFVBQVU7Z0JBQ2IsbUJBQW1COztJQXhCZjtRQUF4QixLQUFLLENBQUMsZ0JBQWdCLENBQUM7eURBQTJDO0lBT2hDO1FBQWxDLFdBQVcsQ0FBQyxVQUFRLFVBQVksQ0FBQzt1REFBYztJQVFoRDtRQURDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs0REFNakM7SUE3QlUscUJBQXFCO1FBSGpDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxrQkFBa0I7U0FDN0IsQ0FBQztPQUNXLHFCQUFxQixDQWdGakM7SUFBRCw0QkFBQztDQUFBLEFBaEZELENBQTJDLG1CQUFtQixHQWdGN0Q7U0FoRlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJsb2NrRm9jdXNEaXJlY3RpdmUgfSBmcm9tICcuLi9ibG9jay9ibG9jay1mb2N1cy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRk9DVVNfQVRUUiwgUGVyc2lzdEZvY3VzQ29uZmlnIH0gZnJvbSAnLi4va2V5Ym9hcmQtZm9jdXMubW9kZWwnO1xuaW1wb3J0IHsgUGVyc2lzdEZvY3VzU2VydmljZSB9IGZyb20gJy4vcGVyc2lzdC1mb2N1cy5zZXJ2aWNlJztcblxuLyoqXG4gKiBEaXJlY3RpdmUgdGhhdCBwcm92aWRlcyBwZXJzaXN0ZW5jZSBvZiB0aGUgZm9jdXNlZCBzdGF0ZS4gVGhpcyBpcyB1c2VmdWxcbiAqIHdoZW4gYSBncm91cCBvZiBmb2N1c2FibGUgZWxlbWVudHMgZ290IHJlZm9jdXNlZCBvciBldmVuIHJlY3JlYXRlZC4gVGhhdFxuICogaGFwcGVucyBvZnRlbiB3aGVuIHRoZSBET00gaXMgY29uc3RydWN0ZWQgd2l0aCBhbiBgKm5nSWZgIG9yIGAqbmdGb3JgLlxuICpcbiAqIFRoZSBmb2N1cyBzdGF0ZSBpcyBiYXNlZCBvbiBhIGNvbmZpZ3VyZWQgX2tleV8sIHdoaWNoIGNhbiBiZSBwYXNzZWQgaW4gdGhlXG4gKiBjb25maWcgaW5wdXQsIGVpdGhlciBieSB1c2luZyBhIHN0cmluZyBwcmltaXRpdmUgb3IgYFBlcnNpc3RGb2N1c0NvbmZpZy5rZXlgOlxuICpcbiAqIGBgYGh0bWxcbiAqIDxidXR0b24gY3hQZXJzaXN0Rm9jdXM9XCJteUtleVwiPjwvYnV0dG9uPlxuICogPGJ1dHRvbiBjeEZvY3VzPVwibXlLZXlcIj48L2J1dHRvbj5cbiAqIDxidXR0b24gW2N4Rm9jdXNdPVwie3trZXk6J215S2V5J31cIj48L2J1dHRvbj5cbiAqIGBgYFxuICpcbiAqIFRoZSBmb2N1cyBzdGF0ZSBjYW4gYmUgcGFydCBvZiBhIGZvY3VzIF9ncm91cF8sIHNvIHRoYXQgdGhlIHN0YXRlIGlzIHNoYXJlZFxuICogYW5kIHJlbWVtYmVyIGZvciB0aGUgZ2l2ZW4gZ3JvdXAuIEluIG9yZGVyIHRvIGRldGVjdCB0aGUgcGVyc2lzdGVuY2UgZm9yIGFcbiAqIGdpdmVuIGVsZW1lbnQsIHdlIHN0b3JlIHRoZSBwZXJzaXN0ZW5jZSBrZXkgYXMgYSBkYXRhIGF0dHJpYnV0ZSAoYGRhdGEtY3gtZm9jdXNgKTpcbiAqXG4gKiBgYGBodG1sXG4gKiA8YnV0dG9uIGRhdGEtY3gtZm9jdXM9XCJteUtleVwiPjwvYnV0dG9uPlxuICogYGBgXG4gKlxuICogT3RoZXIga2V5Ym9hcmQgZm9jdXMgZGlyZWN0aXZlcyBjYW4gcmVhZCB0aGUga2V5IHRvIHVuZGVyc3RhbmQgd2hldGhlciB0aGUgZWxlbWVudFxuICogc2hvdWxkIHJldHJpZXZlIGZvY3VzLlxuICpcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N4UGVyc2lzdEZvY3VzXScsXG59KVxuZXhwb3J0IGNsYXNzIFBlcnNpc3RGb2N1c0RpcmVjdGl2ZSBleHRlbmRzIEJsb2NrRm9jdXNEaXJlY3RpdmVcbiAgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBwcm90ZWN0ZWQgZGVmYXVsdENvbmZpZzogUGVyc2lzdEZvY3VzQ29uZmlnID0ge307XG5cbiAgLyoqXG4gICAqIFRoZSBwZXJzaXN0ZW5jZSBrZXkgY2FuIGJlIHBhc3NlZCBkaXJlY3RseSBvciB0aHJvdWdoIHRoZSBgRm9jdXNDb25maWcua2V5YC5cbiAgICogV2hpbGUgdGhpcyBjb3VsZCBiZSBjb25zaWRlcmVkIGEgZ2xvYmFsIGtleSwgdGhlIGxpa2VsaW5lc3Mgb2YgY29uZmxpY3RzXG4gICAqIGlzIHZlcnkgc21hbGwgc2luY2UgdGhlIGtleSBpcyBjbGVhcmVkIHdoZW4gdGhlIGZvY3VzIGlzIGNoYW5nZWQuXG4gICAqL1xuICBASW5wdXQoJ2N4UGVyc2lzdEZvY3VzJykgcHJvdGVjdGVkIGNvbmZpZzogUGVyc2lzdEZvY3VzQ29uZmlnID0ge307XG5cbiAgLyoqXG4gICAqIFRoZSBwZXJzaXN0YW5jZSBrZXkgaXMgbWFpbnRhaW5lZCBpbiBhbiBlbGVtZW50IGF0dHJpYnV0ZSBmb3Igb3RoZXJcbiAgICogaW1wbGVtZW50YXRpb25zLiBUaGlzIGlzIG5lZWRlZCB0byBlbnN1cmUgdGhhdCB3ZSBjYW4gcmVzb2x2ZSB0aGUgZm9jdXNcbiAgICogc3RhdGUgaW4gY2FzZSBvZiBhIHJlcGFpbnQuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoYGF0dHIuJHtGT0NVU19BVFRSfWApIGF0dHI6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHBlcnNpc3RlbmNlIGtleSBpcyBtYWludGFpbmVkIGluIGEgc2luZ2xldG9uIGNyb3NzIHRoZSBhcHAgdG8gZW5zdXJlIHdlXG4gICAqIGNhbiByZXNldCB0aGUgZm9jdXMgaWYgdGhlIERPTSBnZXRzIHJlYnVpbGQuXG4gICAqL1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJywgWyckZXZlbnQnXSlcbiAgaGFuZGxlRm9jdXMoZXZlbnQ/OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgdGhpcy5zZXJ2aWNlLnNldCh0aGlzLmtleSwgdGhpcy5ncm91cCk7XG5cbiAgICBldmVudD8ucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudD8uc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcm90ZWN0ZWQgc2VydmljZTogUGVyc2lzdEZvY3VzU2VydmljZVxuICApIHtcbiAgICBzdXBlcihlbGVtZW50UmVmLCBzZXJ2aWNlKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gICAgdGhpcy5hdHRyID0gdGhpcy5rZXkgPyB0aGlzLmtleSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXREZWZhdWx0Q29uZmlndXJhdGlvbigpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuY29uZmlnID09PSAnc3RyaW5nJyAmJiB0aGlzLmNvbmZpZyAhPT0gJycpIHtcbiAgICAgIHRoaXMuY29uZmlnID0geyBrZXk6IHRoaXMuY29uZmlnIH07XG4gICAgfVxuICAgIHN1cGVyLnNldERlZmF1bHRDb25maWd1cmF0aW9uKCk7XG4gIH1cblxuICAvKipcbiAgICogRm9jdXMgdGhlIGVsZW1lbnQgZXhwbGljaXRseSBpZiBpdCB3YXMgZm9jdXNlZCBiZWZvcmUuXG4gICAqL1xuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMuaXNQZXJzaXN0ZWQpIHtcbiAgICAgIHRoaXMuaG9zdC5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBpc1BlcnNpc3RlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLmtleSAmJiB0aGlzLnNlcnZpY2UuZ2V0KHRoaXMuZ3JvdXApID09PSB0aGlzLmtleTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBrZXkgZm9yIHRoZSBob3N0IGVsZW1lbnQsIHdoaWNoIGlzIHVzZWQgdG8gcGVyc2lzdCB0aGVcbiAgICogZm9jdXMgc3RhdGUuIFRoaXMgaXMgdXNlZnVsIGluIGNhc2VzIHdoZXJlIHRoZSBET00gaXMgcmVidWlsZC5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQga2V5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICh0aGlzLmNvbmZpZyBhcyBQZXJzaXN0Rm9jdXNDb25maWcpPy5rZXk7XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyB0aGUgcGVyc2lzdGVuY2UgZ3JvdXAgKGlmIGFueSkgZm9yIHRoZSBmb2N1c2FibGUgZWxlbWVudHMuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGdyb3VwKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc2VydmljZS5nZXRQZXJzaXN0ZW5jZUdyb3VwKFxuICAgICAgdGhpcy5ob3N0LFxuICAgICAgdGhpcy5jb25maWcgYXMgUGVyc2lzdEZvY3VzQ29uZmlnXG4gICAgKTtcbiAgfVxufVxuIl19