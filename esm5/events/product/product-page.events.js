/**
 * Indicates that a user visited a product details page. A visited product code value is emitted whenever the product
 * details page is visited, together with the name, the price, and the categories of that product.
 */
var ProductDetailsPageEvent = /** @class */ (function () {
    function ProductDetailsPageEvent() {
    }
    return ProductDetailsPageEvent;
}());
export { ProductDetailsPageEvent };
/**
 * Indicates that a user visited a category. The code and the name of the category
 * are emitted whenever a category page is visited.
 */
var CategoryPageResultsEvent = /** @class */ (function () {
    function CategoryPageResultsEvent() {
    }
    return CategoryPageResultsEvent;
}());
export { CategoryPageResultsEvent };
/**
 * Indicates that the search results have been retrieved.
 * The search term and the number of results are emitted
 * whenever a search has been executed.
 */
var SearchPageResultsEvent = /** @class */ (function () {
    function SearchPageResultsEvent() {
    }
    return SearchPageResultsEvent;
}());
export { SearchPageResultsEvent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1wYWdlLmV2ZW50cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImV2ZW50cy9wcm9kdWN0L3Byb2R1Y3QtcGFnZS5ldmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7OztHQUdHO0FBQ0g7SUFBQTtJQUtBLENBQUM7SUFBRCw4QkFBQztBQUFELENBQUMsQUFMRCxJQUtDOztBQUVEOzs7R0FHRztBQUNIO0lBQUE7SUFHQSxDQUFDO0lBQUQsK0JBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7QUFFRDs7OztHQUlHO0FBQ0g7SUFBQTtJQUdBLENBQUM7SUFBRCw2QkFBQztBQUFELENBQUMsQUFIRCxJQUdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2F0ZWdvcnksIFByaWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuLyoqXG4gKiBJbmRpY2F0ZXMgdGhhdCBhIHVzZXIgdmlzaXRlZCBhIHByb2R1Y3QgZGV0YWlscyBwYWdlLiBBIHZpc2l0ZWQgcHJvZHVjdCBjb2RlIHZhbHVlIGlzIGVtaXR0ZWQgd2hlbmV2ZXIgdGhlIHByb2R1Y3RcbiAqIGRldGFpbHMgcGFnZSBpcyB2aXNpdGVkLCB0b2dldGhlciB3aXRoIHRoZSBuYW1lLCB0aGUgcHJpY2UsIGFuZCB0aGUgY2F0ZWdvcmllcyBvZiB0aGF0IHByb2R1Y3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBQcm9kdWN0RGV0YWlsc1BhZ2VFdmVudCB7XG4gIGNhdGVnb3JpZXM/OiBDYXRlZ29yeVtdO1xuICBjb2RlPzogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xuICBwcmljZT86IFByaWNlO1xufVxuXG4vKipcbiAqIEluZGljYXRlcyB0aGF0IGEgdXNlciB2aXNpdGVkIGEgY2F0ZWdvcnkuIFRoZSBjb2RlIGFuZCB0aGUgbmFtZSBvZiB0aGUgY2F0ZWdvcnlcbiAqIGFyZSBlbWl0dGVkIHdoZW5ldmVyIGEgY2F0ZWdvcnkgcGFnZSBpcyB2aXNpdGVkLlxuICovXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcnlQYWdlUmVzdWx0c0V2ZW50IHtcbiAgY2F0ZWdvcnlDb2RlOiBzdHJpbmc7XG4gIGNhdGVnb3J5TmFtZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEluZGljYXRlcyB0aGF0IHRoZSBzZWFyY2ggcmVzdWx0cyBoYXZlIGJlZW4gcmV0cmlldmVkLlxuICogVGhlIHNlYXJjaCB0ZXJtIGFuZCB0aGUgbnVtYmVyIG9mIHJlc3VsdHMgYXJlIGVtaXR0ZWRcbiAqIHdoZW5ldmVyIGEgc2VhcmNoIGhhcyBiZWVuIGV4ZWN1dGVkLlxuICovXG5leHBvcnQgY2xhc3MgU2VhcmNoUGFnZVJlc3VsdHNFdmVudCB7XG4gIHNlYXJjaFRlcm06IHN0cmluZztcbiAgbnVtYmVyT2ZSZXN1bHRzOiBOdW1iZXI7XG59XG4iXX0=