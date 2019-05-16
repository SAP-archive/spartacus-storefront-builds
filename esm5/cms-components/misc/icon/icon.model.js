/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var ICON_TYPE = {
    STAR: 'STAR',
    SEARCH: 'SEARCH',
    CART: 'CART',
    INFO: 'INFO',
    GRID: 'GRID',
    LIST: 'LIST',
    CARET_DOWN: 'CARET_DOWN',
    TIMES: 'TIMES',
    ERROR: 'ERROR',
    WARNING: 'WARNING',
    SUCCESS: 'SUCCESS',
    VISA: 'VISA',
    PLUS: 'PLUS',
    MINUS: 'MINUS',
};
export { ICON_TYPE };
/**
 * @abstract
 */
var /**
 * @abstract
 */
IconConfig = /** @class */ (function () {
    function IconConfig() {
    }
    return IconConfig;
}());
/**
 * @abstract
 */
export { IconConfig };
if (false) {
    /** @type {?} */
    IconConfig.prototype.icon;
}
/**
 * @record
 */
export function IconConfigResource() { }
if (false) {
    /** @type {?} */
    IconConfigResource.prototype.type;
    /** @type {?|undefined} */
    IconConfigResource.prototype.url;
    /** @type {?|undefined} */
    IconConfigResource.prototype.types;
}
/** @enum {string} */
var IconResourceType = {
    SVG: 'svg',
    LINK: 'link',
};
export { IconResourceType };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL21pc2MvaWNvbi9pY29uLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUNFLE1BQU8sTUFBTTtJQUNiLFFBQVMsUUFBUTtJQUNqQixNQUFPLE1BQU07SUFDYixNQUFPLE1BQU07SUFDYixNQUFPLE1BQU07SUFDYixNQUFPLE1BQU07SUFDYixZQUFhLFlBQVk7SUFDekIsT0FBUSxPQUFPO0lBQ2YsT0FBUSxPQUFPO0lBQ2YsU0FBVSxTQUFTO0lBQ25CLFNBQVUsU0FBUztJQUNuQixNQUFPLE1BQU07SUFDYixNQUFPLE1BQU07SUFDYixPQUFRLE9BQU87Ozs7OztBQUdqQjs7OztJQUFBO0lBeUJBLENBQUM7SUFBRCxpQkFBQztBQUFELENBQUMsQUF6QkQsSUF5QkM7Ozs7Ozs7SUF4QkMsMEJBdUJFOzs7OztBQUdKLHdDQUlDOzs7SUFIQyxrQ0FBZ0M7O0lBQ2hDLGlDQUFhOztJQUNiLG1DQUFvQjs7OztJQUlwQixLQUFNLEtBQUs7SUFDWCxNQUFPLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBJQ09OX1RZUEUge1xuICBTVEFSID0gJ1NUQVInLFxuICBTRUFSQ0ggPSAnU0VBUkNIJyxcbiAgQ0FSVCA9ICdDQVJUJyxcbiAgSU5GTyA9ICdJTkZPJyxcbiAgR1JJRCA9ICdHUklEJyxcbiAgTElTVCA9ICdMSVNUJyxcbiAgQ0FSRVRfRE9XTiA9ICdDQVJFVF9ET1dOJyxcbiAgVElNRVMgPSAnVElNRVMnLFxuICBFUlJPUiA9ICdFUlJPUicsXG4gIFdBUk5JTkcgPSAnV0FSTklORycsXG4gIFNVQ0NFU1MgPSAnU1VDQ0VTUycsXG4gIFZJU0EgPSAnVklTQScsXG4gIFBMVVMgPSAnUExVUycsXG4gIE1JTlVTID0gJ01JTlVTJyxcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEljb25Db25maWcge1xuICBpY29uPzoge1xuICAgIC8qKlxuICAgICAqIEVhY2ggaWNvbiB0eXBlIGNhbiBiZSBjb25maWd1cmVkIHdpdGggYSBzby1jYWxsZWQgc3ltYm9sLiBUaGUgc3ltYm9sIHdpbGxcbiAgICAgKiBiZSB1c2VkIHRvIG1hcCB0aGUgaWNvbiB0byBhbiBTVkcgYHN5bWJvbGAgKGlkKSBvciB0byB0aGUgc3R5bGUgY2xhc3NlcyBvZlxuICAgICAqIGEgZm9udCBiYXNlZCBpY29uLiBUaGUgZm9sbG93aW5nIGNvbmZpZ3VyYXRpb24gd291bGQgbWFwIHRvIGEgZm9udGF3ZXNvbWVcbiAgICAgKiBpY29uOlxuICAgICAqXG4gICAgICogaWNvbjoge1xuICAgICAqICAgc3ltYm9sczoge1xuICAgICAqICAgICBDQVJUOiAnZmFzIGZhLXNob3BwaW5nLWNhcnQnXG4gICAgICogICB9XG4gICAgICogfVxuICAgICAqL1xuICAgIHN5bWJvbHM/OiB7XG4gICAgICBbSUNPTl9UWVBFOiBzdHJpbmddOiBzdHJpbmc7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlc291cmNlcyBhcmUgdXNlZCB0byBtYXAgaWNvbiB0eXBlcyB0byBjZXJ0YWluIGFzc2V0LCBzdWNoIGFzIGFuIFNWRyAoc3ByaXRlKSBpbWFnZS5cbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSAoYEljb25SZXNvdXJjZVR5cGVgKSBkaWN0YXRlcyB3aGV0aGVyIGFuIFNWRyBpbWFnZSBpcyB1c2VkLiBUaGUgVVJMXG4gICAgICogaXMgdXNlZCBmb3IgdGhlIFNWRyB4bGluayByZWZlcmVuY2UuXG4gICAgICovXG4gICAgcmVzb3VyY2VzPzogSWNvbkNvbmZpZ1Jlc291cmNlW107XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSWNvbkNvbmZpZ1Jlc291cmNlIHtcbiAgdHlwZTogSWNvblJlc291cmNlVHlwZSB8IHN0cmluZztcbiAgdXJsPzogc3RyaW5nO1xuICB0eXBlcz86IElDT05fVFlQRVtdO1xufVxuXG5leHBvcnQgZW51bSBJY29uUmVzb3VyY2VUeXBlIHtcbiAgU1ZHID0gJ3N2ZycsXG4gIExJTksgPSAnbGluaycsXG59XG4iXX0=