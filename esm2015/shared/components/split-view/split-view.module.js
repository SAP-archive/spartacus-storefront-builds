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
export class SplitViewModule {
}
SplitViewModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SplitViewComponent, ViewComponent],
                imports: [CommonModule, RouterModule],
                exports: [SplitViewComponent, ViewComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQtdmlldy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9zaGFyZWQvY29tcG9uZW50cy9zcGxpdC12aWV3L3NwbGl0LXZpZXcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFdEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTJCRztBQU9ILE1BQU0sT0FBTyxlQUFlOzs7WUFMM0IsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGtCQUFrQixFQUFFLGFBQWEsQ0FBQztnQkFDakQsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQztnQkFDckMsT0FBTyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsYUFBYSxDQUFDO2FBQzdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3BsaXRWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9zcGxpdC9zcGxpdC12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi92aWV3L3ZpZXcuY29tcG9uZW50JztcblxuLyoqXG4gKiBUaGUgc3BsaXQtdmlldyBjb21wb25lbnQgc3VwcG9ydHMgYW4gdW5saW1pdGVkIG51bWJlciBvZiBuZXN0ZWQgdmlld3MuIE5lc3RlZCB2aWV3cyBhcmUgcmVuZGVyZWRcbiAqIG5leHQgdG8gZWFjaCBvdGhlci4gVGhlIHZpZXdzIGNhbiBiZSByZW5kZXJlZCBuZXh0IHRvIGVhY2ggb3RoZXIsIGJ1dCB0aGUgbWF4IG51bWJlciBvZiB2aXNpYmxlXG4gKiB2aWV3cyBjYW4gYmUgbGltaXN0ZWQgYXMgd2VsbC4gVGhpcyBpcyBjb25maWd1cmFibGUgaW4gdGhlIENTUyBsYXllciwgc28gdGhhdCB0aGUgbWF4IG51bWJlciBvZiB2aWV3c1xuICogcGVyIHNwbGl0LXZpZXcgY2FuIGJlIGRpZmZlcmVudCBmb3IgZWFjaCBjb21wb25lbnQuXG4gKlxuICogVGhlIGJhc2ljIHN0cnVjdHVyZSBvZiB0aGUgc3BsaXQtdmlldyBjb21wb25lbnQgaXMgc2hvd24gYmVsb3c6XG4gKlxuICpcbiAqIGBgYFxuICogPGN4LXNwbGl0LXZpZXc+XG4gKiA8L2N4LXNwbGl0LXZpZXc+XG4gKiBgYGBcbiAqXG4gKiBUaGUgVVggcGF0dGVybiB1c2VkIGZvciB0aGUgc3BsaXQtdmlldyBpcyBkcml2ZW4gYnkgYW4gaW5pdGlhbCB2aWV3LCB3aGljaCBnZXRzIHNwbGl0dGVkIGludG9cbiAqIG1vcmUgdmlld3MgYXMgc29vbiBhcyB0aGUgdXNlciBzdGFydHMgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgaW5pdGlhbCBhbmQgc3Vic2VxdWFudGlhbCB2aWV3cy5cbiAqIFRoZSB2aWV3cyBjYW4gYmUgZHJpdmVuIGJ5IHJvdXRlcywgd2hpY2ggbWVhbnMgdGhhdCB5b3UgY2FuIG5hdmlnYXRlIHRocm91Z2ggdGhlIHNwbGl0dGVkIHZpZXdzXG4gKiBieSB1c2luZyB0aGUgYnJvd3NlciBoaXN0b3J5IGFzIHdlbGwgYXMgc2hhcmUgb3IgYm9va21hcmsgc3BsaXR0ZWQgdmlld3MuXG4gKlxuICogVGhlIFVJIGlzIGltcGxlbWVudGVkIGluIHRoZSBzdHlsZSBsYXllciwgd2l0aCBvbmx5IGEgZmV3IGdlbmVyaWMgc3R5bGUgcnVsZXMuIE1vc3Qgb2YgdGhlIHNwbGl0XG4gKiB2aWV3IHN0eWxlIGlzIGRyaXZlbiBieSBDU1MgcHJvcGVydGllcywgc28gdGhhdCBhbHRlcm5hdGl2ZSBzcGxpdC12aWV3IHN0eWxlcyBjYW4gYmUgaW50cm9kdWNlZFxuICogcGVyIHBhZ2Ugb3IgY29tcG9uZW50LlxuICpcbiAqIFRoZSBtYXggbnVtYmVyIG9mIHZpZXdzIHBlciBzcGxpdC12aWV3IG9uIG1vYmlsZSBpcyBsaW1pdGVkIHRvIDEgYnkgZGVmYXVsdCwgd2hlcmUgYXMgb24gdGFibGV0XG4gKiAoYW5kIGhpZ2hlcikgaXQgaXMgc2V0IHRvIDIuIFNwYXJ0YWN1cyBoYXMgYSBwcmV0dHkgbmFycm93IGxheW91dCwgd2hpY2ggaXMgd2h5IDIgaXMgbWF4aW11bSxcbiAqIGJ1dCBjdXN0b21lcnMgY291bGQgYWx0ZXIgdGhlIGxheW91dCB0byBicmluZyBpbiBtb3JlIHZpZXdzIGluIHRoZSBzYW1lIHNwbGl0LXZpZXcgYXQgdGhlIHRpbWUuXG4gKlxuICovXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1NwbGl0Vmlld0NvbXBvbmVudCwgVmlld0NvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFJvdXRlck1vZHVsZV0sXG4gIGV4cG9ydHM6IFtTcGxpdFZpZXdDb21wb25lbnQsIFZpZXdDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBTcGxpdFZpZXdNb2R1bGUge31cbiJdfQ==