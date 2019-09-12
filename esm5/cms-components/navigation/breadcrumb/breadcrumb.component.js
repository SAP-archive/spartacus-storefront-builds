/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageMetaService, TranslationService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(component, pageMetaService, translation) {
        this.component = component;
        this.pageMetaService = pageMetaService;
        this.translation = translation;
    }
    /**
     * @return {?}
     */
    BreadcrumbComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setTitle();
        this.setCrumbs();
    };
    /**
     * @private
     * @return {?}
     */
    BreadcrumbComponent.prototype.setTitle = /**
     * @private
     * @return {?}
     */
    function () {
        this.title$ = this.pageMetaService.getMeta().pipe(filter(Boolean), map((/**
         * @param {?} meta
         * @return {?}
         */
        function (meta) { return meta.heading || meta.title; })));
    };
    /**
     * @private
     * @return {?}
     */
    BreadcrumbComponent.prototype.setCrumbs = /**
     * @private
     * @return {?}
     */
    function () {
        this.crumbs$ = combineLatest([
            this.pageMetaService.getMeta(),
            this.translation.translate('common.home'),
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), meta = _b[0], textHome = _b[1];
            return meta && meta.breadcrumbs
                ? meta.breadcrumbs
                : [{ label: textHome, link: '/' }];
        })));
    };
    BreadcrumbComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-breadcrumb',
                    template: "<nav>\n  <span *ngFor=\"let crumb of crumbs$ | async\">\n    <a [routerLink]=\"crumb.link\" [innerHTML]=\"crumb.label\"></a>\n  </span>\n</nav>\n<h1>{{ title$ | async }}</h1>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    BreadcrumbComponent.ctorParameters = function () { return [
        { type: CmsComponentData },
        { type: PageMetaService },
        { type: TranslationService }
    ]; };
    return BreadcrumbComponent;
}());
export { BreadcrumbComponent };
if (false) {
    /** @type {?} */
    BreadcrumbComponent.prototype.title$;
    /** @type {?} */
    BreadcrumbComponent.prototype.crumbs$;
    /** @type {?} */
    BreadcrumbComponent.prototype.component;
    /**
     * @type {?}
     * @protected
     */
    BreadcrumbComponent.prototype.pageMetaService;
    /**
     * @type {?}
     * @private
     */
    BreadcrumbComponent.prototype.translation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFHTCxlQUFlLEVBQ2Ysa0JBQWtCLEdBQ25CLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRXhGO0lBU0UsNkJBQ1MsU0FBb0QsRUFDakQsZUFBZ0MsRUFDbEMsV0FBK0I7UUFGaEMsY0FBUyxHQUFULFNBQVMsQ0FBMkM7UUFDakQsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2xDLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtJQUN0QyxDQUFDOzs7O0lBRUosc0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVPLHNDQUFROzs7O0lBQWhCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FDL0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLEdBQUc7Ozs7UUFBQyxVQUFDLElBQWMsSUFBSyxPQUFBLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLEtBQUssRUFBMUIsQ0FBMEIsRUFBQyxDQUNwRCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFTyx1Q0FBUzs7OztJQUFqQjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDO1lBQzNCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFO1lBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztTQUMxQyxDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUc7Ozs7UUFBQyxVQUFDLEVBQWdCO2dCQUFoQiwwQkFBZ0IsRUFBZixZQUFJLEVBQUUsZ0JBQVE7WUFDbEIsT0FBQSxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVc7Z0JBQ3RCLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVztnQkFDbEIsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUZwQyxDQUVvQyxFQUNyQyxDQUNGLENBQUM7SUFDSixDQUFDOztnQkF0Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6Qiw0TEFBMEM7b0JBQzFDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFOUSxnQkFBZ0I7Z0JBTHZCLGVBQWU7Z0JBQ2Ysa0JBQWtCOztJQTZDcEIsMEJBQUM7Q0FBQSxBQXZDRCxJQXVDQztTQWxDWSxtQkFBbUI7OztJQUM5QixxQ0FBMkI7O0lBQzNCLHNDQUEyQjs7SUFHekIsd0NBQTJEOzs7OztJQUMzRCw4Q0FBMEM7Ozs7O0lBQzFDLDBDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ21zQnJlYWRjcnVtYnNDb21wb25lbnQsXG4gIFBhZ2VNZXRhLFxuICBQYWdlTWV0YVNlcnZpY2UsXG4gIFRyYW5zbGF0aW9uU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9jbXMtY29tcG9uZW50LWRhdGEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1icmVhZGNydW1iJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JyZWFkY3J1bWIuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHRpdGxlJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICBjcnVtYnMkOiBPYnNlcnZhYmxlPGFueVtdPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY29tcG9uZW50OiBDbXNDb21wb25lbnREYXRhPENtc0JyZWFkY3J1bWJzQ29tcG9uZW50PixcbiAgICBwcm90ZWN0ZWQgcGFnZU1ldGFTZXJ2aWNlOiBQYWdlTWV0YVNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldFRpdGxlKCk7XG4gICAgdGhpcy5zZXRDcnVtYnMoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0VGl0bGUoKTogdm9pZCB7XG4gICAgdGhpcy50aXRsZSQgPSB0aGlzLnBhZ2VNZXRhU2VydmljZS5nZXRNZXRhKCkucGlwZShcbiAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgIG1hcCgobWV0YTogUGFnZU1ldGEpID0+IG1ldGEuaGVhZGluZyB8fCBtZXRhLnRpdGxlKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHNldENydW1icygpOiB2b2lkIHtcbiAgICB0aGlzLmNydW1icyQgPSBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMucGFnZU1ldGFTZXJ2aWNlLmdldE1ldGEoKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdjb21tb24uaG9tZScpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFttZXRhLCB0ZXh0SG9tZV0pID0+XG4gICAgICAgIG1ldGEgJiYgbWV0YS5icmVhZGNydW1ic1xuICAgICAgICAgID8gbWV0YS5icmVhZGNydW1ic1xuICAgICAgICAgIDogW3sgbGFiZWw6IHRleHRIb21lLCBsaW5rOiAnLycgfV1cbiAgICAgIClcbiAgICApO1xuICB9XG59XG4iXX0=