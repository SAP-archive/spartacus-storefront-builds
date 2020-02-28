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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1zbG90LmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJwYWdlLXNsb3QuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlEQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBPbkRlc3Ryb3ksIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNDb25maWcsIENtc1NlcnZpY2UsIENvbnRlbnRTbG90Q29tcG9uZW50RGF0YSwgQ29udGVudFNsb3REYXRhLCBEeW5hbWljQXR0cmlidXRlU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEludGVyc2VjdGlvbk9wdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9sYXlvdXQvbG9hZGluZy9pbnRlcnNlY3Rpb24ubW9kZWwnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUGFnZVNsb3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJvdGVjdGVkIGNtc1NlcnZpY2U6IENtc1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGR5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlOiBEeW5hbWljQXR0cmlidXRlU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMjtcbiAgICBwcm90ZWN0ZWQgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gICAgcHJvdGVjdGVkIGNvbmZpZz86IENtc0NvbmZpZztcbiAgICAvKipcbiAgICAgKiBUaGUgcG9zaXRpb24gaXMgdXNlZCB0byBmaW5kIHRoZSBDTVMgcGFnZSBzbG90IChhbmQgb3B0aW9uYWwgb3V0bGV0KVxuICAgICAqIHRoYXQgaXMgcmVuZGVyZWQgaW4gdGhlIFBhZ2VTbG90Q29tcG9uZW50LiBGdXJ0aGVybW9yZSwgdGhlIHBvc2l0aW9uXG4gICAgICogaXMgYWRkZWQgYXMgYSBDU1MgY2xhc3MgbmFtZSB0byB0aGUgaG9zdCBlbGVtZW50LlxuICAgICAqL1xuICAgIHNldCBwb3NpdGlvbihwb3NpdGlvbjogc3RyaW5nKTtcbiAgICBnZXQgcG9zaXRpb24oKTogc3RyaW5nO1xuICAgIGlzUGVuZGluZzogYm9vbGVhbjtcbiAgICBoYXNDb21wb25lbnRzOiBib29sZWFuO1xuICAgIGlzUGFnZUZvbGQ6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBwZW5kaW5nQ29tcG9uZW50Q291bnQ7XG4gICAgcmVhZG9ubHkgcG9zaXRpb24kOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPjtcbiAgICAvKipcbiAgICAgKiBvYnNlcnZhYmxlIHdpdGggYENvbnRlbnRTbG90RGF0YWAgZm9yIHRoZSBjdXJyZW50IHBvc2l0aW9uXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCB3ZSdsbCBzdG9wIHN1cHBvcnRpbmcgdGhpcyBwcm9wZXJ0eSBpbiAyLjAgYXNcbiAgICAgKiBpdCBpcyBub3QgdXNlZCBzZXBhcmF0ZWx5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNsb3QkOiBPYnNlcnZhYmxlPENvbnRlbnRTbG90RGF0YT47XG4gICAgcmVhZG9ubHkgY29tcG9uZW50cyQ6IE9ic2VydmFibGU8Q29udGVudFNsb3RDb21wb25lbnREYXRhW10+O1xuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uO1xuICAgIGNvbnN0cnVjdG9yKGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsIGR5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlOiBEeW5hbWljQXR0cmlidXRlU2VydmljZSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWYsIGNvbmZpZzogQ21zQ29uZmlnKTtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuNFxuICAgICAqIFVzZSBjb25zdHJ1Y3RvcihjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLCBkeW5hbWljQXR0cmlidXRlU2VydmljZTogRHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIGhvc3RFbGVtZW50OiBFbGVtZW50UmVmLCBjb25maWc/OiBDbXNDb25maWcpIGluc3RlYWRcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLCBkeW5hbWljQXR0cmlidXRlU2VydmljZTogRHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIGhvc3RFbGVtZW50OiBFbGVtZW50UmVmKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogSXMgdHJpZ2dlcmVkIHdoZW4gYSBjb21wb25lbnQgaXMgYWRkZWQgdG8gdGhlIHZpZXcuXG4gICAgICogV2UgdXNlIHRoaXMgaW5mb3JtYXRpb24gdG8gZHJvcHRoZSBgaXMtcGVuZGluZ2AgY2xhc3MgZnJvbSB0aGUgcGFnZSBzbG90XG4gICAgICogd2hlbiBhbGwgbmVzdGVkIGNvbXBvbmVudHMgaGF2ZSBiZWVuIGFkZGVkLlxuICAgICAqL1xuICAgIGlzTG9hZGVkKGxvYWRTdGF0ZTogYm9vbGVhbik6IHZvaWQ7XG4gICAgZ2V0Q29tcG9uZW50RGVmZXJPcHRpb25zKGNvbXBvbmVudFR5cGU6IHN0cmluZyk6IEludGVyc2VjdGlvbk9wdGlvbnM7XG4gICAgLyoqXG4gICAgICogVGhlIGBEZWZlckxvYWRpbmdTdHJhdGVneWAgaW5kaWNhdGVzIHdoZXRoZXIgY29tcG9uZW50IHJlbmRlcmluZ1xuICAgICAqIHNob3VsZCBiZSBkZWZlcnJlZC5cbiAgICAgKi9cbiAgICBwcml2YXRlIGdldERlZmVyTG9hZGluZ1N0cmF0ZWd5O1xuICAgIHByaXZhdGUgYWRkU21hcnRFZGl0U2xvdENsYXNzO1xuICAgIHByaXZhdGUgYWRkU21hcnRFZGl0Q29udHJhY3Q7XG59XG4iXX0=