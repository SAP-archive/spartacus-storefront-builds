/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ComponentFactory, Directive, Input, TemplateRef, ViewContainerRef, } from '@angular/core';
import { OutletPosition, USE_STACKED_OUTLETS } from './outlet.model';
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
        this.renderOutlet(OutletPosition.BEFORE);
        this.renderOutlet(OutletPosition.REPLACE);
        this.renderOutlet(OutletPosition.AFTER);
    }
    /**
     * @private
     * @param {?} position
     * @return {?}
     */
    renderOutlet(position) {
        /** @type {?} */
        let templates = (/** @type {?} */ ((this.outletService.get(this.cxOutlet, position, USE_STACKED_OUTLETS))));
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
        obj => {
            this.create(obj);
        }));
    }
    /**
     * @private
     * @param {?} tmplOrFactory
     * @return {?}
     */
    create(tmplOrFactory) {
        if (tmplOrFactory instanceof ComponentFactory) {
            this.vcr.createComponent(tmplOrFactory);
        }
        else if (tmplOrFactory instanceof TemplateRef) {
            this.vcr.createEmbeddedView((/** @type {?} */ (tmplOrFactory)), {
                $implicit: this._context,
            });
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvb3V0bGV0L291dGxldC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsU0FBUyxFQUNULEtBQUssRUFFTCxXQUFXLEVBQ1gsZ0JBQWdCLEdBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFLakQsTUFBTSxPQUFPLGVBQWU7Ozs7OztJQVMxQixZQUNVLEdBQXFCLEVBQ3JCLFdBQTZCLEVBQzdCLGFBRVA7UUFKTyxRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUNyQixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFDN0Isa0JBQWEsR0FBYixhQUFhLENBRXBCO0lBQ0EsQ0FBQzs7Ozs7SUFYSixJQUNJLGVBQWUsQ0FBQyxLQUFVO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFVRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Ozs7O0lBRU8sWUFBWSxDQUFDLFFBQXdCOztZQUN2QyxTQUFTLEdBQVUsbUJBQU8sQ0FDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLENBQUMsQ0FDckUsRUFBQTtRQUVELElBQUksQ0FBQyxTQUFTLElBQUksUUFBUSxLQUFLLGNBQWMsQ0FBQyxPQUFPLEVBQUU7WUFDckQsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2hDO1FBRUQsd0RBQXdEO1FBQ3hELDZCQUE2QjtRQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUM3QixTQUFTLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN6QjtRQUVELFNBQVMsQ0FBQyxPQUFPOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVPLE1BQU0sQ0FBQyxhQUFrQjtRQUMvQixJQUFJLGFBQWEsWUFBWSxnQkFBZ0IsRUFBRTtZQUM3QyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUN6QzthQUFNLElBQUksYUFBYSxZQUFZLFdBQVcsRUFBRTtZQUMvQyxJQUFJLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLG1CQUFrQixhQUFhLEVBQUEsRUFBRTtnQkFDM0QsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRO2FBQ3pCLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7O1lBdERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTthQUN2Qjs7OztZQVBDLGdCQUFnQjtZQURoQixXQUFXO1lBSUosYUFBYTs7O3VCQU1uQixLQUFLOzhCQUdMLEtBQUs7Ozs7SUFITixtQ0FBMEI7Ozs7O0lBRTFCLG1DQUFzQjs7Ozs7SUFPcEIsOEJBQTZCOzs7OztJQUM3QixzQ0FBcUM7Ozs7O0lBQ3JDLHdDQUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50RmFjdG9yeSxcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NvbnRhaW5lclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPdXRsZXRQb3NpdGlvbiwgVVNFX1NUQUNLRURfT1VUTEVUUyB9IGZyb20gJy4vb3V0bGV0Lm1vZGVsJztcbmltcG9ydCB7IE91dGxldFNlcnZpY2UgfSBmcm9tICcuL291dGxldC5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N4T3V0bGV0XScsXG59KVxuZXhwb3J0IGNsYXNzIE91dGxldERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGN4T3V0bGV0OiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfY29udGV4dDogYW55O1xuICBASW5wdXQoKVxuICBzZXQgY3hPdXRsZXRDb250ZXh0KHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9jb250ZXh0ID0gdmFsdWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHZjcjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgIHByaXZhdGUgb3V0bGV0U2VydmljZTogT3V0bGV0U2VydmljZTxcbiAgICAgIFRlbXBsYXRlUmVmPGFueT4gfCBDb21wb25lbnRGYWN0b3J5PGFueT5cbiAgICA+XG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlck91dGxldChPdXRsZXRQb3NpdGlvbi5CRUZPUkUpO1xuICAgIHRoaXMucmVuZGVyT3V0bGV0KE91dGxldFBvc2l0aW9uLlJFUExBQ0UpO1xuICAgIHRoaXMucmVuZGVyT3V0bGV0KE91dGxldFBvc2l0aW9uLkFGVEVSKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyT3V0bGV0KHBvc2l0aW9uOiBPdXRsZXRQb3NpdGlvbik6IHZvaWQge1xuICAgIGxldCB0ZW1wbGF0ZXM6IGFueVtdID0gPGFueVtdPihcbiAgICAgIHRoaXMub3V0bGV0U2VydmljZS5nZXQodGhpcy5jeE91dGxldCwgcG9zaXRpb24sIFVTRV9TVEFDS0VEX09VVExFVFMpXG4gICAgKTtcblxuICAgIGlmICghdGVtcGxhdGVzICYmIHBvc2l0aW9uID09PSBPdXRsZXRQb3NpdGlvbi5SRVBMQUNFKSB7XG4gICAgICB0ZW1wbGF0ZXMgPSBbdGhpcy50ZW1wbGF0ZVJlZl07XG4gICAgfVxuXG4gICAgLy8gSnVzdCBpbiBjYXNlIHNvbWVvbmUgZXh0ZW5kZWQgdGhlIGBPdXRsZXRTZXJ2aWNlYCBhbmRcbiAgICAvLyByZXR1cm5zIGEgc2luZ3VsYXIgb2JqZWN0LlxuICAgIGlmICghQXJyYXkuaXNBcnJheSh0ZW1wbGF0ZXMpKSB7XG4gICAgICB0ZW1wbGF0ZXMgPSBbdGVtcGxhdGVzXTtcbiAgICB9XG5cbiAgICB0ZW1wbGF0ZXMuZm9yRWFjaChvYmogPT4ge1xuICAgICAgdGhpcy5jcmVhdGUob2JqKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlKHRtcGxPckZhY3Rvcnk6IGFueSk6IHZvaWQge1xuICAgIGlmICh0bXBsT3JGYWN0b3J5IGluc3RhbmNlb2YgQ29tcG9uZW50RmFjdG9yeSkge1xuICAgICAgdGhpcy52Y3IuY3JlYXRlQ29tcG9uZW50KHRtcGxPckZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAodG1wbE9yRmFjdG9yeSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLnZjci5jcmVhdGVFbWJlZGRlZFZpZXcoPFRlbXBsYXRlUmVmPGFueT4+dG1wbE9yRmFjdG9yeSwge1xuICAgICAgICAkaW1wbGljaXQ6IHRoaXMuX2NvbnRleHQsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==