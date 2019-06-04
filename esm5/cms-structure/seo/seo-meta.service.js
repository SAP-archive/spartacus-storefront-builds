/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { PageMetaService, PageRobotsMeta } from '@spartacus/core';
import { filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@spartacus/core";
var SeoMetaService = /** @class */ (function () {
    function SeoMetaService(ngTitle, ngMeta, pageMetaService) {
        this.ngTitle = ngTitle;
        this.ngMeta = ngMeta;
        this.pageMetaService = pageMetaService;
    }
    /**
     * @return {?}
     */
    SeoMetaService.prototype.init = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.pageMetaService
            .getMeta()
            .pipe(filter(Boolean))
            .subscribe((/**
         * @param {?} meta
         * @return {?}
         */
        function (meta) { return (_this.meta = meta); }));
    };
    Object.defineProperty(SeoMetaService.prototype, "meta", {
        set: /**
         * @protected
         * @param {?} meta
         * @return {?}
         */
        function (meta) {
            this.title = meta.title;
            this.description = meta.description;
            this.image = meta.image;
            this.robots = meta.robots || [PageRobotsMeta.INDEX, PageRobotsMeta.FOLLOW];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeoMetaService.prototype, "title", {
        set: /**
         * @protected
         * @param {?} title
         * @return {?}
         */
        function (title) {
            this.ngTitle.setTitle(title || '');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeoMetaService.prototype, "description", {
        set: /**
         * @protected
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.addTag({ name: 'description', content: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeoMetaService.prototype, "image", {
        set: /**
         * @protected
         * @param {?} imageUrl
         * @return {?}
         */
        function (imageUrl) {
            if (imageUrl) {
                this.addTag({ name: 'og:image', content: imageUrl });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeoMetaService.prototype, "robots", {
        set: /**
         * @protected
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.addTag({ name: 'robots', content: value.join(', ') });
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @protected
     * @param {?} meta
     * @return {?}
     */
    SeoMetaService.prototype.addTag = /**
     * @protected
     * @param {?} meta
     * @return {?}
     */
    function (meta) {
        if (meta.content) {
            this.ngMeta.updateTag(meta);
        }
    };
    SeoMetaService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    SeoMetaService.ctorParameters = function () { return [
        { type: Title },
        { type: Meta },
        { type: PageMetaService }
    ]; };
    /** @nocollapse */ SeoMetaService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SeoMetaService_Factory() { return new SeoMetaService(i0.ɵɵinject(i1.Title), i0.ɵɵinject(i1.Meta), i0.ɵɵinject(i2.PageMetaService)); }, token: SeoMetaService, providedIn: "root" });
    return SeoMetaService;
}());
export { SeoMetaService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    SeoMetaService.prototype.ngTitle;
    /**
     * @type {?}
     * @protected
     */
    SeoMetaService.prototype.ngMeta;
    /**
     * @type {?}
     * @protected
     */
    SeoMetaService.prototype.pageMetaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VvLW1ldGEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VvL3Nlby1tZXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQWtCLE1BQU0sMkJBQTJCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBWSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFFeEM7SUFJRSx3QkFDWSxPQUFjLEVBQ2QsTUFBWSxFQUNaLGVBQWdDO1FBRmhDLFlBQU8sR0FBUCxPQUFPLENBQU87UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFNO1FBQ1osb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQ3pDLENBQUM7Ozs7SUFFSiw2QkFBSTs7O0lBQUo7UUFBQSxpQkFLQztRQUpDLElBQUksQ0FBQyxlQUFlO2FBQ2pCLE9BQU8sRUFBRTthQUNULElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDckIsU0FBUzs7OztRQUFDLFVBQUMsSUFBYyxJQUFLLE9BQUEsQ0FBQyxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFsQixDQUFrQixFQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELHNCQUFjLGdDQUFJOzs7Ozs7UUFBbEIsVUFBbUIsSUFBYztZQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3RSxDQUFDOzs7T0FBQTtJQUVELHNCQUFjLGlDQUFLOzs7Ozs7UUFBbkIsVUFBb0IsS0FBYTtZQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUM7UUFDckMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBYyx1Q0FBVzs7Ozs7O1FBQXpCLFVBQTBCLEtBQWE7WUFDckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDdkQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBYyxpQ0FBSzs7Ozs7O1FBQW5CLFVBQW9CLFFBQWdCO1lBQ2xDLElBQUksUUFBUSxFQUFFO2dCQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO2FBQ3REO1FBQ0gsQ0FBQzs7O09BQUE7SUFFRCxzQkFBYyxrQ0FBTTs7Ozs7O1FBQXBCLFVBQXFCLEtBQXVCO1lBQzFDLElBQUksS0FBSyxFQUFFO2dCQUNULElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUM1RDtRQUNILENBQUM7OztPQUFBOzs7Ozs7SUFFUywrQkFBTTs7Ozs7SUFBaEIsVUFBaUIsSUFBb0I7UUFDbkMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7Z0JBaERGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTlEsS0FBSztnQkFBRSxJQUFJO2dCQUNYLGVBQWU7Ozt5QkFGeEI7Q0FzREMsQUFqREQsSUFpREM7U0E5Q1ksY0FBYzs7Ozs7O0lBRXZCLGlDQUF3Qjs7Ozs7SUFDeEIsZ0NBQXNCOzs7OztJQUN0Qix5Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaXRsZSwgTWV0YSwgTWV0YURlZmluaXRpb24gfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFBhZ2VNZXRhU2VydmljZSwgUGFnZU1ldGEsIFBhZ2VSb2JvdHNNZXRhIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFNlb01ldGFTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIG5nVGl0bGU6IFRpdGxlLFxuICAgIHByb3RlY3RlZCBuZ01ldGE6IE1ldGEsXG4gICAgcHJvdGVjdGVkIHBhZ2VNZXRhU2VydmljZTogUGFnZU1ldGFTZXJ2aWNlXG4gICkge31cblxuICBpbml0KCkge1xuICAgIHRoaXMucGFnZU1ldGFTZXJ2aWNlXG4gICAgICAuZ2V0TWV0YSgpXG4gICAgICAucGlwZShmaWx0ZXIoQm9vbGVhbikpXG4gICAgICAuc3Vic2NyaWJlKChtZXRhOiBQYWdlTWV0YSkgPT4gKHRoaXMubWV0YSA9IG1ldGEpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXQgbWV0YShtZXRhOiBQYWdlTWV0YSkge1xuICAgIHRoaXMudGl0bGUgPSBtZXRhLnRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBtZXRhLmRlc2NyaXB0aW9uO1xuICAgIHRoaXMuaW1hZ2UgPSBtZXRhLmltYWdlO1xuICAgIHRoaXMucm9ib3RzID0gbWV0YS5yb2JvdHMgfHwgW1BhZ2VSb2JvdHNNZXRhLklOREVYLCBQYWdlUm9ib3RzTWV0YS5GT0xMT1ddO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldCB0aXRsZSh0aXRsZTogc3RyaW5nKSB7XG4gICAgdGhpcy5uZ1RpdGxlLnNldFRpdGxlKHRpdGxlIHx8ICcnKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXQgZGVzY3JpcHRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuYWRkVGFnKHsgbmFtZTogJ2Rlc2NyaXB0aW9uJywgY29udGVudDogdmFsdWUgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2V0IGltYWdlKGltYWdlVXJsOiBzdHJpbmcpIHtcbiAgICBpZiAoaW1hZ2VVcmwpIHtcbiAgICAgIHRoaXMuYWRkVGFnKHsgbmFtZTogJ29nOmltYWdlJywgY29udGVudDogaW1hZ2VVcmwgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHNldCByb2JvdHModmFsdWU6IFBhZ2VSb2JvdHNNZXRhW10pIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuYWRkVGFnKHsgbmFtZTogJ3JvYm90cycsIGNvbnRlbnQ6IHZhbHVlLmpvaW4oJywgJykgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGFkZFRhZyhtZXRhOiBNZXRhRGVmaW5pdGlvbikge1xuICAgIGlmIChtZXRhLmNvbnRlbnQpIHtcbiAgICAgIHRoaXMubmdNZXRhLnVwZGF0ZVRhZyhtZXRhKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==