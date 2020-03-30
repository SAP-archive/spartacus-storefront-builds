import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { PageMeta, PageMetaService } from '@spartacus/core';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
let BreadcrumbSchemaBuilder = class BreadcrumbSchemaBuilder {
    constructor(pageMetaService) {
        this.pageMetaService = pageMetaService;
    }
    build() {
        return this.pageMetaService
            .getMeta()
            .pipe(map((pageMeta) => this.collect(pageMeta)));
    }
    collect(pageMeta) {
        if (!(pageMeta === null || pageMeta === void 0 ? void 0 : pageMeta.breadcrumbs)) {
            return;
        }
        const crumbs = pageMeta.breadcrumbs.map((crumb, index) => {
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
    }
};
BreadcrumbSchemaBuilder.ctorParameters = () => [
    { type: PageMetaService }
];
BreadcrumbSchemaBuilder.ɵprov = i0.ɵɵdefineInjectable({ factory: function BreadcrumbSchemaBuilder_Factory() { return new BreadcrumbSchemaBuilder(i0.ɵɵinject(i1.PageMetaService)); }, token: BreadcrumbSchemaBuilder, providedIn: "root" });
BreadcrumbSchemaBuilder = __decorate([
    Injectable({
        providedIn: 'root',
    })
], BreadcrumbSchemaBuilder);
export { BreadcrumbSchemaBuilder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi1zY2hlbWEuYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VvL3N0cnVjdHVyZWQtZGF0YS9idWlsZGVycy9icmVhZGNydW1iL2JyZWFkY3J1bWItc2NoZW1hLmJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQU1yQyxJQUFhLHVCQUF1QixHQUFwQyxNQUFhLHVCQUF1QjtJQUNsQyxZQUFzQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFBRyxDQUFDO0lBRTFELEtBQUs7UUFDSCxPQUFPLElBQUksQ0FBQyxlQUFlO2FBQ3hCLE9BQU8sRUFBRTthQUNULElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFrQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRVMsT0FBTyxDQUFDLFFBQWtCO1FBQ2xDLElBQUksRUFBQyxRQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsV0FBVyxDQUFBLEVBQUU7WUFDMUIsT0FBTztTQUNSO1FBQ0QsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDdkQsT0FBTztnQkFDTCxPQUFPLEVBQUUsVUFBVTtnQkFDbkIsUUFBUSxFQUFFLEtBQUssR0FBRyxDQUFDO2dCQUNuQixJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJO29CQUNqQixJQUFJLEVBQUUsS0FBSyxDQUFDLEtBQUs7aUJBQ2xCO2FBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxRQUFRLENBQUMsS0FBSyxFQUFFO1lBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ1YsT0FBTyxFQUFFLFVBQVU7Z0JBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQzNCLElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUs7b0JBQ3JCLElBQUksRUFBRSxRQUFRLENBQUMsS0FBSztpQkFDckI7YUFDRixDQUFDLENBQUM7U0FDSjtRQUVELE9BQU87WUFDTCxVQUFVLEVBQUUsbUJBQW1CO1lBQy9CLE9BQU8sRUFBRSxnQkFBZ0I7WUFDekIsZUFBZSxFQUFFLE1BQU07U0FDeEIsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBOztZQXhDd0MsZUFBZTs7O0FBRDNDLHVCQUF1QjtJQUhuQyxVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csdUJBQXVCLENBeUNuQztTQXpDWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdlTWV0YSwgUGFnZU1ldGFTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFNjaGVtYUJ1aWxkZXIgfSBmcm9tICcuLi9zY2hlbWEuaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEJyZWFkY3J1bWJTY2hlbWFCdWlsZGVyIGltcGxlbWVudHMgU2NoZW1hQnVpbGRlciB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBwYWdlTWV0YVNlcnZpY2U6IFBhZ2VNZXRhU2VydmljZSkge31cblxuICBidWlsZCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnBhZ2VNZXRhU2VydmljZVxuICAgICAgLmdldE1ldGEoKVxuICAgICAgLnBpcGUobWFwKChwYWdlTWV0YTogUGFnZU1ldGEpID0+IHRoaXMuY29sbGVjdChwYWdlTWV0YSkpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjb2xsZWN0KHBhZ2VNZXRhOiBQYWdlTWV0YSk6IGFueSB7XG4gICAgaWYgKCFwYWdlTWV0YT8uYnJlYWRjcnVtYnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY3J1bWJzID0gcGFnZU1ldGEuYnJlYWRjcnVtYnMubWFwKChjcnVtYiwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICdAdHlwZSc6ICdMaXN0SXRlbScsXG4gICAgICAgIHBvc2l0aW9uOiBpbmRleCArIDEsXG4gICAgICAgIGl0ZW06IHtcbiAgICAgICAgICAnQGlkJzogY3J1bWIubGluayxcbiAgICAgICAgICBuYW1lOiBjcnVtYi5sYWJlbCxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBpZiAocGFnZU1ldGEudGl0bGUpIHtcbiAgICAgIGNydW1icy5wdXNoKHtcbiAgICAgICAgJ0B0eXBlJzogJ0xpc3RJdGVtJyxcbiAgICAgICAgcG9zaXRpb246IGNydW1icy5sZW5ndGggKyAxLFxuICAgICAgICBpdGVtOiB7XG4gICAgICAgICAgJ0BpZCc6IHBhZ2VNZXRhLnRpdGxlLFxuICAgICAgICAgIG5hbWU6IHBhZ2VNZXRhLnRpdGxlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICdAY29udGV4dCc6ICdodHRwOi8vc2NoZW1hLm9yZycsXG4gICAgICAnQHR5cGUnOiAnQnJlYWRjcnVtYkxpc3QnLFxuICAgICAgaXRlbUxpc3RFbGVtZW50OiBjcnVtYnMsXG4gICAgfTtcbiAgfVxufVxuIl19