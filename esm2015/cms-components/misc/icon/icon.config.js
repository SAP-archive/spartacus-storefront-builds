/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const ICON_TYPES = {
    CART: 'shopping-cart',
    SEARCH: 'search',
    GRID_MODE: 'th-large',
    LIST_MODE: 'bars',
    CARET_DOWN: 'angle-down',
    INFO: 'info-circle',
    STAR: 'star',
};
export { ICON_TYPES };
/**
 * @abstract
 */
export class IconConfig {
}
if (false) {
    /** @type {?} */
    IconConfig.prototype.icon;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9taXNjL2ljb24vaWNvbi5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQ0UsTUFBTyxlQUFlO0lBQ3RCLFFBQVMsUUFBUTtJQUNqQixXQUFZLFVBQVU7SUFDdEIsV0FBWSxNQUFNO0lBQ2xCLFlBQWEsWUFBWTtJQUN6QixNQUFPLGFBQWE7SUFDcEIsTUFBTyxNQUFNOzs7Ozs7QUFHZixNQUFNLE9BQWdCLFVBQVU7Q0FzQy9COzs7SUFyQ0MsMEJBb0NFIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gSUNPTl9UWVBFUyB7XG4gIENBUlQgPSAnc2hvcHBpbmctY2FydCcsXG4gIFNFQVJDSCA9ICdzZWFyY2gnLFxuICBHUklEX01PREUgPSAndGgtbGFyZ2UnLFxuICBMSVNUX01PREUgPSAnYmFycycsXG4gIENBUkVUX0RPV04gPSAnYW5nbGUtZG93bicsXG4gIElORk8gPSAnaW5mby1jaXJjbGUnLFxuICBTVEFSID0gJ3N0YXInLFxufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSWNvbkNvbmZpZyB7XG4gIGljb24/OiB7XG4gICAgLyoqIHRoZSBwYXRoIGZyb20gd2hlcmUgdGhlIFNWRyBpY29ucyBhcmUgbG9hZGVkICovXG4gICAgc3ZnUGF0aD86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHdlIHNob3VsZCB1c2UgaW5saW5lIFNWRyBpY29uIHN5bWJvbHMuXG4gICAgICovXG4gICAgdXNlU3ZnPzogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEVhY2ggY3gtaWNvbiB3aWxsIGhhdmUgY2xhc3MgbmFtZSB0aGF0IHJlZmxlY3RzIHRoZSBpY29uIHR5cGUgYnkgZGVmYXVsdC5cbiAgICAgKiBZb3UgY2FuIGN1c3RvbWl6ZSB0aGlzIGJ5IGFwcGx5aW5nIGEgY3VzdG9tIG1hcHBpbmcgdG8gdGhlIGljb24gdHlwZS5cbiAgICAgKi9cbiAgICBpY29ucz86IHtcbiAgICAgIFtJQ09OX1RZUEVTOiBzdHJpbmddOiBzdHJpbmc7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBwcmVmaXggY2FuIGJlIHVzZWQgdG8gYWRkcmVzcyB0aGUgaWNvbiBpZCAoaW4gc3ZnKSBvciBpY29uIGNsYXNzLiBJY29uXG4gICAgICogbGlicmFyaWVzIHRlbmQgdG8gcHJlZml4IHRoZWlyIGljb25zLiBUaGUgcHJlZml4IGNhbiBiZSB1c2VkIGZvciBib3RoIHByZWZpeGluZ1xuICAgICAqIHRoZSBzdmcgaWQgb3Igc3R5bGUgY2xhc3M6XG4gICAgICpcbiAgICAgKiBgZmEtc2hvcHBpbmctY2FydGBcbiAgICAgKiBgZmFzLWZhLXNob3BwaW5nLWNhcnRgXG4gICAgICovXG4gICAgcHJlZml4Pzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogSWNvbiBmb250IGxpYnJhcmllcyB0ZW5kIHRvIG1hbmFnZSB0aGUgb3ZlcmFsbCBzdHlsaW9uIGJ5IGEgZ2VuZXJpY1xuICAgICAqIGNsYXNzLiBGb3IgZXhhbXBsZTpcbiAgICAgKiBgZmFzIGZhLXNob3BwaW5nLWNhcnRgXG4gICAgICpcbiAgICAgKiBJbiB0aGlzIGV4YW1wbGUsIGBmYXNgIGlzIHRoZSBnZW5lcmljIHN0eWxlIGNsYXNzIHRoYXQgbXVzdCBiZSBhcHBsaWVkXG4gICAgICogdG8gYWxsIGljb24gZWxlbWVudHMuXG4gICAgICovXG4gICAgaWNvbkNsYXNzPzogc3RyaW5nO1xuICB9O1xufVxuIl19