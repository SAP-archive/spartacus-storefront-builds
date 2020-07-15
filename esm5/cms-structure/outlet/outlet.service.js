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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL291dGxldC9vdXRsZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBS3ZFO0lBT0UsdUJBQXNCLFFBQStCOztRQUEvQixhQUFRLEdBQVIsUUFBUSxDQUF1QjtRQUU3QyxrQkFBYTtZQUNuQixHQUFDLGNBQWMsQ0FBQyxNQUFNLElBQUcsSUFBSSxHQUFHLEVBQWU7WUFDL0MsR0FBQyxjQUFjLENBQUMsT0FBTyxJQUFHLElBQUksR0FBRyxFQUFlO1lBQ2hELEdBQUMsY0FBYyxDQUFDLEtBQUssSUFBRyxJQUFJLEdBQUcsRUFBZTtnQkFDOUM7SUFOc0QsQ0FBQztJQTRCekQ7O09BRUc7SUFDSCwyQkFBRyxHQUFILFVBQ0UsTUFBYyxFQUNkLGlCQUFvQixFQUNwQixRQUFpRDtRQUFqRCx5QkFBQSxFQUFBLFdBQTJCLGNBQWMsQ0FBQyxPQUFPO1FBRWpELElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0MsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN6QyxJQUFNLFFBQVEsR0FBUSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1lBQzNELEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0gsMkJBQUcsR0FBSCxVQUNFLE1BQWMsRUFDZCxRQUFpRCxFQUNqRCxPQUErQjtRQUQvQix5QkFBQSxFQUFBLFdBQTJCLGNBQWMsQ0FBQyxPQUFPO1FBQ2pELHdCQUFBLEVBQUEsK0JBQStCO1FBRS9CLElBQU0sS0FBSyxHQUNULElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1lBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTdDLElBQU0sV0FBVyxHQUFRLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0MsSUFBSSxXQUFXLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDM0IsT0FBTyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkI7UUFDRCxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBRUQsOEJBQU0sR0FBTixVQUNFLE1BQWMsRUFDZCxRQUFpRCxFQUNqRCxLQUFTO1FBRFQseUJBQUEsRUFBQSxXQUEyQixjQUFjLENBQUMsT0FBTztRQUdqRCxJQUFNLEtBQUssR0FDVCxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztZQUM1QixJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU3QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRVMsd0NBQWdCLEdBQTFCLFVBQ0UsS0FBdUIsRUFDdkIsTUFBYyxFQUNkLEtBQVM7O1FBRVQsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQy9CLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDdEI7YUFBTSxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3JDLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFakMsVUFBSSxJQUFJLENBQUMsUUFBUSwwQ0FBRSxPQUFPLENBQUMsS0FBSyxHQUFHO2dCQUNqQyxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEdBQUcsS0FBSyxLQUFLLEVBQWIsQ0FBYSxDQUFDLENBQUM7YUFDcEQ7aUJBQU07Z0JBQ0wsbUNBQW1DO2dCQUNuQyxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEdBQUcsS0FBSyxLQUFLLEVBQWIsQ0FBYSxDQUFDLENBQUM7YUFDcEQ7WUFFRCxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztTQUM3QjtJQUNILENBQUM7O2dCQXBHZ0Msb0JBQW9COzs7SUFQMUMsYUFBYTtRQUh6QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csYUFBYSxDQTRHekI7d0JBbkhEO0NBbUhDLEFBNUdELElBNEdDO1NBNUdZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmVhdHVyZUNvbmZpZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQVZPSURfU1RBQ0tFRF9PVVRMRVRTLCBPdXRsZXRQb3NpdGlvbiB9IGZyb20gJy4vb3V0bGV0Lm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE91dGxldFNlcnZpY2U8VCA9IFRlbXBsYXRlUmVmPGFueT4+IHtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIDIuMSwgc2VlICM4MTE2XG4gICAqL1xuICBjb25zdHJ1Y3RvcigpO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVuaWZpZWQtc2lnbmF0dXJlc1xuICBjb25zdHJ1Y3RvcihmZWF0dXJlczogRmVhdHVyZUNvbmZpZ1NlcnZpY2UpO1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZmVhdHVyZXM/OiBGZWF0dXJlQ29uZmlnU2VydmljZSkge31cblxuICBwcml2YXRlIHRlbXBsYXRlc1JlZnMgPSB7XG4gICAgW091dGxldFBvc2l0aW9uLkJFRk9SRV06IG5ldyBNYXA8c3RyaW5nLCBUW10+KCksXG4gICAgW091dGxldFBvc2l0aW9uLlJFUExBQ0VdOiBuZXcgTWFwPHN0cmluZywgVFtdPigpLFxuICAgIFtPdXRsZXRQb3NpdGlvbi5BRlRFUl06IG5ldyBNYXA8c3RyaW5nLCBUW10+KCksXG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZHMgYSB0ZW1wbGF0ZSBvciBDb21wb25lbnRGYWN0b3J5LCBzbyB0aGF0IFVJIG91dGxldHMgY2FuIGJlIHJlcGxhY2VkIGR5bmFtaWNhbGx5LlxuICAgKiBUaGUgVUkgcG9zaXRpb24gd2hlcmUgdGhpcyB0ZW1wbGF0ZSBvciBDb21wb25lbnRGYWN0b3J5IGlzIGluc2VydGVkIGlzIGdpdmVuIGJ5IGFcbiAgICogc3RyaW5nIHJlZmVyZW5jZSAoY2FsbGVkIGBvdXRsZXRgKSBhbmQgb3B0aW9uYWwgYE91dGxldFBvc2l0aW9uYC4gVGhlIGBPdXRsZXRQb3NpdGlvbmBcbiAgICogaXMgZWl0aGVyIGJlZm9yZSBvciBhZnRlciwgb3IgcmVwbGFjZXMgdGhlIGVudGlyZSBVSS5cbiAgICpcbiAgICogQHBhcmFtIG91dGxldCB0aGUgVUkgbG9jYXRpb24gcmVwcmVzZW50ZWQgYnkgYSBzdHJpbmdcbiAgICogQHBhcmFtIHRlbXBsYXRlIHRoZSBgVGVtcGxhdGVSZWZgIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGluc2VydCBVSVxuICAgKiBAcGFyYW0gcG9zaXRpb24gdGhlIGBPdXRsZXRQb3NpdGlvbmAgaW4gdGhlIFVJXG4gICAqL1xuICBhZGQob3V0bGV0OiBzdHJpbmcsIHRlbXBsYXRlOiBULCBwb3NpdGlvbj86IE91dGxldFBvc2l0aW9uKTogdm9pZDtcbiAgLyoqXG4gICAqIEBwYXJhbSBmYWN0b3J5IFRoZSBgQ29tcG9uZW50RmFjdG9yeWAgdGhhdCB3aWxsIGJlIGR5bmFtaWNhbGx5IGFkZGVkIHRvIHRoZSBvdXRsZXQgVUlcbiAgICovXG4gIGFkZChcbiAgICBvdXRsZXQ6IHN0cmluZyxcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVuaWZpZWQtc2lnbmF0dXJlc1xuICAgIGZhY3Rvcnk6IFQsXG4gICAgcG9zaXRpb24/OiBPdXRsZXRQb3NpdGlvblxuICApOiB2b2lkO1xuICAvKipcbiAgICogQHBhcmFtIHRlbXBsYXRlT3JGYWN0b3J5IEEgYENvbXBvbmVudEZhY3RvcnlgIHRoYXQgaW5zZXJ0cyBhIGNvbXBvbmVudCBkeW5hbWljYWxseS5cbiAgICovXG4gIGFkZChcbiAgICBvdXRsZXQ6IHN0cmluZyxcbiAgICB0ZW1wbGF0ZU9yRmFjdG9yeTogVCxcbiAgICBwb3NpdGlvbjogT3V0bGV0UG9zaXRpb24gPSBPdXRsZXRQb3NpdGlvbi5SRVBMQUNFXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IHN0b3JlID0gdGhpcy50ZW1wbGF0ZXNSZWZzW3Bvc2l0aW9uXTtcbiAgICBpZiAoc3RvcmUpIHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nID0gc3RvcmUuZ2V0KG91dGxldCkgfHwgW107XG4gICAgICBjb25zdCBuZXdWYWx1ZTogVFtdID0gZXhpc3RpbmcuY29uY2F0KFt0ZW1wbGF0ZU9yRmFjdG9yeV0pO1xuICAgICAgc3RvcmUuc2V0KG91dGxldCwgbmV3VmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBSZXR1cm5zIGEgc2luZ2xlIG9iamVjdCBvciBtdWx0aXBsZSBvYmplY3RzIGZvciB0aGUgZ2l2ZW4gb3V0bGV0IHJlZmVyZW5jZSxcbiAgICogZGVwZW5kaW5nIG9uIHRoZSBgc3RhY2tlZGAgYXJndW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSBvdXRsZXQgVGhlIG91dGxldCByZWZlcmVuY2VcbiAgICogQHBhcmFtIHBvc2l0aW9uIHRoZSBvdXRsZXQgcG9zaXRpb24sIGBPdXRsZXRQb3NpdGlvbi5iZWZvcmVgLCBgT3V0bGV0UG9zaXRpb24uQUZURVJgIG9yIGBPdXRsZXRQb3NpdGlvbi5SRVBMQUNFYFxuICAgKiBAcGFyYW0gc3RhY2tlZCBJbmRpY2F0ZXMgd2hldGhlciBhbiBhcnJheSBvZiBvdXRsZXQgY29tcG9uZW50cyBpcyByZXR1cm5lZFxuICAgKi9cbiAgZ2V0KFxuICAgIG91dGxldDogc3RyaW5nLFxuICAgIHBvc2l0aW9uOiBPdXRsZXRQb3NpdGlvbiA9IE91dGxldFBvc2l0aW9uLlJFUExBQ0UsXG4gICAgc3RhY2tlZCA9IEFWT0lEX1NUQUNLRURfT1VUTEVUU1xuICApOiBUW10gfCBUIHtcbiAgICBjb25zdCBzdG9yZSA9XG4gICAgICB0aGlzLnRlbXBsYXRlc1JlZnNbcG9zaXRpb25dIHx8XG4gICAgICB0aGlzLnRlbXBsYXRlc1JlZnNbT3V0bGV0UG9zaXRpb24uUkVQTEFDRV07XG5cbiAgICBjb25zdCB0ZW1wbGF0ZVJlZjogVFtdID0gc3RvcmUuZ2V0KG91dGxldCk7XG4gICAgaWYgKHRlbXBsYXRlUmVmICYmICFzdGFja2VkKSB7XG4gICAgICByZXR1cm4gdGVtcGxhdGVSZWZbMF07XG4gICAgfVxuICAgIHJldHVybiB0ZW1wbGF0ZVJlZjtcbiAgfVxuXG4gIHJlbW92ZShcbiAgICBvdXRsZXQ6IHN0cmluZyxcbiAgICBwb3NpdGlvbjogT3V0bGV0UG9zaXRpb24gPSBPdXRsZXRQb3NpdGlvbi5SRVBMQUNFLFxuICAgIHZhbHVlPzogVFxuICApOiB2b2lkIHtcbiAgICBjb25zdCBzdG9yZSA9XG4gICAgICB0aGlzLnRlbXBsYXRlc1JlZnNbcG9zaXRpb25dIHx8XG4gICAgICB0aGlzLnRlbXBsYXRlc1JlZnNbT3V0bGV0UG9zaXRpb24uUkVQTEFDRV07XG5cbiAgICB0aGlzLnJlbW92ZVZhbHVlT3JBbGwoc3RvcmUsIG91dGxldCwgdmFsdWUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbW92ZVZhbHVlT3JBbGwoXG4gICAgc3RvcmU6IE1hcDxzdHJpbmcsIFRbXT4sXG4gICAgb3V0bGV0OiBzdHJpbmcsXG4gICAgdmFsdWU/OiBUXG4gICk6IHZvaWQge1xuICAgIGlmICghdmFsdWUgJiYgc3RvcmUuaGFzKG91dGxldCkpIHtcbiAgICAgIHN0b3JlLmRlbGV0ZShvdXRsZXQpO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgJiYgc3RvcmUuaGFzKG91dGxldCkpIHtcbiAgICAgIGxldCBleGlzdGluZyA9IHN0b3JlLmdldChvdXRsZXQpO1xuXG4gICAgICBpZiAodGhpcy5mZWF0dXJlcz8uaXNMZXZlbCgnMi4xJykpIHtcbiAgICAgICAgZXhpc3RpbmcgPSBleGlzdGluZy5maWx0ZXIoKHZhbCkgPT4gdmFsICE9PSB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBkZXByZWNhdGVkIHNpbmNlIDIuMSwgc2VlICM4MTE2OlxuICAgICAgICBleGlzdGluZyA9IGV4aXN0aW5nLmZpbHRlcigodmFsKSA9PiB2YWwgPT09IHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgc3RvcmUuc2V0KG91dGxldCwgZXhpc3RpbmcpO1xuICAgIH1cbiAgfVxufVxuIl19