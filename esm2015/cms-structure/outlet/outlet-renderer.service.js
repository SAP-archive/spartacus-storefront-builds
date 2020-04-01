import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
let OutletRendererService = class OutletRendererService {
    constructor() {
        this.outletRefs = new Map();
    }
    render(outlet) {
        if (this.outletRefs.size !== 0) {
            this.outletRefs.get(outlet).render();
        }
    }
    register(cxOutlet, context) {
        this.outletRefs.set(cxOutlet, context);
    }
};
OutletRendererService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OutletRendererService_Factory() { return new OutletRendererService(); }, token: OutletRendererService, providedIn: "root" });
OutletRendererService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], OutletRendererService);
export { OutletRendererService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LXJlbmRlcmVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL291dGxldC9vdXRsZXQtcmVuZGVyZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNM0MsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBcUI7SUFBbEM7UUFDVSxlQUFVLEdBQUcsSUFBSSxHQUFHLEVBQTJCLENBQUM7S0FXekQ7SUFUQyxNQUFNLENBQUMsTUFBYztRQUNuQixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRTtZQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUN0QztJQUNILENBQUM7SUFFRCxRQUFRLENBQUMsUUFBZ0IsRUFBRSxPQUF3QjtRQUNqRCxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNGLENBQUE7O0FBWlkscUJBQXFCO0lBSGpDLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxxQkFBcUIsQ0FZakM7U0FaWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPdXRsZXREaXJlY3RpdmUgfSBmcm9tICcuL291dGxldC5kaXJlY3RpdmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgT3V0bGV0UmVuZGVyZXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBvdXRsZXRSZWZzID0gbmV3IE1hcDxzdHJpbmcsIE91dGxldERpcmVjdGl2ZT4oKTtcblxuICByZW5kZXIob3V0bGV0OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vdXRsZXRSZWZzLnNpemUgIT09IDApIHtcbiAgICAgIHRoaXMub3V0bGV0UmVmcy5nZXQob3V0bGV0KS5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3RlcihjeE91dGxldDogc3RyaW5nLCBjb250ZXh0OiBPdXRsZXREaXJlY3RpdmUpOiB2b2lkIHtcbiAgICB0aGlzLm91dGxldFJlZnMuc2V0KGN4T3V0bGV0LCBjb250ZXh0KTtcbiAgfVxufVxuIl19