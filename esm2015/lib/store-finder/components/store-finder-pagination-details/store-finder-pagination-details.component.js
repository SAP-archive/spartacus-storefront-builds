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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLXBhZ2luYXRpb24tZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvc3RvcmUtZmluZGVyL2NvbXBvbmVudHMvc3RvcmUtZmluZGVyLXBhZ2luYXRpb24tZGV0YWlscy9zdG9yZS1maW5kZXItcGFnaW5hdGlvbi1kZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRakQsTUFBTSxPQUFPLHFDQUFxQztJQUloRCxnQkFBZSxDQUFDOzs7O0lBRWhCLGlCQUFpQjtRQUNmLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7O2tCQUNyRCxTQUFTLEdBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsQ0FBQzs7Z0JBRXhELGNBQWMsR0FDaEIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVE7WUFFOUQsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUU7Z0JBQ2pELGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQzthQUMvQztZQUVELE9BQU8sR0FBRyxTQUFTLE1BQU0sY0FBYyxFQUFFLENBQUM7U0FDM0M7YUFBTTtZQUNMLE9BQU8sT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQzlDO0lBQ0gsQ0FBQzs7O1lBM0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0NBQW9DO2dCQUM5QyxrTUFBK0Q7O2FBRWhFOzs7Ozt5QkFFRSxLQUFLOzs7O0lBQU4sMkRBQzRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbk1vZGVsIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc3RvcmUtZmluZGVyLXBhZ2luYXRpb24tZGV0YWlscycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdG9yZS1maW5kZXItcGFnaW5hdGlvbi1kZXRhaWxzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3RvcmUtZmluZGVyLXBhZ2luYXRpb24tZGV0YWlscy5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTdG9yZUZpbmRlclBhZ2luYXRpb25EZXRhaWxzQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgcGFnaW5hdGlvbjogUGFnaW5hdGlvbk1vZGVsO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBnZXRSZXN1bHRzUGVyUGFnZSgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLnBhZ2luYXRpb24udG90YWxSZXN1bHRzID4gdGhpcy5wYWdpbmF0aW9uLnBhZ2VTaXplKSB7XG4gICAgICBjb25zdCBmaXJzdEl0ZW0gPVxuICAgICAgICB0aGlzLnBhZ2luYXRpb24uY3VycmVudFBhZ2UgKiB0aGlzLnBhZ2luYXRpb24ucGFnZVNpemUgKyAxO1xuXG4gICAgICBsZXQgcmVzdWx0c1BlclBhZ2UgPVxuICAgICAgICAodGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlICsgMSkgKiB0aGlzLnBhZ2luYXRpb24ucGFnZVNpemU7XG5cbiAgICAgIGlmIChyZXN1bHRzUGVyUGFnZSA+IHRoaXMucGFnaW5hdGlvbi50b3RhbFJlc3VsdHMpIHtcbiAgICAgICAgcmVzdWx0c1BlclBhZ2UgPSB0aGlzLnBhZ2luYXRpb24udG90YWxSZXN1bHRzO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYCR7Zmlyc3RJdGVtfSAtICR7cmVzdWx0c1BlclBhZ2V9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGAxIC0gJHt0aGlzLnBhZ2luYXRpb24udG90YWxSZXN1bHRzfWA7XG4gICAgfVxuICB9XG59XG4iXX0=