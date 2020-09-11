import { DeferLoadingStrategy } from '@spartacus/core';
import { LaunchConfig } from '../launch-dialog/index';
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
     * It's perfectly fine to specify this by indication, but keep in mind that
     * a more precise indication will gain a more positive impact on performance.
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
 * adaptive design per breakpoint (not per device type), so that the DOM is (re)rendered
 * por a given breakpoint.
 */
export declare abstract class LayoutConfig {
    /**
     * The breakpoint configuration is used when the DOM is (re)rendered in specific view.
     * This allows for adaptive rendering, so that the DOM is rendered for specific breakpoints.
     */
    breakpoints?: {
        [BREAKPOINT.xs]?: number;
        [BREAKPOINT.sm]?: number;
        [BREAKPOINT.md]?: number;
        [BREAKPOINT.lg]?: number;
    };
    layoutSlots?: LayoutSlotConfig;
    /**
     * Deferred loading is a technique to hold of with the loading / creation
     * of DOM elements which are not not in the initial view port.
     * This technique wil increase performance.
     */
    deferredLoading?: {
        /**
         * The global strategy will be used as a fallback strategy for all DOM creation,
         * but can be overridden by local configuration, i.e. for cms components.
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
    launch?: LaunchConfig;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LayoutConfig, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWNvbmZpZy5kLnRzIiwic291cmNlcyI6WyJsYXlvdXQtY29uZmlnLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVmZXJMb2FkaW5nU3RyYXRlZ3kgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgTGF1bmNoQ29uZmlnIH0gZnJvbSAnLi4vbGF1bmNoLWRpYWxvZy9pbmRleCc7XG5leHBvcnQgZGVjbGFyZSBlbnVtIEJSRUFLUE9JTlQge1xuICAgIHhzID0gXCJ4c1wiLFxuICAgIHNtID0gXCJzbVwiLFxuICAgIG1kID0gXCJtZFwiLFxuICAgIGxnID0gXCJsZ1wiLFxuICAgIHhsID0gXCJ4bFwiXG59XG5leHBvcnQgZGVjbGFyZSB0eXBlIExheW91dFNlY3Rpb25zID0gJ2hlYWRlcicgfCAnZm9vdGVyJyB8ICdMYW5kaW5nUGFnZTJUZW1wbGF0ZScgfCBzdHJpbmc7XG5leHBvcnQgZGVjbGFyZSB0eXBlIFNsb3RDb25maWcgPSB7XG4gICAgLyoqIFRoZSBjbXMgcGFnZSBzbG90cyBhcmUgbWFwcGVkIGJ5IHRoZSBgc2xvdC5wb3NpdGlvbmAuICovXG4gICAgc2xvdHM/OiBzdHJpbmdbXTtcbiAgICAvKipcbiAgICAgKiBUaGUgcGFnZSBmb2xkIGlkZW50aWZpZXMgdGhlIGxhc3QgZXhwZWN0ZWQgcGFnZSBzbG90IGFib3ZlLXRoZS1mb2xkLlxuICAgICAqIEl0J3MgcGVyZmVjdGx5IGZpbmUgdG8gc3BlY2lmeSB0aGlzIGJ5IGluZGljYXRpb24sIGJ1dCBrZWVwIGluIG1pbmQgdGhhdFxuICAgICAqIGEgbW9yZSBwcmVjaXNlIGluZGljYXRpb24gd2lsbCBnYWluIGEgbW9yZSBwb3NpdGl2ZSBpbXBhY3Qgb24gcGVyZm9ybWFuY2UuXG4gICAgICovXG4gICAgcGFnZUZvbGQ/OiBzdHJpbmc7XG59O1xuZXhwb3J0IGRlY2xhcmUgdHlwZSBTbG90R3JvdXAgPSB7XG4gICAgLyoqIFRoZSBwYWdlIHNsb3QgY29uZmlndXJhdGlvbiBmb3IgbGFyZ2Ugc2NyZWVucyAqL1xuICAgIFtCUkVBS1BPSU5ULmxnXT86IFNsb3RDb25maWc7XG4gICAgLyoqIFRoZSBwYWdlIHNsb3QgY29uZmlndXJhdGlvbiBmb3IgbWVkaXVtIHNjcmVlbnMgKi9cbiAgICBbQlJFQUtQT0lOVC5tZF0/OiBTbG90Q29uZmlnO1xuICAgIC8qKiBUaGUgcGFnZSBzbG90IGNvbmZpZ3VyYXRpb24gZm9yIHNtYWxsIHNjcmVlbnMgKi9cbiAgICBbQlJFQUtQT0lOVC5zbV0/OiBTbG90Q29uZmlnO1xuICAgIC8qKiBUaGUgcGFnZSBzbG90IGNvbmZpZ3VyYXRpb24gZm9yIGV4dHJhIHNtYWxsIHNjcmVlbnMgKi9cbiAgICBbQlJFQUtQT0lOVC54c10/OiBTbG90Q29uZmlnO1xufTtcbmV4cG9ydCBkZWNsYXJlIHR5cGUgTGF5b3V0U2xvdENvbmZpZyA9IHtcbiAgICBbc2VjdGlvbiBpbiBMYXlvdXRTZWN0aW9uc106IFNsb3RDb25maWcgfCBTbG90R3JvdXAgfCBMYXlvdXRTbG90Q29uZmlnO1xufTtcbi8qKlxuICogVGhlIExheW91dENvbmZpZyBzdXBwb3J0cyB0aGUgY29uZmlndXJhdGlvbiBvZiBwYWdlIHNsb3RzIGJ5IHBhZ2UgdGVtcGxhdGVzXG4gKiBvciBwYWdlIHNlY3Rpb25zLCBzdWNoIGFzIGhlYWRlcnMgYW5kIGZvb3RlcnMuIFRoZSBjb25maWd1cmF0aW9uIGFsc28gc3VwcG9ydHNcbiAqIGFkYXB0aXZlIGRlc2lnbiBwZXIgYnJlYWtwb2ludCAobm90IHBlciBkZXZpY2UgdHlwZSksIHNvIHRoYXQgdGhlIERPTSBpcyAocmUpcmVuZGVyZWRcbiAqIHBvciBhIGdpdmVuIGJyZWFrcG9pbnQuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGFic3RyYWN0IGNsYXNzIExheW91dENvbmZpZyB7XG4gICAgLyoqXG4gICAgICogVGhlIGJyZWFrcG9pbnQgY29uZmlndXJhdGlvbiBpcyB1c2VkIHdoZW4gdGhlIERPTSBpcyAocmUpcmVuZGVyZWQgaW4gc3BlY2lmaWMgdmlldy5cbiAgICAgKiBUaGlzIGFsbG93cyBmb3IgYWRhcHRpdmUgcmVuZGVyaW5nLCBzbyB0aGF0IHRoZSBET00gaXMgcmVuZGVyZWQgZm9yIHNwZWNpZmljIGJyZWFrcG9pbnRzLlxuICAgICAqL1xuICAgIGJyZWFrcG9pbnRzPzoge1xuICAgICAgICBbQlJFQUtQT0lOVC54c10/OiBudW1iZXI7XG4gICAgICAgIFtCUkVBS1BPSU5ULnNtXT86IG51bWJlcjtcbiAgICAgICAgW0JSRUFLUE9JTlQubWRdPzogbnVtYmVyO1xuICAgICAgICBbQlJFQUtQT0lOVC5sZ10/OiBudW1iZXI7XG4gICAgfTtcbiAgICBsYXlvdXRTbG90cz86IExheW91dFNsb3RDb25maWc7XG4gICAgLyoqXG4gICAgICogRGVmZXJyZWQgbG9hZGluZyBpcyBhIHRlY2huaXF1ZSB0byBob2xkIG9mIHdpdGggdGhlIGxvYWRpbmcgLyBjcmVhdGlvblxuICAgICAqIG9mIERPTSBlbGVtZW50cyB3aGljaCBhcmUgbm90IG5vdCBpbiB0aGUgaW5pdGlhbCB2aWV3IHBvcnQuXG4gICAgICogVGhpcyB0ZWNobmlxdWUgd2lsIGluY3JlYXNlIHBlcmZvcm1hbmNlLlxuICAgICAqL1xuICAgIGRlZmVycmVkTG9hZGluZz86IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBnbG9iYWwgc3RyYXRlZ3kgd2lsbCBiZSB1c2VkIGFzIGEgZmFsbGJhY2sgc3RyYXRlZ3kgZm9yIGFsbCBET00gY3JlYXRpb24sXG4gICAgICAgICAqIGJ1dCBjYW4gYmUgb3ZlcnJpZGRlbiBieSBsb2NhbCBjb25maWd1cmF0aW9uLCBpLmUuIGZvciBjbXMgY29tcG9uZW50cy5cbiAgICAgICAgICovXG4gICAgICAgIHN0cmF0ZWd5PzogRGVmZXJMb2FkaW5nU3RyYXRlZ3k7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgaW50ZXJzZWN0aW9uIG1hcmdpbiBjb250YWlucyB0aGUgb2Zmc2V0IHVzZWQgYnkgdGhlIEludGVyc2VjdGlvbiBPYnNlcnZlclxuICAgICAgICAgKiB0byBvYnNlcnZlIGVsZW1lbnRzIG91dHNpZGUgdGhlIHZpZXcgcG9ydC5cbiAgICAgICAgICpcbiAgICAgICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9JbnRlcnNlY3Rpb25PYnNlcnZlci9yb290TWFyZ2luXG4gICAgICAgICAqL1xuICAgICAgICBpbnRlcnNlY3Rpb25NYXJnaW4/OiBzdHJpbmc7XG4gICAgfTtcbiAgICBsYXVuY2g/OiBMYXVuY2hDb25maWc7XG59XG4iXX0=