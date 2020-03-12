import { ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { CmsConfig, CmsService, ContentSlotComponentData, ContentSlotData, DynamicAttributeService } from '@spartacus/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IntersectionOptions } from '../../../layout/loading/intersection.model';
import * as ɵngcc0 from '@angular/core';
export declare class PageSlotComponent implements OnInit, OnDestroy {
    protected cmsService: CmsService;
    protected dynamicAttributeService: DynamicAttributeService;
    protected renderer: Renderer2;
    protected hostElement: ElementRef;
    protected config?: CmsConfig;
    /**
     * The position is used to find the CMS page slot (and optional outlet)
     * that is rendered in the PageSlotComponent. Furthermore, the position
     * is added as a CSS class name to the host element.
     */
    set position(position: string);
    get position(): string;
    isPending: boolean;
    hasComponents: boolean;
    isPageFold: boolean;
    private pendingComponentCount;
    readonly position$: BehaviorSubject<string>;
    /**
     * observable with `ContentSlotData` for the current position
     *
     * @deprecated we'll stop supporting this property in 2.0 as
     * it is not used separately.
     */
    readonly slot$: Observable<ContentSlotData>;
    readonly components$: Observable<ContentSlotComponentData[]>;
    private subscription;
    constructor(cmsService: CmsService, dynamicAttributeService: DynamicAttributeService, renderer: Renderer2, hostElement: ElementRef, config: CmsConfig);
    /**
     * @deprecated since version 1.4
     * Use constructor(cmsService: CmsService, dynamicAttributeService: DynamicAttributeService, renderer: Renderer2, hostElement: ElementRef, config?: CmsConfig) instead
     */
    constructor(cmsService: CmsService, dynamicAttributeService: DynamicAttributeService, renderer: Renderer2, hostElement: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    /**
     * Is triggered when a component is added to the view.
     * We use this information to dropthe `is-pending` class from the page slot
     * when all nested components have been added.
     */
    isLoaded(loadState: boolean): void;
    getComponentDeferOptions(componentType: string): IntersectionOptions;
    /**
     * The `DeferLoadingStrategy` indicates whether component rendering
     * should be deferred.
     */
    private getDeferLoadingStrategy;
    private addSmartEditSlotClass;
    private addSmartEditContract;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PageSlotComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PageSlotComponent, "cx-page-slot,[cx-page-slot]", never, {
    "isPageFold": "isPageFold";
    "position": "position";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1zbG90LmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJwYWdlLXNsb3QuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlEQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIE9uRGVzdHJveSwgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc0NvbmZpZywgQ21zU2VydmljZSwgQ29udGVudFNsb3RDb21wb25lbnREYXRhLCBDb250ZW50U2xvdERhdGEsIER5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW50ZXJzZWN0aW9uT3B0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2xheW91dC9sb2FkaW5nL2ludGVyc2VjdGlvbi5tb2RlbCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQYWdlU2xvdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcm90ZWN0ZWQgY21zU2VydmljZTogQ21zU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgZHluYW1pY0F0dHJpYnV0ZVNlcnZpY2U6IER5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyO1xuICAgIHByb3RlY3RlZCBob3N0RWxlbWVudDogRWxlbWVudFJlZjtcbiAgICBwcm90ZWN0ZWQgY29uZmlnPzogQ21zQ29uZmlnO1xuICAgIC8qKlxuICAgICAqIFRoZSBwb3NpdGlvbiBpcyB1c2VkIHRvIGZpbmQgdGhlIENNUyBwYWdlIHNsb3QgKGFuZCBvcHRpb25hbCBvdXRsZXQpXG4gICAgICogdGhhdCBpcyByZW5kZXJlZCBpbiB0aGUgUGFnZVNsb3RDb21wb25lbnQuIEZ1cnRoZXJtb3JlLCB0aGUgcG9zaXRpb25cbiAgICAgKiBpcyBhZGRlZCBhcyBhIENTUyBjbGFzcyBuYW1lIHRvIHRoZSBob3N0IGVsZW1lbnQuXG4gICAgICovXG4gICAgc2V0IHBvc2l0aW9uKHBvc2l0aW9uOiBzdHJpbmcpO1xuICAgIGdldCBwb3NpdGlvbigpOiBzdHJpbmc7XG4gICAgaXNQZW5kaW5nOiBib29sZWFuO1xuICAgIGhhc0NvbXBvbmVudHM6IGJvb2xlYW47XG4gICAgaXNQYWdlRm9sZDogYm9vbGVhbjtcbiAgICBwcml2YXRlIHBlbmRpbmdDb21wb25lbnRDb3VudDtcbiAgICByZWFkb25seSBwb3NpdGlvbiQ6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+O1xuICAgIC8qKlxuICAgICAqIG9ic2VydmFibGUgd2l0aCBgQ29udGVudFNsb3REYXRhYCBmb3IgdGhlIGN1cnJlbnQgcG9zaXRpb25cbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIHdlJ2xsIHN0b3Agc3VwcG9ydGluZyB0aGlzIHByb3BlcnR5IGluIDIuMCBhc1xuICAgICAqIGl0IGlzIG5vdCB1c2VkIHNlcGFyYXRlbHkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2xvdCQ6IE9ic2VydmFibGU8Q29udGVudFNsb3REYXRhPjtcbiAgICByZWFkb25seSBjb21wb25lbnRzJDogT2JzZXJ2YWJsZTxDb250ZW50U2xvdENvbXBvbmVudERhdGFbXT47XG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb247XG4gICAgY29uc3RydWN0b3IoY21zU2VydmljZTogQ21zU2VydmljZSwgZHluYW1pY0F0dHJpYnV0ZVNlcnZpY2U6IER5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlLCByZW5kZXJlcjogUmVuZGVyZXIyLCBob3N0RWxlbWVudDogRWxlbWVudFJlZiwgY29uZmlnOiBDbXNDb25maWcpO1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS40XG4gICAgICogVXNlIGNvbnN0cnVjdG9yKGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsIGR5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlOiBEeW5hbWljQXR0cmlidXRlU2VydmljZSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWYsIGNvbmZpZz86IENtc0NvbmZpZykgaW5zdGVhZFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsIGR5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlOiBEeW5hbWljQXR0cmlidXRlU2VydmljZSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWYpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBJcyB0cmlnZ2VyZWQgd2hlbiBhIGNvbXBvbmVudCBpcyBhZGRlZCB0byB0aGUgdmlldy5cbiAgICAgKiBXZSB1c2UgdGhpcyBpbmZvcm1hdGlvbiB0byBkcm9wdGhlIGBpcy1wZW5kaW5nYCBjbGFzcyBmcm9tIHRoZSBwYWdlIHNsb3RcbiAgICAgKiB3aGVuIGFsbCBuZXN0ZWQgY29tcG9uZW50cyBoYXZlIGJlZW4gYWRkZWQuXG4gICAgICovXG4gICAgaXNMb2FkZWQobG9hZFN0YXRlOiBib29sZWFuKTogdm9pZDtcbiAgICBnZXRDb21wb25lbnREZWZlck9wdGlvbnMoY29tcG9uZW50VHlwZTogc3RyaW5nKTogSW50ZXJzZWN0aW9uT3B0aW9ucztcbiAgICAvKipcbiAgICAgKiBUaGUgYERlZmVyTG9hZGluZ1N0cmF0ZWd5YCBpbmRpY2F0ZXMgd2hldGhlciBjb21wb25lbnQgcmVuZGVyaW5nXG4gICAgICogc2hvdWxkIGJlIGRlZmVycmVkLlxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0RGVmZXJMb2FkaW5nU3RyYXRlZ3k7XG4gICAgcHJpdmF0ZSBhZGRTbWFydEVkaXRTbG90Q2xhc3M7XG4gICAgcHJpdmF0ZSBhZGRTbWFydEVkaXRDb250cmFjdDtcbn1cbiJdfQ==