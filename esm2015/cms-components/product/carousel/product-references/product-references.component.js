/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductReferenceService, } from '@spartacus/core';
import { combineLatest, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { CmsComponentData } from '../../../../cms-structure/page/model/cms-component-data';
import { CurrentProductService } from '../../current-product.service';
export class ProductReferencesComponent {
    /**
     * @param {?} component
     * @param {?} current
     * @param {?} referenceService
     */
    constructor(component, current, referenceService) {
        this.component = component;
        this.current = current;
        this.referenceService = referenceService;
        /**
         * returns an Obervable string for the title
         */
        this.title$ = this.component.data$.pipe(map((/**
         * @param {?} d
         * @return {?}
         */
        d => d.title)));
        this.currentProductCode$ = this.current.getProduct().pipe(filter(Boolean), map((/**
         * @param {?} p
         * @return {?}
         */
        (p) => p.code)));
        /**
         * Obervable with an Array of Observables. This is done, so that
         * the component UI could consider to lazy load the UI components when they're
         * in the viewpoint.
         */
        this.items$ = combineLatest([
            this.currentProductCode$,
            this.component.data$,
        ]).pipe(switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ([code, data]) => this.getProductReferences(code, data.productReferenceTypes))));
    }
    /**
     * @private
     * @param {?} code
     * @param {?} referenceType
     * @return {?}
     */
    getProductReferences(code, referenceType) {
        return this.referenceService.get(code, referenceType).pipe(filter(Boolean), map((/**
         * @param {?} refs
         * @return {?}
         */
        (refs) => refs.map((/**
         * @param {?} ref
         * @return {?}
         */
        ref => of(ref.target))))));
    }
}
ProductReferencesComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-references',
                template: "<cx-carousel\n  [title]=\"title$ | async\"\n  [items]=\"items$ | async\"\n  [template]=\"carouselItem\"\n>\n</cx-carousel>\n\n<ng-template #carouselItem let-item=\"item\">\n  <a tabindex=\"0\" [routerLink]=\"{ cxRoute: 'product', params: item } | cxUrl\">\n    <cx-media\n      *ngIf=\"item.images?.PRIMARY\"\n      [container]=\"item.images.PRIMARY\"\n      format=\"product\"\n    >\n    </cx-media>\n    <h4>{{ item.name }}</h4>\n    <div class=\"price\">{{ item.price?.formattedValue }}</div>\n  </a>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
