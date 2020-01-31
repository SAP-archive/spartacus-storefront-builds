/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, Renderer2, } from '@angular/core';
import { CmsConfig, CmsService, DynamicAttributeService, } from '@spartacus/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
export class PageSlotComponent {
    /**
     * @param {?} cmsService
     * @param {?} dynamicAttributeService
     * @param {?} renderer
     * @param {?} hostElement
     * @param {?=} config
     */
    constructor(cmsService, dynamicAttributeService, renderer, hostElement, config) {
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
        position => this.cmsService.getContentSlot(position))), tap((/**
         * @param {?} slot
         * @return {?}
         */
        slot => this.addSmartEditSlotClass(slot))));
        this.components$ = this.slot$.pipe(map((/**
         * @param {?} slot
         * @return {?}
         */
        slot => (slot && slot.components ? slot.components : []))), distinctUntilChanged((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => a.length === b.length && !a.find((/**
         * @param {?} el
         * @param {?} index
         * @return {?}
         */
        (el, index) => el.uid !== b[index].uid)))));
        this.subscription = new Subscription();
    }
    /**
     * The position is used to find the CMS page slot (and optional outlet)
     * that is rendered in the PageSlotComponent. Furthermore, the position
     * is added as a CSS class name to the host element.
     * @param {?} position
     * @return {?}
     */
    set position(position) {
        this.position$.next(position);
        this.renderer.addClass(this.hostElement.nativeElement, position);
    }
    /**
     * @return {?}
     */
    get position() {
        return this.position$.value;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.subscription.add(this.components$.subscribe((/**
         * @param {?} components
         * @return {?}
         */
        components => {
            this.hasComponents = components && components.length > 0;
            this.pendingComponentCount = components ? components.length : 0;
            this.isPending = this.pendingComponentCount > 0;
        })));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    /**
     * Is triggered when a component is added to the view.
     * We use this information to dropthe `is-pending` class from the page slot
     * when all nested components have been added.
     * @param {?} loadState
     * @return {?}
     */
    isLoaded(loadState) {
        if (loadState) {
            this.pendingComponentCount--;
        }
        this.isPending = this.pendingComponentCount > 0;
    }
    /**
     * @param {?} componentType
     * @return {?}
     */
    getComponentDeferOptions(componentType) {
        /** @type {?} */
        const deferLoading = this.getDeferLoadingStrategy(componentType);
        return { deferLoading };
    }
    /**
     * The `DeferLoadingStrategy` indicates whether component rendering
     * should be deferred.
     * @private
     * @param {?} componentType
     * @return {?}
     */
    getDeferLoadingStrategy(componentType) {
        if (this.config) {
            return (((/** @type {?} */ (this.config))).cmsComponents[componentType] || {})
                .deferLoading;
        }
    }
    /**
     * @private
     * @param {?} slot
     * @return {?}
     */
    addSmartEditSlotClass(slot) {
        if (slot && this.cmsService.isLaunchInSmartEdit()) {
            this.addSmartEditContract(slot);
        }
    }
    /**
     * @private
     * @param {?} slot
     * @return {?}
     */
    addSmartEditContract(slot) {
        this.dynamicAttributeService.addDynamicAttributes(slot.properties, this.hostElement.nativeElement, this.renderer);
    }
}
PageSlotComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-page-slot,[cx-page-slot]',
                template: "<ng-template\n  [cxOutlet]=\"position\"\n  [cxOutletContext]=\"{ components$: components$ }\"\n  [cxSkipLink]=\"position\"\n>\n  <ng-template\n    *ngFor=\"let component of components$ | async\"\n    [cxOutlet]=\"component.flexType\"\n    [cxOutletContext]=\"{ component: component }\"\n    [cxOutletDefer]=\"getComponentDeferOptions(component.flexType)\"\n    (loaded)=\"isLoaded($event)\"\n  >\n    <ng-container [cxComponentWrapper]=\"component\"></ng-container>\n  </ng-template>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
