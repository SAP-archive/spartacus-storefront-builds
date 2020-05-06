import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as i0 from "@angular/core";
let OutletRendererService = class OutletRendererService {
    constructor() {
        this.outletRefs = new BehaviorSubject(new Map());
    }
    /**
     * Dynamically render the templates in the specified array
     *
     * @param outlet
     */
    render(outlet) {
        if (this.outletRefs.value.size !== 0) {
            this.outletRefs.value.get(outlet).render();
        }
    }
    /**
     * Register outlet to be available to render dynamically
     *
     * @param cxOutlet
     * @param context
     */
    register(cxOutlet, context) {
        this.outletRefs.next(this.outletRefs.value.set(cxOutlet, context));
    }
    /**
     * Returns map of outlets
     *
     */
    getOutletRef(outlet) {
        return this.outletRefs.asObservable().pipe(map((val) => val.get(outlet)), filter((val) => Boolean(val)));
    }
};
OutletRendererService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OutletRendererService_Factory() { return new OutletRendererService(); }, token: OutletRendererService, providedIn: "root" });
OutletRendererService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], OutletRendererService);
export { OutletRendererService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LXJlbmRlcmVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL291dGxldC9vdXRsZXQtcmVuZGVyZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBTTdDLElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXFCO0lBQWxDO1FBQ1UsZUFBVSxHQUFHLElBQUksZUFBZSxDQUFDLElBQUksR0FBRyxFQUEyQixDQUFDLENBQUM7S0FnQzlFO0lBOUJDOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsTUFBYztRQUNuQixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQzVDO0lBQ0gsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsUUFBUSxDQUFDLFFBQWdCLEVBQUUsT0FBd0I7UUFDakQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFDRDs7O09BR0c7SUFDSCxZQUFZLENBQUMsTUFBYztRQUN6QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUN4QyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFDN0IsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FDOUIsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBOztBQWpDWSxxQkFBcUI7SUFIakMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLHFCQUFxQixDQWlDakM7U0FqQ1kscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE91dGxldERpcmVjdGl2ZSB9IGZyb20gJy4vb3V0bGV0LmRpcmVjdGl2ZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBPdXRsZXRSZW5kZXJlclNlcnZpY2Uge1xuICBwcml2YXRlIG91dGxldFJlZnMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG5ldyBNYXA8c3RyaW5nLCBPdXRsZXREaXJlY3RpdmU+KCkpO1xuXG4gIC8qKlxuICAgKiBEeW5hbWljYWxseSByZW5kZXIgdGhlIHRlbXBsYXRlcyBpbiB0aGUgc3BlY2lmaWVkIGFycmF5XG4gICAqXG4gICAqIEBwYXJhbSBvdXRsZXRcbiAgICovXG4gIHJlbmRlcihvdXRsZXQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLm91dGxldFJlZnMudmFsdWUuc2l6ZSAhPT0gMCkge1xuICAgICAgdGhpcy5vdXRsZXRSZWZzLnZhbHVlLmdldChvdXRsZXQpLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBvdXRsZXQgdG8gYmUgYXZhaWxhYmxlIHRvIHJlbmRlciBkeW5hbWljYWxseVxuICAgKlxuICAgKiBAcGFyYW0gY3hPdXRsZXRcbiAgICogQHBhcmFtIGNvbnRleHRcbiAgICovXG4gIHJlZ2lzdGVyKGN4T3V0bGV0OiBzdHJpbmcsIGNvbnRleHQ6IE91dGxldERpcmVjdGl2ZSk6IHZvaWQge1xuICAgIHRoaXMub3V0bGV0UmVmcy5uZXh0KHRoaXMub3V0bGV0UmVmcy52YWx1ZS5zZXQoY3hPdXRsZXQsIGNvbnRleHQpKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBtYXAgb2Ygb3V0bGV0c1xuICAgKlxuICAgKi9cbiAgZ2V0T3V0bGV0UmVmKG91dGxldDogc3RyaW5nKTogT2JzZXJ2YWJsZTxPdXRsZXREaXJlY3RpdmU+IHtcbiAgICByZXR1cm4gdGhpcy5vdXRsZXRSZWZzLmFzT2JzZXJ2YWJsZSgpLnBpcGUoXG4gICAgICBtYXAoKHZhbCkgPT4gdmFsLmdldChvdXRsZXQpKSxcbiAgICAgIGZpbHRlcigodmFsKSA9PiBCb29sZWFuKHZhbCkpXG4gICAgKTtcbiAgfVxufVxuIl19