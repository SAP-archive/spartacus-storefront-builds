import { __decorate } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, Input, OnDestroy, OnInit, Renderer2, } from '@angular/core';
import { CmsConfig, CmsService, ContentSlotComponentData, ContentSlotData, DeferLoadingStrategy, DynamicAttributeService, } from '@spartacus/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
let PageSlotComponent = class PageSlotComponent {
    constructor(cmsService, dynamicAttributeService, renderer, hostElement, config, cdRef) {
        this.cmsService = cmsService;
        this.dynamicAttributeService = dynamicAttributeService;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.config = config;
        this.cdRef = cdRef;
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
        this.slot$ = this.position$.pipe(switchMap((position) => this.cmsService.getContentSlot(position)), tap((slot) => this.addSmartEditSlotClass(slot)));
        this.components$ = this.slot$.pipe(map((slot) => (slot && slot.components ? slot.components : [])), distinctUntilChanged((a, b) => a.length === b.length && !a.find((el, index) => el.uid !== b[index].uid)));
        this.subscription = new Subscription();
    }
    /**
     * The position is used to find the CMS page slot (and optional outlet)
     * that is rendered in the PageSlotComponent. Furthermore, the position
     * is added as a CSS class name to the host element.
     */
    set position(position) {
        this.position$.next(position);
        this.renderer.addClass(this.hostElement.nativeElement, position);
    }
    get position() {
        return this.position$.value;
    }
    ngOnInit() {
        this.subscription.add(this.components$.subscribe((components) => {
            this.hasComponents = components && components.length > 0;
            this.pendingComponentCount = components ? components.length : 0;
            this.isPending = this.pendingComponentCount > 0;
        }));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    /**
     * Is triggered when a component is added to the view.
     * We use this information to dropthe `is-pending` class from the page slot
     * when all nested components have been added.
     */
    isLoaded(loadState) {
        var _a;
        if (loadState) {
            this.pendingComponentCount--;
        }
        this.isPending = this.pendingComponentCount > 0;
        (_a = this.cdRef) === null || _a === void 0 ? void 0 : _a.markForCheck();
    }
    getComponentDeferOptions(componentType) {
        const deferLoading = this.getDeferLoadingStrategy(componentType);
        return { deferLoading };
    }
    /**
     * The `DeferLoadingStrategy` indicates whether component rendering
     * should be deferred.
     */
    getDeferLoadingStrategy(componentType) {
        if (this.config) {
            return (this.config.cmsComponents[componentType] || {})
                .deferLoading;
        }
    }
    addSmartEditSlotClass(slot) {
        if (slot && this.cmsService.isLaunchInSmartEdit()) {
            this.addSmartEditContract(slot);
        }
    }
    addSmartEditContract(slot) {
        this.dynamicAttributeService.addDynamicAttributes(slot.properties, this.hostElement.nativeElement, this.renderer);
    }
};
PageSlotComponent.ctorParameters = () => [
    { type: CmsService },
    { type: DynamicAttributeService },
    { type: Renderer2 },
    { type: ElementRef },
    { type: CmsConfig },
    { type: ChangeDetectorRef }
];
__decorate([
    Input()
], PageSlotComponent.prototype, "position", null);
__decorate([
    HostBinding('class.cx-pending')
], PageSlotComponent.prototype, "isPending", void 0);
__decorate([
    HostBinding('class.has-components')
], PageSlotComponent.prototype, "hasComponents", void 0);
__decorate([
    HostBinding('class.page-fold'), Input()
], PageSlotComponent.prototype, "isPageFold", void 0);
PageSlotComponent = __decorate([
    Component({
        selector: 'cx-page-slot,[cx-page-slot]',
        template: "<ng-template\n  [cxOutlet]=\"position\"\n  [cxOutletContext]=\"{ components$: components$ }\"\n>\n  <ng-template\n    *ngFor=\"let component of components$ | async\"\n    [cxOutlet]=\"component.flexType\"\n    [cxOutletContext]=\"{ component: component }\"\n    [cxOutletDefer]=\"getComponentDeferOptions(component.flexType)\"\n    (loaded)=\"isLoaded($event)\"\n  >\n    <ng-container [cxComponentWrapper]=\"component\"></ng-container>\n  </ng-template>\n</ng-template>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], PageSlotComponent);
export { PageSlotComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1zbG90LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcGFnZS9zbG90L3BhZ2Utc2xvdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLEtBQUssRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVix3QkFBd0IsRUFDeEIsZUFBZSxFQUNmLG9CQUFvQixFQUNwQix1QkFBdUIsR0FDeEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsZUFBZSxFQUFjLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVEzRSxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtJQWdFNUIsWUFDWSxVQUFzQixFQUN0Qix1QkFBZ0QsRUFDaEQsUUFBbUIsRUFDbkIsV0FBdUIsRUFDdkIsTUFBa0IsRUFDbEIsS0FBeUI7UUFMekIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0Qiw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUNsQixVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQXZESixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2Isa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDbEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUluRCxjQUFTLEdBQUcs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LGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDbkUsWUFBWSxDQUFDO1NBQ2pCO0lBQ0gsQ0FBQztJQUVPLHFCQUFxQixDQUFDLElBQUk7UUFDaEMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxFQUFFO1lBQ2pELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7SUFFTyxvQkFBb0IsQ0FBQyxJQUFxQjtRQUNoRCxJQUFJLENBQUMsdUJBQXVCLENBQUMsb0JBQW9CLENBQy9DLElBQUksQ0FBQyxVQUFVLEVBQ2YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQzlCLElBQUksQ0FBQyxRQUFRLENBQ2QsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBOztZQWhFeUIsVUFBVTtZQUNHLHVCQUF1QjtZQUN0QyxTQUFTO1lBQ04sVUFBVTtZQUNkLFNBQVM7WUFDVixpQkFBaUI7O0FBL0RyQztJQURDLEtBQUssRUFBRTtpREFJUDtBQUtnQztJQUFoQyxXQUFXLENBQUMsa0JBQWtCLENBQUM7b0RBQWtCO0FBQ2I7SUFBcEMsV0FBVyxDQUFDLHNCQUFzQixDQUFDO3dEQUF1QjtBQUNsQjtJQUF4QyxXQUFXLENBQUMsaUJBQWlCLENBQUMsRUFBRSxLQUFLLEVBQUU7cURBQW9CO0FBakJqRCxpQkFBaUI7SUFMN0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLDZCQUE2QjtRQUN2QyxvZUFBeUM7UUFDekMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztHQUNXLGlCQUFpQixDQWlJN0I7U0FqSVksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDbXNDb25maWcsXG4gIENtc1NlcnZpY2UsXG4gIENvbnRlbnRTbG90Q29tcG9uZW50RGF0YSxcbiAgQ29udGVudFNsb3REYXRhLFxuICBEZWZlckxvYWRpbmdTdHJhdGVneSxcbiAgRHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCwgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJbnRlcnNlY3Rpb25PcHRpb25zIH0gZnJvbSAnLi4vLi4vLi4vbGF5b3V0L2xvYWRpbmcvaW50ZXJzZWN0aW9uLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcGFnZS1zbG90LFtjeC1wYWdlLXNsb3RdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2Utc2xvdC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdlU2xvdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIFRoZSBwb3NpdGlvbiBpcyB1c2VkIHRvIGZpbmQgdGhlIENNUyBwYWdlIHNsb3QgKGFuZCBvcHRpb25hbCBvdXRsZXQpXG4gICAqIHRoYXQgaXMgcmVuZGVyZWQgaW4gdGhlIFBhZ2VTbG90Q29tcG9uZW50LiBGdXJ0aGVybW9yZSwgdGhlIHBvc2l0aW9uXG4gICAqIGlzIGFkZGVkIGFzIGEgQ1NTIGNsYXNzIG5hbWUgdG8gdGhlIGhvc3QgZWxlbWVudC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBwb3NpdGlvbihwb3NpdGlvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5wb3NpdGlvbiQubmV4dChwb3NpdGlvbik7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHBvc2l0aW9uKTtcbiAgfVxuICBnZXQgcG9zaXRpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbiQudmFsdWU7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmN4LXBlbmRpbmcnKSBpc1BlbmRpbmcgPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmhhcy1jb21wb25lbnRzJykgaGFzQ29tcG9uZW50cyA9IGZhbHNlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnBhZ2UtZm9sZCcpIEBJbnB1dCgpIGlzUGFnZUZvbGQgPSBmYWxzZTtcblxuICBwcml2YXRlIHBlbmRpbmdDb21wb25lbnRDb3VudDogbnVtYmVyO1xuXG4gIHJlYWRvbmx5IHBvc2l0aW9uJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPih1bmRlZmluZWQpO1xuXG4gIC8qKlxuICAgKiBvYnNlcnZhYmxlIHdpdGggYENvbnRlbnRTbG90RGF0YWAgZm9yIHRoZSBjdXJyZW50IHBvc2l0aW9uXG4gICAqXG4gICAqIEBkZXByZWNhdGVkIHdlJ2xsIHN0b3Agc3VwcG9ydGluZyB0aGlzIHByb3BlcnR5IGluIDIuMCBhc1xuICAgKiBpdCBpcyBub3QgdXNlZCBzZXBhcmF0ZWx5LlxuICAgKi9cbiAgcmVhZG9ubHkgc2xvdCQ6IE9ic2VydmFibGU8Q29udGVudFNsb3REYXRhPiA9IHRoaXMucG9zaXRpb24kLnBpcGUoXG4gICAgc3dpdGNoTWFwKChwb3NpdGlvbikgPT4gdGhpcy5jbXNTZXJ2aWNlLmdldENvbnRlbnRTbG90KHBvc2l0aW9uKSksXG4gICAgdGFwKChzbG90KSA9PiB0aGlzLmFkZFNtYXJ0RWRpdFNsb3RDbGFzcyhzbG90KSlcbiAgKTtcblxuICByZWFkb25seSBjb21wb25lbnRzJDogT2JzZXJ2YWJsZTxcbiAgICBDb250ZW50U2xvdENvbXBvbmVudERhdGFbXVxuICA+ID0gdGhpcy5zbG90JC5waXBlKFxuICAgIG1hcCgoc2xvdCkgPT4gKHNsb3QgJiYgc2xvdC5jb21wb25lbnRzID8gc2xvdC5jb21wb25lbnRzIDogW10pKSxcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZChcbiAgICAgIChhLCBiKSA9PlxuICAgICAgICBhLmxlbmd0aCA9PT0gYi5sZW5ndGggJiYgIWEuZmluZCgoZWwsIGluZGV4KSA9PiBlbC51aWQgIT09IGJbaW5kZXhdLnVpZClcbiAgICApXG4gICk7XG5cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgY21zU2VydmljZTogQ21zU2VydmljZSxcbiAgICBkeW5hbWljQXR0cmlidXRlU2VydmljZTogRHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBob3N0RWxlbWVudDogRWxlbWVudFJlZixcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dW5pZmllZC1zaWduYXR1cmVzXG4gICAgY29uZmlnOiBDbXNDb25maWdcbiAgKTtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS40XG4gICAqIFVzZSBjb25zdHJ1Y3RvcihjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLCBkeW5hbWljQXR0cmlidXRlU2VydmljZTogRHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIGhvc3RFbGVtZW50OiBFbGVtZW50UmVmLCBjb25maWc/OiBDbXNDb25maWcpIGluc3RlYWRcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsXG4gICAgZHluYW1pY0F0dHJpYnV0ZVNlcnZpY2U6IER5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWZcbiAgKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGR5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlOiBEeW5hbWljQXR0cmlidXRlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcm90ZWN0ZWQgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHJvdGVjdGVkIGNvbmZpZz86IENtc0NvbmZpZyxcbiAgICBwcm90ZWN0ZWQgY2RSZWY/OiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5jb21wb25lbnRzJC5zdWJzY3JpYmUoKGNvbXBvbmVudHMpID0+IHtcbiAgICAgICAgdGhpcy5oYXNDb21wb25lbnRzID0gY29tcG9uZW50cyAmJiBjb21wb25lbnRzLmxlbmd0aCA+IDA7XG4gICAgICAgIHRoaXMucGVuZGluZ0NvbXBvbmVudENvdW50ID0gY29tcG9uZW50cyA/IGNvbXBvbmVudHMubGVuZ3RoIDogMDtcbiAgICAgICAgdGhpcy5pc1BlbmRpbmcgPSB0aGlzLnBlbmRpbmdDb21wb25lbnRDb3VudCA+IDA7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIElzIHRyaWdnZXJlZCB3aGVuIGEgY29tcG9uZW50IGlzIGFkZGVkIHRvIHRoZSB2aWV3LlxuICAgKiBXZSB1c2UgdGhpcyBpbmZvcm1hdGlvbiB0byBkcm9wdGhlIGBpcy1wZW5kaW5nYCBjbGFzcyBmcm9tIHRoZSBwYWdlIHNsb3RcbiAgICogd2hlbiBhbGwgbmVzdGVkIGNvbXBvbmVudHMgaGF2ZSBiZWVuIGFkZGVkLlxuICAgKi9cbiAgaXNMb2FkZWQobG9hZFN0YXRlOiBib29sZWFuKSB7XG4gICAgaWYgKGxvYWRTdGF0ZSkge1xuICAgICAgdGhpcy5wZW5kaW5nQ29tcG9uZW50Q291bnQtLTtcbiAgICB9XG4gICAgdGhpcy5pc1BlbmRpbmcgPSB0aGlzLnBlbmRpbmdDb21wb25lbnRDb3VudCA+IDA7XG4gICAgdGhpcy5jZFJlZj8ubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBnZXRDb21wb25lbnREZWZlck9wdGlvbnMoY29tcG9uZW50VHlwZTogc3RyaW5nKTogSW50ZXJzZWN0aW9uT3B0aW9ucyB7XG4gICAgY29uc3QgZGVmZXJMb2FkaW5nID0gdGhpcy5nZXREZWZlckxvYWRpbmdTdHJhdGVneShjb21wb25lbnRUeXBlKTtcbiAgICByZXR1cm4geyBkZWZlckxvYWRpbmcgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgYERlZmVyTG9hZGluZ1N0cmF0ZWd5YCBpbmRpY2F0ZXMgd2hldGhlciBjb21wb25lbnQgcmVuZGVyaW5nXG4gICAqIHNob3VsZCBiZSBkZWZlcnJlZC5cbiAgICovXG4gIHByaXZhdGUgZ2V0RGVmZXJMb2FkaW5nU3RyYXRlZ3koY29tcG9uZW50VHlwZTogc3RyaW5nKTogRGVmZXJMb2FkaW5nU3RyYXRlZ3kge1xuICAgIGlmICh0aGlzLmNvbmZpZykge1xuICAgICAgcmV0dXJuICgodGhpcy5jb25maWcgYXMgQ21zQ29uZmlnKS5jbXNDb21wb25lbnRzW2NvbXBvbmVudFR5cGVdIHx8IHt9KVxuICAgICAgICAuZGVmZXJMb2FkaW5nO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkU21hcnRFZGl0U2xvdENsYXNzKHNsb3QpOiB2b2lkIHtcbiAgICBpZiAoc2xvdCAmJiB0aGlzLmNtc1NlcnZpY2UuaXNMYXVuY2hJblNtYXJ0RWRpdCgpKSB7XG4gICAgICB0aGlzLmFkZFNtYXJ0RWRpdENvbnRyYWN0KHNsb3QpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkU21hcnRFZGl0Q29udHJhY3Qoc2xvdDogQ29udGVudFNsb3REYXRhKTogdm9pZCB7XG4gICAgdGhpcy5keW5hbWljQXR0cmlidXRlU2VydmljZS5hZGREeW5hbWljQXR0cmlidXRlcyhcbiAgICAgIHNsb3QucHJvcGVydGllcyxcbiAgICAgIHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMucmVuZGVyZXJcbiAgICApO1xuICB9XG59XG4iXX0=