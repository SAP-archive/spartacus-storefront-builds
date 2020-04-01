import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { AVOID_STACKED_OUTLETS, OutletPosition } from './outlet.model';
import * as i0 from "@angular/core";
var OutletService = /** @class */ (function () {
    function OutletService() {
        this.templatesRefs = new Map();
        this.templatesRefsBefore = new Map();
        this.templatesRefsAfter = new Map();
    }
    /**
     * @param templateOrFactory A `ComponentFactory` that inserts a component dynamically.
     */
    OutletService.prototype.add = function (outlet, templateOrFactory, position) {
        if (position === void 0) { position = OutletPosition.REPLACE; }
        if (position === OutletPosition.BEFORE) {
            this.store(this.templatesRefsBefore, outlet, templateOrFactory);
        }
        if (position === OutletPosition.REPLACE) {
            this.store(this.templatesRefs, outlet, templateOrFactory);
        }
        if (position === OutletPosition.AFTER) {
            this.store(this.templatesRefsAfter, outlet, templateOrFactory);
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
        var templateRef;
        switch (position) {
            case OutletPosition.BEFORE:
                templateRef = this.templatesRefsBefore.get(outlet);
                break;
            case OutletPosition.AFTER:
                templateRef = this.templatesRefsAfter.get(outlet);
                break;
            default:
                templateRef = this.templatesRefs.get(outlet);
        }
        if (templateRef && !stacked) {
            return templateRef[0];
        }
        return templateRef;
    };
    OutletService.prototype.remove = function (outlet, position, value) {
        if (position === void 0) { position = OutletPosition.REPLACE; }
        switch (position) {
            case OutletPosition.BEFORE:
                this.removeValueOrAll(this.templatesRefsBefore, outlet, value);
                break;
            case OutletPosition.AFTER:
                this.removeValueOrAll(this.templatesRefsAfter, outlet, value);
                break;
            default:
                this.removeValueOrAll(this.templatesRefs, outlet, value);
        }
    };
    OutletService.prototype.store = function (store, outlet, value) {
        var existing = store.get(outlet) || [];
        var newValue = existing.concat([value]);
        store.set(outlet, newValue);
    };
    OutletService.prototype.removeValueOrAll = function (store, outlet, value) {
        if (!value && store.has(outlet)) {
            store.delete(outlet);
        }
        else if (value && store.has(outlet)) {
            var existing = store.get(outlet);
            existing = existing.filter(function (val) { return val === value; });
            store.set(outlet, existing);
        }
    };
    OutletService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OutletService_Factory() { return new OutletService(); }, token: OutletService, providedIn: "root" });
    OutletService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], OutletService);
    return OutletService;
}());
export { OutletService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL291dGxldC9vdXRsZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBS3ZFO0lBQUE7UUFDVSxrQkFBYSxHQUFHLElBQUksR0FBRyxFQUFlLENBQUM7UUFDdkMsd0JBQW1CLEdBQUcsSUFBSSxHQUFHLEVBQWUsQ0FBQztRQUM3Qyx1QkFBa0IsR0FBRyxJQUFJLEdBQUcsRUFBZSxDQUFDO0tBNEdyRDtJQXRGQzs7T0FFRztJQUNILDJCQUFHLEdBQUgsVUFDRSxNQUFjLEVBQ2QsaUJBQW9CLEVBQ3BCLFFBQWlEO1FBQWpELHlCQUFBLEVBQUEsV0FBMkIsY0FBYyxDQUFDLE9BQU87UUFFakQsSUFBSSxRQUFRLEtBQUssY0FBYyxDQUFDLE1BQU0sRUFBRTtZQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztTQUNqRTtRQUNELElBQUksUUFBUSxLQUFLLGNBQWMsQ0FBQyxPQUFPLEVBQUU7WUFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1NBQzNEO1FBQ0QsSUFBSSxRQUFRLEtBQUssY0FBYyxDQUFDLEtBQUssRUFBRTtZQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztTQUNoRTtJQUNILENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNILDJCQUFHLEdBQUgsVUFDRSxNQUFjLEVBQ2QsUUFBaUQsRUFDakQsT0FBK0I7UUFEL0IseUJBQUEsRUFBQSxXQUEyQixjQUFjLENBQUMsT0FBTztRQUNqRCx3QkFBQSxFQUFBLCtCQUErQjtRQUUvQixJQUFJLFdBQWdCLENBQUM7UUFDckIsUUFBUSxRQUFRLEVBQUU7WUFDaEIsS0FBSyxjQUFjLENBQUMsTUFBTTtnQkFDeEIsV0FBVyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ25ELE1BQU07WUFDUixLQUFLLGNBQWMsQ0FBQyxLQUFLO2dCQUN2QixXQUFXLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbEQsTUFBTTtZQUNSO2dCQUNFLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNoRDtRQUNELElBQUksV0FBVyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQzNCLE9BQU8sV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZCO1FBQ0QsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUVELDhCQUFNLEdBQU4sVUFDRSxNQUFjLEVBQ2QsUUFBaUQsRUFDakQsS0FBUztRQURULHlCQUFBLEVBQUEsV0FBMkIsY0FBYyxDQUFDLE9BQU87UUFHakQsUUFBUSxRQUFRLEVBQUU7WUFDaEIsS0FBSyxjQUFjLENBQUMsTUFBTTtnQkFDeEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQy9ELE1BQU07WUFDUixLQUFLLGNBQWMsQ0FBQyxLQUFLO2dCQUN2QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDOUQsTUFBTTtZQUNSO2dCQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztTQUM1RDtJQUNILENBQUM7SUFFTyw2QkFBSyxHQUFiLFVBQWMsS0FBdUIsRUFBRSxNQUFjLEVBQUUsS0FBUTtRQUM3RCxJQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QyxJQUFNLFFBQVEsR0FBUSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMvQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRVMsd0NBQWdCLEdBQTFCLFVBQ0UsS0FBdUIsRUFDdkIsTUFBYyxFQUNkLEtBQVM7UUFFVCxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDL0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN0QjthQUFNLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDckMsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqQyxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEdBQUcsS0FBSyxLQUFLLEVBQWIsQ0FBYSxDQUFDLENBQUM7WUFDbkQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDOztJQTlHVSxhQUFhO1FBSHpCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxhQUFhLENBK0d6Qjt3QkFySEQ7Q0FxSEMsQUEvR0QsSUErR0M7U0EvR1ksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBVk9JRF9TVEFDS0VEX09VVExFVFMsIE91dGxldFBvc2l0aW9uIH0gZnJvbSAnLi9vdXRsZXQubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgT3V0bGV0U2VydmljZTxUID0gVGVtcGxhdGVSZWY8YW55Pj4ge1xuICBwcml2YXRlIHRlbXBsYXRlc1JlZnMgPSBuZXcgTWFwPHN0cmluZywgVFtdPigpO1xuICBwcml2YXRlIHRlbXBsYXRlc1JlZnNCZWZvcmUgPSBuZXcgTWFwPHN0cmluZywgVFtdPigpO1xuICBwcml2YXRlIHRlbXBsYXRlc1JlZnNBZnRlciA9IG5ldyBNYXA8c3RyaW5nLCBUW10+KCk7XG5cbiAgLyoqXG4gICAqIEFkZHMgYSB0ZW1wbGF0ZSBvciBDb21wb25lbnRGYWN0b3J5LCBzbyB0aGF0IFVJIG91dGxldHMgY2FuIGJlIHJlcGxhY2VkIGR5bmFtaWNhbGx5LlxuICAgKiBUaGUgVUkgcG9zaXRpb24gd2hlcmUgdGhpcyB0ZW1wbGF0ZSBvciBDb21wb25lbnRGYWN0b3J5IGlzIGluc2VydGVkIGlzIGdpdmVuIGJ5IGFcbiAgICogc3RyaW5nIHJlZmVyZW5jZSAoY2FsbGVkIGBvdXRsZXRgKSBhbmQgb3B0aW9uYWwgYE91dGxldFBvc2l0aW9uYC4gVGhlIGBPdXRsZXRQb3NpdGlvbmBcbiAgICogaXMgZWl0aGVyIGJlZm9yZSBvciBhZnRlciwgb3IgcmVwbGFjZXMgdGhlIGVudGlyZSBVSS5cbiAgICpcbiAgICogQHBhcmFtIG91dGxldCB0aGUgVUkgbG9jYXRpb24gcmVwcmVzZW50ZWQgYnkgYSBzdHJpbmdcbiAgICogQHBhcmFtIHRlbXBsYXRlIHRoZSBgVGVtcGxhdGVSZWZgIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGluc2VydCBVSVxuICAgKiBAcGFyYW0gcG9zaXRpb24gdGhlIGBPdXRsZXRQb3NpdGlvbmAgaW4gdGhlIFVJXG4gICAqL1xuICBhZGQob3V0bGV0OiBzdHJpbmcsIHRlbXBsYXRlOiBULCBwb3NpdGlvbj86IE91dGxldFBvc2l0aW9uKTogdm9pZDtcbiAgLyoqXG4gICAqIEBwYXJhbSBmYWN0b3J5IFRoZSBgQ29tcG9uZW50RmFjdG9yeWAgdGhhdCB3aWxsIGJlIGR5bmFtaWNhbGx5IGFkZGVkIHRvIHRoZSBvdXRsZXQgVUlcbiAgICovXG4gIGFkZChcbiAgICBvdXRsZXQ6IHN0cmluZyxcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVuaWZpZWQtc2lnbmF0dXJlc1xuICAgIGZhY3Rvcnk6IFQsXG4gICAgcG9zaXRpb24/OiBPdXRsZXRQb3NpdGlvblxuICApOiB2b2lkO1xuICAvKipcbiAgICogQHBhcmFtIHRlbXBsYXRlT3JGYWN0b3J5IEEgYENvbXBvbmVudEZhY3RvcnlgIHRoYXQgaW5zZXJ0cyBhIGNvbXBvbmVudCBkeW5hbWljYWxseS5cbiAgICovXG4gIGFkZChcbiAgICBvdXRsZXQ6IHN0cmluZyxcbiAgICB0ZW1wbGF0ZU9yRmFjdG9yeTogVCxcbiAgICBwb3NpdGlvbjogT3V0bGV0UG9zaXRpb24gPSBPdXRsZXRQb3NpdGlvbi5SRVBMQUNFXG4gICk6IHZvaWQge1xuICAgIGlmIChwb3NpdGlvbiA9PT0gT3V0bGV0UG9zaXRpb24uQkVGT1JFKSB7XG4gICAgICB0aGlzLnN0b3JlKHRoaXMudGVtcGxhdGVzUmVmc0JlZm9yZSwgb3V0bGV0LCB0ZW1wbGF0ZU9yRmFjdG9yeSk7XG4gICAgfVxuICAgIGlmIChwb3NpdGlvbiA9PT0gT3V0bGV0UG9zaXRpb24uUkVQTEFDRSkge1xuICAgICAgdGhpcy5zdG9yZSh0aGlzLnRlbXBsYXRlc1JlZnMsIG91dGxldCwgdGVtcGxhdGVPckZhY3RvcnkpO1xuICAgIH1cbiAgICBpZiAocG9zaXRpb24gPT09IE91dGxldFBvc2l0aW9uLkFGVEVSKSB7XG4gICAgICB0aGlzLnN0b3JlKHRoaXMudGVtcGxhdGVzUmVmc0FmdGVyLCBvdXRsZXQsIHRlbXBsYXRlT3JGYWN0b3J5KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogUmV0dXJucyBhIHNpbmdsZSBvYmplY3Qgb3IgbXVsdGlwbGUgb2JqZWN0cyBmb3IgdGhlIGdpdmVuIG91dGxldCByZWZlcmVuY2UsXG4gICAqIGRlcGVuZGluZyBvbiB0aGUgYHN0YWNrZWRgIGFyZ3VtZW50LlxuICAgKlxuICAgKiBAcGFyYW0gb3V0bGV0IFRoZSBvdXRsZXQgcmVmZXJlbmNlXG4gICAqIEBwYXJhbSBwb3NpdGlvbiB0aGUgb3V0bGV0IHBvc2l0aW9uLCBgT3V0bGV0UG9zaXRpb24uYmVmb3JlYCwgYE91dGxldFBvc2l0aW9uLkFGVEVSYCBvciBgT3V0bGV0UG9zaXRpb24uUkVQTEFDRWBcbiAgICogQHBhcmFtIHN0YWNrZWQgSW5kaWNhdGVzIHdoZXRoZXIgYW4gYXJyYXkgb2Ygb3V0bGV0IGNvbXBvbmVudHMgaXMgcmV0dXJuZWRcbiAgICovXG4gIGdldChcbiAgICBvdXRsZXQ6IHN0cmluZyxcbiAgICBwb3NpdGlvbjogT3V0bGV0UG9zaXRpb24gPSBPdXRsZXRQb3NpdGlvbi5SRVBMQUNFLFxuICAgIHN0YWNrZWQgPSBBVk9JRF9TVEFDS0VEX09VVExFVFNcbiAgKTogVFtdIHwgVCB7XG4gICAgbGV0IHRlbXBsYXRlUmVmOiBUW107XG4gICAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgICAgY2FzZSBPdXRsZXRQb3NpdGlvbi5CRUZPUkU6XG4gICAgICAgIHRlbXBsYXRlUmVmID0gdGhpcy50ZW1wbGF0ZXNSZWZzQmVmb3JlLmdldChvdXRsZXQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgT3V0bGV0UG9zaXRpb24uQUZURVI6XG4gICAgICAgIHRlbXBsYXRlUmVmID0gdGhpcy50ZW1wbGF0ZXNSZWZzQWZ0ZXIuZ2V0KG91dGxldCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGVtcGxhdGVSZWYgPSB0aGlzLnRlbXBsYXRlc1JlZnMuZ2V0KG91dGxldCk7XG4gICAgfVxuICAgIGlmICh0ZW1wbGF0ZVJlZiAmJiAhc3RhY2tlZCkge1xuICAgICAgcmV0dXJuIHRlbXBsYXRlUmVmWzBdO1xuICAgIH1cbiAgICByZXR1cm4gdGVtcGxhdGVSZWY7XG4gIH1cblxuICByZW1vdmUoXG4gICAgb3V0bGV0OiBzdHJpbmcsXG4gICAgcG9zaXRpb246IE91dGxldFBvc2l0aW9uID0gT3V0bGV0UG9zaXRpb24uUkVQTEFDRSxcbiAgICB2YWx1ZT86IFRcbiAgKTogdm9pZCB7XG4gICAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgICAgY2FzZSBPdXRsZXRQb3NpdGlvbi5CRUZPUkU6XG4gICAgICAgIHRoaXMucmVtb3ZlVmFsdWVPckFsbCh0aGlzLnRlbXBsYXRlc1JlZnNCZWZvcmUsIG91dGxldCwgdmFsdWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgT3V0bGV0UG9zaXRpb24uQUZURVI6XG4gICAgICAgIHRoaXMucmVtb3ZlVmFsdWVPckFsbCh0aGlzLnRlbXBsYXRlc1JlZnNBZnRlciwgb3V0bGV0LCB2YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5yZW1vdmVWYWx1ZU9yQWxsKHRoaXMudGVtcGxhdGVzUmVmcywgb3V0bGV0LCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzdG9yZShzdG9yZTogTWFwPHN0cmluZywgVFtdPiwgb3V0bGV0OiBzdHJpbmcsIHZhbHVlOiBUKSB7XG4gICAgY29uc3QgZXhpc3RpbmcgPSBzdG9yZS5nZXQob3V0bGV0KSB8fCBbXTtcbiAgICBjb25zdCBuZXdWYWx1ZTogVFtdID0gZXhpc3RpbmcuY29uY2F0KFt2YWx1ZV0pO1xuICAgIHN0b3JlLnNldChvdXRsZXQsIG5ld1ZhbHVlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW1vdmVWYWx1ZU9yQWxsKFxuICAgIHN0b3JlOiBNYXA8c3RyaW5nLCBUW10+LFxuICAgIG91dGxldDogc3RyaW5nLFxuICAgIHZhbHVlPzogVFxuICApOiB2b2lkIHtcbiAgICBpZiAoIXZhbHVlICYmIHN0b3JlLmhhcyhvdXRsZXQpKSB7XG4gICAgICBzdG9yZS5kZWxldGUob3V0bGV0KTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlICYmIHN0b3JlLmhhcyhvdXRsZXQpKSB7XG4gICAgICBsZXQgZXhpc3RpbmcgPSBzdG9yZS5nZXQob3V0bGV0KTtcbiAgICAgIGV4aXN0aW5nID0gZXhpc3RpbmcuZmlsdGVyKCh2YWwpID0+IHZhbCA9PT0gdmFsdWUpO1xuICAgICAgc3RvcmUuc2V0KG91dGxldCwgZXhpc3RpbmcpO1xuICAgIH1cbiAgfVxufVxuIl19