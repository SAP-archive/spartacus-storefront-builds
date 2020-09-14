/**
 * The split-view component supports an unlimited number of nested views. Nested views are rendered
 * next to each other. The views can be rendered next to each other, but the max number of visible
 * views can be limisted as well. This is configurable in the CSS layer, so that the max number of views
 * per split-view can be different for each component.
 *
 * The basic structure of the split-view component is shown below:
 *
 *
 * ```
 * <cx-split-view>
 * </cx-split-view>
 * ```
 *
 * The UX pattern used for the split-view is driven by an initial view, which gets splitted into
 * more views as soon as the user starts interacting with the initial and subsequantial views.
 * The views can be driven by routes, which means that you can navigate through the splitted views
 * by using the browser history as well as share or bookmark splitted views.
 *
 * The UI is implemented in the style layer, with only a few generic style rules. Most of the split
 * view style is driven by CSS properties, so that alternative split-view styles can be introduced
 * per page or component.
 *
 * The max number of views per split-view on mobile is limited to 1 by default, where as on tablet
 * (and higher) it is set to 2. Spartacus has a pretty narrow layout, which is why 2 is maximum,
 * but customers could alter the layout to bring in more views in the same split-view at the time.
 *
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './split/split-view.component';
import * as ɵngcc2 from './view/view.component';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from '@angular/router';
export declare class SplitViewModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<SplitViewModule, [typeof ɵngcc1.SplitViewComponent, typeof ɵngcc2.ViewComponent], [typeof ɵngcc3.CommonModule, typeof ɵngcc4.RouterModule], [typeof ɵngcc1.SplitViewComponent, typeof ɵngcc2.ViewComponent]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<SplitViewModule>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQtdmlldy5tb2R1bGUuZC50cyIsInNvdXJjZXMiOlsic3BsaXQtdmlldy5tb2R1bGUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhlIHNwbGl0LXZpZXcgY29tcG9uZW50IHN1cHBvcnRzIGFuIHVubGltaXRlZCBudW1iZXIgb2YgbmVzdGVkIHZpZXdzLiBOZXN0ZWQgdmlld3MgYXJlIHJlbmRlcmVkXG4gKiBuZXh0IHRvIGVhY2ggb3RoZXIuIFRoZSB2aWV3cyBjYW4gYmUgcmVuZGVyZWQgbmV4dCB0byBlYWNoIG90aGVyLCBidXQgdGhlIG1heCBudW1iZXIgb2YgdmlzaWJsZVxuICogdmlld3MgY2FuIGJlIGxpbWlzdGVkIGFzIHdlbGwuIFRoaXMgaXMgY29uZmlndXJhYmxlIGluIHRoZSBDU1MgbGF5ZXIsIHNvIHRoYXQgdGhlIG1heCBudW1iZXIgb2Ygdmlld3NcbiAqIHBlciBzcGxpdC12aWV3IGNhbiBiZSBkaWZmZXJlbnQgZm9yIGVhY2ggY29tcG9uZW50LlxuICpcbiAqIFRoZSBiYXNpYyBzdHJ1Y3R1cmUgb2YgdGhlIHNwbGl0LXZpZXcgY29tcG9uZW50IGlzIHNob3duIGJlbG93OlxuICpcbiAqXG4gKiBgYGBcbiAqIDxjeC1zcGxpdC12aWV3PlxuICogPC9jeC1zcGxpdC12aWV3PlxuICogYGBgXG4gKlxuICogVGhlIFVYIHBhdHRlcm4gdXNlZCBmb3IgdGhlIHNwbGl0LXZpZXcgaXMgZHJpdmVuIGJ5IGFuIGluaXRpYWwgdmlldywgd2hpY2ggZ2V0cyBzcGxpdHRlZCBpbnRvXG4gKiBtb3JlIHZpZXdzIGFzIHNvb24gYXMgdGhlIHVzZXIgc3RhcnRzIGludGVyYWN0aW5nIHdpdGggdGhlIGluaXRpYWwgYW5kIHN1YnNlcXVhbnRpYWwgdmlld3MuXG4gKiBUaGUgdmlld3MgY2FuIGJlIGRyaXZlbiBieSByb3V0ZXMsIHdoaWNoIG1lYW5zIHRoYXQgeW91IGNhbiBuYXZpZ2F0ZSB0aHJvdWdoIHRoZSBzcGxpdHRlZCB2aWV3c1xuICogYnkgdXNpbmcgdGhlIGJyb3dzZXIgaGlzdG9yeSBhcyB3ZWxsIGFzIHNoYXJlIG9yIGJvb2ttYXJrIHNwbGl0dGVkIHZpZXdzLlxuICpcbiAqIFRoZSBVSSBpcyBpbXBsZW1lbnRlZCBpbiB0aGUgc3R5bGUgbGF5ZXIsIHdpdGggb25seSBhIGZldyBnZW5lcmljIHN0eWxlIHJ1bGVzLiBNb3N0IG9mIHRoZSBzcGxpdFxuICogdmlldyBzdHlsZSBpcyBkcml2ZW4gYnkgQ1NTIHByb3BlcnRpZXMsIHNvIHRoYXQgYWx0ZXJuYXRpdmUgc3BsaXQtdmlldyBzdHlsZXMgY2FuIGJlIGludHJvZHVjZWRcbiAqIHBlciBwYWdlIG9yIGNvbXBvbmVudC5cbiAqXG4gKiBUaGUgbWF4IG51bWJlciBvZiB2aWV3cyBwZXIgc3BsaXQtdmlldyBvbiBtb2JpbGUgaXMgbGltaXRlZCB0byAxIGJ5IGRlZmF1bHQsIHdoZXJlIGFzIG9uIHRhYmxldFxuICogKGFuZCBoaWdoZXIpIGl0IGlzIHNldCB0byAyLiBTcGFydGFjdXMgaGFzIGEgcHJldHR5IG5hcnJvdyBsYXlvdXQsIHdoaWNoIGlzIHdoeSAyIGlzIG1heGltdW0sXG4gKiBidXQgY3VzdG9tZXJzIGNvdWxkIGFsdGVyIHRoZSBsYXlvdXQgdG8gYnJpbmcgaW4gbW9yZSB2aWV3cyBpbiB0aGUgc2FtZSBzcGxpdC12aWV3IGF0IHRoZSB0aW1lLlxuICpcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU3BsaXRWaWV3TW9kdWxlIHtcbn1cbiJdfQ==