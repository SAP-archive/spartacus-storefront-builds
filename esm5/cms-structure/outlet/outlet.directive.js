/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input, TemplateRef, ViewContainerRef, } from '@angular/core';
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
        /** @type {?} */
        var nodes = [];
        nodes.push.apply(nodes, tslib_1.__spread(this.renderTemplate(OutletPosition.BEFORE)));
        nodes.push.apply(nodes, tslib_1.__spread(this.renderTemplate(OutletPosition.REPLACE, true)));
        nodes.push.apply(nodes, tslib_1.__spread(this.renderTemplate(OutletPosition.AFTER)));
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
        var nodes = [];
        /** @type {?} */
        var template = this.outletService.get(this.cxOutlet, position);
        if (template || replace) {
            /** @type {?} */
            var ref = this.vcr.createEmbeddedView(template || this.templateRef, {
                $implicit: this.context,
            });
            nodes.push.apply(nodes, tslib_1.__spread(ref.rootNodes));
        }
        return nodes;
    };
    Object.defineProperty(OutletDirective.prototype, "context", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            // return specific context if provided
            if (this._context) {
                return this._context;
            }
            /** @type {?} */
            var ctx = ((/** @type {?} */ (this.vcr.injector))).view.context;
            // the context might already be given $implicit
            // by a parent *ngIf or *ngFor
            return ctx.$implicit || ctx;
        },
        enumerable: true,
        configurable: true
    });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvb3V0bGV0L291dGxldC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFFTCxXQUFXLEVBQ1gsZ0JBQWdCLEdBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFakQ7SUFZRSx5QkFDVSxHQUFxQixFQUNyQixXQUE2QixFQUM3QixhQUE0QjtRQUY1QixRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUNyQixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFDN0Isa0JBQWEsR0FBYixhQUFhLENBQWU7SUFDbkMsQ0FBQztJQVRKLHNCQUNJLDRDQUFlOzs7OztRQURuQixVQUNvQixLQUFhO1lBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBOzs7O0lBUUQsa0NBQVE7OztJQUFSOztZQUNRLEtBQUssR0FBRyxFQUFFO1FBQ2hCLEtBQUssQ0FBQyxJQUFJLE9BQVYsS0FBSyxtQkFBUyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsR0FBRTtRQUMxRCxLQUFLLENBQUMsSUFBSSxPQUFWLEtBQUssbUJBQVMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFFO1FBQ2pFLEtBQUssQ0FBQyxJQUFJLE9BQVYsS0FBSyxtQkFBUyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsR0FBRTtJQUMzRCxDQUFDOzs7Ozs7O0lBRU8sd0NBQWM7Ozs7OztJQUF0QixVQUF1QixRQUF3QixFQUFFLE9BQWU7UUFBZix3QkFBQSxFQUFBLGVBQWU7O1lBQ3hELEtBQUssR0FBRyxFQUFFOztZQUNWLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztRQUNoRSxJQUFJLFFBQVEsSUFBSSxPQUFPLEVBQUU7O2dCQUNqQixHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDcEUsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPO2FBQ3hCLENBQUM7WUFDRixLQUFLLENBQUMsSUFBSSxPQUFWLEtBQUssbUJBQVMsR0FBRyxDQUFDLFNBQVMsR0FBRTtTQUM5QjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELHNCQUFZLG9DQUFPOzs7OztRQUFuQjtZQUNFLHNDQUFzQztZQUN0QyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUN0Qjs7Z0JBQ0ssR0FBRyxHQUFHLENBQUMsbUJBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPO1lBRWpELCtDQUErQztZQUMvQyw4QkFBOEI7WUFDOUIsT0FBTyxHQUFHLENBQUMsU0FBUyxJQUFJLEdBQUcsQ0FBQztRQUM5QixDQUFDOzs7T0FBQTs7Z0JBL0NGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtpQkFDdkI7Ozs7Z0JBUEMsZ0JBQWdCO2dCQURoQixXQUFXO2dCQUlKLGFBQWE7OzsyQkFNbkIsS0FBSztrQ0FHTCxLQUFLOztJQXlDUixzQkFBQztDQUFBLEFBaERELElBZ0RDO1NBN0NZLGVBQWU7OztJQUMxQixtQ0FBMEI7Ozs7O0lBRTFCLG1DQUF5Qjs7Ozs7SUFPdkIsOEJBQTZCOzs7OztJQUM3QixzQ0FBcUM7Ozs7O0lBQ3JDLHdDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3V0bGV0UG9zaXRpb24gfSBmcm9tICcuL291dGxldC5tb2RlbCc7XG5pbXBvcnQgeyBPdXRsZXRTZXJ2aWNlIH0gZnJvbSAnLi9vdXRsZXQuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjeE91dGxldF0nLFxufSlcbmV4cG9ydCBjbGFzcyBPdXRsZXREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjeE91dGxldDogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2NvbnRleHQ6IHN0cmluZztcbiAgQElucHV0KClcbiAgc2V0IGN4T3V0bGV0Q29udGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29udGV4dCA9IHZhbHVlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB2Y3I6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcbiAgICBwcml2YXRlIG91dGxldFNlcnZpY2U6IE91dGxldFNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IG5vZGVzID0gW107XG4gICAgbm9kZXMucHVzaCguLi50aGlzLnJlbmRlclRlbXBsYXRlKE91dGxldFBvc2l0aW9uLkJFRk9SRSkpO1xuICAgIG5vZGVzLnB1c2goLi4udGhpcy5yZW5kZXJUZW1wbGF0ZShPdXRsZXRQb3NpdGlvbi5SRVBMQUNFLCB0cnVlKSk7XG4gICAgbm9kZXMucHVzaCguLi50aGlzLnJlbmRlclRlbXBsYXRlKE91dGxldFBvc2l0aW9uLkFGVEVSKSk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlclRlbXBsYXRlKHBvc2l0aW9uOiBPdXRsZXRQb3NpdGlvbiwgcmVwbGFjZSA9IGZhbHNlKTogYW55W10ge1xuICAgIGNvbnN0IG5vZGVzID0gW107XG4gICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLm91dGxldFNlcnZpY2UuZ2V0KHRoaXMuY3hPdXRsZXQsIHBvc2l0aW9uKTtcbiAgICBpZiAodGVtcGxhdGUgfHwgcmVwbGFjZSkge1xuICAgICAgY29uc3QgcmVmID0gdGhpcy52Y3IuY3JlYXRlRW1iZWRkZWRWaWV3KHRlbXBsYXRlIHx8IHRoaXMudGVtcGxhdGVSZWYsIHtcbiAgICAgICAgJGltcGxpY2l0OiB0aGlzLmNvbnRleHQsXG4gICAgICB9KTtcbiAgICAgIG5vZGVzLnB1c2goLi4ucmVmLnJvb3ROb2Rlcyk7XG4gICAgfVxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGNvbnRleHQoKSB7XG4gICAgLy8gcmV0dXJuIHNwZWNpZmljIGNvbnRleHQgaWYgcHJvdmlkZWRcbiAgICBpZiAodGhpcy5fY29udGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NvbnRleHQ7XG4gICAgfVxuICAgIGNvbnN0IGN0eCA9ICg8YW55PnRoaXMudmNyLmluamVjdG9yKS52aWV3LmNvbnRleHQ7XG5cbiAgICAvLyB0aGUgY29udGV4dCBtaWdodCBhbHJlYWR5IGJlIGdpdmVuICRpbXBsaWNpdFxuICAgIC8vIGJ5IGEgcGFyZW50ICpuZ0lmIG9yICpuZ0ZvclxuICAgIHJldHVybiBjdHguJGltcGxpY2l0IHx8IGN0eDtcbiAgfVxufVxuIl19