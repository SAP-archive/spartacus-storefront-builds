import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { PageMeta, PageMetaService, PageRobotsMeta } from '@spartacus/core';
import { filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@spartacus/core";
let SeoMetaService = class SeoMetaService {
    constructor(ngTitle, ngMeta, pageMetaService) {
        this.ngTitle = ngTitle;
        this.ngMeta = ngMeta;
        this.pageMetaService = pageMetaService;
    }
    init() {
        this.pageMetaService
            .getMeta()
            .pipe(filter(Boolean))
            .subscribe((meta) => (this.meta = meta));
    }
    set meta(meta) {
        this.title = meta.title;
        this.description = meta.description;
        this.image = meta.image;
        this.robots = meta.robots || [PageRobotsMeta.INDEX, PageRobotsMeta.FOLLOW];
    }
    set title(title) {
        this.ngTitle.setTitle(title || '');
    }
    set description(value) {
        this.addTag({ name: 'description', content: value });
    }
    set image(imageUrl) {
        if (imageUrl) {
            this.addTag({ name: 'og:image', content: imageUrl });
        }
    }
    set robots(value) {
        if (value) {
            this.addTag({ name: 'robots', content: value.join(', ') });
        }
    }
    addTag(meta) {
        if (meta.content) {
            this.ngMeta.updateTag(meta);
        }
    }
};
SeoMetaService.ctorParameters = () => [
    { type: Title },
    { type: Meta },
    { type: PageMetaService }
];
SeoMetaService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SeoMetaService_Factory() { return new SeoMetaService(i0.ɵɵinject(i1.Title), i0.ɵɵinject(i1.Meta), i0.ɵɵinject(i2.PageMetaService)); }, token: SeoMetaService, providedIn: "root" });
SeoMetaService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], SeoMetaService);
export { SeoMetaService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VvLW1ldGEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VvL3Nlby1tZXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDeEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDNUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBS3hDLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFDekIsWUFDWSxPQUFjLEVBQ2QsTUFBWSxFQUNaLGVBQWdDO1FBRmhDLFlBQU8sR0FBUCxPQUFPLENBQU87UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFNO1FBQ1osb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQ3pDLENBQUM7SUFFSixJQUFJO1FBQ0YsSUFBSSxDQUFDLGVBQWU7YUFDakIsT0FBTyxFQUFFO2FBQ1QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNyQixTQUFTLENBQUMsQ0FBQyxJQUFjLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxJQUFjLElBQUksQ0FBQyxJQUFjO1FBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDcEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFRCxJQUFjLEtBQUssQ0FBQyxLQUFhO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsSUFBYyxXQUFXLENBQUMsS0FBYTtRQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsSUFBYyxLQUFLLENBQUMsUUFBZ0I7UUFDbEMsSUFBSSxRQUFRLEVBQUU7WUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUN0RDtJQUNILENBQUM7SUFFRCxJQUFjLE1BQU0sQ0FBQyxLQUF1QjtRQUMxQyxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUM1RDtJQUNILENBQUM7SUFFUyxNQUFNLENBQUMsSUFBb0I7UUFDbkMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztDQUNGLENBQUE7O1lBNUNzQixLQUFLO1lBQ04sSUFBSTtZQUNLLGVBQWU7OztBQUpqQyxjQUFjO0lBSDFCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxjQUFjLENBOEMxQjtTQTlDWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWV0YSwgTWV0YURlZmluaXRpb24sIFRpdGxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBQYWdlTWV0YSwgUGFnZU1ldGFTZXJ2aWNlLCBQYWdlUm9ib3RzTWV0YSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTZW9NZXRhU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBuZ1RpdGxlOiBUaXRsZSxcbiAgICBwcm90ZWN0ZWQgbmdNZXRhOiBNZXRhLFxuICAgIHByb3RlY3RlZCBwYWdlTWV0YVNlcnZpY2U6IFBhZ2VNZXRhU2VydmljZVxuICApIHt9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLnBhZ2VNZXRhU2VydmljZVxuICAgICAgLmdldE1ldGEoKVxuICAgICAgLnBpcGUoZmlsdGVyKEJvb2xlYW4pKVxuICAgICAgLnN1YnNjcmliZSgobWV0YTogUGFnZU1ldGEpID0+ICh0aGlzLm1ldGEgPSBtZXRhKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2V0IG1ldGEobWV0YTogUGFnZU1ldGEpIHtcbiAgICB0aGlzLnRpdGxlID0gbWV0YS50aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gbWV0YS5kZXNjcmlwdGlvbjtcbiAgICB0aGlzLmltYWdlID0gbWV0YS5pbWFnZTtcbiAgICB0aGlzLnJvYm90cyA9IG1ldGEucm9ib3RzIHx8IFtQYWdlUm9ib3RzTWV0YS5JTkRFWCwgUGFnZVJvYm90c01ldGEuRk9MTE9XXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXQgdGl0bGUodGl0bGU6IHN0cmluZykge1xuICAgIHRoaXMubmdUaXRsZS5zZXRUaXRsZSh0aXRsZSB8fCAnJyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2V0IGRlc2NyaXB0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmFkZFRhZyh7IG5hbWU6ICdkZXNjcmlwdGlvbicsIGNvbnRlbnQ6IHZhbHVlIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldCBpbWFnZShpbWFnZVVybDogc3RyaW5nKSB7XG4gICAgaWYgKGltYWdlVXJsKSB7XG4gICAgICB0aGlzLmFkZFRhZyh7IG5hbWU6ICdvZzppbWFnZScsIGNvbnRlbnQ6IGltYWdlVXJsIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBzZXQgcm9ib3RzKHZhbHVlOiBQYWdlUm9ib3RzTWV0YVtdKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLmFkZFRhZyh7IG5hbWU6ICdyb2JvdHMnLCBjb250ZW50OiB2YWx1ZS5qb2luKCcsICcpIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBhZGRUYWcobWV0YTogTWV0YURlZmluaXRpb24pIHtcbiAgICBpZiAobWV0YS5jb250ZW50KSB7XG4gICAgICB0aGlzLm5nTWV0YS51cGRhdGVUYWcobWV0YSk7XG4gICAgfVxuICB9XG59XG4iXX0=