import { __decorate } from "tslib";
import { Directive, Input, OnDestroy, OnInit, TemplateRef, } from '@angular/core';
import { FeatureConfigService } from '@spartacus/core';
import { OutletService } from '../outlet.service';
let OutletRefDirective = class OutletRefDirective {
    constructor(tpl, outletService, features) {
        this.tpl = tpl;
        this.outletService = outletService;
        this.features = features;
    }
    ngOnInit() {
        this.outletService.add(this.cxOutletRef, this.tpl, this.cxOutletPos);
    }
    ngOnDestroy() {
        var _a;
        if ((_a = this.features) === null || _a === void 0 ? void 0 : _a.isLevel('2.1')) {
            this.outletService.remove(this.cxOutletRef, this.cxOutletPos, this.tpl);
        }
    }
};
OutletRefDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: OutletService },
    { type: FeatureConfigService }
];
__decorate([
    Input()
], OutletRefDirective.prototype, "cxOutletRef", void 0);
__decorate([
    Input()
], OutletRefDirective.prototype, "cxOutletPos", void 0);
OutletRefDirective = __decorate([
    Directive({
        selector: '[cxOutletRef]',
    })
], OutletRefDirective);
export { OutletRefDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LXJlZi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL291dGxldC9vdXRsZXQtcmVmL291dGxldC1yZWYuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFLbEQsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUFnQjdCLFlBQ1UsR0FBcUIsRUFDckIsYUFBNEIsRUFDNUIsUUFBK0I7UUFGL0IsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFDckIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsYUFBUSxHQUFSLFFBQVEsQ0FBdUI7SUFDdEMsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxXQUFXOztRQUNULFVBQUksSUFBSSxDQUFDLFFBQVEsMENBQUUsT0FBTyxDQUFDLEtBQUssR0FBRztZQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3pFO0lBQ0gsQ0FBQztDQUNGLENBQUE7O1lBZGdCLFdBQVc7WUFDRCxhQUFhO1lBQ2pCLG9CQUFvQjs7QUFqQnpDO0lBREMsS0FBSyxFQUFFO3VEQUNZO0FBRXBCO0lBREMsS0FBSyxFQUFFO3VEQUNvQjtBQUpqQixrQkFBa0I7SUFIOUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGVBQWU7S0FDMUIsQ0FBQztHQUNXLGtCQUFrQixDQStCOUI7U0EvQlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFRlbXBsYXRlUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZlYXR1cmVDb25maWdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE91dGxldFBvc2l0aW9uIH0gZnJvbSAnLi4vb3V0bGV0Lm1vZGVsJztcbmltcG9ydCB7IE91dGxldFNlcnZpY2UgfSBmcm9tICcuLi9vdXRsZXQuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjeE91dGxldFJlZl0nLFxufSlcbmV4cG9ydCBjbGFzcyBPdXRsZXRSZWZEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpXG4gIGN4T3V0bGV0UmVmOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGN4T3V0bGV0UG9zOiBPdXRsZXRQb3NpdGlvbjtcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgMi4xLCBzZWUgIzgyMDFcbiAgICovXG4gIGNvbnN0cnVjdG9yKHRwbDogVGVtcGxhdGVSZWY8YW55Piwgb3V0bGV0U2VydmljZTogT3V0bGV0U2VydmljZSk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHRwbDogVGVtcGxhdGVSZWY8YW55PixcbiAgICBvdXRsZXRTZXJ2aWNlOiBPdXRsZXRTZXJ2aWNlLFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdW5pZmllZC1zaWduYXR1cmVzXG4gICAgZmVhdHVyZXM6IEZlYXR1cmVDb25maWdTZXJ2aWNlXG4gICk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdHBsOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgIHByaXZhdGUgb3V0bGV0U2VydmljZTogT3V0bGV0U2VydmljZSxcbiAgICBwcml2YXRlIGZlYXR1cmVzPzogRmVhdHVyZUNvbmZpZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMub3V0bGV0U2VydmljZS5hZGQodGhpcy5jeE91dGxldFJlZiwgdGhpcy50cGwsIHRoaXMuY3hPdXRsZXRQb3MpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuZmVhdHVyZXM/LmlzTGV2ZWwoJzIuMScpKSB7XG4gICAgICB0aGlzLm91dGxldFNlcnZpY2UucmVtb3ZlKHRoaXMuY3hPdXRsZXRSZWYsIHRoaXMuY3hPdXRsZXRQb3MsIHRoaXMudHBsKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==