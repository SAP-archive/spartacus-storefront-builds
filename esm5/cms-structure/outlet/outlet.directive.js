/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ComponentFactory, Directive, Input, TemplateRef, ViewContainerRef, } from '@angular/core';
import { OutletPosition, USE_STACKED_OUTLETS } from './outlet.model';
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
        this.renderOutlet(OutletPosition.BEFORE);
        this.renderOutlet(OutletPosition.REPLACE);
        this.renderOutlet(OutletPosition.AFTER);
    };
    /**
     * @private
     * @param {?} position
     * @return {?}
     */
    OutletDirective.prototype.renderOutlet = /**
     * @private
     * @param {?} position
     * @return {?}
     */
    function (position) {
        var _this = this;
        /** @type {?} */
        var templates = (/** @type {?} */ ((this.outletService.get(this.cxOutlet, position, USE_STACKED_OUTLETS))));
        if (!templates && position === OutletPosition.REPLACE) {
            templates = [this.templateRef];
        }
        // Just in case someone extended the `OutletService` and
        // returns a singular object.
        if (!Array.isArray(templates)) {
            templates = [templates];
        }
        templates.forEach((/**
         * @param {?} obj
         * @return {?}
         */
        function (obj) {
            _this.create(obj);
        }));
    };
    /**
     * @private
     * @param {?} tmplOrFactory
     * @return {?}
     */
    OutletDirective.prototype.create = /**
     * @private
     * @param {?} tmplOrFactory
     * @return {?}
     */
    function (tmplOrFactory) {
        if (tmplOrFactory instanceof ComponentFactory) {
            this.vcr.createComponent(tmplOrFactory);
        }
        else if (tmplOrFactory instanceof TemplateRef) {
            this.vcr.createEmbeddedView((/** @type {?} */ (tmplOrFactory)), {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvb3V0bGV0L291dGxldC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsU0FBUyxFQUNULEtBQUssRUFFTCxXQUFXLEVBQ1gsZ0JBQWdCLEdBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFakQ7SUFZRSx5QkFDVSxHQUFxQixFQUNyQixXQUE2QixFQUM3QixhQUVQO1FBSk8sUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFDckIsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBQzdCLGtCQUFhLEdBQWIsYUFBYSxDQUVwQjtJQUNBLENBQUM7SUFYSixzQkFDSSw0Q0FBZTs7Ozs7UUFEbkIsVUFDb0IsS0FBVTtZQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN4QixDQUFDOzs7T0FBQTs7OztJQVVELGtDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7OztJQUVPLHNDQUFZOzs7OztJQUFwQixVQUFxQixRQUF3QjtRQUE3QyxpQkFrQkM7O1lBakJLLFNBQVMsR0FBVSxtQkFBTyxDQUM1QixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxtQkFBbUIsQ0FBQyxDQUNyRSxFQUFBO1FBRUQsSUFBSSxDQUFDLFNBQVMsSUFBSSxRQUFRLEtBQUssY0FBYyxDQUFDLE9BQU8sRUFBRTtZQUNyRCxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDaEM7UUFFRCx3REFBd0Q7UUFDeEQsNkJBQTZCO1FBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzdCLFNBQVMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3pCO1FBRUQsU0FBUyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLEdBQUc7WUFDbkIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVPLGdDQUFNOzs7OztJQUFkLFVBQWUsYUFBa0I7UUFDL0IsSUFBSSxhQUFhLFlBQVksZ0JBQWdCLEVBQUU7WUFDN0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDekM7YUFBTSxJQUFJLGFBQWEsWUFBWSxXQUFXLEVBQUU7WUFDL0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBa0IsYUFBYSxFQUFBLEVBQUU7Z0JBQzNELFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUTthQUN6QixDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7O2dCQXRERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7aUJBQ3ZCOzs7O2dCQVBDLGdCQUFnQjtnQkFEaEIsV0FBVztnQkFJSixhQUFhOzs7MkJBTW5CLEtBQUs7a0NBR0wsS0FBSzs7SUFnRFIsc0JBQUM7Q0FBQSxBQXZERCxJQXVEQztTQXBEWSxlQUFlOzs7SUFDMUIsbUNBQTBCOzs7OztJQUUxQixtQ0FBc0I7Ozs7O0lBT3BCLDhCQUE2Qjs7Ozs7SUFDN0Isc0NBQXFDOzs7OztJQUNyQyx3Q0FFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudEZhY3RvcnksXG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3V0bGV0UG9zaXRpb24sIFVTRV9TVEFDS0VEX09VVExFVFMgfSBmcm9tICcuL291dGxldC5tb2RlbCc7XG5pbXBvcnQgeyBPdXRsZXRTZXJ2aWNlIH0gZnJvbSAnLi9vdXRsZXQuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjeE91dGxldF0nLFxufSlcbmV4cG9ydCBjbGFzcyBPdXRsZXREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjeE91dGxldDogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2NvbnRleHQ6IGFueTtcbiAgQElucHV0KClcbiAgc2V0IGN4T3V0bGV0Q29udGV4dCh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fY29udGV4dCA9IHZhbHVlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB2Y3I6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcbiAgICBwcml2YXRlIG91dGxldFNlcnZpY2U6IE91dGxldFNlcnZpY2U8XG4gICAgICBUZW1wbGF0ZVJlZjxhbnk+IHwgQ29tcG9uZW50RmFjdG9yeTxhbnk+XG4gICAgPlxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJPdXRsZXQoT3V0bGV0UG9zaXRpb24uQkVGT1JFKTtcbiAgICB0aGlzLnJlbmRlck91dGxldChPdXRsZXRQb3NpdGlvbi5SRVBMQUNFKTtcbiAgICB0aGlzLnJlbmRlck91dGxldChPdXRsZXRQb3NpdGlvbi5BRlRFUik7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlck91dGxldChwb3NpdGlvbjogT3V0bGV0UG9zaXRpb24pOiB2b2lkIHtcbiAgICBsZXQgdGVtcGxhdGVzOiBhbnlbXSA9IDxhbnlbXT4oXG4gICAgICB0aGlzLm91dGxldFNlcnZpY2UuZ2V0KHRoaXMuY3hPdXRsZXQsIHBvc2l0aW9uLCBVU0VfU1RBQ0tFRF9PVVRMRVRTKVxuICAgICk7XG5cbiAgICBpZiAoIXRlbXBsYXRlcyAmJiBwb3NpdGlvbiA9PT0gT3V0bGV0UG9zaXRpb24uUkVQTEFDRSkge1xuICAgICAgdGVtcGxhdGVzID0gW3RoaXMudGVtcGxhdGVSZWZdO1xuICAgIH1cblxuICAgIC8vIEp1c3QgaW4gY2FzZSBzb21lb25lIGV4dGVuZGVkIHRoZSBgT3V0bGV0U2VydmljZWAgYW5kXG4gICAgLy8gcmV0dXJucyBhIHNpbmd1bGFyIG9iamVjdC5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodGVtcGxhdGVzKSkge1xuICAgICAgdGVtcGxhdGVzID0gW3RlbXBsYXRlc107XG4gICAgfVxuXG4gICAgdGVtcGxhdGVzLmZvckVhY2gob2JqID0+IHtcbiAgICAgIHRoaXMuY3JlYXRlKG9iaik7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZSh0bXBsT3JGYWN0b3J5OiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodG1wbE9yRmFjdG9yeSBpbnN0YW5jZW9mIENvbXBvbmVudEZhY3RvcnkpIHtcbiAgICAgIHRoaXMudmNyLmNyZWF0ZUNvbXBvbmVudCh0bXBsT3JGYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHRtcGxPckZhY3RvcnkgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy52Y3IuY3JlYXRlRW1iZWRkZWRWaWV3KDxUZW1wbGF0ZVJlZjxhbnk+PnRtcGxPckZhY3RvcnksIHtcbiAgICAgICAgJGltcGxpY2l0OiB0aGlzLl9jb250ZXh0LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=