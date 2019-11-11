/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ComponentFactory, Directive, Input, TemplateRef, ViewContainerRef, } from '@angular/core';
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
        this.renderTemplate(OutletPosition.BEFORE);
        this.renderTemplate(OutletPosition.REPLACE, true);
        this.renderTemplate(OutletPosition.AFTER);
    }
    /**
     * @private
     * @param {?} position
     * @param {?=} replace
     * @return {?}
     */
    renderTemplate(position, replace = false) {
        /** @type {?} */
        const template = this.outletService.get(this.cxOutlet, position);
        if (template && template instanceof ComponentFactory) {
            this.vcr.createComponent(template);
        }
        else if ((template && template instanceof TemplateRef) || replace) {
            this.vcr.createEmbeddedView((/** @type {?} */ (template)) || this.templateRef, {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvb3V0bGV0L291dGxldC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsU0FBUyxFQUNULEtBQUssRUFFTCxXQUFXLEVBQ1gsZ0JBQWdCLEdBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFLakQsTUFBTSxPQUFPLGVBQWU7Ozs7OztJQVMxQixZQUNVLEdBQXFCLEVBQ3JCLFdBQTZCLEVBQzdCLGFBQTRCO1FBRjVCLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBQ3JCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUM3QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUNuQyxDQUFDOzs7OztJQVRKLElBQ0ksZUFBZSxDQUFDLEtBQVU7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQzs7OztJQVFELFFBQVE7UUFDTixJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Ozs7OztJQUVPLGNBQWMsQ0FBQyxRQUF3QixFQUFFLE9BQU8sR0FBRyxLQUFLOztjQUN4RCxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7UUFDaEUsSUFBSSxRQUFRLElBQUksUUFBUSxZQUFZLGdCQUFnQixFQUFFO1lBQ3BELElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3BDO2FBQU0sSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRLFlBQVksV0FBVyxDQUFDLElBQUksT0FBTyxFQUFFO1lBQ25FLElBQUksQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQ3pCLG1CQUFrQixRQUFRLEVBQUEsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUM5QztnQkFDRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVE7YUFDekIsQ0FDRixDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7WUFwQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2FBQ3ZCOzs7O1lBUEMsZ0JBQWdCO1lBRGhCLFdBQVc7WUFJSixhQUFhOzs7dUJBTW5CLEtBQUs7OEJBR0wsS0FBSzs7OztJQUhOLG1DQUEwQjs7Ozs7SUFFMUIsbUNBQXNCOzs7OztJQU9wQiw4QkFBNkI7Ozs7O0lBQzdCLHNDQUFxQzs7Ozs7SUFDckMsd0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50RmFjdG9yeSxcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NvbnRhaW5lclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPdXRsZXRQb3NpdGlvbiB9IGZyb20gJy4vb3V0bGV0Lm1vZGVsJztcbmltcG9ydCB7IE91dGxldFNlcnZpY2UgfSBmcm9tICcuL291dGxldC5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N4T3V0bGV0XScsXG59KVxuZXhwb3J0IGNsYXNzIE91dGxldERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGN4T3V0bGV0OiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfY29udGV4dDogYW55O1xuICBASW5wdXQoKVxuICBzZXQgY3hPdXRsZXRDb250ZXh0KHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9jb250ZXh0ID0gdmFsdWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHZjcjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgIHByaXZhdGUgb3V0bGV0U2VydmljZTogT3V0bGV0U2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJUZW1wbGF0ZShPdXRsZXRQb3NpdGlvbi5CRUZPUkUpO1xuICAgIHRoaXMucmVuZGVyVGVtcGxhdGUoT3V0bGV0UG9zaXRpb24uUkVQTEFDRSwgdHJ1ZSk7XG4gICAgdGhpcy5yZW5kZXJUZW1wbGF0ZShPdXRsZXRQb3NpdGlvbi5BRlRFUik7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlclRlbXBsYXRlKHBvc2l0aW9uOiBPdXRsZXRQb3NpdGlvbiwgcmVwbGFjZSA9IGZhbHNlKTogdm9pZCB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLm91dGxldFNlcnZpY2UuZ2V0KHRoaXMuY3hPdXRsZXQsIHBvc2l0aW9uKTtcbiAgICBpZiAodGVtcGxhdGUgJiYgdGVtcGxhdGUgaW5zdGFuY2VvZiBDb21wb25lbnRGYWN0b3J5KSB7XG4gICAgICB0aGlzLnZjci5jcmVhdGVDb21wb25lbnQodGVtcGxhdGUpO1xuICAgIH0gZWxzZSBpZiAoKHRlbXBsYXRlICYmIHRlbXBsYXRlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHx8IHJlcGxhY2UpIHtcbiAgICAgIHRoaXMudmNyLmNyZWF0ZUVtYmVkZGVkVmlldyhcbiAgICAgICAgPFRlbXBsYXRlUmVmPGFueT4+dGVtcGxhdGUgfHwgdGhpcy50ZW1wbGF0ZVJlZixcbiAgICAgICAge1xuICAgICAgICAgICRpbXBsaWNpdDogdGhpcy5fY29udGV4dCxcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==