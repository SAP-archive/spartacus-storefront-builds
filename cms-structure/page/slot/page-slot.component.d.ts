import { ChangeDetectorRef, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { CmsConfig, CmsService, ContentSlotComponentData, ContentSlotData, DynamicAttributeService } from '@spartacus/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { IntersectionOptions } from '../../../layout/loading/intersection.model';
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
    protected config: CmsConfig;
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
    constructor(cmsService: CmsService, dynamicAttributeService: DynamicAttributeService, renderer: Renderer2, elementRef: ElementRef, config: CmsConfig, cd: ChangeDetectorRef);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1zbG90LmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJwYWdlLXNsb3QuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0FBYUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4REEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiwgT25EZXN0cm95LCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29uZmlnLCBDbXNTZXJ2aWNlLCBDb250ZW50U2xvdENvbXBvbmVudERhdGEsIENvbnRlbnRTbG90RGF0YSwgRHluYW1pY0F0dHJpYnV0ZVNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEludGVyc2VjdGlvbk9wdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9sYXlvdXQvbG9hZGluZy9pbnRlcnNlY3Rpb24ubW9kZWwnO1xuLyoqXG4gKiBUaGUgYFBhZ2VTbG90Q29tcG9uZW50YCBpcyB1c2VkIHRvIHJlbmRlciB0aGUgQ01TIHBhZ2Ugc2xvdCBhbmQgaXQncyBjb21wb25lbnRzLlxuICpcbiAqIFRoZSBQYWdlIHNsb3QgaG9zdCBlbGVtZW50IHdpbGwgYmUgc3VwcGxlbWVudGVkIHdpdGggY3NzIGNsYXNzZXMgc28gdGhhdCB0aGUgbGF5b3V0XG4gKiBjYW4gYmUgZnVsbHkgY29udHJvbGxlZCBieSBjdXN0b21lcnM6XG4gKiAtIFRoZSBwYWdlIHNsb3QgX3Bvc2l0aW9uXyBpcyBhZGRlZCBhcyBhIGNzcyBjbGFzcyBieSBkZWZhdWx0LlxuICogLSBUaGUgYGN4LXBlbmRpbmdgIGlzIGFkZGVkIGZvciBhcyBsb25nIGFzIHRoZSBzbG90IGhhc24ndCBzdGFydCBsb2FkaW5nLlxuICogLSBUaGUgYHBhZ2UtZm9sZGAgc3R5bGUgY2xhc3MgaXMgYWRkZWQgZm9yIHRoZSBwYWdlIHNsb3Qgd2hpY2ggaXMgY29uZmlndXJlZCBhcyB0aGUgcGFnZSBmb2xkLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQYWdlU2xvdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcm90ZWN0ZWQgY21zU2VydmljZTogQ21zU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgZHluYW1pY0F0dHJpYnV0ZVNlcnZpY2U6IER5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyO1xuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgIHByb3RlY3RlZCBjb25maWc6IENtc0NvbmZpZztcbiAgICBwcm90ZWN0ZWQgY2Q6IENoYW5nZURldGVjdG9yUmVmO1xuICAgIC8qKlxuICAgICAqIFRoZSBwb3NpdGlvbiByZXByZXNlbnRzIHRoZSB1bmlxdWUga2V5IGZvciBhIHBhZ2Ugc2xvdCBvbiBhIHNpbmdsZSBwYWdlLCBidXQgY2FuXG4gICAgICogYmUgcmV1c2VkIGNyb3NzIHBhZ2VzLlxuICAgICAqXG4gICAgICogVGhlIHBvc2l0aW9uIGlzIHVzZWQgdG8gZmluZCB0aGUgQ01TIGNvbXBvbmVudHMgZm9yIHRoZSBwYWdlIHNsb3QuIEl0IGlzIGFsc29cbiAgICAgKiBhZGRlZCBhcyBhbiBhZGRpdGlvbmFsIENTUyBjbGFzcyBzbyB0aGF0IGxheW91dHQgY2FuIGJlIGFwcGxpZWQuXG4gICAgICovXG4gICAgc2V0IHBvc2l0aW9uKHZhbHVlOiBzdHJpbmcpO1xuICAgIGdldCBwb3NpdGlvbigpOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogTWFpbnRhaW5zIGNzcyBjbGFzc2VzIGludHJvZHVjZWQgYnkgdGhlIGhvc3QgYW5kIGFkZHMgYWRkaXRpb25hbCBjbGFzc2VzLlxuICAgICAqL1xuICAgIGNsYXNzOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHRoYXQgdGhlIHBhZ2Ugc2xvdCBpcyB0aGUgbGFzdCBwYWdlIHNsb3QgYWJvdmUgdGhlIGZvbGQuXG4gICAgICovXG4gICAgaXNQYWdlRm9sZDogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgdGhhdCB0aGUgY29tcG9uZW50cyBvZiB0aGUgcGFnZSBzbG90IGhhdmVuJ3QgYmVlbiBsb2FkZWQgYXMgbG9uZ1xuICAgICAqIGFzIHRoZSBpc1BlbmRpbmcgc3RhdGUgaXMgdHJ1ZS5cbiAgICAgKi9cbiAgICBpc1BlbmRpbmc6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHRoYXQgdGhlIHBhZ2Ugc2xvdCBkb2Vzbid0IGNvbnRhaW4gYW55IGNvbXBvbmVudHMuIFRoaXMgaXMgbm9cbiAgICAgKiBsb25nZXIgdXNlZCBpbiBzcGFydGFjdXMsIGJ1dCBrZXB0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgICAgKi9cbiAgICBoYXNDb21wb25lbnRzOiBib29sZWFuO1xuICAgIHByb3RlY3RlZCBwb3NpdGlvbiQ6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+O1xuICAgIGNvbXBvbmVudHM6IENvbnRlbnRTbG90Q29tcG9uZW50RGF0YVtdO1xuICAgIHByb3RlY3RlZCBzbG90JDogT2JzZXJ2YWJsZTxDb250ZW50U2xvdERhdGE+O1xuICAgIC8qKiBPYnNlcnZlcyB0aGUgY29tcG9uZW50cyBmb3IgdGhlIGdpdmVuIHBhZ2Ugc2xvdC4gKi9cbiAgICBjb21wb25lbnRzJDogT2JzZXJ2YWJsZTxDb250ZW50U2xvdENvbXBvbmVudERhdGFbXT47XG4gICAgcHJvdGVjdGVkIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAgIC8qKiBLZWVwcyB0cmFjayBvZiB0aGUgcGVuZGluZyBjb21wb25lbnRzIHRoYXQgbXVzdCBiZSBsb2FkZWQgZm9yIHRoZSBwYWdlIHNsb3QgKi9cbiAgICBwcml2YXRlIHBlbmRpbmdDb21wb25lbnRDb3VudDtcbiAgICAvKiogVHJhY2tzIHRoZSBsYXN0IHVzZWQgcG9zaXRpb24sIGluIGNhc2UgdGhlIHBhZ2Ugc2xvdCBpcyB1c2VkIGR5bmFtaWNhbGx5ICovXG4gICAgcHJpdmF0ZSBsYXN0UG9zaXRpb247XG4gICAgY29uc3RydWN0b3IoY21zU2VydmljZTogQ21zU2VydmljZSwgZHluYW1pY0F0dHJpYnV0ZVNlcnZpY2U6IER5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlLCByZW5kZXJlcjogUmVuZGVyZXIyLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBjb25maWc6IENtc0NvbmZpZywgY2Q6IENoYW5nZURldGVjdG9yUmVmKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIHByb3RlY3RlZCBkZWNvcmF0ZShzbG90OiBDb250ZW50U2xvdERhdGEpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHBlbmRpbmcgY291bnQgZm9yIHRoZSBwYWdlIHNsb3QgY29tcG9uZW50cy4gT25jZSBhbGwgcGVuZGluZyBjb21wb25lbnRzIGFyZVxuICAgICAqIGxvYWRlZCwgdGhlIGBpc1BlbmRpbmdgIGZsYWcgaXMgdXBkYXRlZCwgc28gdGhhdCB0aGUgYXNzb2NpYXRlZCBjbGFzcyBjYW4gYmUgdXBkYXRlZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBzZXQgcGVuZGluZyhjb3VudDogbnVtYmVyKTtcbiAgICBwcm90ZWN0ZWQgZ2V0IHBlbmRpbmcoKTogbnVtYmVyO1xuICAgIGlzTG9hZGVkKGxvYWRTdGF0ZTogYm9vbGVhbik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogVGhlIGBEZWZlckxvYWRpbmdTdHJhdGVneWAgaW5kaWNhdGVzIHdoZXRoZXIgdGhlIGNvbXBvbmVudCBzaG91bGQgYmVcbiAgICAgKiByZW5kZXJlZCBpbnN0YW50bHkgb3Igd2hldGhlciBpdCBzaG91bGQgYmUgZGVmZXJyZWQuXG4gICAgICovXG4gICAgZ2V0Q29tcG9uZW50RGVmZXJPcHRpb25zKGNvbXBvbmVudFR5cGU6IHN0cmluZyk6IEludGVyc2VjdGlvbk9wdGlvbnM7XG4gICAgcHJvdGVjdGVkIGlzRGlzdGluY3Qob2xkOiBDb250ZW50U2xvdERhdGEsIGN1cnJlbnQ6IENvbnRlbnRTbG90RGF0YSk6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBhZGRTbWFydEVkaXRTbG90Q2xhc3M7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==