/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Optional, Injector } from '@angular/core';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
import { ContextServiceMap, CURRENCY_CONTEXT_ID, LANGUAGE_CONTEXT_ID, } from '@spartacus/core';
import { of } from 'rxjs';
import { map, filter, switchMap, take } from 'rxjs/operators';
/** @type {?} */
const LABELS = {
    [LANGUAGE_CONTEXT_ID]: 'Language',
    [CURRENCY_CONTEXT_ID]: 'Currency',
};
export class SiteContextComponentService {
    /**
     * @param {?} componentData
     * @param {?} contextServiceMap
     * @param {?} injector
     */
    constructor(componentData, contextServiceMap, injector) {
        this.componentData = componentData;
        this.contextServiceMap = contextServiceMap;
        this.injector = injector;
    }
    /**
     * @return {?}
     */
    get items$() {
        return this.service$.pipe(switchMap((service) => service.getAll()), switchMap(items => this.context$.pipe(switchMap(context => {
            items.forEach(item => {
                return (item.label = this.getOptionLabel(item, context));
            });
            return of(items);
        }))));
    }
    /**
     * @return {?}
     */
    get activeItem$() {
        return this.service$.pipe(switchMap((service) => service.getActive()));
    }
    /**
     * @return {?}
     */
    get label$() {
        return this.componentData.data$.pipe(map(data => {
            return LABELS[data.context];
        }));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set active(value) {
        this.service$.pipe(take(1)).subscribe(service => {
            service.setActive(value);
        });
    }
    /**
     * @protected
     * @return {?}
     */
    get service$() {
        return this.context$.pipe(map(context => this.getService(context)), filter(Boolean));
    }
    /**
     * @protected
     * @return {?}
     */
    get context$() {
        return this.componentData.data$.pipe(map(data => data.context));
    }
    /**
     * @protected
     * @param {?} context
     * @return {?}
     */
    getService(context) {
        return this.injector.get(this.contextServiceMap[context], null);
    }
    /**
     * @protected
     * @param {?} item
     * @param {?=} context
     * @return {?}
     */
    getOptionLabel(item, context) {
        switch (context) {
            case LANGUAGE_CONTEXT_ID:
                return item.nativeName;
                break;
            case CURRENCY_CONTEXT_ID:
                return item.symbol + ' ' + item.isocode;
                break;
            default:
                return item.isocode;
        }
    }
}
SiteContextComponentService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SiteContextComponentService.ctorParameters = () => [
    { type: CmsComponentData, decorators: [{ type: Optional }] },
    { type: ContextServiceMap },
    { type: Injector }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    SiteContextComponentService.prototype.componentData;
    /**
     * @type {?}
     * @private
     */
    SiteContextComponentService.prototype.contextServiceMap;
    /**
     * @type {?}
     * @protected
     */
    SiteContextComponentService.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LWNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL2Ntcy1saWIvc2l0ZS1jb250ZXh0LXNlbGVjdG9yL3NpdGUtY29udGV4dC1jb21wb25lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3hGLE9BQU8sRUFFTCxpQkFBaUIsRUFDakIsbUJBQW1CLEVBQ25CLG1CQUFtQixHQUVwQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDOztNQUV4RCxNQUFNLEdBQUc7SUFDYixDQUFDLG1CQUFtQixDQUFDLEVBQUUsVUFBVTtJQUNqQyxDQUFDLG1CQUFtQixDQUFDLEVBQUUsVUFBVTtDQUNsQztBQUdELE1BQU0sT0FBTywyQkFBMkI7Ozs7OztJQUN0QyxZQUVZLGFBQWdFLEVBQ2xFLGlCQUFvQyxFQUNsQyxRQUFrQjtRQUZsQixrQkFBYSxHQUFiLGFBQWEsQ0FBbUQ7UUFDbEUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNsQyxhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQzNCLENBQUM7Ozs7SUFFSixJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN2QixTQUFTLENBQUMsQ0FBQyxPQUF5QixFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFDMUQsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNoQixTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDbEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDbkIsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUMzRCxDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUNILENBQ0YsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3ZCLFNBQVMsQ0FBQyxDQUFDLE9BQXlCLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUM5RCxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNsQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDVCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsSUFBSSxNQUFNLENBQUMsS0FBYTtRQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDOUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsSUFBYyxRQUFRO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3ZCLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsRUFDeEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUNoQixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxJQUFjLFFBQVE7UUFDcEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Ozs7O0lBRVMsVUFBVSxDQUFDLE9BQWU7UUFDbEMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FDdEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxFQUMvQixJQUFJLENBQ0wsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFFUyxjQUFjLENBQUMsSUFBUyxFQUFFLE9BQWdCO1FBQ2xELFFBQVEsT0FBTyxFQUFFO1lBQ2YsS0FBSyxtQkFBbUI7Z0JBQ3RCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztnQkFDdkIsTUFBTTtZQUNSLEtBQUssbUJBQW1CO2dCQUN0QixPQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ3hDLE1BQU07WUFDUjtnQkFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7WUExRUYsVUFBVTs7OztZQWhCRixnQkFBZ0IsdUJBbUJwQixRQUFRO1lBaEJYLGlCQUFpQjtZQUpZLFFBQVE7Ozs7Ozs7SUFvQm5DLG9EQUMwRTs7Ozs7SUFDMUUsd0RBQTRDOzs7OztJQUM1QywrQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcbmltcG9ydCB7XG4gIENtc1NpdGVDb250ZXh0U2VsZWN0b3JDb21wb25lbnQsXG4gIENvbnRleHRTZXJ2aWNlTWFwLFxuICBDVVJSRU5DWV9DT05URVhUX0lELFxuICBMQU5HVUFHRV9DT05URVhUX0lELFxuICBTaXRlQ29udGV4dCxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGZpbHRlciwgc3dpdGNoTWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5jb25zdCBMQUJFTFMgPSB7XG4gIFtMQU5HVUFHRV9DT05URVhUX0lEXTogJ0xhbmd1YWdlJyxcbiAgW0NVUlJFTkNZX0NPTlRFWFRfSURdOiAnQ3VycmVuY3knLFxufTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNpdGVDb250ZXh0Q29tcG9uZW50U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgcHJvdGVjdGVkIGNvbXBvbmVudERhdGE6IENtc0NvbXBvbmVudERhdGE8Q21zU2l0ZUNvbnRleHRTZWxlY3RvckNvbXBvbmVudD4sXG4gICAgcHJpdmF0ZSBjb250ZXh0U2VydmljZU1hcDogQ29udGV4dFNlcnZpY2VNYXAsXG4gICAgcHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3RvclxuICApIHt9XG5cbiAgZ2V0IGl0ZW1zJCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnNlcnZpY2UkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHNlcnZpY2U6IFNpdGVDb250ZXh0PGFueT4pID0+IHNlcnZpY2UuZ2V0QWxsKCkpLFxuICAgICAgc3dpdGNoTWFwKGl0ZW1zID0+XG4gICAgICAgIHRoaXMuY29udGV4dCQucGlwZShcbiAgICAgICAgICBzd2l0Y2hNYXAoY29udGV4dCA9PiB7XG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKGl0ZW0ubGFiZWwgPSB0aGlzLmdldE9wdGlvbkxhYmVsKGl0ZW0sIGNvbnRleHQpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG9mKGl0ZW1zKTtcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGdldCBhY3RpdmVJdGVtJCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnNlcnZpY2UkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHNlcnZpY2U6IFNpdGVDb250ZXh0PGFueT4pID0+IHNlcnZpY2UuZ2V0QWN0aXZlKCkpXG4gICAgKTtcbiAgfVxuXG4gIGdldCBsYWJlbCQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnREYXRhLmRhdGEkLnBpcGUoXG4gICAgICBtYXAoZGF0YSA9PiB7XG4gICAgICAgIHJldHVybiBMQUJFTFNbZGF0YS5jb250ZXh0XTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHNldCBhY3RpdmUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuc2VydmljZSQucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoc2VydmljZSA9PiB7XG4gICAgICBzZXJ2aWNlLnNldEFjdGl2ZSh2YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IHNlcnZpY2UkKCk6IE9ic2VydmFibGU8U2l0ZUNvbnRleHQ8YW55Pj4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQkLnBpcGUoXG4gICAgICBtYXAoY29udGV4dCA9PiB0aGlzLmdldFNlcnZpY2UoY29udGV4dCkpLFxuICAgICAgZmlsdGVyKEJvb2xlYW4pXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgY29udGV4dCQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnREYXRhLmRhdGEkLnBpcGUobWFwKGRhdGEgPT4gZGF0YS5jb250ZXh0KSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0U2VydmljZShjb250ZXh0OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5pbmplY3Rvci5nZXQ8U2l0ZUNvbnRleHQ8YW55Pj4oXG4gICAgICB0aGlzLmNvbnRleHRTZXJ2aWNlTWFwW2NvbnRleHRdLFxuICAgICAgbnVsbFxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0T3B0aW9uTGFiZWwoaXRlbTogYW55LCBjb250ZXh0Pzogc3RyaW5nKSB7XG4gICAgc3dpdGNoIChjb250ZXh0KSB7XG4gICAgICBjYXNlIExBTkdVQUdFX0NPTlRFWFRfSUQ6XG4gICAgICAgIHJldHVybiBpdGVtLm5hdGl2ZU5hbWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBDVVJSRU5DWV9DT05URVhUX0lEOlxuICAgICAgICByZXR1cm4gaXRlbS5zeW1ib2wgKyAnICcgKyBpdGVtLmlzb2NvZGU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGl0ZW0uaXNvY29kZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==