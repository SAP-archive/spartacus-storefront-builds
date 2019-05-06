/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector, Optional } from '@angular/core';
import { ContextServiceMap, CURRENCY_CONTEXT_ID, LANGUAGE_CONTEXT_ID, } from '@spartacus/core';
import { of } from 'rxjs';
import { filter, map, switchMap, take } from 'rxjs/operators';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
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
     * @param {?=} context
     * @return {?}
     */
    getItems(context) {
        return this.getService(context).pipe(switchMap((service) => service.getAll()), switchMap(items => this.getContext(context).pipe(switchMap(ctx => {
            items.forEach(item => {
                return (item.label = this.getOptionLabel(item, ctx));
            });
            return of(items);
        }))));
    }
    /**
     * @param {?=} context
     * @return {?}
     */
    getActiveItem(context) {
        return this.getService(context).pipe(switchMap((service) => service.getActive()));
    }
    /**
     * @param {?=} context
     * @return {?}
     */
    getLabel(context) {
        return this.getContext(context).pipe(map(ctx => {
            return LABELS[ctx];
        }));
    }
    /**
     * @param {?} value
     * @param {?=} context
     * @return {?}
     */
    setActive(value, context) {
        this.getService(context)
            .pipe(take(1))
            .subscribe(service => {
            service.setActive(value);
        });
    }
    /**
     * @protected
     * @param {?=} context
     * @return {?}
     */
    getService(context) {
        return this.getContext(context).pipe(map(ctx => this.getInjectedService(ctx)), filter(Boolean));
    }
    /**
     * @protected
     * @param {?=} context
     * @return {?}
     */
    getContext(context) {
        if (context) {
            return of(context);
        }
        else if (this.componentData) {
            return this.componentData.data$.pipe(map(data => data.context));
        }
    }
    /**
     * @protected
     * @param {?} context
     * @return {?}
     */
    getInjectedService(context) {
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
            case CURRENCY_CONTEXT_ID:
                return item.symbol + ' ' + item.isocode;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LWNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbWlzYy9zaXRlLWNvbnRleHQtc2VsZWN0b3Ivc2l0ZS1jb250ZXh0LWNvbXBvbmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0QsT0FBTyxFQUVMLGlCQUFpQixFQUNqQixtQkFBbUIsRUFDbkIsbUJBQW1CLEdBRXBCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0RBQXNELENBQUM7O01BR2xGLE1BQU0sR0FBRztJQUNiLENBQUMsbUJBQW1CLENBQUMsRUFBRSxVQUFVO0lBQ2pDLENBQUMsbUJBQW1CLENBQUMsRUFBRSxVQUFVO0NBQ2xDO0FBR0QsTUFBTSxPQUFPLDJCQUEyQjs7Ozs7O0lBQ3RDLFlBRVksYUFBZ0UsRUFDbEUsaUJBQW9DLEVBQ2xDLFFBQWtCO1FBRmxCLGtCQUFhLEdBQWIsYUFBYSxDQUFtRDtRQUNsRSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ2xDLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDM0IsQ0FBQzs7Ozs7SUFFSixRQUFRLENBQUMsT0FBeUI7UUFDaEMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDbEMsU0FBUyxDQUFDLENBQUMsT0FBeUIsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxD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SUFDMUUsd0RBQTRDOzs7OztJQUM1QywrQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENtc1NpdGVDb250ZXh0U2VsZWN0b3JDb21wb25lbnQsXG4gIENvbnRleHRTZXJ2aWNlTWFwLFxuICBDVVJSRU5DWV9DT05URVhUX0lELFxuICBMQU5HVUFHRV9DT05URVhUX0lELFxuICBTaXRlQ29udGV4dCxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9jbXMtY29tcG9uZW50LWRhdGEnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRUeXBlIH0gZnJvbSAnLi9zaXRlLWNvbnRleHQubW9kZWwnO1xuXG5jb25zdCBMQUJFTFMgPSB7XG4gIFtMQU5HVUFHRV9DT05URVhUX0lEXTogJ0xhbmd1YWdlJyxcbiAgW0NVUlJFTkNZX0NPTlRFWFRfSURdOiAnQ3VycmVuY3knLFxufTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNpdGVDb250ZXh0Q29tcG9uZW50U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgcHJvdGVjdGVkIGNvbXBvbmVudERhdGE6IENtc0NvbXBvbmVudERhdGE8Q21zU2l0ZUNvbnRleHRTZWxlY3RvckNvbXBvbmVudD4sXG4gICAgcHJpdmF0ZSBjb250ZXh0U2VydmljZU1hcDogQ29udGV4dFNlcnZpY2VNYXAsXG4gICAgcHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3RvclxuICApIHt9XG5cbiAgZ2V0SXRlbXMoY29udGV4dD86IFNpdGVDb250ZXh0VHlwZSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U2VydmljZShjb250ZXh0KS5waXBlKFxuICAgICAgc3dpdGNoTWFwKChzZXJ2aWNlOiBTaXRlQ29udGV4dDxhbnk+KSA9PiBzZXJ2aWNlLmdldEFsbCgpKSxcbiAgICAgIHN3aXRjaE1hcChpdGVtcyA9PlxuICAgICAgICB0aGlzLmdldENvbnRleHQoY29udGV4dCkucGlwZShcbiAgICAgICAgICBzd2l0Y2hNYXAoY3R4ID0+IHtcbiAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoaXRlbS5sYWJlbCA9IHRoaXMuZ2V0T3B0aW9uTGFiZWwoaXRlbSwgY3R4KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBvZihpdGVtcyk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBnZXRBY3RpdmVJdGVtKGNvbnRleHQ/OiBTaXRlQ29udGV4dFR5cGUpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmdldFNlcnZpY2UoY29udGV4dCkucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoc2VydmljZTogU2l0ZUNvbnRleHQ8YW55PikgPT4gc2VydmljZS5nZXRBY3RpdmUoKSlcbiAgICApO1xuICB9XG5cbiAgZ2V0TGFiZWwoY29udGV4dD86IFNpdGVDb250ZXh0VHlwZSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29udGV4dChjb250ZXh0KS5waXBlKFxuICAgICAgbWFwKGN0eCA9PiB7XG4gICAgICAgIHJldHVybiBMQUJFTFNbY3R4XTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHNldEFjdGl2ZSh2YWx1ZTogc3RyaW5nLCBjb250ZXh0PzogU2l0ZUNvbnRleHRUeXBlKTogdm9pZCB7XG4gICAgdGhpcy5nZXRTZXJ2aWNlKGNvbnRleHQpXG4gICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgLnN1YnNjcmliZShzZXJ2aWNlID0+IHtcbiAgICAgICAgc2VydmljZS5zZXRBY3RpdmUodmFsdWUpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0U2VydmljZShcbiAgICBjb250ZXh0PzogU2l0ZUNvbnRleHRUeXBlXG4gICk6IE9ic2VydmFibGU8U2l0ZUNvbnRleHQ8YW55Pj4ge1xuICAgIHJldHVybiB0aGlzLmdldENvbnRleHQoY29udGV4dCkucGlwZShcbiAgICAgIG1hcChjdHggPT4gdGhpcy5nZXRJbmplY3RlZFNlcnZpY2UoY3R4KSksXG4gICAgICBmaWx0ZXIoQm9vbGVhbilcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldENvbnRleHQoY29udGV4dD86IFNpdGVDb250ZXh0VHlwZSk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgaWYgKGNvbnRleHQpIHtcbiAgICAgIHJldHVybiBvZihjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29tcG9uZW50RGF0YSkge1xuICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50RGF0YS5kYXRhJC5waXBlKG1hcChkYXRhID0+IGRhdGEuY29udGV4dCkpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRJbmplY3RlZFNlcnZpY2UoY29udGV4dDogc3RyaW5nKTogU2l0ZUNvbnRleHQ8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0PFNpdGVDb250ZXh0PGFueT4+KFxuICAgICAgdGhpcy5jb250ZXh0U2VydmljZU1hcFtjb250ZXh0XSxcbiAgICAgIG51bGxcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldE9wdGlvbkxhYmVsKGl0ZW06IGFueSwgY29udGV4dD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgc3dpdGNoIChjb250ZXh0KSB7XG4gICAgICBjYXNlIExBTkdVQUdFX0NPTlRFWFRfSUQ6XG4gICAgICAgIHJldHVybiBpdGVtLm5hdGl2ZU5hbWU7XG4gICAgICBjYXNlIENVUlJFTkNZX0NPTlRFWFRfSUQ6XG4gICAgICAgIHJldHVybiBpdGVtLnN5bWJvbCArICcgJyArIGl0ZW0uaXNvY29kZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBpdGVtLmlzb2NvZGU7XG4gICAgfVxuICB9XG59XG4iXX0=