import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SplitViewComponent } from './split/split-view.component';
import { ViewComponent } from './view/view.component';
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
var SplitViewModule = /** @class */ (function () {
    function SplitViewModule() {
    }
    SplitViewModule = __decorate([
        NgModule({
            declarations: [SplitViewComponent, ViewComponent],
            imports: [CommonModule, RouterModule],
            exports: [SplitViewComponent, ViewComponent],
        })
    ], SplitViewModule);
    return SplitViewModule;
}());
export { SplitViewModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQtdmlldy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJzaGFyZWQvY29tcG9uZW50cy9zcGxpdC12aWV3L3NwbGl0LXZpZXcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXREOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EyQkc7QUFPSDtJQUFBO0lBQThCLENBQUM7SUFBbEIsZUFBZTtRQUwzQixRQUFRLENBQUM7WUFDUixZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxhQUFhLENBQUM7WUFDakQsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQztZQUNyQyxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxhQUFhLENBQUM7U0FDN0MsQ0FBQztPQUNXLGVBQWUsQ0FBRztJQUFELHNCQUFDO0NBQUEsQUFBL0IsSUFBK0I7U0FBbEIsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNwbGl0Vmlld0NvbXBvbmVudCB9IGZyb20gJy4vc3BsaXQvc3BsaXQtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdmlldy92aWV3LmNvbXBvbmVudCc7XG5cbi8qKlxuICogVGhlIHNwbGl0LXZpZXcgY29tcG9uZW50IHN1cHBvcnRzIGFuIHVubGltaXRlZCBudW1iZXIgb2YgbmVzdGVkIHZpZXdzLiBOZXN0ZWQgdmlld3MgYXJlIHJlbmRlcmVkXG4gKiBuZXh0IHRvIGVhY2ggb3RoZXIuIFRoZSB2aWV3cyBjYW4gYmUgcmVuZGVyZWQgbmV4dCB0byBlYWNoIG90aGVyLCBidXQgdGhlIG1heCBudW1iZXIgb2YgdmlzaWJsZVxuICogdmlld3MgY2FuIGJlIGxpbWlzdGVkIGFzIHdlbGwuIFRoaXMgaXMgY29uZmlndXJhYmxlIGluIHRoZSBDU1MgbGF5ZXIsIHNvIHRoYXQgdGhlIG1heCBudW1iZXIgb2Ygdmlld3NcbiAqIHBlciBzcGxpdC12aWV3IGNhbiBiZSBkaWZmZXJlbnQgZm9yIGVhY2ggY29tcG9uZW50LlxuICpcbiAqIFRoZSBiYXNpYyBzdHJ1Y3R1cmUgb2YgdGhlIHNwbGl0LXZpZXcgY29tcG9uZW50IGlzIHNob3duIGJlbG93OlxuICpcbiAqXG4gKiBgYGBcbiAqIDxjeC1zcGxpdC12aWV3PlxuICogPC9jeC1zcGxpdC12aWV3PlxuICogYGBgXG4gKlxuICogVGhlIFVYIHBhdHRlcm4gdXNlZCBmb3IgdGhlIHNwbGl0LXZpZXcgaXMgZHJpdmVuIGJ5IGFuIGluaXRpYWwgdmlldywgd2hpY2ggZ2V0cyBzcGxpdHRlZCBpbnRvXG4gKiBtb3JlIHZpZXdzIGFzIHNvb24gYXMgdGhlIHVzZXIgc3RhcnRzIGludGVyYWN0aW5nIHdpdGggdGhlIGluaXRpYWwgYW5kIHN1YnNlcXVhbnRpYWwgdmlld3MuXG4gKiBUaGUgdmlld3MgY2FuIGJlIGRyaXZlbiBieSByb3V0ZXMsIHdoaWNoIG1lYW5zIHRoYXQgeW91IGNhbiBuYXZpZ2F0ZSB0aHJvdWdoIHRoZSBzcGxpdHRlZCB2aWV3c1xuICogYnkgdXNpbmcgdGhlIGJyb3dzZXIgaGlzdG9yeSBhcyB3ZWxsIGFzIHNoYXJlIG9yIGJvb2ttYXJrIHNwbGl0dGVkIHZpZXdzLlxuICpcbiAqIFRoZSBVSSBpcyBpbXBsZW1lbnRlZCBpbiB0aGUgc3R5bGUgbGF5ZXIsIHdpdGggb25seSBhIGZldyBnZW5lcmljIHN0eWxlIHJ1bGVzLiBNb3N0IG9mIHRoZSBzcGxpdFxuICogdmlldyBzdHlsZSBpcyBkcml2ZW4gYnkgQ1NTIHByb3BlcnRpZXMsIHNvIHRoYXQgYWx0ZXJuYXRpdmUgc3BsaXQtdmlldyBzdHlsZXMgY2FuIGJlIGludHJvZHVjZWRcbiAqIHBlciBwYWdlIG9yIGNvbXBvbmVudC5cbiAqXG4gKiBUaGUgbWF4IG51bWJlciBvZiB2aWV3cyBwZXIgc3BsaXQtdmlldyBvbiBtb2JpbGUgaXMgbGltaXRlZCB0byAxIGJ5IGRlZmF1bHQsIHdoZXJlIGFzIG9uIHRhYmxldFxuICogKGFuZCBoaWdoZXIpIGl0IGlzIHNldCB0byAyLiBTcGFydGFjdXMgaGFzIGEgcHJldHR5IG5hcnJvdyBsYXlvdXQsIHdoaWNoIGlzIHdoeSAyIGlzIG1heGltdW0sXG4gKiBidXQgY3VzdG9tZXJzIGNvdWxkIGFsdGVyIHRoZSBsYXlvdXQgdG8gYnJpbmcgaW4gbW9yZSB2aWV3cyBpbiB0aGUgc2FtZSBzcGxpdC12aWV3IGF0IHRoZSB0aW1lLlxuICpcbiAqL1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtTcGxpdFZpZXdDb21wb25lbnQsIFZpZXdDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGVdLFxuICBleHBvcnRzOiBbU3BsaXRWaWV3Q29tcG9uZW50LCBWaWV3Q29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgU3BsaXRWaWV3TW9kdWxlIHt9XG4iXX0=