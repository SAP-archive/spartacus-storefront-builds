import { ChangeDetectorRef, Directive, ElementRef, Input, Optional, TemplateRef, } from '@angular/core';
import { Subscription } from 'rxjs';
import { PageLayoutService } from './page-layout.service';
/**
 * Directive that Adds a style class to the host element based on the cms page
 * template. The CMS page template is driven by the CMS structure, which is configurable
 * in the backend.
 *
 * The style class is added to the host element of the directive. The host element is resolved
 * from the `elementRef`, or, in case the directive is used in an `ng-template`, by the
 * `TemplateRef`.
 *
 * An example of the usage is given below:
 *
 * ```html
 * <cx-storefront class="LandingPageTemplate">
 *   <ng-template cxPageTemplateStyle>...</ng-template>
 * <cx-storefront>
 * ```
 *
 * The style class can also be provided by an input:
 *
 * ```html
 * <ng-template [cxPageTemplateStyle]="pageTemplateName">
 * ```
 *
 */
export class PageTemplateDirective {
    constructor(pageLayoutService, elementRef, templateRef, cd) {
        this.pageLayoutService = pageLayoutService;
        this.elementRef = elementRef;
        this.templateRef = templateRef;
        this.cd = cd;
        // Maintains the page template subscription
        this.subscription = new Subscription();
    }
    /**
     * Adds a style class to the host element based on the cms page template, unless
     * the class is given as an input.
     *
     * The host element is either the actual host, or the parent element in case this
     * is used inside an `ng-template`.
     */
    set setTemplate(template) {
        if (template && template !== '') {
            this.useTemplateFromInput = true;
            this.addStyleClass(template);
        }
        else if (this.useTemplateFromInput) {
            // we only clear the template if it has been provided by the input before
            this.clear();
        }
    }
    ngOnInit() {
        if (!this.useTemplateFromInput) {
            this.subscription.add(this.pageLayoutService.templateName$.subscribe((template) => this.addStyleClass(template)));
        }
    }
    /**
     * Adds the page template as a style class to the given element. If any
     * page template was added before, we clean it up.
     *
     * We'll not use hostBinding for the style class, as it will potential drop
     * an existing class name on the host. This is why we need to work with
     * the lower level change detection api.
     */
    addStyleClass(template, el) {
        this.clear(el);
        if (template) {
            this.currentTemplate = template;
            (el !== null && el !== void 0 ? el : this.host).classList.add(this.currentTemplate);
            this.cd.markForCheck();
        }
    }
    /**
     * Cleans up the class host binding, if a template class was assigned before.
     */
    clear(el) {
        var _a;
        if (this.currentTemplate) {
            (_a = (el !== null && el !== void 0 ? el : this.host).classList) === null || _a === void 0 ? void 0 : _a.remove(this.currentTemplate);
            this.cd.markForCheck();
        }
    }
    /**
     * Returns the host element (`HTMLElement`).
     *
     * If the directive is used on an `ng-template`, we take the parent element,
     * to ensure that we're not ending up with a comment.
     */
    get host() {
        return !!this.templateRef
            ? this.templateRef.elementRef.nativeElement.parentElement
            : this.elementRef.nativeElement;
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
PageTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cxPageTemplateStyle]',
            },] }
];
PageTemplateDirective.ctorParameters = () => [
    { type: PageLayoutService },
    { type: ElementRef },
    { type: TemplateRef, decorators: [{ type: Optional }] },
    { type: ChangeDetectorRef }
];
PageTemplateDirective.propDecorators = {
    setTemplate: [{ type: Input, args: ['cxPageTemplateStyle',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS10ZW1wbGF0ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtc3RydWN0dXJlL3BhZ2UvcGFnZS1sYXlvdXQvcGFnZS10ZW1wbGF0ZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFHTCxRQUFRLEVBQ1IsV0FBVyxHQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFMUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdUJHO0FBSUgsTUFBTSxPQUFPLHFCQUFxQjtJQWlDaEMsWUFDWSxpQkFBb0MsRUFDcEMsVUFBc0IsRUFDVixXQUFxQyxFQUNqRCxFQUFxQjtRQUhyQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDVixnQkFBVyxHQUFYLFdBQVcsQ0FBMEI7UUFDakQsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFiakMsMkNBQTJDO1FBQ2pDLGlCQUFZLEdBQWlCLElBQUksWUFBWSxFQUFFLENBQUM7SUFhdkQsQ0FBQztJQS9CSjs7Ozs7O09BTUc7SUFDSCxJQUFrQyxXQUFXLENBQUMsUUFBZ0I7UUFDNUQsSUFBSSxRQUFRLElBQUksUUFBUSxLQUFLLEVBQUUsRUFBRTtZQUMvQixJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDOUI7YUFBTSxJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUNwQyx5RUFBeUU7WUFDekUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0lBa0JELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUNuQixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQzFELElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQzdCLENBQ0YsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDTyxhQUFhLENBQUMsUUFBZ0IsRUFBRSxFQUFnQjtRQUN4RCxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxRQUFRLEVBQUU7WUFDWixJQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQztZQUNoQyxDQUFDLEVBQUUsYUFBRixFQUFFLGNBQUYsRUFBRSxHQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ08sS0FBSyxDQUFDLEVBQWdCOztRQUM5QixJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsTUFBQSxDQUFDLEVBQUUsYUFBRixFQUFFLGNBQUYsRUFBRSxHQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLDBDQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQzFELElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxJQUFjLElBQUk7UUFDaEIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFDdkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxhQUFhO1lBQ3pELENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztJQUNwQyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7O1lBOUZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2FBQ2xDOzs7WUE1QlEsaUJBQWlCO1lBUnhCLFVBQVU7WUFLVixXQUFXLHVCQW9FUixRQUFRO1lBM0VYLGlCQUFpQjs7OzBCQXFEaEIsS0FBSyxTQUFDLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFRlbXBsYXRlUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUGFnZUxheW91dFNlcnZpY2UgfSBmcm9tICcuL3BhZ2UtbGF5b3V0LnNlcnZpY2UnO1xuXG4vKipcbiAqIERpcmVjdGl2ZSB0aGF0IEFkZHMgYSBzdHlsZSBjbGFzcyB0byB0aGUgaG9zdCBlbGVtZW50IGJhc2VkIG9uIHRoZSBjbXMgcGFnZVxuICogdGVtcGxhdGUuIFRoZSBDTVMgcGFnZSB0ZW1wbGF0ZSBpcyBkcml2ZW4gYnkgdGhlIENNUyBzdHJ1Y3R1cmUsIHdoaWNoIGlzIGNvbmZpZ3VyYWJsZVxuICogaW4gdGhlIGJhY2tlbmQuXG4gKlxuICogVGhlIHN0eWxlIGNsYXNzIGlzIGFkZGVkIHRvIHRoZSBob3N0IGVsZW1lbnQgb2YgdGhlIGRpcmVjdGl2ZS4gVGhlIGhvc3QgZWxlbWVudCBpcyByZXNvbHZlZFxuICogZnJvbSB0aGUgYGVsZW1lbnRSZWZgLCBvciwgaW4gY2FzZSB0aGUgZGlyZWN0aXZlIGlzIHVzZWQgaW4gYW4gYG5nLXRlbXBsYXRlYCwgYnkgdGhlXG4gKiBgVGVtcGxhdGVSZWZgLlxuICpcbiAqIEFuIGV4YW1wbGUgb2YgdGhlIHVzYWdlIGlzIGdpdmVuIGJlbG93OlxuICpcbiAqIGBgYGh0bWxcbiAqIDxjeC1zdG9yZWZyb250IGNsYXNzPVwiTGFuZGluZ1BhZ2VUZW1wbGF0ZVwiPlxuICogICA8bmctdGVtcGxhdGUgY3hQYWdlVGVtcGxhdGVTdHlsZT4uLi48L25nLXRlbXBsYXRlPlxuICogPGN4LXN0b3JlZnJvbnQ+XG4gKiBgYGBcbiAqXG4gKiBUaGUgc3R5bGUgY2xhc3MgY2FuIGFsc28gYmUgcHJvdmlkZWQgYnkgYW4gaW5wdXQ6XG4gKlxuICogYGBgaHRtbFxuICogPG5nLXRlbXBsYXRlIFtjeFBhZ2VUZW1wbGF0ZVN0eWxlXT1cInBhZ2VUZW1wbGF0ZU5hbWVcIj5cbiAqIGBgYFxuICpcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N4UGFnZVRlbXBsYXRlU3R5bGVdJyxcbn0pXG5leHBvcnQgY2xhc3MgUGFnZVRlbXBsYXRlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhpcyBjb21wb25lbnQgaXMgZHJpdmVuIGJ5IGFuIGlucHV0IHRlbXBsYXRlIG9yIHNob3VsZFxuICAgKiBvYnNlcnZlIHRoZSBDTVMgZHJpdmVuIHBhZ2UgbGF5b3V0IHRlbXBsYXRlLlxuICAgKi9cbiAgcHJvdGVjdGVkIHVzZVRlbXBsYXRlRnJvbUlucHV0OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBZGRzIGEgc3R5bGUgY2xhc3MgdG8gdGhlIGhvc3QgZWxlbWVudCBiYXNlZCBvbiB0aGUgY21zIHBhZ2UgdGVtcGxhdGUsIHVubGVzc1xuICAgKiB0aGUgY2xhc3MgaXMgZ2l2ZW4gYXMgYW4gaW5wdXQuXG4gICAqXG4gICAqIFRoZSBob3N0IGVsZW1lbnQgaXMgZWl0aGVyIHRoZSBhY3R1YWwgaG9zdCwgb3IgdGhlIHBhcmVudCBlbGVtZW50IGluIGNhc2UgdGhpc1xuICAgKiBpcyB1c2VkIGluc2lkZSBhbiBgbmctdGVtcGxhdGVgLlxuICAgKi9cbiAgQElucHV0KCdjeFBhZ2VUZW1wbGF0ZVN0eWxlJykgc2V0IHNldFRlbXBsYXRlKHRlbXBsYXRlOiBzdHJpbmcpIHtcbiAgICBpZiAodGVtcGxhdGUgJiYgdGVtcGxhdGUgIT09ICcnKSB7XG4gICAgICB0aGlzLnVzZVRlbXBsYXRlRnJvbUlucHV0ID0gdHJ1ZTtcbiAgICAgIHRoaXMuYWRkU3R5bGVDbGFzcyh0ZW1wbGF0ZSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnVzZVRlbXBsYXRlRnJvbUlucHV0KSB7XG4gICAgICAvLyB3ZSBvbmx5IGNsZWFyIHRoZSB0ZW1wbGF0ZSBpZiBpdCBoYXMgYmVlbiBwcm92aWRlZCBieSB0aGUgaW5wdXQgYmVmb3JlXG4gICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gTWFpbnRhaW5zIHRoZSBwYWdlIHRlbXBsYXRlIHN1YnNjcmlwdGlvblxuICBwcm90ZWN0ZWQgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgLyoqXG4gICAqIEhvbGRzIHRoZSBjdXJyZW50IHBhZ2UgdGVtcGxhdGUsIHNvIHdlIGNhbiByZW1vdmUgcHJldmlvdXMgcGFnZSB0ZW1wbGF0ZXNcbiAgICogZnJvbSB0aGUgZWxlbWVudCBjbGFzc0xpc3QuXG4gICAqL1xuICBwcm90ZWN0ZWQgY3VycmVudFRlbXBsYXRlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHBhZ2VMYXlvdXRTZXJ2aWNlOiBQYWdlTGF5b3V0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBAT3B0aW9uYWwoKSBwcm90ZWN0ZWQgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPEhUTUxFbGVtZW50PixcbiAgICBwcm90ZWN0ZWQgY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMudXNlVGVtcGxhdGVGcm9tSW5wdXQpIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgICAgdGhpcy5wYWdlTGF5b3V0U2VydmljZS50ZW1wbGF0ZU5hbWUkLnN1YnNjcmliZSgodGVtcGxhdGUpID0+XG4gICAgICAgICAgdGhpcy5hZGRTdHlsZUNsYXNzKHRlbXBsYXRlKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSBwYWdlIHRlbXBsYXRlIGFzIGEgc3R5bGUgY2xhc3MgdG8gdGhlIGdpdmVuIGVsZW1lbnQuIElmIGFueVxuICAgKiBwYWdlIHRlbXBsYXRlIHdhcyBhZGRlZCBiZWZvcmUsIHdlIGNsZWFuIGl0IHVwLlxuICAgKlxuICAgKiBXZSdsbCBub3QgdXNlIGhvc3RCaW5kaW5nIGZvciB0aGUgc3R5bGUgY2xhc3MsIGFzIGl0IHdpbGwgcG90ZW50aWFsIGRyb3BcbiAgICogYW4gZXhpc3RpbmcgY2xhc3MgbmFtZSBvbiB0aGUgaG9zdC4gVGhpcyBpcyB3aHkgd2UgbmVlZCB0byB3b3JrIHdpdGhcbiAgICogdGhlIGxvd2VyIGxldmVsIGNoYW5nZSBkZXRlY3Rpb24gYXBpLlxuICAgKi9cbiAgcHJvdGVjdGVkIGFkZFN0eWxlQ2xhc3ModGVtcGxhdGU6IHN0cmluZywgZWw/OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXIoZWwpO1xuICAgIGlmICh0ZW1wbGF0ZSkge1xuICAgICAgdGhpcy5jdXJyZW50VGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICAgIChlbCA/PyB0aGlzLmhvc3QpLmNsYXNzTGlzdC5hZGQodGhpcy5jdXJyZW50VGVtcGxhdGUpO1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xlYW5zIHVwIHRoZSBjbGFzcyBob3N0IGJpbmRpbmcsIGlmIGEgdGVtcGxhdGUgY2xhc3Mgd2FzIGFzc2lnbmVkIGJlZm9yZS5cbiAgICovXG4gIHByb3RlY3RlZCBjbGVhcihlbD86IEhUTUxFbGVtZW50KSB7XG4gICAgaWYgKHRoaXMuY3VycmVudFRlbXBsYXRlKSB7XG4gICAgICAoZWwgPz8gdGhpcy5ob3N0KS5jbGFzc0xpc3Q/LnJlbW92ZSh0aGlzLmN1cnJlbnRUZW1wbGF0ZSk7XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBob3N0IGVsZW1lbnQgKGBIVE1MRWxlbWVudGApLlxuICAgKlxuICAgKiBJZiB0aGUgZGlyZWN0aXZlIGlzIHVzZWQgb24gYW4gYG5nLXRlbXBsYXRlYCwgd2UgdGFrZSB0aGUgcGFyZW50IGVsZW1lbnQsXG4gICAqIHRvIGVuc3VyZSB0aGF0IHdlJ3JlIG5vdCBlbmRpbmcgdXAgd2l0aCBhIGNvbW1lbnQuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGhvc3QoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiAhIXRoaXMudGVtcGxhdGVSZWZcbiAgICAgID8gdGhpcy50ZW1wbGF0ZVJlZi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudFxuICAgICAgOiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==