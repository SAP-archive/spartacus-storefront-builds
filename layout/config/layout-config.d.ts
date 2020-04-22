import { DeferLoadingStrategy } from '@spartacus/core';
import * as ɵngcc0 from '@angular/core';
export declare enum BREAKPOINT {
    xs = "xs",
    sm = "sm",
    md = "md",
    lg = "lg",
    xl = "xl"
}
export declare type LayoutSections = 'header' | 'footer' | 'LandingPage2Template' | string;
export declare type SlotConfig = {
    /** The cms page slots are mapped by the `slot.position`. */
    slots?: string[];
    /**
     * The page fold identifies the last expected page slot above-the-fold.
     * It's perfectly fine to specify this by idication, however a more
     * precise indication will have an positive impact on performance.
     */
    pageFold?: string;
};
export declare type SlotGroup = {
    /** The page slot configuration for large screens */
    [BREAKPOINT.lg]?: SlotConfig;
    /** The page slot configuration for medium screens */
    [BREAKPOINT.md]?: SlotConfig;
    /** The page slot configuration for small screens */
    [BREAKPOINT.sm]?: SlotConfig;
    /** The page slot configuration for extra small screens */
    [BREAKPOINT.xs]?: SlotConfig;
};
export declare type LayoutSlotConfig = {
    [section in LayoutSections]: SlotConfig | SlotGroup | LayoutSlotConfig;
};
/**
 * The LayoutConfig supports the configuration of page slots by page templates
 * or page sections, such as headers and footers. The configuration also supports
 * adaptive design per breadpoint (not per device type), so that the DOM is (re)rendered
 * por a given breakpoint.
 */
