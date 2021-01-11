import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { PageMetaService, PageRobotsMeta } from '@spartacus/core';
import { filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@spartacus/core";
export class SeoMetaService {
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
        if (value && value.length > 0) {
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
}
SeoMetaService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SeoMetaService_Factory() { return new SeoMetaService(i0.ɵɵinject(i1.Title), i0.ɵɵinject(i1.Meta), i0.ɵɵinject(i2.PageMetaService)); }, token: SeoMetaService, providedIn: "root" });
SeoMetaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
SeoMetaService.ctorParameters = () => [
    { type: Title },
    { type: Meta },
    { type: PageMetaService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VvLW1ldGEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1zdHJ1Y3R1cmUvc2VvL3Nlby1tZXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsSUFBSSxFQUFrQixLQUFLLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RSxPQUFPLEVBQVksZUFBZSxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTVFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUt4QyxNQUFNLE9BQU8sY0FBYztJQUN6QixZQUNZLE9BQWMsRUFDZCxNQUFZLEVBQ1osZUFBZ0M7UUFGaEMsWUFBTyxHQUFQLE9BQU8sQ0FBTztRQUNkLFdBQU0sR0FBTixNQUFNLENBQU07UUFDWixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFDekMsQ0FBQztJQUlKLElBQUk7UUFDRixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlO2FBQ3JDLE9BQU8sRUFBRTthQUNULElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDckIsU0FBUyxDQUFDLENBQUMsSUFBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsSUFBYyxJQUFJLENBQUMsSUFBYztRQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRUQsSUFBYyxLQUFLLENBQUMsS0FBYTtRQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELElBQWMsV0FBVyxDQUFDLEtBQWE7UUFDckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELElBQWMsS0FBSyxDQUFDLFFBQWdCO1FBQ2xDLElBQUksUUFBUSxFQUFFO1lBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDdEQ7SUFDSCxDQUFDO0lBRUQsSUFBYyxNQUFNLENBQUMsS0FBdUI7UUFDMUMsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzVEO0lBQ0gsQ0FBQztJQUVTLE1BQU0sQ0FBQyxJQUFvQjtRQUNuQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7OztZQXhERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQVA4QixLQUFLO1lBQTNCLElBQUk7WUFDTSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZXRhLCBNZXRhRGVmaW5pdGlvbiwgVGl0bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFBhZ2VNZXRhLCBQYWdlTWV0YVNlcnZpY2UsIFBhZ2VSb2JvdHNNZXRhIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU2VvTWV0YVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgbmdUaXRsZTogVGl0bGUsXG4gICAgcHJvdGVjdGVkIG5nTWV0YTogTWV0YSxcbiAgICBwcm90ZWN0ZWQgcGFnZU1ldGFTZXJ2aWNlOiBQYWdlTWV0YVNlcnZpY2VcbiAgKSB7fVxuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMucGFnZU1ldGFTZXJ2aWNlXG4gICAgICAuZ2V0TWV0YSgpXG4gICAgICAucGlwZShmaWx0ZXIoQm9vbGVhbikpXG4gICAgICAuc3Vic2NyaWJlKChtZXRhOiBQYWdlTWV0YSkgPT4gKHRoaXMubWV0YSA9IG1ldGEpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXQgbWV0YShtZXRhOiBQYWdlTWV0YSkge1xuICAgIHRoaXMudGl0bGUgPSBtZXRhLnRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBtZXRhLmRlc2NyaXB0aW9uO1xuICAgIHRoaXMuaW1hZ2UgPSBtZXRhLmltYWdlO1xuICAgIHRoaXMucm9ib3RzID0gbWV0YS5yb2JvdHMgfHwgW1BhZ2VSb2JvdHNNZXRhLklOREVYLCBQYWdlUm9ib3RzTWV0YS5GT0xMT1ddO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldCB0aXRsZSh0aXRsZTogc3RyaW5nKSB7XG4gICAgdGhpcy5uZ1RpdGxlLnNldFRpdGxlKHRpdGxlIHx8ICcnKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXQgZGVzY3JpcHRpb24odmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuYWRkVGFnKHsgbmFtZTogJ2Rlc2NyaXB0aW9uJywgY29udGVudDogdmFsdWUgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2V0IGltYWdlKGltYWdlVXJsOiBzdHJpbmcpIHtcbiAgICBpZiAoaW1hZ2VVcmwpIHtcbiAgICAgIHRoaXMuYWRkVGFnKHsgbmFtZTogJ29nOmltYWdlJywgY29udGVudDogaW1hZ2VVcmwgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHNldCByb2JvdHModmFsdWU6IFBhZ2VSb2JvdHNNZXRhW10pIHtcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5hZGRUYWcoeyBuYW1lOiAncm9ib3RzJywgY29udGVudDogdmFsdWUuam9pbignLCAnKSB9KTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgYWRkVGFnKG1ldGE6IE1ldGFEZWZpbml0aW9uKSB7XG4gICAgaWYgKG1ldGEuY29udGVudCkge1xuICAgICAgdGhpcy5uZ01ldGEudXBkYXRlVGFnKG1ldGEpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==