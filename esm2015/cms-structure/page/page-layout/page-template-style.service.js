import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { PageLayoutService } from './page-layout.service';
import * as i0 from "@angular/core";
import * as i1 from "./page-layout.service";
/**
 * Service that adds the page template as a className to the application root element. If the root
 * element is cx-storefront, the resulting DOM would look like:
 *
 * ```html
 * <cx-storefront class="LandingPageTemplate">
 *  [...]
 * <cx-storefront>
 * ```
 */
export class PageTemplateStyleService {
    constructor(pageLayoutService) {
        this.pageLayoutService = pageLayoutService;
        /**
         * Keeps the subscriptions for this service so that we can unsubscribe on destroy.
         */
        this.subscription = new Subscription();
    }
    initialize(ref) {
        const el = ref.location.nativeElement;
        this.subscription.add(this.pageLayoutService.templateName$
            .pipe(distinctUntilChanged())
            .subscribe((template) => this.addStyleClass(el, template)));
    }
    /**
     * Adds the page template as a style class to the given element. If any page template
     * was added before, we clean it up.
     */
    addStyleClass(el, template) {
        var _a;
        // clean up previous template class binding
        if (this.currentTemplate) {
            (_a = el.classList) === null || _a === void 0 ? void 0 : _a.remove(this.currentTemplate);
        }
        if (template) {
            this.currentTemplate = template;
            el.classList.add(this.currentTemplate);
        }
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
PageTemplateStyleService.ɵprov = i0.ɵɵdefineInjectable({ factory: function PageTemplateStyleService_Factory() { return new PageTemplateStyleService(i0.ɵɵinject(i1.PageLayoutService)); }, token: PageTemplateStyleService, providedIn: "root" });
PageTemplateStyleService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
PageTemplateStyleService.ctorParameters = () => [
    { type: PageLayoutService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS10ZW1wbGF0ZS1zdHlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLXN0cnVjdHVyZS9wYWdlL3BhZ2UtbGF5b3V0L3BhZ2UtdGVtcGxhdGUtc3R5bGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWdCLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7QUFFMUQ7Ozs7Ozs7OztHQVNHO0FBRUgsTUFBTSxPQUFPLHdCQUF3QjtJQVduQyxZQUFzQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQVYxRDs7V0FFRztRQUNPLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQU9pQixDQUFDO0lBRTlELFVBQVUsQ0FBQyxHQUFzQjtRQUMvQixNQUFNLEVBQUUsR0FBZ0IsR0FBRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUM7UUFFbkQsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQ25CLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhO2FBQ2pDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO2FBQzVCLFNBQVMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FDN0QsQ0FBQztJQUNKLENBQUM7SUFFRDs7O09BR0c7SUFDTyxhQUFhLENBQUMsRUFBZSxFQUFFLFFBQWdCOztRQUN2RCwyQ0FBMkM7UUFDM0MsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLE1BQUEsRUFBRSxDQUFDLFNBQVMsMENBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7U0FDNUM7UUFDRCxJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDO1lBQ2hDLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUN4QztJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7O1lBekNGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7OztZQVp6QixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRSZWYsIEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRTZXJ2aWNlIH0gZnJvbSAnLi9wYWdlLWxheW91dC5zZXJ2aWNlJztcblxuLyoqXG4gKiBTZXJ2aWNlIHRoYXQgYWRkcyB0aGUgcGFnZSB0ZW1wbGF0ZSBhcyBhIGNsYXNzTmFtZSB0byB0aGUgYXBwbGljYXRpb24gcm9vdCBlbGVtZW50LiBJZiB0aGUgcm9vdFxuICogZWxlbWVudCBpcyBjeC1zdG9yZWZyb250LCB0aGUgcmVzdWx0aW5nIERPTSB3b3VsZCBsb29rIGxpa2U6XG4gKlxuICogYGBgaHRtbFxuICogPGN4LXN0b3JlZnJvbnQgY2xhc3M9XCJMYW5kaW5nUGFnZVRlbXBsYXRlXCI+XG4gKiAgWy4uLl1cbiAqIDxjeC1zdG9yZWZyb250PlxuICogYGBgXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgUGFnZVRlbXBsYXRlU3R5bGVTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIEtlZXBzIHRoZSBzdWJzY3JpcHRpb25zIGZvciB0aGlzIHNlcnZpY2Ugc28gdGhhdCB3ZSBjYW4gdW5zdWJzY3JpYmUgb24gZGVzdHJveS5cbiAgICovXG4gIHByb3RlY3RlZCBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgLyoqXG4gICAqIEhvbGRzIHRoZSBjdXJyZW50IHBhZ2UgdGVtcGxhdGUsIHNvIHdlIGNhbiByZW1vdmUgcHJldmlvdXMgcGFnZSB0ZW1wbGF0ZXMgZnJvbSB0aGUgZWxlbWVudCBjbGFzc0xpc3QuXG4gICAqL1xuICBwcm90ZWN0ZWQgY3VycmVudFRlbXBsYXRlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHBhZ2VMYXlvdXRTZXJ2aWNlOiBQYWdlTGF5b3V0U2VydmljZSkge31cblxuICBpbml0aWFsaXplKHJlZjogQ29tcG9uZW50UmVmPGFueT4pOiB2b2lkIHtcbiAgICBjb25zdCBlbDogSFRNTEVsZW1lbnQgPSByZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudDtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMucGFnZUxheW91dFNlcnZpY2UudGVtcGxhdGVOYW1lJFxuICAgICAgICAucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKVxuICAgICAgICAuc3Vic2NyaWJlKCh0ZW1wbGF0ZSkgPT4gdGhpcy5hZGRTdHlsZUNsYXNzKGVsLCB0ZW1wbGF0ZSkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSBwYWdlIHRlbXBsYXRlIGFzIGEgc3R5bGUgY2xhc3MgdG8gdGhlIGdpdmVuIGVsZW1lbnQuIElmIGFueSBwYWdlIHRlbXBsYXRlXG4gICAqIHdhcyBhZGRlZCBiZWZvcmUsIHdlIGNsZWFuIGl0IHVwLlxuICAgKi9cbiAgcHJvdGVjdGVkIGFkZFN0eWxlQ2xhc3MoZWw6IEhUTUxFbGVtZW50LCB0ZW1wbGF0ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgLy8gY2xlYW4gdXAgcHJldmlvdXMgdGVtcGxhdGUgY2xhc3MgYmluZGluZ1xuICAgIGlmICh0aGlzLmN1cnJlbnRUZW1wbGF0ZSkge1xuICAgICAgZWwuY2xhc3NMaXN0Py5yZW1vdmUodGhpcy5jdXJyZW50VGVtcGxhdGUpO1xuICAgIH1cbiAgICBpZiAodGVtcGxhdGUpIHtcbiAgICAgIHRoaXMuY3VycmVudFRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKHRoaXMuY3VycmVudFRlbXBsYXRlKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=