export declare abstract class LayoutConfig {
    /** The breakpoint configuration is used when the DOM is (re)rendered in specific view.
     * This allows for adaptive rendering, so that the DOM is rendered for specific breakpoints. */
    breakpoints?: {
        [BREAKPOINT.xs]?: number;
        [BREAKPOINT.sm]?: number;
        [BREAKPOINT.md]?: number;
        [BREAKPOINT.lg]?: number;
    };
    layoutSlots?: LayoutSlotConfig;
    /**
     * Deferrred loading is a technique to hold of with the loading / creation
     * of DOM elements which are not not in the initial view port.
     * This technique wil increase performance.
     */
    deferredLoading?: {
        /**
         * The global strategy will be used as a fallback strategy for all DOM creation,
         * but can be overriden by local configuration, i.e. for cms components.
         */
        strategy?: DeferLoadingStrategy;
        /**
         * The intersection margin contains the offset used by the Intersection Observer
         * to observe elements outside the view port.
         *
         * See https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin
         */
        intersectionMargin?: string;
    };
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LayoutConfig, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWNvbmZpZy5kLnRzIiwic291cmNlcyI6WyJsYXlvdXQtY29uZmlnLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrRUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWZlckxvYWRpbmdTdHJhdGVneSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5leHBvcnQgZGVjbGFyZSBlbnVtIEJSRUFLUE9JTlQge1xuICAgIHhzID0gXCJ4c1wiLFxuICAgIHNtID0gXCJzbVwiLFxuICAgIG1kID0gXCJtZFwiLFxuICAgIGxnID0gXCJsZ1wiLFxuICAgIHhsID0gXCJ4bFwiXG59XG5leHBvcnQgZGVjbGFyZSB0eXBlIExheW91dFNlY3Rpb25zID0gJ2hlYWRlcicgfCAnZm9vdGVyJyB8ICdMYW5kaW5nUGFnZTJUZW1wbGF0ZScgfCBzdHJpbmc7XG5leHBvcnQgZGVjbGFyZSB0eXBlIFNsb3RDb25maWcgPSB7XG4gICAgLyoqIFRoZSBjbXMgcGFnZSBzbG90cyBhcmUgbWFwcGVkIGJ5IHRoZSBgc2xvdC5wb3NpdGlvbmAuICovXG4gICAgc2xvdHM/OiBzdHJpbmdbXTtcbiAgICAvKipcbiAgICAgKiBUaGUgcGFnZSBmb2xkIGlkZW50aWZpZXMgdGhlIGxhc3QgZXhwZWN0ZWQgcGFnZSBzbG90IGFib3ZlLXRoZS1mb2xkLlxuICAgICAqIEl0J3MgcGVyZmVjdGx5IGZpbmUgdG8gc3BlY2lmeSB0aGlzIGJ5IGlkaWNhdGlvbiwgaG93ZXZlciBhIG1vcmVcbiAgICAgKiBwcmVjaXNlIGluZGljYXRpb24gd2lsbCBoYXZlIGFuIHBvc2l0aXZlIGltcGFjdCBvbiBwZXJmb3JtYW5jZS5cbiAgICAgKi9cbiAgICBwYWdlRm9sZD86IHN0cmluZztcbn07XG5leHBvcnQgZGVjbGFyZSB0eXBlIFNsb3RHcm91cCA9IHtcbiAgICAvKiogVGhlIHBhZ2Ugc2xvdCBjb25maWd1cmF0aW9uIGZvciBsYXJnZSBzY3JlZW5zICovXG4gICAgW0JSRUFLUE9JTlQubGddPzogU2xvdENvbmZpZztcbiAgICAvKiogVGhlIHBhZ2Ugc2xvdCBjb25maWd1cmF0aW9uIGZvciBtZWRpdW0gc2NyZWVucyAqL1xuICAgIFtCUkVBS1BPSU5ULm1kXT86IFNsb3RDb25maWc7XG4gICAgLyoqIFRoZSBwYWdlIHNsb3QgY29uZmlndXJhdGlvbiBmb3Igc21hbGwgc2NyZWVucyAqL1xuICAgIFtCUkVBS1BPSU5ULnNtXT86IFNsb3RDb25maWc7XG4gICAgLyoqIFRoZSBwYWdlIHNsb3QgY29uZmlndXJhdGlvbiBmb3IgZXh0cmEgc21hbGwgc2NyZWVucyAqL1xuICAgIFtCUkVBS1BPSU5ULnhzXT86IFNsb3RDb25maWc7XG59O1xuZXhwb3J0IGRlY2xhcmUgdHlwZSBMYXlvdXRTbG90Q29uZmlnID0ge1xuICAgIFtzZWN0aW9uIGluIExheW91dFNlY3Rpb25zXTogU2xvdENvbmZpZyB8IFNsb3RHcm91cCB8IExheW91dFNsb3RDb25maWc7XG59O1xuLyoqXG4gKiBUaGUgTGF5b3V0Q29uZmlnIHN1cHBvcnRzIHRoZSBjb25maWd1cmF0aW9uIG9mIHBhZ2Ugc2xvdHMgYnkgcGFnZSB0ZW1wbGF0ZXNcbiAqIG9yIHBhZ2Ugc2VjdGlvbnMsIHN1Y2ggYXMgaGVhZGVycyBhbmQgZm9vdGVycy4gVGhlIGNvbmZpZ3VyYXRpb24gYWxzbyBzdXBwb3J0c1xuICogYWRhcHRpdmUgZGVzaWduIHBlciBicmVhZHBvaW50IChub3QgcGVyIGRldmljZSB0eXBlKSwgc28gdGhhdCB0aGUgRE9NIGlzIChyZSlyZW5kZXJlZFxuICogcG9yIGEgZ2l2ZW4gYnJlYWtwb2ludC5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgYWJzdHJhY3QgY2xhc3MgTGF5b3V0Q29uZmlnIHtcbiAgICAvKiogVGhlIGJyZWFrcG9pbnQgY29uZmlndXJhdGlvbiBpcyB1c2VkIHdoZW4gdGhlIERPTSBpcyAocmUpcmVuZGVyZWQgaW4gc3BlY2lmaWMgdmlldy5cbiAgICAgKiBUaGlzIGFsbG93cyBmb3IgYWRhcHRpdmUgcmVuZGVyaW5nLCBzbyB0aGF0IHRoZSBET00gaXMgcmVuZGVyZWQgZm9yIHNwZWNpZmljIGJyZWFrcG9pbnRzLiAqL1xuICAgIGJyZWFrcG9pbnRzPzoge1xuICAgICAgICBbQlJFQUtQT0lOVC54c10/OiBudW1iZXI7XG4gICAgICAgIFtCUkVBS1BPSU5ULnNtXT86IG51bWJlcjtcbiAgICAgICAgW0JSRUFLUE9JTlQubWRdPzogbnVtYmVyO1xuICAgICAgICBbQlJFQUtQT0lOVC5sZ10/OiBudW1iZXI7XG4gICAgfTtcbiAgICBsYXlvdXRTbG90cz86IExheW91dFNsb3RDb25maWc7XG4gICAgLyoqXG4gICAgICogRGVmZXJycmVkIGxvYWRpbmcgaXMgYSB0ZWNobmlxdWUgdG8gaG9sZCBvZiB3aXRoIHRoZSBsb2FkaW5nIC8gY3JlYXRpb25cbiAgICAgKiBvZiBET00gZWxlbWVudHMgd2hpY2ggYXJlIG5vdCBub3QgaW4gdGhlIGluaXRpYWwgdmlldyBwb3J0LlxuICAgICAqIFRoaXMgdGVjaG5pcXVlIHdpbCBpbmNyZWFzZSBwZXJmb3JtYW5jZS5cbiAgICAgKi9cbiAgICBkZWZlcnJlZExvYWRpbmc/OiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZ2xvYmFsIHN0cmF0ZWd5IHdpbGwgYmUgdXNlZCBhcyBhIGZhbGxiYWNrIHN0cmF0ZWd5IGZvciBhbGwgRE9NIGNyZWF0aW9uLFxuICAgICAgICAgKiBidXQgY2FuIGJlIG92ZXJyaWRlbiBieSBsb2NhbCBjb25maWd1cmF0aW9uLCBpLmUuIGZvciBjbXMgY29tcG9uZW50cy5cbiAgICAgICAgICovXG4gICAgICAgIHN0cmF0ZWd5PzogRGVmZXJMb2FkaW5nU3RyYXRlZ3k7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgaW50ZXJzZWN0aW9uIG1hcmdpbiBjb250YWlucyB0aGUgb2Zmc2V0IHVzZWQgYnkgdGhlIEludGVyc2VjdGlvbiBPYnNlcnZlclxuICAgICAgICAgKiB0byBvYnNlcnZlIGVsZW1lbnRzIG91dHNpZGUgdGhlIHZpZXcgcG9ydC5cbiAgICAgICAgICpcbiAgICAgICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9JbnRlcnNlY3Rpb25PYnNlcnZlci9yb290TWFyZ2luXG4gICAgICAgICAqL1xuICAgICAgICBpbnRlcnNlY3Rpb25NYXJnaW4/OiBzdHJpbmc7XG4gICAgfTtcbn1cbiJdfQ==