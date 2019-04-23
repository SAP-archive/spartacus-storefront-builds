/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { CmsConfig, } from '@spartacus/core';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
var BannerComponentService = /** @class */ (function () {
    function BannerComponentService(component, config) {
        var _this = this;
        this.component = component;
        this.config = config;
        this.convertToAbsoluteUrl = map(function (url) {
            return url.startsWith('http') ? url : _this.getBaseUrl() + url;
        });
        // TODO: move to a more generic location
        // TODO: Make configurable
        this.formats = [
            { code: 'mobile', width: 200 },
            { code: 'tablet', width: 500 },
            { code: 'desktop', width: 800 },
            { code: 'widescreen', width: 1200 },
        ];
    }
    /**
     * @param {?} data
     * @return {?}
     */
    BannerComponentService.hasMedia = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return !!data.media;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    BannerComponentService.hasHeadline = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return !!data.headline;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    BannerComponentService.hasContent = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return !!data.content;
    };
    /**
     * @return {?}
     */
    BannerComponentService.prototype.getComponentData = /**
     * @return {?}
     */
    function () {
        return this.component.data$;
    };
    /**
     * @return {?}
     */
    BannerComponentService.prototype.hasImage = /**
     * @return {?}
     */
    function () {
        return this.getComponentData().pipe(map(BannerComponentService.hasMedia));
    };
    /**
     * @return {?}
     */
    BannerComponentService.prototype.hasHeadline = /**
     * @return {?}
     */
    function () {
        return this.getComponentData().pipe(map(BannerComponentService.hasHeadline));
    };
    /**
     * @return {?}
     */
    BannerComponentService.prototype.hasContent = /**
     * @return {?}
     */
    function () {
        return this.getComponentData().pipe(map(BannerComponentService.hasContent));
    };
    /**
     * @return {?}
     */
    BannerComponentService.prototype.getImageUrl = /**
     * @return {?}
     */
    function () {
        return this.getComponentData().pipe(map(function (data) {
            return BannerComponentService.hasMedia(data)
                ? ((/** @type {?} */ (data.media))).url
                : '';
        }));
    };
    /**
     * @return {?}
     */
    BannerComponentService.prototype.getResponsiveImageUrl = /**
     * @return {?}
     */
    function () {
        return this.getComponentData().pipe(map(function (data) {
            return BannerComponentService.hasMedia(data)
                ? ((/** @type {?} */ (data.media))).desktop.url
                : '';
        }));
    };
    /**
     * @return {?}
     */
    BannerComponentService.prototype.getTarget = /**
     * @return {?}
     */
    function () {
        return this.getComponentData().pipe(map(function (data) {
            return !data.external || data.external === 'false' ? '_self' : '_blank';
        }));
    };
    /**
     * @return {?}
     */
    BannerComponentService.prototype.getAltText = /**
     * @return {?}
     */
    function () {
        return this.getComponentData().pipe(map(function (data) {
            return BannerComponentService.hasMedia(data)
                ? ((/** @type {?} */ (data.media))).altText
                : '';
        }));
    };
    /**
     * @return {?}
     */
    BannerComponentService.prototype.getHeadline = /**
     * @return {?}
     */
    function () {
        return this.getComponentData().pipe(map(function (data) {
            return BannerComponentService.hasHeadline(data) ? data.headline : '';
        }));
    };
    /**
     * @return {?}
     */
    BannerComponentService.prototype.getContent = /**
     * @return {?}
     */
    function () {
        return this.getComponentData().pipe(map(function (data) { return (BannerComponentService.hasContent(data) ? data.content : ''); }));
    };
    /**
     * @return {?}
     */
    BannerComponentService.prototype.getBaseUrl = /**
     * @return {?}
     */
    function () {
        return this.config.backend.occ.baseUrl || '';
    };
    /**
     * @return {?}
     */
    BannerComponentService.prototype.getImageAbsoluteUrl = /**
     * @return {?}
     */
    function () {
        return this.getImageUrl().pipe(this.convertToAbsoluteUrl);
    };
    /**
     * @return {?}
     */
    BannerComponentService.prototype.getResponsiveImageAbsoluteUrl = /**
     * @return {?}
     */
    function () {
        return this.getResponsiveImageUrl().pipe(this.convertToAbsoluteUrl);
    };
    /**
     * @return {?}
     */
    BannerComponentService.prototype.getResponsiveSrcSet = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.getComponentData().pipe(map(function (data) {
            return _this.formats.reduce(function (srcset, format) {
                if (typeof data.media[format.code] !== 'undefined') {
                    return (srcset += "" + _this.getBaseUrl() + data.media[format.code].url + " " + format.width + "w, ");
                }
                else {
                    return srcset;
                }
            }, '');
        }));
    };
    /**
     * @return {?}
     */
    BannerComponentService.prototype.getComponentUID = /**
     * @return {?}
     */
    function () {
        return this.component.uid;
    };
    BannerComponentService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    BannerComponentService.ctorParameters = function () { return [
        { type: CmsComponentData },
        { type: CmsConfig }
    ]; };
    return BannerComponentService;
}());
export { BannerComponentService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    BannerComponentService.prototype.convertToAbsoluteUrl;
    /**
     * @type {?}
     * @private
     */
    BannerComponentService.prototype.formats;
    /** @type {?} */
    BannerComponentService.prototype.component;
    /**
     * @type {?}
     * @protected
     */
    BannerComponentService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLmNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL2Ntcy1saWIvYmFubmVyL2Jhbm5lci5jb21wb25lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUdMLFNBQVMsR0FFVixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBR3hGO0lBRUUsZ0NBQ1MsU0FBK0MsRUFDNUMsTUFBaUI7UUFGN0IsaUJBR0k7UUFGSyxjQUFTLEdBQVQsU0FBUyxDQUFzQztRQUM1QyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBR3JCLHlCQUFvQixHQUFHLEdBQUcsQ0FBQyxVQUFDLEdBQVc7WUFDN0MsT0FBTyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFDaEUsQ0FBQyxDQUFDLENBQUM7OztRQUlLLFlBQU8sR0FBNkI7WUFDMUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7WUFDOUIsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7WUFDOUIsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7WUFDL0IsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7U0FDcEMsQ0FBQztJQWJDLENBQUM7Ozs7O0lBZUcsK0JBQVE7Ozs7SUFBZixVQUFnQixJQUFJO1FB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VUFBVSxFQUFFLEdBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsU0FDekIsTUFBTSxDQUFDLEtBQUssUUFBSyxDQUFDLENBQUM7aUJBQ3hCO3FCQUFNO29CQUNMLE9BQU8sTUFBTSxDQUFDO2lCQUNmO1lBQ0gsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxnREFBZTs7O0lBQWY7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO0lBQzVCLENBQUM7O2dCQXBJRixVQUFVOzs7O2dCQUhGLGdCQUFnQjtnQkFIdkIsU0FBUzs7SUEySVgsNkJBQUM7Q0FBQSxBQXJJRCxJQXFJQztTQXBJWSxzQkFBc0I7Ozs7OztJQU1qQyxzREFFRzs7Ozs7SUFJSCx5Q0FLRTs7SUFmQSwyQ0FBc0Q7Ozs7O0lBQ3RELHdDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtcbiAgQ21zQmFubmVyQ29tcG9uZW50LFxuICBDbXNCYW5uZXJDb21wb25lbnRNZWRpYSxcbiAgQ21zQ29uZmlnLFxuICBDbXNSZXNwb25zaXZlQmFubmVyQ29tcG9uZW50TWVkaWEsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5pbXBvcnQgeyBSZXNwb25zaXZlQmFubmVyRm9ybWF0IH0gZnJvbSAnLi9yZXNwb25zaXZlLWJhbm5lci1mb3JtYXQubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQmFubmVyQ29tcG9uZW50U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjb21wb25lbnQ6IENtc0NvbXBvbmVudERhdGE8Q21zQmFubmVyQ29tcG9uZW50PixcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBDbXNDb25maWdcbiAgKSB7fVxuXG4gIHByaXZhdGUgY29udmVydFRvQWJzb2x1dGVVcmwgPSBtYXAoKHVybDogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIHVybC5zdGFydHNXaXRoKCdodHRwJykgPyB1cmwgOiB0aGlzLmdldEJhc2VVcmwoKSArIHVybDtcbiAgfSk7XG5cbiAgLy8gVE9ETzogbW92ZSB0byBhIG1vcmUgZ2VuZXJpYyBsb2NhdGlvblxuICAvLyBUT0RPOiBNYWtlIGNvbmZpZ3VyYWJsZVxuICBwcml2YXRlIGZvcm1hdHM6IFJlc3BvbnNpdmVCYW5uZXJGb3JtYXRbXSA9IFtcbiAgICB7IGNvZGU6ICdtb2JpbGUnLCB3aWR0aDogMjAwIH0sXG4gICAgeyBjb2RlOiAndGFibGV0Jywgd2lkdGg6IDUwMCB9LFxuICAgIHsgY29kZTogJ2Rlc2t0b3AnLCB3aWR0aDogODAwIH0sXG4gICAgeyBjb2RlOiAnd2lkZXNjcmVlbicsIHdpZHRoOiAxMjAwIH0sXG4gIF07XG5cbiAgc3RhdGljIGhhc01lZGlhKGRhdGEpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISFkYXRhLm1lZGlhO1xuICB9XG5cbiAgc3RhdGljIGhhc0hlYWRsaW5lKGRhdGEpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISFkYXRhLmhlYWRsaW5lO1xuICB9XG5cbiAgc3RhdGljIGhhc0NvbnRlbnQoZGF0YSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIWRhdGEuY29udGVudDtcbiAgfVxuXG4gIGdldENvbXBvbmVudERhdGEoKTogT2JzZXJ2YWJsZTxDbXNCYW5uZXJDb21wb25lbnQ+IHtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnQuZGF0YSQ7XG4gIH1cblxuICBoYXNJbWFnZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb21wb25lbnREYXRhKCkucGlwZShtYXAoQmFubmVyQ29tcG9uZW50U2VydmljZS5oYXNNZWRpYSkpO1xuICB9XG5cbiAgaGFzSGVhZGxpbmUoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29tcG9uZW50RGF0YSgpLnBpcGUoXG4gICAgICBtYXAoQmFubmVyQ29tcG9uZW50U2VydmljZS5oYXNIZWFkbGluZSlcbiAgICApO1xuICB9XG5cbiAgaGFzQ29udGVudCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb21wb25lbnREYXRhKCkucGlwZShtYXAoQmFubmVyQ29tcG9uZW50U2VydmljZS5oYXNDb250ZW50KSk7XG4gIH1cblxuICBnZXRJbWFnZVVybCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmdldENvbXBvbmVudERhdGEoKS5waXBlKFxuICAgICAgbWFwKGRhdGEgPT5cbiAgICAgICAgQmFubmVyQ29tcG9uZW50U2VydmljZS5oYXNNZWRpYShkYXRhKVxuICAgICAgICAgID8gKDxDbXNCYW5uZXJDb21wb25lbnRNZWRpYT5kYXRhLm1lZGlhKS51cmxcbiAgICAgICAgICA6ICcnXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGdldFJlc3BvbnNpdmVJbWFnZVVybCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmdldENvbXBvbmVudERhdGEoKS5waXBlKFxuICAgICAgbWFwKGRhdGEgPT5cbiAgICAgICAgQmFubmVyQ29tcG9uZW50U2VydmljZS5oYXNNZWRpYShkYXRhKVxuICAgICAgICAgID8gKDxDbXNSZXNwb25zaXZlQmFubmVyQ29tcG9uZW50TWVkaWE+ZGF0YS5tZWRpYSkuZGVza3RvcC51cmxcbiAgICAgICAgICA6ICcnXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGdldFRhcmdldCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmdldENvbXBvbmVudERhdGEoKS5waXBlKFxuICAgICAgbWFwKGRhdGEgPT4ge1xuICAgICAgICByZXR1cm4gIWRhdGEuZXh0ZXJuYWwgfHwgZGF0YS5leHRlcm5hbCA9PT0gJ2ZhbHNlJyA/ICdfc2VsZicgOiAnX2JsYW5rJztcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldEFsdFRleHQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb21wb25lbnREYXRhKCkucGlwZShcbiAgICAgIG1hcChkYXRhID0+XG4gICAgICAgIEJhbm5lckNvbXBvbmVudFNlcnZpY2UuaGFzTWVkaWEoZGF0YSlcbiAgICAgICAgICA/ICg8Q21zQmFubmVyQ29tcG9uZW50TWVkaWE+ZGF0YS5tZWRpYSkuYWx0VGV4dFxuICAgICAgICAgIDogJydcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgZ2V0SGVhZGxpbmUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb21wb25lbnREYXRhKCkucGlwZShcbiAgICAgIG1hcChkYXRhID0+XG4gICAgICAgIEJhbm5lckNvbXBvbmVudFNlcnZpY2UuaGFzSGVhZGxpbmUoZGF0YSkgPyBkYXRhLmhlYWRsaW5lIDogJydcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgZ2V0Q29udGVudCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmdldENvbXBvbmVudERhdGEoKS5waXBlKFxuICAgICAgbWFwKGRhdGEgPT4gKEJhbm5lckNvbXBvbmVudFNlcnZpY2UuaGFzQ29udGVudChkYXRhKSA/IGRhdGEuY29udGVudCA6ICcnKSlcbiAgICApO1xuICB9XG5cbiAgZ2V0QmFzZVVybCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYy5iYXNlVXJsIHx8ICcnO1xuICB9XG5cbiAgZ2V0SW1hZ2VBYnNvbHV0ZVVybCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmdldEltYWdlVXJsKCkucGlwZSh0aGlzLmNvbnZlcnRUb0Fic29sdXRlVXJsKTtcbiAgfVxuXG4gIGdldFJlc3BvbnNpdmVJbWFnZUFic29sdXRlVXJsKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVzcG9uc2l2ZUltYWdlVXJsKCkucGlwZSh0aGlzLmNvbnZlcnRUb0Fic29sdXRlVXJsKTtcbiAgfVxuXG4gIGdldFJlc3BvbnNpdmVTcmNTZXQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb21wb25lbnREYXRhKCkucGlwZShcbiAgICAgIG1hcChkYXRhID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0cy5yZWR1Y2UoKHNyY3NldCwgZm9ybWF0KSA9PiB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkYXRhLm1lZGlhW2Zvcm1hdC5jb2RlXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiAoc3Jjc2V0ICs9IGAke3RoaXMuZ2V0QmFzZVVybCgpfSR7XG4gICAgICAgICAgICAgIGRhdGEubWVkaWFbZm9ybWF0LmNvZGVdLnVybFxuICAgICAgICAgICAgfSAke2Zvcm1hdC53aWR0aH13LCBgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHNyY3NldDtcbiAgICAgICAgICB9XG4gICAgICAgIH0sICcnKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldENvbXBvbmVudFVJRCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnQudWlkO1xuICB9XG59XG4iXX0=