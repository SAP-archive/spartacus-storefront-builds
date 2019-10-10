/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { PageMetaService } from '@spartacus/core';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
export class BreadcrumbSchemaBuilder {
    /**
     * @param {?} pageMetaService
     */
    constructor(pageMetaService) {
        this.pageMetaService = pageMetaService;
    }
    /**
     * @return {?}
     */
    build() {
        return this.pageMetaService
            .getMeta()
            .pipe(map((/**
         * @param {?} pageMeta
         * @return {?}
         */
        (pageMeta) => this.collect(pageMeta))));
    }
    /**
     * @protected
     * @param {?} pageMeta
     * @return {?}
     */
    collect(pageMeta) {
        if (!pageMeta.breadcrumbs) {
            return;
        }
        /** @type {?} */
        const crumbs = pageMeta.breadcrumbs.map((/**
         * @param {?} crumb
         * @param {?} index
         * @return {?}
         */
        (crumb, index) => {
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
    }
}
BreadcrumbSchemaBuilder.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
BreadcrumbSchemaBuilder.ctorParameters = () => [
    { type: PageMetaService }
];
/** @nocollapse */ BreadcrumbSchemaBuilder.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function BreadcrumbSchemaBuilder_Factory() { return new BreadcrumbSchemaBuilder(i0.ɵɵinject(i1.PageMetaService)); }, token: BreadcrumbSchemaBuilder, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BreadcrumbSchemaBuilder.prototype.pageMetaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi1zY2hlbWEuYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VvL3N0cnVjdHVyZWQtZGF0YS9idWlsZGVycy9icmVhZGNydW1iL2JyZWFkY3J1bWItc2NoZW1hLmJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFZLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTVELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBTXJDLE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUFDbEMsWUFBc0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQUcsQ0FBQzs7OztJQUUxRCxLQUFLO1FBQ0gsT0FBTyxJQUFJLENBQUMsZUFBZTthQUN4QixPQUFPLEVBQUU7YUFDVCxJQUFJLENBQUMsR0FBRzs7OztRQUFDLENBQUMsUUFBa0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Ozs7O0lBRVMsT0FBTyxDQUFDLFFBQWtCO1FBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFO1lBQ3pCLE9BQU87U0FDUjs7Y0FDSyxNQUFNLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxHQUFHOzs7OztRQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3ZELE9BQU87Z0JBQ0wsT0FBTyxFQUFFLFVBQVU7Z0JBQ25CLFFBQVEsRUFBRSxLQUFLLEdBQUcsQ0FBQztnQkFDbkIsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSTtvQkFDakIsSUFBSSxFQUFFLEtBQUssQ0FBQyxLQUFLO2lCQUNsQjthQUNGLENBQUM7UUFDSixDQUFDLEVBQUM7UUFFRixJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUU7WUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDVixPQUFPLEVBQUUsVUFBVTtnQkFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFDM0IsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxRQUFRLENBQUMsS0FBSztvQkFDckIsSUFBSSxFQUFFLFFBQVEsQ0FBQyxLQUFLO2lCQUNyQjthQUNGLENBQUMsQ0FBQztTQUNKO1FBRUQsT0FBTztZQUNMLFVBQVUsRUFBRSxtQkFBbUI7WUFDL0IsT0FBTyxFQUFFLGdCQUFnQjtZQUN6QixlQUFlLEVBQUUsTUFBTTtTQUN4QixDQUFDO0lBQ0osQ0FBQzs7O1lBM0NGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVBrQixlQUFlOzs7Ozs7OztJQVNwQixrREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdlTWV0YSwgUGFnZU1ldGFTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFNjaGVtYUJ1aWxkZXIgfSBmcm9tICcuLi9zY2hlbWEuaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEJyZWFkY3J1bWJTY2hlbWFCdWlsZGVyIGltcGxlbWVudHMgU2NoZW1hQnVpbGRlciB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBwYWdlTWV0YVNlcnZpY2U6IFBhZ2VNZXRhU2VydmljZSkge31cblxuICBidWlsZCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnBhZ2VNZXRhU2VydmljZVxuICAgICAgLmdldE1ldGEoKVxuICAgICAgLnBpcGUobWFwKChwYWdlTWV0YTogUGFnZU1ldGEpID0+IHRoaXMuY29sbGVjdChwYWdlTWV0YSkpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjb2xsZWN0KHBhZ2VNZXRhOiBQYWdlTWV0YSk6IGFueSB7XG4gICAgaWYgKCFwYWdlTWV0YS5icmVhZGNydW1icykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjcnVtYnMgPSBwYWdlTWV0YS5icmVhZGNydW1icy5tYXAoKGNydW1iLCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ0B0eXBlJzogJ0xpc3RJdGVtJyxcbiAgICAgICAgcG9zaXRpb246IGluZGV4ICsgMSxcbiAgICAgICAgaXRlbToge1xuICAgICAgICAgICdAaWQnOiBjcnVtYi5saW5rLFxuICAgICAgICAgIG5hbWU6IGNydW1iLmxhYmVsLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGlmIChwYWdlTWV0YS50aXRsZSkge1xuICAgICAgY3J1bWJzLnB1c2goe1xuICAgICAgICAnQHR5cGUnOiAnTGlzdEl0ZW0nLFxuICAgICAgICBwb3NpdGlvbjogY3J1bWJzLmxlbmd0aCArIDEsXG4gICAgICAgIGl0ZW06IHtcbiAgICAgICAgICAnQGlkJzogcGFnZU1ldGEudGl0bGUsXG4gICAgICAgICAgbmFtZTogcGFnZU1ldGEudGl0bGUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgJ0Bjb250ZXh0JzogJ2h0dHA6Ly9zY2hlbWEub3JnJyxcbiAgICAgICdAdHlwZSc6ICdCcmVhZGNydW1iTGlzdCcsXG4gICAgICBpdGVtTGlzdEVsZW1lbnQ6IGNydW1icyxcbiAgICB9O1xuICB9XG59XG4iXX0=