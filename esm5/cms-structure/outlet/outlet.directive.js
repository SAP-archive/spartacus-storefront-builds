/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ComponentFactory, Directive, EventEmitter, Input, Output, TemplateRef, ViewContainerRef, } from '@angular/core';
import { Subscription } from 'rxjs';
import { DeferLoaderService } from '../../layout/loading/defer-loader.service';
import { OutletPosition, USE_STACKED_OUTLETS } from './outlet.model';
import { OutletService } from './outlet.service';
var OutletDirective = /** @class */ (function () {
    function OutletDirective(vcr, templateRef, outletService, deferLoaderService) {
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
    OutletDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.cxOutletDefer) {
            this.deferLoading();
        }
        else {
            this.render();
        }
    };
    /**
     * @private
     * @return {?}
     */
    OutletDirective.prototype.deferLoading = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.loaded.emit(false);
        /** @type {?} */
        var hostElement = this.getHostElement(this.vcr.element.nativeElement);
        // Allthough the deferLoaderService might emit only once, as long as the hostElement
        // isn't being loaded, there's no value being emitted. Therefor we need to clean up
        // the subscription on destroy.
        this.subscription.add(this.deferLoaderService
            .load(hostElement, this.cxOutletDefer)
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.render();
            _this.loaded.emit(true);
        })));
    };
    /**
     * @private
     * @return {?}
     */
    OutletDirective.prototype.render = /**
     * @private
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
            /** @type {?} */
            var view = this.vcr.createEmbeddedView((/** @type {?} */ (tmplOrFactory)), {
                $implicit: this.cxOutletContext,
            });
            // we do not know if content is created dynamically or not
            // so we apply change detection anyway
            view.markForCheck();
        }
    };
    /**
     * Returns the closest `HtmlElement`, by iterating over the
     * parent elements of the given element.
     *
     * @param element
     */
    /**
     * Returns the closest `HtmlElement`, by iterating over the
     * parent elements of the given element.
     *
     * @private
     * @param {?} element
     * @return {?}
     */
    OutletDirective.prototype.getHostElement = /**
     * Returns the closest `HtmlElement`, by iterating over the
     * parent elements of the given element.
     *
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (element instanceof HTMLElement) {
            return element;
        }
        return this.getHostElement(element.parentElement);
    };
    /**
     * @return {?}
     */
    OutletDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
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
        { type: OutletService },
        { type: DeferLoaderService }
    ]; };
    OutletDirective.propDecorators = {
        cxOutlet: [{ type: Input }],
        cxOutletContext: [{ type: Input }],
        cxOutletDefer: [{ type: Input }],
        loaded: [{ type: Output }]
    };
    return OutletDirective;
}());
export { OutletDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0bGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvb3V0bGV0L291dGxldC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUUvRSxPQUFPLEVBQUUsY0FBYyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWpEO0lBaUNFLHlCQUNVLEdBQXFCLEVBQ3JCLFdBQTZCLEVBQzdCLGFBRVAsRUFDTyxrQkFBdUM7UUFMdkMsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFDckIsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBQzdCLGtCQUFhLEdBQWIsYUFBYSxDQUVwQjtRQUNPLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBcUI7UUExQnZDLFdBQU0sR0FBMEIsSUFBSSxZQUFZLENBQVUsSUFBSSxDQUFDLENBQUM7UUFFMUUsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBeUIvQixDQUFDOzs7O0lBRUosa0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Y7SUFDSCxDQUFDOzs7OztJQUVPLHNDQUFZOzs7O0lBQXBCO1FBQUEsaUJBY0M7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S0FBSztnQ0FLTCxLQUFLO3lCQUVMLE1BQU07O0lBZ0hULHNCQUFDO0NBQUEsQUE3SEQsSUE2SEM7U0ExSFksZUFBZTs7O0lBQzFCLG1DQUEwQjs7SUFFMUIsMENBQThCOzs7OztJQUs5Qix3Q0FBNEM7O0lBRTVDLGlDQUEwRTs7SUFFMUUsdUNBQWtDOzs7OztJQW1CaEMsOEJBQTZCOzs7OztJQUM3QixzQ0FBcUM7Ozs7O0lBQ3JDLHdDQUVDOzs7OztJQUNELDZDQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudEZhY3RvcnksXG4gIERpcmVjdGl2ZSxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEZWZlckxvYWRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9sYXlvdXQvbG9hZGluZy9kZWZlci1sb2FkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBJbnRlcnNlY3Rpb25PcHRpb25zIH0gZnJvbSAnLi4vLi4vbGF5b3V0L2xvYWRpbmcvaW50ZXJzZWN0aW9uLm1vZGVsJztcbmltcG9ydCB7IE91dGxldFBvc2l0aW9uLCBVU0VfU1RBQ0tFRF9PVVRMRVRTIH0gZnJvbSAnLi9vdXRsZXQubW9kZWwnO1xuaW1wb3J0IHsgT3V0bGV0U2VydmljZSB9IGZyb20gJy4vb3V0bGV0LnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY3hPdXRsZXRdJyxcbn0pXG5leHBvcnQgY2xhc3MgT3V0bGV0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBjeE91dGxldDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIGN4T3V0bGV0Q29udGV4dDogYW55O1xuXG4gIC8qKlxuICAgKiBEZWZlcnMgbG9hZGluZyBvcHRpb25zIGZvciB0aGUgdGhlIHRlbXBsYXRlcyBvZiB0aGlzIG91dGxldC5cbiAgICovXG4gIEBJbnB1dCgpIGN4T3V0bGV0RGVmZXI6IEludGVyc2VjdGlvbk9wdGlvbnM7XG5cbiAgQE91dHB1dCgpIGxvYWRlZDogRXZlbnRFbWl0dGVyPEJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxCb29sZWFuPih0cnVlKTtcblxuICBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgdmNyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgIG91dGxldFNlcnZpY2U6IE91dGxldFNlcnZpY2U8VGVtcGxhdGVSZWY8YW55PiB8IENvbXBvbmVudEZhY3Rvcnk8YW55Pj4sXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB1bmlmaWVkLXNpZ25hdHVyZXNcbiAgICBpbnRlcnNlY3Rpb25TZXJ2aWNlOiBEZWZlckxvYWRlclNlcnZpY2VcbiAgKTtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS40XG4gICAqIFVzZSBjb25zdHJ1Y3Rvcih2Y3I6IFZpZXdDb250YWluZXJSZWYsIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LCBvdXRsZXRTZXJ2aWNlOiBPdXRsZXRTZXJ2aWNlPFRlbXBsYXRlUmVmPGFueT4gfCBDb21wb25lbnRGYWN0b3J5PGFueT4+LCBpbnRlcnNlY3Rpb25TZXJ2aWNlPzogSW50ZXJzZWN0aW9uU2VydmljZSkgaW5zdGVhZFxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgdmNyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgIG91dGxldFNlcnZpY2U6IE91dGxldFNlcnZpY2U8VGVtcGxhdGVSZWY8YW55PiB8IENvbXBvbmVudEZhY3Rvcnk8YW55Pj5cbiAgKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB2Y3I6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcbiAgICBwcml2YXRlIG91dGxldFNlcnZpY2U6IE91dGxldFNlcnZpY2U8XG4gICAgICBUZW1wbGF0ZVJlZjxhbnk+IHwgQ29tcG9uZW50RmFjdG9yeTxhbnk+XG4gICAgPixcbiAgICBwcml2YXRlIGRlZmVyTG9hZGVyU2VydmljZT86IERlZmVyTG9hZGVyU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY3hPdXRsZXREZWZlcikge1xuICAgICAgdGhpcy5kZWZlckxvYWRpbmcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGRlZmVyTG9hZGluZygpIHtcbiAgICB0aGlzLmxvYWRlZC5lbWl0KGZhbHNlKTtcbiAgICBjb25zdCBob3N0RWxlbWVudCA9IHRoaXMuZ2V0SG9zdEVsZW1lbnQodGhpcy52Y3IuZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICAvLyBBbGx0aG91Z2ggdGhlIGRlZmVyTG9hZGVyU2VydmljZSBtaWdodCBlbWl0IG9ubHkgb25jZSwgYXMgbG9uZyBhcyB0aGUgaG9zdEVsZW1lbnRcbiAgICAvLyBpc24ndCBiZWluZyBsb2FkZWQsIHRoZXJlJ3Mgbm8gdmFsdWUgYmVpbmcgZW1pdHRlZC4gVGhlcmVmb3Igd2UgbmVlZCB0byBjbGVhbiB1cFxuICAgIC8vIHRoZSBzdWJzY3JpcHRpb24gb24gZGVzdHJveS5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLmRlZmVyTG9hZGVyU2VydmljZVxuICAgICAgICAubG9hZChob3N0RWxlbWVudCwgdGhpcy5jeE91dGxldERlZmVyKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgIHRoaXMubG9hZGVkLmVtaXQodHJ1ZSk7XG4gICAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyKCkge1xuICAgIHRoaXMucmVuZGVyT3V0bGV0KE91dGxldFBvc2l0aW9uLkJFRk9SRSk7XG4gICAgdGhpcy5yZW5kZXJPdXRsZXQoT3V0bGV0UG9zaXRpb24uUkVQTEFDRSk7XG4gICAgdGhpcy5yZW5kZXJPdXRsZXQoT3V0bGV0UG9zaXRpb24uQUZURVIpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJPdXRsZXQocG9zaXRpb246IE91dGxldFBvc2l0aW9uKTogdm9pZCB7XG4gICAgbGV0IHRlbXBsYXRlczogYW55W10gPSA8YW55W10+KFxuICAgICAgdGhpcy5vdXRsZXRTZXJ2aWNlLmdldCh0aGlzLmN4T3V0bGV0LCBwb3NpdGlvbiwgVVNFX1NUQUNLRURfT1VUTEVUUylcbiAgICApO1xuXG4gICAgaWYgKCF0ZW1wbGF0ZXMgJiYgcG9zaXRpb24gPT09IE91dGxldFBvc2l0aW9uLlJFUExBQ0UpIHtcbiAgICAgIHRlbXBsYXRlcyA9IFt0aGlzLnRlbXBsYXRlUmVmXTtcbiAgICB9XG5cbiAgICAvLyBKdXN0IGluIGNhc2Ugc29tZW9uZSBleHRlbmRlZCB0aGUgYE91dGxldFNlcnZpY2VgIGFuZFxuICAgIC8vIHJldHVybnMgYSBzaW5ndWxhciBvYmplY3QuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHRlbXBsYXRlcykpIHtcbiAgICAgIHRlbXBsYXRlcyA9IFt0ZW1wbGF0ZXNdO1xuICAgIH1cblxuICAgIHRlbXBsYXRlcy5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICB0aGlzLmNyZWF0ZShvYmopO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGUodG1wbE9yRmFjdG9yeTogYW55KTogdm9pZCB7XG4gICAgaWYgKHRtcGxPckZhY3RvcnkgaW5zdGFuY2VvZiBDb21wb25lbnRGYWN0b3J5KSB7XG4gICAgICB0aGlzLnZjci5jcmVhdGVDb21wb25lbnQodG1wbE9yRmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0bXBsT3JGYWN0b3J5IGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLnZjci5jcmVhdGVFbWJlZGRlZFZpZXcoXG4gICAgICAgIDxUZW1wbGF0ZVJlZjxhbnk+PnRtcGxPckZhY3RvcnksXG4gICAgICAgIHtcbiAgICAgICAgICAkaW1wbGljaXQ6IHRoaXMuY3hPdXRsZXRDb250ZXh0LFxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICAvLyB3ZSBkbyBub3Qga25vdyBpZiBjb250ZW50IGlzIGNyZWF0ZWQgZHluYW1pY2FsbHkgb3Igbm90XG4gICAgICAvLyBzbyB3ZSBhcHBseSBjaGFuZ2UgZGV0ZWN0aW9uIGFueXdheVxuICAgICAgdmlldy5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY2xvc2VzdCBgSHRtbEVsZW1lbnRgLCBieSBpdGVyYXRpbmcgb3ZlciB0aGVcbiAgICogcGFyZW50IGVsZW1lbnRzIG9mIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0gZWxlbWVudFxuICAgKi9cbiAgcHJpdmF0ZSBnZXRIb3N0RWxlbWVudChlbGVtZW50OiBFbGVtZW50KTogSFRNTEVsZW1lbnQge1xuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5nZXRIb3N0RWxlbWVudChlbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19