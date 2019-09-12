/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class StoreFinderPaginationDetailsComponent {
    constructor() { }
    /**
     * @return {?}
     */
    getResultsPerPage() {
        if (this.pagination.totalResults > this.pagination.pageSize) {
            /** @type {?} */
            const firstItem = this.pagination.currentPage * this.pagination.pageSize + 1;
            /** @type {?} */
            let resultsPerPage = (this.pagination.currentPage + 1) * this.pagination.pageSize;
            if (resultsPerPage > this.pagination.totalResults) {
                resultsPerPage = this.pagination.totalResults;
            }
            return `${firstItem} - ${resultsPerPage}`;
        }
        else {
            return `1 - ${this.pagination.totalResults}`;
        }
    }
}
StoreFinderPaginationDetailsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-store-finder-pagination-details',
                template: "<span class=\"cx-pagination-details\">\n  {{ getResultsPerPage() }}\n  {{\n    'storeFinder.fromStoresFound'\n      | cxTranslate: { count: pagination.totalResults }\n  }}\n</span>\n"
            }] }
];
/** @nocollapse */
StoreFinderPaginationDetailsComponent.ctorParameters = () => [];
StoreFinderPaginationDetailsComponent.propDecorators = {
    pagination: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StoreFinderPaginationDetailsComponent.prototype.pagination;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLXBhZ2luYXRpb24tZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9zdG9yZWZpbmRlci9jb21wb25lbnRzL3N0b3JlLWZpbmRlci1wYWdpbmF0aW9uLWRldGFpbHMvc3RvcmUtZmluZGVyLXBhZ2luYXRpb24tZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT2pELE1BQU0sT0FBTyxxQ0FBcUM7SUFJaEQsZ0JBQWUsQ0FBQzs7OztJQUVoQixpQkFBaUI7UUFDZixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFOztrQkFDckQsU0FBUyxHQUNiLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLENBQUM7O2dCQUV4RCxjQUFjLEdBQ2hCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRO1lBRTlELElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFO2dCQUNqRCxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUM7YUFDL0M7WUFFRCxPQUFPLEdBQUcsU0FBUyxNQUFNLGNBQWMsRUFBRSxDQUFDO1NBQzNDO2FBQU07WUFDTCxPQUFPLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUM5QztJQUNILENBQUM7OztZQTFCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9DQUFvQztnQkFDOUMsa01BQStEO2FBQ2hFOzs7Ozt5QkFFRSxLQUFLOzs7O0lBQU4sMkRBQzRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbk1vZGVsIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc3RvcmUtZmluZGVyLXBhZ2luYXRpb24tZGV0YWlscycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdG9yZS1maW5kZXItcGFnaW5hdGlvbi1kZXRhaWxzLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVGaW5kZXJQYWdpbmF0aW9uRGV0YWlsc0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIHBhZ2luYXRpb246IFBhZ2luYXRpb25Nb2RlbDtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgZ2V0UmVzdWx0c1BlclBhZ2UoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5wYWdpbmF0aW9uLnRvdGFsUmVzdWx0cyA+IHRoaXMucGFnaW5hdGlvbi5wYWdlU2l6ZSkge1xuICAgICAgY29uc3QgZmlyc3RJdGVtID1cbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlICogdGhpcy5wYWdpbmF0aW9uLnBhZ2VTaXplICsgMTtcblxuICAgICAgbGV0IHJlc3VsdHNQZXJQYWdlID1cbiAgICAgICAgKHRoaXMucGFnaW5hdGlvbi5jdXJyZW50UGFnZSArIDEpICogdGhpcy5wYWdpbmF0aW9uLnBhZ2VTaXplO1xuXG4gICAgICBpZiAocmVzdWx0c1BlclBhZ2UgPiB0aGlzLnBhZ2luYXRpb24udG90YWxSZXN1bHRzKSB7XG4gICAgICAgIHJlc3VsdHNQZXJQYWdlID0gdGhpcy5wYWdpbmF0aW9uLnRvdGFsUmVzdWx0cztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGAke2ZpcnN0SXRlbX0gLSAke3Jlc3VsdHNQZXJQYWdlfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBgMSAtICR7dGhpcy5wYWdpbmF0aW9uLnRvdGFsUmVzdWx0c31gO1xuICAgIH1cbiAgfVxufVxuIl19