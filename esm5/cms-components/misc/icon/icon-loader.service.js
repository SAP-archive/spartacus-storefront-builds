/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { IconConfig } from './icon.config';
import * as i0 from "@angular/core";
import * as i1 from "./icon.config";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1sb2FkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL21pc2MvaWNvbi9pY29uLWxvYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQWMsTUFBTSxlQUFlLENBQUM7OztBQUV2RDtJQUlFLDJCQUFvQixNQUFrQjtRQUFsQixXQUFNLEdBQU4sTUFBTSxDQUFZO0lBQUcsQ0FBQzs7OztJQUUxQyxrQ0FBTTs7O0lBQU47UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyRCxDQUFDO0lBRUQ7Ozs7O09BS0c7Ozs7Ozs7OztJQUNILHNDQUFVOzs7Ozs7OztJQUFWLFVBQVcsUUFBNkI7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNsQixPQUFPLElBQUksQ0FBQztTQUNiOztZQUNHLElBQUksR0FBRyxFQUFFO1FBRWIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEQsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNqQztRQUNELDZEQUE2RDtRQUM3RCxJQUFJLElBQUksR0FBRyxDQUFDO1FBQ1osSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDL0MsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNqQztRQUNELElBQUksSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7Ozs7T0FNRzs7Ozs7Ozs7OztJQUNILDJDQUFlOzs7Ozs7Ozs7SUFBZixVQUFnQixRQUE2Qjs7WUFDckMsWUFBWSxHQUFHLEVBQUU7UUFFdkIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEQsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMvQzs7WUFDRyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFDdkMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDL0MsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDdkM7UUFDRCxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7Ozs7OztJQUVPLHlDQUFhOzs7OztJQUFyQixVQUFzQixRQUE2QjtRQUNqRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTtZQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFDaEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFDbEMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUNmLENBQUM7O2dCQTdERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUpRLFVBQVU7Ozs0QkFEbkI7Q0FpRUMsQUE5REQsSUE4REM7U0EzRFksaUJBQWlCOzs7Ozs7SUFDaEIsbUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWNvbkNvbmZpZywgSUNPTl9UWVBFUyB9IGZyb20gJy4vaWNvbi5jb25maWcnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgSWNvbkxvYWRlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZzogSWNvbkNvbmZpZykge31cblxuICB1c2VTdmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmljb24gJiYgdGhpcy5jb25maWcuaWNvbi51c2VTdmc7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcGF0aCB0byB0aGUgc3ZnIGxpbmsuIFRoZSBsaW5rIHN1cHBvcnRzIHBhdGggbmFtZXNcbiAgICogYXMgd2VsbCwgaWYgdGhlIGNvbmZpZyBoYXMgYmVlbiBzZXR1cCB0byBzdXBwb3J0IGEgc3ZnIGZpbGUgcGF0aC5cbiAgICogQWRkaXRpb25hbGx5LCB0aGUgaWNvbiBwcmVmaXggd2lsbCBiZSB0YWtlbiBpbnRvIGFjY291bnQgdG8gcHJlZml4IHRoZVxuICAgKiBpY29uIElEcyBpbiB0aGUgU1ZHLlxuICAgKi9cbiAgZ2V0U3ZnUGF0aChpY29uVHlwZTogSUNPTl9UWVBFUyB8IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKCF0aGlzLnVzZVN2ZygpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgbGV0IHBhdGggPSAnJztcblxuICAgIGlmICh0aGlzLmNvbmZpZy5pY29uICYmIHRoaXMuY29uZmlnLmljb24uc3ZnUGF0aCkge1xuICAgICAgcGF0aCA9IHRoaXMuY29uZmlnLmljb24uc3ZnUGF0aDtcbiAgICB9XG4gICAgLy8gaWYgdGhlcmUncyBubyBtYXBwaW5nIGNvbmZpZ3VyZWQsIHdlIHVzZSB0aGUgZGVmYXVsdCB2YWx1ZVxuICAgIHBhdGggKz0gJyMnO1xuICAgIGlmICh0aGlzLmNvbmZpZy5pY29uICYmIHRoaXMuY29uZmlnLmljb24ucHJlZml4KSB7XG4gICAgICBwYXRoICs9IHRoaXMuY29uZmlnLmljb24ucHJlZml4O1xuICAgIH1cbiAgICBwYXRoICs9IHRoaXMuZ2V0TWFwcGVkVHlwZShpY29uVHlwZSk7XG4gICAgcmV0dXJuIHBhdGg7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogcmV0dXJucyBhbiBhcnJheSBvZiBjc3MgY2xhc3NlcyB0aGF0IGNhbiBiZSB1c2VkIHRvXG4gICAqIHJlbmRlciB0aGUgaWNvbiBieSBDU1MgLyBmb250LiBUaGlzIGlzIGRyaXZlbiBieSB0aGUgYGljb25UeXBlYFxuICAgKiBhbmQgdGhlIGljb24gY29uZmlndXJhdGlvbiwgc28gdGhhdCBtdWx0aXBsZSBpY29uIGZvbnRzIGFyZVxuICAgKiBzdXBwb3J0ZWQsIHN1Y2ggYXMgZm9udCBhd2Vzb21lLCBnbHlwaWNvbnMsIE9jdGljb25zLCBldGMuXG4gICAqL1xuICBnZXRTdHlsZUNsYXNzZXMoaWNvblR5cGU6IElDT05fVFlQRVMgfCBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgY29uc3Qgc3R5bGVDbGFzc2VzID0gW107XG5cbiAgICBpZiAodGhpcy5jb25maWcuaWNvbiAmJiB0aGlzLmNvbmZpZy5pY29uLmljb25DbGFzcykge1xuICAgICAgc3R5bGVDbGFzc2VzLnB1c2godGhpcy5jb25maWcuaWNvbi5pY29uQ2xhc3MpO1xuICAgIH1cbiAgICBsZXQgdHlwZSA9IHRoaXMuZ2V0TWFwcGVkVHlwZShpY29uVHlwZSk7XG4gICAgaWYgKHRoaXMuY29uZmlnLmljb24gJiYgdGhpcy5jb25maWcuaWNvbi5wcmVmaXgpIHtcbiAgICAgIHR5cGUgPSB0aGlzLmNvbmZpZy5pY29uLnByZWZpeCArIHR5cGU7XG4gICAgfVxuICAgIHN0eWxlQ2xhc3Nlcy5wdXNoKHR5cGUpO1xuICAgIHJldHVybiBzdHlsZUNsYXNzZXM7XG4gIH1cblxuICBwcml2YXRlIGdldE1hcHBlZFR5cGUoaWNvblR5cGU6IElDT05fVFlQRVMgfCBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuaWNvbiAmJlxuICAgICAgdGhpcy5jb25maWcuaWNvbi5pY29ucyAmJlxuICAgICAgdGhpcy5jb25maWcuaWNvbi5pY29uc1tpY29uVHlwZV1cbiAgICAgID8gdGhpcy5jb25maWcuaWNvbi5pY29uc1tpY29uVHlwZV1cbiAgICAgIDogaWNvblR5cGU7XG4gIH1cbn1cbiJdfQ==