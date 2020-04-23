import { ChangeDetectorRef, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { CmsService, ContentSlotComponentData, ContentSlotData, DynamicAttributeService } from '@spartacus/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { IntersectionOptions } from '../../../layout/loading/intersection.model';
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
import * as ɵngcc0 from '@angular/core';
export declare class PageSlotComponent implements OnInit, OnDestroy {
    protected cmsService: CmsService;
    protected dynamicAttributeService: DynamicAttributeService;
    protected renderer: Renderer2;
    protected elementRef: ElementRef;
    protected cmsComponentsService: CmsComponentsService;
    protected cd: ChangeDetectorRef;
    /**
     * The position represents the unique key for a page slot on a single page, but can
     * be reused cross pages.
     *
     * The position is used to find the CMS components for the page slot. It is also
     * added as an additional CSS class so that layoutt can be applied.
     */
    set position(value: string);
    get position(): string;
    /**
     * Maintains css classes introduced by the host and adds additional classes.
     */
    class: string;
    /**
     * Indicates that the page slot is the last page slot above the fold.
     */
    isPageFold: boolean;
    /**
     * Indicates that the components of the page slot haven't been loaded as long
     * as the isPending state is true.
     */
    isPending: boolean;
    /**
     * Indicates that the page slot doesn't contain any components. This is no
     * longer used in spartacus, but kept for backwards compatibility.
     */
    hasComponents: boolean;
    protected position$: BehaviorSubject<string>;
    components: ContentSlotComponentData[];
    protected slot$: Observable<ContentSlotData>;
    /** Observes the components for the given page slot. */
    components$: Observable<ContentSlotComponentData[]>;
    protected subscription: Subscription;
    /** Keeps track of the pending components that must be loaded for the page slot */
    private pendingComponentCount;
    /** Tracks the last used position, in case the page slot is used dynamically */
    private lastPosition;
    constructor(cmsService: CmsService, dynamicAttributeService: DynamicAttributeService, renderer: Renderer2, elementRef: ElementRef, cmsComponentsService: CmsComponentsService, cd: ChangeDetectorRef);
    ngOnInit(): void;
    protected decorate(slot: ContentSlotData): void;
    /**
     * Sets the pending count for the page slot components. Once all pending components are
     * loaded, the `isPending` flag is updated, so that the associated class can be updated
     */
    protected set pending(count: number);
    protected get pending(): number;
    isLoaded(loadState: boolean): void;
    /**
     * The `DeferLoadingStrategy` indicates whether the component should be
     * rendered instantly or whether it should be deferred.
     */
    getComponentDeferOptions(componentType: string): IntersectionOptions;
    protected isDistinct(old: ContentSlotData, current: ContentSlotData): boolean;
    private addSmartEditSlotClass;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PageSlotComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PageSlotComponent, "cx-page-slot,[cx-page-slot]", never, { "isPageFold": "isPageFold"; "hasComponents": "hasComponents"; "position": "position"; "class": "class"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1zbG90LmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJwYWdlLXNsb3QuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztBQWNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOERBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSwgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc1NlcnZpY2UsIENvbnRlbnRTbG90Q29tcG9uZW50RGF0YSwgQ29udGVudFNsb3REYXRhLCBEeW5hbWljQXR0cmlidXRlU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW50ZXJzZWN0aW9uT3B0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2xheW91dC9sb2FkaW5nL2ludGVyc2VjdGlvbi5tb2RlbCc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Ntcy1jb21wb25lbnRzLnNlcnZpY2UnO1xuLyoqXG4gKiBUaGUgYFBhZ2VTbG90Q29tcG9uZW50YCBpcyB1c2VkIHRvIHJlbmRlciB0aGUgQ01TIHBhZ2Ugc2xvdCBhbmQgaXQncyBjb21wb25lbnRzLlxuICpcbiAqIFRoZSBQYWdlIHNsb3QgaG9zdCBlbGVtZW50IHdpbGwgYmUgc3VwcGxlbWVudGVkIHdpdGggY3NzIGNsYXNzZXMgc28gdGhhdCB0aGUgbGF5b3V0XG4gKiBjYW4gYmUgZnVsbHkgY29udHJvbGxlZCBieSBjdXN0b21lcnM6XG4gKiAtIFRoZSBwYWdlIHNsb3QgX3Bvc2l0aW9uXyBpcyBhZGRlZCBhcyBhIGNzcyBjbGFzcyBieSBkZWZhdWx0LlxuICogLSBUaGUgYGN4LXBlbmRpbmdgIGlzIGFkZGVkIGZvciBhcyBsb25nIGFzIHRoZSBzbG90IGhhc24ndCBzdGFydCBsb2FkaW5nLlxuICogLSBUaGUgYHBhZ2UtZm9sZGAgc3R5bGUgY2xhc3MgaXMgYWRkZWQgZm9yIHRoZSBwYWdlIHNsb3Qgd2hpY2ggaXMgY29uZmlndXJlZCBhcyB0aGUgcGFnZSBmb2xkLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQYWdlU2xvdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcm90ZWN0ZWQgY21zU2VydmljZTogQ21zU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgZHluYW1pY0F0dHJpYnV0ZVNlcnZpY2U6IER5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyO1xuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgIHByb3RlY3RlZCBjbXNDb21wb25lbnRzU2VydmljZTogQ21zQ29tcG9uZW50c1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGNkOiBDaGFuZ2VEZXRlY3RvclJlZjtcbiAgICAvKipcbiAgICAgKiBUaGUgcG9zaXRpb24gcmVwcmVzZW50cyB0aGUgdW5pcXVlIGtleSBmb3IgYSBwYWdlIHNsb3Qgb24gYSBzaW5nbGUgcGFnZSwgYnV0IGNhblxuICAgICAqIGJlIHJldXNlZCBjcm9zcyBwYWdlcy5cbiAgICAgKlxuICAgICAqIFRoZSBwb3NpdGlvbiBpcyB1c2VkIHRvIGZpbmQgdGhlIENNUyBjb21wb25lbnRzIGZvciB0aGUgcGFnZSBzbG90LiBJdCBpcyBhbHNvXG4gICAgICogYWRkZWQgYXMgYW4gYWRkaXRpb25hbCBDU1MgY2xhc3Mgc28gdGhhdCBsYXlvdXR0IGNhbiBiZSBhcHBsaWVkLlxuICAgICAqL1xuICAgIHNldCBwb3NpdGlvbih2YWx1ZTogc3RyaW5nKTtcbiAgICBnZXQgcG9zaXRpb24oKTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIE1haW50YWlucyBjc3MgY2xhc3NlcyBpbnRyb2R1Y2VkIGJ5IHRoZSBob3N0IGFuZCBhZGRzIGFkZGl0aW9uYWwgY2xhc3Nlcy5cbiAgICAgKi9cbiAgICBjbGFzczogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB0aGF0IHRoZSBwYWdlIHNsb3QgaXMgdGhlIGxhc3QgcGFnZSBzbG90IGFib3ZlIHRoZSBmb2xkLlxuICAgICAqL1xuICAgIGlzUGFnZUZvbGQ6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHRoYXQgdGhlIGNvbXBvbmVudHMgb2YgdGhlIHBhZ2Ugc2xvdCBoYXZlbid0IGJlZW4gbG9hZGVkIGFzIGxvbmdcbiAgICAgKiBhcyB0aGUgaXNQZW5kaW5nIHN0YXRlIGlzIHRydWUuXG4gICAgICovXG4gICAgaXNQZW5kaW5nOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB0aGF0IHRoZSBwYWdlIHNsb3QgZG9lc24ndCBjb250YWluIGFueSBjb21wb25lbnRzLiBUaGlzIGlzIG5vXG4gICAgICogbG9uZ2VyIHVzZWQgaW4gc3BhcnRhY3VzLCBidXQga2VwdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gICAgICovXG4gICAgaGFzQ29tcG9uZW50czogYm9vbGVhbjtcbiAgICBwcm90ZWN0ZWQgcG9zaXRpb24kOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPjtcbiAgICBjb21wb25lbnRzOiBDb250ZW50U2xvdENvbXBvbmVudERhdGFbXTtcbiAgICBwcm90ZWN0ZWQgc2xvdCQ6IE9ic2VydmFibGU8Q29udGVudFNsb3REYXRhPjtcbiAgICAvKiogT2JzZXJ2ZXMgdGhlIGNvbXBvbmVudHMgZm9yIHRoZSBnaXZlbiBwYWdlIHNsb3QuICovXG4gICAgY29tcG9uZW50cyQ6IE9ic2VydmFibGU8Q29udGVudFNsb3RDb21wb25lbnREYXRhW10+O1xuICAgIHByb3RlY3RlZCBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgICAvKiogS2VlcHMgdHJhY2sgb2YgdGhlIHBlbmRpbmcgY29tcG9uZW50cyB0aGF0IG11c3QgYmUgbG9hZGVkIGZvciB0aGUgcGFnZSBzbG90ICovXG4gICAgcHJpdmF0ZSBwZW5kaW5nQ29tcG9uZW50Q291bnQ7XG4gICAgLyoqIFRyYWNrcyB0aGUgbGFzdCB1c2VkIHBvc2l0aW9uLCBpbiBjYXNlIHRoZSBwYWdlIHNsb3QgaXMgdXNlZCBkeW5hbWljYWxseSAqL1xuICAgIHByaXZhdGUgbGFzdFBvc2l0aW9uO1xuICAgIGNvbnN0cnVjdG9yKGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsIGR5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlOiBEeW5hbWljQXR0cmlidXRlU2VydmljZSwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgY21zQ29tcG9uZW50c1NlcnZpY2U6IENtc0NvbXBvbmVudHNTZXJ2aWNlLCBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgcHJvdGVjdGVkIGRlY29yYXRlKHNsb3Q6IENvbnRlbnRTbG90RGF0YSk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcGVuZGluZyBjb3VudCBmb3IgdGhlIHBhZ2Ugc2xvdCBjb21wb25lbnRzLiBPbmNlIGFsbCBwZW5kaW5nIGNvbXBvbmVudHMgYXJlXG4gICAgICogbG9hZGVkLCB0aGUgYGlzUGVuZGluZ2AgZmxhZyBpcyB1cGRhdGVkLCBzbyB0aGF0IHRoZSBhc3NvY2lhdGVkIGNsYXNzIGNhbiBiZSB1cGRhdGVkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHNldCBwZW5kaW5nKGNvdW50OiBudW1iZXIpO1xuICAgIHByb3RlY3RlZCBnZXQgcGVuZGluZygpOiBudW1iZXI7XG4gICAgaXNMb2FkZWQobG9hZFN0YXRlOiBib29sZWFuKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBUaGUgYERlZmVyTG9hZGluZ1N0cmF0ZWd5YCBpbmRpY2F0ZXMgd2hldGhlciB0aGUgY29tcG9uZW50IHNob3VsZCBiZVxuICAgICAqIHJlbmRlcmVkIGluc3RhbnRseSBvciB3aGV0aGVyIGl0IHNob3VsZCBiZSBkZWZlcnJlZC5cbiAgICAgKi9cbiAgICBnZXRDb21wb25lbnREZWZlck9wdGlvbnMoY29tcG9uZW50VHlwZTogc3RyaW5nKTogSW50ZXJzZWN0aW9uT3B0aW9ucztcbiAgICBwcm90ZWN0ZWQgaXNEaXN0aW5jdChvbGQ6IENvbnRlbnRTbG90RGF0YSwgY3VycmVudDogQ29udGVudFNsb3REYXRhKTogYm9vbGVhbjtcbiAgICBwcml2YXRlIGFkZFNtYXJ0RWRpdFNsb3RDbGFzcztcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19