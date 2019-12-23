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
        // Allthough the deferLoaderService might emit only once, as long as the hostElement
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvb3V0bGV0L291dGxldC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUUvRSxPQUFPLEVBQUUsY0FBYyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBS2pELE1BQU0sT0FBTyxlQUFlOzs7Ozs7O0lBOEIxQixZQUNVLEdBQXFCLEVBQ3JCLFdBQTZCLEVBQzdCLGFBRVAsRUFDTyxrQkFBdUM7UUFMdkMsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFDckIsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBQzdCLGtCQUFhLEdBQWIsYUFBYSxDQUVwQjtRQUNPLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBcUI7UUExQnZDLFdBQU0sR0FBMEIsSUFBSSxZQUFZLENBQVUsSUFBSSxDQUFDLENBQUM7UUFFMUUsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBeUIvQixDQUFDOzs7O0lBRUosUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNmO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxZQUFZO1FBQ2xCLElB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QyxpQ0FBMEU7O0lBRTFFLHVDQUFrQzs7Ozs7SUFtQmhDLDhCQUE2Qjs7Ozs7SUFDN0Isc0NBQXFDOzs7OztJQUNyQyx3Q0FFQzs7Ozs7SUFDRCw2Q0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnRGYWN0b3J5LFxuICBEaXJlY3RpdmUsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q29udGFpbmVyUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRGVmZXJMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbGF5b3V0L2xvYWRpbmcvZGVmZXItbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW50ZXJzZWN0aW9uT3B0aW9ucyB9IGZyb20gJy4uLy4uL2xheW91dC9sb2FkaW5nL2ludGVyc2VjdGlvbi5tb2RlbCc7XG5pbXBvcnQgeyBPdXRsZXRQb3NpdGlvbiwgVVNFX1NUQUNLRURfT1VUTEVUUyB9IGZyb20gJy4vb3V0bGV0Lm1vZGVsJztcbmltcG9ydCB7IE91dGxldFNlcnZpY2UgfSBmcm9tICcuL291dGxldC5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N4T3V0bGV0XScsXG59KVxuZXhwb3J0IGNsYXNzIE91dGxldERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgY3hPdXRsZXQ6IHN0cmluZztcblxuICBASW5wdXQoKSBjeE91dGxldENvbnRleHQ6IGFueTtcblxuICAvKipcbiAgICogRGVmZXJzIGxvYWRpbmcgb3B0aW9ucyBmb3IgdGhlIHRoZSB0ZW1wbGF0ZXMgb2YgdGhpcyBvdXRsZXQuXG4gICAqL1xuICBASW5wdXQoKSBjeE91dGxldERlZmVyOiBJbnRlcnNlY3Rpb25PcHRpb25zO1xuXG4gIEBPdXRwdXQoKSBsb2FkZWQ6IEV2ZW50RW1pdHRlcjxCb29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Qm9vbGVhbj4odHJ1ZSk7XG5cbiAgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHZjcjogVmlld0NvbnRhaW5lclJlZixcbiAgICB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcbiAgICBvdXRsZXRTZXJ2aWNlOiBPdXRsZXRTZXJ2aWNlPFRlbXBsYXRlUmVmPGFueT4gfCBDb21wb25lbnRGYWN0b3J5PGFueT4+LFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdW5pZmllZC1zaWduYXR1cmVzXG4gICAgaW50ZXJzZWN0aW9uU2VydmljZTogRGVmZXJMb2FkZXJTZXJ2aWNlXG4gICk7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuNFxuICAgKiBVc2UgY29uc3RydWN0b3IodmNyOiBWaWV3Q29udGFpbmVyUmVmLCB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Piwgb3V0bGV0U2VydmljZTogT3V0bGV0U2VydmljZTxUZW1wbGF0ZVJlZjxhbnk+IHwgQ29tcG9uZW50RmFjdG9yeTxhbnk+PiwgaW50ZXJzZWN0aW9uU2VydmljZT86IEludGVyc2VjdGlvblNlcnZpY2UpIGluc3RlYWRcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHZjcjogVmlld0NvbnRhaW5lclJlZixcbiAgICB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcbiAgICBvdXRsZXRTZXJ2aWNlOiBPdXRsZXRTZXJ2aWNlPFRlbXBsYXRlUmVmPGFueT4gfCBDb21wb25lbnRGYWN0b3J5PGFueT4+XG4gICk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdmNyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXG4gICAgcHJpdmF0ZSBvdXRsZXRTZXJ2aWNlOiBPdXRsZXRTZXJ2aWNlPFxuICAgICAgVGVtcGxhdGVSZWY8YW55PiB8IENvbXBvbmVudEZhY3Rvcnk8YW55PlxuICAgID4sXG4gICAgcHJpdmF0ZSBkZWZlckxvYWRlclNlcnZpY2U/OiBEZWZlckxvYWRlclNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmN4T3V0bGV0RGVmZXIpIHtcbiAgICAgIHRoaXMuZGVmZXJMb2FkaW5nKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBkZWZlckxvYWRpbmcoKSB7XG4gICAgdGhpcy5sb2FkZWQuZW1pdChmYWxzZSk7XG4gICAgY29uc3QgaG9zdEVsZW1lbnQgPSB0aGlzLmdldEhvc3RFbGVtZW50KHRoaXMudmNyLmVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgLy8gQWxsdGhvdWdoIHRoZSBkZWZlckxvYWRlclNlcnZpY2UgbWlnaHQgZW1pdCBvbmx5IG9uY2UsIGFzIGxvbmcgYXMgdGhlIGhvc3RFbGVtZW50XG4gICAgLy8gaXNuJ3QgYmVpbmcgbG9hZGVkLCB0aGVyZSdzIG5vIHZhbHVlIGJlaW5nIGVtaXR0ZWQuIFRoZXJlZm9yIHdlIG5lZWQgdG8gY2xlYW4gdXBcbiAgICAvLyB0aGUgc3Vic2NyaXB0aW9uIG9uIGRlc3Ryb3kuXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5kZWZlckxvYWRlclNlcnZpY2VcbiAgICAgICAgLmxvYWQoaG9zdEVsZW1lbnQsIHRoaXMuY3hPdXRsZXREZWZlcilcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICB0aGlzLmxvYWRlZC5lbWl0KHRydWUpO1xuICAgICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlcigpIHtcbiAgICB0aGlzLnJlbmRlck91dGxldChPdXRsZXRQb3NpdGlvbi5CRUZPUkUpO1xuICAgIHRoaXMucmVuZGVyT3V0bGV0KE91dGxldFBvc2l0aW9uLlJFUExBQ0UpO1xuICAgIHRoaXMucmVuZGVyT3V0bGV0KE91dGxldFBvc2l0aW9uLkFGVEVSKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyT3V0bGV0KHBvc2l0aW9uOiBPdXRsZXRQb3NpdGlvbik6IHZvaWQge1xuICAgIGxldCB0ZW1wbGF0ZXM6IGFueVtdID0gPGFueVtdPihcbiAgICAgIHRoaXMub3V0bGV0U2VydmljZS5nZXQodGhpcy5jeE91dGxldCwgcG9zaXRpb24sIFVTRV9TVEFDS0VEX09VVExFVFMpXG4gICAgKTtcblxuICAgIGlmICghdGVtcGxhdGVzICYmIHBvc2l0aW9uID09PSBPdXRsZXRQb3NpdGlvbi5SRVBMQUNFKSB7XG4gICAgICB0ZW1wbGF0ZXMgPSBbdGhpcy50ZW1wbGF0ZVJlZl07XG4gICAgfVxuXG4gICAgLy8gSnVzdCBpbiBjYXNlIHNvbWVvbmUgZXh0ZW5kZWQgdGhlIGBPdXRsZXRTZXJ2aWNlYCBhbmRcbiAgICAvLyByZXR1cm5zIGEgc2luZ3VsYXIgb2JqZWN0LlxuICAgIGlmICghQXJyYXkuaXNBcnJheSh0ZW1wbGF0ZXMpKSB7XG4gICAgICB0ZW1wbGF0ZXMgPSBbdGVtcGxhdGVzXTtcbiAgICB9XG5cbiAgICB0ZW1wbGF0ZXMuZm9yRWFjaChvYmogPT4ge1xuICAgICAgdGhpcy5jcmVhdGUob2JqKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlKHRtcGxPckZhY3Rvcnk6IGFueSk6IHZvaWQge1xuICAgIGlmICh0bXBsT3JGYWN0b3J5IGluc3RhbmNlb2YgQ29tcG9uZW50RmFjdG9yeSkge1xuICAgICAgdGhpcy52Y3IuY3JlYXRlQ29tcG9uZW50KHRtcGxPckZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAodG1wbE9yRmFjdG9yeSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICBjb25zdCB2aWV3ID0gdGhpcy52Y3IuY3JlYXRlRW1iZWRkZWRWaWV3KFxuICAgICAgICA8VGVtcGxhdGVSZWY8YW55Pj50bXBsT3JGYWN0b3J5LFxuICAgICAgICB7XG4gICAgICAgICAgJGltcGxpY2l0OiB0aGlzLmN4T3V0bGV0Q29udGV4dCxcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgLy8gd2UgZG8gbm90IGtub3cgaWYgY29udGVudCBpcyBjcmVhdGVkIGR5bmFtaWNhbGx5IG9yIG5vdFxuICAgICAgLy8gc28gd2UgYXBwbHkgY2hhbmdlIGRldGVjdGlvbiBhbnl3YXlcbiAgICAgIHZpZXcubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNsb3Nlc3QgYEh0bWxFbGVtZW50YCwgYnkgaXRlcmF0aW5nIG92ZXIgdGhlXG4gICAqIHBhcmVudCBlbGVtZW50cyBvZiB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIGVsZW1lbnRcbiAgICovXG4gIHByaXZhdGUgZ2V0SG9zdEVsZW1lbnQoZWxlbWVudDogRWxlbWVudCk6IEhUTUxFbGVtZW50IHtcbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZ2V0SG9zdEVsZW1lbnQoZWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==