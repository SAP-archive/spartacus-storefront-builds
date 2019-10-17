/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VvLW1ldGEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VvL3Nlby1tZXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLElBQUksRUFBa0IsS0FBSyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDeEUsT0FBTyxFQUFZLGVBQWUsRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFLeEMsTUFBTSxPQUFPLGNBQWM7Ozs7OztJQUN6QixZQUNZLE9BQWMsRUFDZCxNQUFZLEVBQ1osZUFBZ0M7UUFGaEMsWUFBTyxHQUFQLE9BQU8sQ0FBTztRQUNkLFdBQU0sR0FBTixNQUFNLENBQU07UUFDWixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFDekMsQ0FBQzs7OztJQUVKLElBQUk7UUFDRixJQUFJLENBQUMsZUFBZTthQUNqQixPQUFPLEVBQUU7YUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3JCLFNBQVM7Ozs7UUFBQyxDQUFDLElBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFDLENBQUM7SUFDdkQsQ0FBQzs7Ozs7O0lBRUQsSUFBYyxJQUFJLENBQUMsSUFBYztRQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3RSxDQUFDOzs7Ozs7SUFFRCxJQUFjLEtBQUssQ0FBQyxLQUFhO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7SUFFRCxJQUFjLFdBQVcsQ0FBQyxLQUFhO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7OztJQUVELElBQWMsS0FBSyxDQUFDLFFBQWdCO1FBQ2xDLElBQUksUUFBUSxFQUFFO1lBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDdEQ7SUFDSCxDQUFDOzs7Ozs7SUFFRCxJQUFjLE1BQU0sQ0FBQyxLQUF1QjtRQUMxQyxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUM1RDtJQUNILENBQUM7Ozs7OztJQUVTLE1BQU0sQ0FBQyxJQUFvQjtRQUNuQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDOzs7WUFoREYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBTjhCLEtBQUs7WUFBM0IsSUFBSTtZQUNNLGVBQWU7Ozs7Ozs7O0lBUTlCLGlDQUF3Qjs7Ozs7SUFDeEIsZ0NBQXNCOzs7OztJQUN0Qix5Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZXRhLCBNZXRhRGVmaW5pdGlvbiwgVGl0bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFBhZ2VNZXRhLCBQYWdlTWV0YVNlcnZpY2UsIFBhZ2VSb2JvdHNNZXRhIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFNlb01ldGFTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIG5nVGl0bGU6IFRpdGxlLFxuICAgIHByb3RlY3RlZCBuZ01ldGE6IE1ldGEsXG4gICAgcHJvdGVjdGVkIHBhZ2VNZXRhU2VydmljZTogUGFnZU1ldGFTZXJ2aWNlXG4gICkge31cblxuICBpbml0KCkge1xuICAgIHRoaXMucGFnZU1ldGFTZXJ2aWNlXG4gICAgICAuZ2V0TWV0YSgpXG4gICAgICAucGlwZShmaWx0ZXIoQm9vbGVhbikpXG4gICAgICAuc3Vic2NyaWJlKChtZXRhOiBQYWdlTWV0YSkgPT4gKHRoaXMubWV0YSA9IG1ldGEpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXQgbWV0YShtZXRhOiBQYWdlTWV0YSkge1xuICAgIHRoaXMudGl0bGUgPSBtZXRhLnRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBtZXRhLmRlc2NyaXB0aW9uO1xuICAgIHRoaXMuaW1hZ2UgPSBtZXRhLmltYWdlO1xuICAgIHRoaXMucm9ib3RzID0gbWV0YS5yb2JvdHMgfHwgW1BhZ2VSb2JvdHNNZXRhLklOREVYLCBQYWdlUm9ib3RzTWV0YS5GT0xMT1ddO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldCB0aXRsZSh0aXRsZTogc3RyaW5nKSB7XG4gICAgdGhpcy5uZ1RpdGxlLnNldFRpdGxlKHRpdGxlIHx8ICcnKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXQgZGVzY3JpcHRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuYWRkVGFnKHsgbmFtZTogJ2Rlc2NyaXB0aW9uJywgY29udGVudDogdmFsdWUgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2V0IGltYWdlKGltYWdlVXJsOiBzdHJpbmcpIHtcbiAgICBpZiAoaW1hZ2VVcmwpIHtcbiAgICAgIHRoaXMuYWRkVGFnKHsgbmFtZTogJ29nOmltYWdlJywgY29udGVudDogaW1hZ2VVcmwgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHNldCByb2JvdHModmFsdWU6IFBhZ2VSb2JvdHNNZXRhW10pIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuYWRkVGFnKHsgbmFtZTogJ3JvYm90cycsIGNvbnRlbnQ6IHZhbHVlLmpvaW4oJywgJykgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGFkZFRhZyhtZXRhOiBNZXRhRGVmaW5pdGlvbikge1xuICAgIGlmIChtZXRhLmNvbnRlbnQpIHtcbiAgICAgIHRoaXMubmdNZXRhLnVwZGF0ZVRhZyhtZXRhKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==