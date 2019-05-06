/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ServerConfig } from '@spartacus/core';
/** @enum {string} */
var BREAKPOINT = {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
};
export { BREAKPOINT };
/**
 * The LayoutConfig supports the configuration of page slots by page templates
 * or page sections, such as headers and footers. The configuration also supports
 * adaptive design per breadpoint (not per device type), so that the DOM is (re)rendered
 * por a given breakpoint.
 * @abstract
 */
var /**
 * The LayoutConfig supports the configuration of page slots by page templates
 * or page sections, such as headers and footers. The configuration also supports
 * adaptive design per breadpoint (not per device type), so that the DOM is (re)rendered
 * por a given breakpoint.
 * @abstract
 */
LayoutConfig = /** @class */ (function (_super) {
    tslib_1.__extends(LayoutConfig, _super);
    function LayoutConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LayoutConfig;
}(ServerConfig));
/**
 * The LayoutConfig supports the configuration of page slots by page templates
 * or page sections, such as headers and footers. The configuration also supports
 * adaptive design per breadpoint (not per device type), so that the DOM is (re)rendered
 * por a given breakpoint.
 * @abstract
 */
export { LayoutConfig };
if (false) {
    /**
     * The breakpoint configuration is used when the DOM is (re)rendered in specific view.
     * This allows for adaptive rendering, so that the DOM is rendered for specific breakpoints.
     * @type {?}
     */
    LayoutConfig.prototype.breakpoints;
    /** @type {?} */
    LayoutConfig.prototype.layoutSlots;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9jb25maWcvbGF5b3V0LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0lBRzdDLElBQUssSUFBSTtJQUNULElBQUssSUFBSTtJQUNULElBQUssSUFBSTtJQUNULElBQUssSUFBSTtJQUNULElBQUssSUFBSTs7Ozs7Ozs7OztBQW1DWDs7Ozs7Ozs7SUFBMkMsd0NBQVk7SUFBdkQ7O0lBVUEsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FBQyxBQVZELENBQTJDLFlBQVksR0FVdEQ7Ozs7Ozs7Ozs7Ozs7OztJQVBDLG1DQUtFOztJQUNGLG1DQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlcnZlckNvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmV4cG9ydCBlbnVtIEJSRUFLUE9JTlQge1xuICB4cyA9ICd4cycsXG4gIHNtID0gJ3NtJyxcbiAgbWQgPSAnbWQnLFxuICBsZyA9ICdsZycsXG4gIHhsID0gJ3hsJyxcbn1cblxuZXhwb3J0IHR5cGUgTGF5b3V0U2VjdGlvbnMgPVxuICB8ICdoZWFkZXInXG4gIHwgJ2Zvb3RlcidcbiAgfCAnTGFuZGluZ1BhZ2UyVGVtcGxhdGUnXG4gIHwgc3RyaW5nO1xuXG5leHBvcnQgdHlwZSBTbG90Q29uZmlnID0ge1xuICAvKiogVGhlIGNtcyBwYWdlIHNsb3RzIGFyZSBtYXBwZWQgYnkgdGhlIGBzbG90LnBvc2l0aW9uYC4gKi9cbiAgc2xvdHM/OiBzdHJpbmdbXTtcbn07XG5cbmV4cG9ydCB0eXBlIFNsb3RHcm91cCA9IHtcbiAgLyoqIFRoZSBwYWdlIHNsb3QgY29uZmlndXJhdGlvbiBmb3IgbGFyZ2Ugc2NyZWVucyAqL1xuICBbQlJFQUtQT0lOVC5sZ10/OiBTbG90Q29uZmlnO1xuICAvKiogVGhlIHBhZ2Ugc2xvdCBjb25maWd1cmF0aW9uIGZvciBtZWRpdW0gc2NyZWVucyAqL1xuICBbQlJFQUtQT0lOVC5tZF0/OiBTbG90Q29uZmlnO1xuICAvKiogVGhlIHBhZ2Ugc2xvdCBjb25maWd1cmF0aW9uIGZvciBzbWFsbCBzY3JlZW5zICovXG4gIFtCUkVBS1BPSU5ULnNtXT86IFNsb3RDb25maWc7XG4gIC8qKiBUaGUgcGFnZSBzbG90IGNvbmZpZ3VyYXRpb24gZm9yIGV4dHJhIHNtYWxsIHNjcmVlbnMgKi9cbiAgW0JSRUFLUE9JTlQueHNdPzogU2xvdENvbmZpZztcbn07XG5cbmV4cG9ydCB0eXBlIExheW91dFNsb3RDb25maWcgPSB7XG4gIFtzZWN0aW9uIGluIExheW91dFNlY3Rpb25zXTogU2xvdENvbmZpZyB8IFNsb3RHcm91cCB8IExheW91dFNsb3RDb25maWdcbn07XG5cbi8qKlxuICogVGhlIExheW91dENvbmZpZyBzdXBwb3J0cyB0aGUgY29uZmlndXJhdGlvbiBvZiBwYWdlIHNsb3RzIGJ5IHBhZ2UgdGVtcGxhdGVzXG4gKiBvciBwYWdlIHNlY3Rpb25zLCBzdWNoIGFzIGhlYWRlcnMgYW5kIGZvb3RlcnMuIFRoZSBjb25maWd1cmF0aW9uIGFsc28gc3VwcG9ydHNcbiAqIGFkYXB0aXZlIGRlc2lnbiBwZXIgYnJlYWRwb2ludCAobm90IHBlciBkZXZpY2UgdHlwZSksIHNvIHRoYXQgdGhlIERPTSBpcyAocmUpcmVuZGVyZWRcbiAqIHBvciBhIGdpdmVuIGJyZWFrcG9pbnQuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBMYXlvdXRDb25maWcgZXh0ZW5kcyBTZXJ2ZXJDb25maWcge1xuICAvKiogVGhlIGJyZWFrcG9pbnQgY29uZmlndXJhdGlvbiBpcyB1c2VkIHdoZW4gdGhlIERPTSBpcyAocmUpcmVuZGVyZWQgaW4gc3BlY2lmaWMgdmlldy5cbiAgICogVGhpcyBhbGxvd3MgZm9yIGFkYXB0aXZlIHJlbmRlcmluZywgc28gdGhhdCB0aGUgRE9NIGlzIHJlbmRlcmVkIGZvciBzcGVjaWZpYyBicmVha3BvaW50cy4gKi9cbiAgYnJlYWtwb2ludHM/OiB7XG4gICAgW0JSRUFLUE9JTlQueHNdPzogbnVtYmVyO1xuICAgIFtCUkVBS1BPSU5ULnNtXT86IG51bWJlcjtcbiAgICBbQlJFQUtQT0lOVC5tZF0/OiBudW1iZXI7XG4gICAgW0JSRUFLUE9JTlQubGddPzogbnVtYmVyO1xuICB9O1xuICBsYXlvdXRTbG90cz86IExheW91dFNsb3RDb25maWc7XG59XG4iXX0=