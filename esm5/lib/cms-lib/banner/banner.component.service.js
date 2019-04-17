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
        this.convertToAbsoluteUrl = map(function (url) { return _this.getBaseUrl() + url; });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLmNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL2Ntcy1saWIvYmFubmVyL2Jhbm5lci5jb21wb25lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUdMLFNBQVMsR0FFVixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBR3hGO0lBRUUsZ0NBQ1MsU0FBK0MsRUFDNUMsTUFBaUI7UUFGN0IsaUJBR0k7UUFGSyxjQUFTLEdBQVQsU0FBUyxDQUFzQztRQUM1QyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBR3JCLHlCQUFvQixHQUFHLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxHQUFHLEVBQXZCLENBQXVCLENBQUMsQ0FBQzs7O1FBSTNELFlBQU8sR0FBNkI7WUFDMUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7WUFDOUIsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7WUFDOUIsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7WUFDL0IsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7U0FDcEMsQ0FBQztJQVhDLENBQUM7Ozs7O0lBYUcsK0JBQVE7Ozs7SUFBZixVQUFnQixJQUFJO1FBQ2xCLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFTSxrQ0FBVzs7OztJ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ekIsTUFBTSxDQUFDLEtBQUssUUFBSyxDQUFDLENBQUM7aUJBQ3hCO3FCQUFNO29CQUNMLE9BQU8sTUFBTSxDQUFDO2lCQUNmO1lBQ0gsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxnREFBZTs7O0lBQWY7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO0lBQzVCLENBQUM7O2dCQWxJRixVQUFVOzs7O2dCQUhGLGdCQUFnQjtnQkFIdkIsU0FBUzs7SUF5SVgsNkJBQUM7Q0FBQSxBQW5JRCxJQW1JQztTQWxJWSxzQkFBc0I7Ozs7OztJQU1qQyxzREFBbUU7Ozs7O0lBSW5FLHlDQUtFOztJQWJBLDJDQUFzRDs7Ozs7SUFDdEQsd0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBDbXNCYW5uZXJDb21wb25lbnQsXG4gIENtc0Jhbm5lckNvbXBvbmVudE1lZGlhLFxuICBDbXNDb25maWcsXG4gIENtc1Jlc3BvbnNpdmVCYW5uZXJDb21wb25lbnRNZWRpYSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcbmltcG9ydCB7IFJlc3BvbnNpdmVCYW5uZXJGb3JtYXQgfSBmcm9tICcuL3Jlc3BvbnNpdmUtYmFubmVyLWZvcm1hdC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCYW5uZXJDb21wb25lbnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGNvbXBvbmVudDogQ21zQ29tcG9uZW50RGF0YTxDbXNCYW5uZXJDb21wb25lbnQ+LFxuICAgIHByb3RlY3RlZCBjb25maWc6IENtc0NvbmZpZ1xuICApIHt9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0VG9BYnNvbHV0ZVVybCA9IG1hcCh1cmwgPT4gdGhpcy5nZXRCYXNlVXJsKCkgKyB1cmwpO1xuXG4gIC8vIFRPRE86IG1vdmUgdG8gYSBtb3JlIGdlbmVyaWMgbG9jYXRpb25cbiAgLy8gVE9ETzogTWFrZSBjb25maWd1cmFibGVcbiAgcHJpdmF0ZSBmb3JtYXRzOiBSZXNwb25zaXZlQmFubmVyRm9ybWF0W10gPSBbXG4gICAgeyBjb2RlOiAnbW9iaWxlJywgd2lkdGg6IDIwMCB9LFxuICAgIHsgY29kZTogJ3RhYmxldCcsIHdpZHRoOiA1MDAgfSxcbiAgICB7IGNvZGU6ICdkZXNrdG9wJywgd2lkdGg6IDgwMCB9LFxuICAgIHsgY29kZTogJ3dpZGVzY3JlZW4nLCB3aWR0aDogMTIwMCB9LFxuICBdO1xuXG4gIHN0YXRpYyBoYXNNZWRpYShkYXRhKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhZGF0YS5tZWRpYTtcbiAgfVxuXG4gIHN0YXRpYyBoYXNIZWFkbGluZShkYXRhKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhZGF0YS5oZWFkbGluZTtcbiAgfVxuXG4gIHN0YXRpYyBoYXNDb250ZW50KGRhdGEpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISFkYXRhLmNvbnRlbnQ7XG4gIH1cblxuICBnZXRDb21wb25lbnREYXRhKCk6IE9ic2VydmFibGU8Q21zQmFubmVyQ29tcG9uZW50PiB7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50LmRhdGEkO1xuICB9XG5cbiAgaGFzSW1hZ2UoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29tcG9uZW50RGF0YSgpLnBpcGUobWFwKEJhbm5lckNvbXBvbmVudFNlcnZpY2UuaGFzTWVkaWEpKTtcbiAgfVxuXG4gIGhhc0hlYWRsaW5lKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmdldENvbXBvbmVudERhdGEoKS5waXBlKFxuICAgICAgbWFwKEJhbm5lckNvbXBvbmVudFNlcnZpY2UuaGFzSGVhZGxpbmUpXG4gICAgKTtcbiAgfVxuXG4gIGhhc0NvbnRlbnQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29tcG9uZW50RGF0YSgpLnBpcGUobWFwKEJhbm5lckNvbXBvbmVudFNlcnZpY2UuaGFzQ29udGVudCkpO1xuICB9XG5cbiAgZ2V0SW1hZ2VVcmwoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb21wb25lbnREYXRhKCkucGlwZShcbiAgICAgIG1hcChkYXRhID0+XG4gICAgICAgIEJhbm5lckNvbXBvbmVudFNlcnZpY2UuaGFzTWVkaWEoZGF0YSlcbiAgICAgICAgICA/ICg8Q21zQmFubmVyQ29tcG9uZW50TWVkaWE+ZGF0YS5tZWRpYSkudXJsXG4gICAgICAgICAgOiAnJ1xuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBnZXRSZXNwb25zaXZlSW1hZ2VVcmwoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb21wb25lbnREYXRhKCkucGlwZShcbiAgICAgIG1hcChkYXRhID0+XG4gICAgICAgIEJhbm5lckNvbXBvbmVudFNlcnZpY2UuaGFzTWVkaWEoZGF0YSlcbiAgICAgICAgICA/ICg8Q21zUmVzcG9uc2l2ZUJhbm5lckNvbXBvbmVudE1lZGlhPmRhdGEubWVkaWEpLmRlc2t0b3AudXJsXG4gICAgICAgICAgOiAnJ1xuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBnZXRUYXJnZXQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb21wb25lbnREYXRhKCkucGlwZShcbiAgICAgIG1hcChkYXRhID0+IHtcbiAgICAgICAgcmV0dXJuICFkYXRhLmV4dGVybmFsIHx8IGRhdGEuZXh0ZXJuYWwgPT09ICdmYWxzZScgPyAnX3NlbGYnIDogJ19ibGFuayc7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRBbHRUZXh0KCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29tcG9uZW50RGF0YSgpLnBpcGUoXG4gICAgICBtYXAoZGF0YSA9PlxuICAgICAgICBCYW5uZXJDb21wb25lbnRTZXJ2aWNlLmhhc01lZGlhKGRhdGEpXG4gICAgICAgICAgPyAoPENtc0Jhbm5lckNvbXBvbmVudE1lZGlhPmRhdGEubWVkaWEpLmFsdFRleHRcbiAgICAgICAgICA6ICcnXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGdldEhlYWRsaW5lKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29tcG9uZW50RGF0YSgpLnBpcGUoXG4gICAgICBtYXAoZGF0YSA9PlxuICAgICAgICBCYW5uZXJDb21wb25lbnRTZXJ2aWNlLmhhc0hlYWRsaW5lKGRhdGEpID8gZGF0YS5oZWFkbGluZSA6ICcnXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGdldENvbnRlbnQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb21wb25lbnREYXRhKCkucGlwZShcbiAgICAgIG1hcChkYXRhID0+IChCYW5uZXJDb21wb25lbnRTZXJ2aWNlLmhhc0NvbnRlbnQoZGF0YSkgPyBkYXRhLmNvbnRlbnQgOiAnJykpXG4gICAgKTtcbiAgfVxuXG4gIGdldEJhc2VVcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuYmFja2VuZC5vY2MuYmFzZVVybCB8fCAnJztcbiAgfVxuXG4gIGdldEltYWdlQWJzb2x1dGVVcmwoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRJbWFnZVVybCgpLnBpcGUodGhpcy5jb252ZXJ0VG9BYnNvbHV0ZVVybCk7XG4gIH1cblxuICBnZXRSZXNwb25zaXZlSW1hZ2VBYnNvbHV0ZVVybCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmdldFJlc3BvbnNpdmVJbWFnZVVybCgpLnBpcGUodGhpcy5jb252ZXJ0VG9BYnNvbHV0ZVVybCk7XG4gIH1cblxuICBnZXRSZXNwb25zaXZlU3JjU2V0KCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29tcG9uZW50RGF0YSgpLnBpcGUoXG4gICAgICBtYXAoZGF0YSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdHMucmVkdWNlKChzcmNzZXQsIGZvcm1hdCkgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YgZGF0YS5tZWRpYVtmb3JtYXQuY29kZV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gKHNyY3NldCArPSBgJHt0aGlzLmdldEJhc2VVcmwoKX0ke1xuICAgICAgICAgICAgICBkYXRhLm1lZGlhW2Zvcm1hdC5jb2RlXS51cmxcbiAgICAgICAgICAgIH0gJHtmb3JtYXQud2lkdGh9dywgYCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBzcmNzZXQ7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAnJyk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRDb21wb25lbnRVSUQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50LnVpZDtcbiAgfVxufVxuIl19