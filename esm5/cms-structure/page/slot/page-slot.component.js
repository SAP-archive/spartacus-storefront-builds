/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, Renderer2, } from '@angular/core';
import { CmsConfig, CmsService, DynamicAttributeService, } from '@spartacus/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
var PageSlotComponent = /** @class */ (function () {
    function PageSlotComponent(cmsService, dynamicAttributeService, renderer, hostElement, config) {
        var _this = this;
        this.cmsService = cmsService;
        this.dynamicAttributeService = dynamicAttributeService;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.config = config;
        this.isPending = true;
        this.hasComponents = false;
        this.isPageFold = false;
        this.position$ = new BehaviorSubject(undefined);
        /**
         * observable with `ContentSlotData` for the current position
         *
         * @deprecated we'll stop supporting this property in 2.0 as
         * it is not used separately.
         */
        this.slot$ = this.position$.pipe(switchMap((/**
         * @param {?} position
         * @return {?}
         */
        function (position) { return _this.cmsService.getContentSlot(position); })), tap((/**
         * @param {?} slot
         * @return {?}
         */
        function (slot) { return _this.addSmartEditSlotClass(slot); })));
        this.components$ = this.slot$.pipe(map((/**
         * @param {?} slot
         * @return {?}
         */
        function (slot) { return (slot && slot.components ? slot.components : []); })), distinctUntilChanged((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) {
            return a.length === b.length && !a.find((/**
             * @param {?} el
             * @param {?} index
             * @return {?}
             */
            function (el, index) { return el.uid !== b[index].uid; }));
        })));
        this.subscription = new Subscription();
    }
    Object.defineProperty(PageSlotComponent.prototype, "position", {
        get: /**
         * @return {?}
         */
        function () {
            return this.position$.value;
        },
        // need to have this host binding at the top as it will override the entire class
        set: 
        // need to have this host binding at the top as it will override the entire class
        /**
         * @param {?} position
         * @return {?}
         */
        function (position) {
            this.position$.next(position);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PageSlotComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscription.add(this.components$.subscribe((/**
         * @param {?} components
         * @return {?}
         */
        function (components) {
            _this.hasComponents = components && components.length > 0;
            _this.pendingComponentCount = components ? components.length : 0;
            _this.isPending = _this.pendingComponentCount > 0;
        })));
    };
    /**
     * @return {?}
     */
    PageSlotComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
    };
    /**
     * Is triggered when a component is added to the view.
     * We use this information to dropthe `is-pending` class from the page slot
     * when all nested components have been added.
     */
    /**
     * Is triggered when a component is added to the view.
     * We use this information to dropthe `is-pending` class from the page slot
     * when all nested components have been added.
     * @param {?} loadState
     * @return {?}
     */
    PageSlotComponent.prototype.isLoaded = /**
     * Is triggered when a component is added to the view.
     * We use this information to dropthe `is-pending` class from the page slot
     * when all nested components have been added.
     * @param {?} loadState
     * @return {?}
     */
    function (loadState) {
        if (loadState) {
            this.pendingComponentCount--;
        }
        this.isPending = this.pendingComponentCount > 0;
    };
    /**
     * @param {?} componentType
     * @return {?}
     */
    PageSlotComponent.prototype.getComponentDeferOptions = /**
     * @param {?} componentType
     * @return {?}
     */
    function (componentType) {
        /** @type {?} */
        var deferLoading = this.getDeferLoadingStrategy(componentType);
        return { deferLoading: deferLoading };
    };
    /**
     * The `DeferLoadingStrategy` indicates whether component rendering
     * should be deferred.
     */
    /**
     * The `DeferLoadingStrategy` indicates whether component rendering
     * should be deferred.
     * @private
     * @param {?} componentType
     * @return {?}
     */
    PageSlotComponent.prototype.getDeferLoadingStrategy = /**
     * The `DeferLoadingStrategy` indicates whether component rendering
     * should be deferred.
     * @private
     * @param {?} componentType
     * @return {?}
     */
    function (componentType) {
        if (this.config) {
            return (((/** @type {?} */ (this.config))).cmsComponents[componentType] || {})
                .deferLoading;
        }
    };
    /**
     * @private
     * @param {?} slot
     * @return {?}
     */
    PageSlotComponent.prototype.addSmartEditSlotClass = /**
     * @private
     * @param {?} slot
     * @return {?}
     */
    function (slot) {
        if (slot && this.cmsService.isLaunchInSmartEdit()) {
            this.addSmartEditContract(slot);
        }
    };
    /**
     * @private
     * @param {?} slot
     * @return {?}
     */
    PageSlotComponent.prototype.addSmartEditContract = /**
     * @private
     * @param {?} slot
     * @return {?}
     */
    function (slot) {
        this.dynamicAttributeService.addDynamicAttributes(slot.properties, this.hostElement.nativeElement, this.renderer);
    };
    PageSlotComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-page-slot',
                    template: "<ng-template\n  [cxOutlet]=\"position\"\n  [cxOutletContext]=\"{ components$: components$ }\"\n  [cxSkipLink]=\"position$ | async\"\n>\n  <ng-template\n    *ngFor=\"let component of components$ | async\"\n    [cxOutlet]=\"component.flexType\"\n    [cxOutletContext]=\"{ component: component }\"\n    [cxOutletDefer]=\"getComponentDeferOptions(component.flexType)\"\n    (loaded)=\"isLoaded($event)\"\n  >\n    <ng-container [cxComponentWrapper]=\"component\"></ng-container>\n  </ng-template>\n</ng-template>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    PageSlotComponent.ctorParameters = function () { return [
        { type: CmsService },
        { type: DynamicAttributeService },
        { type: Renderer2 },
        { type: ElementRef },
        { type: CmsConfig }
    ]; };
    PageSlotComponent.propDecorators = {
        position: [{ type: HostBinding, args: ['class',] }, { type: Input }],
        isPending: [{ type: HostBinding, args: ['class.cx-pending',] }],
        hasComponents: [{ type: HostBinding, args: ['class.has-components',] }],
        isPageFold: [{ type: HostBinding, args: ['class.page-fold',] }, { type: Input }]
    };
    return PageSlotComponent;
}());
export { PageSlotComponent };
if (false) {
    /** @type {?} */
    PageSlotComponent.prototype.isPending;
    /** @type {?} */
    PageSlotComponent.prototype.hasComponents;
    /** @type {?} */
    PageSlotComponent.prototype.isPageFold;
    /**
     * @type {?}
     * @private
     */
    PageSlotComponent.prototype.pendingComponentCount;
    /** @type {?} */
    PageSlotComponent.prototype.position$;
    /**
     * observable with `ContentSlotData` for the current position
     *
     * @deprecated we'll stop supporting this property in 2.0 as
     * it is not used separately.
     * @type {?}
     */
    PageSlotComponent.prototype.slot$;
    /** @type {?} */
    PageSlotComponent.prototype.components$;
    /**
     * @type {?}
     * @private
     */
    PageSlotComponent.prototype.subscription;
    /**
     * @type {?}
     * @protected
     */
    PageSlotComponent.prototype.cmsService;
    /**
     * @type {?}
     * @protected
     */
    PageSlotComponent.prototype.dynamicAttributeService;
    /**
     * @type {?}
     * @protected
     */
    PageSlotComponent.prototype.renderer;
    /**
     * @type {?}
     * @protected
     */
    PageSlotComponent.prototype.hostElement;
    /**
     * @type {?}
     * @protected
     */
    PageSlotComponent.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1zbG90LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcGFnZS9zbG90L3BhZ2Utc2xvdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUdMLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFJVix1QkFBdUIsR0FDeEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsZUFBZSxFQUFjLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUczRTtJQStERSwyQkFDWSxVQUFzQixFQUN0Qix1QkFBZ0QsRUFDaEQsUUFBbUIsRUFDbkIsV0FBdUIsRUFDdkIsTUFBa0I7UUFMOUIsaUJBTUk7UUFMUSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixXQUFNLEdBQU4sTUFBTSxDQUFZO1FBdERHLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDYixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUNsQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBSW5ELGNBQVMsR0FBRyxJQUFJLGVBQWUsQ0FBUyxTQUFTLENBQUMsQ0FBQzs7Ozs7OztRQVFuRCxVQUFLLEdBQWdDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUMvRCxTQUFTOzs7O1FBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxLQUFJLENB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QUFJO1FBQ2hDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLEVBQUUsRUFBRTtZQUNqRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakM7SUFDSCxDQUFDOzs7Ozs7SUFFTyxnREFBb0I7Ozs7O0lBQTVCLFVBQTZCLElBQXFCO1FBQ2hELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxvQkFBb0IsQ0FDL0MsSUFBSSxDQUFDLFVBQVUsRUFDZixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FDZCxDQUFDO0lBQ0osQ0FBQzs7Z0JBN0hGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsMGdCQUF5QztvQkFDekMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQWRDLFVBQVU7Z0JBSVYsdUJBQXVCO2dCQVJ2QixTQUFTO2dCQUxULFVBQVU7Z0JBUVYsU0FBUzs7OzJCQWtCUixXQUFXLFNBQUMsT0FBTyxjQUFHLEtBQUs7NEJBTzNCLFdBQVcsU0FBQyxrQkFBa0I7Z0NBQzlCLFdBQVcsU0FBQyxzQkFBc0I7NkJBQ2xDLFdBQVcsU0FBQyxpQkFBaUIsY0FBRyxLQUFLOztJQThHeEMsd0JBQUM7Q0FBQSxBQTlIRCxJQThIQztTQXpIWSxpQkFBaUI7OztJQVM1QixzQ0FBa0Q7O0lBQ2xELDBDQUEyRDs7SUFDM0QsdUNBQTREOzs7OztJQUU1RCxrREFBc0M7O0lBRXRDLHNDQUE0RDs7Ozs7Ozs7SUFRNUQsa0NBR0U7O0lBRUYsd0NBUUU7Ozs7O0lBRUYseUNBQTBDOzs7OztJQXFCeEMsdUNBQWdDOzs7OztJQUNoQyxvREFBMEQ7Ozs7O0lBQzFELHFDQUE2Qjs7Ozs7SUFDN0Isd0NBQWlDOzs7OztJQUNqQyxtQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ21zQ29uZmlnLFxuICBDbXNTZXJ2aWNlLFxuICBDb250ZW50U2xvdENvbXBvbmVudERhdGEsXG4gIENvbnRlbnRTbG90RGF0YSxcbiAgRGVmZXJMb2FkaW5nU3RyYXRlZ3ksXG4gIER5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAsIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSW50ZXJzZWN0aW9uT3B0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2xheW91dC9sb2FkaW5nL2ludGVyc2VjdGlvbi5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXBhZ2Utc2xvdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdlLXNsb3QuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUGFnZVNsb3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8vIG5lZWQgdG8gaGF2ZSB0aGlzIGhvc3QgYmluZGluZyBhdCB0aGUgdG9wIGFzIGl0IHdpbGwgb3ZlcnJpZGUgdGhlIGVudGlyZSBjbGFzc1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgQElucHV0KCkgc2V0IHBvc2l0aW9uKHBvc2l0aW9uOiBzdHJpbmcpIHtcbiAgICB0aGlzLnBvc2l0aW9uJC5uZXh0KHBvc2l0aW9uKTtcbiAgfVxuICBnZXQgcG9zaXRpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbiQudmFsdWU7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmN4LXBlbmRpbmcnKSBpc1BlbmRpbmcgPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmhhcy1jb21wb25lbnRzJykgaGFzQ29tcG9uZW50cyA9IGZhbHNlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnBhZ2UtZm9sZCcpIEBJbnB1dCgpIGlzUGFnZUZvbGQgPSBmYWxzZTtcblxuICBwcml2YXRlIHBlbmRpbmdDb21wb25lbnRDb3VudDogbnVtYmVyO1xuXG4gIHJlYWRvbmx5IHBvc2l0aW9uJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPih1bmRlZmluZWQpO1xuXG4gIC8qKlxuICAgKiBvYnNlcnZhYmxlIHdpdGggYENvbnRlbnRTbG90RGF0YWAgZm9yIHRoZSBjdXJyZW50IHBvc2l0aW9uXG4gICAqXG4gICAqIEBkZXByZWNhdGVkIHdlJ2xsIHN0b3Agc3VwcG9ydGluZyB0aGlzIHByb3BlcnR5IGluIDIuMCBhc1xuICAgKiBpdCBpcyBub3QgdXNlZCBzZXBhcmF0ZWx5LlxuICAgKi9cbiAgcmVhZG9ubHkgc2xvdCQ6IE9ic2VydmFibGU8Q29udGVudFNsb3REYXRhPiA9IHRoaXMucG9zaXRpb24kLnBpcGUoXG4gICAgc3dpdGNoTWFwKHBvc2l0aW9uID0+IHRoaXMuY21zU2VydmljZS5nZXRDb250ZW50U2xvdChwb3NpdGlvbikpLFxuICAgIHRhcChzbG90ID0+IHRoaXMuYWRkU21hcnRFZGl0U2xvdENsYXNzKHNsb3QpKVxuICApO1xuXG4gIHJlYWRvbmx5IGNvbXBvbmVudHMkOiBPYnNlcnZhYmxlPFxuICAgIENvbnRlbnRTbG90Q29tcG9uZW50RGF0YVtdXG4gID4gPSB0aGlzLnNsb3QkLnBpcGUoXG4gICAgbWFwKHNsb3QgPT4gKHNsb3QgJiYgc2xvdC5jb21wb25lbnRzID8gc2xvdC5jb21wb25lbnRzIDogW10pKSxcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZChcbiAgICAgIChhLCBiKSA9PlxuICAgICAgICBhLmxlbmd0aCA9PT0gYi5sZW5ndGggJiYgIWEuZmluZCgoZWwsIGluZGV4KSA9PiBlbC51aWQgIT09IGJbaW5kZXhdLnVpZClcbiAgICApXG4gICk7XG5cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgY21zU2VydmljZTogQ21zU2VydmljZSxcbiAgICBkeW5hbWljQXR0cmlidXRlU2VydmljZTogRHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBob3N0RWxlbWVudDogRWxlbWVudFJlZixcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dW5pZmllZC1zaWduYXR1cmVzXG4gICAgY29uZmlnOiBDbXNDb25maWdcbiAgKTtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS40XG4gICAqIFVzZSBjb25zdHJ1Y3RvcihjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLCBkeW5hbWljQXR0cmlidXRlU2VydmljZTogRHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIGhvc3RFbGVtZW50OiBFbGVtZW50UmVmLCBjb25maWc/OiBDbXNDb25maWcpIGluc3RlYWRcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsXG4gICAgZHluYW1pY0F0dHJpYnV0ZVNlcnZpY2U6IER5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWZcbiAgKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGR5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlOiBEeW5hbWljQXR0cmlidXRlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcm90ZWN0ZWQgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHJvdGVjdGVkIGNvbmZpZz86IENtc0NvbmZpZ1xuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5jb21wb25lbnRzJC5zdWJzY3JpYmUoY29tcG9uZW50cyA9PiB7XG4gICAgICAgIHRoaXMuaGFzQ29tcG9uZW50cyA9IGNvbXBvbmVudHMgJiYgY29tcG9uZW50cy5sZW5ndGggPiAwO1xuICAgICAgICB0aGlzLnBlbmRpbmdDb21wb25lbnRDb3VudCA9IGNvbXBvbmVudHMgPyBjb21wb25lbnRzLmxlbmd0aCA6IDA7XG4gICAgICAgIHRoaXMuaXNQZW5kaW5nID0gdGhpcy5wZW5kaW5nQ29tcG9uZW50Q291bnQgPiAwO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJcyB0cmlnZ2VyZWQgd2hlbiBhIGNvbXBvbmVudCBpcyBhZGRlZCB0byB0aGUgdmlldy5cbiAgICogV2UgdXNlIHRoaXMgaW5mb3JtYXRpb24gdG8gZHJvcHRoZSBgaXMtcGVuZGluZ2AgY2xhc3MgZnJvbSB0aGUgcGFnZSBzbG90XG4gICAqIHdoZW4gYWxsIG5lc3RlZCBjb21wb25lbnRzIGhhdmUgYmVlbiBhZGRlZC5cbiAgICovXG4gIGlzTG9hZGVkKGxvYWRTdGF0ZTogYm9vbGVhbikge1xuICAgIGlmIChsb2FkU3RhdGUpIHtcbiAgICAgIHRoaXMucGVuZGluZ0NvbXBvbmVudENvdW50LS07XG4gICAgfVxuICAgIHRoaXMuaXNQZW5kaW5nID0gdGhpcy5wZW5kaW5nQ29tcG9uZW50Q291bnQgPiAwO1xuICB9XG5cbiAgZ2V0Q29tcG9uZW50RGVmZXJPcHRpb25zKGNvbXBvbmVudFR5cGU6IHN0cmluZyk6IEludGVyc2VjdGlvbk9wdGlvbnMge1xuICAgIGNvbnN0IGRlZmVyTG9hZGluZyA9IHRoaXMuZ2V0RGVmZXJMb2FkaW5nU3RyYXRlZ3koY29tcG9uZW50VHlwZSk7XG4gICAgcmV0dXJuIHsgZGVmZXJMb2FkaW5nIH07XG4gIH1cblxuICAvKipcbiAgICogVGhlIGBEZWZlckxvYWRpbmdTdHJhdGVneWAgaW5kaWNhdGVzIHdoZXRoZXIgY29tcG9uZW50IHJlbmRlcmluZ1xuICAgKiBzaG91bGQgYmUgZGVmZXJyZWQuXG4gICAqL1xuICBwcml2YXRlIGdldERlZmVyTG9hZGluZ1N0cmF0ZWd5KGNvbXBvbmVudFR5cGU6IHN0cmluZyk6IERlZmVyTG9hZGluZ1N0cmF0ZWd5IHtcbiAgICBpZiAodGhpcy5jb25maWcpIHtcbiAgICAgIHJldHVybiAoKHRoaXMuY29uZmlnIGFzIENtc0NvbmZpZykuY21zQ29tcG9uZW50c1tjb21wb25lbnRUeXBlXSB8fCB7fSlcbiAgICAgICAgLmRlZmVyTG9hZGluZztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFkZFNtYXJ0RWRpdFNsb3RDbGFzcyhzbG90KTogdm9pZCB7XG4gICAgaWYgKHNsb3QgJiYgdGhpcy5jbXNTZXJ2aWNlLmlzTGF1bmNoSW5TbWFydEVkaXQoKSkge1xuICAgICAgdGhpcy5hZGRTbWFydEVkaXRDb250cmFjdChzbG90KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFkZFNtYXJ0RWRpdENvbnRyYWN0KHNsb3Q6IENvbnRlbnRTbG90RGF0YSk6IHZvaWQge1xuICAgIHRoaXMuZHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UuYWRkRHluYW1pY0F0dHJpYnV0ZXMoXG4gICAgICBzbG90LnByb3BlcnRpZXMsXG4gICAgICB0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLnJlbmRlcmVyXG4gICAgKTtcbiAgfVxufVxuIl19