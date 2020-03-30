import { __decorate, __read } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CmsBreadcrumbsComponent, PageMeta, PageMetaService, TranslationService, } from '@spartacus/core';
import { asyncScheduler, combineLatest } from 'rxjs';
import { filter, map, observeOn } from 'rxjs/operators';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(component, pageMetaService, translation) {
        this.component = component;
        this.pageMetaService = pageMetaService;
        this.translation = translation;
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
        this.setTitle();
        this.setCrumbs();
    };
    BreadcrumbComponent.prototype.setTitle = function () {
        this.title$ = this.pageMetaService.getMeta().pipe(filter(Boolean), map(function (meta) { return meta.heading || meta.title; }));
    };
    BreadcrumbComponent.prototype.setCrumbs = function () {
        this.crumbs$ = combineLatest([
            this.pageMetaService.getMeta(),
            this.translation.translate('common.home').pipe(observeOn(asyncScheduler)),
        ]).pipe(map(function (_a) {
            var _b = __read(_a, 2), meta = _b[0], textHome = _b[1];
            return (meta === null || meta === void 0 ? void 0 : meta.breadcrumbs) ? meta.breadcrumbs : [{ label: textHome, link: '/' }];
        }));
    };
    BreadcrumbComponent.ctorParameters = function () { return [
        { type: CmsComponentData },
        { type: PageMetaService },
        { type: TranslationService }
    ]; };
    BreadcrumbComponent = __decorate([
        Component({
            selector: 'cx-breadcrumb',
            template: "<nav>\n  <span *ngFor=\"let crumb of crumbs$ | async\">\n    <a [routerLink]=\"crumb.link\" [innerHTML]=\"crumb.label\"></a>\n  </span>\n</nav>\n<h1>{{ title$ | async }}</h1>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());
export { BreadcrumbComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixRQUFRLEVBQ1IsZUFBZSxFQUNmLGtCQUFrQixHQUNuQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBT3hGO0lBSUUsNkJBQ1MsU0FBb0QsRUFDakQsZUFBZ0MsRUFDbEMsV0FBK0I7UUFGaEMsY0FBUyxHQUFULFNBQVMsQ0FBMkM7UUFDakQsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2xDLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtJQUN0QyxDQUFDO0lBRUosc0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVPLHNDQUFRLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FDL0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLEdBQUcsQ0FBQyxVQUFDLElBQWMsSUFBSyxPQUFBLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLEtBQUssRUFBMUIsQ0FBMEIsQ0FBQyxDQUNwRCxDQUFDO0lBQ0osQ0FBQztJQUVPLHVDQUFTLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUM7WUFDM0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUMxRSxDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUcsQ0FBQyxVQUFDLEVBQWdCO2dCQUFoQixrQkFBZ0IsRUFBZixZQUFJLEVBQUUsZ0JBQVE7WUFDbEIsT0FBQSxDQUFBLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxXQUFXLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUF2RSxDQUF1RSxDQUN4RSxDQUNGLENBQUM7SUFDSixDQUFDOztnQkExQm1CLGdCQUFnQjtnQkFDUCxlQUFlO2dCQUNyQixrQkFBa0I7O0lBUDlCLG1CQUFtQjtRQUwvQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6Qiw0TEFBMEM7WUFDMUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07U0FDaEQsQ0FBQztPQUNXLG1CQUFtQixDQWdDL0I7SUFBRCwwQkFBQztDQUFBLEFBaENELElBZ0NDO1NBaENZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ21zQnJlYWRjcnVtYnNDb21wb25lbnQsXG4gIFBhZ2VNZXRhLFxuICBQYWdlTWV0YVNlcnZpY2UsXG4gIFRyYW5zbGF0aW9uU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGFzeW5jU2NoZWR1bGVyLCBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgb2JzZXJ2ZU9uIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9jbXMtY29tcG9uZW50LWRhdGEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1icmVhZGNydW1iJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JyZWFkY3J1bWIuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHRpdGxlJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICBjcnVtYnMkOiBPYnNlcnZhYmxlPGFueVtdPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY29tcG9uZW50OiBDbXNDb21wb25lbnREYXRhPENtc0JyZWFkY3J1bWJzQ29tcG9uZW50PixcbiAgICBwcm90ZWN0ZWQgcGFnZU1ldGFTZXJ2aWNlOiBQYWdlTWV0YVNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldFRpdGxlKCk7XG4gICAgdGhpcy5zZXRDcnVtYnMoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0VGl0bGUoKTogdm9pZCB7XG4gICAgdGhpcy50aXRsZSQgPSB0aGlzLnBhZ2VNZXRhU2VydmljZS5nZXRNZXRhKCkucGlwZShcbiAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgIG1hcCgobWV0YTogUGFnZU1ldGEpID0+IG1ldGEuaGVhZGluZyB8fCBtZXRhLnRpdGxlKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHNldENydW1icygpOiB2b2lkIHtcbiAgICB0aGlzLmNydW1icyQgPSBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMucGFnZU1ldGFTZXJ2aWNlLmdldE1ldGEoKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdjb21tb24uaG9tZScpLnBpcGUob2JzZXJ2ZU9uKGFzeW5jU2NoZWR1bGVyKSksXG4gICAgXSkucGlwZShcbiAgICAgIG1hcCgoW21ldGEsIHRleHRIb21lXSkgPT5cbiAgICAgICAgbWV0YT8uYnJlYWRjcnVtYnMgPyBtZXRhLmJyZWFkY3J1bWJzIDogW3sgbGFiZWw6IHRleHRIb21lLCBsaW5rOiAnLycgfV1cbiAgICAgIClcbiAgICApO1xuICB9XG59XG4iXX0=