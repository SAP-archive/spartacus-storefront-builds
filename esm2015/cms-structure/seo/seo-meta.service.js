/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { PageMetaService, PageRobotsMeta } from '@spartacus/core';
import { filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@spartacus/core";
export class SeoMetaService {
    /**
     * @param {?} ngTitle
     * @param {?} ngMeta
     * @param {?} pageMetaService
     */
    constructor(ngTitle, ngMeta, pageMetaService) {
        this.ngTitle = ngTitle;
        this.ngMeta = ngMeta;
        this.pageMetaService = pageMetaService;
    }
    /**
     * @return {?}
     */
    init() {
        this.pageMetaService
            .getMeta()
            .pipe(filter(Boolean))
            .subscribe((/**
         * @param {?} meta
         * @return {?}
         */
        (meta) => (this.meta = meta)));
    }
    /**
     * @protected
     * @param {?} meta
     * @return {?}
     */
    set meta(meta) {
        this.title = meta.title;
        this.description = meta.description;
        this.image = meta.image;
        this.robots = meta.robots || [PageRobotsMeta.INDEX, PageRobotsMeta.FOLLOW];
    }
    /**
     * @protected
     * @param {?} title
     * @return {?}
     */
    set title(title) {
        this.ngTitle.setTitle(title || '');
    }
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    set description(value) {
        this.addTag({ name: 'description', content: value });
    }
    /**
     * @protected
     * @param {?} imageUrl
     * @return {?}
     */
    set image(imageUrl) {
        if (imageUrl) {
            this.addTag({ name: 'og:image', content: imageUrl });
        }
    }
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    set robots(value) {
        if (value) {
            this.addTag({ name: 'robots', content: value.join(', ') });
        }
    }
    /**
     * @protected
     * @param {?} meta
     * @return {?}
     */
    addTag(meta) {
        if (meta.content) {
            this.ngMeta.updateTag(meta);
        }
    }
}
SeoMetaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
SeoMetaService.ctorParameters = () => [
    { type: Title },
    { type: Meta },
    { type: PageMetaService }
];
/** @nocollapse */ SeoMetaService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SeoMetaService_Factory() { return new SeoMetaService(i0.ɵɵinject(i1.Title), i0.ɵɵinject(i1.Meta), i0.ɵɵinject(i2.PageMetaService)); }, token: SeoMetaService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VvLW1ldGEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VvL3Nlby1tZXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQWtCLE1BQU0sMkJBQTJCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBWSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFLeEMsTUFBTSxPQUFPLGNBQWM7Ozs7OztJQUN6QixZQUNZLE9BQWMsRUFDZCxNQUFZLEVBQ1osZUFBZ0M7UUFGaEMsWUFBTyxHQUFQLE9BQU8sQ0FBTztRQUNkLFdBQU0sR0FBTixNQUFNLENBQU07UUFDWixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFDekMsQ0FBQzs7OztJQUVKLElBQUk7UUFDRixJQUFJLENBQUMsZUFBZTthQUNqQixPQUFPLEVBQUU7YUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3JCLFNBQVM7Ozs7UUFBQyxDQUFDLElBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFDLENBQUM7SUFDdkQsQ0FBQzs7Ozs7O0lBRUQsSUFBYyxJQUFJLENBQUMsSUFBYztRQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3RSxDQUFDOzs7Ozs7SUFFRCxJQUFjLEtBQUssQ0FBQyxLQUFhO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7SUFFRCxJQUFjLFdBQVcsQ0FBQyxLQUFhO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7OztJQUVELElBQWMsS0FBSyxDQUFDLFFBQWdCO1FBQ2xDLElBQUksUUFBUSxFQUFFO1lBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDdEQ7SUFDSCxDQUFDOzs7Ozs7SUFFRCxJQUFjLE1BQU0sQ0FBQyxLQUF1QjtRQUMxQyxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUM1RDtJQUNILENBQUM7Ozs7OztJQUVTLE1BQU0sQ0FBQyxJQUFvQjtRQUNuQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDOzs7WUFoREYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBTlEsS0FBSztZQUFFLElBQUk7WUFDWCxlQUFlOzs7Ozs7OztJQVFwQixpQ0FBd0I7Ozs7O0lBQ3hCLGdDQUFzQjs7Ozs7SUFDdEIseUNBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGl0bGUsIE1ldGEsIE1ldGFEZWZpbml0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBQYWdlTWV0YVNlcnZpY2UsIFBhZ2VNZXRhLCBQYWdlUm9ib3RzTWV0YSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTZW9NZXRhU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBuZ1RpdGxlOiBUaXRsZSxcbiAgICBwcm90ZWN0ZWQgbmdNZXRhOiBNZXRhLFxuICAgIHByb3RlY3RlZCBwYWdlTWV0YVNlcnZpY2U6IFBhZ2VNZXRhU2VydmljZVxuICApIHt9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLnBhZ2VNZXRhU2VydmljZVxuICAgICAgLmdldE1ldGEoKVxuICAgICAgLnBpcGUoZmlsdGVyKEJvb2xlYW4pKVxuICAgICAgLnN1YnNjcmliZSgobWV0YTogUGFnZU1ldGEpID0+ICh0aGlzLm1ldGEgPSBtZXRhKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2V0IG1ldGEobWV0YTogUGFnZU1ldGEpIHtcbiAgICB0aGlzLnRpdGxlID0gbWV0YS50aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gbWV0YS5kZXNjcmlwdGlvbjtcbiAgICB0aGlzLmltYWdlID0gbWV0YS5pbWFnZTtcbiAgICB0aGlzLnJvYm90cyA9IG1ldGEucm9ib3RzIHx8IFtQYWdlUm9ib3RzTWV0YS5JTkRFWCwgUGFnZVJvYm90c01ldGEuRk9MTE9XXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXQgdGl0bGUodGl0bGU6IHN0cmluZykge1xuICAgIHRoaXMubmdUaXRsZS5zZXRUaXRsZSh0aXRsZSB8fCAnJyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2V0IGRlc2NyaXB0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmFkZFRhZyh7IG5hbWU6ICdkZXNjcmlwdGlvbicsIGNvbnRlbnQ6IHZhbHVlIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldCBpbWFnZShpbWFnZVVybDogc3RyaW5nKSB7XG4gICAgaWYgKGltYWdlVXJsKSB7XG4gICAgICB0aGlzLmFkZFRhZyh7IG5hbWU6ICdvZzppbWFnZScsIGNvbnRlbnQ6IGltYWdlVXJsIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBzZXQgcm9ib3RzKHZhbHVlOiBQYWdlUm9ib3RzTWV0YVtdKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLmFkZFRhZyh7IG5hbWU6ICdyb2JvdHMnLCBjb250ZW50OiB2YWx1ZS5qb2luKCcsICcpIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBhZGRUYWcobWV0YTogTWV0YURlZmluaXRpb24pIHtcbiAgICBpZiAobWV0YS5jb250ZW50KSB7XG4gICAgICB0aGlzLm5nTWV0YS51cGRhdGVUYWcobWV0YSk7XG4gICAgfVxuICB9XG59XG4iXX0=