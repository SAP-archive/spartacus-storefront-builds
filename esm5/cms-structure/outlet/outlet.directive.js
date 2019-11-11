/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ComponentFactory, Directive, Input, TemplateRef, ViewContainerRef, } from '@angular/core';
import { OutletPosition } from './outlet.model';
import { OutletService } from './outlet.service';
var OutletDirective = /** @class */ (function () {
    function OutletDirective(vcr, templateRef, outletService) {
        this.vcr = vcr;
        this.templateRef = templateRef;
        this.outletService = outletService;
    }
    Object.defineProperty(OutletDirective.prototype, "cxOutletContext", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._context = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    OutletDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.renderTemplate(OutletPosition.BEFORE);
        this.renderTemplate(OutletPosition.REPLACE, true);
        this.renderTemplate(OutletPosition.AFTER);
    };
    /**
     * @private
     * @param {?} position
     * @param {?=} replace
     * @return {?}
     */
    OutletDirective.prototype.renderTemplate = /**
     * @private
     * @param {?} position
     * @param {?=} replace
     * @return {?}
     */
    function (position, replace) {
        if (replace === void 0) { replace = false; }
        /** @type {?} */
        var template = this.outletService.get(this.cxOutlet, position);
        if (template && template instanceof ComponentFactory) {
            this.vcr.createComponent(template);
        }
        else if ((template && template instanceof TemplateRef) || replace) {
            this.vcr.createEmbeddedView((/** @type {?} */ (template)) || this.templateRef, {
                $implicit: this._context,
            });
        }
    };
    OutletDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[cxOutlet]',
                },] }
    ];
    /** @nocollapse */
    OutletDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: TemplateRef },
        { type: OutletService }
    ]; };
    OutletDirective.propDecorators = {
        cxOutlet: [{ type: Input }],
        cxOutletContext: [{ type: Input }]
    };
    return OutletDirective;
}());
export { OutletDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvb3V0bGV0L291dGxldC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsU0FBUyxFQUNULEtBQUssRUFFTCxXQUFXLEVBQ1gsZ0JBQWdCLEdBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFakQ7SUFZRSx5QkFDVSxHQUFxQixFQUNyQixXQUE2QixFQUM3QixhQUE0QjtRQUY1QixRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUNyQixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFDN0Isa0JBQWEsR0FBYixhQUFhLENBQWU7SUFDbkMsQ0FBQztJQVRKLHNCQUNJLDRDQUFlOzs7OztRQURuQixVQUNvQixLQUFVO1lBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBOzs7O0lBUUQsa0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7Ozs7SUFFTyx3Q0FBYzs7Ozs7O0lBQXRCLFVBQXVCLFFBQXdCLEVBQUUsT0FBZTtRQUFmLHdCQUFBLEVBQUEsZUFBZTs7WUFDeEQsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO1FBQ2hFLElBQUksUUFBUSxJQUFJLFFBQVEsWUFBWSxnQkFBZ0IsRUFBRTtZQUNwRCxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNwQzthQUFNLElBQUksQ0FBQyxRQUFRLElBQUksUUFBUSxZQUFZLFdBQVcsQ0FBQyxJQUFJLE9BQU8sRUFBRTtZQUNuRSxJQUFJLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUN6QixtQkFBa0IsUUFBUSxFQUFBLElBQUksSUFBSSxDQUFDLFdBQVcsRUFDOUM7Z0JBQ0UsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRO2FBQ3pCLENBQ0YsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7Z0JBcENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtpQkFDdkI7Ozs7Z0JBUEMsZ0JBQWdCO2dCQURoQixXQUFXO2dCQUlKLGFBQWE7OzsyQkFNbkIsS0FBSztrQ0FHTCxLQUFLOztJQThCUixzQkFBQztDQUFBLEFBckNELElBcUNDO1NBbENZLGVBQWU7OztJQUMxQixtQ0FBMEI7Ozs7O0lBRTFCLG1DQUFzQjs7Ozs7SUFPcEIsOEJBQTZCOzs7OztJQUM3QixzQ0FBcUM7Ozs7O0lBQ3JDLHdDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudEZhY3RvcnksXG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3V0bGV0UG9zaXRpb24gfSBmcm9tICcuL291dGxldC5tb2RlbCc7XG5pbXBvcnQgeyBPdXRsZXRTZXJ2aWNlIH0gZnJvbSAnLi9vdXRsZXQuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjeE91dGxldF0nLFxufSlcbmV4cG9ydCBjbGFzcyBPdXRsZXREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjeE91dGxldDogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2NvbnRleHQ6IGFueTtcbiAgQElucHV0KClcbiAgc2V0IGN4T3V0bGV0Q29udGV4dCh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fY29udGV4dCA9IHZhbHVlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB2Y3I6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcbiAgICBwcml2YXRlIG91dGxldFNlcnZpY2U6IE91dGxldFNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyVGVtcGxhdGUoT3V0bGV0UG9zaXRpb24uQkVGT1JFKTtcbiAgICB0aGlzLnJlbmRlclRlbXBsYXRlKE91dGxldFBvc2l0aW9uLlJFUExBQ0UsIHRydWUpO1xuICAgIHRoaXMucmVuZGVyVGVtcGxhdGUoT3V0bGV0UG9zaXRpb24uQUZURVIpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJUZW1wbGF0ZShwb3NpdGlvbjogT3V0bGV0UG9zaXRpb24sIHJlcGxhY2UgPSBmYWxzZSk6IHZvaWQge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy5vdXRsZXRTZXJ2aWNlLmdldCh0aGlzLmN4T3V0bGV0LCBwb3NpdGlvbik7XG4gICAgaWYgKHRlbXBsYXRlICYmIHRlbXBsYXRlIGluc3RhbmNlb2YgQ29tcG9uZW50RmFjdG9yeSkge1xuICAgICAgdGhpcy52Y3IuY3JlYXRlQ29tcG9uZW50KHRlbXBsYXRlKTtcbiAgICB9IGVsc2UgaWYgKCh0ZW1wbGF0ZSAmJiB0ZW1wbGF0ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB8fCByZXBsYWNlKSB7XG4gICAgICB0aGlzLnZjci5jcmVhdGVFbWJlZGRlZFZpZXcoXG4gICAgICAgIDxUZW1wbGF0ZVJlZjxhbnk+PnRlbXBsYXRlIHx8IHRoaXMudGVtcGxhdGVSZWYsXG4gICAgICAgIHtcbiAgICAgICAgICAkaW1wbGljaXQ6IHRoaXMuX2NvbnRleHQsXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iXX0=