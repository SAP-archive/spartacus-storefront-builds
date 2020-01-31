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
        /**
         * The position is used to find the CMS page slot (and optional outlet)
         * that is rendered in the PageSlotComponent. Furthermore, the position
         * is added as a CSS class name to the host element.
         */
        set: /**
         * The position is used to find the CMS page slot (and optional outlet)
         * that is rendered in the PageSlotComponent. Furthermore, the position
         * is added as a CSS class name to the host element.
         * @param {?} position
         * @return {?}
         */
        function (position) {
            this.position$.next(position);
            this.renderer.addClass(this.hostElement.nativeElement, position);
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
                    selector: 'cx-page-slot,[cx-page-slot]',
                    template: "<ng-template\n  [cxOutlet]=\"position\"\n  [cxOutletContext]=\"{ components$: components$ }\"\n  [cxSkipLink]=\"position\"\n>\n  <ng-template\n    *ngFor=\"let component of components$ | async\"\n    [cxOutlet]=\"component.flexType\"\n    [cxOutletContext]=\"{ component: component }\"\n    [cxOutletDefer]=\"getComponentDeferOptions(component.flexType)\"\n    (loaded)=\"isLoaded($event)\"\n  >\n    <ng-container [cxComponentWrapper]=\"component\"></ng-container>\n  </ng-template>\n</ng-template>\n",
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
        position: [{ type: Input }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1zbG90LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcGFnZS9zbG90L3BhZ2Utc2xvdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUdMLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFJVix1QkFBdUIsR0FDeEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsZUFBZSxFQUFjLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUczRTtJQXFFRSwyQkFDWSxVQUFzQixFQUN0Qix1QkFBZ0QsRUFDaEQsUUFBbUIsRUFDbkIsV0FBdUIsRUFDdkIsTUFBa0I7UUFMOUIsaUJBTUk7UUFMUSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixXQUFNLEdBQU4sTUFBTSxDQUFZO1FBdERHLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDYixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUNsQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBSW5ELGNBQVMsR0FBRyxJQUFJLGVBQWUsQ0FBUyxTQUFTLENBQUMsQ0FBQzs7Ozs7OztRQVFuRCxVQUFLLEdBQWdDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUMvRCxTQUFTOzs7O1FBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxLQUFJLENB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ICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ21zQ29uZmlnLFxuICBDbXNTZXJ2aWNlLFxuICBDb250ZW50U2xvdENvbXBvbmVudERhdGEsXG4gIENvbnRlbnRTbG90RGF0YSxcbiAgRGVmZXJMb2FkaW5nU3RyYXRlZ3ksXG4gIER5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAsIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSW50ZXJzZWN0aW9uT3B0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2xheW91dC9sb2FkaW5nL2ludGVyc2VjdGlvbi5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXBhZ2Utc2xvdCxbY3gtcGFnZS1zbG90XScsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdlLXNsb3QuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUGFnZVNsb3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBUaGUgcG9zaXRpb24gaXMgdXNlZCB0byBmaW5kIHRoZSBDTVMgcGFnZSBzbG90IChhbmQgb3B0aW9uYWwgb3V0bGV0KVxuICAgKiB0aGF0IGlzIHJlbmRlcmVkIGluIHRoZSBQYWdlU2xvdENvbXBvbmVudC4gRnVydGhlcm1vcmUsIHRoZSBwb3NpdGlvblxuICAgKiBpcyBhZGRlZCBhcyBhIENTUyBjbGFzcyBuYW1lIHRvIHRoZSBob3N0IGVsZW1lbnQuXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgcG9zaXRpb24ocG9zaXRpb246IHN0cmluZykge1xuICAgIHRoaXMucG9zaXRpb24kLm5leHQocG9zaXRpb24pO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCBwb3NpdGlvbik7XG4gIH1cbiAgZ2V0IHBvc2l0aW9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24kLnZhbHVlO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jeC1wZW5kaW5nJykgaXNQZW5kaW5nID0gdHJ1ZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5oYXMtY29tcG9uZW50cycpIGhhc0NvbXBvbmVudHMgPSBmYWxzZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5wYWdlLWZvbGQnKSBASW5wdXQoKSBpc1BhZ2VGb2xkID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBwZW5kaW5nQ29tcG9uZW50Q291bnQ6IG51bWJlcjtcblxuICByZWFkb25seSBwb3NpdGlvbiQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4odW5kZWZpbmVkKTtcblxuICAvKipcbiAgICogb2JzZXJ2YWJsZSB3aXRoIGBDb250ZW50U2xvdERhdGFgIGZvciB0aGUgY3VycmVudCBwb3NpdGlvblxuICAgKlxuICAgKiBAZGVwcmVjYXRlZCB3ZSdsbCBzdG9wIHN1cHBvcnRpbmcgdGhpcyBwcm9wZXJ0eSBpbiAyLjAgYXNcbiAgICogaXQgaXMgbm90IHVzZWQgc2VwYXJhdGVseS5cbiAgICovXG4gIHJlYWRvbmx5IHNsb3QkOiBPYnNlcnZhYmxlPENvbnRlbnRTbG90RGF0YT4gPSB0aGlzLnBvc2l0aW9uJC5waXBlKFxuICAgIHN3aXRjaE1hcChwb3NpdGlvbiA9PiB0aGlzLmNtc1NlcnZpY2UuZ2V0Q29udGVudFNsb3QocG9zaXRpb24pKSxcbiAgICB0YXAoc2xvdCA9PiB0aGlzLmFkZFNtYXJ0RWRpdFNsb3RDbGFzcyhzbG90KSlcbiAgKTtcblxuICByZWFkb25seSBjb21wb25lbnRzJDogT2JzZXJ2YWJsZTxcbiAgICBDb250ZW50U2xvdENvbXBvbmVudERhdGFbXVxuICA+ID0gdGhpcy5zbG90JC5waXBlKFxuICAgIG1hcChzbG90ID0+IChzbG90ICYmIHNsb3QuY29tcG9uZW50cyA/IHNsb3QuY29tcG9uZW50cyA6IFtdKSksXG4gICAgZGlzdGluY3RVbnRpbENoYW5nZWQoXG4gICAgICAoYSwgYikgPT5cbiAgICAgICAgYS5sZW5ndGggPT09IGIubGVuZ3RoICYmICFhLmZpbmQoKGVsLCBpbmRleCkgPT4gZWwudWlkICE9PSBiW2luZGV4XS51aWQpXG4gICAgKVxuICApO1xuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsXG4gICAgZHluYW1pY0F0dHJpYnV0ZVNlcnZpY2U6IER5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVuaWZpZWQtc2lnbmF0dXJlc1xuICAgIGNvbmZpZzogQ21zQ29uZmlnXG4gICk7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuNFxuICAgKiBVc2UgY29uc3RydWN0b3IoY21zU2VydmljZTogQ21zU2VydmljZSwgZHluYW1pY0F0dHJpYnV0ZVNlcnZpY2U6IER5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlLCByZW5kZXJlcjogUmVuZGVyZXIyLCBob3N0RWxlbWVudDogRWxlbWVudFJlZiwgY29uZmlnPzogQ21zQ29uZmlnKSBpbnN0ZWFkXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLFxuICAgIGR5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlOiBEeW5hbWljQXR0cmlidXRlU2VydmljZSxcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIGhvc3RFbGVtZW50OiBFbGVtZW50UmVmXG4gICk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBkeW5hbWljQXR0cmlidXRlU2VydmljZTogRHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJvdGVjdGVkIGhvc3RFbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByb3RlY3RlZCBjb25maWc/OiBDbXNDb25maWdcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMuY29tcG9uZW50cyQuc3Vic2NyaWJlKGNvbXBvbmVudHMgPT4ge1xuICAgICAgICB0aGlzLmhhc0NvbXBvbmVudHMgPSBjb21wb25lbnRzICYmIGNvbXBvbmVudHMubGVuZ3RoID4gMDtcbiAgICAgICAgdGhpcy5wZW5kaW5nQ29tcG9uZW50Q291bnQgPSBjb21wb25lbnRzID8gY29tcG9uZW50cy5sZW5ndGggOiAwO1xuICAgICAgICB0aGlzLmlzUGVuZGluZyA9IHRoaXMucGVuZGluZ0NvbXBvbmVudENvdW50ID4gMDtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvKipcbiAgICogSXMgdHJpZ2dlcmVkIHdoZW4gYSBjb21wb25lbnQgaXMgYWRkZWQgdG8gdGhlIHZpZXcuXG4gICAqIFdlIHVzZSB0aGlzIGluZm9ybWF0aW9uIHRvIGRyb3B0aGUgYGlzLXBlbmRpbmdgIGNsYXNzIGZyb20gdGhlIHBhZ2Ugc2xvdFxuICAgKiB3aGVuIGFsbCBuZXN0ZWQgY29tcG9uZW50cyBoYXZlIGJlZW4gYWRkZWQuXG4gICAqL1xuICBpc0xvYWRlZChsb2FkU3RhdGU6IGJvb2xlYW4pIHtcbiAgICBpZiAobG9hZFN0YXRlKSB7XG4gICAgICB0aGlzLnBlbmRpbmdDb21wb25lbnRDb3VudC0tO1xuICAgIH1cbiAgICB0aGlzLmlzUGVuZGluZyA9IHRoaXMucGVuZGluZ0NvbXBvbmVudENvdW50ID4gMDtcbiAgfVxuXG4gIGdldENvbXBvbmVudERlZmVyT3B0aW9ucyhjb21wb25lbnRUeXBlOiBzdHJpbmcpOiBJbnRlcnNlY3Rpb25PcHRpb25zIHtcbiAgICBjb25zdCBkZWZlckxvYWRpbmcgPSB0aGlzLmdldERlZmVyTG9hZGluZ1N0cmF0ZWd5KGNvbXBvbmVudFR5cGUpO1xuICAgIHJldHVybiB7IGRlZmVyTG9hZGluZyB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBgRGVmZXJMb2FkaW5nU3RyYXRlZ3lgIGluZGljYXRlcyB3aGV0aGVyIGNvbXBvbmVudCByZW5kZXJpbmdcbiAgICogc2hvdWxkIGJlIGRlZmVycmVkLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXREZWZlckxvYWRpbmdTdHJhdGVneShjb21wb25lbnRUeXBlOiBzdHJpbmcpOiBEZWZlckxvYWRpbmdTdHJhdGVneSB7XG4gICAgaWYgKHRoaXMuY29uZmlnKSB7XG4gICAgICByZXR1cm4gKCh0aGlzLmNvbmZpZyBhcyBDbXNDb25maWcpLmNtc0NvbXBvbmVudHNbY29tcG9uZW50VHlwZV0gfHwge30pXG4gICAgICAgIC5kZWZlckxvYWRpbmc7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRTbWFydEVkaXRTbG90Q2xhc3Moc2xvdCk6IHZvaWQge1xuICAgIGlmIChzbG90ICYmIHRoaXMuY21zU2VydmljZS5pc0xhdW5jaEluU21hcnRFZGl0KCkpIHtcbiAgICAgIHRoaXMuYWRkU21hcnRFZGl0Q29udHJhY3Qoc2xvdCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRTbWFydEVkaXRDb250cmFjdChzbG90OiBDb250ZW50U2xvdERhdGEpOiB2b2lkIHtcbiAgICB0aGlzLmR5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlLmFkZER5bmFtaWNBdHRyaWJ1dGVzKFxuICAgICAgc2xvdC5wcm9wZXJ0aWVzLFxuICAgICAgdGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy5yZW5kZXJlclxuICAgICk7XG4gIH1cbn1cbiJdfQ==