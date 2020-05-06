import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as i0 from "@angular/core";
var OutletRendererService = /** @class */ (function () {
    function OutletRendererService() {
        this.outletRefs = new BehaviorSubject(new Map());
    }
    /**
     * Dynamically render the templates in the specified array
     *
     * @param outlet
     */
    OutletRendererService.prototype.render = function (outlet) {
        if (this.outletRefs.value.size !== 0) {
            this.outletRefs.value.get(outlet).render();
        }
    };
    /**
     * Register outlet to be available to render dynamically
     *
     * @param cxOutlet
     * @param context
     */
    OutletRendererService.prototype.register = function (cxOutlet, context) {
        this.outletRefs.next(this.outletRefs.value.set(cxOutlet, context));
    };
    /**
     * Returns map of outlets
     *
     */
    OutletRendererService.prototype.getOutletRef = function (outlet) {
        return this.outletRefs.asObservable().pipe(map(function (val) { return val.get(outlet); }), filter(function (val) { return Boolean(val); }));
    };
    OutletRendererService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OutletRendererService_Factory() { return new OutletRendererService(); }, token: OutletRendererService, providedIn: "root" });
    OutletRendererService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], OutletRendererService);
    return OutletRendererService;
}());
export { OutletRendererService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LXJlbmRlcmVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL291dGxldC9vdXRsZXQtcmVuZGVyZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBTTdDO0lBQUE7UUFDVSxlQUFVLEdBQUcsSUFBSSxlQUFlLENBQUMsSUFBSSxHQUFHLEVBQTJCLENBQUMsQ0FBQztLQWdDOUU7SUE5QkM7Ozs7T0FJRztJQUNILHNDQUFNLEdBQU4sVUFBTyxNQUFjO1FBQ25CLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDNUM7SUFDSCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCx3Q0FBUSxHQUFSLFVBQVMsUUFBZ0IsRUFBRSxPQUF3QjtRQUNqRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUNEOzs7T0FHRztJQUNILDRDQUFZLEdBQVosVUFBYSxNQUFjO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQ3hDLEdBQUcsQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQWYsQ0FBZSxDQUFDLEVBQzdCLE1BQU0sQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBWixDQUFZLENBQUMsQ0FDOUIsQ0FBQztJQUNKLENBQUM7O0lBaENVLHFCQUFxQjtRQUhqQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1cscUJBQXFCLENBaUNqQztnQ0F6Q0Q7Q0F5Q0MsQUFqQ0QsSUFpQ0M7U0FqQ1kscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE91dGxldERpcmVjdGl2ZSB9IGZyb20gJy4vb3V0bGV0LmRpcmVjdGl2ZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBPdXRsZXRSZW5kZXJlclNlcnZpY2Uge1xuICBwcml2YXRlIG91dGxldFJlZnMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG5ldyBNYXA8c3RyaW5nLCBPdXRsZXREaXJlY3RpdmU+KCkpO1xuXG4gIC8qKlxuICAgKiBEeW5hbWljYWxseSByZW5kZXIgdGhlIHRlbXBsYXRlcyBpbiB0aGUgc3BlY2lmaWVkIGFycmF5XG4gICAqXG4gICAqIEBwYXJhbSBvdXRsZXRcbiAgICovXG4gIHJlbmRlcihvdXRsZXQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLm91dGxldFJlZnMudmFsdWUuc2l6ZSAhPT0gMCkge1xuICAgICAgdGhpcy5vdXRsZXRSZWZzLnZhbHVlLmdldChvdXRsZXQpLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBvdXRsZXQgdG8gYmUgYXZhaWxhYmxlIHRvIHJlbmRlciBkeW5hbWljYWxseVxuICAgKlxuICAgKiBAcGFyYW0gY3hPdXRsZXRcbiAgICogQHBhcmFtIGNvbnRleHRcbiAgICovXG4gIHJlZ2lzdGVyKGN4T3V0bGV0OiBzdHJpbmcsIGNvbnRleHQ6IE91dGxldERpcmVjdGl2ZSk6IHZvaWQge1xuICAgIHRoaXMub3V0bGV0UmVmcy5uZXh0KHRoaXMub3V0bGV0UmVmcy52YWx1ZS5zZXQoY3hPdXRsZXQsIGNvbnRleHQpKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBtYXAgb2Ygb3V0bGV0c1xuICAgKlxuICAgKi9cbiAgZ2V0T3V0bGV0UmVmKG91dGxldDogc3RyaW5nKTogT2JzZXJ2YWJsZTxPdXRsZXREaXJlY3RpdmU+IHtcbiAgICByZXR1cm4gdGhpcy5vdXRsZXRSZWZzLmFzT2JzZXJ2YWJsZSgpLnBpcGUoXG4gICAgICBtYXAoKHZhbCkgPT4gdmFsLmdldChvdXRsZXQpKSxcbiAgICAgIGZpbHRlcigodmFsKSA9PiBCb29sZWFuKHZhbCkpXG4gICAgKTtcbiAgfVxufVxuIl19