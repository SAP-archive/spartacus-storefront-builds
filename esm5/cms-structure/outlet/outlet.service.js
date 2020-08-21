import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { FeatureConfigService } from '@spartacus/core';
import { AVOID_STACKED_OUTLETS, OutletPosition } from './outlet.model';
import * as i0 from "@angular/core";
var OutletService = /** @class */ (function () {
    function OutletService(features) {
        var _a;
        this.features = features;
        this.templatesRefs = (_a = {},
            _a[OutletPosition.BEFORE] = new Map(),
            _a[OutletPosition.REPLACE] = new Map(),
            _a[OutletPosition.AFTER] = new Map(),
            _a);
    }
    /**
     * @param templateOrFactory A `ComponentFactory` that inserts a component dynamically.
     */
    OutletService.prototype.add = function (outlet, templateOrFactory, position) {
        if (position === void 0) { position = OutletPosition.REPLACE; }
        var store = this.templatesRefs[position];
        if (store) {
            var existing = store.get(outlet) || [];
            var newValue = existing.concat([templateOrFactory]);
            store.set(outlet, newValue);
        }
    };
    /**
     *
     * Returns a single object or multiple objects for the given outlet reference,
     * depending on the `stacked` argument.
     *
     * @param outlet The outlet reference
     * @param position the outlet position, `OutletPosition.before`, `OutletPosition.AFTER` or `OutletPosition.REPLACE`
     * @param stacked Indicates whether an array of outlet components is returned
     */
    OutletService.prototype.get = function (outlet, position, stacked) {
        if (position === void 0) { position = OutletPosition.REPLACE; }
        if (stacked === void 0) { stacked = AVOID_STACKED_OUTLETS; }
        var store = this.templatesRefs[position] ||
            this.templatesRefs[OutletPosition.REPLACE];
        var templateRef = store.get(outlet);
        if (templateRef && !stacked) {
            return templateRef[0];
        }
        return templateRef;
    };
    OutletService.prototype.remove = function (outlet, position, value) {
        if (position === void 0) { position = OutletPosition.REPLACE; }
        var store = this.templatesRefs[position] ||
            this.templatesRefs[OutletPosition.REPLACE];
        this.removeValueOrAll(store, outlet, value);
    };
    OutletService.prototype.removeValueOrAll = function (store, outlet, value) {
        var _a;
        if (!value && store.has(outlet)) {
            store.delete(outlet);
        }
        else if (value && store.has(outlet)) {
            var existing = store.get(outlet);
            if ((_a = this.features) === null || _a === void 0 ? void 0 : _a.isLevel('2.1')) {
                existing = existing.filter(function (val) { return val !== value; });
            }
            else {
                // deprecated since 2.1, see #8116:
                existing = existing.filter(function (val) { return val === value; });
            }
            store.set(outlet, existing);
        }
    };
    OutletService.ctorParameters = function () { return [
        { type: FeatureConfigService }
    ]; };
    OutletService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OutletService_Factory() { return new OutletService(); }, token: OutletService, providedIn: "root" });
    OutletService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], OutletService);
    return OutletService;
}());
export { OutletService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL291dGxldC9vdXRsZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFvQixVQUFVLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUt2RTtJQU9FLHVCQUFzQixRQUErQjs7UUFBL0IsYUFBUSxHQUFSLFFBQVEsQ0FBdUI7UUFFN0Msa0JBQWE7WUFDbkIsR0FBQyxjQUFjLENBQUMsTUFBTSxJQUFHLElBQUksR0FBRyxFQUFlO1lBQy9DLEdBQUMsY0FBYyxDQUFDLE9BQU8sSUFBRyxJQUFJLEdBQUcsRUFBZTtZQUNoRCxHQUFDLGNBQWMsQ0FBQyxLQUFLLElBQUcsSUFBSSxHQUFHLEVBQWU7Z0JBQzlDO0lBTnNELENBQUM7SUE0QnpEOztPQUVHO0lBQ0gsMkJBQUcsR0FBSCxVQUNFLE1BQWMsRUFDZCxpQkFBb0IsRUFDcEIsUUFBaUQ7UUFBakQseUJBQUEsRUFBQSxXQUEyQixjQUFjLENBQUMsT0FBTztRQUVqRCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNDLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDekMsSUFBTSxRQUFRLEdBQVEsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztZQUMzRCxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztTQUM3QjtJQUNILENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNILDJCQUFHLEdBQUgsVUFDRSxNQUFjLEVBQ2QsUUFBaUQsRUFDakQsT0FBK0I7UUFEL0IseUJBQUEsRUFBQSxXQUEyQixjQUFjLENBQUMsT0FBTztRQUNqRCx3QkFBQSxFQUFBLCtCQUErQjtRQUUvQixJQUFNLEtBQUssR0FDVCxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztZQUM1QixJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU3QyxJQUFNLFdBQVcsR0FBUSxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLElBQUksV0FBVyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQzNCLE9BQU8sV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZCO1FBQ0QsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUVELDhCQUFNLEdBQU4sVUFDRSxNQUFjLEVBQ2QsUUFBaUQsRUFDakQsS0FBUztRQURULHlCQUFBLEVBQUEsV0FBMkIsY0FBYyxDQUFDLE9BQU87UUFHakQsSUFBTSxLQUFLLEdBQ1QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7WUFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFN0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVTLHdDQUFnQixHQUExQixVQUNFLEtBQXVCLEVBQ3ZCLE1BQWMsRUFDZCxLQUFTOztRQUVULElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMvQixLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3RCO2FBQU0sSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNyQyxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRWpDLFVBQUksSUFBSSxDQUFDLFFBQVEsMENBQUUsT0FBTyxDQUFDLEtBQUssR0FBRztnQkFDakMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLEtBQUssS0FBSyxFQUFiLENBQWEsQ0FBQyxDQUFDO2FBQ3BEO2lCQUFNO2dCQUNMLG1DQUFtQztnQkFDbkMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLEtBQUssS0FBSyxFQUFiLENBQWEsQ0FBQyxDQUFDO2FBQ3BEO1lBRUQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDOztnQkFwR2dDLG9CQUFvQjs7O0lBUDFDLGFBQWE7UUFIekIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGFBQWEsQ0E0R3pCO3dCQW5IRDtDQW1IQyxBQTVHRCxJQTRHQztTQTVHWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50RmFjdG9yeSwgSW5qZWN0YWJsZSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZlYXR1cmVDb25maWdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEFWT0lEX1NUQUNLRURfT1VUTEVUUywgT3V0bGV0UG9zaXRpb24gfSBmcm9tICcuL291dGxldC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBPdXRsZXRTZXJ2aWNlPFQgPSBUZW1wbGF0ZVJlZjxhbnk+IHwgQ29tcG9uZW50RmFjdG9yeTxhbnk+PiB7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSAyLjEsIHNlZSAjODExNlxuICAgKi9cbiAgY29uc3RydWN0b3IoKTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB1bmlmaWVkLXNpZ25hdHVyZXNcbiAgY29uc3RydWN0b3IoZmVhdHVyZXM6IEZlYXR1cmVDb25maWdTZXJ2aWNlKTtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGZlYXR1cmVzPzogRmVhdHVyZUNvbmZpZ1NlcnZpY2UpIHt9XG5cbiAgcHJpdmF0ZSB0ZW1wbGF0ZXNSZWZzID0ge1xuICAgIFtPdXRsZXRQb3NpdGlvbi5CRUZPUkVdOiBuZXcgTWFwPHN0cmluZywgVFtdPigpLFxuICAgIFtPdXRsZXRQb3NpdGlvbi5SRVBMQUNFXTogbmV3IE1hcDxzdHJpbmcsIFRbXT4oKSxcbiAgICBbT3V0bGV0UG9zaXRpb24uQUZURVJdOiBuZXcgTWFwPHN0cmluZywgVFtdPigpLFxuICB9O1xuXG4gIC8qKlxuICAgKiBBZGRzIGEgdGVtcGxhdGUgb3IgQ29tcG9uZW50RmFjdG9yeSwgc28gdGhhdCBVSSBvdXRsZXRzIGNhbiBiZSByZXBsYWNlZCBkeW5hbWljYWxseS5cbiAgICogVGhlIFVJIHBvc2l0aW9uIHdoZXJlIHRoaXMgdGVtcGxhdGUgb3IgQ29tcG9uZW50RmFjdG9yeSBpcyBpbnNlcnRlZCBpcyBnaXZlbiBieSBhXG4gICAqIHN0cmluZyByZWZlcmVuY2UgKGNhbGxlZCBgb3V0bGV0YCkgYW5kIG9wdGlvbmFsIGBPdXRsZXRQb3NpdGlvbmAuIFRoZSBgT3V0bGV0UG9zaXRpb25gXG4gICAqIGlzIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIsIG9yIHJlcGxhY2VzIHRoZSBlbnRpcmUgVUkuXG4gICAqXG4gICAqIEBwYXJhbSBvdXRsZXQgdGhlIFVJIGxvY2F0aW9uIHJlcHJlc2VudGVkIGJ5IGEgc3RyaW5nXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZSB0aGUgYFRlbXBsYXRlUmVmYCB0aGF0IHdpbGwgYmUgdXNlZCB0byBpbnNlcnQgVUlcbiAgICogQHBhcmFtIHBvc2l0aW9uIHRoZSBgT3V0bGV0UG9zaXRpb25gIGluIHRoZSBVSVxuICAgKi9cbiAgYWRkKG91dGxldDogc3RyaW5nLCB0ZW1wbGF0ZTogVCwgcG9zaXRpb24/OiBPdXRsZXRQb3NpdGlvbik6IHZvaWQ7XG4gIC8qKlxuICAgKiBAcGFyYW0gZmFjdG9yeSBUaGUgYENvbXBvbmVudEZhY3RvcnlgIHRoYXQgd2lsbCBiZSBkeW5hbWljYWxseSBhZGRlZCB0byB0aGUgb3V0bGV0IFVJXG4gICAqL1xuICBhZGQoXG4gICAgb3V0bGV0OiBzdHJpbmcsXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB1bmlmaWVkLXNpZ25hdHVyZXNcbiAgICBmYWN0b3J5OiBULFxuICAgIHBvc2l0aW9uPzogT3V0bGV0UG9zaXRpb25cbiAgKTogdm9pZDtcbiAgLyoqXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZU9yRmFjdG9yeSBBIGBDb21wb25lbnRGYWN0b3J5YCB0aGF0IGluc2VydHMgYSBjb21wb25lbnQgZHluYW1pY2FsbHkuXG4gICAqL1xuICBhZGQoXG4gICAgb3V0bGV0OiBzdHJpbmcsXG4gICAgdGVtcGxhdGVPckZhY3Rvcnk6IFQsXG4gICAgcG9zaXRpb246IE91dGxldFBvc2l0aW9uID0gT3V0bGV0UG9zaXRpb24uUkVQTEFDRVxuICApOiB2b2lkIHtcbiAgICBjb25zdCBzdG9yZSA9IHRoaXMudGVtcGxhdGVzUmVmc1twb3NpdGlvbl07XG4gICAgaWYgKHN0b3JlKSB7XG4gICAgICBjb25zdCBleGlzdGluZyA9IHN0b3JlLmdldChvdXRsZXQpIHx8IFtdO1xuICAgICAgY29uc3QgbmV3VmFsdWU6IFRbXSA9IGV4aXN0aW5nLmNvbmNhdChbdGVtcGxhdGVPckZhY3RvcnldKTtcbiAgICAgIHN0b3JlLnNldChvdXRsZXQsIG5ld1ZhbHVlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogUmV0dXJucyBhIHNpbmdsZSBvYmplY3Qgb3IgbXVsdGlwbGUgb2JqZWN0cyBmb3IgdGhlIGdpdmVuIG91dGxldCByZWZlcmVuY2UsXG4gICAqIGRlcGVuZGluZyBvbiB0aGUgYHN0YWNrZWRgIGFyZ3VtZW50LlxuICAgKlxuICAgKiBAcGFyYW0gb3V0bGV0IFRoZSBvdXRsZXQgcmVmZXJlbmNlXG4gICAqIEBwYXJhbSBwb3NpdGlvbiB0aGUgb3V0bGV0IHBvc2l0aW9uLCBgT3V0bGV0UG9zaXRpb24uYmVmb3JlYCwgYE91dGxldFBvc2l0aW9uLkFGVEVSYCBvciBgT3V0bGV0UG9zaXRpb24uUkVQTEFDRWBcbiAgICogQHBhcmFtIHN0YWNrZWQgSW5kaWNhdGVzIHdoZXRoZXIgYW4gYXJyYXkgb2Ygb3V0bGV0IGNvbXBvbmVudHMgaXMgcmV0dXJuZWRcbiAgICovXG4gIGdldChcbiAgICBvdXRsZXQ6IHN0cmluZyxcbiAgICBwb3NpdGlvbjogT3V0bGV0UG9zaXRpb24gPSBPdXRsZXRQb3NpdGlvbi5SRVBMQUNFLFxuICAgIHN0YWNrZWQgPSBBVk9JRF9TVEFDS0VEX09VVExFVFNcbiAgKTogVFtdIHwgVCB7XG4gICAgY29uc3Qgc3RvcmUgPVxuICAgICAgdGhpcy50ZW1wbGF0ZXNSZWZzW3Bvc2l0aW9uXSB8fFxuICAgICAgdGhpcy50ZW1wbGF0ZXNSZWZzW091dGxldFBvc2l0aW9uLlJFUExBQ0VdO1xuXG4gICAgY29uc3QgdGVtcGxhdGVSZWY6IFRbXSA9IHN0b3JlLmdldChvdXRsZXQpO1xuICAgIGlmICh0ZW1wbGF0ZVJlZiAmJiAhc3RhY2tlZCkge1xuICAgICAgcmV0dXJuIHRlbXBsYXRlUmVmWzBdO1xuICAgIH1cbiAgICByZXR1cm4gdGVtcGxhdGVSZWY7XG4gIH1cblxuICByZW1vdmUoXG4gICAgb3V0bGV0OiBzdHJpbmcsXG4gICAgcG9zaXRpb246IE91dGxldFBvc2l0aW9uID0gT3V0bGV0UG9zaXRpb24uUkVQTEFDRSxcbiAgICB2YWx1ZT86IFRcbiAgKTogdm9pZCB7XG4gICAgY29uc3Qgc3RvcmUgPVxuICAgICAgdGhpcy50ZW1wbGF0ZXNSZWZzW3Bvc2l0aW9uXSB8fFxuICAgICAgdGhpcy50ZW1wbGF0ZXNSZWZzW091dGxldFBvc2l0aW9uLlJFUExBQ0VdO1xuXG4gICAgdGhpcy5yZW1vdmVWYWx1ZU9yQWxsKHN0b3JlLCBvdXRsZXQsIHZhbHVlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW1vdmVWYWx1ZU9yQWxsKFxuICAgIHN0b3JlOiBNYXA8c3RyaW5nLCBUW10+LFxuICAgIG91dGxldDogc3RyaW5nLFxuICAgIHZhbHVlPzogVFxuICApOiB2b2lkIHtcbiAgICBpZiAoIXZhbHVlICYmIHN0b3JlLmhhcyhvdXRsZXQpKSB7XG4gICAgICBzdG9yZS5kZWxldGUob3V0bGV0KTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlICYmIHN0b3JlLmhhcyhvdXRsZXQpKSB7XG4gICAgICBsZXQgZXhpc3RpbmcgPSBzdG9yZS5nZXQob3V0bGV0KTtcblxuICAgICAgaWYgKHRoaXMuZmVhdHVyZXM/LmlzTGV2ZWwoJzIuMScpKSB7XG4gICAgICAgIGV4aXN0aW5nID0gZXhpc3RpbmcuZmlsdGVyKCh2YWwpID0+IHZhbCAhPT0gdmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZGVwcmVjYXRlZCBzaW5jZSAyLjEsIHNlZSAjODExNjpcbiAgICAgICAgZXhpc3RpbmcgPSBleGlzdGluZy5maWx0ZXIoKHZhbCkgPT4gdmFsID09PSB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIHN0b3JlLnNldChvdXRsZXQsIGV4aXN0aW5nKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==