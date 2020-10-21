import { ChangeDetectorRef, Directive, ElementRef, HostBinding, Input, Optional, TemplateRef, } from '@angular/core';
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
    constructor(pageLayoutService, elementRef, templateRef, cd) {
        this.pageLayoutService = pageLayoutService;
        this.elementRef = elementRef;
        this.templateRef = templateRef;
        this.cd = cd;
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
     * Adds the page template as a style class to the given element. If any
     * page template was added before, we clean it up.
     */
    addStyleClass(el, template) {
        var _a;
        if (this.currentTemplate) {
            (_a = el.classList) === null || _a === void 0 ? void 0 : _a.remove(this.currentTemplate);
            this.cd.markForCheck();
        }
        if (template) {
            this.currentTemplate = template;
            el.classList.add(this.currentTemplate);
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
    cxPageTemplateStyle: [{ type: Input }],
    templateClass: [{ type: HostBinding, args: ['class',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS10ZW1wbGF0ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtc3RydWN0dXJlL3BhZ2UvcGFnZS1sYXlvdXQvcGFnZS10ZW1wbGF0ZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxLQUFLLEVBR0wsUUFBUSxFQUNSLFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQWMsRUFBRSxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F1Qkc7QUFJSCxNQUFNLE9BQU8scUJBQXFCO0lBcUJoQyxZQUNZLGlCQUFvQyxFQUNwQyxVQUFzQixFQUNWLFdBQXFDLEVBQ2pELEVBQXFCO1FBSHJCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNWLGdCQUFXLEdBQVgsV0FBVyxDQUEwQjtRQUNqRCxPQUFFLEdBQUYsRUFBRSxDQUFtQjtJQUM5QixDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVE7YUFDOUIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7YUFDNUIsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQsSUFBYyxRQUFRO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQjtZQUM3QixDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztZQUM5QixDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQztJQUMzQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ08sYUFBYSxDQUFDLEVBQWUsRUFBRSxRQUFnQjs7UUFDdkQsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLE1BQUEsRUFBRSxDQUFDLFNBQVMsMENBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDM0MsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN4QjtRQUNELElBQUksUUFBUSxFQUFFO1lBQ1osSUFBSSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUM7WUFDaEMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxJQUFjLElBQUk7UUFDaEIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFDdkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxhQUFhO1lBQ3pELENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztJQUNwQyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7O1lBekVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2FBQ2xDOzs7WUE1QlEsaUJBQWlCO1lBVnhCLFVBQVU7WUFNVixXQUFXLHVCQXlEUixRQUFRO1lBakVYLGlCQUFpQjs7O2tDQWlEaEIsS0FBSzs0QkFFTCxXQUFXLFNBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBUZW1wbGF0ZVJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRTZXJ2aWNlIH0gZnJvbSAnLi9wYWdlLWxheW91dC5zZXJ2aWNlJztcblxuLyoqXG4gKiBEaXJlY3RpdmUgdGhhdCBBZGRzIGEgc3R5bGUgY2xhc3MgdG8gdGhlIGhvc3QgZWxlbWVudCBiYXNlZCBvbiB0aGUgY21zIHBhZ2VcbiAqIHRlbXBsYXRlLiBUaGUgQ01TIHBhZ2UgdGVtcGxhdGUgaXMgZHJpdmVuIGJ5IHRoZSBDTVMgc3RydWN0dXJlLCB3aGljaCBpcyBjb25maWd1cmFibGVcbiAqIGluIHRoZSBiYWNrZW5kLlxuICpcbiAqIFRoZSBzdHlsZSBjbGFzcyBpcyBhZGRlZCB0byB0aGUgaG9zdCBlbGVtZW50IG9mIHRoZSBkaXJlY3RpdmUuIFRoZSBob3N0IGVsZW1lbnQgaXMgcmVzb2x2ZWRcbiAqIGZyb20gdGhlIGBlbGVtZW50UmVmYCwgb3IsIGluIGNhc2UgdGhlIGRpcmVjdGl2ZSBpcyB1c2VkIGluIGFuIGBuZy10ZW1wbGF0ZWAsIGJ5IHRoZVxuICogYFRlbXBsYXRlUmVmYC5cbiAqXG4gKiBBbiBleGFtcGxlIG9mIHRoZSB1c2FnZSBpcyBnaXZlbiBiZWxvdzpcbiAqXG4gKiBgYGBodG1sXG4gKiA8Y3gtc3RvcmVmcm9udCBjbGFzcz1cIkxhbmRpbmdQYWdlVGVtcGxhdGVcIj5cbiAqICAgPG5nLXRlbXBsYXRlIGN4UGFnZVRlbXBsYXRlU3R5bGU+Li4uPC9uZy10ZW1wbGF0ZT5cbiAqIDxjeC1zdG9yZWZyb250PlxuICogYGBgXG4gKlxuICogVGhlIHN0eWxlIGNsYXNzIGNhbiBhbHNvIGJlIHByb3ZpZGVkIGJ5IGFuIGlucHV0OlxuICpcbiAqIGBgYGh0bWxcbiAqIDxuZy10ZW1wbGF0ZSBbY3hQYWdlVGVtcGxhdGVTdHlsZV09XCJwYWdlVGVtcGxhdGVOYW1lXCI+XG4gKiBgYGBcbiAqXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjeFBhZ2VUZW1wbGF0ZVN0eWxlXScsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VUZW1wbGF0ZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIEFkZHMgYSBzdHlsZSBjbGFzcyB0byB0aGUgaG9zdCBlbGVtZW50IGJhc2VkIG9uIHRoZSBjbXMgcGFnZSB0ZW1wbGF0ZSwgdW5sZXNzXG4gICAqIHRoZSBjbGFzcyBpcyBnaXZlbiBhcyBhbiBpbnB1dC5cbiAgICpcbiAgICogVGhlIGhvc3QgZWxlbWVudCBpcyBlaXRoZXIgdGhlIGFjdHVhbCBob3N0LCBvciB0aGUgcGFyZW50IGVsZW1lbnQgaW4gY2FzZSB0aGlzXG4gICAqIGlzIHVzZWQgaW5zaWRlIGFuIGBuZy10ZW1wbGF0ZWAuXG4gICAqL1xuICBASW5wdXQoKSBjeFBhZ2VUZW1wbGF0ZVN0eWxlOiBzdHJpbmc7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIHRlbXBsYXRlQ2xhc3M6IHN0cmluZztcblxuICAvLyBNYWludGFpbnMgdGhlIHBhZ2UgdGVtcGxhdGUgc3Vic2NyaXB0aW9uXG4gIHByb3RlY3RlZCBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAvKipcbiAgICogSG9sZHMgdGhlIGN1cnJlbnQgcGFnZSB0ZW1wbGF0ZSwgc28gd2UgY2FuIHJlbW92ZSBwcmV2aW91cyBwYWdlIHRlbXBsYXRlc1xuICAgKiBmcm9tIHRoZSBlbGVtZW50IGNsYXNzTGlzdC5cbiAgICovXG4gIHByb3RlY3RlZCBjdXJyZW50VGVtcGxhdGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcGFnZUxheW91dFNlcnZpY2U6IFBhZ2VMYXlvdXRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIEBPcHRpb25hbCgpIHByb3RlY3RlZCB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByb3RlY3RlZCBjZDogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy50ZW1wbGF0ZVxuICAgICAgLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSlcbiAgICAgIC5zdWJzY3JpYmUoKHRlbXBsYXRlKSA9PiB0aGlzLmFkZFN0eWxlQ2xhc3ModGhpcy5ob3N0LCB0ZW1wbGF0ZSkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCB0ZW1wbGF0ZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmN4UGFnZVRlbXBsYXRlU3R5bGVcbiAgICAgID8gb2YodGhpcy5jeFBhZ2VUZW1wbGF0ZVN0eWxlKVxuICAgICAgOiB0aGlzLnBhZ2VMYXlvdXRTZXJ2aWNlLnRlbXBsYXRlTmFtZSQ7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0aGUgcGFnZSB0ZW1wbGF0ZSBhcyBhIHN0eWxlIGNsYXNzIHRvIHRoZSBnaXZlbiBlbGVtZW50LiBJZiBhbnlcbiAgICogcGFnZSB0ZW1wbGF0ZSB3YXMgYWRkZWQgYmVmb3JlLCB3ZSBjbGVhbiBpdCB1cC5cbiAgICovXG4gIHByb3RlY3RlZCBhZGRTdHlsZUNsYXNzKGVsOiBIVE1MRWxlbWVudCwgdGVtcGxhdGU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmN1cnJlbnRUZW1wbGF0ZSkge1xuICAgICAgZWwuY2xhc3NMaXN0Py5yZW1vdmUodGhpcy5jdXJyZW50VGVtcGxhdGUpO1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gICAgaWYgKHRlbXBsYXRlKSB7XG4gICAgICB0aGlzLmN1cnJlbnRUZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgICAgZWwuY2xhc3NMaXN0LmFkZCh0aGlzLmN1cnJlbnRUZW1wbGF0ZSk7XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBob3N0IGVsZW1lbnQgKGBIVE1MRWxlbWVudGApLlxuICAgKlxuICAgKiBJZiB0aGUgZGlyZWN0aXZlIGlzIHVzZWQgb24gYW4gYG5nLXRlbXBsYXRlYCwgd2UgdGFrZSB0aGUgcGFyZW50IGVsZW1lbnQsXG4gICAqIHRvIGVuc3VyZSB0aGF0IHdlJ3JlIG5vdCBlbmRpbmcgdXAgd2l0aCBhIGNvbW1lbnQuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IGhvc3QoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiAhIXRoaXMudGVtcGxhdGVSZWZcbiAgICAgID8gdGhpcy50ZW1wbGF0ZVJlZi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudFxuICAgICAgOiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==