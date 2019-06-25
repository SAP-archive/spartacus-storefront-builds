/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        return this.getService(context).pipe(switchMap((/**
         * @param {?} service
         * @return {?}
         */
        (service) => service.getAll())), switchMap((/**
         * @param {?} items
         * @return {?}
         */
        items => this.getContext(context).pipe(switchMap((/**
         * @param {?} ctx
         * @return {?}
         */
        ctx => {
            /** @type {?} */
            const itemsCopy = [];
            for (const item of items) {
                itemsCopy.push(Object.assign({}, item, { label: this.getOptionLabel(item, ctx) }));
            }
            return of(itemsCopy);
        }))))));
    }
    /**
     * @param {?=} context
     * @return {?}
     */
    getActiveItem(context) {
        return this.getService(context).pipe(switchMap((/**
         * @param {?} service
         * @return {?}
         */
        (service) => service.getActive())));
    }
    /**
     * @param {?=} context
     * @return {?}
     */
    getLabel(context) {
        return this.getContext(context).pipe(map((/**
         * @param {?} ctx
         * @return {?}
         */
        ctx => {
            return LABELS[ctx];
        })));
    }
    /**
     * @param {?} value
     * @param {?=} context
     * @return {?}
     */
    setActive(value, context) {
        this.getService(context)
            .pipe(take(1))
            .subscribe((/**
         * @param {?} service
         * @return {?}
         */
        service => {
            service.setActive(value);
        }));
    }
    /**
     * @protected
     * @param {?=} context
     * @return {?}
     */
    getService(context) {
        return this.getContext(context).pipe(map((/**
         * @param {?} ctx
         * @return {?}
         */
        ctx => this.getInjectedService(ctx))), filter(Boolean));
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
            return this.componentData.data$.pipe(map((/**
             * @param {?} data
             * @return {?}
             */
            data => data.context)), map((/**
             * @param {?} ctx
             * @return {?}
             */
            ctx => {
                switch (ctx) {
                    case 'LANGUAGE':
                        return LANGUAGE_CONTEXT_ID;
                    case 'CURRENCY':
                        return CURRENCY_CONTEXT_ID;
                    default:
                        return ctx;
                }
            })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LWNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbWlzYy9zaXRlLWNvbnRleHQtc2VsZWN0b3Ivc2l0ZS1jb250ZXh0LWNvbXBvbmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0QsT0FBTyxFQUVMLGlCQUFpQixFQUNqQixtQkFBbUIsRUFDbkIsbUJBQW1CLEdBRXBCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0RBQXNELENBQUM7O01BR2xGLE1BQU0sR0FBRztJQUNiLENBQUMsbUJBQW1CLENBQUMsRUFBRSxVQUFVO0lBQ2pDLENBQUMsbUJBQW1CLENBQUMsRUFBRSxVQUFVO0NBQ2xDO0FBR0QsTUFBTSxPQUFPLDJCQUEyQjs7Ozs7O0lBQ3RDLFlBRVksYUFBZ0UsRUFDbEUsaUJBQW9DLEVBQ2xDLFFBQWtCO1FBRmxCLGtCQUFhLEdBQWIsYUFBYSxDQUFtRDtRQUNsRSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ2xDLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDM0IsQ0FBQzs7Ozs7SUFFSixRQUFRLENBQUMsT0FBeUI7UUFDaEMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDbEMsU0FBUzs7OztRQUFDLENBQUMsT0FBeUIsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFB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O1lBQ3pCLEtBQUssbUJBQW1CO2dCQUN0QixPQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDMUM7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7O1lBaEdGLFVBQVU7Ozs7WUFSRixnQkFBZ0IsdUJBV3BCLFFBQVE7WUFsQlgsaUJBQWlCO1lBSEUsUUFBUTs7Ozs7OztJQXFCekIsb0RBQzBFOzs7OztJQUMxRSx3REFBNEM7Ozs7O0lBQzVDLCtDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ21zU2l0ZUNvbnRleHRTZWxlY3RvckNvbXBvbmVudCxcbiAgQ29udGV4dFNlcnZpY2VNYXAsXG4gIENVUlJFTkNZX0NPTlRFWFRfSUQsXG4gIExBTkdVQUdFX0NPTlRFWFRfSUQsXG4gIFNpdGVDb250ZXh0LFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dFR5cGUgfSBmcm9tICcuL3NpdGUtY29udGV4dC5tb2RlbCc7XG5cbmNvbnN0IExBQkVMUyA9IHtcbiAgW0xBTkdVQUdFX0NPTlRFWFRfSURdOiAnTGFuZ3VhZ2UnLFxuICBbQ1VSUkVOQ1lfQ09OVEVYVF9JRF06ICdDdXJyZW5jeScsXG59O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2l0ZUNvbnRleHRDb21wb25lbnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKClcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50RGF0YTogQ21zQ29tcG9uZW50RGF0YTxDbXNTaXRlQ29udGV4dFNlbGVjdG9yQ29tcG9uZW50PixcbiAgICBwcml2YXRlIGNvbnRleHRTZXJ2aWNlTWFwOiBDb250ZXh0U2VydmljZU1hcCxcbiAgICBwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yXG4gICkge31cblxuICBnZXRJdGVtcyhjb250ZXh0PzogU2l0ZUNvbnRleHRUeXBlKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRTZXJ2aWNlKGNvbnRleHQpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHNlcnZpY2U6IFNpdGVDb250ZXh0PGFueT4pID0+IHNlcnZpY2UuZ2V0QWxsKCkpLFxuICAgICAgc3dpdGNoTWFwKGl0ZW1zID0+XG4gICAgICAgIHRoaXMuZ2V0Q29udGV4dChjb250ZXh0KS5waXBlKFxuICAgICAgICAgIHN3aXRjaE1hcChjdHggPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbXNDb3B5ID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgICAgICAgaXRlbXNDb3B5LnB1c2goe1xuICAgICAgICAgICAgICAgIC4uLml0ZW0sXG4gICAgICAgICAgICAgICAgbGFiZWw6IHRoaXMuZ2V0T3B0aW9uTGFiZWwoaXRlbSwgY3R4KSxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb2YoaXRlbXNDb3B5KTtcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGdldEFjdGl2ZUl0ZW0oY29udGV4dD86IFNpdGVDb250ZXh0VHlwZSk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U2VydmljZShjb250ZXh0KS5waXBlKFxuICAgICAgc3dpdGNoTWFwKChzZXJ2aWNlOiBTaXRlQ29udGV4dDxhbnk+KSA9PiBzZXJ2aWNlLmdldEFjdGl2ZSgpKVxuICAgICk7XG4gIH1cblxuICBnZXRMYWJlbChjb250ZXh0PzogU2l0ZUNvbnRleHRUeXBlKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb250ZXh0KGNvbnRleHQpLnBpcGUoXG4gICAgICBtYXAoY3R4ID0+IHtcbiAgICAgICAgcmV0dXJuIExBQkVMU1tjdHhdO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgc2V0QWN0aXZlKHZhbHVlOiBzdHJpbmcsIGNvbnRleHQ/OiBTaXRlQ29udGV4dFR5cGUpOiB2b2lkIHtcbiAgICB0aGlzLmdldFNlcnZpY2UoY29udGV4dClcbiAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAuc3Vic2NyaWJlKHNlcnZpY2UgPT4ge1xuICAgICAgICBzZXJ2aWNlLnNldEFjdGl2ZSh2YWx1ZSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRTZXJ2aWNlKFxuICAgIGNvbnRleHQ/OiBTaXRlQ29udGV4dFR5cGVcbiAgKTogT2JzZXJ2YWJsZTxTaXRlQ29udGV4dDxhbnk+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29udGV4dChjb250ZXh0KS5waXBlKFxuICAgICAgbWFwKGN0eCA9PiB0aGlzLmdldEluamVjdGVkU2VydmljZShjdHgpKSxcbiAgICAgIGZpbHRlcihCb29sZWFuKVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0Q29udGV4dChjb250ZXh0PzogU2l0ZUNvbnRleHRUeXBlKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICBpZiAoY29udGV4dCkge1xuICAgICAgcmV0dXJuIG9mKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb21wb25lbnREYXRhKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21wb25lbnREYXRhLmRhdGEkLnBpcGUoXG4gICAgICAgIG1hcChkYXRhID0+IGRhdGEuY29udGV4dCksXG4gICAgICAgIG1hcChjdHggPT4ge1xuICAgICAgICAgIHN3aXRjaCAoY3R4KSB7XG4gICAgICAgICAgICBjYXNlICdMQU5HVUFHRSc6XG4gICAgICAgICAgICAgIHJldHVybiBMQU5HVUFHRV9DT05URVhUX0lEO1xuICAgICAgICAgICAgY2FzZSAnQ1VSUkVOQ1knOlxuICAgICAgICAgICAgICByZXR1cm4gQ1VSUkVOQ1lfQ09OVEVYVF9JRDtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHJldHVybiBjdHg7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0SW5qZWN0ZWRTZXJ2aWNlKGNvbnRleHQ6IHN0cmluZyk6IFNpdGVDb250ZXh0PGFueT4ge1xuICAgIHJldHVybiB0aGlzLmluamVjdG9yLmdldDxTaXRlQ29udGV4dDxhbnk+PihcbiAgICAgIHRoaXMuY29udGV4dFNlcnZpY2VNYXBbY29udGV4dF0sXG4gICAgICBudWxsXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRPcHRpb25MYWJlbChpdGVtOiBhbnksIGNvbnRleHQ/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHN3aXRjaCAoY29udGV4dCkge1xuICAgICAgY2FzZSBMQU5HVUFHRV9DT05URVhUX0lEOlxuICAgICAgICByZXR1cm4gaXRlbS5uYXRpdmVOYW1lO1xuICAgICAgY2FzZSBDVVJSRU5DWV9DT05URVhUX0lEOlxuICAgICAgICByZXR1cm4gaXRlbS5zeW1ib2wgKyAnICcgKyBpdGVtLmlzb2NvZGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gaXRlbS5pc29jb2RlO1xuICAgIH1cbiAgfVxufVxuIl19