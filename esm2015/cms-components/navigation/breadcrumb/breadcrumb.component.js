/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageMetaService, TranslationService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
export class BreadcrumbComponent {
    /**
     * @param {?} component
     * @param {?} pageMetaService
     * @param {?} translation
     */
    constructor(component, pageMetaService, translation) {
        this.component = component;
        this.pageMetaService = pageMetaService;
        this.translation = translation;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setTitle();
        this.setCrumbs();
    }
    /**
     * @private
     * @return {?}
     */
    setTitle() {
        this.title$ = this.pageMetaService.getMeta().pipe(filter(Boolean), map((/**
         * @param {?} meta
         * @return {?}
         */
        (meta) => meta.heading || meta.title)));
    }
    /**
     * @private
     * @return {?}
     */
    setCrumbs() {
        this.crumbs$ = combineLatest(this.pageMetaService.getMeta(), this.translation.translate('common.home')).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([meta, textHome]) => meta && meta.breadcrumbs
            ? meta.breadcrumbs
            : [{ label: textHome, link: '/' }])));
    }
}
BreadcrumbComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-breadcrumb',
                template: "<nav>\n  <span *ngFor=\"let crumb of (crumbs$ | async)\">\n    <a [routerLink]=\"crumb.link\" [innerHTML]=\"crumb.label\"></a>\n  </span>\n</nav>\n<h1>{{ title$ | async }}</h1>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
BreadcrumbComponent.ctorParameters = () => [
    { type: CmsComponentData },
    { type: PageMetaService },
    { type: TranslationService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUdMLGVBQWUsRUFDZixrQkFBa0IsR0FDbkIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFPeEYsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7O0lBSTlCLFlBQ1MsU0FBb0QsRUFDakQsZUFBZ0MsRUFDbEMsV0FBK0I7UUFGaEMsY0FBUyxHQUFULFNBQVMsQ0FBMkM7UUFDakQsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2xDLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtJQUN0QyxDQUFDOzs7O0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFTyxRQUFRO1FBQ2QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FDL0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLEdBQUc7Ozs7UUFBQyxDQUFDLElBQWMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFDLENBQ3BELENBQUM7SUFDSixDQUFDOzs7OztJQUVPLFNBQVM7UUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FDMUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsRUFDOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQzFDLENBQUMsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FDdkIsSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXO1lBQ3RCLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVztZQUNsQixDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQ3JDLENBQ0YsQ0FBQztJQUNKLENBQUM7OztZQXRDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLDhMQUEwQztnQkFDMUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFOUSxnQkFBZ0I7WUFMdkIsZUFBZTtZQUNmLGtCQUFrQjs7OztJQVlsQixxQ0FBMkI7O0lBQzNCLHNDQUEyQjs7SUFHekIsd0NBQTJEOzs7OztJQUMzRCw4Q0FBMEM7Ozs7O0lBQzFDLDBDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ21zQnJlYWRjcnVtYnNDb21wb25lbnQsXG4gIFBhZ2VNZXRhLFxuICBQYWdlTWV0YVNlcnZpY2UsXG4gIFRyYW5zbGF0aW9uU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9jbXMtY29tcG9uZW50LWRhdGEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1icmVhZGNydW1iJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JyZWFkY3J1bWIuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHRpdGxlJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICBjcnVtYnMkOiBPYnNlcnZhYmxlPGFueVtdPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY29tcG9uZW50OiBDbXNDb21wb25lbnREYXRhPENtc0JyZWFkY3J1bWJzQ29tcG9uZW50PixcbiAgICBwcm90ZWN0ZWQgcGFnZU1ldGFTZXJ2aWNlOiBQYWdlTWV0YVNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldFRpdGxlKCk7XG4gICAgdGhpcy5zZXRDcnVtYnMoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0VGl0bGUoKTogdm9pZCB7XG4gICAgdGhpcy50aXRsZSQgPSB0aGlzLnBhZ2VNZXRhU2VydmljZS5nZXRNZXRhKCkucGlwZShcbiAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgIG1hcCgobWV0YTogUGFnZU1ldGEpID0+IG1ldGEuaGVhZGluZyB8fCBtZXRhLnRpdGxlKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHNldENydW1icygpOiB2b2lkIHtcbiAgICB0aGlzLmNydW1icyQgPSBjb21iaW5lTGF0ZXN0KFxuICAgICAgdGhpcy5wYWdlTWV0YVNlcnZpY2UuZ2V0TWV0YSgpLFxuICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NvbW1vbi5ob21lJylcbiAgICApLnBpcGUoXG4gICAgICBtYXAoKFttZXRhLCB0ZXh0SG9tZV0pID0+XG4gICAgICAgIG1ldGEgJiYgbWV0YS5icmVhZGNydW1ic1xuICAgICAgICAgID8gbWV0YS5icmVhZGNydW1ic1xuICAgICAgICAgIDogW3sgbGFiZWw6IHRleHRIb21lLCBsaW5rOiAnLycgfV1cbiAgICAgIClcbiAgICApO1xuICB9XG59XG4iXX0=