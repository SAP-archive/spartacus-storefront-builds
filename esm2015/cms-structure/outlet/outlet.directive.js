/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, Renderer2, TemplateRef, ViewContainerRef, } from '@angular/core';
import { OutletStyleService } from './outlet-style.service';
import { OutletPosition } from './outlet.model';
import { OutletService } from './outlet.service';
export class OutletDirective {
    /**
     * @param {?} vcr
     * @param {?} templateRef
     * @param {?} outletService
     * @param {?} outletStyleService
     * @param {?} renderer
     */
    constructor(vcr, templateRef, outletService, outletStyleService, renderer) {
        this.vcr = vcr;
        this.templateRef = templateRef;
        this.outletService = outletService;
        this.outletStyleService = outletStyleService;
        this.renderer = renderer;
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
        this.renderStyleLink(nodes);
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
     * @param {?} nodes
     * @return {?}
     */
    renderStyleLink(nodes) {
        /** @type {?} */
        const styleElement = this.outletStyleService.get(this.cxOutlet);
        if (styleElement) {
            /** @type {?} */
            let parentElement = nodes.find(node => node instanceof HTMLElement);
            if (parentElement.shadowRoot) {
                parentElement = parentElement.shadowRoot;
            }
            styleElement.nativeElement.rel = 'stylesheet';
            this.renderer.appendChild(parentElement, styleElement.nativeElement);
        }
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
    { type: OutletService },
    { type: OutletStyleService },
    { type: Renderer2 }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvb3V0bGV0L291dGxldC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUVMLFNBQVMsRUFDVCxXQUFXLEVBQ1gsZ0JBQWdCLEdBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFLakQsTUFBTSxPQUFPLGVBQWU7Ozs7Ozs7O0lBUzFCLFlBQ1UsR0FBcUIsRUFDckIsV0FBNkIsRUFDN0IsYUFBNEIsRUFDNUIsa0JBQXNDLEVBQ3RDLFFBQW1CO1FBSm5CLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBQ3JCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUM3QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLGFBQVEsR0FBUixRQUFRLENBQVc7SUFDMUIsQ0FBQzs7Ozs7SUFYSixJQUNJLGVBQWUsQ0FBQyxLQUFhO1FBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFVRCxRQUFROztjQUNBLEtBQUssR0FBRyxFQUFFO1FBQ2hCLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzFELEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNqRSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUV6RCxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7Ozs7SUFFTyxjQUFjLENBQUMsUUFBd0IsRUFBRSxPQUFPLEdBQUcsS0FBSzs7Y0FDeEQsS0FBSyxHQUFHLEVBQUU7O2NBQ1YsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO1FBQ2hFLElBQUksUUFBUSxJQUFJLE9BQU8sRUFBRTs7a0JBQ2pCLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNwRSxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU87YUFDeEIsQ0FBQztZQUNGLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDOUI7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7OztJQUVPLGVBQWUsQ0FBQyxLQUFZOztjQUM1QixZQUFZLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRS9ELElBQUksWUFBWSxFQUFFOztnQkFDWixhQUFhLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksWUFBWSxXQUFXLENBQUM7WUFFbkUsSUFBSSxhQUFhLENBQUMsVUFBVSxFQUFFO2dCQUM1QixhQUFhLEdBQUcsYUFBYSxDQUFDLFVBQVUsQ0FBQzthQUMxQztZQUNELFlBQVksQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQztZQUM5QyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3RFO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxJQUFZLE9BQU87UUFDakIsc0NBQXNDO1FBQ3RDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDdEI7O2NBQ0ssR0FBRyxHQUFHLENBQUMsbUJBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPO1FBRWpELCtDQUErQztRQUMvQyw4QkFBOEI7UUFDOUIsT0FBTyxHQUFHLENBQUMsU0FBUyxJQUFJLEdBQUcsQ0FBQztJQUM5QixDQUFDOzs7WUFqRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2FBQ3ZCOzs7O1lBUkMsZ0JBQWdCO1lBRGhCLFdBQVc7WUFLSixhQUFhO1lBRmIsa0JBQWtCO1lBSnpCLFNBQVM7Ozt1QkFZUixLQUFLOzhCQUdMLEtBQUs7Ozs7SUFITixtQ0FBMEI7Ozs7O0lBRTFCLG1DQUF5Qjs7Ozs7SUFPdkIsOEJBQTZCOzs7OztJQUM3QixzQ0FBcUM7Ozs7O0lBQ3JDLHdDQUFvQzs7Ozs7SUFDcEMsNkNBQThDOzs7OztJQUM5QyxtQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3V0bGV0U3R5bGVTZXJ2aWNlIH0gZnJvbSAnLi9vdXRsZXQtc3R5bGUuc2VydmljZSc7XG5pbXBvcnQgeyBPdXRsZXRQb3NpdGlvbiB9IGZyb20gJy4vb3V0bGV0Lm1vZGVsJztcbmltcG9ydCB7IE91dGxldFNlcnZpY2UgfSBmcm9tICcuL291dGxldC5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N4T3V0bGV0XScsXG59KVxuZXhwb3J0IGNsYXNzIE91dGxldERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGN4T3V0bGV0OiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfY29udGV4dDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzZXQgY3hPdXRsZXRDb250ZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb250ZXh0ID0gdmFsdWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHZjcjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgIHByaXZhdGUgb3V0bGV0U2VydmljZTogT3V0bGV0U2VydmljZSxcbiAgICBwcml2YXRlIG91dGxldFN0eWxlU2VydmljZTogT3V0bGV0U3R5bGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3Qgbm9kZXMgPSBbXTtcbiAgICBub2Rlcy5wdXNoKC4uLnRoaXMucmVuZGVyVGVtcGxhdGUoT3V0bGV0UG9zaXRpb24uQkVGT1JFKSk7XG4gICAgbm9kZXMucHVzaCguLi50aGlzLnJlbmRlclRlbXBsYXRlKE91dGxldFBvc2l0aW9uLlJFUExBQ0UsIHRydWUpKTtcbiAgICBub2Rlcy5wdXNoKC4uLnRoaXMucmVuZGVyVGVtcGxhdGUoT3V0bGV0UG9zaXRpb24uQUZURVIpKTtcblxuICAgIHRoaXMucmVuZGVyU3R5bGVMaW5rKG5vZGVzKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyVGVtcGxhdGUocG9zaXRpb246IE91dGxldFBvc2l0aW9uLCByZXBsYWNlID0gZmFsc2UpOiBhbnlbXSB7XG4gICAgY29uc3Qgbm9kZXMgPSBbXTtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMub3V0bGV0U2VydmljZS5nZXQodGhpcy5jeE91dGxldCwgcG9zaXRpb24pO1xuICAgIGlmICh0ZW1wbGF0ZSB8fCByZXBsYWNlKSB7XG4gICAgICBjb25zdCByZWYgPSB0aGlzLnZjci5jcmVhdGVFbWJlZGRlZFZpZXcodGVtcGxhdGUgfHwgdGhpcy50ZW1wbGF0ZVJlZiwge1xuICAgICAgICAkaW1wbGljaXQ6IHRoaXMuY29udGV4dCxcbiAgICAgIH0pO1xuICAgICAgbm9kZXMucHVzaCguLi5yZWYucm9vdE5vZGVzKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJTdHlsZUxpbmsobm9kZXM6IGFueVtdKSB7XG4gICAgY29uc3Qgc3R5bGVFbGVtZW50ID0gdGhpcy5vdXRsZXRTdHlsZVNlcnZpY2UuZ2V0KHRoaXMuY3hPdXRsZXQpO1xuXG4gICAgaWYgKHN0eWxlRWxlbWVudCkge1xuICAgICAgbGV0IHBhcmVudEVsZW1lbnQgPSBub2Rlcy5maW5kKG5vZGUgPT4gbm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KTtcblxuICAgICAgaWYgKHBhcmVudEVsZW1lbnQuc2hhZG93Um9vdCkge1xuICAgICAgICBwYXJlbnRFbGVtZW50ID0gcGFyZW50RWxlbWVudC5zaGFkb3dSb290O1xuICAgICAgfVxuICAgICAgc3R5bGVFbGVtZW50Lm5hdGl2ZUVsZW1lbnQucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChwYXJlbnRFbGVtZW50LCBzdHlsZUVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXQgY29udGV4dCgpIHtcbiAgICAvLyByZXR1cm4gc3BlY2lmaWMgY29udGV4dCBpZiBwcm92aWRlZFxuICAgIGlmICh0aGlzLl9jb250ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5fY29udGV4dDtcbiAgICB9XG4gICAgY29uc3QgY3R4ID0gKDxhbnk+dGhpcy52Y3IuaW5qZWN0b3IpLnZpZXcuY29udGV4dDtcblxuICAgIC8vIHRoZSBjb250ZXh0IG1pZ2h0IGFscmVhZHkgYmUgZ2l2ZW4gJGltcGxpY2l0XG4gICAgLy8gYnkgYSBwYXJlbnQgKm5nSWYgb3IgKm5nRm9yXG4gICAgcmV0dXJuIGN0eC4kaW1wbGljaXQgfHwgY3R4O1xuICB9XG59XG4iXX0=