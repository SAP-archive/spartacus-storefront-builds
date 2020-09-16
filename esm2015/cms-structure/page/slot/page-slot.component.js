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
     * added as an additional CSS class so that layoutt can be applied.
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1zbG90LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9zbG90L3BhZ2Utc2xvdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUdMLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsVUFBVSxFQUdWLHVCQUF1QixHQUN4QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxlQUFlLEVBQWMsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRTdFOzs7Ozs7OztHQVFHO0FBTUgsTUFBTSxPQUFPLGlCQUFpQjtJQTBENUIsWUFDWSxVQUFzQixFQUN0Qix1QkFBZ0QsRUFDaEQsUUFBbUIsRUFDbkIsVUFBc0IsRUFDdEIsb0JBQTBDLEVBQzFDLEVBQXFCO1FBTHJCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQTVDakM7O1dBRUc7UUFDc0MsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUU1RDs7O1dBR0c7UUFDOEIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUVsRDs7O1dB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SUFBSSxFQUFFLENBQ25CLENBQUM7U0FDSDtJQUNILENBQUM7SUFFRCxXQUFXOztRQUNULE1BQUEsSUFBSSxDQUFDLFlBQVksMENBQUUsV0FBVyxHQUFHO0lBQ25DLENBQUM7OztZQS9KRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsMmRBQXlDO2dCQUN6QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O1lBdkJDLFVBQVU7WUFHVix1QkFBdUI7WUFOdkIsU0FBUztZQUxULFVBQVU7WUFnQkgsb0JBQW9CO1lBbEIzQixpQkFBaUI7Ozt1QkEwQ2hCLEtBQUs7b0JBVUwsS0FBSyxZQUFJLFdBQVc7eUJBS3BCLFdBQVcsU0FBQyxpQkFBaUIsY0FBRyxLQUFLO3dCQU1yQyxXQUFXLFNBQUMsa0JBQWtCOzRCQU05QixXQUFXLFNBQUMsc0JBQXNCLGNBQUcsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ21zU2VydmljZSxcbiAgQ29udGVudFNsb3RDb21wb25lbnREYXRhLFxuICBDb250ZW50U2xvdERhdGEsXG4gIER5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAsIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSW50ZXJzZWN0aW9uT3B0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2xheW91dC9sb2FkaW5nL2ludGVyc2VjdGlvbi5tb2RlbCc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Ntcy1jb21wb25lbnRzLnNlcnZpY2UnO1xuXG4vKipcbiAqIFRoZSBgUGFnZVNsb3RDb21wb25lbnRgIGlzIHVzZWQgdG8gcmVuZGVyIHRoZSBDTVMgcGFnZSBzbG90IGFuZCBpdCdzIGNvbXBvbmVudHMuXG4gKlxuICogVGhlIFBhZ2Ugc2xvdCBob3N0IGVsZW1lbnQgd2lsbCBiZSBzdXBwbGVtZW50ZWQgd2l0aCBjc3MgY2xhc3NlcyBzbyB0aGF0IHRoZSBsYXlvdXRcbiAqIGNhbiBiZSBmdWxseSBjb250cm9sbGVkIGJ5IGN1c3RvbWVyczpcbiAqIC0gVGhlIHBhZ2Ugc2xvdCBfcG9zaXRpb25fIGlzIGFkZGVkIGFzIGEgY3NzIGNsYXNzIGJ5IGRlZmF1bHQuXG4gKiAtIFRoZSBgY3gtcGVuZGluZ2AgaXMgYWRkZWQgZm9yIGFzIGxvbmcgYXMgdGhlIHNsb3QgaGFzbid0IHN0YXJ0IGxvYWRpbmcuXG4gKiAtIFRoZSBgcGFnZS1mb2xkYCBzdHlsZSBjbGFzcyBpcyBhZGRlZCBmb3IgdGhlIHBhZ2Ugc2xvdCB3aGljaCBpcyBjb25maWd1cmVkIGFzIHRoZSBwYWdlIGZvbGQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXBhZ2Utc2xvdCxbY3gtcGFnZS1zbG90XScsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdlLXNsb3QuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUGFnZVNsb3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBUaGUgcG9zaXRpb24gcmVwcmVzZW50cyB0aGUgdW5pcXVlIGtleSBmb3IgYSBwYWdlIHNsb3Qgb24gYSBzaW5nbGUgcGFnZSwgYnV0IGNhblxuICAgKiBiZSByZXVzZWQgY3Jvc3MgcGFnZXMuXG4gICAqXG4gICAqIFRoZSBwb3NpdGlvbiBpcyB1c2VkIHRvIGZpbmQgdGhlIENNUyBjb21wb25lbnRzIGZvciB0aGUgcGFnZSBzbG90LiBJdCBpcyBhbHNvXG4gICAqIGFkZGVkIGFzIGFuIGFkZGl0aW9uYWwgQ1NTIGNsYXNzIHNvIHRoYXQgbGF5b3V0dCBjYW4gYmUgYXBwbGllZC5cbiAgICovXG4gIEBJbnB1dCgpIHNldCBwb3NpdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5wb3NpdGlvbiQubmV4dCh2YWx1ZSk7XG4gIH1cbiAgZ2V0IHBvc2l0aW9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24kLnZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIE1haW50YWlucyBjc3MgY2xhc3NlcyBpbnRyb2R1Y2VkIGJ5IHRoZSBob3N0IGFuZCBhZGRzIGFkZGl0aW9uYWwgY2xhc3Nlcy5cbiAgICovXG4gIEBJbnB1dCgpIEBIb3N0QmluZGluZygpIGNsYXNzOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGF0IHRoZSBwYWdlIHNsb3QgaXMgdGhlIGxhc3QgcGFnZSBzbG90IGFib3ZlIHRoZSBmb2xkLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5wYWdlLWZvbGQnKSBASW5wdXQoKSBpc1BhZ2VGb2xkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGF0IHRoZSBjb21wb25lbnRzIG9mIHRoZSBwYWdlIHNsb3QgaGF2ZW4ndCBiZWVuIGxvYWRlZCBhcyBsb25nXG4gICAqIGFzIHRoZSBpc1BlbmRpbmcgc3RhdGUgaXMgdHJ1ZS5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuY3gtcGVuZGluZycpIGlzUGVuZGluZyA9IHRydWU7XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGF0IHRoZSBwYWdlIHNsb3QgZG9lc24ndCBjb250YWluIGFueSBjb21wb25lbnRzLiBUaGlzIGlzIG5vXG4gICAqIGxvbmdlciB1c2VkIGluIHNwYXJ0YWN1cywgYnV0IGtlcHQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5oYXMtY29tcG9uZW50cycpIEBJbnB1dCgpIGhhc0NvbXBvbmVudHMgPSBmYWxzZTtcblxuICBwcm90ZWN0ZWQgcG9zaXRpb24kOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3QodW5kZWZpbmVkKTtcblxuICBjb21wb25lbnRzOiBDb250ZW50U2xvdENvbXBvbmVudERhdGFbXTtcblxuICBwcm90ZWN0ZWQgc2xvdCQ6IE9ic2VydmFibGU8Q29udGVudFNsb3REYXRhPiA9IHRoaXMucG9zaXRpb24kLnBpcGUoXG4gICAgc3dpdGNoTWFwKChwb3NpdGlvbikgPT4gdGhpcy5jbXNTZXJ2aWNlLmdldENvbnRlbnRTbG90KHBvc2l0aW9uKSksXG4gICAgZGlzdGluY3RVbnRpbENoYW5nZWQodGhpcy5pc0Rpc3RpbmN0KVxuICApO1xuXG4gIC8qKiBPYnNlcnZlcyB0aGUgY29tcG9uZW50cyBmb3IgdGhlIGdpdmVuIHBhZ2Ugc2xvdC4gKi9cbiAgY29tcG9uZW50cyQ6IE9ic2VydmFibGU8Q29udGVudFNsb3RDb21wb25lbnREYXRhW10+ID0gdGhpcy5zbG90JC5waXBlKFxuICAgIG1hcCgoc2xvdCkgPT4gc2xvdD8uY29tcG9uZW50cyA/PyBbXSlcbiAgKTtcblxuICBwcm90ZWN0ZWQgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgLyoqIEtlZXBzIHRyYWNrIG9mIHRoZSBwZW5kaW5nIGNvbXBvbmVudHMgdGhhdCBtdXN0IGJlIGxvYWRlZCBmb3IgdGhlIHBhZ2Ugc2xvdCAqL1xuICBwcml2YXRlIHBlbmRpbmdDb21wb25lbnRDb3VudCA9IDA7XG5cbiAgLyoqIFRyYWNrcyB0aGUgbGFzdCB1c2VkIHBvc2l0aW9uLCBpbiBjYXNlIHRoZSBwYWdlIHNsb3QgaXMgdXNlZCBkeW5hbWljYWxseSAqL1xuICBwcml2YXRlIGxhc3RQb3NpdGlvbjogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY21zU2VydmljZTogQ21zU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZHluYW1pY0F0dHJpYnV0ZVNlcnZpY2U6IER5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByb3RlY3RlZCBjbXNDb21wb25lbnRzU2VydmljZTogQ21zQ29tcG9uZW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNkOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5zbG90JC5waXBlKHRhcCgoc2xvdCkgPT4gdGhpcy5kZWNvcmF0ZShzbG90KSkpLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0gdmFsdWU/LmNvbXBvbmVudHMgfHwgW107XG4gICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZGVjb3JhdGUoc2xvdDogQ29udGVudFNsb3REYXRhKTogdm9pZCB7XG4gICAgbGV0IGNscyA9IHRoaXMuY2xhc3MgfHwgJyc7XG5cbiAgICBpZiAodGhpcy5sYXN0UG9zaXRpb24gJiYgY2xzLmluZGV4T2YodGhpcy5sYXN0UG9zaXRpb24pID4gLTEpIHtcbiAgICAgIGNscyA9IGNscy5yZXBsYWNlKHRoaXMubGFzdFBvc2l0aW9uLCAnJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnBvc2l0aW9uJC52YWx1ZSkge1xuICAgICAgY2xzICs9IGAgJHt0aGlzLnBvc2l0aW9uJC52YWx1ZX1gO1xuICAgICAgdGhpcy5sYXN0UG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uJC52YWx1ZTtcbiAgICB9XG5cbiAgICAvLyBob3N0IGJpbmRpbmdzXG4gICAgdGhpcy5wZW5kaW5nID0gc2xvdD8uY29tcG9uZW50cz8ubGVuZ3RoIHx8IDA7XG4gICAgdGhpcy5oYXNDb21wb25lbnRzID0gc2xvdD8uY29tcG9uZW50cz8ubGVuZ3RoID4gMDtcbiAgICBpZiAoY2xzICYmIGNscyAhPT0gdGhpcy5jbGFzcykge1xuICAgICAgdGhpcy5jbGFzcyA9IGNscztcbiAgICB9XG5cbiAgICB0aGlzLmFkZFNtYXJ0RWRpdFNsb3RDbGFzcyhzbG90KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBwZW5kaW5nIGNvdW50IGZvciB0aGUgcGFnZSBzbG90IGNvbXBvbmVudHMuIE9uY2UgYWxsIHBlbmRpbmcgY29tcG9uZW50cyBhcmVcbiAgICogbG9hZGVkLCB0aGUgYGlzUGVuZGluZ2AgZmxhZyBpcyB1cGRhdGVkLCBzbyB0aGF0IHRoZSBhc3NvY2lhdGVkIGNsYXNzIGNhbiBiZSB1cGRhdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgc2V0IHBlbmRpbmcoY291bnQ6IG51bWJlcikge1xuICAgIHRoaXMucGVuZGluZ0NvbXBvbmVudENvdW50ID0gY291bnQ7XG4gICAgdGhpcy5pc1BlbmRpbmcgPSB0aGlzLnBlbmRpbmdDb21wb25lbnRDb3VudCA+IDA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IHBlbmRpbmcoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5wZW5kaW5nQ29tcG9uZW50Q291bnQ7XG4gIH1cblxuICAvKlxuICAgKiBJcyB0cmlnZ2VyZWQgd2hlbiBhIGNvbXBvbmVudCBpcyBhZGRlZCB0byB0aGUgdmlldy4gVGhpcyBpcyB1c2VkIHRvXG4gICAqIHVwZGF0ZSB0aGUgcGVuZGluZyBjb3VudFxuICAgKi9cbiAgaXNMb2FkZWQobG9hZFN0YXRlOiBib29sZWFuKSB7XG4gICAgaWYgKGxvYWRTdGF0ZSkge1xuICAgICAgdGhpcy5wZW5kaW5nLS07XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgYERlZmVyTG9hZGluZ1N0cmF0ZWd5YCBpbmRpY2F0ZXMgd2hldGhlciB0aGUgY29tcG9uZW50IHNob3VsZCBiZVxuICAgKiByZW5kZXJlZCBpbnN0YW50bHkgb3Igd2hldGhlciBpdCBzaG91bGQgYmUgZGVmZXJyZWQuXG4gICAqL1xuICBnZXRDb21wb25lbnREZWZlck9wdGlvbnMoY29tcG9uZW50VHlwZTogc3RyaW5nKTogSW50ZXJzZWN0aW9uT3B0aW9ucyB7XG4gICAgY29uc3QgZGVmZXJMb2FkaW5nID0gdGhpcy5jbXNDb21wb25lbnRzU2VydmljZS5nZXREZWZlckxvYWRpbmdTdHJhdGVneShcbiAgICAgIGNvbXBvbmVudFR5cGVcbiAgICApO1xuICAgIHJldHVybiB7IGRlZmVyTG9hZGluZyB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIGlzRGlzdGluY3Qob2xkOiBDb250ZW50U2xvdERhdGEsIGN1cnJlbnQ6IENvbnRlbnRTbG90RGF0YSkge1xuICAgIHJldHVybiAoXG4gICAgICBjdXJyZW50LmNvbXBvbmVudHMgJiZcbiAgICAgIG9sZC5jb21wb25lbnRzPy5sZW5ndGggPT09IGN1cnJlbnQuY29tcG9uZW50cy5sZW5ndGggJiZcbiAgICAgICFvbGQuY29tcG9uZW50cy5maW5kKFxuICAgICAgICAoZWwsIGluZGV4KSA9PiBlbC51aWQgIT09IGN1cnJlbnQuY29tcG9uZW50c1tpbmRleF0udWlkXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkU21hcnRFZGl0U2xvdENsYXNzKHNsb3Q6IENvbnRlbnRTbG90RGF0YSk6IHZvaWQge1xuICAgIGlmIChzbG90KSB7XG4gICAgICB0aGlzLmR5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlLmFkZER5bmFtaWNBdHRyaWJ1dGVzKFxuICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgICAgdGhpcy5yZW5kZXJlcixcbiAgICAgICAgeyBzbG90RGF0YTogc2xvdCB9XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uPy51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=