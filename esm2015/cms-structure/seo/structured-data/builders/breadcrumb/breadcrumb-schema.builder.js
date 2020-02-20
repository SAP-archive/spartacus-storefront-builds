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
        if (!pageMeta.breadcrumbs) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi1zY2hlbWEuYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VvL3N0cnVjdHVyZWQtZGF0YS9idWlsZGVycy9icmVhZGNydW1iL2JyZWFkY3J1bWItc2NoZW1hLmJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQU1yQyxJQUFhLHVCQUF1QixHQUFwQyxNQUFhLHVCQUF1QjtJQUNsQyxZQUFzQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFBRyxDQUFDO0lBRTFELEtBQUs7UUFDSCxPQUFPLElBQUksQ0FBQyxlQUFlO2FBQ3hCLE9BQU8sRUFBRTthQUNULElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFrQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRVMsT0FBTyxDQUFDLFFBQWtCO1FBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFO1lBQ3pCLE9BQU87U0FDUjtRQUNELE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3ZELE9BQU87Z0JBQ0wsT0FBTyxFQUFFLFVBQVU7Z0JBQ25CLFFBQVEsRUFBRSxLQUFLLEdBQUcsQ0FBQztnQkFDbkIsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSTtvQkFDakIsSUFBSSxFQUFFLEtBQUssQ0FBQyxLQUFLO2lCQUNsQjthQUNGLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksUUFBUSxDQUFDLEtBQUssRUFBRTtZQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNWLE9BQU8sRUFBRSxVQUFVO2dCQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDO2dCQUMzQixJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLO29CQUNyQixJQUFJLEVBQUUsUUFBUSxDQUFDLEtBQUs7aUJBQ3JCO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxPQUFPO1lBQ0wsVUFBVSxFQUFFLG1CQUFtQjtZQUMvQixPQUFPLEVBQUUsZ0JBQWdCO1lBQ3pCLGVBQWUsRUFBRSxNQUFNO1NBQ3hCLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTs7WUF4Q3dDLGVBQWU7OztBQUQzQyx1QkFBdUI7SUFIbkMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLHVCQUF1QixDQXlDbkM7U0F6Q1ksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZU1ldGEsIFBhZ2VNZXRhU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTY2hlbWFCdWlsZGVyIH0gZnJvbSAnLi4vc2NoZW1hLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1iU2NoZW1hQnVpbGRlciBpbXBsZW1lbnRzIFNjaGVtYUJ1aWxkZXIge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcGFnZU1ldGFTZXJ2aWNlOiBQYWdlTWV0YVNlcnZpY2UpIHt9XG5cbiAgYnVpbGQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5wYWdlTWV0YVNlcnZpY2VcbiAgICAgIC5nZXRNZXRhKClcbiAgICAgIC5waXBlKG1hcCgocGFnZU1ldGE6IFBhZ2VNZXRhKSA9PiB0aGlzLmNvbGxlY3QocGFnZU1ldGEpKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY29sbGVjdChwYWdlTWV0YTogUGFnZU1ldGEpOiBhbnkge1xuICAgIGlmICghcGFnZU1ldGEuYnJlYWRjcnVtYnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY3J1bWJzID0gcGFnZU1ldGEuYnJlYWRjcnVtYnMubWFwKChjcnVtYiwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICdAdHlwZSc6ICdMaXN0SXRlbScsXG4gICAgICAgIHBvc2l0aW9uOiBpbmRleCArIDEsXG4gICAgICAgIGl0ZW06IHtcbiAgICAgICAgICAnQGlkJzogY3J1bWIubGluayxcbiAgICAgICAgICBuYW1lOiBjcnVtYi5sYWJlbCxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBpZiAocGFnZU1ldGEudGl0bGUpIHtcbiAgICAgIGNydW1icy5wdXNoKHtcbiAgICAgICAgJ0B0eXBlJzogJ0xpc3RJdGVtJyxcbiAgICAgICAgcG9zaXRpb246IGNydW1icy5sZW5ndGggKyAxLFxuICAgICAgICBpdGVtOiB7XG4gICAgICAgICAgJ0BpZCc6IHBhZ2VNZXRhLnRpdGxlLFxuICAgICAgICAgIG5hbWU6IHBhZ2VNZXRhLnRpdGxlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICdAY29udGV4dCc6ICdodHRwOi8vc2NoZW1hLm9yZycsXG4gICAgICAnQHR5cGUnOiAnQnJlYWRjcnVtYkxpc3QnLFxuICAgICAgaXRlbUxpc3RFbGVtZW50OiBjcnVtYnMsXG4gICAgfTtcbiAgfVxufVxuIl19