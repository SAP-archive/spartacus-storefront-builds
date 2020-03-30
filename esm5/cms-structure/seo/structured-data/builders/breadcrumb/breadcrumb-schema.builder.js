import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { PageMeta, PageMetaService } from '@spartacus/core';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
var BreadcrumbSchemaBuilder = /** @class */ (function () {
    function BreadcrumbSchemaBuilder(pageMetaService) {
        this.pageMetaService = pageMetaService;
    }
    BreadcrumbSchemaBuilder.prototype.build = function () {
        var _this = this;
        return this.pageMetaService
            .getMeta()
            .pipe(map(function (pageMeta) { return _this.collect(pageMeta); }));
    };
    BreadcrumbSchemaBuilder.prototype.collect = function (pageMeta) {
        if (!(pageMeta === null || pageMeta === void 0 ? void 0 : pageMeta.breadcrumbs)) {
            return;
        }
        var crumbs = pageMeta.breadcrumbs.map(function (crumb, index) {
            return {
                '@type': 'ListItem',
                position: index + 1,
                item: {
                    '@id': crumb.link,
                    name: crumb.label,
                },
            };
        });
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
    BreadcrumbSchemaBuilder.ctorParameters = function () { return [
        { type: PageMetaService }
    ]; };
    BreadcrumbSchemaBuilder.ɵprov = i0.ɵɵdefineInjectable({ factory: function BreadcrumbSchemaBuilder_Factory() { return new BreadcrumbSchemaBuilder(i0.ɵɵinject(i1.PageMetaService)); }, token: BreadcrumbSchemaBuilder, providedIn: "root" });
    BreadcrumbSchemaBuilder = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], BreadcrumbSchemaBuilder);
    return BreadcrumbSchemaBuilder;
}());
export { BreadcrumbSchemaBuilder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi1zY2hlbWEuYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VvL3N0cnVjdHVyZWQtZGF0YS9idWlsZGVycy9icmVhZGNydW1iL2JyZWFkY3J1bWItc2NoZW1hLmJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQU1yQztJQUNFLGlDQUFzQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFBRyxDQUFDO0lBRTFELHVDQUFLLEdBQUw7UUFBQSxpQkFJQztRQUhDLE9BQU8sSUFBSSxDQUFDLGVBQWU7YUFDeEIsT0FBTyxFQUFFO2FBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLFFBQWtCLElBQUssT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUF0QixDQUFzQixDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRVMseUNBQU8sR0FBakIsVUFBa0IsUUFBa0I7UUFDbEMsSUFBSSxFQUFDLFFBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxXQUFXLENBQUEsRUFBRTtZQUMxQixPQUFPO1NBQ1I7UUFDRCxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEtBQUssRUFBRSxLQUFLO1lBQ25ELE9BQU87Z0JBQ0wsT0FBTyxFQUFFLFVBQVU7Z0JBQ25CLFFBQVEsRUFBRSxLQUFLLEdBQUcsQ0FBQztnQkFDbkIsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSTtvQkFDakIsSUFBSSxFQUFFLEtBQUssQ0FBQyxLQUFLO2lCQUNsQjthQUNGLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksUUFBUSxDQUFDLEtBQUssRUFBRTtZQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNWLE9BQU8sRUFBRSxVQUFVO2dCQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDO2dCQUMzQixJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLO29CQUNyQixJQUFJLEVBQUUsUUFBUSxDQUFDLEtBQUs7aUJBQ3JCO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxPQUFPO1lBQ0wsVUFBVSxFQUFFLG1CQUFtQjtZQUMvQixPQUFPLEVBQUUsZ0JBQWdCO1lBQ3pCLGVBQWUsRUFBRSxNQUFNO1NBQ3hCLENBQUM7SUFDSixDQUFDOztnQkF2Q3NDLGVBQWU7OztJQUQzQyx1QkFBdUI7UUFIbkMsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLHVCQUF1QixDQXlDbkM7a0NBbEREO0NBa0RDLEFBekNELElBeUNDO1NBekNZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2VNZXRhLCBQYWdlTWV0YVNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU2NoZW1hQnVpbGRlciB9IGZyb20gJy4uL3NjaGVtYS5pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYlNjaGVtYUJ1aWxkZXIgaW1wbGVtZW50cyBTY2hlbWFCdWlsZGVyIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHBhZ2VNZXRhU2VydmljZTogUGFnZU1ldGFTZXJ2aWNlKSB7fVxuXG4gIGJ1aWxkKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMucGFnZU1ldGFTZXJ2aWNlXG4gICAgICAuZ2V0TWV0YSgpXG4gICAgICAucGlwZShtYXAoKHBhZ2VNZXRhOiBQYWdlTWV0YSkgPT4gdGhpcy5jb2xsZWN0KHBhZ2VNZXRhKSkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNvbGxlY3QocGFnZU1ldGE6IFBhZ2VNZXRhKTogYW55IHtcbiAgICBpZiAoIXBhZ2VNZXRhPy5icmVhZGNydW1icykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjcnVtYnMgPSBwYWdlTWV0YS5icmVhZGNydW1icy5tYXAoKGNydW1iLCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ0B0eXBlJzogJ0xpc3RJdGVtJyxcbiAgICAgICAgcG9zaXRpb246IGluZGV4ICsgMSxcbiAgICAgICAgaXRlbToge1xuICAgICAgICAgICdAaWQnOiBjcnVtYi5saW5rLFxuICAgICAgICAgIG5hbWU6IGNydW1iLmxhYmVsLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGlmIChwYWdlTWV0YS50aXRsZSkge1xuICAgICAgY3J1bWJzLnB1c2goe1xuICAgICAgICAnQHR5cGUnOiAnTGlzdEl0ZW0nLFxuICAgICAgICBwb3NpdGlvbjogY3J1bWJzLmxlbmd0aCArIDEsXG4gICAgICAgIGl0ZW06IHtcbiAgICAgICAgICAnQGlkJzogcGFnZU1ldGEudGl0bGUsXG4gICAgICAgICAgbmFtZTogcGFnZU1ldGEudGl0bGUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgJ0Bjb250ZXh0JzogJ2h0dHA6Ly9zY2hlbWEub3JnJyxcbiAgICAgICdAdHlwZSc6ICdCcmVhZGNydW1iTGlzdCcsXG4gICAgICBpdGVtTGlzdEVsZW1lbnQ6IGNydW1icyxcbiAgICB9O1xuICB9XG59XG4iXX0=