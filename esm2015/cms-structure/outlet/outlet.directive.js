/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ComponentFactory, Directive, EventEmitter, Input, Output, TemplateRef, ViewContainerRef, } from '@angular/core';
import { Subscription } from 'rxjs';
import { DeferLoaderService } from '../../layout/loading/defer-loader.service';
import { OutletPosition, USE_STACKED_OUTLETS } from './outlet.model';
import { OutletService } from './outlet.service';
export class OutletDirective {
    /**
     * @param {?} vcr
     * @param {?} templateRef
     * @param {?} outletService
     * @param {?=} deferLoaderService
     */
    constructor(vcr, templateRef, outletService, deferLoaderService) {
        this.vcr = vcr;
        this.templateRef = templateRef;
        this.outletService = outletService;
        this.deferLoaderService = deferLoaderService;
        this.loaded = new EventEmitter(true);
        this.subscription = new Subscription();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.cxOutletDefer) {
            this.deferLoading();
        }
        else {
            this.render();
        }
    }
    /**
     * @private
     * @return {?}
     */
    deferLoading() {
        this.loaded.emit(false);
        /** @type {?} */
        const hostElement = this.getHostElement(this.vcr.element.nativeElement);
        // allthought the deferLoaderService might emit only once, as long as the hostElement
        // isn't being loaded, there's no value being emitted. Therefor we need to clean up
        // the subscription on destroy.
        this.subscription.add(this.deferLoaderService
            .load(hostElement, this.cxOutletDefer)
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.render();
            this.loaded.emit(true);
        })));
    }
    /**
     * @private
     * @return {?}
     */
    render() {
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
            /** @type {?} */
            const view = this.vcr.createEmbeddedView((/** @type {?} */ (tmplOrFactory)), {
                $implicit: this.cxOutletContext,
            });
            // we do not know if content is created dynamically or not
            // so we apply change detection anyway
            view.markForCheck();
        }
    }
    /**
     * Returns the closest `HtmlElement`, by iterating over the
     * parent elements of the given element.
     *
     * @private
     * @param {?} element
     * @return {?}
     */
    getHostElement(element) {
        if (element instanceof HTMLElement) {
            return element;
        }
        return this.getHostElement(element.parentElement);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
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
    { type: DeferLoaderService }
];
OutletDirective.propDecorators = {
    cxOutlet: [{ type: Input }],
    cxOutletContext: [{ type: Input }],
    cxOutletDefer: [{ type: Input }],
    loaded: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    OutletDirective.prototype.cxOutlet;
    /** @type {?} */
    OutletDirective.prototype.cxOutletContext;
    /**
     * Defers loading options for the the templates of this outlet.
     * @type {?}
     */
    OutletDirective.prototype.cxOutletDefer;
    /** @type {?} */
    OutletDirective.prototype.loaded;
    /** @type {?} */
    OutletDirective.prototype.subscription;
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
    OutletDirective.prototype.deferLoaderService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvb3V0bGV0L291dGxldC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUUvRSxPQUFPLEVBQUUsY0FBYyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBS2pELE1BQU0sT0FBTyxlQUFlOzs7Ozs7O0lBOEIxQixZQUNVLEdBQXFCLEVBQ3JCLFdBQTZCLEVBQzdCLGFBRVAsRUFDTyxrQkFBdUM7UUFMdkMsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFDckIsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBQzdCLGtCQUFhLEdBQWIsYUFBYSxDQUVwQjtRQUNPLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBcUI7UUExQnZDLFdBQU0sR0FBMEIsSUFBSSxZQUFZLENBQVUsSUFBSSxDQUFDLENBQUM7UUFFMUUsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBeUIvQixDQUFDOzs7O0lBRUosUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNmO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxZQUFZO1FBQ2xCLElB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QyxpQ0FBMEU7O0lBRTFFLHVDQUFrQzs7Ozs7SUFtQmhDLDhCQUE2Qjs7Ozs7SUFDN0Isc0NBQXFDOzs7OztJQUNyQyx3Q0FFQzs7Ozs7SUFDRCw2Q0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnRGYWN0b3J5LFxuICBEaXJlY3RpdmUsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q29udGFpbmVyUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRGVmZXJMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbGF5b3V0L2xvYWRpbmcvZGVmZXItbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW50ZXJzZWN0aW9uT3B0aW9ucyB9IGZyb20gJy4uLy4uL2xheW91dC9sb2FkaW5nL2ludGVyc2VjdGlvbi5tb2RlbCc7XG5pbXBvcnQgeyBPdXRsZXRQb3NpdGlvbiwgVVNFX1NUQUNLRURfT1VUTEVUUyB9IGZyb20gJy4vb3V0bGV0Lm1vZGVsJztcbmltcG9ydCB7IE91dGxldFNlcnZpY2UgfSBmcm9tICcuL291dGxldC5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N4T3V0bGV0XScsXG59KVxuZXhwb3J0IGNsYXNzIE91dGxldERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgY3hPdXRsZXQ6IHN0cmluZztcblxuICBASW5wdXQoKSBjeE91dGxldENvbnRleHQ6IGFueTtcblxuICAvKipcbiAgICogRGVmZXJzIGxvYWRpbmcgb3B0aW9ucyBmb3IgdGhlIHRoZSB0ZW1wbGF0ZXMgb2YgdGhpcyBvdXRsZXQuXG4gICAqL1xuICBASW5wdXQoKSBjeE91dGxldERlZmVyOiBJbnRlcnNlY3Rpb25PcHRpb25zO1xuXG4gIEBPdXRwdXQoKSBsb2FkZWQ6IEV2ZW50RW1pdHRlcjxCb29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Qm9vbGVhbj4odHJ1ZSk7XG5cbiAgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHZjcjogVmlld0NvbnRhaW5lclJlZixcbiAgICB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcbiAgICBvdXRsZXRTZXJ2aWNlOiBPdXRsZXRTZXJ2aWNlPFRlbXBsYXRlUmVmPGFueT4gfCBDb21wb25lbnRGYWN0b3J5PGFueT4+LFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdW5pZmllZC1zaWduYXR1cmVzXG4gICAgaW50ZXJzZWN0aW9uU2VydmljZTogRGVmZXJMb2FkZXJTZXJ2aWNlXG4gICk7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuNFxuICAgKiBVc2UgY29uc3RydWN0b3IodmNyOiBWaWV3Q29udGFpbmVyUmVmLCB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Piwgb3V0bGV0U2VydmljZTogT3V0bGV0U2VydmljZTxUZW1wbGF0ZVJlZjxhbnk+IHwgQ29tcG9uZW50RmFjdG9yeTxhbnk+PiwgaW50ZXJzZWN0aW9uU2VydmljZT86IEludGVyc2VjdGlvblNlcnZpY2UpIGluc3RlYWRcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHZjcjogVmlld0NvbnRhaW5lclJlZixcbiAgICB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcbiAgICBvdXRsZXRTZXJ2aWNlOiBPdXRsZXRTZXJ2aWNlPFRlbXBsYXRlUmVmPGFueT4gfCBDb21wb25lbnRGYWN0b3J5PGFueT4+XG4gICk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdmNyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXG4gICAgcHJpdmF0ZSBvdXRsZXRTZXJ2aWNlOiBPdXRsZXRTZXJ2aWNlPFxuICAgICAgVGVtcGxhdGVSZWY8YW55PiB8IENvbXBvbmVudEZhY3Rvcnk8YW55PlxuICAgID4sXG4gICAgcHJpdmF0ZSBkZWZlckxvYWRlclNlcnZpY2U/OiBEZWZlckxvYWRlclNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmN4T3V0bGV0RGVmZXIpIHtcbiAgICAgIHRoaXMuZGVmZXJMb2FkaW5nKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBkZWZlckxvYWRpbmcoKSB7XG4gICAgdGhpcy5sb2FkZWQuZW1pdChmYWxzZSk7XG4gICAgY29uc3QgaG9zdEVsZW1lbnQgPSB0aGlzLmdldEhvc3RFbGVtZW50KHRoaXMudmNyLmVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgLy8gYWxsdGhvdWdodCB0aGUgZGVmZXJMb2FkZXJTZXJ2aWNlIG1pZ2h0IGVtaXQgb25seSBvbmNlLCBhcyBsb25nIGFzIHRoZSBob3N0RWxlbWVudFxuICAgIC8vIGlzbid0IGJlaW5nIGxvYWRlZCwgdGhlcmUncyBubyB2YWx1ZSBiZWluZyBlbWl0dGVkLiBUaGVyZWZvciB3ZSBuZWVkIHRvIGNsZWFuIHVwXG4gICAgLy8gdGhlIHN1YnNjcmlwdGlvbiBvbiBkZXN0cm95LlxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMuZGVmZXJMb2FkZXJTZXJ2aWNlXG4gICAgICAgIC5sb2FkKGhvc3RFbGVtZW50LCB0aGlzLmN4T3V0bGV0RGVmZXIpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgdGhpcy5sb2FkZWQuZW1pdCh0cnVlKTtcbiAgICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXIoKSB7XG4gICAgdGhpcy5yZW5kZXJPdXRsZXQoT3V0bGV0UG9zaXRpb24uQkVGT1JFKTtcbiAgICB0aGlzLnJlbmRlck91dGxldChPdXRsZXRQb3NpdGlvbi5SRVBMQUNFKTtcbiAgICB0aGlzLnJlbmRlck91dGxldChPdXRsZXRQb3NpdGlvbi5BRlRFUik7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlck91dGxldChwb3NpdGlvbjogT3V0bGV0UG9zaXRpb24pOiB2b2lkIHtcbiAgICBsZXQgdGVtcGxhdGVzOiBhbnlbXSA9IDxhbnlbXT4oXG4gICAgICB0aGlzLm91dGxldFNlcnZpY2UuZ2V0KHRoaXMuY3hPdXRsZXQsIHBvc2l0aW9uLCBVU0VfU1RBQ0tFRF9PVVRMRVRTKVxuICAgICk7XG5cbiAgICBpZiAoIXRlbXBsYXRlcyAmJiBwb3NpdGlvbiA9PT0gT3V0bGV0UG9zaXRpb24uUkVQTEFDRSkge1xuICAgICAgdGVtcGxhdGVzID0gW3RoaXMudGVtcGxhdGVSZWZdO1xuICAgIH1cblxuICAgIC8vIEp1c3QgaW4gY2FzZSBzb21lb25lIGV4dGVuZGVkIHRoZSBgT3V0bGV0U2VydmljZWAgYW5kXG4gICAgLy8gcmV0dXJucyBhIHNpbmd1bGFyIG9iamVjdC5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodGVtcGxhdGVzKSkge1xuICAgICAgdGVtcGxhdGVzID0gW3RlbXBsYXRlc107XG4gICAgfVxuXG4gICAgdGVtcGxhdGVzLmZvckVhY2gob2JqID0+IHtcbiAgICAgIHRoaXMuY3JlYXRlKG9iaik7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZSh0bXBsT3JGYWN0b3J5OiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodG1wbE9yRmFjdG9yeSBpbnN0YW5jZW9mIENvbXBvbmVudEZhY3RvcnkpIHtcbiAgICAgIHRoaXMudmNyLmNyZWF0ZUNvbXBvbmVudCh0bXBsT3JGYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHRtcGxPckZhY3RvcnkgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgY29uc3QgdmlldyA9IHRoaXMudmNyLmNyZWF0ZUVtYmVkZGVkVmlldyhcbiAgICAgICAgPFRlbXBsYXRlUmVmPGFueT4+dG1wbE9yRmFjdG9yeSxcbiAgICAgICAge1xuICAgICAgICAgICRpbXBsaWNpdDogdGhpcy5jeE91dGxldENvbnRleHQsXG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIC8vIHdlIGRvIG5vdCBrbm93IGlmIGNvbnRlbnQgaXMgY3JlYXRlZCBkeW5hbWljYWxseSBvciBub3RcbiAgICAgIC8vIHNvIHdlIGFwcGx5IGNoYW5nZSBkZXRlY3Rpb24gYW55d2F5XG4gICAgICB2aWV3Lm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjbG9zZXN0IGBIdG1sRWxlbWVudGAsIGJ5IGl0ZXJhdGluZyBvdmVyIHRoZVxuICAgKiBwYXJlbnQgZWxlbWVudHMgb2YgdGhlIGdpdmVuIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSBlbGVtZW50XG4gICAqL1xuICBwcml2YXRlIGdldEhvc3RFbGVtZW50KGVsZW1lbnQ6IEVsZW1lbnQpOiBIVE1MRWxlbWVudCB7XG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmdldEhvc3RFbGVtZW50KGVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=