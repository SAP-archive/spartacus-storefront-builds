/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ElementRef, Input, Directive } from '@angular/core';
import { OutletStyleService } from '../outlet-style.service';
export class StyleRefDirective {
    /**
     * @param {?} element
     * @param {?} cssOutletService
     */
    constructor(element, cssOutletService) {
        this.element = element;
        this.cssOutletService = cssOutletService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.cssOutletService.add(this.cxCssRef, this.element);
    }
}
StyleRefDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cxCssRef]',
            },] }
];
/** @nocollapse */
StyleRefDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: OutletStyleService }
];
StyleRefDirective.propDecorators = {
    cxCssRef: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StyleRefDirective.prototype.cxCssRef;
    /**
     * @type {?}
     * @private
     */
    StyleRefDirective.prototype.element;
    /**
     * @type {?}
     * @private
     */
    StyleRefDirective.prototype.cssOutletService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUtcmVmLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvb3V0bGV0L3N0eWxlLXJlZi9zdHlsZS1yZWYuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFLN0QsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7SUFHNUIsWUFDVSxPQUFtQixFQUNuQixnQkFBb0M7UUFEcEMsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQW9CO0lBQzNDLENBQUM7Ozs7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7WUFiRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7YUFDdkI7Ozs7WUFOUSxVQUFVO1lBRVYsa0JBQWtCOzs7dUJBTXhCLEtBQUs7Ozs7SUFBTixxQ0FBMEI7Ozs7O0lBR3hCLG9DQUEyQjs7Ozs7SUFDM0IsNkNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgT25Jbml0LCBJbnB1dCwgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE91dGxldFN0eWxlU2VydmljZSB9IGZyb20gJy4uL291dGxldC1zdHlsZS5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N4Q3NzUmVmXScsXG59KVxuZXhwb3J0IGNsYXNzIFN0eWxlUmVmRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgY3hDc3NSZWY6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjc3NPdXRsZXRTZXJ2aWNlOiBPdXRsZXRTdHlsZVNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY3NzT3V0bGV0U2VydmljZS5hZGQodGhpcy5jeENzc1JlZiwgdGhpcy5lbGVtZW50KTtcbiAgfVxufVxuIl19