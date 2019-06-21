/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, TemplateRef, ViewContainerRef, } from '@angular/core';
import { OutletPosition } from './outlet.model';
import { OutletService } from './outlet.service';
export class OutletDirective {
    /**
     * @param {?} vcr
     * @param {?} templateRef
     * @param {?} outletService
     */
    constructor(vcr, templateRef, outletService) {
        this.vcr = vcr;
        this.templateRef = templateRef;
        this.outletService = outletService;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set cxOutletContext(value) {
        this._context = value;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const nodes = [];
        nodes.push(...this.renderTemplate(OutletPosition.BEFORE));
        nodes.push(...this.renderTemplate(OutletPosition.REPLACE, true));
        nodes.push(...this.renderTemplate(OutletPosition.AFTER));
    }
    /**
     * @private
     * @param {?} position
     * @param {?=} replace
     * @return {?}
     */
    renderTemplate(position, replace = false) {
        /** @type {?} */
        const nodes = [];
        /** @type {?} */
        const template = this.outletService.get(this.cxOutlet, position);
        if (template || replace) {
            /** @type {?} */
            const ref = this.vcr.createEmbeddedView(template || this.templateRef, {
                $implicit: this._context,
            });
            nodes.push(...ref.rootNodes);
        }
        return nodes;
    }
}
OutletDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cxOutlet]',
            },] }
];
/** @nocollapse */
OutletDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: TemplateRef },
    { type: OutletService }
];
OutletDirective.propDecorators = {
    cxOutlet: [{ type: Input }],
    cxOutletContext: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    OutletDirective.prototype.cxOutlet;
    /**
     * @type {?}
     * @private
     */
    OutletDirective.prototype._context;
    /**
     * @type {?}
     * @private
     */
    OutletDirective.prototype.vcr;
    /**
     * @type {?}
     * @private
     */
    OutletDirective.prototype.templateRef;
    /**
     * @type {?}
     * @private
     */
    OutletDirective.prototype.outletService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvb3V0bGV0L291dGxldC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUVMLFdBQVcsRUFDWCxnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUtqRCxNQUFNLE9BQU8sZUFBZTs7Ozs7O0lBUzFCLFlBQ1UsR0FBcUIsRUFDckIsV0FBNkIsRUFDN0IsYUFBNEI7UUFGNUIsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFDckIsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBQzdCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQ25DLENBQUM7Ozs7O0lBVEosSUFDSSxlQUFlLENBQUMsS0FBVTtRQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDOzs7O0lBUUQsUUFBUTs7Y0FDQSxLQUFLLEdBQUcsRUFBRTtRQUNoQixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxRCxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDakUsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7OztJQUVPLGNBQWMsQ0FBQyxRQUF3QixFQUFFLE9BQU8sR0FBRyxLQUFLOztjQUN4RCxLQUFLLEdBQUcsRUFBRTs7Y0FDVixRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7UUFDaEUsSUFBSSxRQUFRLElBQUksT0FBTyxFQUFFOztrQkFDakIsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ3BFLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUTthQUN6QixDQUFDO1lBQ0YsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM5QjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7O1lBbkNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTthQUN2Qjs7OztZQVBDLGdCQUFnQjtZQURoQixXQUFXO1lBSUosYUFBYTs7O3VCQU1uQixLQUFLOzhCQUdMLEtBQUs7Ozs7SUFITixtQ0FBMEI7Ozs7O0lBRTFCLG1DQUFzQjs7Ozs7SUFPcEIsOEJBQTZCOzs7OztJQUM3QixzQ0FBcUM7Ozs7O0lBQ3JDLHdDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3V0bGV0UG9zaXRpb24gfSBmcm9tICcuL291dGxldC5tb2RlbCc7XG5pbXBvcnQgeyBPdXRsZXRTZXJ2aWNlIH0gZnJvbSAnLi9vdXRsZXQuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjeE91dGxldF0nLFxufSlcbmV4cG9ydCBjbGFzcyBPdXRsZXREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjeE91dGxldDogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2NvbnRleHQ6IGFueTtcbiAgQElucHV0KClcbiAgc2V0IGN4T3V0bGV0Q29udGV4dCh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fY29udGV4dCA9IHZhbHVlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB2Y3I6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcbiAgICBwcml2YXRlIG91dGxldFNlcnZpY2U6IE91dGxldFNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IG5vZGVzID0gW107XG4gICAgbm9kZXMucHVzaCguLi50aGlzLnJlbmRlclRlbXBsYXRlKE91dGxldFBvc2l0aW9uLkJFRk9SRSkpO1xuICAgIG5vZGVzLnB1c2goLi4udGhpcy5yZW5kZXJUZW1wbGF0ZShPdXRsZXRQb3NpdGlvbi5SRVBMQUNFLCB0cnVlKSk7XG4gICAgbm9kZXMucHVzaCguLi50aGlzLnJlbmRlclRlbXBsYXRlKE91dGxldFBvc2l0aW9uLkFGVEVSKSk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlclRlbXBsYXRlKHBvc2l0aW9uOiBPdXRsZXRQb3NpdGlvbiwgcmVwbGFjZSA9IGZhbHNlKTogYW55W10ge1xuICAgIGNvbnN0IG5vZGVzID0gW107XG4gICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLm91dGxldFNlcnZpY2UuZ2V0KHRoaXMuY3hPdXRsZXQsIHBvc2l0aW9uKTtcbiAgICBpZiAodGVtcGxhdGUgfHwgcmVwbGFjZSkge1xuICAgICAgY29uc3QgcmVmID0gdGhpcy52Y3IuY3JlYXRlRW1iZWRkZWRWaWV3KHRlbXBsYXRlIHx8IHRoaXMudGVtcGxhdGVSZWYsIHtcbiAgICAgICAgJGltcGxpY2l0OiB0aGlzLl9jb250ZXh0LFxuICAgICAgfSk7XG4gICAgICBub2Rlcy5wdXNoKC4uLnJlZi5yb290Tm9kZXMpO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cbn1cbiJdfQ==