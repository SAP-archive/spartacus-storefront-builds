import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CmsProductCarouselComponent as model, Product, ProductScope, ProductService, } from '@spartacus/core';
import { filter, map } from 'rxjs/operators';
import { CmsComponentData } from '../../../../cms-structure/page/model/cms-component-data';
var ProductCarouselComponent = /** @class */ (function () {
    function ProductCarouselComponent(componentData, productService) {
        var _this = this;
        this.componentData = componentData;
        this.productService = productService;
        this.PRODUCT_SCOPE = ProductScope.LIST;
        this.componentData$ = this.componentData.data$.pipe(filter(Boolean));
        /**
         * returns an Obervable string for the title.
         */
        this.title$ = this.componentData$.pipe(map(function (data) { return data.title; }));
        /**
         * Obervable that holds an Array of Observables. This is done, so that
         * the component UI could consider to lazy load the UI components when they're
         * in the viewpoint.
         */
        this.items$ = this.componentData$.pipe(map(function (data) { return data.productCodes.trim().split(' '); }), map(function (codes) {
            return codes.map(function (code) { return _this.productService.get(code, _this.PRODUCT_SCOPE); });
        }));
    }
    ProductCarouselComponent.ctorParameters = function () { return [
        { type: CmsComponentData },
        { type: ProductService }
    ]; };
    ProductCarouselComponent = __decorate([
        Component({
            selector: 'cx-product-carousel',
            template: "<cx-carousel\n  [items]=\"items$ | async\"\n  [title]=\"title$ | async\"\n  [template]=\"carouselItem\"\n  itemWidth=\"285px\"\n>\n</cx-carousel>\n\n<ng-template #carouselItem let-item=\"item\">\n  <a tabindex=\"0\" [routerLink]=\"{ cxRoute: 'product', params: item } | cxUrl\">\n    <cx-media\n      *ngIf=\"item.images?.PRIMARY\"\n      [container]=\"item.images.PRIMARY\"\n      format=\"product\"\n    >\n    </cx-media>\n    <h4>{{ item.name }}</h4>\n    <div class=\"price\">{{ item.price?.formattedValue }}</div>\n  </a>\n</ng-template>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ProductCarouselComponent);
    return ProductCarouselComponent;
}());
export { ProductCarouselComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jYXJvdXNlbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L2Nhcm91c2VsL3Byb2R1Y3QtY2Fyb3VzZWwvcHJvZHVjdC1jYXJvdXNlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUNMLDJCQUEyQixJQUFJLEtBQUssRUFDcEMsT0FBTyxFQUNQLFlBQVksRUFDWixjQUFjLEdBQ2YsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBTzNGO0lBMEJFLGtDQUNZLGFBQXNDLEVBQ3RDLGNBQThCO1FBRjFDLGlCQUdJO1FBRlEsa0JBQWEsR0FBYixhQUFhLENBQXlCO1FBQ3RDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQTNCdkIsa0JBQWEsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDO1FBRTdDLG1CQUFjLEdBQXNCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDdkUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUNoQixDQUFDO1FBRUY7O1dBRUc7UUFDSCxXQUFNLEdBQXVCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUNuRCxHQUFHLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxJQUFJLENBQUMsS0FBSyxFQUFWLENBQVUsQ0FBQyxDQUMxQixDQUFDO1FBRUY7Ozs7V0FJRztRQUNILFdBQU0sR0FBc0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQ2xFLEdBQUcsQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFuQyxDQUFtQyxDQUFDLEVBQ2xELEdBQUcsQ0FBQyxVQUFDLEtBQUs7WUFDUixPQUFBLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxFQUFqRCxDQUFpRCxDQUFDO1FBQXRFLENBQXNFLENBQ3ZFLENBQ0YsQ0FBQztJQUtDLENBQUM7O2dCQUZ1QixnQkFBZ0I7Z0JBQ2YsY0FBYzs7SUE1Qi9CLHdCQUF3QjtRQUxwQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLDZpQkFBZ0Q7WUFDaEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07U0FDaEQsQ0FBQztPQUNXLHdCQUF3QixDQThCcEM7SUFBRCwrQkFBQztDQUFBLEFBOUJELElBOEJDO1NBOUJZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENtc1Byb2R1Y3RDYXJvdXNlbENvbXBvbmVudCBhcyBtb2RlbCxcbiAgUHJvZHVjdCxcbiAgUHJvZHVjdFNjb3BlLFxuICBQcm9kdWN0U2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9jbXMtY29tcG9uZW50LWRhdGEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wcm9kdWN0LWNhcm91c2VsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtY2Fyb3VzZWwuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdENhcm91c2VsQ29tcG9uZW50IHtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IFBST0RVQ1RfU0NPUEUgPSBQcm9kdWN0U2NvcGUuTElTVDtcblxuICBwcml2YXRlIGNvbXBvbmVudERhdGEkOiBPYnNlcnZhYmxlPG1vZGVsPiA9IHRoaXMuY29tcG9uZW50RGF0YS5kYXRhJC5waXBlKFxuICAgIGZpbHRlcihCb29sZWFuKVxuICApO1xuXG4gIC8qKlxuICAgKiByZXR1cm5zIGFuIE9iZXJ2YWJsZSBzdHJpbmcgZm9yIHRoZSB0aXRsZS5cbiAgICovXG4gIHRpdGxlJDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5jb21wb25lbnREYXRhJC5waXBlKFxuICAgIG1hcCgoZGF0YSkgPT4gZGF0YS50aXRsZSlcbiAgKTtcblxuICAvKipcbiAgICogT2JlcnZhYmxlIHRoYXQgaG9sZHMgYW4gQXJyYXkgb2YgT2JzZXJ2YWJsZXMuIFRoaXMgaXMgZG9uZSwgc28gdGhhdFxuICAgKiB0aGUgY29tcG9uZW50IFVJIGNvdWxkIGNvbnNpZGVyIHRvIGxhenkgbG9hZCB0aGUgVUkgY29tcG9uZW50cyB3aGVuIHRoZXkncmVcbiAgICogaW4gdGhlIHZpZXdwb2ludC5cbiAgICovXG4gIGl0ZW1zJDogT2JzZXJ2YWJsZTxPYnNlcnZhYmxlPFByb2R1Y3Q+W10+ID0gdGhpcy5jb21wb25lbnREYXRhJC5waXBlKFxuICAgIG1hcCgoZGF0YSkgPT4gZGF0YS5wcm9kdWN0Q29kZXMudHJpbSgpLnNwbGl0KCcgJykpLFxuICAgIG1hcCgoY29kZXMpID0+XG4gICAgICBjb2Rlcy5tYXAoKGNvZGUpID0+IHRoaXMucHJvZHVjdFNlcnZpY2UuZ2V0KGNvZGUsIHRoaXMuUFJPRFVDVF9TQ09QRSkpXG4gICAgKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjb21wb25lbnREYXRhOiBDbXNDb21wb25lbnREYXRhPG1vZGVsPixcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlXG4gICkge31cbn1cbiJdfQ==