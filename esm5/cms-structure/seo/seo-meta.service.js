import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { PageMeta, PageMetaService, PageRobotsMeta } from '@spartacus/core';
import { filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@spartacus/core";
var SeoMetaService = /** @class */ (function () {
    function SeoMetaService(ngTitle, ngMeta, pageMetaService) {
        this.ngTitle = ngTitle;
        this.ngMeta = ngMeta;
        this.pageMetaService = pageMetaService;
    }
    SeoMetaService.prototype.init = function () {
        var _this = this;
        this.pageMetaService
            .getMeta()
            .pipe(filter(Boolean))
            .subscribe(function (meta) { return (_this.meta = meta); });
    };
    Object.defineProperty(SeoMetaService.prototype, "meta", {
        set: function (meta) {
            this.title = meta.title;
            this.description = meta.description;
            this.image = meta.image;
            this.robots = meta.robots || [PageRobotsMeta.INDEX, PageRobotsMeta.FOLLOW];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeoMetaService.prototype, "title", {
        set: function (title) {
            this.ngTitle.setTitle(title || '');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeoMetaService.prototype, "description", {
        set: function (value) {
            this.addTag({ name: 'description', content: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeoMetaService.prototype, "image", {
        set: function (imageUrl) {
            if (imageUrl) {
                this.addTag({ name: 'og:image', content: imageUrl });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeoMetaService.prototype, "robots", {
        set: function (value) {
            if (value) {
                this.addTag({ name: 'robots', content: value.join(', ') });
            }
        },
        enumerable: true,
        configurable: true
    });
    SeoMetaService.prototype.addTag = function (meta) {
        if (meta.content) {
            this.ngMeta.updateTag(meta);
        }
    };
    SeoMetaService.ctorParameters = function () { return [
        { type: Title },
        { type: Meta },
        { type: PageMetaService }
    ]; };
    SeoMetaService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SeoMetaService_Factory() { return new SeoMetaService(i0.ɵɵinject(i1.Title), i0.ɵɵinject(i1.Meta), i0.ɵɵinject(i2.PageMetaService)); }, token: SeoMetaService, providedIn: "root" });
    SeoMetaService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], SeoMetaService);
    return SeoMetaService;
}());
export { SeoMetaService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VvLW1ldGEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VvL3Nlby1tZXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDeEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDNUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBS3hDO0lBQ0Usd0JBQ1ksT0FBYyxFQUNkLE1BQVksRUFDWixlQUFnQztRQUZoQyxZQUFPLEdBQVAsT0FBTyxDQUFPO1FBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBTTtRQUNaLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUN6QyxDQUFDO0lBRUosNkJBQUksR0FBSjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLGVBQWU7YUFDakIsT0FBTyxFQUFFO2FBQ1QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNyQixTQUFTLENBQUMsVUFBQyxJQUFjLElBQUssT0FBQSxDQUFDLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsc0JBQWMsZ0NBQUk7YUFBbEIsVUFBbUIsSUFBYztZQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3RSxDQUFDOzs7T0FBQTtJQUVELHNCQUFjLGlDQUFLO2FBQW5CLFVBQW9CLEtBQWE7WUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7OztPQUFBO0lBRUQsc0JBQWMsdUNBQVc7YUFBekIsVUFBMEIsS0FBYTtZQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUN2RCxDQUFDOzs7T0FBQTtJQUVELHNCQUFjLGlDQUFLO2FBQW5CLFVBQW9CLFFBQWdCO1lBQ2xDLElBQUksUUFBUSxFQUFFO2dCQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO2FBQ3REO1FBQ0gsQ0FBQzs7O09BQUE7SUFFRCxzQkFBYyxrQ0FBTTthQUFwQixVQUFxQixLQUF1QjtZQUMxQyxJQUFJLEtBQUssRUFBRTtnQkFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDNUQ7UUFDSCxDQUFDOzs7T0FBQTtJQUVTLCtCQUFNLEdBQWhCLFVBQWlCLElBQW9CO1FBQ25DLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM3QjtJQUNILENBQUM7O2dCQTNDb0IsS0FBSztnQkFDTixJQUFJO2dCQUNLLGVBQWU7OztJQUpqQyxjQUFjO1FBSDFCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxjQUFjLENBOEMxQjt5QkF0REQ7Q0FzREMsQUE5Q0QsSUE4Q0M7U0E5Q1ksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1ldGEsIE1ldGFEZWZpbml0aW9uLCBUaXRsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgUGFnZU1ldGEsIFBhZ2VNZXRhU2VydmljZSwgUGFnZVJvYm90c01ldGEgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU2VvTWV0YVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgbmdUaXRsZTogVGl0bGUsXG4gICAgcHJvdGVjdGVkIG5nTWV0YTogTWV0YSxcbiAgICBwcm90ZWN0ZWQgcGFnZU1ldGFTZXJ2aWNlOiBQYWdlTWV0YVNlcnZpY2VcbiAgKSB7fVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5wYWdlTWV0YVNlcnZpY2VcbiAgICAgIC5nZXRNZXRhKClcbiAgICAgIC5waXBlKGZpbHRlcihCb29sZWFuKSlcbiAgICAgIC5zdWJzY3JpYmUoKG1ldGE6IFBhZ2VNZXRhKSA9PiAodGhpcy5tZXRhID0gbWV0YSkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldCBtZXRhKG1ldGE6IFBhZ2VNZXRhKSB7XG4gICAgdGhpcy50aXRsZSA9IG1ldGEudGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IG1ldGEuZGVzY3JpcHRpb247XG4gICAgdGhpcy5pbWFnZSA9IG1ldGEuaW1hZ2U7XG4gICAgdGhpcy5yb2JvdHMgPSBtZXRhLnJvYm90cyB8fCBbUGFnZVJvYm90c01ldGEuSU5ERVgsIFBhZ2VSb2JvdHNNZXRhLkZPTExPV107XG4gIH1cblxuICBwcm90ZWN0ZWQgc2V0IHRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcbiAgICB0aGlzLm5nVGl0bGUuc2V0VGl0bGUodGl0bGUgfHwgJycpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldCBkZXNjcmlwdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5hZGRUYWcoeyBuYW1lOiAnZGVzY3JpcHRpb24nLCBjb250ZW50OiB2YWx1ZSB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXQgaW1hZ2UoaW1hZ2VVcmw6IHN0cmluZykge1xuICAgIGlmIChpbWFnZVVybCkge1xuICAgICAgdGhpcy5hZGRUYWcoeyBuYW1lOiAnb2c6aW1hZ2UnLCBjb250ZW50OiBpbWFnZVVybCB9KTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgc2V0IHJvYm90cyh2YWx1ZTogUGFnZVJvYm90c01ldGFbXSkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5hZGRUYWcoeyBuYW1lOiAncm9ib3RzJywgY29udGVudDogdmFsdWUuam9pbignLCAnKSB9KTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgYWRkVGFnKG1ldGE6IE1ldGFEZWZpbml0aW9uKSB7XG4gICAgaWYgKG1ldGEuY29udGVudCkge1xuICAgICAgdGhpcy5uZ01ldGEudXBkYXRlVGFnKG1ldGEpO1xuICAgIH1cbiAgfVxufVxuIl19