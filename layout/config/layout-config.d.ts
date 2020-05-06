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
    launch?: LaunchConfig;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LayoutConfig, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWNvbmZpZy5kLnRzIiwic291cmNlcyI6WyJsYXlvdXQtY29uZmlnLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1FQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlZmVyTG9hZGluZ1N0cmF0ZWd5IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IExhdW5jaENvbmZpZyB9IGZyb20gJy4uL2xhdW5jaC1kaWFsb2cvaW5kZXgnO1xuZXhwb3J0IGRlY2xhcmUgZW51bSBCUkVBS1BPSU5UIHtcbiAgICB4cyA9IFwieHNcIixcbiAgICBzbSA9IFwic21cIixcbiAgICBtZCA9IFwibWRcIixcbiAgICBsZyA9IFwibGdcIixcbiAgICB4bCA9IFwieGxcIlxufVxuZXhwb3J0IGRlY2xhcmUgdHlwZSBMYXlvdXRTZWN0aW9ucyA9ICdoZWFkZXInIHwgJ2Zvb3RlcicgfCAnTGFuZGluZ1BhZ2UyVGVtcGxhdGUnIHwgc3RyaW5nO1xuZXhwb3J0IGRlY2xhcmUgdHlwZSBTbG90Q29uZmlnID0ge1xuICAgIC8qKiBUaGUgY21zIHBhZ2Ugc2xvdHMgYXJlIG1hcHBlZCBieSB0aGUgYHNsb3QucG9zaXRpb25gLiAqL1xuICAgIHNsb3RzPzogc3RyaW5nW107XG4gICAgLyoqXG4gICAgICogVGhlIHBhZ2UgZm9sZCBpZGVudGlmaWVzIHRoZSBsYXN0IGV4cGVjdGVkIHBhZ2Ugc2xvdCBhYm92ZS10aGUtZm9sZC5cbiAgICAgKiBJdCdzIHBlcmZlY3RseSBmaW5lIHRvIHNwZWNpZnkgdGhpcyBieSBpZGljYXRpb24sIGhvd2V2ZXIgYSBtb3JlXG4gICAgICogcHJlY2lzZSBpbmRpY2F0aW9uIHdpbGwgaGF2ZSBhbiBwb3NpdGl2ZSBpbXBhY3Qgb24gcGVyZm9ybWFuY2UuXG4gICAgICovXG4gICAgcGFnZUZvbGQ/OiBzdHJpbmc7XG59O1xuZXhwb3J0IGRlY2xhcmUgdHlwZSBTbG90R3JvdXAgPSB7XG4gICAgLyoqIFRoZSBwYWdlIHNsb3QgY29uZmlndXJhdGlvbiBmb3IgbGFyZ2Ugc2NyZWVucyAqL1xuICAgIFtCUkVBS1BPSU5ULmxnXT86IFNsb3RDb25maWc7XG4gICAgLyoqIFRoZSBwYWdlIHNsb3QgY29uZmlndXJhdGlvbiBmb3IgbWVkaXVtIHNjcmVlbnMgKi9cbiAgICBbQlJFQUtQT0lOVC5tZF0/OiBTbG90Q29uZmlnO1xuICAgIC8qKiBUaGUgcGFnZSBzbG90IGNvbmZpZ3VyYXRpb24gZm9yIHNtYWxsIHNjcmVlbnMgKi9cbiAgICBbQlJFQUtQT0lOVC5zbV0/OiBTbG90Q29uZmlnO1xuICAgIC8qKiBUaGUgcGFnZSBzbG90IGNvbmZpZ3VyYXRpb24gZm9yIGV4dHJhIHNtYWxsIHNjcmVlbnMgKi9cbiAgICBbQlJFQUtQT0lOVC54c10/OiBTbG90Q29uZmlnO1xufTtcbmV4cG9ydCBkZWNsYXJlIHR5cGUgTGF5b3V0U2xvdENvbmZpZyA9IHtcbiAgICBbc2VjdGlvbiBpbiBMYXlvdXRTZWN0aW9uc106IFNsb3RDb25maWcgfCBTbG90R3JvdXAgfCBMYXlvdXRTbG90Q29uZmlnO1xufTtcbi8qKlxuICogVGhlIExheW91dENvbmZpZyBzdXBwb3J0cyB0aGUgY29uZmlndXJhdGlvbiBvZiBwYWdlIHNsb3RzIGJ5IHBhZ2UgdGVtcGxhdGVzXG4gKiBvciBwYWdlIHNlY3Rpb25zLCBzdWNoIGFzIGhlYWRlcnMgYW5kIGZvb3RlcnMuIFRoZSBjb25maWd1cmF0aW9uIGFsc28gc3VwcG9ydHNcbiAqIGFkYXB0aXZlIGRlc2lnbiBwZXIgYnJlYWRwb2ludCAobm90IHBlciBkZXZpY2UgdHlwZSksIHNvIHRoYXQgdGhlIERPTSBpcyAocmUpcmVuZGVyZWRcbiAqIHBvciBhIGdpdmVuIGJyZWFrcG9pbnQuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGFic3RyYWN0IGNsYXNzIExheW91dENvbmZpZyB7XG4gICAgLyoqIFRoZSBicmVha3BvaW50IGNvbmZpZ3VyYXRpb24gaXMgdXNlZCB3aGVuIHRoZSBET00gaXMgKHJlKXJlbmRlcmVkIGluIHNwZWNpZmljIHZpZXcuXG4gICAgICogVGhpcyBhbGxvd3MgZm9yIGFkYXB0aXZlIHJlbmRlcmluZywgc28gdGhhdCB0aGUgRE9NIGlzIHJlbmRlcmVkIGZvciBzcGVjaWZpYyBicmVha3BvaW50cy4gKi9cbiAgICBicmVha3BvaW50cz86IHtcbiAgICAgICAgW0JSRUFLUE9JTlQueHNdPzogbnVtYmVyO1xuICAgICAgICBbQlJFQUtQT0lOVC5zbV0/OiBudW1iZXI7XG4gICAgICAgIFtCUkVBS1BPSU5ULm1kXT86IG51bWJlcjtcbiAgICAgICAgW0JSRUFLUE9JTlQubGddPzogbnVtYmVyO1xuICAgIH07XG4gICAgbGF5b3V0U2xvdHM/OiBMYXlvdXRTbG90Q29uZmlnO1xuICAgIC8qKlxuICAgICAqIERlZmVycnJlZCBsb2FkaW5nIGlzIGEgdGVjaG5pcXVlIHRvIGhvbGQgb2Ygd2l0aCB0aGUgbG9hZGluZyAvIGNyZWF0aW9uXG4gICAgICogb2YgRE9NIGVsZW1lbnRzIHdoaWNoIGFyZSBub3Qgbm90IGluIHRoZSBpbml0aWFsIHZpZXcgcG9ydC5cbiAgICAgKiBUaGlzIHRlY2huaXF1ZSB3aWwgaW5jcmVhc2UgcGVyZm9ybWFuY2UuXG4gICAgICovXG4gICAgZGVmZXJyZWRMb2FkaW5nPzoge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGdsb2JhbCBzdHJhdGVneSB3aWxsIGJlIHVzZWQgYXMgYSBmYWxsYmFjayBzdHJhdGVneSBmb3IgYWxsIERPTSBjcmVhdGlvbixcbiAgICAgICAgICogYnV0IGNhbiBiZSBvdmVycmlkZW4gYnkgbG9jYWwgY29uZmlndXJhdGlvbiwgaS5lLiBmb3IgY21zIGNvbXBvbmVudHMuXG4gICAgICAgICAqL1xuICAgICAgICBzdHJhdGVneT86IERlZmVyTG9hZGluZ1N0cmF0ZWd5O1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGludGVyc2VjdGlvbiBtYXJnaW4gY29udGFpbnMgdGhlIG9mZnNldCB1c2VkIGJ5IHRoZSBJbnRlcnNlY3Rpb24gT2JzZXJ2ZXJcbiAgICAgICAgICogdG8gb2JzZXJ2ZSBlbGVtZW50cyBvdXRzaWRlIHRoZSB2aWV3IHBvcnQuXG4gICAgICAgICAqXG4gICAgICAgICAqIFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSW50ZXJzZWN0aW9uT2JzZXJ2ZXIvcm9vdE1hcmdpblxuICAgICAgICAgKi9cbiAgICAgICAgaW50ZXJzZWN0aW9uTWFyZ2luPzogc3RyaW5nO1xuICAgIH07XG4gICAgbGF1bmNoPzogTGF1bmNoQ29uZmlnO1xufVxuIl19