ProductReferencesComponent.ctorParameters = () => [
    { type: CmsComponentData },
    { type: CurrentProductService },
    { type: ProductReferenceService }
];
if (false) {
    /**
     * returns an Obervable string for the title
     * @type {?}
     */
    ProductReferencesComponent.prototype.title$;
    /**
     * @type {?}
     * @private
     */
    ProductReferencesComponent.prototype.currentProductCode$;
    /**
     * Obervable with an Array of Observables. This is done, so that
     * the component UI could consider to lazy load the UI components when they're
     * in the viewpoint.
     * @type {?}
     */
    ProductReferencesComponent.prototype.items$;
    /**
     * @type {?}
     * @protected
     */
    ProductReferencesComponent.prototype.component;
    /**
     * @type {?}
     * @protected
     */
    ProductReferencesComponent.prototype.current;
    /**
     * @type {?}
     * @protected
     */
    ProductReferencesComponent.prototype.referenceService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvY2Fyb3VzZWwvcHJvZHVjdC1yZWZlcmVuY2VzL3Byb2R1Y3QtcmVmZXJlbmNlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUlMLHVCQUF1QixHQUN4QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBT3RFLE1BQU0sT0FBTywwQkFBMEI7Ozs7OztJQTJCckMsWUFDWSxTQUEwRCxFQUMxRCxPQUE4QixFQUM5QixnQkFBeUM7UUFGekMsY0FBUyxHQUFULFNBQVMsQ0FBaUQ7UUFDMUQsWUFBTyxHQUFQLE9BQU8sQ0FBdUI7UUFDOUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUF5Qjs7OztRQTFCckQsV0FBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztRQUU5Qyx3QkFBbUIsR0FFdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQ2hDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixHQUFHOzs7O1FBQUMsQ0FBQyxDQUFVLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUMsQ0FDNUIsQ0FBQzs7Ozs7O1FBT0YsV0FBTSxHQUFzQyxhQUFhLENBQUM7WUFDeEQsSUFBSSxDQUFDLG1CQUFtQjtZQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUs7U0FDckIsQ0FBQyxDQUFDLElBQUksQ0FDTCxTQUFTOzs7O1FBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQ3pCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEVBQzVELENBQ0YsQ0FBQztJQU1DLENBQUM7Ozs7Ozs7SUFFSSxvQkFBb0IsQ0FDMUIsSUFBWSxFQUNaLGFBQXFCO1FBRXJCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUN4RCxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2YsR0FBRzs7OztRQUFDLENBQUMsSUFBd0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBQyxDQUNuRSxDQUFDO0lBQ0osQ0FBQzs7O1lBOUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxzaEJBQWtEO2dCQUNsRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQVBRLGdCQUFnQjtZQUNoQixxQkFBcUI7WUFMNUIsdUJBQXVCOzs7Ozs7O0lBZ0J2Qiw0Q0FBc0Q7Ozs7O0lBRXRELHlEQUtFOzs7Ozs7O0lBT0YsNENBT0U7Ozs7O0lBR0EsK0NBQW9FOzs7OztJQUNwRSw2Q0FBd0M7Ozs7O0lBQ3hDLHNEQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENtc1Byb2R1Y3RSZWZlcmVuY2VzQ29tcG9uZW50LFxuICBQcm9kdWN0LFxuICBQcm9kdWN0UmVmZXJlbmNlLFxuICBQcm9kdWN0UmVmZXJlbmNlU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9jbXMtY29tcG9uZW50LWRhdGEnO1xuaW1wb3J0IHsgQ3VycmVudFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY3VycmVudC1wcm9kdWN0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wcm9kdWN0LXJlZmVyZW5jZXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1yZWZlcmVuY2VzLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RSZWZlcmVuY2VzQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIHJldHVybnMgYW4gT2JlcnZhYmxlIHN0cmluZyBmb3IgdGhlIHRpdGxlXG4gICAqL1xuICB0aXRsZSQgPSB0aGlzLmNvbXBvbmVudC5kYXRhJC5waXBlKG1hcChkID0+IGQudGl0bGUpKTtcblxuICBwcml2YXRlIGN1cnJlbnRQcm9kdWN0Q29kZSQ6IE9ic2VydmFibGU8XG4gICAgc3RyaW5nXG4gID4gPSB0aGlzLmN1cnJlbnQuZ2V0UHJvZHVjdCgpLnBpcGUoXG4gICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgIG1hcCgocDogUHJvZHVjdCkgPT4gcC5jb2RlKVxuICApO1xuXG4gIC8qKlxuICAgKiBPYmVydmFibGUgd2l0aCBhbiBBcnJheSBvZiBPYnNlcnZhYmxlcy4gVGhpcyBpcyBkb25lLCBzbyB0aGF0XG4gICAqIHRoZSBjb21wb25lbnQgVUkgY291bGQgY29uc2lkZXIgdG8gbGF6eSBsb2FkIHRoZSBVSSBjb21wb25lbnRzIHdoZW4gdGhleSdyZVxuICAgKiBpbiB0aGUgdmlld3BvaW50LlxuICAgKi9cbiAgaXRlbXMkOiBPYnNlcnZhYmxlPE9ic2VydmFibGU8UHJvZHVjdD5bXT4gPSBjb21iaW5lTGF0ZXN0KFtcbiAgICB0aGlzLmN1cnJlbnRQcm9kdWN0Q29kZSQsXG4gICAgdGhpcy5jb21wb25lbnQuZGF0YSQsXG4gIF0pLnBpcGUoXG4gICAgc3dpdGNoTWFwKChbY29kZSwgZGF0YV0pID0+XG4gICAgICB0aGlzLmdldFByb2R1Y3RSZWZlcmVuY2VzKGNvZGUsIGRhdGEucHJvZHVjdFJlZmVyZW5jZVR5cGVzKVxuICAgIClcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50OiBDbXNDb21wb25lbnREYXRhPENtc1Byb2R1Y3RSZWZlcmVuY2VzQ29tcG9uZW50PixcbiAgICBwcm90ZWN0ZWQgY3VycmVudDogQ3VycmVudFByb2R1Y3RTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByZWZlcmVuY2VTZXJ2aWNlOiBQcm9kdWN0UmVmZXJlbmNlU2VydmljZVxuICApIHt9XG5cbiAgcHJpdmF0ZSBnZXRQcm9kdWN0UmVmZXJlbmNlcyhcbiAgICBjb2RlOiBzdHJpbmcsXG4gICAgcmVmZXJlbmNlVHlwZTogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8T2JzZXJ2YWJsZTxQcm9kdWN0PltdPiB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlU2VydmljZS5nZXQoY29kZSwgcmVmZXJlbmNlVHlwZSkucGlwZShcbiAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgIG1hcCgocmVmczogUHJvZHVjdFJlZmVyZW5jZVtdKSA9PiByZWZzLm1hcChyZWYgPT4gb2YocmVmLnRhcmdldCkpKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==