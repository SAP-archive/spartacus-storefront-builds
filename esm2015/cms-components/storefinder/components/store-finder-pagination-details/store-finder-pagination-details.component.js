/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                template: "<span class=\"cx-pagination-details\">\n  {{ getResultsPerPage() }}\n  {{\n    'storeFinder.fromStoresFound'\n      | cxTranslate: { count: pagination.totalResults }\n  }}\n</span>\n",
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-pagination-details{display:var(--cx-display,block);margin:var(--cx-margin,1rem 0)}@media (min-width:768px){.cx-pagination-details{text-align:var(--cx-text-align,left)}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLXBhZ2luYXRpb24tZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9zdG9yZWZpbmRlci9jb21wb25lbnRzL3N0b3JlLWZpbmRlci1wYWdpbmF0aW9uLWRldGFpbHMvc3RvcmUtZmluZGVyLXBhZ2luYXRpb24tZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUWpELE1BQU0sT0FBTyxxQ0FBcUM7SUFJaEQsZ0JBQWUsQ0FBQzs7OztJQUVoQixpQkFBaUI7UUFDZixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFOztrQkFDckQsU0FBUyxHQUNiLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLENBQUM7O2dCQUV4RCxjQUFjLEdBQ2hCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRO1lBRTlELElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFO2dCQUNqRCxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUM7YUFDL0M7WUFFRCxPQUFPLEdBQUcsU0FBUyxNQUFNLGNBQWMsRUFBRSxDQUFDO1NBQzNDO2FBQU07WUFDTCxPQUFPLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUM5QztJQUNILENBQUM7OztZQTNCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9DQUFvQztnQkFDOUMsa01BQStEOzthQUVoRTs7Ozs7eUJBRUUsS0FBSzs7OztJQUFOLDJEQUM0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2luYXRpb25Nb2RlbCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXN0b3JlLWZpbmRlci1wYWdpbmF0aW9uLWRldGFpbHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RvcmUtZmluZGVyLXBhZ2luYXRpb24tZGV0YWlscy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N0b3JlLWZpbmRlci1wYWdpbmF0aW9uLWRldGFpbHMuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVGaW5kZXJQYWdpbmF0aW9uRGV0YWlsc0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIHBhZ2luYXRpb246IFBhZ2luYXRpb25Nb2RlbDtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgZ2V0UmVzdWx0c1BlclBhZ2UoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5wYWdpbmF0aW9uLnRvdGFsUmVzdWx0cyA+IHRoaXMucGFnaW5hdGlvbi5wYWdlU2l6ZSkge1xuICAgICAgY29uc3QgZmlyc3RJdGVtID1cbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlICogdGhpcy5wYWdpbmF0aW9uLnBhZ2VTaXplICsgMTtcblxuICAgICAgbGV0IHJlc3VsdHNQZXJQYWdlID1cbiAgICAgICAgKHRoaXMucGFnaW5hdGlvbi5jdXJyZW50UGFnZSArIDEpICogdGhpcy5wYWdpbmF0aW9uLnBhZ2VTaXplO1xuXG4gICAgICBpZiAocmVzdWx0c1BlclBhZ2UgPiB0aGlzLnBhZ2luYXRpb24udG90YWxSZXN1bHRzKSB7XG4gICAgICAgIHJlc3VsdHNQZXJQYWdlID0gdGhpcy5wYWdpbmF0aW9uLnRvdGFsUmVzdWx0cztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGAke2ZpcnN0SXRlbX0gLSAke3Jlc3VsdHNQZXJQYWdlfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBgMSAtICR7dGhpcy5wYWdpbmF0aW9uLnRvdGFsUmVzdWx0c31gO1xuICAgIH1cbiAgfVxufVxuIl19