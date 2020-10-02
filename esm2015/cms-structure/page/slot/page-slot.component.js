import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, Input, Renderer2, } from '@angular/core';
import { CmsService, DynamicAttributeService, } from '@spartacus/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { CmsComponentsService } from '../../services/cms-components.service';
/**
 * The `PageSlotComponent` is used to render the CMS page slot and it's components.
 *
 * The Page slot host element will be supplemented with css classes so that the layout
 * can be fully controlled by customers:
 * - The page slot _position_ is added as a css class by default.
 * - The `cx-pending` is added for as long as the slot hasn't start loading.
 * - The `page-fold` style class is added for the page slot which is configured as the page fold.
 */
export class PageSlotComponent {
    constructor(cmsService, dynamicAttributeService, renderer, elementRef, cmsComponentsService, cd) {
        this.cmsService = cmsService;
        this.dynamicAttributeService = dynamicAttributeService;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.cmsComponentsService = cmsComponentsService;
        this.cd = cd;
        /**
         * Indicates that the page slot is the last page slot above the fold.
         */
        this.isPageFold = false;
        /**
         * Indicates that the components of the page slot haven't been loaded as long
         * as the isPending state is true.
         */
        this.isPending = true;
        /**
         * Indicates that the page slot doesn't contain any components. This is no
         * longer used in spartacus, but kept for backwards compatibility.
         */
        this.hasComponents = false;
        this.position$ = new BehaviorSubject(undefined);
        this.slot$ = this.position$.pipe(switchMap((position) => this.cmsService.getContentSlot(position)), distinctUntilChanged(this.isDistinct));
        /** Observes the components for the given page slot. */
        this.components$ = this.slot$.pipe(map((slot) => { var _a; return (_a = slot === null || slot === void 0 ? void 0 : slot.components) !== null && _a !== void 0 ? _a : []; }));
        this.subscription = new Subscription();
        /** Keeps track of the pending components that must be loaded for the page slot */
        this.pendingComponentCount = 0;
    }
    /**
     * The position represents the unique key for a page slot on a single page, but can
     * be reused cross pages.
     *
     * The position is used to find the CMS components for the page slot. It is also
     * added as an additional CSS class so that layout can be applied.
     */
    set position(value) {
        this.position$.next(value);
    }
    get position() {
        return this.position$.value;
    }
    ngOnInit() {
        this.subscription.add(this.slot$.pipe(tap((slot) => this.decorate(slot))).subscribe((value) => {
            this.components = (value === null || value === void 0 ? void 0 : value.components) || [];
            this.cd.markForCheck();
        }));
    }
    decorate(slot) {
        var _a, _b;
        let cls = this.class || '';
        if (this.lastPosition && cls.indexOf(this.lastPosition) > -1) {
            cls = cls.replace(this.lastPosition, '');
        }
        if (this.position$.value) {
            cls += ` ${this.position$.value}`;
            this.lastPosition = this.position$.value;
        }
        // host bindings
        this.pending = ((_a = slot === null || slot === void 0 ? void 0 : slot.components) === null || _a === void 0 ? void 0 : _a.length) || 0;
        this.hasComponents = ((_b = slot === null || slot === void 0 ? void 0 : slot.components) === null || _b === void 0 ? void 0 : _b.length) > 0;
        if (cls && cls !== this.class) {
            this.class = cls;
        }
        this.addSmartEditSlotClass(slot);
    }
    /**
     * Sets the pending count for the page slot components. Once all pending components are
     * loaded, the `isPending` flag is updated, so that the associated class can be updated
     */
    set pending(count) {
        this.pendingComponentCount = count;
        this.isPending = this.pendingComponentCount > 0;
    }
    get pending() {
        return this.pendingComponentCount;
    }
    /*
     * Is triggered when a component is added to the view. This is used to
     * update the pending count
     */
    isLoaded(loadState) {
        if (loadState) {
            this.pending--;
            this.cd.markForCheck();
        }
    }
    /**
     * The `DeferLoadingStrategy` indicates whether the component should be
     * rendered instantly or whether it should be deferred.
     */
    getComponentDeferOptions(componentType) {
        const deferLoading = this.cmsComponentsService.getDeferLoadingStrategy(componentType);
        return { deferLoading };
    }
    isDistinct(old, current) {
        var _a;
        return (current.components &&
            ((_a = old.components) === null || _a === void 0 ? void 0 : _a.length) === current.components.length &&
            !old.components.find((el, index) => el.uid !== current.components[index].uid));
    }
    addSmartEditSlotClass(slot) {
        if (slot) {
            this.dynamicAttributeService.addDynamicAttributes(this.elementRef.nativeElement, this.renderer, { slotData: slot });
        }
    }
    ngOnDestroy() {
        var _a;
        (_a = this.subscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
}
PageSlotComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-page-slot,[cx-page-slot]',
                template: "<ng-template\n  [cxOutlet]=\"position\"\n  [cxOutletContext]=\"{ components$: components$ }\"\n>\n  <ng-template\n    *ngFor=\"let component of components\"\n    [cxOutlet]=\"component.flexType\"\n    [cxOutletContext]=\"{ component: component }\"\n    [cxOutletDefer]=\"getComponentDeferOptions(component.flexType)\"\n    (loaded)=\"isLoaded($event)\"\n  >\n    <ng-container [cxComponentWrapper]=\"component\"></ng-container>\n  </ng-template>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
PageSlotComponent.ctorParameters = () => [
    { type: CmsService },
    { type: DynamicAttributeService },
    { type: Renderer2 },
    { type: ElementRef },
    { type: CmsComponentsService },
    { type: ChangeDetectorRef }
];
PageSlotComponent.propDecorators = {
    position: [{ type: Input }],
    class: [{ type: Input }, { type: HostBinding }],
    isPageFold: [{ type: HostBinding, args: ['class.page-fold',] }, { type: Input }],
    isPending: [{ type: HostBinding, args: ['class.cx-pending',] }],
    hasComponents: [{ type: HostBinding, args: ['class.has-components',] }, { type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1zbG90LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9zbG90L3BhZ2Utc2xvdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUdMLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsVUFBVSxFQUdWLHVCQUF1QixHQUN4QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxlQUFlLEVBQWMsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRTdFOzs7Ozs7OztHQVFHO0FBTUgsTUFBTSxPQUFPLGlCQUFpQjtJQTBENUIsWUFDWSxVQUFzQixFQUN0Qix1QkFBZ0QsRUFDaEQsUUFBbUIsRUFDbkIsVUFBc0IsRUFDdEIsb0JBQTBDLEVBQzFDLEVBQXFCO1FBTHJCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQTVDakM7O1dBRUc7UUFDc0MsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUU1RDs7O1dBR0c7UUFDOEIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUVsRDs7O1dB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SUFBSSxFQUFFLENBQ25CLENBQUM7U0FDSDtJQUNILENBQUM7SUFFRCxXQUFXOztRQUNULE1BQUEsSUFBSSxDQUFDLFlBQVksMENBQUUsV0FBVyxHQUFHO0lBQ25DLENBQUM7OztZQS9KRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsMmRBQXlDO2dCQUN6QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O1lBdkJDLFVBQVU7WUFHVix1QkFBdUI7WUFOdkIsU0FBUztZQUxULFVBQVU7WUFnQkgsb0JBQW9CO1lBbEIzQixpQkFBaUI7Ozt1QkEwQ2hCLEtBQUs7b0JBVUwsS0FBSyxZQUFJLFdBQVc7eUJBS3BCLFdBQVcsU0FBQyxpQkFBaUIsY0FBRyxLQUFLO3dCQU1yQyxXQUFXLFNBQUMsa0JBQWtCOzRCQU05QixXQUFXLFNBQUMsc0JBQXNCLGNBQUcsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ21zU2VydmljZSxcbiAgQ29udGVudFNsb3RDb21wb25lbnREYXRhLFxuICBDb250ZW50U2xvdERhdGEsXG4gIER5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAsIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSW50ZXJzZWN0aW9uT3B0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2xheW91dC9sb2FkaW5nL2ludGVyc2VjdGlvbi5tb2RlbCc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Ntcy1jb21wb25lbnRzLnNlcnZpY2UnO1xuXG4vKipcbiAqIFRoZSBgUGFnZVNsb3RDb21wb25lbnRgIGlzIHVzZWQgdG8gcmVuZGVyIHRoZSBDTVMgcGFnZSBzbG90IGFuZCBpdCdzIGNvbXBvbmVudHMuXG4gKlxuICogVGhlIFBhZ2Ugc2xvdCBob3N0IGVsZW1lbnQgd2lsbCBiZSBzdXBwbGVtZW50ZWQgd2l0aCBjc3MgY2xhc3NlcyBzbyB0aGF0IHRoZSBsYXlvdXRcbiAqIGNhbiBiZSBmdWxseSBjb250cm9sbGVkIGJ5IGN1c3RvbWVyczpcbiAqIC0gVGhlIHBhZ2Ugc2xvdCBfcG9zaXRpb25fIGlzIGFkZGVkIGFzIGEgY3NzIGNsYXNzIGJ5IGRlZmF1bHQuXG4gKiAtIFRoZSBgY3gtcGVuZGluZ2AgaXMgYWRkZWQgZm9yIGFzIGxvbmcgYXMgdGhlIHNsb3QgaGFzbid0IHN0YXJ0IGxvYWRpbmcuXG4gKiAtIFRoZSBgcGFnZS1mb2xkYCBzdHlsZSBjbGFzcyBpcyBhZGRlZCBmb3IgdGhlIHBhZ2Ugc2xvdCB3aGljaCBpcyBjb25maWd1cmVkIGFzIHRoZSBwYWdlIGZvbGQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXBhZ2Utc2xvdCxbY3gtcGFnZS1zbG90XScsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdlLXNsb3QuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUGFnZVNsb3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBUaGUgcG9zaXRpb24gcmVwcmVzZW50cyB0aGUgdW5pcXVlIGtleSBmb3IgYSBwYWdlIHNsb3Qgb24gYSBzaW5nbGUgcGFnZSwgYnV0IGNhblxuICAgKiBiZSByZXVzZWQgY3Jvc3MgcGFnZXMuXG4gICAqXG4gICAqIFRoZSBwb3NpdGlvbiBpcyB1c2VkIHRvIGZpbmQgdGhlIENNUyBjb21wb25lbnRzIGZvciB0aGUgcGFnZSBzbG90LiBJdCBpcyBhbHNvXG4gICAqIGFkZGVkIGFzIGFuIGFkZGl0aW9uYWwgQ1NTIGNsYXNzIHNvIHRoYXQgbGF5b3V0IGNhbiBiZSBhcHBsaWVkLlxuICAgKi9cbiAgQElucHV0KCkgc2V0IHBvc2l0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnBvc2l0aW9uJC5uZXh0KHZhbHVlKTtcbiAgfVxuICBnZXQgcG9zaXRpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbiQudmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogTWFpbnRhaW5zIGNzcyBjbGFzc2VzIGludHJvZHVjZWQgYnkgdGhlIGhvc3QgYW5kIGFkZHMgYWRkaXRpb25hbCBjbGFzc2VzLlxuICAgKi9cbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCkgY2xhc3M6IHN0cmluZztcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoYXQgdGhlIHBhZ2Ugc2xvdCBpcyB0aGUgbGFzdCBwYWdlIHNsb3QgYWJvdmUgdGhlIGZvbGQuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnBhZ2UtZm9sZCcpIEBJbnB1dCgpIGlzUGFnZUZvbGQgPSBmYWxzZTtcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoYXQgdGhlIGNvbXBvbmVudHMgb2YgdGhlIHBhZ2Ugc2xvdCBoYXZlbid0IGJlZW4gbG9hZGVkIGFzIGxvbmdcbiAgICogYXMgdGhlIGlzUGVuZGluZyBzdGF0ZSBpcyB0cnVlLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jeC1wZW5kaW5nJykgaXNQZW5kaW5nID0gdHJ1ZTtcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoYXQgdGhlIHBhZ2Ugc2xvdCBkb2Vzbid0IGNvbnRhaW4gYW55IGNvbXBvbmVudHMuIFRoaXMgaXMgbm9cbiAgICogbG9uZ2VyIHVzZWQgaW4gc3BhcnRhY3VzLCBidXQga2VwdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmhhcy1jb21wb25lbnRzJykgQElucHV0KCkgaGFzQ29tcG9uZW50cyA9IGZhbHNlO1xuXG4gIHByb3RlY3RlZCBwb3NpdGlvbiQ6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh1bmRlZmluZWQpO1xuXG4gIGNvbXBvbmVudHM6IENvbnRlbnRTbG90Q29tcG9uZW50RGF0YVtdO1xuXG4gIHByb3RlY3RlZCBzbG90JDogT2JzZXJ2YWJsZTxDb250ZW50U2xvdERhdGE+ID0gdGhpcy5wb3NpdGlvbiQucGlwZShcbiAgICBzd2l0Y2hNYXAoKHBvc2l0aW9uKSA9PiB0aGlzLmNtc1NlcnZpY2UuZ2V0Q29udGVudFNsb3QocG9zaXRpb24pKSxcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCh0aGlzLmlzRGlzdGluY3QpXG4gICk7XG5cbiAgLyoqIE9ic2VydmVzIHRoZSBjb21wb25lbnRzIGZvciB0aGUgZ2l2ZW4gcGFnZSBzbG90LiAqL1xuICBjb21wb25lbnRzJDogT2JzZXJ2YWJsZTxDb250ZW50U2xvdENvbXBvbmVudERhdGFbXT4gPSB0aGlzLnNsb3QkLnBpcGUoXG4gICAgbWFwKChzbG90KSA9PiBzbG90Py5jb21wb25lbnRzID8/IFtdKVxuICApO1xuXG4gIHByb3RlY3RlZCBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICAvKiogS2VlcHMgdHJhY2sgb2YgdGhlIHBlbmRpbmcgY29tcG9uZW50cyB0aGF0IG11c3QgYmUgbG9hZGVkIGZvciB0aGUgcGFnZSBzbG90ICovXG4gIHByaXZhdGUgcGVuZGluZ0NvbXBvbmVudENvdW50ID0gMDtcblxuICAvKiogVHJhY2tzIHRoZSBsYXN0IHVzZWQgcG9zaXRpb24sIGluIGNhc2UgdGhlIHBhZ2Ugc2xvdCBpcyB1c2VkIGR5bmFtaWNhbGx5ICovXG4gIHByaXZhdGUgbGFzdFBvc2l0aW9uOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBkeW5hbWljQXR0cmlidXRlU2VydmljZTogRHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJvdGVjdGVkIGNtc0NvbXBvbmVudHNTZXJ2aWNlOiBDbXNDb21wb25lbnRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLnNsb3QkLnBpcGUodGFwKChzbG90KSA9PiB0aGlzLmRlY29yYXRlKHNsb3QpKSkuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB2YWx1ZT8uY29tcG9uZW50cyB8fCBbXTtcbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBkZWNvcmF0ZShzbG90OiBDb250ZW50U2xvdERhdGEpOiB2b2lkIHtcbiAgICBsZXQgY2xzID0gdGhpcy5jbGFzcyB8fCAnJztcblxuICAgIGlmICh0aGlzLmxhc3RQb3NpdGlvbiAmJiBjbHMuaW5kZXhPZih0aGlzLmxhc3RQb3NpdGlvbikgPiAtMSkge1xuICAgICAgY2xzID0gY2xzLnJlcGxhY2UodGhpcy5sYXN0UG9zaXRpb24sICcnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucG9zaXRpb24kLnZhbHVlKSB7XG4gICAgICBjbHMgKz0gYCAke3RoaXMucG9zaXRpb24kLnZhbHVlfWA7XG4gICAgICB0aGlzLmxhc3RQb3NpdGlvbiA9IHRoaXMucG9zaXRpb24kLnZhbHVlO1xuICAgIH1cblxuICAgIC8vIGhvc3QgYmluZGluZ3NcbiAgICB0aGlzLnBlbmRpbmcgPSBzbG90Py5jb21wb25lbnRzPy5sZW5ndGggfHwgMDtcbiAgICB0aGlzLmhhc0NvbXBvbmVudHMgPSBzbG90Py5jb21wb25lbnRzPy5sZW5ndGggPiAwO1xuICAgIGlmIChjbHMgJiYgY2xzICE9PSB0aGlzLmNsYXNzKSB7XG4gICAgICB0aGlzLmNsYXNzID0gY2xzO1xuICAgIH1cblxuICAgIHRoaXMuYWRkU21hcnRFZGl0U2xvdENsYXNzKHNsb3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHBlbmRpbmcgY291bnQgZm9yIHRoZSBwYWdlIHNsb3QgY29tcG9uZW50cy4gT25jZSBhbGwgcGVuZGluZyBjb21wb25lbnRzIGFyZVxuICAgKiBsb2FkZWQsIHRoZSBgaXNQZW5kaW5nYCBmbGFnIGlzIHVwZGF0ZWQsIHNvIHRoYXQgdGhlIGFzc29jaWF0ZWQgY2xhc3MgY2FuIGJlIHVwZGF0ZWRcbiAgICovXG4gIHByb3RlY3RlZCBzZXQgcGVuZGluZyhjb3VudDogbnVtYmVyKSB7XG4gICAgdGhpcy5wZW5kaW5nQ29tcG9uZW50Q291bnQgPSBjb3VudDtcbiAgICB0aGlzLmlzUGVuZGluZyA9IHRoaXMucGVuZGluZ0NvbXBvbmVudENvdW50ID4gMDtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgcGVuZGluZygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnBlbmRpbmdDb21wb25lbnRDb3VudDtcbiAgfVxuXG4gIC8qXG4gICAqIElzIHRyaWdnZXJlZCB3aGVuIGEgY29tcG9uZW50IGlzIGFkZGVkIHRvIHRoZSB2aWV3LiBUaGlzIGlzIHVzZWQgdG9cbiAgICogdXBkYXRlIHRoZSBwZW5kaW5nIGNvdW50XG4gICAqL1xuICBpc0xvYWRlZChsb2FkU3RhdGU6IGJvb2xlYW4pIHtcbiAgICBpZiAobG9hZFN0YXRlKSB7XG4gICAgICB0aGlzLnBlbmRpbmctLTtcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBgRGVmZXJMb2FkaW5nU3RyYXRlZ3lgIGluZGljYXRlcyB3aGV0aGVyIHRoZSBjb21wb25lbnQgc2hvdWxkIGJlXG4gICAqIHJlbmRlcmVkIGluc3RhbnRseSBvciB3aGV0aGVyIGl0IHNob3VsZCBiZSBkZWZlcnJlZC5cbiAgICovXG4gIGdldENvbXBvbmVudERlZmVyT3B0aW9ucyhjb21wb25lbnRUeXBlOiBzdHJpbmcpOiBJbnRlcnNlY3Rpb25PcHRpb25zIHtcbiAgICBjb25zdCBkZWZlckxvYWRpbmcgPSB0aGlzLmNtc0NvbXBvbmVudHNTZXJ2aWNlLmdldERlZmVyTG9hZGluZ1N0cmF0ZWd5KFxuICAgICAgY29tcG9uZW50VHlwZVxuICAgICk7XG4gICAgcmV0dXJuIHsgZGVmZXJMb2FkaW5nIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgaXNEaXN0aW5jdChvbGQ6IENvbnRlbnRTbG90RGF0YSwgY3VycmVudDogQ29udGVudFNsb3REYXRhKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGN1cnJlbnQuY29tcG9uZW50cyAmJlxuICAgICAgb2xkLmNvbXBvbmVudHM/Lmxlbmd0aCA9PT0gY3VycmVudC5jb21wb25lbnRzLmxlbmd0aCAmJlxuICAgICAgIW9sZC5jb21wb25lbnRzLmZpbmQoXG4gICAgICAgIChlbCwgaW5kZXgpID0+IGVsLnVpZCAhPT0gY3VycmVudC5jb21wb25lbnRzW2luZGV4XS51aWRcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRTbWFydEVkaXRTbG90Q2xhc3Moc2xvdDogQ29udGVudFNsb3REYXRhKTogdm9pZCB7XG4gICAgaWYgKHNsb3QpIHtcbiAgICAgIHRoaXMuZHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UuYWRkRHluYW1pY0F0dHJpYnV0ZXMoXG4gICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgICB0aGlzLnJlbmRlcmVyLFxuICAgICAgICB7IHNsb3REYXRhOiBzbG90IH1cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24/LnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==