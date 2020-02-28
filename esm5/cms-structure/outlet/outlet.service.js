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
    OutletService.prototype.store = function (store, outlet, value) {
        var existing = store.get(outlet) || [];
        var newValue = existing.concat([value]);
        store.set(outlet, newValue);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL291dGxldC9vdXRsZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBS3ZFO0lBQUE7UUFDVSxrQkFBYSxHQUFHLElBQUksR0FBRyxFQUFlLENBQUM7UUFDdkMsd0JBQW1CLEdBQUcsSUFBSSxHQUFHLEVBQWUsQ0FBQztRQUM3Qyx1QkFBa0IsR0FBRyxJQUFJLEdBQUcsRUFBZSxDQUFDO0tBNkVyRDtJQXZEQzs7T0FFRztJQUNILDJCQUFHLEdBQUgsVUFDRSxNQUFjLEVBQ2QsaUJBQW9CLEVBQ3BCLFFBQWlEO1FBQWpELHlCQUFBLEVBQUEsV0FBMkIsY0FBYyxDQUFDLE9BQU87UUFFakQsSUFBSSxRQUFRLEtBQUssY0FBYyxDQUFDLE1BQU0sRUFBRTtZQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztTQUNqRTtRQUNELElBQUksUUFBUSxLQUFLLGNBQWMsQ0FBQyxPQUFPLEVBQUU7WUFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1NBQzNEO1FBQ0QsSUFBSSxRQUFRLEtBQUssY0FBYyxDQUFDLEtBQUssRUFBRTtZQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztTQUNoRTtJQUNILENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNILDJCQUFHLEdBQUgsVUFDRSxNQUFjLEVBQ2QsUUFBaUQsRUFDakQsT0FBK0I7UUFEL0IseUJBQUEsRUFBQSxXQUEyQixjQUFjLENBQUMsT0FBTztRQUNqRCx3QkFBQSxFQUFBLCtCQUErQjtRQUUvQixJQUFJLFdBQWdCLENBQUM7UUFDckIsUUFBUSxRQUFRLEVBQUU7WUFDaEIsS0FBSyxjQUFjLENBQUMsTUFBTTtnQkFDeEIsV0FBVyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ25ELE1BQU07WUFDUixLQUFLLGNBQWMsQ0FBQyxLQUFLO2dCQUN2QixXQUFXLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbEQsTUFBTTtZQUNSO2dCQUNFLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNoRDtRQUNELElBQUksV0FBVyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQzNCLE9BQU8sV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZCO1FBQ0QsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUVPLDZCQUFLLEdBQWIsVUFBYyxLQUF1QixFQUFFLE1BQWMsRUFBRSxLQUFRO1FBQzdELElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pDLElBQU0sUUFBUSxHQUFRLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQy9DLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzlCLENBQUM7O0lBL0VVLGFBQWE7UUFIekIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGFBQWEsQ0FnRnpCO3dCQXRGRDtDQXNGQyxBQWhGRCxJQWdGQztTQWhGWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFWT0lEX1NUQUNLRURfT1VUTEVUUywgT3V0bGV0UG9zaXRpb24gfSBmcm9tICcuL291dGxldC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBPdXRsZXRTZXJ2aWNlPFQgPSBUZW1wbGF0ZVJlZjxhbnk+PiB7XG4gIHByaXZhdGUgdGVtcGxhdGVzUmVmcyA9IG5ldyBNYXA8c3RyaW5nLCBUW10+KCk7XG4gIHByaXZhdGUgdGVtcGxhdGVzUmVmc0JlZm9yZSA9IG5ldyBNYXA8c3RyaW5nLCBUW10+KCk7XG4gIHByaXZhdGUgdGVtcGxhdGVzUmVmc0FmdGVyID0gbmV3IE1hcDxzdHJpbmcsIFRbXT4oKTtcblxuICAvKipcbiAgICogQWRkcyBhIHRlbXBsYXRlIG9yIENvbXBvbmVudEZhY3RvcnksIHNvIHRoYXQgVUkgb3V0bGV0cyBjYW4gYmUgcmVwbGFjZWQgZHluYW1pY2FsbHkuXG4gICAqIFRoZSBVSSBwb3NpdGlvbiB3aGVyZSB0aGlzIHRlbXBsYXRlIG9yIENvbXBvbmVudEZhY3RvcnkgaXMgaW5zZXJ0ZWQgaXMgZ2l2ZW4gYnkgYVxuICAgKiBzdHJpbmcgcmVmZXJlbmNlIChjYWxsZWQgYG91dGxldGApIGFuZCBvcHRpb25hbCBgT3V0bGV0UG9zaXRpb25gLiBUaGUgYE91dGxldFBvc2l0aW9uYFxuICAgKiBpcyBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyLCBvciByZXBsYWNlcyB0aGUgZW50aXJlIFVJLlxuICAgKlxuICAgKiBAcGFyYW0gb3V0bGV0IHRoZSBVSSBsb2NhdGlvbiByZXByZXNlbnRlZCBieSBhIHN0cmluZ1xuICAgKiBAcGFyYW0gdGVtcGxhdGUgdGhlIGBUZW1wbGF0ZVJlZmAgdGhhdCB3aWxsIGJlIHVzZWQgdG8gaW5zZXJ0IFVJXG4gICAqIEBwYXJhbSBwb3NpdGlvbiB0aGUgYE91dGxldFBvc2l0aW9uYCBpbiB0aGUgVUlcbiAgICovXG4gIGFkZChvdXRsZXQ6IHN0cmluZywgdGVtcGxhdGU6IFQsIHBvc2l0aW9uPzogT3V0bGV0UG9zaXRpb24pOiB2b2lkO1xuICAvKipcbiAgICogQHBhcmFtIGZhY3RvcnkgVGhlIGBDb21wb25lbnRGYWN0b3J5YCB0aGF0IHdpbGwgYmUgZHluYW1pY2FsbHkgYWRkZWQgdG8gdGhlIG91dGxldCBVSVxuICAgKi9cbiAgYWRkKFxuICAgIG91dGxldDogc3RyaW5nLFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdW5pZmllZC1zaWduYXR1cmVzXG4gICAgZmFjdG9yeTogVCxcbiAgICBwb3NpdGlvbj86IE91dGxldFBvc2l0aW9uXG4gICk6IHZvaWQ7XG4gIC8qKlxuICAgKiBAcGFyYW0gdGVtcGxhdGVPckZhY3RvcnkgQSBgQ29tcG9uZW50RmFjdG9yeWAgdGhhdCBpbnNlcnRzIGEgY29tcG9uZW50IGR5bmFtaWNhbGx5LlxuICAgKi9cbiAgYWRkKFxuICAgIG91dGxldDogc3RyaW5nLFxuICAgIHRlbXBsYXRlT3JGYWN0b3J5OiBULFxuICAgIHBvc2l0aW9uOiBPdXRsZXRQb3NpdGlvbiA9IE91dGxldFBvc2l0aW9uLlJFUExBQ0VcbiAgKTogdm9pZCB7XG4gICAgaWYgKHBvc2l0aW9uID09PSBPdXRsZXRQb3NpdGlvbi5CRUZPUkUpIHtcbiAgICAgIHRoaXMuc3RvcmUodGhpcy50ZW1wbGF0ZXNSZWZzQmVmb3JlLCBvdXRsZXQsIHRlbXBsYXRlT3JGYWN0b3J5KTtcbiAgICB9XG4gICAgaWYgKHBvc2l0aW9uID09PSBPdXRsZXRQb3NpdGlvbi5SRVBMQUNFKSB7XG4gICAgICB0aGlzLnN0b3JlKHRoaXMudGVtcGxhdGVzUmVmcywgb3V0bGV0LCB0ZW1wbGF0ZU9yRmFjdG9yeSk7XG4gICAgfVxuICAgIGlmIChwb3NpdGlvbiA9PT0gT3V0bGV0UG9zaXRpb24uQUZURVIpIHtcbiAgICAgIHRoaXMuc3RvcmUodGhpcy50ZW1wbGF0ZXNSZWZzQWZ0ZXIsIG91dGxldCwgdGVtcGxhdGVPckZhY3RvcnkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBSZXR1cm5zIGEgc2luZ2xlIG9iamVjdCBvciBtdWx0aXBsZSBvYmplY3RzIGZvciB0aGUgZ2l2ZW4gb3V0bGV0IHJlZmVyZW5jZSxcbiAgICogZGVwZW5kaW5nIG9uIHRoZSBgc3RhY2tlZGAgYXJndW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSBvdXRsZXQgVGhlIG91dGxldCByZWZlcmVuY2VcbiAgICogQHBhcmFtIHBvc2l0aW9uIHRoZSBvdXRsZXQgcG9zaXRpb24sIGBPdXRsZXRQb3NpdGlvbi5iZWZvcmVgLCBgT3V0bGV0UG9zaXRpb24uQUZURVJgIG9yIGBPdXRsZXRQb3NpdGlvbi5SRVBMQUNFYFxuICAgKiBAcGFyYW0gc3RhY2tlZCBJbmRpY2F0ZXMgd2hldGhlciBhbiBhcnJheSBvZiBvdXRsZXQgY29tcG9uZW50cyBpcyByZXR1cm5lZFxuICAgKi9cbiAgZ2V0KFxuICAgIG91dGxldDogc3RyaW5nLFxuICAgIHBvc2l0aW9uOiBPdXRsZXRQb3NpdGlvbiA9IE91dGxldFBvc2l0aW9uLlJFUExBQ0UsXG4gICAgc3RhY2tlZCA9IEFWT0lEX1NUQUNLRURfT1VUTEVUU1xuICApOiBUW10gfCBUIHtcbiAgICBsZXQgdGVtcGxhdGVSZWY6IFRbXTtcbiAgICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgICBjYXNlIE91dGxldFBvc2l0aW9uLkJFRk9SRTpcbiAgICAgICAgdGVtcGxhdGVSZWYgPSB0aGlzLnRlbXBsYXRlc1JlZnNCZWZvcmUuZ2V0KG91dGxldCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBPdXRsZXRQb3NpdGlvbi5BRlRFUjpcbiAgICAgICAgdGVtcGxhdGVSZWYgPSB0aGlzLnRlbXBsYXRlc1JlZnNBZnRlci5nZXQob3V0bGV0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0ZW1wbGF0ZVJlZiA9IHRoaXMudGVtcGxhdGVzUmVmcy5nZXQob3V0bGV0KTtcbiAgICB9XG4gICAgaWYgKHRlbXBsYXRlUmVmICYmICFzdGFja2VkKSB7XG4gICAgICByZXR1cm4gdGVtcGxhdGVSZWZbMF07XG4gICAgfVxuICAgIHJldHVybiB0ZW1wbGF0ZVJlZjtcbiAgfVxuXG4gIHByaXZhdGUgc3RvcmUoc3RvcmU6IE1hcDxzdHJpbmcsIFRbXT4sIG91dGxldDogc3RyaW5nLCB2YWx1ZTogVCkge1xuICAgIGNvbnN0IGV4aXN0aW5nID0gc3RvcmUuZ2V0KG91dGxldCkgfHwgW107XG4gICAgY29uc3QgbmV3VmFsdWU6IFRbXSA9IGV4aXN0aW5nLmNvbmNhdChbdmFsdWVdKTtcbiAgICBzdG9yZS5zZXQob3V0bGV0LCBuZXdWYWx1ZSk7XG4gIH1cbn1cbiJdfQ==