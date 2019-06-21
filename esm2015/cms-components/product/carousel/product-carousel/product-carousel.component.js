/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { CmsComponentData } from '../../../../cms-structure/page/model/cms-component-data';
import { ProductCarouselService } from '../product-carousel.service';
export class ProductCarouselComponent {
    /**
     * @param {?} component
     * @param {?} service
     */
    constructor(component, service) {
        this.component = component;
        this.service = service;
        this.title$ = this.component.data$.pipe(map((/**
         * @param {?} data
         * @return {?}
         */
        data => data.title)));
        this.items$ = this.component.data$.pipe(filter(Boolean), map((/**
         * @param {?} data
         * @return {?}
         */
        data => data.productCodes.split(' '))), map((/**
         * @param {?} codes
         * @return {?}
         */
        codes => codes.map((/**
         * @param {?} code
         * @return {?}
         */
        code => this.service.loadProduct(code))))), switchMap((/**
         * @param {?} products$
         * @return {?}
         */
        (products$) => combineLatest(products$))));
    }
}
ProductCarouselComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-carousel',
                template: "<cx-carousel [items]=\"items$ | async\" [title]=\"title$ | async\"> </cx-carousel>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
ProductCarouselComponent.ctorParameters = () => [
    { type: CmsComponentData },
    { type: ProductCarouselService }
];
if (false) {
    /** @type {?} */
    ProductCarouselComponent.prototype.title$;
    /** @type {?} */
    ProductCarouselComponent.prototype.items$;
    /**
     * @type {?}
     * @protected
     */
    ProductCarouselComponent.prototype.component;
    /**
     * @type {?}
     * @protected
     */
    ProductCarouselComponent.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jYXJvdXNlbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L2Nhcm91c2VsL3Byb2R1Y3QtY2Fyb3VzZWwvcHJvZHVjdC1jYXJvdXNlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkUsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUUzRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQU9yRSxNQUFNLE9BQU8sd0JBQXdCOzs7OztJQWNuQyxZQUNZLFNBQXdELEVBQ3hELE9BQStCO1FBRC9CLGNBQVMsR0FBVCxTQUFTLENBQStDO1FBQ3hELFlBQU8sR0FBUCxPQUFPLENBQXdCO1FBZjNDLFdBQU0sR0FBdUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwRCxHQUFHOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFDLENBQ3hCLENBQUM7UUFFRixXQUFNLEdBQStCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDNUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLEdBQUc7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFDLEVBQ3pDLEdBQUc7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBQyxFQUFDLEVBQy9ELFNBQVM7Ozs7UUFBQyxDQUFDLFNBQXFDLEVBQUUsRUFBRSxDQUNsRCxhQUFhLENBQUMsU0FBUyxDQUFDLEVBQ3pCLENBQ0YsQ0FBQztJQUtDLENBQUM7OztZQXRCTCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsZ0dBQWdEO2dCQUNoRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQVJRLGdCQUFnQjtZQUVoQixzQkFBc0I7Ozs7SUFRN0IsMENBRUU7O0lBRUYsMENBT0U7Ozs7O0lBR0EsNkNBQWtFOzs7OztJQUNsRSwyQ0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNQcm9kdWN0Q2Fyb3VzZWxDb21wb25lbnQgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcbmltcG9ydCB7IENhcm91c2VsSXRlbSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2Nhcm91c2VsL2Nhcm91c2VsLm1vZGVsJztcbmltcG9ydCB7IFByb2R1Y3RDYXJvdXNlbFNlcnZpY2UgfSBmcm9tICcuLi9wcm9kdWN0LWNhcm91c2VsLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wcm9kdWN0LWNhcm91c2VsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtY2Fyb3VzZWwuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdENhcm91c2VsQ29tcG9uZW50IHtcbiAgdGl0bGUkOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLmNvbXBvbmVudC5kYXRhJC5waXBlKFxuICAgIG1hcChkYXRhID0+IGRhdGEudGl0bGUpXG4gICk7XG5cbiAgaXRlbXMkOiBPYnNlcnZhYmxlPENhcm91c2VsSXRlbVtdPiA9IHRoaXMuY29tcG9uZW50LmRhdGEkLnBpcGUoXG4gICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgIG1hcChkYXRhID0+IGRhdGEucHJvZHVjdENvZGVzLnNwbGl0KCcgJykpLFxuICAgIG1hcChjb2RlcyA9PiBjb2Rlcy5tYXAoY29kZSA9PiB0aGlzLnNlcnZpY2UubG9hZFByb2R1Y3QoY29kZSkpKSxcbiAgICBzd2l0Y2hNYXAoKHByb2R1Y3RzJDogT2JzZXJ2YWJsZTxDYXJvdXNlbEl0ZW0+W10pID0+XG4gICAgICBjb21iaW5lTGF0ZXN0KHByb2R1Y3RzJClcbiAgICApXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNvbXBvbmVudDogQ21zQ29tcG9uZW50RGF0YTxDbXNQcm9kdWN0Q2Fyb3VzZWxDb21wb25lbnQ+LFxuICAgIHByb3RlY3RlZCBzZXJ2aWNlOiBQcm9kdWN0Q2Fyb3VzZWxTZXJ2aWNlXG4gICkge31cbn1cbiJdfQ==