import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CmsBreadcrumbsComponent, PageMeta, PageMetaService, TranslationService, } from '@spartacus/core';
import { asyncScheduler, combineLatest } from 'rxjs';
import { filter, map, observeOn } from 'rxjs/operators';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
let BreadcrumbComponent = class BreadcrumbComponent {
    constructor(component, pageMetaService, translation) {
        this.component = component;
        this.pageMetaService = pageMetaService;
        this.translation = translation;
    }
    ngOnInit() {
        this.setTitle();
        this.setCrumbs();
    }
    setTitle() {
        this.title$ = this.pageMetaService.getMeta().pipe(filter(Boolean), map((meta) => meta.heading || meta.title));
    }
    setCrumbs() {
        this.crumbs$ = combineLatest([
            this.pageMetaService.getMeta(),
            this.translation.translate('common.home').pipe(observeOn(asyncScheduler)),
        ]).pipe(map(([meta, textHome]) => { var _a; return ((_a = meta) === null || _a === void 0 ? void 0 : _a.breadcrumbs) ? meta.breadcrumbs : [{ label: textHome, link: '/' }]; }));
    }
};
BreadcrumbComponent.ctorParameters = () => [
    { type: CmsComponentData },
    { type: PageMetaService },
    { type: TranslationService }
];
BreadcrumbComponent = __decorate([
    Component({
        selector: 'cx-breadcrumb',
        template: "<nav>\n  <span *ngFor=\"let crumb of crumbs$ | async\">\n    <a [routerLink]=\"crumb.link\" [innerHTML]=\"crumb.label\"></a>\n  </span>\n</nav>\n<h1>{{ title$ | async }}</h1>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], BreadcrumbComponent);
export { BreadcrumbComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixRQUFRLEVBQ1IsZUFBZSxFQUNmLGtCQUFrQixHQUNuQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBT3hGLElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBSTlCLFlBQ1MsU0FBb0QsRUFDakQsZUFBZ0MsRUFDbEMsV0FBK0I7UUFGaEMsY0FBUyxHQUFULFNBQVMsQ0FBMkM7UUFDakQsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2xDLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtJQUN0QyxDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVPLFFBQVE7UUFDZCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUMvQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2YsR0FBRyxDQUFDLENBQUMsSUFBYyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FDcEQsQ0FBQztJQUNKLENBQUM7SUFFTyxTQUFTO1FBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUM7WUFDM0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUMxRSxDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFFLEVBQUUsV0FDdkIsT0FBQSxPQUFBLElBQUksMENBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQSxFQUFBLENBQ3hFLENBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBOztZQTNCcUIsZ0JBQWdCO1lBQ1AsZUFBZTtZQUNyQixrQkFBa0I7O0FBUDlCLG1CQUFtQjtJQUwvQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZUFBZTtRQUN6Qiw0TEFBMEM7UUFDMUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztHQUNXLG1CQUFtQixDQWdDL0I7U0FoQ1ksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDbXNCcmVhZGNydW1ic0NvbXBvbmVudCxcbiAgUGFnZU1ldGEsXG4gIFBhZ2VNZXRhU2VydmljZSxcbiAgVHJhbnNsYXRpb25TZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgYXN5bmNTY2hlZHVsZXIsIGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBvYnNlcnZlT24gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWJyZWFkY3J1bWInLFxuICB0ZW1wbGF0ZVVybDogJy4vYnJlYWRjcnVtYi5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1iQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdGl0bGUkOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIGNydW1icyQ6IE9ic2VydmFibGU8YW55W10+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjb21wb25lbnQ6IENtc0NvbXBvbmVudERhdGE8Q21zQnJlYWRjcnVtYnNDb21wb25lbnQ+LFxuICAgIHByb3RlY3RlZCBwYWdlTWV0YVNlcnZpY2U6IFBhZ2VNZXRhU2VydmljZSxcbiAgICBwcml2YXRlIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0VGl0bGUoKTtcbiAgICB0aGlzLnNldENydW1icygpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRUaXRsZSgpOiB2b2lkIHtcbiAgICB0aGlzLnRpdGxlJCA9IHRoaXMucGFnZU1ldGFTZXJ2aWNlLmdldE1ldGEoKS5waXBlKFxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgbWFwKChtZXRhOiBQYWdlTWV0YSkgPT4gbWV0YS5oZWFkaW5nIHx8IG1ldGEudGl0bGUpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q3J1bWJzKCk6IHZvaWQge1xuICAgIHRoaXMuY3J1bWJzJCA9IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5wYWdlTWV0YVNlcnZpY2UuZ2V0TWV0YSgpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NvbW1vbi5ob21lJykucGlwZShvYnNlcnZlT24oYXN5bmNTY2hlZHVsZXIpKSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKChbbWV0YSwgdGV4dEhvbWVdKSA9PlxuICAgICAgICBtZXRhPy5icmVhZGNydW1icyA/IG1ldGEuYnJlYWRjcnVtYnMgOiBbeyBsYWJlbDogdGV4dEhvbWUsIGxpbms6ICcvJyB9XVxuICAgICAgKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==