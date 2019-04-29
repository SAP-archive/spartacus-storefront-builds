/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { IconConfig } from './icon.config';
import * as i0 from "@angular/core";
import * as i1 from "./icon.config";
export class IconLoaderService {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
    }
    /**
     * @return {?}
     */
    useSvg() {
        return this.config.icon && this.config.icon.useSvg;
    }
    /**
     * Returns the path to the svg link. The link supports path names
     * as well, if the config has been setup to support a svg file path.
     * Additionally, the icon prefix will be taken into account to prefix the
     * icon IDs in the SVG.
     * @param {?} iconType
     * @return {?}
     */
    getSvgPath(iconType) {
        if (!this.useSvg()) {
            return null;
        }
        /** @type {?} */
        let path = '';
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
    }
    /**
     *
     * returns an array of css classes that can be used to
     * render the icon by CSS / font. This is driven by the `iconType`
     * and the icon configuration, so that multiple icon fonts are
     * supported, such as font awesome, glypicons, Octicons, etc.
     * @param {?} iconType
     * @return {?}
     */
    getStyleClasses(iconType) {
        /** @type {?} */
        const styleClasses = [];
        if (this.config.icon && this.config.icon.iconClass) {
            styleClasses.push(this.config.icon.iconClass);
        }
        /** @type {?} */
        let type = this.getMappedType(iconType);
        if (this.config.icon && this.config.icon.prefix) {
            type = this.config.icon.prefix + type;
        }
        styleClasses.push(type);
        return styleClasses;
    }
    /**
     * @private
     * @param {?} iconType
     * @return {?}
     */
    getMappedType(iconType) {
        return this.config.icon &&
            this.config.icon.icons &&
            this.config.icon.icons[iconType]
            ? this.config.icon.icons[iconType]
            : iconType;
    }
}
IconLoaderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
IconLoaderService.ctorParameters = () => [
    { type: IconConfig }
];
/** @nocollapse */ IconLoaderService.ngInjectableDef = i0.defineInjectable({ factory: function IconLoaderService_Factory() { return new IconLoaderService(i0.inject(i1.IconConfig)); }, token: IconLoaderService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    IconLoaderService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1sb2FkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL21pc2MvaWNvbi9pY29uLWxvYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQWMsTUFBTSxlQUFlLENBQUM7OztBQUt2RCxNQUFNLE9BQU8saUJBQWlCOzs7O0lBQzVCLFlBQW9CLE1BQWtCO1FBQWxCLFdBQU0sR0FBTixNQUFNLENBQVk7SUFBRyxDQUFDOzs7O0lBRTFDLE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyRCxDQUFDOzs7Ozs7Ozs7SUFRRCxVQUFVLENBQUMsUUFBNkI7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNsQixPQUFPLElBQUksQ0FBQztTQUNiOztZQUNHLElBQUksR0FBRyxFQUFFO1FBRWIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEQsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNqQztRQUNELDZEQUE2RDtRQUM3RCxJQUFJLElBQUksR0FBRyxDQUFDO1FBQ1osSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDL0MsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNqQztRQUNELElBQUksSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7Ozs7OztJQVNELGVBQWUsQ0FBQyxRQUE2Qjs7Y0FDckMsWUFBWSxHQUFHLEVBQUU7UUFFdkIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEQsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMvQzs7WUFDRyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFDdkMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDL0MsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDdkM7UUFDRCxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7Ozs7OztJQUVPLGFBQWEsQ0FBQyxRQUE2QjtRQUNqRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTtZQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFDaEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFDbEMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUNmLENBQUM7OztZQTdERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFKUSxVQUFVOzs7Ozs7OztJQU1MLG1DQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEljb25Db25maWcsIElDT05fVFlQRVMgfSBmcm9tICcuL2ljb24uY29uZmlnJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEljb25Mb2FkZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWc6IEljb25Db25maWcpIHt9XG5cbiAgdXNlU3ZnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5pY29uICYmIHRoaXMuY29uZmlnLmljb24udXNlU3ZnO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHBhdGggdG8gdGhlIHN2ZyBsaW5rLiBUaGUgbGluayBzdXBwb3J0cyBwYXRoIG5hbWVzXG4gICAqIGFzIHdlbGwsIGlmIHRoZSBjb25maWcgaGFzIGJlZW4gc2V0dXAgdG8gc3VwcG9ydCBhIHN2ZyBmaWxlIHBhdGguXG4gICAqIEFkZGl0aW9uYWxseSwgdGhlIGljb24gcHJlZml4IHdpbGwgYmUgdGFrZW4gaW50byBhY2NvdW50IHRvIHByZWZpeCB0aGVcbiAgICogaWNvbiBJRHMgaW4gdGhlIFNWRy5cbiAgICovXG4gIGdldFN2Z1BhdGgoaWNvblR5cGU6IElDT05fVFlQRVMgfCBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICghdGhpcy51c2VTdmcoKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGxldCBwYXRoID0gJyc7XG5cbiAgICBpZiAodGhpcy5jb25maWcuaWNvbiAmJiB0aGlzLmNvbmZpZy5pY29uLnN2Z1BhdGgpIHtcbiAgICAgIHBhdGggPSB0aGlzLmNvbmZpZy5pY29uLnN2Z1BhdGg7XG4gICAgfVxuICAgIC8vIGlmIHRoZXJlJ3Mgbm8gbWFwcGluZyBjb25maWd1cmVkLCB3ZSB1c2UgdGhlIGRlZmF1bHQgdmFsdWVcbiAgICBwYXRoICs9ICcjJztcbiAgICBpZiAodGhpcy5jb25maWcuaWNvbiAmJiB0aGlzLmNvbmZpZy5pY29uLnByZWZpeCkge1xuICAgICAgcGF0aCArPSB0aGlzLmNvbmZpZy5pY29uLnByZWZpeDtcbiAgICB9XG4gICAgcGF0aCArPSB0aGlzLmdldE1hcHBlZFR5cGUoaWNvblR5cGUpO1xuICAgIHJldHVybiBwYXRoO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIHJldHVybnMgYW4gYXJyYXkgb2YgY3NzIGNsYXNzZXMgdGhhdCBjYW4gYmUgdXNlZCB0b1xuICAgKiByZW5kZXIgdGhlIGljb24gYnkgQ1NTIC8gZm9udC4gVGhpcyBpcyBkcml2ZW4gYnkgdGhlIGBpY29uVHlwZWBcbiAgICogYW5kIHRoZSBpY29uIGNvbmZpZ3VyYXRpb24sIHNvIHRoYXQgbXVsdGlwbGUgaWNvbiBmb250cyBhcmVcbiAgICogc3VwcG9ydGVkLCBzdWNoIGFzIGZvbnQgYXdlc29tZSwgZ2x5cGljb25zLCBPY3RpY29ucywgZXRjLlxuICAgKi9cbiAgZ2V0U3R5bGVDbGFzc2VzKGljb25UeXBlOiBJQ09OX1RZUEVTIHwgc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHN0eWxlQ2xhc3NlcyA9IFtdO1xuXG4gICAgaWYgKHRoaXMuY29uZmlnLmljb24gJiYgdGhpcy5jb25maWcuaWNvbi5pY29uQ2xhc3MpIHtcbiAgICAgIHN0eWxlQ2xhc3Nlcy5wdXNoKHRoaXMuY29uZmlnLmljb24uaWNvbkNsYXNzKTtcbiAgICB9XG4gICAgbGV0IHR5cGUgPSB0aGlzLmdldE1hcHBlZFR5cGUoaWNvblR5cGUpO1xuICAgIGlmICh0aGlzLmNvbmZpZy5pY29uICYmIHRoaXMuY29uZmlnLmljb24ucHJlZml4KSB7XG4gICAgICB0eXBlID0gdGhpcy5jb25maWcuaWNvbi5wcmVmaXggKyB0eXBlO1xuICAgIH1cbiAgICBzdHlsZUNsYXNzZXMucHVzaCh0eXBlKTtcbiAgICByZXR1cm4gc3R5bGVDbGFzc2VzO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRNYXBwZWRUeXBlKGljb25UeXBlOiBJQ09OX1RZUEVTIHwgc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmljb24gJiZcbiAgICAgIHRoaXMuY29uZmlnLmljb24uaWNvbnMgJiZcbiAgICAgIHRoaXMuY29uZmlnLmljb24uaWNvbnNbaWNvblR5cGVdXG4gICAgICA/IHRoaXMuY29uZmlnLmljb24uaWNvbnNbaWNvblR5cGVdXG4gICAgICA6IGljb25UeXBlO1xuICB9XG59XG4iXX0=