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
        this.convertToAbsoluteUrl = map(url => this.getBaseUrl() + url);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLmNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL2Ntcy1saWIvYmFubmVyL2Jhbm5lci5jb21wb25lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUdMLFNBQVMsR0FFVixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBSXhGLE1BQU0sT0FBTyxzQkFBc0I7Ozs7O0lBQ2pDLFlBQ1MsU0FBK0MsRUFDNUMsTUFBaUI7UUFEcEIsY0FBUyxHQUFULFNBQVMsQ0FBc0M7UUFDNUMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUdyQix5QkFBb0IsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7OztRQUkzRCxZQUFPLEdBQTZCO1lBQzFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO1lBQzlCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO1lBQzlCLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO1lBQy9CLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1NBQ3BDLENBQUM7SUFYQyxDQUFDOzs7OztJQWFKLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSTtRQUNsQixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJO1FBQ3JCLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUk7UUFDcEIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQ2pDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsQ0FDeEMsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLElBQUksQ0FDakMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQ1Qsc0JBQXNCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNuQyxDQUFDLENBQUMsQ0FBQyxtQkFBeUIsSUFBSSxDQUFDLEtBQUssRUFBQSxDQUFDLENBQUMsR0FBRztZQUMzQyxDQUFDLENBQUMsRUFBRSxDQUNQLENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxxQkFBcUI7UUFDbkIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQ2pDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUNULHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDbkMsQ0FBQyxDQUFDLENBQUMsbUJBQW1DLElBQUksQ0FBQyxLQUFLLEVBQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHO1lBQzdELENBQUMsQ0FBQyxFQUFFLENBQ1AsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLElBQUksQ0FDakMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ1QsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQzFFLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsSUFBSSxDQUNqQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FDVCxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ25DLENBQUMsQ0FBQyxDQUFDLG1CQUF5QixJQUFJLENBQUMsS0FBSyxFQUFBLENBQUMsQ0FBQyxPQUFPO1lBQy9DLENBQUMsQ0FBQyxFQUFFLENBQ1AsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLElBQUksQ0FDakMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQ1Qsc0JBQXNCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQzlELENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQ2pDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsc0JBQXNCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUMzRSxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO0lBQy9DLENBQUM7Ozs7SUFFRCxtQkFBbUI7UUFDakIsT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7SUFFRCw2QkFBNkI7UUFDM0IsT0FBTyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDdEUsQ0FBQzs7OztJQUVELG1CQUFtQjtRQUNqQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLElBQUksQ0FDakMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDNUMsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLFdBQVcsRUFBRTtvQkFDbEQsT0FBTyxDQUFDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FDMUIsSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQztpQkFDeEI7cUJBQU07b0JBQ0wsT0FBTyxNQUFNLENBQUM7aUJBQ2Y7WUFDSCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDVCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO0lBQzVCLENBQUM7OztZQWxJRixVQUFVOzs7O1lBSEYsZ0JBQWdCO1lBSHZCLFNBQVM7Ozs7Ozs7SUFhVCxzREFBbUU7Ozs7O0lBSW5FLHlDQUtFOztJQWJBLDJDQUFzRDs7Ozs7SUFDdEQsd0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBDbXNCYW5uZXJDb21wb25lbnQsXG4gIENtc0Jhbm5lckNvbXBvbmVudE1lZGlhLFxuICBDbXNDb25maWcsXG4gIENtc1Jlc3BvbnNpdmVCYW5uZXJDb21wb25lbnRNZWRpYSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcbmltcG9ydCB7IFJlc3BvbnNpdmVCYW5uZXJGb3JtYXQgfSBmcm9tICcuL3Jlc3BvbnNpdmUtYmFubmVyLWZvcm1hdC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCYW5uZXJDb21wb25lbnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGNvbXBvbmVudDogQ21zQ29tcG9uZW50RGF0YTxDbXNCYW5uZXJDb21wb25lbnQ+LFxuICAgIHByb3RlY3RlZCBjb25maWc6IENtc0NvbmZpZ1xuICApIHt9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0VG9BYnNvbHV0ZVVybCA9IG1hcCh1cmwgPT4gdGhpcy5nZXRCYXNlVXJsKCkgKyB1cmwpO1xuXG4gIC8vIFRPRE86IG1vdmUgdG8gYSBtb3JlIGdlbmVyaWMgbG9jYXRpb25cbiAgLy8gVE9ETzogTWFrZSBjb25maWd1cmFibGVcbiAgcHJpdmF0ZSBmb3JtYXRzOiBSZXNwb25zaXZlQmFubmVyRm9ybWF0W10gPSBbXG4gICAgeyBjb2RlOiAnbW9iaWxlJywgd2lkdGg6IDIwMCB9LFxuICAgIHsgY29kZTogJ3RhYmxldCcsIHdpZHRoOiA1MDAgfSxcbiAgICB7IGNvZGU6ICdkZXNrdG9wJywgd2lkdGg6IDgwMCB9LFxuICAgIHsgY29kZTogJ3dpZGVzY3JlZW4nLCB3aWR0aDogMTIwMCB9LFxuICBdO1xuXG4gIHN0YXRpYyBoYXNNZWRpYShkYXRhKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhZGF0YS5tZWRpYTtcbiAgfVxuXG4gIHN0YXRpYyBoYXNIZWFkbGluZShkYXRhKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhZGF0YS5oZWFkbGluZTtcbiAgfVxuXG4gIHN0YXRpYyBoYXNDb250ZW50KGRhdGEpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISFkYXRhLmNvbnRlbnQ7XG4gIH1cblxuICBnZXRDb21wb25lbnREYXRhKCk6IE9ic2VydmFibGU8Q21zQmFubmVyQ29tcG9uZW50PiB7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50LmRhdGEkO1xuICB9XG5cbiAgaGFzSW1hZ2UoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29tcG9uZW50RGF0YSgpLnBpcGUobWFwKEJhbm5lckNvbXBvbmVudFNlcnZpY2UuaGFzTWVkaWEpKTtcbiAgfVxuXG4gIGhhc0hlYWRsaW5lKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmdldENvbXBvbmVudERhdGEoKS5waXBlKFxuICAgICAgbWFwKEJhbm5lckNvbXBvbmVudFNlcnZpY2UuaGFzSGVhZGxpbmUpXG4gICAgKTtcbiAgfVxuXG4gIGhhc0NvbnRlbnQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29tcG9uZW50RGF0YSgpLnBpcGUobWFwKEJhbm5lckNvbXBvbmVudFNlcnZpY2UuaGFzQ29udGVudCkpO1xuICB9XG5cbiAgZ2V0SW1hZ2VVcmwoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb21wb25lbnREYXRhKCkucGlwZShcbiAgICAgIG1hcChkYXRhID0+XG4gICAgICAgIEJhbm5lckNvbXBvbmVudFNlcnZpY2UuaGFzTWVkaWEoZGF0YSlcbiAgICAgICAgICA/ICg8Q21zQmFubmVyQ29tcG9uZW50TWVkaWE+ZGF0YS5tZWRpYSkudXJsXG4gICAgICAgICAgOiAnJ1xuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBnZXRSZXNwb25zaXZlSW1hZ2VVcmwoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb21wb25lbnREYXRhKCkucGlwZShcbiAgICAgIG1hcChkYXRhID0+XG4gICAgICAgIEJhbm5lckNvbXBvbmVudFNlcnZpY2UuaGFzTWVkaWEoZGF0YSlcbiAgICAgICAgICA/ICg8Q21zUmVzcG9uc2l2ZUJhbm5lckNvbXBvbmVudE1lZGlhPmRhdGEubWVkaWEpLmRlc2t0b3AudXJsXG4gICAgICAgICAgOiAnJ1xuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBnZXRUYXJnZXQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb21wb25lbnREYXRhKCkucGlwZShcbiAgICAgIG1hcChkYXRhID0+IHtcbiAgICAgICAgcmV0dXJuICFkYXRhLmV4dGVybmFsIHx8IGRhdGEuZXh0ZXJuYWwgPT09ICdmYWxzZScgPyAnX3NlbGYnIDogJ19ibGFuayc7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRBbHRUZXh0KCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29tcG9uZW50RGF0YSgpLnBpcGUoXG4gICAgICBtYXAoZGF0YSA9PlxuICAgICAgICBCYW5uZXJDb21wb25lbnRTZXJ2aWNlLmhhc01lZGlhKGRhdGEpXG4gICAgICAgICAgPyAoPENtc0Jhbm5lckNvbXBvbmVudE1lZGlhPmRhdGEubWVkaWEpLmFsdFRleHRcbiAgICAgICAgICA6ICcnXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGdldEhlYWRsaW5lKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29tcG9uZW50RGF0YSgpLnBpcGUoXG4gICAgICBtYXAoZGF0YSA9PlxuICAgICAgICBCYW5uZXJDb21wb25lbnRTZXJ2aWNlLmhhc0hlYWRsaW5lKGRhdGEpID8gZGF0YS5oZWFkbGluZSA6ICcnXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGdldENvbnRlbnQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb21wb25lbnREYXRhKCkucGlwZShcbiAgICAgIG1hcChkYXRhID0+IChCYW5uZXJDb21wb25lbnRTZXJ2aWNlLmhhc0NvbnRlbnQoZGF0YSkgPyBkYXRhLmNvbnRlbnQgOiAnJykpXG4gICAgKTtcbiAgfVxuXG4gIGdldEJhc2VVcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuYmFja2VuZC5vY2MuYmFzZVVybCB8fCAnJztcbiAgfVxuXG4gIGdldEltYWdlQWJzb2x1dGVVcmwoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRJbWFnZVVybCgpLnBpcGUodGhpcy5jb252ZXJ0VG9BYnNvbHV0ZVVybCk7XG4gIH1cblxuICBnZXRSZXNwb25zaXZlSW1hZ2VBYnNvbHV0ZVVybCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmdldFJlc3BvbnNpdmVJbWFnZVVybCgpLnBpcGUodGhpcy5jb252ZXJ0VG9BYnNvbHV0ZVVybCk7XG4gIH1cblxuICBnZXRSZXNwb25zaXZlU3JjU2V0KCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29tcG9uZW50RGF0YSgpLnBpcGUoXG4gICAgICBtYXAoZGF0YSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdHMucmVkdWNlKChzcmNzZXQsIGZvcm1hdCkgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YgZGF0YS5tZWRpYVtmb3JtYXQuY29kZV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gKHNyY3NldCArPSBgJHt0aGlzLmdldEJhc2VVcmwoKX0ke1xuICAgICAgICAgICAgICBkYXRhLm1lZGlhW2Zvcm1hdC5jb2RlXS51cmxcbiAgICAgICAgICAgIH0gJHtmb3JtYXQud2lkdGh9dywgYCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBzcmNzZXQ7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAnJyk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRDb21wb25lbnRVSUQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50LnVpZDtcbiAgfVxufVxuIl19