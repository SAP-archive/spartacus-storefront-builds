/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input, TemplateRef, ViewContainerRef, Renderer2, } from '@angular/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9vdXRsZXQvb3V0bGV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFdBQVcsRUFDWCxnQkFBZ0IsRUFFaEIsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFakQ7SUFhRSx5QkFDVSxHQUFxQixFQUNyQixXQUE2QixFQUM3QixhQUE0QixFQUM1QixrQkFBc0MsRUFDdEMsUUFBbUI7UUFKbkIsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFDckIsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBQzdCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsYUFBUSxHQUFSLFFBQVEsQ0FBVztJQUMxQixDQUFDO0lBWEosc0JBQ0ksNENBQWU7Ozs7O1FBRG5CLFVBQ29CLEtBQWE7WUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7Ozs7SUFVRCxrQ0FBUTs7O0lBQVI7O1lBQ1EsS0FBSyxHQUFHLEVBQUU7UUFDaEIsS0FBSyxDQUFDLElBQUksT0FBVixLQUFLLG1CQUFTLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxHQUFFO1FBQzFELEtBQUssQ0FBQyxJQUFJLE9BQVYsS0FBSyxtQkFBUyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUU7UUFDakUsS0FBSyxDQUFDLElBQUksT0FBVixLQUFLLG1CQUFTLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxHQUFFO1FBRXpELElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7OztJQUVPLHdDQUFjOzs7Ozs7SUFBdEIsVUFBdUIsUUFBd0IsRUFBRSxPQUFlO1FBQWYsd0JBQUEsRUFBQSxlQUFlOztZQUN4RCxLQUFLLEdBQUcsRUFBRTs7WUFDVixRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7UUFDaEUsSUFBSSxRQUFRLElBQUksT0FBTyxFQUFFOztnQkFDakIsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ3BFLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTzthQUN4QixDQUFDO1lBQ0YsS0FBSyxDQUFDLElBQUksT0FBVixLQUFLLG1CQUFTLEdBQUcsQ0FBQyxTQUFTLEdBQUU7U0FDOUI7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7OztJQUVPLHlDQUFlOzs7OztJQUF2QixVQUF3QixLQUFZOztZQUM1QixZQUFZLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRS9ELElBQUksWUFBWSxFQUFFOztnQkFDWixhQUFhLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksWUFBWSxXQUFXLEVBQTNCLENBQTJCLENBQUM7WUFFbkUsSUFBSSxhQUFhLENBQUMsVUFBVSxFQUFFO2dCQUM1QixhQUFhLEdBQUcsYUFBYSxDQUFDLFVBQVUsQ0FBQzthQUMxQztZQUNELFlBQVksQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQztZQUM5QyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3RFO0lBQ0gsQ0FBQztJQUVELHNCQUFZLG9DQUFPOzs7OztRQUFuQjtZQUNFLHNDQUFzQztZQUN0QyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUN0Qjs7Z0JBQ0ssR0FBRyxHQUFHLENBQUMsbUJBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPO1lBRWpELCtDQUErQztZQUMvQyw4QkFBOEI7WUFDOUIsT0FBTyxHQUFHLENBQUMsU0FBUyxJQUFJLEdBQUcsQ0FBQztRQUM5QixDQUFDOzs7T0FBQTs7Z0JBbEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtpQkFDdkI7Ozs7Z0JBWEMsZ0JBQWdCO2dCQURoQixXQUFXO2dCQVFKLGFBQWE7Z0JBRmIsa0JBQWtCO2dCQUh6QixTQUFTOzs7MkJBV1IsS0FBSztrQ0FJTCxLQUFLOztJQTJEUixzQkFBQztDQUFBLEFBbkVELElBbUVDO1NBaEVZLGVBQWU7OztJQUMxQixtQ0FDaUI7Ozs7O0lBRWpCLG1DQUF5Qjs7Ozs7SUFPdkIsOEJBQTZCOzs7OztJQUM3QixzQ0FBcUM7Ozs7O0lBQ3JDLHdDQUFvQzs7Ozs7SUFDcEMsNkNBQThDOzs7OztJQUM5QyxtQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPdXRsZXRTdHlsZVNlcnZpY2UgfSBmcm9tICcuL291dGxldC1zdHlsZS5zZXJ2aWNlJztcbmltcG9ydCB7IE91dGxldFBvc2l0aW9uIH0gZnJvbSAnLi9vdXRsZXQubW9kZWwnO1xuaW1wb3J0IHsgT3V0bGV0U2VydmljZSB9IGZyb20gJy4vb3V0bGV0LnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY3hPdXRsZXRdJyxcbn0pXG5leHBvcnQgY2xhc3MgT3V0bGV0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgY3hPdXRsZXQ6IHN0cmluZztcblxuICBwcml2YXRlIF9jb250ZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNldCBjeE91dGxldENvbnRleHQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbnRleHQgPSB2YWx1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdmNyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXG4gICAgcHJpdmF0ZSBvdXRsZXRTZXJ2aWNlOiBPdXRsZXRTZXJ2aWNlLFxuICAgIHByaXZhdGUgb3V0bGV0U3R5bGVTZXJ2aWNlOiBPdXRsZXRTdHlsZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBub2RlcyA9IFtdO1xuICAgIG5vZGVzLnB1c2goLi4udGhpcy5yZW5kZXJUZW1wbGF0ZShPdXRsZXRQb3NpdGlvbi5CRUZPUkUpKTtcbiAgICBub2Rlcy5wdXNoKC4uLnRoaXMucmVuZGVyVGVtcGxhdGUoT3V0bGV0UG9zaXRpb24uUkVQTEFDRSwgdHJ1ZSkpO1xuICAgIG5vZGVzLnB1c2goLi4udGhpcy5yZW5kZXJUZW1wbGF0ZShPdXRsZXRQb3NpdGlvbi5BRlRFUikpO1xuXG4gICAgdGhpcy5yZW5kZXJTdHlsZUxpbmsobm9kZXMpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJUZW1wbGF0ZShwb3NpdGlvbjogT3V0bGV0UG9zaXRpb24sIHJlcGxhY2UgPSBmYWxzZSk6IGFueVtdIHtcbiAgICBjb25zdCBub2RlcyA9IFtdO1xuICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy5vdXRsZXRTZXJ2aWNlLmdldCh0aGlzLmN4T3V0bGV0LCBwb3NpdGlvbik7XG4gICAgaWYgKHRlbXBsYXRlIHx8IHJlcGxhY2UpIHtcbiAgICAgIGNvbnN0IHJlZiA9IHRoaXMudmNyLmNyZWF0ZUVtYmVkZGVkVmlldyh0ZW1wbGF0ZSB8fCB0aGlzLnRlbXBsYXRlUmVmLCB7XG4gICAgICAgICRpbXBsaWNpdDogdGhpcy5jb250ZXh0LFxuICAgICAgfSk7XG4gICAgICBub2Rlcy5wdXNoKC4uLnJlZi5yb290Tm9kZXMpO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlclN0eWxlTGluayhub2RlczogYW55W10pIHtcbiAgICBjb25zdCBzdHlsZUVsZW1lbnQgPSB0aGlzLm91dGxldFN0eWxlU2VydmljZS5nZXQodGhpcy5jeE91dGxldCk7XG5cbiAgICBpZiAoc3R5bGVFbGVtZW50KSB7XG4gICAgICBsZXQgcGFyZW50RWxlbWVudCA9IG5vZGVzLmZpbmQobm9kZSA9PiBub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpO1xuXG4gICAgICBpZiAocGFyZW50RWxlbWVudC5zaGFkb3dSb290KSB7XG4gICAgICAgIHBhcmVudEVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LnNoYWRvd1Jvb3Q7XG4gICAgICB9XG4gICAgICBzdHlsZUVsZW1lbnQubmF0aXZlRWxlbWVudC5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHBhcmVudEVsZW1lbnQsIHN0eWxlRWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldCBjb250ZXh0KCkge1xuICAgIC8vIHJldHVybiBzcGVjaWZpYyBjb250ZXh0IGlmIHByb3ZpZGVkXG4gICAgaWYgKHRoaXMuX2NvbnRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb250ZXh0O1xuICAgIH1cbiAgICBjb25zdCBjdHggPSAoPGFueT50aGlzLnZjci5pbmplY3Rvcikudmlldy5jb250ZXh0O1xuXG4gICAgLy8gdGhlIGNvbnRleHQgbWlnaHQgYWxyZWFkeSBiZSBnaXZlbiAkaW1wbGljaXRcbiAgICAvLyBieSBhIHBhcmVudCAqbmdJZiBvciAqbmdGb3JcbiAgICByZXR1cm4gY3R4LiRpbXBsaWNpdCB8fCBjdHg7XG4gIH1cbn1cbiJdfQ==