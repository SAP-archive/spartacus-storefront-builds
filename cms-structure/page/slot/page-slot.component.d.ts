import { ChangeDetectorRef, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
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
    protected cdRef?: ChangeDetectorRef;
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PageSlotComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PageSlotComponent, "cx-page-slot,[cx-page-slot]", never, { "isPageFold": "isPageFold"; "position": "position"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1zbG90LmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJwYWdlLXNsb3QuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrREEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiwgT25EZXN0cm95LCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29uZmlnLCBDbXNTZXJ2aWNlLCBDb250ZW50U2xvdENvbXBvbmVudERhdGEsIENvbnRlbnRTbG90RGF0YSwgRHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbnRlcnNlY3Rpb25PcHRpb25zIH0gZnJvbSAnLi4vLi4vLi4vbGF5b3V0L2xvYWRpbmcvaW50ZXJzZWN0aW9uLm1vZGVsJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFBhZ2VTbG90Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByb3RlY3RlZCBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBkeW5hbWljQXR0cmlidXRlU2VydmljZTogRHluYW1pY0F0dHJpYnV0ZVNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjI7XG4gICAgcHJvdGVjdGVkIGhvc3RFbGVtZW50OiBFbGVtZW50UmVmO1xuICAgIHByb3RlY3RlZCBjb25maWc/OiBDbXNDb25maWc7XG4gICAgcHJvdGVjdGVkIGNkUmVmPzogQ2hhbmdlRGV0ZWN0b3JSZWY7XG4gICAgLyoqXG4gICAgICogVGhlIHBvc2l0aW9uIGlzIHVzZWQgdG8gZmluZCB0aGUgQ01TIHBhZ2Ugc2xvdCAoYW5kIG9wdGlvbmFsIG91dGxldClcbiAgICAgKiB0aGF0IGlzIHJlbmRlcmVkIGluIHRoZSBQYWdlU2xvdENvbXBvbmVudC4gRnVydGhlcm1vcmUsIHRoZSBwb3NpdGlvblxuICAgICAqIGlzIGFkZGVkIGFzIGEgQ1NTIGNsYXNzIG5hbWUgdG8gdGhlIGhvc3QgZWxlbWVudC5cbiAgICAgKi9cbiAgICBzZXQgcG9zaXRpb24ocG9zaXRpb246IHN0cmluZyk7XG4gICAgZ2V0IHBvc2l0aW9uKCk6IHN0cmluZztcbiAgICBpc1BlbmRpbmc6IGJvb2xlYW47XG4gICAgaGFzQ29tcG9uZW50czogYm9vbGVhbjtcbiAgICBpc1BhZ2VGb2xkOiBib29sZWFuO1xuICAgIHByaXZhdGUgcGVuZGluZ0NvbXBvbmVudENvdW50O1xuICAgIHJlYWRvbmx5IHBvc2l0aW9uJDogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz47XG4gICAgLyoqXG4gICAgICogb2JzZXJ2YWJsZSB3aXRoIGBDb250ZW50U2xvdERhdGFgIGZvciB0aGUgY3VycmVudCBwb3NpdGlvblxuICAgICAqXG4gICAgICogQGRlcHJlY2F0ZWQgd2UnbGwgc3RvcCBzdXBwb3J0aW5nIHRoaXMgcHJvcGVydHkgaW4gMi4wIGFzXG4gICAgICogaXQgaXMgbm90IHVzZWQgc2VwYXJhdGVseS5cbiAgICAgKi9cbiAgICByZWFkb25seSBzbG90JDogT2JzZXJ2YWJsZTxDb250ZW50U2xvdERhdGE+O1xuICAgIHJlYWRvbmx5IGNvbXBvbmVudHMkOiBPYnNlcnZhYmxlPENvbnRlbnRTbG90Q29tcG9uZW50RGF0YVtdPjtcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbjtcbiAgICBjb25zdHJ1Y3RvcihjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLCBkeW5hbWljQXR0cmlidXRlU2VydmljZTogRHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIGhvc3RFbGVtZW50OiBFbGVtZW50UmVmLCBjb25maWc6IENtc0NvbmZpZyk7XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjRcbiAgICAgKiBVc2UgY29uc3RydWN0b3IoY21zU2VydmljZTogQ21zU2VydmljZSwgZHluYW1pY0F0dHJpYnV0ZVNlcnZpY2U6IER5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlLCByZW5kZXJlcjogUmVuZGVyZXIyLCBob3N0RWxlbWVudDogRWxlbWVudFJlZiwgY29uZmlnPzogQ21zQ29uZmlnKSBpbnN0ZWFkXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY21zU2VydmljZTogQ21zU2VydmljZSwgZHluYW1pY0F0dHJpYnV0ZVNlcnZpY2U6IER5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlLCByZW5kZXJlcjogUmVuZGVyZXIyLCBob3N0RWxlbWVudDogRWxlbWVudFJlZik7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIElzIHRyaWdnZXJlZCB3aGVuIGEgY29tcG9uZW50IGlzIGFkZGVkIHRvIHRoZSB2aWV3LlxuICAgICAqIFdlIHVzZSB0aGlzIGluZm9ybWF0aW9uIHRvIGRyb3B0aGUgYGlzLXBlbmRpbmdgIGNsYXNzIGZyb20gdGhlIHBhZ2Ugc2xvdFxuICAgICAqIHdoZW4gYWxsIG5lc3RlZCBjb21wb25lbnRzIGhhdmUgYmVlbiBhZGRlZC5cbiAgICAgKi9cbiAgICBpc0xvYWRlZChsb2FkU3RhdGU6IGJvb2xlYW4pOiB2b2lkO1xuICAgIGdldENvbXBvbmVudERlZmVyT3B0aW9ucyhjb21wb25lbnRUeXBlOiBzdHJpbmcpOiBJbnRlcnNlY3Rpb25PcHRpb25zO1xuICAgIC8qKlxuICAgICAqIFRoZSBgRGVmZXJMb2FkaW5nU3RyYXRlZ3lgIGluZGljYXRlcyB3aGV0aGVyIGNvbXBvbmVudCByZW5kZXJpbmdcbiAgICAgKiBzaG91bGQgYmUgZGVmZXJyZWQuXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXREZWZlckxvYWRpbmdTdHJhdGVneTtcbiAgICBwcml2YXRlIGFkZFNtYXJ0RWRpdFNsb3RDbGFzcztcbiAgICBwcml2YXRlIGFkZFNtYXJ0RWRpdENvbnRyYWN0O1xufVxuIl19