PageSlotComponent.ctorParameters = () => [
    { type: CmsService },
    { type: DynamicAttributeService },
    { type: Renderer2 },
    { type: ElementRef },
    { type: CmsConfig }
];
PageSlotComponent.propDecorators = {
    position: [{ type: Input }],
    isPending: [{ type: HostBinding, args: ['class.cx-pending',] }],
    hasComponents: [{ type: HostBinding, args: ['class.has-components',] }],
    isPageFold: [{ type: HostBinding, args: ['class.page-fold',] }, { type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1zbG90LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcGFnZS9zbG90L3BhZ2Utc2xvdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUdMLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFJVix1QkFBdUIsR0FDeEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsZUFBZSxFQUFjLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVEzRSxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7OztJQWdFNUIsWUFDWSxVQUFzQixFQUN0Qix1QkFBZ0QsRUFDaEQsUUFBbUIsRUFDbkIsV0FBdUIsRUFDdkIsTUFBa0I7UUFKbEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0Qiw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQXRERyxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2Isa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDbEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUluRCxjQUFTLEdBQUcsSUFBSSxlQUFlLENBQVMsU0FBUyxDQUFDLENBQUM7Ozs7Ozs7UUFRbkQsVUFBSyxHQUFnQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FDL0QsU0FBUzs7OztRQUFDLFFBQVEsQ0FBQyxFQUFF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Q0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7Ozs7OztJQUVPLG9CQUFvQixDQUFDLElBQXFCO1FBQ2hELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxvQkFBb0IsQ0FDL0MsSUFBSSxDQUFDLFVBQVUsRUFDZixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FDZCxDQUFDO0lBQ0osQ0FBQzs7O1lBbklGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QyxpZ0JBQXlDO2dCQUN6QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQWRDLFVBQVU7WUFJVix1QkFBdUI7WUFSdkIsU0FBUztZQUxULFVBQVU7WUFRVixTQUFTOzs7dUJBc0JSLEtBQUs7d0JBU0wsV0FBVyxTQUFDLGtCQUFrQjs0QkFDOUIsV0FBVyxTQUFDLHNCQUFzQjt5QkFDbEMsV0FBVyxTQUFDLGlCQUFpQixjQUFHLEtBQUs7Ozs7SUFGdEMsc0NBQWtEOztJQUNsRCwwQ0FBMkQ7O0lBQzNELHVDQUE0RDs7Ozs7SUFFNUQsa0RBQXNDOztJQUV0QyxzQ0FBNEQ7Ozs7Ozs7O0lBUTVELGtDQUdFOztJQUVGLHdDQVFFOzs7OztJQUVGLHlDQUEwQzs7Ozs7SUFxQnhDLHVDQUFnQzs7Ozs7SUFDaEMsb0RBQTBEOzs7OztJQUMxRCxxQ0FBNkI7Ozs7O0lBQzdCLHdDQUFpQzs7Ozs7SUFDakMsbUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENtc0NvbmZpZyxcbiAgQ21zU2VydmljZSxcbiAgQ29udGVudFNsb3RDb21wb25lbnREYXRhLFxuICBDb250ZW50U2xvdERhdGEsXG4gIERlZmVyTG9hZGluZ1N0cmF0ZWd5LFxuICBEeW5hbWljQXR0cmlidXRlU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEludGVyc2VjdGlvbk9wdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9sYXlvdXQvbG9hZGluZy9pbnRlcnNlY3Rpb24ubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wYWdlLXNsb3QsW2N4LXBhZ2Utc2xvdF0nLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnZS1zbG90LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VTbG90Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogVGhlIHBvc2l0aW9uIGlzIHVzZWQgdG8gZmluZCB0aGUgQ01TIHBhZ2Ugc2xvdCAoYW5kIG9wdGlvbmFsIG91dGxldClcbiAgICogdGhhdCBpcyByZW5kZXJlZCBpbiB0aGUgUGFnZVNsb3RDb21wb25lbnQuIEZ1cnRoZXJtb3JlLCB0aGUgcG9zaXRpb25cbiAgICogaXMgYWRkZWQgYXMgYSBDU1MgY2xhc3MgbmFtZSB0byB0aGUgaG9zdCBlbGVtZW50LlxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IHBvc2l0aW9uKHBvc2l0aW9uOiBzdHJpbmcpIHtcbiAgICB0aGlzLnBvc2l0aW9uJC5uZXh0KHBvc2l0aW9uKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgcG9zaXRpb24pO1xuICB9XG4gIGdldCBwb3NpdGlvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uJC52YWx1ZTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuY3gtcGVuZGluZycpIGlzUGVuZGluZyA9IHRydWU7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaGFzLWNvbXBvbmVudHMnKSBoYXNDb21wb25lbnRzID0gZmFsc2U7XG4gIEBIb3N0QmluZGluZygnY2xhc3MucGFnZS1mb2xkJykgQElucHV0KCkgaXNQYWdlRm9sZCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgcGVuZGluZ0NvbXBvbmVudENvdW50OiBudW1iZXI7XG5cbiAgcmVhZG9ubHkgcG9zaXRpb24kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KHVuZGVmaW5lZCk7XG5cbiAgLyoqXG4gICAqIG9ic2VydmFibGUgd2l0aCBgQ29udGVudFNsb3REYXRhYCBmb3IgdGhlIGN1cnJlbnQgcG9zaXRpb25cbiAgICpcbiAgICogQGRlcHJlY2F0ZWQgd2UnbGwgc3RvcCBzdXBwb3J0aW5nIHRoaXMgcHJvcGVydHkgaW4gMi4wIGFzXG4gICAqIGl0IGlzIG5vdCB1c2VkIHNlcGFyYXRlbHkuXG4gICAqL1xuICByZWFkb25seSBzbG90JDogT2JzZXJ2YWJsZTxDb250ZW50U2xvdERhdGE+ID0gdGhpcy5wb3NpdGlvbiQucGlwZShcbiAgICBzd2l0Y2hNYXAocG9zaXRpb24gPT4gdGhpcy5jbXNTZXJ2aWNlLmdldENvbnRlbnRTbG90KHBvc2l0aW9uKSksXG4gICAgdGFwKHNsb3QgPT4gdGhpcy5hZGRTbWFydEVkaXRTbG90Q2xhc3Moc2xvdCkpXG4gICk7XG5cbiAgcmVhZG9ubHkgY29tcG9uZW50cyQ6IE9ic2VydmFibGU8XG4gICAgQ29udGVudFNsb3RDb21wb25lbnREYXRhW11cbiAgPiA9IHRoaXMuc2xvdCQucGlwZShcbiAgICBtYXAoc2xvdCA9PiAoc2xvdCAmJiBzbG90LmNvbXBvbmVudHMgPyBzbG90LmNvbXBvbmVudHMgOiBbXSkpLFxuICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKFxuICAgICAgKGEsIGIpID0+XG4gICAgICAgIGEubGVuZ3RoID09PSBiLmxlbmd0aCAmJiAhYS5maW5kKChlbCwgaW5kZXgpID0+IGVsLnVpZCAhPT0gYltpbmRleF0udWlkKVxuICAgIClcbiAgKTtcblxuICBwcml2YXRlIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLFxuICAgIGR5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlOiBEeW5hbWljQXR0cmlidXRlU2VydmljZSxcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIGhvc3RFbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp1bmlmaWVkLXNpZ25hdHVyZXNcbiAgICBjb25maWc6IENtc0NvbmZpZ1xuICApO1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjRcbiAgICogVXNlIGNvbnN0cnVjdG9yKGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsIGR5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlOiBEeW5hbWljQXR0cmlidXRlU2VydmljZSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWYsIGNvbmZpZz86IENtc0NvbmZpZykgaW5zdGVhZFxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgY21zU2VydmljZTogQ21zU2VydmljZSxcbiAgICBkeW5hbWljQXR0cmlidXRlU2VydmljZTogRHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBob3N0RWxlbWVudDogRWxlbWVudFJlZlxuICApO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY21zU2VydmljZTogQ21zU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZHluYW1pY0F0dHJpYnV0ZVNlcnZpY2U6IER5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByb3RlY3RlZCBob3N0RWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwcm90ZWN0ZWQgY29uZmlnPzogQ21zQ29uZmlnXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLmNvbXBvbmVudHMkLnN1YnNjcmliZShjb21wb25lbnRzID0+IHtcbiAgICAgICAgdGhpcy5oYXNDb21wb25lbnRzID0gY29tcG9uZW50cyAmJiBjb21wb25lbnRzLmxlbmd0aCA+IDA7XG4gICAgICAgIHRoaXMucGVuZGluZ0NvbXBvbmVudENvdW50ID0gY29tcG9uZW50cyA/IGNvbXBvbmVudHMubGVuZ3RoIDogMDtcbiAgICAgICAgdGhpcy5pc1BlbmRpbmcgPSB0aGlzLnBlbmRpbmdDb21wb25lbnRDb3VudCA+IDA7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIElzIHRyaWdnZXJlZCB3aGVuIGEgY29tcG9uZW50IGlzIGFkZGVkIHRvIHRoZSB2aWV3LlxuICAgKiBXZSB1c2UgdGhpcyBpbmZvcm1hdGlvbiB0byBkcm9wdGhlIGBpcy1wZW5kaW5nYCBjbGFzcyBmcm9tIHRoZSBwYWdlIHNsb3RcbiAgICogd2hlbiBhbGwgbmVzdGVkIGNvbXBvbmVudHMgaGF2ZSBiZWVuIGFkZGVkLlxuICAgKi9cbiAgaXNMb2FkZWQobG9hZFN0YXRlOiBib29sZWFuKSB7XG4gICAgaWYgKGxvYWRTdGF0ZSkge1xuICAgICAgdGhpcy5wZW5kaW5nQ29tcG9uZW50Q291bnQtLTtcbiAgICB9XG4gICAgdGhpcy5pc1BlbmRpbmcgPSB0aGlzLnBlbmRpbmdDb21wb25lbnRDb3VudCA+IDA7XG4gIH1cblxuICBnZXRDb21wb25lbnREZWZlck9wdGlvbnMoY29tcG9uZW50VHlwZTogc3RyaW5nKTogSW50ZXJzZWN0aW9uT3B0aW9ucyB7XG4gICAgY29uc3QgZGVmZXJMb2FkaW5nID0gdGhpcy5nZXREZWZlckxvYWRpbmdTdHJhdGVneShjb21wb25lbnRUeXBlKTtcbiAgICByZXR1cm4geyBkZWZlckxvYWRpbmcgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgYERlZmVyTG9hZGluZ1N0cmF0ZWd5YCBpbmRpY2F0ZXMgd2hldGhlciBjb21wb25lbnQgcmVuZGVyaW5nXG4gICAqIHNob3VsZCBiZSBkZWZlcnJlZC5cbiAgICovXG4gIHByaXZhdGUgZ2V0RGVmZXJMb2FkaW5nU3RyYXRlZ3koY29tcG9uZW50VHlwZTogc3RyaW5nKTogRGVmZXJMb2FkaW5nU3RyYXRlZ3kge1xuICAgIGlmICh0aGlzLmNvbmZpZykge1xuICAgICAgcmV0dXJuICgodGhpcy5jb25maWcgYXMgQ21zQ29uZmlnKS5jbXNDb21wb25lbnRzW2NvbXBvbmVudFR5cGVdIHx8IHt9KVxuICAgICAgICAuZGVmZXJMb2FkaW5nO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkU21hcnRFZGl0U2xvdENsYXNzKHNsb3QpOiB2b2lkIHtcbiAgICBpZiAoc2xvdCAmJiB0aGlzLmNtc1NlcnZpY2UuaXNMYXVuY2hJblNtYXJ0RWRpdCgpKSB7XG4gICAgICB0aGlzLmFkZFNtYXJ0RWRpdENvbnRyYWN0KHNsb3QpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkU21hcnRFZGl0Q29udHJhY3Qoc2xvdDogQ29udGVudFNsb3REYXRhKTogdm9pZCB7XG4gICAgdGhpcy5keW5hbWljQXR0cmlidXRlU2VydmljZS5hZGREeW5hbWljQXR0cmlidXRlcyhcbiAgICAgIHNsb3QucHJvcGVydGllcyxcbiAgICAgIHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMucmVuZGVyZXJcbiAgICApO1xuICB9XG59XG4iXX0=