/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { CmsConfig, } from '@spartacus/core';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
export class BannerComponentService {
    /**
     * @param {?} component
     * @param {?} config
     */
    constructor(component, config) {
        this.component = component;
        this.config = config;
        this.convertToAbsoluteUrl = map((url) => {
            return url.startsWith('http') ? url : this.getBaseUrl() + url;
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
    static hasMedia(data) {
        return !!data.media;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    static hasHeadline(data) {
        return !!data.headline;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    static hasContent(data) {
        return !!data.content;
    }
    /**
     * @return {?}
     */
    getComponentData() {
        return this.component.data$;
    }
    /**
     * @return {?}
     */
    hasImage() {
        return this.getComponentData().pipe(map(BannerComponentService.hasMedia));
    }
    /**
     * @return {?}
     */
    hasHeadline() {
        return this.getComponentData().pipe(map(BannerComponentService.hasHeadline));
    }
    /**
     * @return {?}
     */
    hasContent() {
        return this.getComponentData().pipe(map(BannerComponentService.hasContent));
    }
    /**
     * @return {?}
     */
    getImageUrl() {
        return this.getComponentData().pipe(map(data => BannerComponentService.hasMedia(data)
            ? ((/** @type {?} */ (data.media))).url
            : ''));
    }
    /**
     * @return {?}
     */
    getResponsiveImageUrl() {
        return this.getComponentData().pipe(map(data => BannerComponentService.hasMedia(data)
            ? ((/** @type {?} */ (data.media))).desktop.url
            : ''));
    }
    /**
     * @return {?}
     */
    getTarget() {
        return this.getComponentData().pipe(map(data => {
            return !data.external || data.external === 'false' ? '_self' : '_blank';
        }));
    }
    /**
     * @return {?}
     */
    getAltText() {
        return this.getComponentData().pipe(map(data => BannerComponentService.hasMedia(data)
            ? ((/** @type {?} */ (data.media))).altText
            : ''));
    }
    /**
     * @return {?}
     */
    getHeadline() {
        return this.getComponentData().pipe(map(data => BannerComponentService.hasHeadline(data) ? data.headline : ''));
    }
    /**
     * @return {?}
     */
    getContent() {
        return this.getComponentData().pipe(map(data => (BannerComponentService.hasContent(data) ? data.content : '')));
    }
    /**
     * @return {?}
     */
    getBaseUrl() {
        return this.config.backend.occ.baseUrl || '';
    }
    /**
     * @return {?}
     */
    getImageAbsoluteUrl() {
        return this.getImageUrl().pipe(this.convertToAbsoluteUrl);
    }
    /**
     * @return {?}
     */
    getResponsiveImageAbsoluteUrl() {
        return this.getResponsiveImageUrl().pipe(this.convertToAbsoluteUrl);
    }
    /**
     * @return {?}
     */
    getResponsiveSrcSet() {
        return this.getComponentData().pipe(map(data => {
            return this.formats.reduce((srcset, format) => {
                if (typeof data.media[format.code] !== 'undefined') {
                    return (srcset += `${this.getBaseUrl()}${data.media[format.code].url} ${format.width}w, `);
                }
                else {
                    return srcset;
                }
            }, '');
        }));
    }
    /**
     * @return {?}
     */
    getComponentUID() {
        return this.component.uid;
    }
}
BannerComponentService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
BannerComponentService.ctorParameters = () => [
    { type: CmsComponentData },
    { type: CmsConfig }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLmNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL2Ntcy1saWIvYmFubmVyL2Jhbm5lci5jb21wb25lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUdMLFNBQVMsR0FFVixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBSXhGLE1BQU0sT0FBTyxzQkFBc0I7Ozs7O0lBQ2pDLFlBQ1MsU0FBK0MsRUFDNUMsTUFBaUI7UUFEcEIsY0FBUyxHQUFULFNBQVMsQ0FBc0M7UUFDNUMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUdyQix5QkFBb0IsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFXLEVBQUUsRUFBRTtZQUNqRCxPQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLEdBQUcsQ0FBQztRQUNoRSxDQUFDLENBQUMsQ0FBQzs7O1FBSUssWUFBTyxHQUE2QjtZQUMxQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtZQUM5QixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtZQUM5QixFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtZQUMvQixFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtTQUNwQyxDQUFDO0lBYkMsQ0FBQzs7Ozs7SUFlSixNQUFNLENB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O1lBQ0gsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztJQUM1QixDQUFDOzs7WUFwSUYsVUFBVTs7OztZQUhGLGdCQUFnQjtZQUh2QixTQUFTOzs7Ozs7O0lBYVQsc0RBRUc7Ozs7O0lBSUgseUNBS0U7O0lBZkEsMkNBQXNEOzs7OztJQUN0RCx3Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7XG4gIENtc0Jhbm5lckNvbXBvbmVudCxcbiAgQ21zQmFubmVyQ29tcG9uZW50TWVkaWEsXG4gIENtc0NvbmZpZyxcbiAgQ21zUmVzcG9uc2l2ZUJhbm5lckNvbXBvbmVudE1lZGlhLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9jbXMtY29tcG9uZW50LWRhdGEnO1xuaW1wb3J0IHsgUmVzcG9uc2l2ZUJhbm5lckZvcm1hdCB9IGZyb20gJy4vcmVzcG9uc2l2ZS1iYW5uZXItZm9ybWF0Lm1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJhbm5lckNvbXBvbmVudFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY29tcG9uZW50OiBDbXNDb21wb25lbnREYXRhPENtc0Jhbm5lckNvbXBvbmVudD4sXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogQ21zQ29uZmlnXG4gICkge31cblxuICBwcml2YXRlIGNvbnZlcnRUb0Fic29sdXRlVXJsID0gbWFwKCh1cmw6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiB1cmwuc3RhcnRzV2l0aCgnaHR0cCcpID8gdXJsIDogdGhpcy5nZXRCYXNlVXJsKCkgKyB1cmw7XG4gIH0pO1xuXG4gIC8vIFRPRE86IG1vdmUgdG8gYSBtb3JlIGdlbmVyaWMgbG9jYXRpb25cbiAgLy8gVE9ETzogTWFrZSBjb25maWd1cmFibGVcbiAgcHJpdmF0ZSBmb3JtYXRzOiBSZXNwb25zaXZlQmFubmVyRm9ybWF0W10gPSBbXG4gICAgeyBjb2RlOiAnbW9iaWxlJywgd2lkdGg6IDIwMCB9LFxuICAgIHsgY29kZTogJ3RhYmxldCcsIHdpZHRoOiA1MDAgfSxcbiAgICB7IGNvZGU6ICdkZXNrdG9wJywgd2lkdGg6IDgwMCB9LFxuICAgIHsgY29kZTogJ3dpZGVzY3JlZW4nLCB3aWR0aDogMTIwMCB9LFxuICBdO1xuXG4gIHN0YXRpYyBoYXNNZWRpYShkYXRhKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhZGF0YS5tZWRpYTtcbiAgfVxuXG4gIHN0YXRpYyBoYXNIZWFkbGluZShkYXRhKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhZGF0YS5oZWFkbGluZTtcbiAgfVxuXG4gIHN0YXRpYyBoYXNDb250ZW50KGRhdGEpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISFkYXRhLmNvbnRlbnQ7XG4gIH1cblxuICBnZXRDb21wb25lbnREYXRhKCk6IE9ic2VydmFibGU8Q21zQmFubmVyQ29tcG9uZW50PiB7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50LmRhdGEkO1xuICB9XG5cbiAgaGFzSW1hZ2UoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29tcG9uZW50RGF0YSgpLnBpcGUobWFwKEJhbm5lckNvbXBvbmVudFNlcnZpY2UuaGFzTWVkaWEpKTtcbiAgfVxuXG4gIGhhc0hlYWRsaW5lKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmdldENvbXBvbmVudERhdGEoKS5waXBlKFxuICAgICAgbWFwKEJhbm5lckNvbXBvbmVudFNlcnZpY2UuaGFzSGVhZGxpbmUpXG4gICAgKTtcbiAgfVxuXG4gIGhhc0NvbnRlbnQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29tcG9uZW50RGF0YSgpLnBpcGUobWFwKEJhbm5lckNvbXBvbmVudFNlcnZpY2UuaGFzQ29udGVudCkpO1xuICB9XG5cbiAgZ2V0SW1hZ2VVcmwoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb21wb25lbnREYXRhKCkucGlwZShcbiAgICAgIG1hcChkYXRhID0+XG4gICAgICAgIEJhbm5lckNvbXBvbmVudFNlcnZpY2UuaGFzTWVkaWEoZGF0YSlcbiAgICAgICAgICA/ICg8Q21zQmFubmVyQ29tcG9uZW50TWVkaWE+ZGF0YS5tZWRpYSkudXJsXG4gICAgICAgICAgOiAnJ1xuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBnZXRSZXNwb25zaXZlSW1hZ2VVcmwoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb21wb25lbnREYXRhKCkucGlwZShcbiAgICAgIG1hcChkYXRhID0+XG4gICAgICAgIEJhbm5lckNvbXBvbmVudFNlcnZpY2UuaGFzTWVkaWEoZGF0YSlcbiAgICAgICAgICA/ICg8Q21zUmVzcG9uc2l2ZUJhbm5lckNvbXBvbmVudE1lZGlhPmRhdGEubWVkaWEpLmRlc2t0b3AudXJsXG4gICAgICAgICAgOiAnJ1xuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBnZXRUYXJnZXQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb21wb25lbnREYXRhKCkucGlwZShcbiAgICAgIG1hcChkYXRhID0+IHtcbiAgICAgICAgcmV0dXJuICFkYXRhLmV4dGVybmFsIHx8IGRhdGEuZXh0ZXJuYWwgPT09ICdmYWxzZScgPyAnX3NlbGYnIDogJ19ibGFuayc7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRBbHRUZXh0KCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29tcG9uZW50RGF0YSgpLnBpcGUoXG4gICAgICBtYXAoZGF0YSA9PlxuICAgICAgICBCYW5uZXJDb21wb25lbnRTZXJ2aWNlLmhhc01lZGlhKGRhdGEpXG4gICAgICAgICAgPyAoPENtc0Jhbm5lckNvbXBvbmVudE1lZGlhPmRhdGEubWVkaWEpLmFsdFRleHRcbiAgICAgICAgICA6ICcnXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGdldEhlYWRsaW5lKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29tcG9uZW50RGF0YSgpLnBpcGUoXG4gICAgICBtYXAoZGF0YSA9PlxuICAgICAgICBCYW5uZXJDb21wb25lbnRTZXJ2aWNlLmhhc0hlYWRsaW5lKGRhdGEpID8gZGF0YS5oZWFkbGluZSA6ICcnXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGdldENvbnRlbnQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb21wb25lbnREYXRhKCkucGlwZShcbiAgICAgIG1hcChkYXRhID0+IChCYW5uZXJDb21wb25lbnRTZXJ2aWNlLmhhc0NvbnRlbnQoZGF0YSkgPyBkYXRhLmNvbnRlbnQgOiAnJykpXG4gICAgKTtcbiAgfVxuXG4gIGdldEJhc2VVcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuYmFja2VuZC5vY2MuYmFzZVVybCB8fCAnJztcbiAgfVxuXG4gIGdldEltYWdlQWJzb2x1dGVVcmwoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRJbWFnZVVybCgpLnBpcGUodGhpcy5jb252ZXJ0VG9BYnNvbHV0ZVVybCk7XG4gIH1cblxuICBnZXRSZXNwb25zaXZlSW1hZ2VBYnNvbHV0ZVVybCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmdldFJlc3BvbnNpdmVJbWFnZVVybCgpLnBpcGUodGhpcy5jb252ZXJ0VG9BYnNvbHV0ZVVybCk7XG4gIH1cblxuICBnZXRSZXNwb25zaXZlU3JjU2V0KCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29tcG9uZW50RGF0YSgpLnBpcGUoXG4gICAgICBtYXAoZGF0YSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdHMucmVkdWNlKChzcmNzZXQsIGZvcm1hdCkgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YgZGF0YS5tZWRpYVtmb3JtYXQuY29kZV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gKHNyY3NldCArPSBgJHt0aGlzLmdldEJhc2VVcmwoKX0ke1xuICAgICAgICAgICAgICBkYXRhLm1lZGlhW2Zvcm1hdC5jb2RlXS51cmxcbiAgICAgICAgICAgIH0gJHtmb3JtYXQud2lkdGh9dywgYCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBzcmNzZXQ7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAnJyk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRDb21wb25lbnRVSUQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50LnVpZDtcbiAgfVxufVxuIl19