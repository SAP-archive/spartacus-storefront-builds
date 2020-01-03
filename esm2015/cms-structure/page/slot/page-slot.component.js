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
    // need to have this host binding at the top as it will override the entire class
    /**
     * @param {?} position
     * @return {?}
     */
    set position(position) {
        this.position$.next(position);
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
                selector: 'cx-page-slot',
                template: "<ng-template\n  [cxOutlet]=\"position\"\n  [cxOutletContext]=\"{ components$: components$ }\"\n  [cxSkipLink]=\"position$ | async\"\n>\n  <ng-template\n    *ngFor=\"let component of components$ | async\"\n    [cxOutlet]=\"component.flexType\"\n    [cxOutletContext]=\"{ component: component }\"\n    [cxOutletDefer]=\"getComponentDeferOptions(component.flexType)\"\n    (loaded)=\"isLoaded($event)\"\n  >\n    <ng-container [cxComponentWrapper]=\"component\"></ng-container>\n  </ng-template>\n</ng-template>\n",
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
    position: [{ type: HostBinding, args: ['class',] }, { type: Input }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1zbG90LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcGFnZS9zbG90L3BhZ2Utc2xvdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUdMLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFJVix1QkFBdUIsR0FDeEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsZUFBZSxFQUFjLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVEzRSxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7OztJQTBENUIsWUFDWSxVQUFzQixFQUN0Qix1QkFBZ0QsRUFDaEQsUUFBbUIsRUFDbkIsV0FBdUIsRUFDdkIsTUFBa0I7UUFKbEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0Qiw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQXRERyxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2Isa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDbEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUluRCxjQUFTLEdBQUcsSUFBSSxlQUFlLENBQVMsU0FBUyxDQUFDLENBQUM7Ozs7Ozs7UUFRbkQsVUFBSyxHQUFnQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FDL0QsU0FBUzs7OztRQUFDLFFBQVEsQ0FBQyxFQUFF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SUFBSSxDQUFDLHVCQUF1QixDQUFDLG9CQUFvQixDQUMvQyxJQUFJLENBQUMsVUFBVSxFQUNmLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUM5QixJQUFJLENBQUMsUUFBUSxDQUNkLENBQUM7SUFDSixDQUFDOzs7WUE3SEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QiwwZ0JBQXlDO2dCQUN6QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQWRDLFVBQVU7WUFJVix1QkFBdUI7WUFSdkIsU0FBUztZQUxULFVBQVU7WUFRVixTQUFTOzs7dUJBa0JSLFdBQVcsU0FBQyxPQUFPLGNBQUcsS0FBSzt3QkFPM0IsV0FBVyxTQUFDLGtCQUFrQjs0QkFDOUIsV0FBVyxTQUFDLHNCQUFzQjt5QkFDbEMsV0FBVyxTQUFDLGlCQUFpQixjQUFHLEtBQUs7Ozs7SUFGdEMsc0NBQWtEOztJQUNsRCwwQ0FBMkQ7O0lBQzNELHVDQUE0RDs7Ozs7SUFFNUQsa0RBQXNDOztJQUV0QyxzQ0FBNEQ7Ozs7Ozs7O0lBUTVELGtDQUdFOztJQUVGLHdDQVFFOzs7OztJQUVGLHlDQUEwQzs7Ozs7SUFxQnhDLHVDQUFnQzs7Ozs7SUFDaEMsb0RBQTBEOzs7OztJQUMxRCxxQ0FBNkI7Ozs7O0lBQzdCLHdDQUFpQzs7Ozs7SUFDakMsbUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENtc0NvbmZpZyxcbiAgQ21zU2VydmljZSxcbiAgQ29udGVudFNsb3RDb21wb25lbnREYXRhLFxuICBDb250ZW50U2xvdERhdGEsXG4gIERlZmVyTG9hZGluZ1N0cmF0ZWd5LFxuICBEeW5hbWljQXR0cmlidXRlU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEludGVyc2VjdGlvbk9wdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9sYXlvdXQvbG9hZGluZy9pbnRlcnNlY3Rpb24ubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wYWdlLXNsb3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnZS1zbG90LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VTbG90Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvLyBuZWVkIHRvIGhhdmUgdGhpcyBob3N0IGJpbmRpbmcgYXQgdGhlIHRvcCBhcyBpdCB3aWxsIG92ZXJyaWRlIHRoZSBlbnRpcmUgY2xhc3NcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIEBJbnB1dCgpIHNldCBwb3NpdGlvbihwb3NpdGlvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5wb3NpdGlvbiQubmV4dChwb3NpdGlvbik7XG4gIH1cbiAgZ2V0IHBvc2l0aW9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24kLnZhbHVlO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jeC1wZW5kaW5nJykgaXNQZW5kaW5nID0gdHJ1ZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5oYXMtY29tcG9uZW50cycpIGhhc0NvbXBvbmVudHMgPSBmYWxzZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5wYWdlLWZvbGQnKSBASW5wdXQoKSBpc1BhZ2VGb2xkID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBwZW5kaW5nQ29tcG9uZW50Q291bnQ6IG51bWJlcjtcblxuICByZWFkb25seSBwb3NpdGlvbiQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4odW5kZWZpbmVkKTtcblxuICAvKipcbiAgICogb2JzZXJ2YWJsZSB3aXRoIGBDb250ZW50U2xvdERhdGFgIGZvciB0aGUgY3VycmVudCBwb3NpdGlvblxuICAgKlxuICAgKiBAZGVwcmVjYXRlZCB3ZSdsbCBzdG9wIHN1cHBvcnRpbmcgdGhpcyBwcm9wZXJ0eSBpbiAyLjAgYXNcbiAgICogaXQgaXMgbm90IHVzZWQgc2VwYXJhdGVseS5cbiAgICovXG4gIHJlYWRvbmx5IHNsb3QkOiBPYnNlcnZhYmxlPENvbnRlbnRTbG90RGF0YT4gPSB0aGlzLnBvc2l0aW9uJC5waXBlKFxuICAgIHN3aXRjaE1hcChwb3NpdGlvbiA9PiB0aGlzLmNtc1NlcnZpY2UuZ2V0Q29udGVudFNsb3QocG9zaXRpb24pKSxcbiAgICB0YXAoc2xvdCA9PiB0aGlzLmFkZFNtYXJ0RWRpdFNsb3RDbGFzcyhzbG90KSlcbiAgKTtcblxuICByZWFkb25seSBjb21wb25lbnRzJDogT2JzZXJ2YWJsZTxcbiAgICBDb250ZW50U2xvdENvbXBvbmVudERhdGFbXVxuICA+ID0gdGhpcy5zbG90JC5waXBlKFxuICAgIG1hcChzbG90ID0+IChzbG90ICYmIHNsb3QuY29tcG9uZW50cyA/IHNsb3QuY29tcG9uZW50cyA6IFtdKSksXG4gICAgZGlzdGluY3RVbnRpbENoYW5nZWQoXG4gICAgICAoYSwgYikgPT5cbiAgICAgICAgYS5sZW5ndGggPT09IGIubGVuZ3RoICYmICFhLmZpbmQoKGVsLCBpbmRleCkgPT4gZWwudWlkICE9PSBiW2luZGV4XS51aWQpXG4gICAgKVxuICApO1xuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsXG4gICAgZHluYW1pY0F0dHJpYnV0ZVNlcnZpY2U6IER5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVuaWZpZWQtc2lnbmF0dXJlc1xuICAgIGNvbmZpZzogQ21zQ29uZmlnXG4gICk7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuNFxuICAgKiBVc2UgY29uc3RydWN0b3IoY21zU2VydmljZTogQ21zU2VydmljZSwgZHluYW1pY0F0dHJpYnV0ZVNlcnZpY2U6IER5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlLCByZW5kZXJlcjogUmVuZGVyZXIyLCBob3N0RWxlbWVudDogRWxlbWVudFJlZiwgY29uZmlnPzogQ21zQ29uZmlnKSBpbnN0ZWFkXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLFxuICAgIGR5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlOiBEeW5hbWljQXR0cmlidXRlU2VydmljZSxcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIGhvc3RFbGVtZW50OiBFbGVtZW50UmVmXG4gICk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBkeW5hbWljQXR0cmlidXRlU2VydmljZTogRHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJvdGVjdGVkIGhvc3RFbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByb3RlY3RlZCBjb25maWc/OiBDbXNDb25maWdcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMuY29tcG9uZW50cyQuc3Vic2NyaWJlKGNvbXBvbmVudHMgPT4ge1xuICAgICAgICB0aGlzLmhhc0NvbXBvbmVudHMgPSBjb21wb25lbnRzICYmIGNvbXBvbmVudHMubGVuZ3RoID4gMDtcbiAgICAgICAgdGhpcy5wZW5kaW5nQ29tcG9uZW50Q291bnQgPSBjb21wb25lbnRzID8gY29tcG9uZW50cy5sZW5ndGggOiAwO1xuICAgICAgICB0aGlzLmlzUGVuZGluZyA9IHRoaXMucGVuZGluZ0NvbXBvbmVudENvdW50ID4gMDtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvKipcbiAgICogSXMgdHJpZ2dlcmVkIHdoZW4gYSBjb21wb25lbnQgaXMgYWRkZWQgdG8gdGhlIHZpZXcuXG4gICAqIFdlIHVzZSB0aGlzIGluZm9ybWF0aW9uIHRvIGRyb3B0aGUgYGlzLXBlbmRpbmdgIGNsYXNzIGZyb20gdGhlIHBhZ2Ugc2xvdFxuICAgKiB3aGVuIGFsbCBuZXN0ZWQgY29tcG9uZW50cyBoYXZlIGJlZW4gYWRkZWQuXG4gICAqL1xuICBpc0xvYWRlZChsb2FkU3RhdGU6IGJvb2xlYW4pIHtcbiAgICBpZiAobG9hZFN0YXRlKSB7XG4gICAgICB0aGlzLnBlbmRpbmdDb21wb25lbnRDb3VudC0tO1xuICAgIH1cbiAgICB0aGlzLmlzUGVuZGluZyA9IHRoaXMucGVuZGluZ0NvbXBvbmVudENvdW50ID4gMDtcbiAgfVxuXG4gIGdldENvbXBvbmVudERlZmVyT3B0aW9ucyhjb21wb25lbnRUeXBlOiBzdHJpbmcpOiBJbnRlcnNlY3Rpb25PcHRpb25zIHtcbiAgICBjb25zdCBkZWZlckxvYWRpbmcgPSB0aGlzLmdldERlZmVyTG9hZGluZ1N0cmF0ZWd5KGNvbXBvbmVudFR5cGUpO1xuICAgIHJldHVybiB7IGRlZmVyTG9hZGluZyB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBgRGVmZXJMb2FkaW5nU3RyYXRlZ3lgIGluZGljYXRlcyB3aGV0aGVyIGNvbXBvbmVudCByZW5kZXJpbmdcbiAgICogc2hvdWxkIGJlIGRlZmVycmVkLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXREZWZlckxvYWRpbmdTdHJhdGVneShjb21wb25lbnRUeXBlOiBzdHJpbmcpOiBEZWZlckxvYWRpbmdTdHJhdGVneSB7XG4gICAgaWYgKHRoaXMuY29uZmlnKSB7XG4gICAgICByZXR1cm4gKCh0aGlzLmNvbmZpZyBhcyBDbXNDb25maWcpLmNtc0NvbXBvbmVudHNbY29tcG9uZW50VHlwZV0gfHwge30pXG4gICAgICAgIC5kZWZlckxvYWRpbmc7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRTbWFydEVkaXRTbG90Q2xhc3Moc2xvdCk6IHZvaWQge1xuICAgIGlmIChzbG90ICYmIHRoaXMuY21zU2VydmljZS5pc0xhdW5jaEluU21hcnRFZGl0KCkpIHtcbiAgICAgIHRoaXMuYWRkU21hcnRFZGl0Q29udHJhY3Qoc2xvdCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRTbWFydEVkaXRDb250cmFjdChzbG90OiBDb250ZW50U2xvdERhdGEpOiB2b2lkIHtcbiAgICB0aGlzLmR5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlLmFkZER5bmFtaWNBdHRyaWJ1dGVzKFxuICAgICAgc2xvdC5wcm9wZXJ0aWVzLFxuICAgICAgdGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy5yZW5kZXJlclxuICAgICk7XG4gIH1cbn1cbiJdfQ==