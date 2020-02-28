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
        var _a;
        if (!((_a = pageMeta) === null || _a === void 0 ? void 0 : _a.breadcrumbs)) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi1zY2hlbWEuYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VvL3N0cnVjdHVyZWQtZGF0YS9idWlsZGVycy9icmVhZGNydW1iL2JyZWFkY3J1bWItc2NoZW1hLmJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQU1yQztJQUNFLGlDQUFzQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFBRyxDQUFDO0lBRTFELHVDQUFLLEdBQUw7UUFBQSxpQkFJQztRQUhDLE9BQU8sSUFBSSxDQUFDLGVBQWU7YUFDeEIsT0FBTyxFQUFFO2FBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLFFBQWtCLElBQUssT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUF0QixDQUFzQixDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRVMseUNBQU8sR0FBakIsVUFBa0IsUUFBa0I7O1FBQ2xDLElBQUksUUFBQyxRQUFRLDBDQUFFLFdBQVcsQ0FBQSxFQUFFO1lBQzFCLE9BQU87U0FDUjtRQUNELElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFVBQUMsS0FBSyxFQUFFLEtBQUs7WUFDbkQsT0FBTztnQkFDTCxPQUFPLEVBQUUsVUFBVTtnQkFDbkIsUUFBUSxFQUFFLEtBQUssR0FBRyxDQUFDO2dCQUNuQixJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJO29CQUNqQixJQUFJLEVBQUUsS0FBSyxDQUFDLEtBQUs7aUJBQ2xCO2FBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxRQUFRLENBQUMsS0FBSyxFQUFFO1lBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ1YsT0FBTyxFQUFFLFVBQVU7Z0JBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQzNCLElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUs7b0JBQ3JCLElBQUksRUFBRSxRQUFRLENBQUMsS0FBSztpQkFDckI7YUFDRixDQUFDLENBQUM7U0FDSjtRQUVELE9BQU87WUFDTCxVQUFVLEVBQUUsbUJBQW1CO1lBQy9CLE9BQU8sRUFBRSxnQkFBZ0I7WUFDekIsZUFBZSxFQUFFLE1BQU07U0FDeEIsQ0FBQztJQUNKLENBQUM7O2dCQXZDc0MsZUFBZTs7O0lBRDNDLHVCQUF1QjtRQUhuQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csdUJBQXVCLENBeUNuQztrQ0FsREQ7Q0FrREMsQUF6Q0QsSUF5Q0M7U0F6Q1ksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZU1ldGEsIFBhZ2VNZXRhU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTY2hlbWFCdWlsZGVyIH0gZnJvbSAnLi4vc2NoZW1hLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1iU2NoZW1hQnVpbGRlciBpbXBsZW1lbnRzIFNjaGVtYUJ1aWxkZXIge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcGFnZU1ldGFTZXJ2aWNlOiBQYWdlTWV0YVNlcnZpY2UpIHt9XG5cbiAgYnVpbGQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5wYWdlTWV0YVNlcnZpY2VcbiAgICAgIC5nZXRNZXRhKClcbiAgICAgIC5waXBlKG1hcCgocGFnZU1ldGE6IFBhZ2VNZXRhKSA9PiB0aGlzLmNvbGxlY3QocGFnZU1ldGEpKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY29sbGVjdChwYWdlTWV0YTogUGFnZU1ldGEpOiBhbnkge1xuICAgIGlmICghcGFnZU1ldGE/LmJyZWFkY3J1bWJzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNydW1icyA9IHBhZ2VNZXRhLmJyZWFkY3J1bWJzLm1hcCgoY3J1bWIsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAnQHR5cGUnOiAnTGlzdEl0ZW0nLFxuICAgICAgICBwb3NpdGlvbjogaW5kZXggKyAxLFxuICAgICAgICBpdGVtOiB7XG4gICAgICAgICAgJ0BpZCc6IGNydW1iLmxpbmssXG4gICAgICAgICAgbmFtZTogY3J1bWIubGFiZWwsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgaWYgKHBhZ2VNZXRhLnRpdGxlKSB7XG4gICAgICBjcnVtYnMucHVzaCh7XG4gICAgICAgICdAdHlwZSc6ICdMaXN0SXRlbScsXG4gICAgICAgIHBvc2l0aW9uOiBjcnVtYnMubGVuZ3RoICsgMSxcbiAgICAgICAgaXRlbToge1xuICAgICAgICAgICdAaWQnOiBwYWdlTWV0YS50aXRsZSxcbiAgICAgICAgICBuYW1lOiBwYWdlTWV0YS50aXRsZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAnQGNvbnRleHQnOiAnaHR0cDovL3NjaGVtYS5vcmcnLFxuICAgICAgJ0B0eXBlJzogJ0JyZWFkY3J1bWJMaXN0JyxcbiAgICAgIGl0ZW1MaXN0RWxlbWVudDogY3J1bWJzLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==