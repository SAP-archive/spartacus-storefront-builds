import { Directive, ElementRef, HostBinding, Input, Optional, TemplateRef, } from '@angular/core';
import { of } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
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
    constructor(pageLayoutService, elementRef, templateRef) {
        this.pageLayoutService = pageLayoutService;
        this.elementRef = elementRef;
        this.templateRef = templateRef;
    }
    ngOnInit() {
        this.subscription = this.template
            .pipe(distinctUntilChanged())
            .subscribe((template) => this.addStyleClass(this.host, template));
    }
    get template() {
        return this.cxPageTemplateStyle
            ? of(this.cxPageTemplateStyle)
            : this.pageLayoutService.templateName$;
    }
    /**
     * Adds the page template as a style class to the given element. If any page template
     * was added before, we clean it up.
     */
    addStyleClass(el, template) {
        var _a;
        if (this.currentTemplate) {
            (_a = el.classList) === null || _a === void 0 ? void 0 : _a.remove(this.currentTemplate);
        }
        if (template) {
            this.currentTemplate = template;
            el.classList.add(this.currentTemplate);
        }
    }
    /**
     * Returns the host element (`HTMLElement`).
     *
     * If the directive is used on an `ng-template`, we take the parent element, to
     * ensure that we're not ending up with a comment.
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
    { type: TemplateRef, decorators: [{ type: Optional }] }
];
PageTemplateDirective.propDecorators = {
    cxPageTemplateStyle: [{ type: Input }],
    templateClass: [{ type: HostBinding, args: ['class',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS10ZW1wbGF0ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtc3RydWN0dXJlL3BhZ2UvcGFnZS1sYXlvdXQvcGFnZS10ZW1wbGF0ZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLEtBQUssRUFHTCxRQUFRLEVBQ1IsV0FBVyxHQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBYyxFQUFFLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVCRztBQUlILE1BQU0sT0FBTyxxQkFBcUI7SUFxQmhDLFlBQ1ksaUJBQW9DLEVBQ3BDLFVBQXNCLEVBQ1YsV0FBcUM7UUFGakQsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ1YsZ0JBQVcsR0FBWCxXQUFXLENBQTBCO0lBQzFELENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUTthQUM5QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQzthQUM1QixTQUFTLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRCxJQUFjLFFBQVE7UUFDcEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CO1lBQzdCLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1lBQzlCLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDO0lBQzNDLENBQUM7SUFFRDs7O09BR0c7SUFDTyxhQUFhLENBQUMsRUFBZSxFQUFFLFFBQWdCOztRQUN2RCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsTUFBQSxFQUFFLENBQUMsU0FBUywwQ0FBRSxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtTQUM1QztRQUNELElBQUksUUFBUSxFQUFFO1lBQ1osSUFBSSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUM7WUFDaEMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsSUFBYyxJQUFJO1FBQ2hCLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXO1lBQ3ZCLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsYUFBYTtZQUN6RCxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7SUFDcEMsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7OztZQXRFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjthQUNsQzs7O1lBNUJRLGlCQUFpQjtZQVZ4QixVQUFVO1lBTVYsV0FBVyx1QkF5RFIsUUFBUTs7O2tDQWhCVixLQUFLOzRCQUVMLFdBQVcsU0FBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgVGVtcGxhdGVSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQYWdlTGF5b3V0U2VydmljZSB9IGZyb20gJy4vcGFnZS1sYXlvdXQuc2VydmljZSc7XG5cbi8qKlxuICogRGlyZWN0aXZlIHRoYXQgQWRkcyBhIHN0eWxlIGNsYXNzIHRvIHRoZSBob3N0IGVsZW1lbnQgYmFzZWQgb24gdGhlIGNtcyBwYWdlXG4gKiB0ZW1wbGF0ZS4gVGhlIENNUyBwYWdlIHRlbXBsYXRlIGlzIGRyaXZlbiBieSB0aGUgQ01TIHN0cnVjdHVyZSwgd2hpY2ggaXMgY29uZmlndXJhYmxlXG4gKiBpbiB0aGUgYmFja2VuZC5cbiAqXG4gKiBUaGUgc3R5bGUgY2xhc3MgaXMgYWRkZWQgdG8gdGhlIGhvc3QgZWxlbWVudCBvZiB0aGUgZGlyZWN0aXZlLiBUaGUgaG9zdCBlbGVtZW50IGlzIHJlc29sdmVkXG4gKiBmcm9tIHRoZSBgZWxlbWVudFJlZmAsIG9yLCBpbiBjYXNlIHRoZSBkaXJlY3RpdmUgaXMgdXNlZCBpbiBhbiBgbmctdGVtcGxhdGVgLCBieSB0aGVcbiAqIGBUZW1wbGF0ZVJlZmAuXG4gKlxuICogQW4gZXhhbXBsZSBvZiB0aGUgdXNhZ2UgaXMgZ2l2ZW4gYmVsb3c6XG4gKlxuICogYGBgaHRtbFxuICogPGN4LXN0b3JlZnJvbnQgY2xhc3M9XCJMYW5kaW5nUGFnZVRlbXBsYXRlXCI+XG4gKiAgIDxuZy10ZW1wbGF0ZSBjeFBhZ2VUZW1wbGF0ZVN0eWxlPi4uLjwvbmctdGVtcGxhdGU+XG4gKiA8Y3gtc3RvcmVmcm9udD5cbiAqIGBgYFxuICpcbiAqIFRoZSBzdHlsZSBjbGFzcyBjYW4gYWxzbyBiZSBwcm92aWRlZCBieSBhbiBpbnB1dDpcbiAqXG4gKiBgYGBodG1sXG4gKiA8bmctdGVtcGxhdGUgW2N4UGFnZVRlbXBsYXRlU3R5bGVdPVwicGFnZVRlbXBsYXRlTmFtZVwiPlxuICogYGBgXG4gKlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY3hQYWdlVGVtcGxhdGVTdHlsZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdlVGVtcGxhdGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBBZGRzIGEgc3R5bGUgY2xhc3MgdG8gdGhlIGhvc3QgZWxlbWVudCBiYXNlZCBvbiB0aGUgY21zIHBhZ2UgdGVtcGxhdGUsIHVubGVzc1xuICAgKiB0aGUgY2xhc3MgaXMgZ2l2ZW4gYXMgYW4gaW5wdXQuXG4gICAqXG4gICAqIFRoZSBob3N0IGVsZW1lbnQgaXMgZWl0aGVyIHRoZSBhY3R1YWwgaG9zdCwgb3IgdGhlIHBhcmVudCBlbGVtZW50IGluIGNhc2UgdGhpc1xuICAgKiBpcyB1c2VkIGluc2lkZSBhbiBgbmctdGVtcGxhdGVgLlxuICAgKi9cbiAgQElucHV0KCkgY3hQYWdlVGVtcGxhdGVTdHlsZTogc3RyaW5nO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKSB0ZW1wbGF0ZUNsYXNzOiBzdHJpbmc7XG5cbiAgLy8gTWFpbnRhaW5zIHRoZSBwYWdlIHRlbXBsYXRlIHN1YnNjcmlwdGlvblxuICBwcm90ZWN0ZWQgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgLyoqXG4gICAqIEhvbGRzIHRoZSBjdXJyZW50IHBhZ2UgdGVtcGxhdGUsIHNvIHdlIGNhbiByZW1vdmUgcHJldmlvdXMgcGFnZSB0ZW1wbGF0ZXNcbiAgICogZnJvbSB0aGUgZWxlbWVudCBjbGFzc0xpc3QuXG4gICAqL1xuICBwcm90ZWN0ZWQgY3VycmVudFRlbXBsYXRlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHBhZ2VMYXlvdXRTZXJ2aWNlOiBQYWdlTGF5b3V0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBAT3B0aW9uYWwoKSBwcm90ZWN0ZWQgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPEhUTUxFbGVtZW50PlxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnRlbXBsYXRlXG4gICAgICAucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKVxuICAgICAgLnN1YnNjcmliZSgodGVtcGxhdGUpID0+IHRoaXMuYWRkU3R5bGVDbGFzcyh0aGlzLmhvc3QsIHRlbXBsYXRlKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IHRlbXBsYXRlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuY3hQYWdlVGVtcGxhdGVTdHlsZVxuICAgICAgPyBvZih0aGlzLmN4UGFnZVRlbXBsYXRlU3R5bGUpXG4gICAgICA6IHRoaXMucGFnZUxheW91dFNlcnZpY2UudGVtcGxhdGVOYW1lJDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSBwYWdlIHRlbXBsYXRlIGFzIGEgc3R5bGUgY2xhc3MgdG8gdGhlIGdpdmVuIGVsZW1lbnQuIElmIGFueSBwYWdlIHRlbXBsYXRlXG4gICAqIHdhcyBhZGRlZCBiZWZvcmUsIHdlIGNsZWFuIGl0IHVwLlxuICAgKi9cbiAgcHJvdGVjdGVkIGFkZFN0eWxlQ2xhc3MoZWw6IEhUTUxFbGVtZW50LCB0ZW1wbGF0ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY3VycmVudFRlbXBsYXRlKSB7XG4gICAgICBlbC5jbGFzc0xpc3Q/LnJlbW92ZSh0aGlzLmN1cnJlbnRUZW1wbGF0ZSk7XG4gICAgfVxuICAgIGlmICh0ZW1wbGF0ZSkge1xuICAgICAgdGhpcy5jdXJyZW50VGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQodGhpcy5jdXJyZW50VGVtcGxhdGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBob3N0IGVsZW1lbnQgKGBIVE1MRWxlbWVudGApLlxuICAgKlxuICAgKiBJZiB0aGUgZGlyZWN0aXZlIGlzIHVzZWQgb24gYW4gYG5nLXRlbXBsYXRlYCwgd2UgdGFrZSB0aGUgcGFyZW50IGVsZW1lbnQsIHRvXG4gICAqIGVuc3VyZSB0aGF0IHdlJ3JlIG5vdCBlbmRpbmcgdXAgd2l0aCBhIGNvbW1lbnQuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGhvc3QoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiAhIXRoaXMudGVtcGxhdGVSZWZcbiAgICAgID8gdGhpcy50ZW1wbGF0ZVJlZi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudFxuICAgICAgOiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==