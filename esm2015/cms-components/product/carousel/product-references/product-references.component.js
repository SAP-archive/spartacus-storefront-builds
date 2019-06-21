/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { CmsComponentData } from '../../../../cms-structure/page/model/cms-component-data';
import { CurrentProductService } from '../../current-product.service';
import { ProductCarouselService } from '../product-carousel.service';
export class ProductReferencesComponent {
    /**
     * @param {?} component
     * @param {?} service
     * @param {?} current
     */
    constructor(component, service, current) {
        this.component = component;
        this.service = service;
        this.current = current;
        this.title$ = this.component.data$.pipe(map((/**
         * @param {?} d
         * @return {?}
         */
        d => d.title)));
        this.items$ = combineLatest([this.productCode$, this.component.data$]).pipe(switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ([code, data]) => this.service.getProductReferences(code, data.productReferenceTypes, Boolean(JSON.parse(data.displayProductTitles)), Boolean(JSON.parse(data.displayProductPrices))))));
    }
    /**
     * @return {?}
     */
    get productCode$() {
        return this.current.getProduct().pipe(filter(Boolean), map((/**
         * @param {?} p
         * @return {?}
         */
        p => p.code)));
    }
}
ProductReferencesComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-references',
                template: "<cx-carousel [title]=\"title$ | async\" [items]=\"items$ | async\"> </cx-carousel>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
ProductReferencesComponent.ctorParameters = () => [
    { type: CmsComponentData },
    { type: ProductCarouselService },
    { type: CurrentProductService }
];
if (false) {
    /** @type {?} */
    ProductReferencesComponent.prototype.title$;
    /** @type {?} */
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
    ProductReferencesComponent.prototype.service;
    /**
     * @type {?}
     * @protected
     */
    ProductReferencesComponent.prototype.current;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvY2Fyb3VzZWwvcHJvZHVjdC1yZWZlcmVuY2VzL3Byb2R1Y3QtcmVmZXJlbmNlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkUsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUMzRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQU9yRSxNQUFNLE9BQU8sMEJBQTBCOzs7Ozs7SUFjckMsWUFDWSxTQUEwRCxFQUMxRCxPQUErQixFQUMvQixPQUE4QjtRQUY5QixjQUFTLEdBQVQsU0FBUyxDQUFpRDtRQUMxRCxZQUFPLEdBQVAsT0FBTyxDQUF3QjtRQUMvQixZQUFPLEdBQVAsT0FBTyxDQUF1QjtRQWhCMUMsV0FBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztRQUV0RCxXQUFNLEdBQUcsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUNwRSxTQUFTOzs7O1FBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQy9CLElBQUksRUFDSixJQUFJLENBQUMscUJBQXFCLEVBQzFCLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEVBQzlDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQy9DLEVBQ0YsQ0FDRixDQUFDO0lBTUMsQ0FBQzs7OztJQUVKLElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQ25DLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFDLENBQ2pCLENBQUM7SUFDSixDQUFDOzs7WUE5QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLGdHQUFrRDtnQkFDbEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFSUSxnQkFBZ0I7WUFFaEIsc0JBQXNCO1lBRHRCLHFCQUFxQjs7OztJQVM1Qiw0Q0FBc0Q7O0lBRXRELDRDQVNFOzs7OztJQUdBLCtDQUFvRTs7Ozs7SUFDcEUsNkNBQXlDOzs7OztJQUN6Qyw2Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNQcm9kdWN0UmVmZXJlbmNlc0NvbXBvbmVudCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9jbXMtY29tcG9uZW50LWRhdGEnO1xuaW1wb3J0IHsgQ3VycmVudFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY3VycmVudC1wcm9kdWN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdENhcm91c2VsU2VydmljZSB9IGZyb20gJy4uL3Byb2R1Y3QtY2Fyb3VzZWwuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXByb2R1Y3QtcmVmZXJlbmNlcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LXJlZmVyZW5jZXMuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFJlZmVyZW5jZXNDb21wb25lbnQge1xuICB0aXRsZSQgPSB0aGlzLmNvbXBvbmVudC5kYXRhJC5waXBlKG1hcChkID0+IGQudGl0bGUpKTtcblxuICBpdGVtcyQgPSBjb21iaW5lTGF0ZXN0KFt0aGlzLnByb2R1Y3RDb2RlJCwgdGhpcy5jb21wb25lbnQuZGF0YSRdKS5waXBlKFxuICAgIHN3aXRjaE1hcCgoW2NvZGUsIGRhdGFdKSA9PlxuICAgICAgdGhpcy5zZXJ2aWNlLmdldFByb2R1Y3RSZWZlcmVuY2VzKFxuICAgICAgICBjb2RlLFxuICAgICAgICBkYXRhLnByb2R1Y3RSZWZlcmVuY2VUeXBlcyxcbiAgICAgICAgQm9vbGVhbihKU09OLnBhcnNlKGRhdGEuZGlzcGxheVByb2R1Y3RUaXRsZXMpKSxcbiAgICAgICAgQm9vbGVhbihKU09OLnBhcnNlKGRhdGEuZGlzcGxheVByb2R1Y3RQcmljZXMpKVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50OiBDbXNDb21wb25lbnREYXRhPENtc1Byb2R1Y3RSZWZlcmVuY2VzQ29tcG9uZW50PixcbiAgICBwcm90ZWN0ZWQgc2VydmljZTogUHJvZHVjdENhcm91c2VsU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY3VycmVudDogQ3VycmVudFByb2R1Y3RTZXJ2aWNlXG4gICkge31cblxuICBnZXQgcHJvZHVjdENvZGUkKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudC5nZXRQcm9kdWN0KCkucGlwZShcbiAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgIG1hcChwID0+IHAuY29kZSlcbiAgICApO1xuICB9XG59XG4iXX0=