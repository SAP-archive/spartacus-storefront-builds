import { __decorate } from "tslib";
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
var PageTemplateStyleService = /** @class */ (function () {
    function PageTemplateStyleService(pageLayoutService) {
        this.pageLayoutService = pageLayoutService;
        /**
         * Keeps the subscriptions for this service so that we can unsubscribe on destroy.
         */
        this.subscription = new Subscription();
    }
    PageTemplateStyleService.prototype.initialize = function (ref) {
        var _this = this;
        var el = ref.location.nativeElement;
        this.subscription.add(this.pageLayoutService.templateName$
            .pipe(distinctUntilChanged())
            .subscribe(function (template) { return _this.addStyleClass(el, template); }));
    };
    /**
     * Adds the page template as a style class to the given element. If any page template
     * was added before, we clean it up.
     */
    PageTemplateStyleService.prototype.addStyleClass = function (el, template) {
        var _a;
        // clean up previous template class binding
        if (this.currentTemplate) {
            (_a = el.classList) === null || _a === void 0 ? void 0 : _a.remove(this.currentTemplate);
        }
        if (template) {
            this.currentTemplate = template;
            el.classList.add(this.currentTemplate);
        }
    };
    PageTemplateStyleService.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    PageTemplateStyleService.ctorParameters = function () { return [
        { type: PageLayoutService }
    ]; };
    PageTemplateStyleService.ɵprov = i0.ɵɵdefineInjectable({ factory: function PageTemplateStyleService_Factory() { return new PageTemplateStyleService(i0.ɵɵinject(i1.PageLayoutService)); }, token: PageTemplateStyleService, providedIn: "root" });
    PageTemplateStyleService = __decorate([
        Injectable({ providedIn: 'root' })
    ], PageTemplateStyleService);
    return PageTemplateStyleService;
}());
export { PageTemplateStyleService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS10ZW1wbGF0ZS1zdHlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9wYWdlL3BhZ2UtbGF5b3V0L3BhZ2UtdGVtcGxhdGUtc3R5bGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFnQixVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7O0FBRTFEOzs7Ozs7Ozs7R0FTRztBQUVIO0lBV0Usa0NBQXNCLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBVjFEOztXQUVHO1FBQ08saUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBT2lCLENBQUM7SUFFOUQsNkNBQVUsR0FBVixVQUFXLEdBQXNCO1FBQWpDLGlCQVFDO1FBUEMsSUFBTSxFQUFFLEdBQWdCLEdBQUcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO1FBRW5ELElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUNuQixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYTthQUNqQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQzthQUM1QixTQUFTLENBQUMsVUFBQyxRQUFRLElBQUssT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQyxDQUM3RCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7T0FHRztJQUNPLGdEQUFhLEdBQXZCLFVBQXdCLEVBQWUsRUFBRSxRQUFnQjs7UUFDdkQsMkNBQTJDO1FBQzNDLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixNQUFBLEVBQUUsQ0FBQyxTQUFTLDBDQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO1NBQzVDO1FBQ0QsSUFBSSxRQUFRLEVBQUU7WUFDWixJQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQztZQUNoQyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDeEM7SUFDSCxDQUFDO0lBRUQsOENBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7Z0JBN0J3QyxpQkFBaUI7OztJQVgvQyx3QkFBd0I7UUFEcEMsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO09BQ3RCLHdCQUF3QixDQXlDcEM7bUNBekREO0NBeURDLEFBekNELElBeUNDO1NBekNZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudFJlZiwgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUGFnZUxheW91dFNlcnZpY2UgfSBmcm9tICcuL3BhZ2UtbGF5b3V0LnNlcnZpY2UnO1xuXG4vKipcbiAqIFNlcnZpY2UgdGhhdCBhZGRzIHRoZSBwYWdlIHRlbXBsYXRlIGFzIGEgY2xhc3NOYW1lIHRvIHRoZSBhcHBsaWNhdGlvbiByb290IGVsZW1lbnQuIElmIHRoZSByb290XG4gKiBlbGVtZW50IGlzIGN4LXN0b3JlZnJvbnQsIHRoZSByZXN1bHRpbmcgRE9NIHdvdWxkIGxvb2sgbGlrZTpcbiAqXG4gKiBgYGBodG1sXG4gKiA8Y3gtc3RvcmVmcm9udCBjbGFzcz1cIkxhbmRpbmdQYWdlVGVtcGxhdGVcIj5cbiAqICBbLi4uXVxuICogPGN4LXN0b3JlZnJvbnQ+XG4gKiBgYGBcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBQYWdlVGVtcGxhdGVTdHlsZVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogS2VlcHMgdGhlIHN1YnNjcmlwdGlvbnMgZm9yIHRoaXMgc2VydmljZSBzbyB0aGF0IHdlIGNhbiB1bnN1YnNjcmliZSBvbiBkZXN0cm95LlxuICAgKi9cbiAgcHJvdGVjdGVkIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICAvKipcbiAgICogSG9sZHMgdGhlIGN1cnJlbnQgcGFnZSB0ZW1wbGF0ZSwgc28gd2UgY2FuIHJlbW92ZSBwcmV2aW91cyBwYWdlIHRlbXBsYXRlcyBmcm9tIHRoZSBlbGVtZW50IGNsYXNzTGlzdC5cbiAgICovXG4gIHByb3RlY3RlZCBjdXJyZW50VGVtcGxhdGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcGFnZUxheW91dFNlcnZpY2U6IFBhZ2VMYXlvdXRTZXJ2aWNlKSB7fVxuXG4gIGluaXRpYWxpemUocmVmOiBDb21wb25lbnRSZWY8YW55Pik6IHZvaWQge1xuICAgIGNvbnN0IGVsOiBIVE1MRWxlbWVudCA9IHJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50O1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5wYWdlTGF5b3V0U2VydmljZS50ZW1wbGF0ZU5hbWUkXG4gICAgICAgIC5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKHRlbXBsYXRlKSA9PiB0aGlzLmFkZFN0eWxlQ2xhc3MoZWwsIHRlbXBsYXRlKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIHBhZ2UgdGVtcGxhdGUgYXMgYSBzdHlsZSBjbGFzcyB0byB0aGUgZ2l2ZW4gZWxlbWVudC4gSWYgYW55IHBhZ2UgdGVtcGxhdGVcbiAgICogd2FzIGFkZGVkIGJlZm9yZSwgd2UgY2xlYW4gaXQgdXAuXG4gICAqL1xuICBwcm90ZWN0ZWQgYWRkU3R5bGVDbGFzcyhlbDogSFRNTEVsZW1lbnQsIHRlbXBsYXRlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAvLyBjbGVhbiB1cCBwcmV2aW91cyB0ZW1wbGF0ZSBjbGFzcyBiaW5kaW5nXG4gICAgaWYgKHRoaXMuY3VycmVudFRlbXBsYXRlKSB7XG4gICAgICBlbC5jbGFzc0xpc3Q/LnJlbW92ZSh0aGlzLmN1cnJlbnRUZW1wbGF0ZSk7XG4gICAgfVxuICAgIGlmICh0ZW1wbGF0ZSkge1xuICAgICAgdGhpcy5jdXJyZW50VGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQodGhpcy5jdXJyZW50VGVtcGxhdGUpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==