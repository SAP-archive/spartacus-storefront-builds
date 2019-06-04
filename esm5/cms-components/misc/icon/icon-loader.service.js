/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { WindowRef } from '@spartacus/core';
import { IconConfig, IconResourceType, } from './icon.model';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "./icon.model";
var IconLoaderService = /** @class */ (function () {
    function IconLoaderService(winRef, config) {
        this.winRef = winRef;
        this.config = config;
        this.loadedResources = [];
    }
    /**
     * Indicates whether the given icon type is configured to use SVG.
     */
    /**
     * Indicates whether the given icon type is configured to use SVG.
     * @param {?} iconType
     * @return {?}
     */
    IconLoaderService.prototype.useSvg = /**
     * Indicates whether the given icon type is configured to use SVG.
     * @param {?} iconType
     * @return {?}
     */
    function (iconType) {
        return (this.config.icon.resources &&
            !!this.config.icon.resources.find((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                return res.types &&
                    res.type === IconResourceType.SVG &&
                    res.types.includes(iconType);
            })));
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
        /** @type {?} */
        var svgResource = this.config.icon.resources.find((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            return res.type === IconResourceType.SVG &&
                res.types &&
                res.types.includes(iconType);
        }));
        if (svgResource) {
            return svgResource.url
                ? svgResource.url + "#" + this.getSymbol(iconType)
                : "#" + this.getSymbol(iconType);
        }
    };
    /**
     *
     * Returns the symbol class(es) for the icon type.
     */
    /**
     *
     * Returns the symbol class(es) for the icon type.
     * @param {?} iconType
     * @return {?}
     */
    IconLoaderService.prototype.getStyleClasses = /**
     *
     * Returns the symbol class(es) for the icon type.
     * @param {?} iconType
     * @return {?}
     */
    function (iconType) {
        return this.getSymbol(iconType) || '';
    };
    /**
     * Loads the resource url (if any) for the given icon.
     * The icon will only be loaded once.
     *
     * NOTE: this is not working when the shadow is used as there's
     * no head element available and the link must be loaded for every
     * web component.
     */
    /**
     * Loads the resource url (if any) for the given icon.
     * The icon will only be loaded once.
     *
     * NOTE: this is not working when the shadow is used as there's
     * no head element available and the link must be loaded for every
     * web component.
     * @param {?} iconType
     * @return {?}
     */
    IconLoaderService.prototype.addLinkResource = /**
     * Loads the resource url (if any) for the given icon.
     * The icon will only be loaded once.
     *
     * NOTE: this is not working when the shadow is used as there's
     * no head element available and the link must be loaded for every
     * web component.
     * @param {?} iconType
     * @return {?}
     */
    function (iconType) {
        /** @type {?} */
        var resource = this.findResource(iconType, IconResourceType.LINK);
        if (resource && resource.url) {
            if (!this.loadedResources.includes(resource.url)) {
                this.loadedResources.push(resource.url);
                /** @type {?} */
                var head = this.winRef.document.getElementsByTagName('head')[0];
                /** @type {?} */
                var link = this.winRef.document.createElement('link');
                link.rel = 'stylesheet';
                link.type = 'text/css';
                link.href = resource.url;
                head.appendChild(link);
            }
        }
    };
    /**
     * @private
     * @param {?} iconType
     * @param {?} resourceType
     * @return {?}
     */
    IconLoaderService.prototype.findResource = /**
     * @private
     * @param {?} iconType
     * @param {?} resourceType
     * @return {?}
     */
    function (iconType, resourceType) {
        if (!this.config.icon.resources) {
            return;
        }
        /** @type {?} */
        var resource = this.config.icon.resources.find((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            return res.type === resourceType && res.types && res.types.includes(iconType);
        }));
        // no specific resource found, let's try to find a one-size-fits-all resource
        if (!resource) {
            resource = this.config.icon.resources.find((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return (res.type === resourceType && !res.types) || res.types === []; }));
        }
        return resource;
    };
    /**
     * @private
     * @param {?} iconType
     * @return {?}
     */
    IconLoaderService.prototype.getSymbol = /**
     * @private
     * @param {?} iconType
     * @return {?}
     */
    function (iconType) {
        if (this.config.icon &&
            this.config.icon.symbols &&
            this.config.icon.symbols[iconType]) {
            return this.config.icon.symbols[iconType];
        }
    };
    IconLoaderService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    IconLoaderService.ctorParameters = function () { return [
        { type: WindowRef },
        { type: IconConfig }
    ]; };
    /** @nocollapse */ IconLoaderService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function IconLoaderService_Factory() { return new IconLoaderService(i0.ɵɵinject(i1.WindowRef), i0.ɵɵinject(i2.IconConfig)); }, token: IconLoaderService, providedIn: "root" });
    return IconLoaderService;
}());
export { IconLoaderService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IconLoaderService.prototype.loadedResources;
    /**
     * @type {?}
     * @protected
     */
    IconLoaderService.prototype.winRef;
    /**
     * @type {?}
     * @protected
     */
    IconLoaderService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1sb2FkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL21pc2MvaWNvbi9pY29uLWxvYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQ0wsVUFBVSxFQUVWLGdCQUFnQixHQUVqQixNQUFNLGNBQWMsQ0FBQzs7OztBQUV0QjtJQUtFLDJCQUFzQixNQUFpQixFQUFZLE1BQWtCO1FBQS9DLFdBQU0sR0FBTixNQUFNLENBQVc7UUFBWSxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBRDdELG9CQUFlLEdBQUcsRUFBRSxDQUFDO0lBQzJDLENBQUM7SUFFekU7O09BRUc7Ozs7OztJQUNILGtDQUFNOzs7OztJQUFOLFVBQU8sUUFBbUI7UUFDeEIsT0FBTyxDQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVM7WUFDMUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJOzs7O1lBQy9CLFVBQUEsR0FBRztnQkFDRCxPQUFBLEdBQUcsQ0FBQyxLQUFLO29CQUNULEdBQUcsQ0FBQyxJQUFJLEtBQUssZ0JBQWdCLENBQUMsR0FBRztvQkFDakMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1lBRjVCLENBRTRCLEVBQy9CLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7T0FLRzs7Ozs7Ozs7O0lBQ0gsc0NBQVU7Ozs7Ozs7O0lBQVYsVUFBVyxRQUFtQjs7WUFDdEIsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJOzs7O1FBQ2pE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QUFPO1lBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFDbEM7WUFDQSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMzQztJQUNILENBQUM7O2dCQXpHRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVZRLFNBQVM7Z0JBRWhCLFVBQVU7Ozs0QkFIWjtDQW1IQyxBQTFHRCxJQTBHQztTQXZHWSxpQkFBaUI7Ozs7OztJQUM1Qiw0Q0FBNkI7Ozs7O0lBQ2pCLG1DQUEyQjs7Ozs7SUFBRSxtQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHtcbiAgSWNvbkNvbmZpZyxcbiAgSWNvbkNvbmZpZ1Jlc291cmNlLFxuICBJY29uUmVzb3VyY2VUeXBlLFxuICBJQ09OX1RZUEUsXG59IGZyb20gJy4vaWNvbi5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBJY29uTG9hZGVyU2VydmljZSB7XG4gIHByaXZhdGUgbG9hZGVkUmVzb3VyY2VzID0gW107XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB3aW5SZWY6IFdpbmRvd1JlZiwgcHJvdGVjdGVkIGNvbmZpZzogSWNvbkNvbmZpZykge31cblxuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGdpdmVuIGljb24gdHlwZSBpcyBjb25maWd1cmVkIHRvIHVzZSBTVkcuXG4gICAqL1xuICB1c2VTdmcoaWNvblR5cGU6IElDT05fVFlQRSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmNvbmZpZy5pY29uLnJlc291cmNlcyAmJlxuICAgICAgISF0aGlzLmNvbmZpZy5pY29uLnJlc291cmNlcy5maW5kKFxuICAgICAgICByZXMgPT5cbiAgICAgICAgICByZXMudHlwZXMgJiZcbiAgICAgICAgICByZXMudHlwZSA9PT0gSWNvblJlc291cmNlVHlwZS5TVkcgJiZcbiAgICAgICAgICByZXMudHlwZXMuaW5jbHVkZXMoaWNvblR5cGUpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBwYXRoIHRvIHRoZSBzdmcgbGluay4gVGhlIGxpbmsgc3VwcG9ydHMgcGF0aCBuYW1lc1xuICAgKiBhcyB3ZWxsLCBpZiB0aGUgY29uZmlnIGhhcyBiZWVuIHNldHVwIHRvIHN1cHBvcnQgYSBzdmcgZmlsZSBwYXRoLlxuICAgKiBBZGRpdGlvbmFsbHksIHRoZSBpY29uIHByZWZpeCB3aWxsIGJlIHRha2VuIGludG8gYWNjb3VudCB0byBwcmVmaXggdGhlXG4gICAqIGljb24gSURzIGluIHRoZSBTVkcuXG4gICAqL1xuICBnZXRTdmdQYXRoKGljb25UeXBlOiBJQ09OX1RZUEUpOiBzdHJpbmcge1xuICAgIGNvbnN0IHN2Z1Jlc291cmNlID0gdGhpcy5jb25maWcuaWNvbi5yZXNvdXJjZXMuZmluZChcbiAgICAgIHJlcyA9PlxuICAgICAgICByZXMudHlwZSA9PT0gSWNvblJlc291cmNlVHlwZS5TVkcgJiZcbiAgICAgICAgcmVzLnR5cGVzICYmXG4gICAgICAgIHJlcy50eXBlcy5pbmNsdWRlcyhpY29uVHlwZSlcbiAgICApO1xuICAgIGlmIChzdmdSZXNvdXJjZSkge1xuICAgICAgcmV0dXJuIHN2Z1Jlc291cmNlLnVybFxuICAgICAgICA/IGAke3N2Z1Jlc291cmNlLnVybH0jJHt0aGlzLmdldFN5bWJvbChpY29uVHlwZSl9YFxuICAgICAgICA6IGAjJHt0aGlzLmdldFN5bWJvbChpY29uVHlwZSl9YDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogUmV0dXJucyB0aGUgc3ltYm9sIGNsYXNzKGVzKSBmb3IgdGhlIGljb24gdHlwZS5cbiAgICovXG4gIGdldFN0eWxlQ2xhc3NlcyhpY29uVHlwZTogSUNPTl9UWVBFIHwgc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTeW1ib2woaWNvblR5cGUpIHx8ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWRzIHRoZSByZXNvdXJjZSB1cmwgKGlmIGFueSkgZm9yIHRoZSBnaXZlbiBpY29uLlxuICAgKiBUaGUgaWNvbiB3aWxsIG9ubHkgYmUgbG9hZGVkIG9uY2UuXG4gICAqXG4gICAqIE5PVEU6IHRoaXMgaXMgbm90IHdvcmtpbmcgd2hlbiB0aGUgc2hhZG93IGlzIHVzZWQgYXMgdGhlcmUnc1xuICAgKiBubyBoZWFkIGVsZW1lbnQgYXZhaWxhYmxlIGFuZCB0aGUgbGluayBtdXN0IGJlIGxvYWRlZCBmb3IgZXZlcnlcbiAgICogd2ViIGNvbXBvbmVudC5cbiAgICovXG4gIGFkZExpbmtSZXNvdXJjZShpY29uVHlwZTogSUNPTl9UWVBFKTogdm9pZCB7XG4gICAgY29uc3QgcmVzb3VyY2U6IEljb25Db25maWdSZXNvdXJjZSA9IHRoaXMuZmluZFJlc291cmNlKFxuICAgICAgaWNvblR5cGUsXG4gICAgICBJY29uUmVzb3VyY2VUeXBlLkxJTktcbiAgICApO1xuICAgIGlmIChyZXNvdXJjZSAmJiByZXNvdXJjZS51cmwpIHtcbiAgICAgIGlmICghdGhpcy5sb2FkZWRSZXNvdXJjZXMuaW5jbHVkZXMocmVzb3VyY2UudXJsKSkge1xuICAgICAgICB0aGlzLmxvYWRlZFJlc291cmNlcy5wdXNoKHJlc291cmNlLnVybCk7XG4gICAgICAgIGNvbnN0IGhlYWQgPSB0aGlzLndpblJlZi5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICAgICAgICBjb25zdCBsaW5rID0gdGhpcy53aW5SZWYuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgICAgICAgbGluay50eXBlID0gJ3RleHQvY3NzJztcbiAgICAgICAgbGluay5ocmVmID0gcmVzb3VyY2UudXJsO1xuICAgICAgICBoZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZmluZFJlc291cmNlKFxuICAgIGljb25UeXBlOiBJQ09OX1RZUEUsXG4gICAgcmVzb3VyY2VUeXBlOiBJY29uUmVzb3VyY2VUeXBlXG4gICk6IEljb25Db25maWdSZXNvdXJjZSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZy5pY29uLnJlc291cmNlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCByZXNvdXJjZSA9IHRoaXMuY29uZmlnLmljb24ucmVzb3VyY2VzLmZpbmQoXG4gICAgICByZXMgPT5cbiAgICAgICAgcmVzLnR5cGUgPT09IHJlc291cmNlVHlwZSAmJiByZXMudHlwZXMgJiYgcmVzLnR5cGVzLmluY2x1ZGVzKGljb25UeXBlKVxuICAgICk7XG4gICAgLy8gbm8gc3BlY2lmaWMgcmVzb3VyY2UgZm91bmQsIGxldCdzIHRyeSB0byBmaW5kIGEgb25lLXNpemUtZml0cy1hbGwgcmVzb3VyY2VcbiAgICBpZiAoIXJlc291cmNlKSB7XG4gICAgICByZXNvdXJjZSA9IHRoaXMuY29uZmlnLmljb24ucmVzb3VyY2VzLmZpbmQoXG4gICAgICAgIHJlcyA9PiAocmVzLnR5cGUgPT09IHJlc291cmNlVHlwZSAmJiAhcmVzLnR5cGVzKSB8fCByZXMudHlwZXMgPT09IFtdXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gcmVzb3VyY2U7XG4gIH1cblxuICBwcml2YXRlIGdldFN5bWJvbChpY29uVHlwZTogSUNPTl9UWVBFIHwgc3RyaW5nKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5jb25maWcuaWNvbiAmJlxuICAgICAgdGhpcy5jb25maWcuaWNvbi5zeW1ib2xzICYmXG4gICAgICB0aGlzLmNvbmZpZy5pY29uLnN5bWJvbHNbaWNvblR5cGVdXG4gICAgKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb25maWcuaWNvbi5zeW1ib2xzW2ljb25UeXBlXTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==