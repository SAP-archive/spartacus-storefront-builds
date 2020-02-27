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
        if (!pageMeta || !pageMeta.breadcrumbs) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi1zY2hlbWEuYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VvL3N0cnVjdHVyZWQtZGF0YS9idWlsZGVycy9icmVhZGNydW1iL2JyZWFkY3J1bWItc2NoZW1hLmJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQU1yQztJQUNFLGlDQUFzQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFBRyxDQUFDO0lBRTFELHVDQUFLLEdBQUw7UUFBQSxpQkFJQztRQUhDLE9BQU8sSUFBSSxDQUFDLGVBQWU7YUFDeEIsT0FBTyxFQUFFO2FBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLFFBQWtCLElBQUssT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUF0QixDQUFzQixDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRVMseUNBQU8sR0FBakIsVUFBa0IsUUFBa0I7UUFDbEMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUU7WUFDdEMsT0FBTztTQUNSO1FBQ0QsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsVUFBQyxLQUFLLEVBQUUsS0FBSztZQUNuRCxPQUFPO2dCQUNMLE9BQU8sRUFBRSxVQUFVO2dCQUNuQixRQUFRLEVBQUUsS0FBSyxHQUFHLENBQUM7Z0JBQ25CLElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUk7b0JBQ2pCLElBQUksRUFBRSxLQUFLLENBQUMsS0FBSztpQkFDbEI7YUFDRixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUU7WUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDVixPQUFPLEVBQUUsVUFBVTtnQkFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFDM0IsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxRQUFRLENBQUMsS0FBSztvQkFDckIsSUFBSSxFQUFFLFFBQVEsQ0FBQyxLQUFLO2lCQUNyQjthQUNGLENBQUMsQ0FBQztTQUNKO1FBRUQsT0FBTztZQUNMLFVBQVUsRUFBRSxtQkFBbUI7WUFDL0IsT0FBTyxFQUFFLGdCQUFnQjtZQUN6QixlQUFlLEVBQUUsTUFBTTtTQUN4QixDQUFDO0lBQ0osQ0FBQzs7Z0JBdkNzQyxlQUFlOzs7SUFEM0MsdUJBQXVCO1FBSG5DLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyx1QkFBdUIsQ0F5Q25DO2tDQWxERDtDQWtEQyxBQXpDRCxJQXlDQztTQXpDWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdlTWV0YSwgUGFnZU1ldGFTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFNjaGVtYUJ1aWxkZXIgfSBmcm9tICcuLi9zY2hlbWEuaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEJyZWFkY3J1bWJTY2hlbWFCdWlsZGVyIGltcGxlbWVudHMgU2NoZW1hQnVpbGRlciB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBwYWdlTWV0YVNlcnZpY2U6IFBhZ2VNZXRhU2VydmljZSkge31cblxuICBidWlsZCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnBhZ2VNZXRhU2VydmljZVxuICAgICAgLmdldE1ldGEoKVxuICAgICAgLnBpcGUobWFwKChwYWdlTWV0YTogUGFnZU1ldGEpID0+IHRoaXMuY29sbGVjdChwYWdlTWV0YSkpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjb2xsZWN0KHBhZ2VNZXRhOiBQYWdlTWV0YSk6IGFueSB7XG4gICAgaWYgKCFwYWdlTWV0YSB8fCAhcGFnZU1ldGEuYnJlYWRjcnVtYnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY3J1bWJzID0gcGFnZU1ldGEuYnJlYWRjcnVtYnMubWFwKChjcnVtYiwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICdAdHlwZSc6ICdMaXN0SXRlbScsXG4gICAgICAgIHBvc2l0aW9uOiBpbmRleCArIDEsXG4gICAgICAgIGl0ZW06IHtcbiAgICAgICAgICAnQGlkJzogY3J1bWIubGluayxcbiAgICAgICAgICBuYW1lOiBjcnVtYi5sYWJlbCxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBpZiAocGFnZU1ldGEudGl0bGUpIHtcbiAgICAgIGNydW1icy5wdXNoKHtcbiAgICAgICAgJ0B0eXBlJzogJ0xpc3RJdGVtJyxcbiAgICAgICAgcG9zaXRpb246IGNydW1icy5sZW5ndGggKyAxLFxuICAgICAgICBpdGVtOiB7XG4gICAgICAgICAgJ0BpZCc6IHBhZ2VNZXRhLnRpdGxlLFxuICAgICAgICAgIG5hbWU6IHBhZ2VNZXRhLnRpdGxlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICdAY29udGV4dCc6ICdodHRwOi8vc2NoZW1hLm9yZycsXG4gICAgICAnQHR5cGUnOiAnQnJlYWRjcnVtYkxpc3QnLFxuICAgICAgaXRlbUxpc3RFbGVtZW50OiBjcnVtYnMsXG4gICAgfTtcbiAgfVxufVxuIl19