import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, Input, Renderer2, } from '@angular/core';
import { CmsService, DynamicAttributeService, } from '@spartacus/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { PageSlotService } from './page-slot.service';
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
    constructor(cmsService, dynamicAttributeService, renderer, elementRef, cd, pageSlotService) {
        this.cmsService = cmsService;
        this.dynamicAttributeService = dynamicAttributeService;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.cd = cd;
        this.pageSlotService = pageSlotService;
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
        return this.pageSlotService.getComponentDeferOptions(this.position, componentType);
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
    { type: ChangeDetectorRef },
    { type: PageSlotService }
];
PageSlotComponent.propDecorators = {
    position: [{ type: HostBinding, args: ['attr.position',] }, { type: Input }],
    class: [{ type: Input }, { type: HostBinding }],
    isPageFold: [{ type: HostBinding, args: ['class.page-fold',] }, { type: Input }],
    isPending: [{ type: HostBinding, args: ['class.cx-pending',] }],
    hasComponents: [{ type: HostBinding, args: ['class.has-components',] }, { type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1zbG90LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9zbG90L3BhZ2Utc2xvdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUdMLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsVUFBVSxFQUdWLHVCQUF1QixHQUN4QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxlQUFlLEVBQWMsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV0RDs7Ozs7Ozs7R0FRRztBQU1ILE1BQU0sT0FBTyxpQkFBaUI7SUE0RDVCLFlBQ1ksVUFBc0IsRUFDdEIsdUJBQWdELEVBQ2hELFFBQW1CLEVBQ25CLFVBQXNCLEVBQ3RCLEVBQXFCLEVBQ3JCLGVBQWdDO1FBTGhDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFDckIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBNUM1Qzs7V0FFRztRQUNzQyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBRTVEOzs7V0FHRztRQUM4QixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBRWxEOzs7V0FHRztRQUMy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LENBQUM7SUFFRCxXQUFXOztRQUNULE1BQUEsSUFBSSxDQUFDLFlBQVksMENBQUUsV0FBVyxHQUFHO0lBQ25DLENBQUM7OztZQWpLRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsMmRBQXlDO2dCQUN6QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O1lBdkJDLFVBQVU7WUFHVix1QkFBdUI7WUFOdkIsU0FBUztZQUxULFVBQVU7WUFGVixpQkFBaUI7WUFrQlYsZUFBZTs7O3VCQXdCckIsV0FBVyxTQUFDLGVBQWUsY0FDM0IsS0FBSztvQkFXTCxLQUFLLFlBQUksV0FBVzt5QkFLcEIsV0FBVyxTQUFDLGlCQUFpQixjQUFHLEtBQUs7d0JBTXJDLFdBQVcsU0FBQyxrQkFBa0I7NEJBTTlCLFdBQVcsU0FBQyxzQkFBc0IsY0FBRyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDbXNTZXJ2aWNlLFxuICBDb250ZW50U2xvdENvbXBvbmVudERhdGEsXG4gIENvbnRlbnRTbG90RGF0YSxcbiAgRHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCwgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJbnRlcnNlY3Rpb25PcHRpb25zIH0gZnJvbSAnLi4vLi4vLi4vbGF5b3V0L2xvYWRpbmcvaW50ZXJzZWN0aW9uLm1vZGVsJztcbmltcG9ydCB7IFBhZ2VTbG90U2VydmljZSB9IGZyb20gJy4vcGFnZS1zbG90LnNlcnZpY2UnO1xuXG4vKipcbiAqIFRoZSBgUGFnZVNsb3RDb21wb25lbnRgIGlzIHVzZWQgdG8gcmVuZGVyIHRoZSBDTVMgcGFnZSBzbG90IGFuZCBpdCdzIGNvbXBvbmVudHMuXG4gKlxuICogVGhlIFBhZ2Ugc2xvdCBob3N0IGVsZW1lbnQgd2lsbCBiZSBzdXBwbGVtZW50ZWQgd2l0aCBjc3MgY2xhc3NlcyBzbyB0aGF0IHRoZSBsYXlvdXRcbiAqIGNhbiBiZSBmdWxseSBjb250cm9sbGVkIGJ5IGN1c3RvbWVyczpcbiAqIC0gVGhlIHBhZ2Ugc2xvdCBfcG9zaXRpb25fIGlzIGFkZGVkIGFzIGEgY3NzIGNsYXNzIGJ5IGRlZmF1bHQuXG4gKiAtIFRoZSBgY3gtcGVuZGluZ2AgaXMgYWRkZWQgZm9yIGFzIGxvbmcgYXMgdGhlIHNsb3QgaGFzbid0IHN0YXJ0IGxvYWRpbmcuXG4gKiAtIFRoZSBgcGFnZS1mb2xkYCBzdHlsZSBjbGFzcyBpcyBhZGRlZCBmb3IgdGhlIHBhZ2Ugc2xvdCB3aGljaCBpcyBjb25maWd1cmVkIGFzIHRoZSBwYWdlIGZvbGQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXBhZ2Utc2xvdCxbY3gtcGFnZS1zbG90XScsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdlLXNsb3QuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUGFnZVNsb3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBUaGUgcG9zaXRpb24gcmVwcmVzZW50cyB0aGUgdW5pcXVlIGtleSBmb3IgYSBwYWdlIHNsb3Qgb24gYSBzaW5nbGUgcGFnZSwgYnV0IGNhblxuICAgKiBiZSByZXVzZWQgY3Jvc3MgcGFnZXMuXG4gICAqXG4gICAqIFRoZSBwb3NpdGlvbiBpcyB1c2VkIHRvIGZpbmQgdGhlIENNUyBjb21wb25lbnRzIGZvciB0aGUgcGFnZSBzbG90LiBJdCBpcyBhbHNvXG4gICAqIGFkZGVkIGFzIGFuIGFkZGl0aW9uYWwgQ1NTIGNsYXNzIHNvIHRoYXQgbGF5b3V0IGNhbiBiZSBhcHBsaWVkLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnBvc2l0aW9uJylcbiAgQElucHV0KClcbiAgc2V0IHBvc2l0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnBvc2l0aW9uJC5uZXh0KHZhbHVlKTtcbiAgfVxuICBnZXQgcG9zaXRpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbiQudmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogTWFpbnRhaW5zIGNzcyBjbGFzc2VzIGludHJvZHVjZWQgYnkgdGhlIGhvc3QgYW5kIGFkZHMgYWRkaXRpb25hbCBjbGFzc2VzLlxuICAgKi9cbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCkgY2xhc3M6IHN0cmluZztcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoYXQgdGhlIHBhZ2Ugc2xvdCBpcyB0aGUgbGFzdCBwYWdlIHNsb3QgYWJvdmUgdGhlIGZvbGQuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnBhZ2UtZm9sZCcpIEBJbnB1dCgpIGlzUGFnZUZvbGQgPSBmYWxzZTtcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoYXQgdGhlIGNvbXBvbmVudHMgb2YgdGhlIHBhZ2Ugc2xvdCBoYXZlbid0IGJlZW4gbG9hZGVkIGFzIGxvbmdcbiAgICogYXMgdGhlIGlzUGVuZGluZyBzdGF0ZSBpcyB0cnVlLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jeC1wZW5kaW5nJykgaXNQZW5kaW5nID0gdHJ1ZTtcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoYXQgdGhlIHBhZ2Ugc2xvdCBkb2Vzbid0IGNvbnRhaW4gYW55IGNvbXBvbmVudHMuIFRoaXMgaXMgbm9cbiAgICogbG9uZ2VyIHVzZWQgaW4gc3BhcnRhY3VzLCBidXQga2VwdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmhhcy1jb21wb25lbnRzJykgQElucHV0KCkgaGFzQ29tcG9uZW50cyA9IGZhbHNlO1xuXG4gIHByb3RlY3RlZCBwb3NpdGlvbiQ6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh1bmRlZmluZWQpO1xuXG4gIGNvbXBvbmVudHM6IENvbnRlbnRTbG90Q29tcG9uZW50RGF0YVtdO1xuXG4gIHByb3RlY3RlZCBzbG90JDogT2JzZXJ2YWJsZTxDb250ZW50U2xvdERhdGE+ID0gdGhpcy5wb3NpdGlvbiQucGlwZShcbiAgICBzd2l0Y2hNYXAoKHBvc2l0aW9uKSA9PiB0aGlzLmNtc1NlcnZpY2UuZ2V0Q29udGVudFNsb3QocG9zaXRpb24pKSxcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCh0aGlzLmlzRGlzdGluY3QpXG4gICk7XG5cbiAgLyoqIE9ic2VydmVzIHRoZSBjb21wb25lbnRzIGZvciB0aGUgZ2l2ZW4gcGFnZSBzbG90LiAqL1xuICBjb21wb25lbnRzJDogT2JzZXJ2YWJsZTxDb250ZW50U2xvdENvbXBvbmVudERhdGFbXT4gPSB0aGlzLnNsb3QkLnBpcGUoXG4gICAgbWFwKChzbG90KSA9PiBzbG90Py5jb21wb25lbnRzID8/IFtdKVxuICApO1xuXG4gIHByb3RlY3RlZCBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICAvKiogS2VlcHMgdHJhY2sgb2YgdGhlIHBlbmRpbmcgY29tcG9uZW50cyB0aGF0IG11c3QgYmUgbG9hZGVkIGZvciB0aGUgcGFnZSBzbG90ICovXG4gIHByaXZhdGUgcGVuZGluZ0NvbXBvbmVudENvdW50ID0gMDtcblxuICAvKiogVHJhY2tzIHRoZSBsYXN0IHVzZWQgcG9zaXRpb24sIGluIGNhc2UgdGhlIHBhZ2Ugc2xvdCBpcyB1c2VkIGR5bmFtaWNhbGx5ICovXG4gIHByaXZhdGUgbGFzdFBvc2l0aW9uOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBkeW5hbWljQXR0cmlidXRlU2VydmljZTogRHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJvdGVjdGVkIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcm90ZWN0ZWQgcGFnZVNsb3RTZXJ2aWNlOiBQYWdlU2xvdFNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMuc2xvdCQucGlwZSh0YXAoKHNsb3QpID0+IHRoaXMuZGVjb3JhdGUoc2xvdCkpKS5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHZhbHVlPy5jb21wb25lbnRzIHx8IFtdO1xuICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGRlY29yYXRlKHNsb3Q6IENvbnRlbnRTbG90RGF0YSk6IHZvaWQge1xuICAgIGxldCBjbHMgPSB0aGlzLmNsYXNzIHx8ICcnO1xuXG4gICAgaWYgKHRoaXMubGFzdFBvc2l0aW9uICYmIGNscy5pbmRleE9mKHRoaXMubGFzdFBvc2l0aW9uKSA+IC0xKSB7XG4gICAgICBjbHMgPSBjbHMucmVwbGFjZSh0aGlzLmxhc3RQb3NpdGlvbiwgJycpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wb3NpdGlvbiQudmFsdWUpIHtcbiAgICAgIGNscyArPSBgICR7dGhpcy5wb3NpdGlvbiQudmFsdWV9YDtcbiAgICAgIHRoaXMubGFzdFBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbiQudmFsdWU7XG4gICAgfVxuXG4gICAgLy8gaG9zdCBiaW5kaW5nc1xuICAgIHRoaXMucGVuZGluZyA9IHNsb3Q/LmNvbXBvbmVudHM/Lmxlbmd0aCB8fCAwO1xuICAgIHRoaXMuaGFzQ29tcG9uZW50cyA9IHNsb3Q/LmNvbXBvbmVudHM/Lmxlbmd0aCA+IDA7XG4gICAgaWYgKGNscyAmJiBjbHMgIT09IHRoaXMuY2xhc3MpIHtcbiAgICAgIHRoaXMuY2xhc3MgPSBjbHM7XG4gICAgfVxuXG4gICAgdGhpcy5hZGRTbWFydEVkaXRTbG90Q2xhc3Moc2xvdCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgcGVuZGluZyBjb3VudCBmb3IgdGhlIHBhZ2Ugc2xvdCBjb21wb25lbnRzLiBPbmNlIGFsbCBwZW5kaW5nIGNvbXBvbmVudHMgYXJlXG4gICAqIGxvYWRlZCwgdGhlIGBpc1BlbmRpbmdgIGZsYWcgaXMgdXBkYXRlZCwgc28gdGhhdCB0aGUgYXNzb2NpYXRlZCBjbGFzcyBjYW4gYmUgdXBkYXRlZFxuICAgKi9cbiAgcHJvdGVjdGVkIHNldCBwZW5kaW5nKGNvdW50OiBudW1iZXIpIHtcbiAgICB0aGlzLnBlbmRpbmdDb21wb25lbnRDb3VudCA9IGNvdW50O1xuICAgIHRoaXMuaXNQZW5kaW5nID0gdGhpcy5wZW5kaW5nQ29tcG9uZW50Q291bnQgPiAwO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBwZW5kaW5nKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMucGVuZGluZ0NvbXBvbmVudENvdW50O1xuICB9XG5cbiAgLypcbiAgICogSXMgdHJpZ2dlcmVkIHdoZW4gYSBjb21wb25lbnQgaXMgYWRkZWQgdG8gdGhlIHZpZXcuIFRoaXMgaXMgdXNlZCB0b1xuICAgKiB1cGRhdGUgdGhlIHBlbmRpbmcgY291bnRcbiAgICovXG4gIGlzTG9hZGVkKGxvYWRTdGF0ZTogYm9vbGVhbikge1xuICAgIGlmIChsb2FkU3RhdGUpIHtcbiAgICAgIHRoaXMucGVuZGluZy0tO1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhlIGBEZWZlckxvYWRpbmdTdHJhdGVneWAgaW5kaWNhdGVzIHdoZXRoZXIgdGhlIGNvbXBvbmVudCBzaG91bGQgYmVcbiAgICogcmVuZGVyZWQgaW5zdGFudGx5IG9yIHdoZXRoZXIgaXQgc2hvdWxkIGJlIGRlZmVycmVkLlxuICAgKi9cbiAgZ2V0Q29tcG9uZW50RGVmZXJPcHRpb25zKGNvbXBvbmVudFR5cGU6IHN0cmluZyk6IEludGVyc2VjdGlvbk9wdGlvbnMge1xuICAgIHJldHVybiB0aGlzLnBhZ2VTbG90U2VydmljZS5nZXRDb21wb25lbnREZWZlck9wdGlvbnMoXG4gICAgICB0aGlzLnBvc2l0aW9uLFxuICAgICAgY29tcG9uZW50VHlwZVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaXNEaXN0aW5jdChvbGQ6IENvbnRlbnRTbG90RGF0YSwgY3VycmVudDogQ29udGVudFNsb3REYXRhKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGN1cnJlbnQuY29tcG9uZW50cyAmJlxuICAgICAgb2xkLmNvbXBvbmVudHM/Lmxlbmd0aCA9PT0gY3VycmVudC5jb21wb25lbnRzLmxlbmd0aCAmJlxuICAgICAgIW9sZC5jb21wb25lbnRzLmZpbmQoXG4gICAgICAgIChlbCwgaW5kZXgpID0+IGVsLnVpZCAhPT0gY3VycmVudC5jb21wb25lbnRzW2luZGV4XS51aWRcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRTbWFydEVkaXRTbG90Q2xhc3Moc2xvdDogQ29udGVudFNsb3REYXRhKTogdm9pZCB7XG4gICAgaWYgKHNsb3QpIHtcbiAgICAgIHRoaXMuZHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UuYWRkRHluYW1pY0F0dHJpYnV0ZXMoXG4gICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgICB0aGlzLnJlbmRlcmVyLFxuICAgICAgICB7IHNsb3REYXRhOiBzbG90IH1cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24/LnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==