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
        this.subscription = this.pageMetaService
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
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VvLW1ldGEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VvL3Nlby1tZXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDeEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDNUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBTXhDLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFDekIsWUFDWSxPQUFjLEVBQ2QsTUFBWSxFQUNaLGVBQWdDO1FBRmhDLFlBQU8sR0FBUCxPQUFPLENBQU87UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFNO1FBQ1osb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQ3pDLENBQUM7SUFJSixJQUFJO1FBQ0YsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZTthQUNyQyxPQUFPLEVBQUU7YUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3JCLFNBQVMsQ0FBQyxDQUFDLElBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELElBQWMsSUFBSSxDQUFDLElBQWM7UUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVELElBQWMsS0FBSyxDQUFDLEtBQWE7UUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxJQUFjLFdBQVcsQ0FBQyxLQUFhO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxJQUFjLEtBQUssQ0FBQyxRQUFnQjtRQUNsQyxJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQ3REO0lBQ0gsQ0FBQztJQUVELElBQWMsTUFBTSxDQUFDLEtBQXVCO1FBQzFDLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzVEO0lBQ0gsQ0FBQztJQUVTLE1BQU0sQ0FBQyxJQUFvQjtRQUNuQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQztDQUNGLENBQUE7O1lBcERzQixLQUFLO1lBQ04sSUFBSTtZQUNLLGVBQWU7OztBQUpqQyxjQUFjO0lBSDFCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxjQUFjLENBc0QxQjtTQXREWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZXRhLCBNZXRhRGVmaW5pdGlvbiwgVGl0bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFBhZ2VNZXRhLCBQYWdlTWV0YVNlcnZpY2UsIFBhZ2VSb2JvdHNNZXRhIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU2VvTWV0YVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgbmdUaXRsZTogVGl0bGUsXG4gICAgcHJvdGVjdGVkIG5nTWV0YTogTWV0YSxcbiAgICBwcm90ZWN0ZWQgcGFnZU1ldGFTZXJ2aWNlOiBQYWdlTWV0YVNlcnZpY2VcbiAgKSB7fVxuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMucGFnZU1ldGFTZXJ2aWNlXG4gICAgICAuZ2V0TWV0YSgpXG4gICAgICAucGlwZShmaWx0ZXIoQm9vbGVhbikpXG4gICAgICAuc3Vic2NyaWJlKChtZXRhOiBQYWdlTWV0YSkgPT4gKHRoaXMubWV0YSA9IG1ldGEpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXQgbWV0YShtZXRhOiBQYWdlTWV0YSkge1xuICAgIHRoaXMudGl0bGUgPSBtZXRhLnRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBtZXRhLmRlc2NyaXB0aW9uO1xuICAgIHRoaXMuaW1hZ2UgPSBtZXRhLmltYWdlO1xuICAgIHRoaXMucm9ib3RzID0gbWV0YS5yb2JvdHMgfHwgW1BhZ2VSb2JvdHNNZXRhLklOREVYLCBQYWdlUm9ib3RzTWV0YS5GT0xMT1ddO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldCB0aXRsZSh0aXRsZTogc3RyaW5nKSB7XG4gICAgdGhpcy5uZ1RpdGxlLnNldFRpdGxlKHRpdGxlIHx8ICcnKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXQgZGVzY3JpcHRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuYWRkVGFnKHsgbmFtZTogJ2Rlc2NyaXB0aW9uJywgY29udGVudDogdmFsdWUgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2V0IGltYWdlKGltYWdlVXJsOiBzdHJpbmcpIHtcbiAgICBpZiAoaW1hZ2VVcmwpIHtcbiAgICAgIHRoaXMuYWRkVGFnKHsgbmFtZTogJ29nOmltYWdlJywgY29udGVudDogaW1hZ2VVcmwgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHNldCByb2JvdHModmFsdWU6IFBhZ2VSb2JvdHNNZXRhW10pIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuYWRkVGFnKHsgbmFtZTogJ3JvYm90cycsIGNvbnRlbnQ6IHZhbHVlLmpvaW4oJywgJykgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGFkZFRhZyhtZXRhOiBNZXRhRGVmaW5pdGlvbikge1xuICAgIGlmIChtZXRhLmNvbnRlbnQpIHtcbiAgICAgIHRoaXMubmdNZXRhLnVwZGF0ZVRhZyhtZXRhKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=