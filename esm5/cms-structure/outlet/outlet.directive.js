/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input, Renderer2, TemplateRef, ViewContainerRef, } from '@angular/core';
import { OutletStyleService } from './outlet-style.service';
import { OutletPosition } from './outlet.model';
import { OutletService } from './outlet.service';
var OutletDirective = /** @class */ (function () {
    function OutletDirective(vcr, templateRef, outletService, outletStyleService, renderer) {
        this.vcr = vcr;
        this.templateRef = templateRef;
        this.outletService = outletService;
        this.outletStyleService = outletStyleService;
        this.renderer = renderer;
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
        this.renderStyleLink(nodes);
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
    /**
     * @private
     * @param {?} nodes
     * @return {?}
     */
    OutletDirective.prototype.renderStyleLink = /**
     * @private
     * @param {?} nodes
     * @return {?}
     */
    function (nodes) {
        /** @type {?} */
        var styleElement = this.outletStyleService.get(this.cxOutlet);
        if (styleElement) {
            /** @type {?} */
            var parentElement = nodes.find(function (node) { return node instanceof HTMLElement; });
            if (parentElement.shadowRoot) {
                parentElement = parentElement.shadowRoot;
            }
            styleElement.nativeElement.rel = 'stylesheet';
            this.renderer.appendChild(parentElement, styleElement.nativeElement);
        }
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
        { type: OutletService },
        { type: OutletStyleService },
        { type: Renderer2 }
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
    /**
     * @type {?}
     * @private
     */
    OutletDirective.prototype.outletStyleService;
    /**
     * @type {?}
     * @private
     */
    OutletDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvb3V0bGV0L291dGxldC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFFTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLGdCQUFnQixHQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWpEO0lBWUUseUJBQ1UsR0FBcUIsRUFDckIsV0FBNkIsRUFDN0IsYUFBNEIsRUFDNUIsa0JBQXNDLEVBQ3RDLFFBQW1CO1FBSm5CLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBQ3JCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUM3QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLGFBQVEsR0FBUixRQUFRLENBQVc7SUFDMUIsQ0FBQztJQVhKLHNCQUNJLDRDQUFlOzs7OztRQURuQixVQUNvQixLQUFhO1lBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBOzs7O0lBVUQsa0NBQVE7OztJQUFSOztZQUNRLEtBQUssR0FBRyxFQUFFO1FBQ2hCLEtBQUssQ0FBQyxJQUFJLE9BQVYsS0FBSyxtQkFBUyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsR0FBRTtRQUMxRCxLQUFLLENBQUMsSUFBSSxPQUFWLEtBQUssbUJBQVMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFFO1FBQ2pFLEtBQUssQ0FBQyxJQUFJLE9BQVYsS0FBSyxtQkFBUyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsR0FBRTtRQUV6RCxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7Ozs7SUFFTyx3Q0FBYzs7Ozs7O0lBQXRCLFVBQXVCLFFBQXdCLEVBQUUsT0FBZTtRQUFmLHdCQUFBLEVBQUEsZUFBZTs7WUFDeEQsS0FBSyxHQUFHLEVBQUU7O1lBQ1YsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO1FBQ2hFLElBQUksUUFBUSxJQUFJLE9BQU8sRUFBRTs7Z0JBQ2pCLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNwRSxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU87YUFDeEIsQ0FBQztZQUNGLEtBQUssQ0FBQyxJQUFJLE9BQVYsS0FBSyxtQkFBUyxHQUFHLENBQUMsU0FBUyxHQUFFO1NBQzlCO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7Ozs7SUFFTyx5Q0FBZTs7Ozs7SUFBdkIsVUFBd0IsS0FBWTs7WUFDNUIsWUFBWSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUUvRCxJQUFJLFlBQVksRUFBRTs7Z0JBQ1osYUFBYSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLFlBQVksV0FBVyxFQUEzQixDQUEyQixDQUFDO1lBRW5FLElBQUksYUFBYSxDQUFDLFVBQVUsRUFBRTtnQkFDNUIsYUFBYSxHQUFHLGFBQWEsQ0FBQyxVQUFVLENBQUM7YUFDMUM7WUFDRCxZQUFZLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRyxZQUFZLENBQUM7WUFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUN0RTtJQUNILENBQUM7SUFFRCxzQkFBWSxvQ0FBTzs7Ozs7UUFBbkI7WUFDRSxzQ0FBc0M7WUFDdEMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDdEI7O2dCQUNLLEdBQUcsR0FBRyxDQUFDLG1CQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTztZQUVqRCwrQ0FBK0M7WUFDL0MsOEJBQThCO1lBQzlCLE9BQU8sR0FBRyxDQUFDLFNBQVMsSUFBSSxHQUFHLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7O2dCQWpFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7aUJBQ3ZCOzs7O2dCQVJDLGdCQUFnQjtnQkFEaEIsV0FBVztnQkFLSixhQUFhO2dCQUZiLGtCQUFrQjtnQkFKekIsU0FBUzs7OzJCQVlSLEtBQUs7a0NBR0wsS0FBSzs7SUEyRFIsc0JBQUM7Q0FBQSxBQWxFRCxJQWtFQztTQS9EWSxlQUFlOzs7SUFDMUIsbUNBQTBCOzs7OztJQUUxQixtQ0FBeUI7Ozs7O0lBT3ZCLDhCQUE2Qjs7Ozs7SUFDN0Isc0NBQXFDOzs7OztJQUNyQyx3Q0FBb0M7Ozs7O0lBQ3BDLDZDQUE4Qzs7Ozs7SUFDOUMsbUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q29udGFpbmVyUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE91dGxldFN0eWxlU2VydmljZSB9IGZyb20gJy4vb3V0bGV0LXN0eWxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgT3V0bGV0UG9zaXRpb24gfSBmcm9tICcuL291dGxldC5tb2RlbCc7XG5pbXBvcnQgeyBPdXRsZXRTZXJ2aWNlIH0gZnJvbSAnLi9vdXRsZXQuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjeE91dGxldF0nLFxufSlcbmV4cG9ydCBjbGFzcyBPdXRsZXREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjeE91dGxldDogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2NvbnRleHQ6IHN0cmluZztcbiAgQElucHV0KClcbiAgc2V0IGN4T3V0bGV0Q29udGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29udGV4dCA9IHZhbHVlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB2Y3I6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcbiAgICBwcml2YXRlIG91dGxldFNlcnZpY2U6IE91dGxldFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBvdXRsZXRTdHlsZVNlcnZpY2U6IE91dGxldFN0eWxlU2VydmljZSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IG5vZGVzID0gW107XG4gICAgbm9kZXMucHVzaCguLi50aGlzLnJlbmRlclRlbXBsYXRlKE91dGxldFBvc2l0aW9uLkJFRk9SRSkpO1xuICAgIG5vZGVzLnB1c2goLi4udGhpcy5yZW5kZXJUZW1wbGF0ZShPdXRsZXRQb3NpdGlvbi5SRVBMQUNFLCB0cnVlKSk7XG4gICAgbm9kZXMucHVzaCguLi50aGlzLnJlbmRlclRlbXBsYXRlKE91dGxldFBvc2l0aW9uLkFGVEVSKSk7XG5cbiAgICB0aGlzLnJlbmRlclN0eWxlTGluayhub2Rlcyk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlclRlbXBsYXRlKHBvc2l0aW9uOiBPdXRsZXRQb3NpdGlvbiwgcmVwbGFjZSA9IGZhbHNlKTogYW55W10ge1xuICAgIGNvbnN0IG5vZGVzID0gW107XG4gICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLm91dGxldFNlcnZpY2UuZ2V0KHRoaXMuY3hPdXRsZXQsIHBvc2l0aW9uKTtcbiAgICBpZiAodGVtcGxhdGUgfHwgcmVwbGFjZSkge1xuICAgICAgY29uc3QgcmVmID0gdGhpcy52Y3IuY3JlYXRlRW1iZWRkZWRWaWV3KHRlbXBsYXRlIHx8IHRoaXMudGVtcGxhdGVSZWYsIHtcbiAgICAgICAgJGltcGxpY2l0OiB0aGlzLmNvbnRleHQsXG4gICAgICB9KTtcbiAgICAgIG5vZGVzLnB1c2goLi4ucmVmLnJvb3ROb2Rlcyk7XG4gICAgfVxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyU3R5bGVMaW5rKG5vZGVzOiBhbnlbXSkge1xuICAgIGNvbnN0IHN0eWxlRWxlbWVudCA9IHRoaXMub3V0bGV0U3R5bGVTZXJ2aWNlLmdldCh0aGlzLmN4T3V0bGV0KTtcblxuICAgIGlmIChzdHlsZUVsZW1lbnQpIHtcbiAgICAgIGxldCBwYXJlbnRFbGVtZW50ID0gbm9kZXMuZmluZChub2RlID0+IG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCk7XG5cbiAgICAgIGlmIChwYXJlbnRFbGVtZW50LnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgcGFyZW50RWxlbWVudCA9IHBhcmVudEVsZW1lbnQuc2hhZG93Um9vdDtcbiAgICAgIH1cbiAgICAgIHN0eWxlRWxlbWVudC5uYXRpdmVFbGVtZW50LnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQocGFyZW50RWxlbWVudCwgc3R5bGVFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGNvbnRleHQoKSB7XG4gICAgLy8gcmV0dXJuIHNwZWNpZmljIGNvbnRleHQgaWYgcHJvdmlkZWRcbiAgICBpZiAodGhpcy5fY29udGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NvbnRleHQ7XG4gICAgfVxuICAgIGNvbnN0IGN0eCA9ICg8YW55PnRoaXMudmNyLmluamVjdG9yKS52aWV3LmNvbnRleHQ7XG5cbiAgICAvLyB0aGUgY29udGV4dCBtaWdodCBhbHJlYWR5IGJlIGdpdmVuICRpbXBsaWNpdFxuICAgIC8vIGJ5IGEgcGFyZW50ICpuZ0lmIG9yICpuZ0ZvclxuICAgIHJldHVybiBjdHguJGltcGxpY2l0IHx8IGN0eDtcbiAgfVxufVxuIl19