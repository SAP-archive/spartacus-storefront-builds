/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { PageMetaService } from '@spartacus/core';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
var BreadcrumbSchemaBuilder = /** @class */ (function () {
    function BreadcrumbSchemaBuilder(pageMetaService) {
        this.pageMetaService = pageMetaService;
    }
    /**
     * @return {?}
     */
    BreadcrumbSchemaBuilder.prototype.build = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.pageMetaService
            .getMeta()
            .pipe(map((/**
         * @param {?} pageMeta
         * @return {?}
         */
        function (pageMeta) { return _this.collect(pageMeta); })));
    };
    /**
     * @protected
     * @param {?} pageMeta
     * @return {?}
     */
    BreadcrumbSchemaBuilder.prototype.collect = /**
     * @protected
     * @param {?} pageMeta
     * @return {?}
     */
    function (pageMeta) {
        if (!pageMeta.breadcrumbs) {
            return;
        }
        /** @type {?} */
        var crumbs = pageMeta.breadcrumbs.map((/**
         * @param {?} crumb
         * @param {?} index
         * @return {?}
         */
        function (crumb, index) {
            return {
                '@type': 'ListItem',
                position: index + 1,
                item: {
                    '@id': crumb.link,
                    name: crumb.label,
                },
            };
        }));
        if (pageMeta.title) {
            crumbs.push({
                '@type': 'ListItem',
                position: crumbs.length + 1,
                item: {
                    '@id': pageMeta.title,
                    name: pageMeta.title,
                },
            });
        }
        return {
            '@context': 'http://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: crumbs,
        };
    };
    BreadcrumbSchemaBuilder.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    BreadcrumbSchemaBuilder.ctorParameters = function () { return [
        { type: PageMetaService }
    ]; };
    /** @nocollapse */ BreadcrumbSchemaBuilder.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function BreadcrumbSchemaBuilder_Factory() { return new BreadcrumbSchemaBuilder(i0.ɵɵinject(i1.PageMetaService)); }, token: BreadcrumbSchemaBuilder, providedIn: "root" });
    return BreadcrumbSchemaBuilder;
}());
export { BreadcrumbSchemaBuilder };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BreadcrumbSchemaBuilder.prototype.pageMetaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi1zY2hlbWEuYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VvL3N0cnVjdHVyZWQtZGF0YS9idWlsZGVycy9icmVhZGNydW1iL2JyZWFkY3J1bWItc2NoZW1hLmJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFZLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTVELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBR3JDO0lBSUUsaUNBQXNCLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUFHLENBQUM7Ozs7SUFFMUQsdUNBQUs7OztJQUFMO1FBQUEsaUJBSUM7UUFIQyxPQUFPLElBQUksQ0FBQyxlQUFlO2FBQ3hCLE9BQU8sRUFBRTthQUNULElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQyxRQUFrQixJQUFLLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBdEIsQ0FBc0IsRUFBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Ozs7O0lBRVMseUNBQU87Ozs7O0lBQWpCLFVBQWtCLFFBQWtCO1FBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFO1lBQ3pCLE9BQU87U0FDUjs7WUFDSyxNQUFNLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxHQUFHOzs7OztRQUFDLFVBQUMsS0FBSyxFQUFFLEtBQUs7WUFDbkQsT0FBTztnQkFDTCxPQUFPLEVBQUUsVUFBVTtnQkFDbkIsUUFBUSxFQUFFLEtBQUssR0FBRyxDQUFDO2dCQUNuQixJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJO29CQUNqQixJQUFJLEVBQUUsS0FBSyxDQUFDLEtBQUs7aUJBQ2xCO2FBQ0YsQ0FBQztRQUNKLENBQUMsRUFBQztRQUVGLElBQUksUUFBUSxDQUFDLEtBQUssRUFBRTtZQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNWLE9BQU8sRUFBRSxVQUFVO2dCQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDO2dCQUMzQixJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLO29CQUNyQixJQUFJLEVBQUUsUUFBUSxDQUFDLEtBQUs7aUJBQ3JCO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxPQUFPO1lBQ0wsVUFBVSxFQUFFLG1CQUFtQjtZQUMvQixPQUFPLEVBQUUsZ0JBQWdCO1lBQ3pCLGVBQWUsRUFBRSxNQUFNO1NBQ3hCLENBQUM7SUFDSixDQUFDOztnQkEzQ0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFQa0IsZUFBZTs7O2tDQURsQztDQWtEQyxBQTVDRCxJQTRDQztTQXpDWSx1QkFBdUI7Ozs7OztJQUN0QixrREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdlTWV0YSwgUGFnZU1ldGFTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFNjaGVtYUJ1aWxkZXIgfSBmcm9tICcuLi9zY2hlbWEuaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEJyZWFkY3J1bWJTY2hlbWFCdWlsZGVyIGltcGxlbWVudHMgU2NoZW1hQnVpbGRlciB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBwYWdlTWV0YVNlcnZpY2U6IFBhZ2VNZXRhU2VydmljZSkge31cblxuICBidWlsZCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnBhZ2VNZXRhU2VydmljZVxuICAgICAgLmdldE1ldGEoKVxuICAgICAgLnBpcGUobWFwKChwYWdlTWV0YTogUGFnZU1ldGEpID0+IHRoaXMuY29sbGVjdChwYWdlTWV0YSkpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjb2xsZWN0KHBhZ2VNZXRhOiBQYWdlTWV0YSk6IGFueSB7XG4gICAgaWYgKCFwYWdlTWV0YS5icmVhZGNydW1icykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjcnVtYnMgPSBwYWdlTWV0YS5icmVhZGNydW1icy5tYXAoKGNydW1iLCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ0B0eXBlJzogJ0xpc3RJdGVtJyxcbiAgICAgICAgcG9zaXRpb246IGluZGV4ICsgMSxcbiAgICAgICAgaXRlbToge1xuICAgICAgICAgICdAaWQnOiBjcnVtYi5saW5rLFxuICAgICAgICAgIG5hbWU6IGNydW1iLmxhYmVsLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGlmIChwYWdlTWV0YS50aXRsZSkge1xuICAgICAgY3J1bWJzLnB1c2goe1xuICAgICAgICAnQHR5cGUnOiAnTGlzdEl0ZW0nLFxuICAgICAgICBwb3NpdGlvbjogY3J1bWJzLmxlbmd0aCArIDEsXG4gICAgICAgIGl0ZW06IHtcbiAgICAgICAgICAnQGlkJzogcGFnZU1ldGEudGl0bGUsXG4gICAgICAgICAgbmFtZTogcGFnZU1ldGEudGl0bGUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgJ0Bjb250ZXh0JzogJ2h0dHA6Ly9zY2hlbWEub3JnJyxcbiAgICAgICdAdHlwZSc6ICdCcmVhZGNydW1iTGlzdCcsXG4gICAgICBpdGVtTGlzdEVsZW1lbnQ6IGNydW1icyxcbiAgICB9O1xuICB9XG59XG4iXX0=