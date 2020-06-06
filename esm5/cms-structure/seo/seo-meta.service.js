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
        this.subscription = this.pageMetaService
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
    SeoMetaService.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VvLW1ldGEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvc2VvL3Nlby1tZXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDeEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDNUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBTXhDO0lBQ0Usd0JBQ1ksT0FBYyxFQUNkLE1BQVksRUFDWixlQUFnQztRQUZoQyxZQUFPLEdBQVAsT0FBTyxDQUFPO1FBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBTTtRQUNaLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUN6QyxDQUFDO0lBSUosNkJBQUksR0FBSjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZTthQUNyQyxPQUFPLEVBQUU7YUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3JCLFNBQVMsQ0FBQyxVQUFDLElBQWMsSUFBSyxPQUFBLENBQUMsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxzQkFBYyxnQ0FBSTthQUFsQixVQUFtQixJQUFjO1lBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDcEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdFLENBQUM7OztPQUFBO0lBRUQsc0JBQWMsaUNBQUs7YUFBbkIsVUFBb0IsS0FBYTtZQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUM7UUFDckMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBYyx1Q0FBVzthQUF6QixVQUEwQixLQUFhO1lBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELENBQUM7OztPQUFBO0lBRUQsc0JBQWMsaUNBQUs7YUFBbkIsVUFBb0IsUUFBZ0I7WUFDbEMsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7YUFDdEQ7UUFDSCxDQUFDOzs7T0FBQTtJQUVELHNCQUFjLGtDQUFNO2FBQXBCLFVBQXFCLEtBQXVCO1lBQzFDLElBQUksS0FBSyxFQUFFO2dCQUNULElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUM1RDtRQUNILENBQUM7OztPQUFBO0lBRVMsK0JBQU0sR0FBaEIsVUFBaUIsSUFBb0I7UUFDbkMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNqQztJQUNILENBQUM7O2dCQW5Eb0IsS0FBSztnQkFDTixJQUFJO2dCQUNLLGVBQWU7OztJQUpqQyxjQUFjO1FBSDFCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxjQUFjLENBc0QxQjt5QkEvREQ7Q0ErREMsQUF0REQsSUFzREM7U0F0RFksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWV0YSwgTWV0YURlZmluaXRpb24sIFRpdGxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBQYWdlTWV0YSwgUGFnZU1ldGFTZXJ2aWNlLCBQYWdlUm9ib3RzTWV0YSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFNlb01ldGFTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIG5nVGl0bGU6IFRpdGxlLFxuICAgIHByb3RlY3RlZCBuZ01ldGE6IE1ldGEsXG4gICAgcHJvdGVjdGVkIHBhZ2VNZXRhU2VydmljZTogUGFnZU1ldGFTZXJ2aWNlXG4gICkge31cblxuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnBhZ2VNZXRhU2VydmljZVxuICAgICAgLmdldE1ldGEoKVxuICAgICAgLnBpcGUoZmlsdGVyKEJvb2xlYW4pKVxuICAgICAgLnN1YnNjcmliZSgobWV0YTogUGFnZU1ldGEpID0+ICh0aGlzLm1ldGEgPSBtZXRhKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2V0IG1ldGEobWV0YTogUGFnZU1ldGEpIHtcbiAgICB0aGlzLnRpdGxlID0gbWV0YS50aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gbWV0YS5kZXNjcmlwdGlvbjtcbiAgICB0aGlzLmltYWdlID0gbWV0YS5pbWFnZTtcbiAgICB0aGlzLnJvYm90cyA9IG1ldGEucm9ib3RzIHx8IFtQYWdlUm9ib3RzTWV0YS5JTkRFWCwgUGFnZVJvYm90c01ldGEuRk9MTE9XXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXQgdGl0bGUodGl0bGU6IHN0cmluZykge1xuICAgIHRoaXMubmdUaXRsZS5zZXRUaXRsZSh0aXRsZSB8fCAnJyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2V0IGRlc2NyaXB0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmFkZFRhZyh7IG5hbWU6ICdkZXNjcmlwdGlvbicsIGNvbnRlbnQ6IHZhbHVlIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldCBpbWFnZShpbWFnZVVybDogc3RyaW5nKSB7XG4gICAgaWYgKGltYWdlVXJsKSB7XG4gICAgICB0aGlzLmFkZFRhZyh7IG5hbWU6ICdvZzppbWFnZScsIGNvbnRlbnQ6IGltYWdlVXJsIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBzZXQgcm9ib3RzKHZhbHVlOiBQYWdlUm9ib3RzTWV0YVtdKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLmFkZFRhZyh7IG5hbWU6ICdyb2JvdHMnLCBjb250ZW50OiB2YWx1ZS5qb2luKCcsICcpIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBhZGRUYWcobWV0YTogTWV0YURlZmluaXRpb24pIHtcbiAgICBpZiAobWV0YS5jb250ZW50KSB7XG4gICAgICB0aGlzLm5nTWV0YS51cGRhdGVUYWcobWV0YSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19