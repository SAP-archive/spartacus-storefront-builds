/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, TemplateRef, ViewContainerRef, Renderer2, } from '@angular/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9vdXRsZXQvb3V0bGV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsV0FBVyxFQUNYLGdCQUFnQixFQUVoQixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUtqRCxNQUFNLE9BQU8sZUFBZTs7Ozs7Ozs7SUFVMUIsWUFDVSxHQUFxQixFQUNyQixXQUE2QixFQUM3QixhQUE0QixFQUM1QixrQkFBc0MsRUFDdEMsUUFBbUI7UUFKbkIsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFDckIsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBQzdCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsYUFBUSxHQUFSLFFBQVEsQ0FBVztJQUMxQixDQUFDOzs7OztJQVhKLElBQ0ksZUFBZSxDQUFDLEtBQWE7UUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQzs7OztJQVVELFFBQVE7O2NBQ0EsS0FBSyxHQUFHLEVBQUU7UUFDaEIsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDMUQsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRXpELElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7OztJQUVPLGNBQWMsQ0FBQyxRQUF3QixFQUFFLE9BQU8sR0FBRyxLQUFLOztjQUN4RCxLQUFLLEdBQUcsRUFBRTs7Y0FDVixRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7UUFDaEUsSUFBSSxRQUFRLElBQUksT0FBTyxFQUFFOztrQkFDakIsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ3BFLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTzthQUN4QixDQUFDO1lBQ0YsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM5QjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7O0lBRU8sZUFBZSxDQUFDLEtBQVk7O2NBQzVCLFlBQVksR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFFL0QsSUFBSSxZQUFZLEVBQUU7O2dCQUNaLGFBQWEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxZQUFZLFdBQVcsQ0FBQztZQUVuRSxJQUFJLGFBQWEsQ0FBQyxVQUFVLEVBQUU7Z0JBQzVCLGFBQWEsR0FBRyxhQUFhLENBQUMsVUFBVSxDQUFDO2FBQzFDO1lBQ0QsWUFBWSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsWUFBWSxDQUFDO1lBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDdEU7SUFDSCxDQUFDOzs7OztJQUVELElBQVksT0FBTztRQUNqQixzQ0FBc0M7UUFDdEMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN0Qjs7Y0FDSyxHQUFHLEdBQUcsQ0FBQyxtQkFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU87UUFFakQsK0NBQStDO1FBQy9DLDhCQUE4QjtRQUM5QixPQUFPLEdBQUcsQ0FBQyxTQUFTLElBQUksR0FBRyxDQUFDO0lBQzlCLENBQUM7OztZQWxFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7YUFDdkI7Ozs7WUFYQyxnQkFBZ0I7WUFEaEIsV0FBVztZQVFKLGFBQWE7WUFGYixrQkFBa0I7WUFIekIsU0FBUzs7O3VCQVdSLEtBQUs7OEJBSUwsS0FBSzs7OztJQUpOLG1DQUNpQjs7Ozs7SUFFakIsbUNBQXlCOzs7OztJQU92Qiw4QkFBNkI7Ozs7O0lBQzdCLHNDQUFxQzs7Ozs7SUFDckMsd0NBQW9DOzs7OztJQUNwQyw2Q0FBOEM7Ozs7O0lBQzlDLG1DQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE91dGxldFN0eWxlU2VydmljZSB9IGZyb20gJy4vb3V0bGV0LXN0eWxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgT3V0bGV0UG9zaXRpb24gfSBmcm9tICcuL291dGxldC5tb2RlbCc7XG5pbXBvcnQgeyBPdXRsZXRTZXJ2aWNlIH0gZnJvbSAnLi9vdXRsZXQuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjeE91dGxldF0nLFxufSlcbmV4cG9ydCBjbGFzcyBPdXRsZXREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBjeE91dGxldDogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2NvbnRleHQ6IHN0cmluZztcbiAgQElucHV0KClcbiAgc2V0IGN4T3V0bGV0Q29udGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY29udGV4dCA9IHZhbHVlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB2Y3I6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcbiAgICBwcml2YXRlIG91dGxldFNlcnZpY2U6IE91dGxldFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBvdXRsZXRTdHlsZVNlcnZpY2U6IE91dGxldFN0eWxlU2VydmljZSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IG5vZGVzID0gW107XG4gICAgbm9kZXMucHVzaCguLi50aGlzLnJlbmRlclRlbXBsYXRlKE91dGxldFBvc2l0aW9uLkJFRk9SRSkpO1xuICAgIG5vZGVzLnB1c2goLi4udGhpcy5yZW5kZXJUZW1wbGF0ZShPdXRsZXRQb3NpdGlvbi5SRVBMQUNFLCB0cnVlKSk7XG4gICAgbm9kZXMucHVzaCguLi50aGlzLnJlbmRlclRlbXBsYXRlKE91dGxldFBvc2l0aW9uLkFGVEVSKSk7XG5cbiAgICB0aGlzLnJlbmRlclN0eWxlTGluayhub2Rlcyk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlclRlbXBsYXRlKHBvc2l0aW9uOiBPdXRsZXRQb3NpdGlvbiwgcmVwbGFjZSA9IGZhbHNlKTogYW55W10ge1xuICAgIGNvbnN0IG5vZGVzID0gW107XG4gICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLm91dGxldFNlcnZpY2UuZ2V0KHRoaXMuY3hPdXRsZXQsIHBvc2l0aW9uKTtcbiAgICBpZiAodGVtcGxhdGUgfHwgcmVwbGFjZSkge1xuICAgICAgY29uc3QgcmVmID0gdGhpcy52Y3IuY3JlYXRlRW1iZWRkZWRWaWV3KHRlbXBsYXRlIHx8IHRoaXMudGVtcGxhdGVSZWYsIHtcbiAgICAgICAgJGltcGxpY2l0OiB0aGlzLmNvbnRleHQsXG4gICAgICB9KTtcbiAgICAgIG5vZGVzLnB1c2goLi4ucmVmLnJvb3ROb2Rlcyk7XG4gICAgfVxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyU3R5bGVMaW5rKG5vZGVzOiBhbnlbXSkge1xuICAgIGNvbnN0IHN0eWxlRWxlbWVudCA9IHRoaXMub3V0bGV0U3R5bGVTZXJ2aWNlLmdldCh0aGlzLmN4T3V0bGV0KTtcblxuICAgIGlmIChzdHlsZUVsZW1lbnQpIHtcbiAgICAgIGxldCBwYXJlbnRFbGVtZW50ID0gbm9kZXMuZmluZChub2RlID0+IG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCk7XG5cbiAgICAgIGlmIChwYXJlbnRFbGVtZW50LnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgcGFyZW50RWxlbWVudCA9IHBhcmVudEVsZW1lbnQuc2hhZG93Um9vdDtcbiAgICAgIH1cbiAgICAgIHN0eWxlRWxlbWVudC5uYXRpdmVFbGVtZW50LnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQocGFyZW50RWxlbWVudCwgc3R5bGVFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGNvbnRleHQoKSB7XG4gICAgLy8gcmV0dXJuIHNwZWNpZmljIGNvbnRleHQgaWYgcHJvdmlkZWRcbiAgICBpZiAodGhpcy5fY29udGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NvbnRleHQ7XG4gICAgfVxuICAgIGNvbnN0IGN0eCA9ICg8YW55PnRoaXMudmNyLmluamVjdG9yKS52aWV3LmNvbnRleHQ7XG5cbiAgICAvLyB0aGUgY29udGV4dCBtaWdodCBhbHJlYWR5IGJlIGdpdmVuICRpbXBsaWNpdFxuICAgIC8vIGJ5IGEgcGFyZW50ICpuZ0lmIG9yICpuZ0ZvclxuICAgIHJldHVybiBjdHguJGltcGxpY2l0IHx8IGN0eDtcbiAgfVxufVxuIl19