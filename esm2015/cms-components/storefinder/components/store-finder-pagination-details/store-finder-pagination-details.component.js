import { Component, Input } from '@angular/core';
export class StoreFinderPaginationDetailsComponent {
    constructor() { }
    getResultsPerPage() {
        if (this.pagination.totalResults > this.pagination.pageSize) {
            const firstItem = this.pagination.currentPage * this.pagination.pageSize + 1;
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
            },] }
];
StoreFinderPaginationDetailsComponent.ctorParameters = () => [];
StoreFinderPaginationDetailsComponent.propDecorators = {
    pagination: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLXBhZ2luYXRpb24tZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtY29tcG9uZW50cy9zdG9yZWZpbmRlci9jb21wb25lbnRzL3N0b3JlLWZpbmRlci1wYWdpbmF0aW9uLWRldGFpbHMvc3RvcmUtZmluZGVyLXBhZ2luYXRpb24tZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQsTUFBTSxPQUFPLHFDQUFxQztJQUloRCxnQkFBZSxDQUFDO0lBRWhCLGlCQUFpQjtRQUNmLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDM0QsTUFBTSxTQUFTLEdBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBRTdELElBQUksY0FBYyxHQUNoQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1lBRS9ELElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFO2dCQUNqRCxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUM7YUFDL0M7WUFFRCxPQUFPLEdBQUcsU0FBUyxNQUFNLGNBQWMsRUFBRSxDQUFDO1NBQzNDO2FBQU07WUFDTCxPQUFPLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUM5QztJQUNILENBQUM7OztZQTFCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9DQUFvQztnQkFDOUMsa01BQStEO2FBQ2hFOzs7O3lCQUVFLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uTW9kZWwgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zdG9yZS1maW5kZXItcGFnaW5hdGlvbi1kZXRhaWxzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0b3JlLWZpbmRlci1wYWdpbmF0aW9uLWRldGFpbHMuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTdG9yZUZpbmRlclBhZ2luYXRpb25EZXRhaWxzQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgcGFnaW5hdGlvbjogUGFnaW5hdGlvbk1vZGVsO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBnZXRSZXN1bHRzUGVyUGFnZSgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLnBhZ2luYXRpb24udG90YWxSZXN1bHRzID4gdGhpcy5wYWdpbmF0aW9uLnBhZ2VTaXplKSB7XG4gICAgICBjb25zdCBmaXJzdEl0ZW0gPVxuICAgICAgICB0aGlzLnBhZ2luYXRpb24uY3VycmVudFBhZ2UgKiB0aGlzLnBhZ2luYXRpb24ucGFnZVNpemUgKyAxO1xuXG4gICAgICBsZXQgcmVzdWx0c1BlclBhZ2UgPVxuICAgICAgICAodGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlICsgMSkgKiB0aGlzLnBhZ2luYXRpb24ucGFnZVNpemU7XG5cbiAgICAgIGlmIChyZXN1bHRzUGVyUGFnZSA+IHRoaXMucGFnaW5hdGlvbi50b3RhbFJlc3VsdHMpIHtcbiAgICAgICAgcmVzdWx0c1BlclBhZ2UgPSB0aGlzLnBhZ2luYXRpb24udG90YWxSZXN1bHRzO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYCR7Zmlyc3RJdGVtfSAtICR7cmVzdWx0c1BlclBhZ2V9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGAxIC0gJHt0aGlzLnBhZ2luYXRpb24udG90YWxSZXN1bHRzfWA7XG4gICAgfVxuICB9XG59XG4iXX0=