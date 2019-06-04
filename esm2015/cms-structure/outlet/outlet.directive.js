/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                $implicit: this.context,
            });
            nodes.push(...ref.rootNodes);
        }
        return nodes;
    }
    /**
     * @private
     * @return {?}
     */
    get context() {
        // return specific context if provided
        if (this._context) {
            return this._context;
        }
        /** @type {?} */
        const ctx = ((/** @type {?} */ (this.vcr.injector))).view.context;
        // the context might already be given $implicit
        // by a parent *ngIf or *ngFor
        return ctx.$implicit || ctx;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvb3V0bGV0L291dGxldC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUVMLFdBQVcsRUFDWCxnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUtqRCxNQUFNLE9BQU8sZUFBZTs7Ozs7O0lBUzFCLFlBQ1UsR0FBcUIsRUFDckIsV0FBNkIsRUFDN0IsYUFBNEI7UUFGNUIsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFDckIsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBQzdCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQ25DLENBQUM7Ozs7O0lBVEosSUFDSSxlQUFlLENBQUMsS0FBYTtRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDOzs7O0lBUUQsUUFBUTs7Y0FDQSxLQUFLLEdBQUcsRUFBRTtRQUNoQixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxRCxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDakUsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7OztJQUVPLGNBQWMsQ0FBQyxRQUF3QixFQUFFLE9BQU8sR0FBRyxLQUFLOztjQUN4RCxLQUFLLEdBQUcsRUFBRTs7Y0FDVixRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7UUFDaEUsSUFBSSxRQUFRLElBQUksT0FBTyxFQUFFOztrQkFDakIsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ3BFLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTzthQUN4QixDQUFDO1lBQ0YsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM5QjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7SUFFRCxJQUFZLE9BQU87UUFDakIsc0NBQXNDO1FBQ3RDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDdEI7O2NBQ0ssR0FBRyxHQUFHLENBQUMsbUJBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPO1FBRWpELCtDQUErQztRQUMvQyw4QkFBOEI7UUFDOUIsT0FBTyxHQUFHLENBQUMsU0FBUyxJQUFJLEdBQUcsQ0FBQztJQUM5QixDQUFDOzs7WUEvQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2FBQ3ZCOzs7O1lBUEMsZ0JBQWdCO1lBRGhCLFdBQVc7WUFJSixhQUFhOzs7dUJBTW5CLEtBQUs7OEJBR0wsS0FBSzs7OztJQUhOLG1DQUEwQjs7Ozs7SUFFMUIsbUNBQXlCOzs7OztJQU92Qiw4QkFBNkI7Ozs7O0lBQzdCLHNDQUFxQzs7Ozs7SUFDckMsd0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NvbnRhaW5lclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPdXRsZXRQb3NpdGlvbiB9IGZyb20gJy4vb3V0bGV0Lm1vZGVsJztcbmltcG9ydCB7IE91dGxldFNlcnZpY2UgfSBmcm9tICcuL291dGxldC5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N4T3V0bGV0XScsXG59KVxuZXhwb3J0IGNsYXNzIE91dGxldERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGN4T3V0bGV0OiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfY29udGV4dDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzZXQgY3hPdXRsZXRDb250ZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb250ZXh0ID0gdmFsdWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHZjcjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgIHByaXZhdGUgb3V0bGV0U2VydmljZTogT3V0bGV0U2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3Qgbm9kZXMgPSBbXTtcbiAgICBub2Rlcy5wdXNoKC4uLnRoaXMucmVuZGVyVGVtcGxhdGUoT3V0bGV0UG9zaXRpb24uQkVGT1JFKSk7XG4gICAgbm9kZXMucHVzaCguLi50aGlzLnJlbmRlclRlbXBsYXRlKE91dGxldFBvc2l0aW9uLlJFUExBQ0UsIHRydWUpKTtcbiAgICBub2Rlcy5wdXNoKC4uLnRoaXMucmVuZGVyVGVtcGxhdGUoT3V0bGV0UG9zaXRpb24uQUZURVIpKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyVGVtcGxhdGUocG9zaXRpb246IE91dGxldFBvc2l0aW9uLCByZXBsYWNlID0gZmFsc2UpOiBhbnlbXSB7XG4gICAgY29uc3Qgbm9kZXMgPSBbXTtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMub3V0bGV0U2VydmljZS5nZXQodGhpcy5jeE91dGxldCwgcG9zaXRpb24pO1xuICAgIGlmICh0ZW1wbGF0ZSB8fCByZXBsYWNlKSB7XG4gICAgICBjb25zdCByZWYgPSB0aGlzLnZjci5jcmVhdGVFbWJlZGRlZFZpZXcodGVtcGxhdGUgfHwgdGhpcy50ZW1wbGF0ZVJlZiwge1xuICAgICAgICAkaW1wbGljaXQ6IHRoaXMuY29udGV4dCxcbiAgICAgIH0pO1xuICAgICAgbm9kZXMucHVzaCguLi5yZWYucm9vdE5vZGVzKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgY29udGV4dCgpIHtcbiAgICAvLyByZXR1cm4gc3BlY2lmaWMgY29udGV4dCBpZiBwcm92aWRlZFxuICAgIGlmICh0aGlzLl9jb250ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5fY29udGV4dDtcbiAgICB9XG4gICAgY29uc3QgY3R4ID0gKDxhbnk+dGhpcy52Y3IuaW5qZWN0b3IpLnZpZXcuY29udGV4dDtcblxuICAgIC8vIHRoZSBjb250ZXh0IG1pZ2h0IGFscmVhZHkgYmUgZ2l2ZW4gJGltcGxpY2l0XG4gICAgLy8gYnkgYSBwYXJlbnQgKm5nSWYgb3IgKm5nRm9yXG4gICAgcmV0dXJuIGN0eC4kaW1wbGljaXQgfHwgY3R4O1xuICB9XG59XG4iXX0=