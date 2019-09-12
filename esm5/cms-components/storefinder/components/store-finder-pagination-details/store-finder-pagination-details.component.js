/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var StoreFinderPaginationDetailsComponent = /** @class */ (function () {
    function StoreFinderPaginationDetailsComponent() {
    }
    /**
     * @return {?}
     */
    StoreFinderPaginationDetailsComponent.prototype.getResultsPerPage = /**
     * @return {?}
     */
    function () {
        if (this.pagination.totalResults > this.pagination.pageSize) {
            /** @type {?} */
            var firstItem = this.pagination.currentPage * this.pagination.pageSize + 1;
            /** @type {?} */
            var resultsPerPage = (this.pagination.currentPage + 1) * this.pagination.pageSize;
            if (resultsPerPage > this.pagination.totalResults) {
                resultsPerPage = this.pagination.totalResults;
            }
            return firstItem + " - " + resultsPerPage;
        }
        else {
            return "1 - " + this.pagination.totalResults;
        }
    };
    StoreFinderPaginationDetailsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-store-finder-pagination-details',
                    template: "<span class=\"cx-pagination-details\">\n  {{ getResultsPerPage() }}\n  {{\n    'storeFinder.fromStoresFound'\n      | cxTranslate: { count: pagination.totalResults }\n  }}\n</span>\n"
                }] }
    ];
    /** @nocollapse */
    StoreFinderPaginationDetailsComponent.ctorParameters = function () { return []; };
    StoreFinderPaginationDetailsComponent.propDecorators = {
        pagination: [{ type: Input }]
    };
    return StoreFinderPaginationDetailsComponent;
}());
export { StoreFinderPaginationDetailsComponent };
if (false) {
    /** @type {?} */
    StoreFinderPaginationDetailsComponent.prototype.pagination;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLXBhZ2luYXRpb24tZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9zdG9yZWZpbmRlci9jb21wb25lbnRzL3N0b3JlLWZpbmRlci1wYWdpbmF0aW9uLWRldGFpbHMvc3RvcmUtZmluZGVyLXBhZ2luYXRpb24tZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2pEO0lBUUU7SUFBZSxDQUFDOzs7O0lBRWhCLGlFQUFpQjs7O0lBQWpCO1FBQ0UsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRTs7Z0JBQ3JELFNBQVMsR0FDYixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxDQUFDOztnQkFFeEQsY0FBYyxHQUNoQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUTtZQUU5RCxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRTtnQkFDakQsY0FBYyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO2FBQy9DO1lBRUQsT0FBVSxTQUFTLFdBQU0sY0FBZ0IsQ0FBQztTQUMzQzthQUFNO1lBQ0wsT0FBTyxTQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBYyxDQUFDO1NBQzlDO0lBQ0gsQ0FBQzs7Z0JBMUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0NBQW9DO29CQUM5QyxrTUFBK0Q7aUJBQ2hFOzs7Ozs2QkFFRSxLQUFLOztJQXNCUiw0Q0FBQztDQUFBLEFBM0JELElBMkJDO1NBdkJZLHFDQUFxQzs7O0lBQ2hELDJEQUM0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2luYXRpb25Nb2RlbCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXN0b3JlLWZpbmRlci1wYWdpbmF0aW9uLWRldGFpbHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RvcmUtZmluZGVyLXBhZ2luYXRpb24tZGV0YWlscy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlRmluZGVyUGFnaW5hdGlvbkRldGFpbHNDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBwYWdpbmF0aW9uOiBQYWdpbmF0aW9uTW9kZWw7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGdldFJlc3VsdHNQZXJQYWdlKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMucGFnaW5hdGlvbi50b3RhbFJlc3VsdHMgPiB0aGlzLnBhZ2luYXRpb24ucGFnZVNpemUpIHtcbiAgICAgIGNvbnN0IGZpcnN0SXRlbSA9XG4gICAgICAgIHRoaXMucGFnaW5hdGlvbi5jdXJyZW50UGFnZSAqIHRoaXMucGFnaW5hdGlvbi5wYWdlU2l6ZSArIDE7XG5cbiAgICAgIGxldCByZXN1bHRzUGVyUGFnZSA9XG4gICAgICAgICh0aGlzLnBhZ2luYXRpb24uY3VycmVudFBhZ2UgKyAxKSAqIHRoaXMucGFnaW5hdGlvbi5wYWdlU2l6ZTtcblxuICAgICAgaWYgKHJlc3VsdHNQZXJQYWdlID4gdGhpcy5wYWdpbmF0aW9uLnRvdGFsUmVzdWx0cykge1xuICAgICAgICByZXN1bHRzUGVyUGFnZSA9IHRoaXMucGFnaW5hdGlvbi50b3RhbFJlc3VsdHM7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBgJHtmaXJzdEl0ZW19IC0gJHtyZXN1bHRzUGVyUGFnZX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYDEgLSAke3RoaXMucGFnaW5hdGlvbi50b3RhbFJlc3VsdHN9YDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==