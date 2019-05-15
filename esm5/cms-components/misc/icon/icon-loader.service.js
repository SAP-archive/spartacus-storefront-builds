/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { IconConfig } from './icon.model';
import * as i0 from "@angular/core";
import * as i1 from "./icon.model";
var IconLoaderService = /** @class */ (function () {
    function IconLoaderService(config) {
        this.config = config;
    }
    /**
     * @return {?}
     */
    IconLoaderService.prototype.useSvg = /**
     * @return {?}
     */
    function () {
        return this.config.icon && this.config.icon.useSvg;
    };
    /**
     * Returns the path to the svg link. The link supports path names
     * as well, if the config has been setup to support a svg file path.
     * Additionally, the icon prefix will be taken into account to prefix the
     * icon IDs in the SVG.
     */
    /**
     * Returns the path to the svg link. The link supports path names
     * as well, if the config has been setup to support a svg file path.
     * Additionally, the icon prefix will be taken into account to prefix the
     * icon IDs in the SVG.
     * @param {?} iconType
     * @return {?}
     */
    IconLoaderService.prototype.getSvgPath = /**
     * Returns the path to the svg link. The link supports path names
     * as well, if the config has been setup to support a svg file path.
     * Additionally, the icon prefix will be taken into account to prefix the
     * icon IDs in the SVG.
     * @param {?} iconType
     * @return {?}
     */
    function (iconType) {
        if (!this.useSvg()) {
            return null;
        }
        /** @type {?} */
        var path = '';
        if (this.config.icon && this.config.icon.svgPath) {
            path = this.config.icon.svgPath;
        }
        // if there's no mapping configured, we use the default value
        path += '#';
        if (this.config.icon && this.config.icon.prefix) {
            path += this.config.icon.prefix;
        }
        path += this.getMappedType(iconType);
        return path;
    };
    /**
     *
     * returns an array of css classes that can be used to
     * render the icon by CSS / font. This is driven by the `iconType`
     * and the icon configuration, so that multiple icon fonts are
     * supported, such as font awesome, glypicons, Octicons, etc.
     */
    /**
     *
     * returns an array of css classes that can be used to
     * render the icon by CSS / font. This is driven by the `iconType`
     * and the icon configuration, so that multiple icon fonts are
     * supported, such as font awesome, glypicons, Octicons, etc.
     * @param {?} iconType
     * @return {?}
     */
    IconLoaderService.prototype.getStyleClasses = /**
     *
     * returns an array of css classes that can be used to
     * render the icon by CSS / font. This is driven by the `iconType`
     * and the icon configuration, so that multiple icon fonts are
     * supported, such as font awesome, glypicons, Octicons, etc.
     * @param {?} iconType
     * @return {?}
     */
    function (iconType) {
        /** @type {?} */
        var styleClasses = [];
        if (this.config.icon && this.config.icon.iconClass) {
            styleClasses.push(this.config.icon.iconClass);
        }
        /** @type {?} */
        var type = this.getMappedType(iconType);
        if (this.config.icon && this.config.icon.prefix) {
            type = this.config.icon.prefix + type;
        }
        styleClasses.push(type);
        return styleClasses;
    };
    /**
     * @private
     * @param {?} iconType
     * @return {?}
     */
    IconLoaderService.prototype.getMappedType = /**
     * @private
     * @param {?} iconType
     * @return {?}
     */
    function (iconType) {
        return this.config.icon &&
            this.config.icon.icons &&
            this.config.icon.icons[iconType]
            ? this.config.icon.icons[iconType]
            : iconType;
    };
    IconLoaderService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    IconLoaderService.ctorParameters = function () { return [
        { type: IconConfig }
    ]; };
    /** @nocollapse */ IconLoaderService.ngInjectableDef = i0.defineInjectable({ factory: function IconLoaderService_Factory() { return new IconLoaderService(i0.inject(i1.IconConfig)); }, token: IconLoaderService, providedIn: "root" });
    return IconLoaderService;
}());
export { IconLoaderService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IconLoaderService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1sb2FkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL21pc2MvaWNvbi9pY29uLWxvYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQWMsTUFBTSxjQUFjLENBQUM7OztBQUV0RDtJQUlFLDJCQUFvQixNQUFrQjtRQUFsQixXQUFNLEdBQU4sTUFBTSxDQUFZO0lBQUcsQ0FBQzs7OztJQUUxQyxrQ0FBTTs7O0lBQU47UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyRCxDQUFDO0lBRUQ7Ozs7O09BS0c7Ozs7Ozs7OztJQUNILHNDQUFVOzs7Ozs7OztJQUFWLFVBQVcsUUFBNkI7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNsQixPQUFPLElBQUksQ0FBQztTQUNiOztZQUNHLElBQUksR0FBRyxFQUFFO1FBRWIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEQsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNqQztRQUNELDZEQUE2RDtRQUM3RCxJQUFJLElBQUksR0FBRyxDQUFDO1FBQ1osSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDL0MsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNqQztRQUNELElBQUksSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7Ozs7T0FNRzs7Ozs7Ozs7OztJQUNILDJDQUFlOzs7Ozs7Ozs7SUFBZixVQUFnQixRQUE2Qjs7WUFDckMsWUFBWSxHQUFHLEVBQUU7UUFFdkIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEQsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMvQzs7WUFDRyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFDdkMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDL0MsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDdkM7UUFDRCxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7Ozs7OztJQUVPLHlDQUFhOzs7OztJQUFyQixVQUFzQixRQUE2QjtRQUNqRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTtZQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFDaEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFDbEMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUNmLENBQUM7O2dCQTdERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUpRLFVBQVU7Ozs0QkFEbkI7Q0FpRUMsQUE5REQsSUE4REM7U0EzRFksaUJBQWlCOzs7Ozs7SUFDaEIsbUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWNvbkNvbmZpZywgSUNPTl9UWVBFUyB9IGZyb20gJy4vaWNvbi5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBJY29uTG9hZGVyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnOiBJY29uQ29uZmlnKSB7fVxuXG4gIHVzZVN2ZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuaWNvbiAmJiB0aGlzLmNvbmZpZy5pY29uLnVzZVN2ZztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBwYXRoIHRvIHRoZSBzdmcgbGluay4gVGhlIGxpbmsgc3VwcG9ydHMgcGF0aCBuYW1lc1xuICAgKiBhcyB3ZWxsLCBpZiB0aGUgY29uZmlnIGhhcyBiZWVuIHNldHVwIHRvIHN1cHBvcnQgYSBzdmcgZmlsZSBwYXRoLlxuICAgKiBBZGRpdGlvbmFsbHksIHRoZSBpY29uIHByZWZpeCB3aWxsIGJlIHRha2VuIGludG8gYWNjb3VudCB0byBwcmVmaXggdGhlXG4gICAqIGljb24gSURzIGluIHRoZSBTVkcuXG4gICAqL1xuICBnZXRTdmdQYXRoKGljb25UeXBlOiBJQ09OX1RZUEVTIHwgc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoIXRoaXMudXNlU3ZnKCkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBsZXQgcGF0aCA9ICcnO1xuXG4gICAgaWYgKHRoaXMuY29uZmlnLmljb24gJiYgdGhpcy5jb25maWcuaWNvbi5zdmdQYXRoKSB7XG4gICAgICBwYXRoID0gdGhpcy5jb25maWcuaWNvbi5zdmdQYXRoO1xuICAgIH1cbiAgICAvLyBpZiB0aGVyZSdzIG5vIG1hcHBpbmcgY29uZmlndXJlZCwgd2UgdXNlIHRoZSBkZWZhdWx0IHZhbHVlXG4gICAgcGF0aCArPSAnIyc7XG4gICAgaWYgKHRoaXMuY29uZmlnLmljb24gJiYgdGhpcy5jb25maWcuaWNvbi5wcmVmaXgpIHtcbiAgICAgIHBhdGggKz0gdGhpcy5jb25maWcuaWNvbi5wcmVmaXg7XG4gICAgfVxuICAgIHBhdGggKz0gdGhpcy5nZXRNYXBwZWRUeXBlKGljb25UeXBlKTtcbiAgICByZXR1cm4gcGF0aDtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiByZXR1cm5zIGFuIGFycmF5IG9mIGNzcyBjbGFzc2VzIHRoYXQgY2FuIGJlIHVzZWQgdG9cbiAgICogcmVuZGVyIHRoZSBpY29uIGJ5IENTUyAvIGZvbnQuIFRoaXMgaXMgZHJpdmVuIGJ5IHRoZSBgaWNvblR5cGVgXG4gICAqIGFuZCB0aGUgaWNvbiBjb25maWd1cmF0aW9uLCBzbyB0aGF0IG11bHRpcGxlIGljb24gZm9udHMgYXJlXG4gICAqIHN1cHBvcnRlZCwgc3VjaCBhcyBmb250IGF3ZXNvbWUsIGdseXBpY29ucywgT2N0aWNvbnMsIGV0Yy5cbiAgICovXG4gIGdldFN0eWxlQ2xhc3NlcyhpY29uVHlwZTogSUNPTl9UWVBFUyB8IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBzdHlsZUNsYXNzZXMgPSBbXTtcblxuICAgIGlmICh0aGlzLmNvbmZpZy5pY29uICYmIHRoaXMuY29uZmlnLmljb24uaWNvbkNsYXNzKSB7XG4gICAgICBzdHlsZUNsYXNzZXMucHVzaCh0aGlzLmNvbmZpZy5pY29uLmljb25DbGFzcyk7XG4gICAgfVxuICAgIGxldCB0eXBlID0gdGhpcy5nZXRNYXBwZWRUeXBlKGljb25UeXBlKTtcbiAgICBpZiAodGhpcy5jb25maWcuaWNvbiAmJiB0aGlzLmNvbmZpZy5pY29uLnByZWZpeCkge1xuICAgICAgdHlwZSA9IHRoaXMuY29uZmlnLmljb24ucHJlZml4ICsgdHlwZTtcbiAgICB9XG4gICAgc3R5bGVDbGFzc2VzLnB1c2godHlwZSk7XG4gICAgcmV0dXJuIHN0eWxlQ2xhc3NlcztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TWFwcGVkVHlwZShpY29uVHlwZTogSUNPTl9UWVBFUyB8IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5pY29uICYmXG4gICAgICB0aGlzLmNvbmZpZy5pY29uLmljb25zICYmXG4gICAgICB0aGlzLmNvbmZpZy5pY29uLmljb25zW2ljb25UeXBlXVxuICAgICAgPyB0aGlzLmNvbmZpZy5pY29uLmljb25zW2ljb25UeXBlXVxuICAgICAgOiBpY29uVHlwZTtcbiAgfVxufVxuIl19