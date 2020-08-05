import { __extends } from "tslib";
import { PageEvent } from '../page/page.events';
/**
 * Indicates that a user visited a product details page.
 */
var ProductDetailsPageEvent = /** @class */ (function (_super) {
    __extends(ProductDetailsPageEvent, _super);
    function ProductDetailsPageEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ProductDetailsPageEvent;
}(PageEvent));
export { ProductDetailsPageEvent };
/**
 * Indicates that a user visited a category page.
 */
var CategoryPageResultsEvent = /** @class */ (function (_super) {
    __extends(CategoryPageResultsEvent, _super);
    function CategoryPageResultsEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CategoryPageResultsEvent;
}(PageEvent));
export { CategoryPageResultsEvent };
/**
 * Indicates that the a user visited the search results page,
 * and that the search results have been retrieved.
 */
var SearchPageResultsEvent = /** @class */ (function (_super) {
    __extends(SearchPageResultsEvent, _super);
    function SearchPageResultsEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SearchPageResultsEvent;
}(PageEvent));
export { SearchPageResultsEvent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1wYWdlLmV2ZW50cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImV2ZW50cy9wcm9kdWN0L3Byb2R1Y3QtcGFnZS5ldmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVoRDs7R0FFRztBQUNIO0lBQTZDLDJDQUFTO0lBQXREOztJQUtBLENBQUM7SUFBRCw4QkFBQztBQUFELENBQUMsQUFMRCxDQUE2QyxTQUFTLEdBS3JEOztBQUVEOztHQUVHO0FBQ0g7SUFBOEMsNENBQVM7SUFBdkQ7O0lBSUEsQ0FBQztJQUFELCtCQUFDO0FBQUQsQ0FBQyxBQUpELENBQThDLFNBQVMsR0FJdEQ7O0FBRUQ7OztHQUdHO0FBQ0g7SUFBNEMsMENBQVM7SUFBckQ7O0lBR0EsQ0FBQztJQUFELDZCQUFDO0FBQUQsQ0FBQyxBQUhELENBQTRDLFNBQVMsR0FHcEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXRlZ29yeSwgUHJpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgUGFnZUV2ZW50IH0gZnJvbSAnLi4vcGFnZS9wYWdlLmV2ZW50cyc7XG5cbi8qKlxuICogSW5kaWNhdGVzIHRoYXQgYSB1c2VyIHZpc2l0ZWQgYSBwcm9kdWN0IGRldGFpbHMgcGFnZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFByb2R1Y3REZXRhaWxzUGFnZUV2ZW50IGV4dGVuZHMgUGFnZUV2ZW50IHtcbiAgY2F0ZWdvcmllcz86IENhdGVnb3J5W107XG4gIGNvZGU/OiBzdHJpbmc7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHByaWNlPzogUHJpY2U7XG59XG5cbi8qKlxuICogSW5kaWNhdGVzIHRoYXQgYSB1c2VyIHZpc2l0ZWQgYSBjYXRlZ29yeSBwYWdlLlxuICovXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcnlQYWdlUmVzdWx0c0V2ZW50IGV4dGVuZHMgUGFnZUV2ZW50IHtcbiAgY2F0ZWdvcnlDb2RlOiBzdHJpbmc7XG4gIGNhdGVnb3J5TmFtZT86IHN0cmluZztcbiAgbnVtYmVyT2ZSZXN1bHRzOiBOdW1iZXI7XG59XG5cbi8qKlxuICogSW5kaWNhdGVzIHRoYXQgdGhlIGEgdXNlciB2aXNpdGVkIHRoZSBzZWFyY2ggcmVzdWx0cyBwYWdlLFxuICogYW5kIHRoYXQgdGhlIHNlYXJjaCByZXN1bHRzIGhhdmUgYmVlbiByZXRyaWV2ZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBTZWFyY2hQYWdlUmVzdWx0c0V2ZW50IGV4dGVuZHMgUGFnZUV2ZW50IHtcbiAgc2VhcmNoVGVybTogc3RyaW5nO1xuICBudW1iZXJPZlJlc3VsdHM6IE51bWJlcjtcbn1cbiJdfQ==