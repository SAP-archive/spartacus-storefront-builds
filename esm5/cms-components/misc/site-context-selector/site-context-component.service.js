var _a;
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
var LABELS = (_a = {},
    _a[LANGUAGE_CONTEXT_ID] = 'Language',
    _a[CURRENCY_CONTEXT_ID] = 'Currency',
    _a);
var SiteContextComponentService = /** @class */ (function () {
    function SiteContextComponentService(componentData, contextServiceMap, injector) {
        this.componentData = componentData;
        this.contextServiceMap = contextServiceMap;
        this.injector = injector;
    }
    /**
     * @param {?=} context
     * @return {?}
     */
    SiteContextComponentService.prototype.getItems = /**
     * @param {?=} context
     * @return {?}
     */
    function (context) {
        var _this = this;
        return this.getService(context).pipe(switchMap(function (service) { return service.getAll(); }), switchMap(function (items) {
            return _this.getContext(context).pipe(switchMap(function (ctx) {
                items.forEach(function (item) {
                    return (item.label = _this.getOptionLabel(item, ctx));
                });
                return of(items);
            }));
        }));
    };
    /**
     * @param {?=} context
     * @return {?}
     */
    SiteContextComponentService.prototype.getActiveItem = /**
     * @param {?=} context
     * @return {?}
     */
    function (context) {
        return this.getService(context).pipe(switchMap(function (service) { return service.getActive(); }));
    };
    /**
     * @param {?=} context
     * @return {?}
     */
    SiteContextComponentService.prototype.getLabel = /**
     * @param {?=} context
     * @return {?}
     */
    function (context) {
        return this.getContext(context).pipe(map(function (ctx) {
            return LABELS[ctx];
        }));
    };
    /**
     * @param {?} value
     * @param {?=} context
     * @return {?}
     */
    SiteContextComponentService.prototype.setActive = /**
     * @param {?} value
     * @param {?=} context
     * @return {?}
     */
    function (value, context) {
        this.getService(context)
            .pipe(take(1))
            .subscribe(function (service) {
            service.setActive(value);
        });
    };
    /**
     * @protected
     * @param {?=} context
     * @return {?}
     */
    SiteContextComponentService.prototype.getService = /**
     * @protected
     * @param {?=} context
     * @return {?}
     */
    function (context) {
        var _this = this;
        return this.getContext(context).pipe(map(function (ctx) { return _this.getInjectedService(ctx); }), filter(Boolean));
    };
    /**
     * @protected
     * @param {?=} context
     * @return {?}
     */
    SiteContextComponentService.prototype.getContext = /**
     * @protected
     * @param {?=} context
     * @return {?}
     */
    function (context) {
        if (context) {
            return of(context);
        }
        else if (this.componentData) {
            return this.componentData.data$.pipe(map(function (data) { return data.context; }));
        }
    };
    /**
     * @protected
     * @param {?} context
     * @return {?}
     */
    SiteContextComponentService.prototype.getInjectedService = /**
     * @protected
     * @param {?} context
     * @return {?}
     */
    function (context) {
        return this.injector.get(this.contextServiceMap[context], null);
    };
    /**
     * @protected
     * @param {?} item
     * @param {?=} context
     * @return {?}
     */
    SiteContextComponentService.prototype.getOptionLabel = /**
     * @protected
     * @param {?} item
     * @param {?=} context
     * @return {?}
     */
    function (item, context) {
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
    };
    SiteContextComponentService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SiteContextComponentService.ctorParameters = function () { return [
        { type: CmsComponentData, decorators: [{ type: Optional }] },
        { type: ContextServiceMap },
        { type: Injector }
    ]; };
    return SiteContextComponentService;
}());
export { SiteContextComponentService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LWNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbWlzYy9zaXRlLWNvbnRleHQtc2VsZWN0b3Ivc2l0ZS1jb250ZXh0LWNvbXBvbmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sRUFFTCxpQkFBaUIsRUFDakIsbUJBQW1CLEVBQ25CLG1CQUFtQixHQUVwQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDOztJQUdsRixNQUFNO0lBQ1YsR0FBQyxtQkFBbUIsSUFBRyxVQUFVO0lBQ2pDLEdBQUMsbUJBQW1CLElBQUcsVUFBVTtPQUNsQztBQUVEO0lBRUUscUNBRVksYUFBZ0UsRUFDbEUsaUJBQW9DLEVBQ2xDLFFBQWtCO1FBRmxCLGtCQUFhLEdBQWIsYUFBYSxDQUFtRDtRQUNsRSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ2xDLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDM0IsQ0FBQzs7Ozs7SUFFSiw4Q0FBUTs7OztJQUFSLFVBQVMsT0FBeUI7UUFBbEMsaUJBY0M7UUFiQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUNsQyxTQUFTLENBQUMsVUFBQyxPQUF5QixJQUFLLE9BQUEsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFoQixDQUFnQixDQUFDLEVBQzFE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LENBQUMsT0FBTyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7Z0JBbEZGLFVBQVU7Ozs7Z0JBUkYsZ0JBQWdCLHVCQVdwQixRQUFRO2dCQWxCWCxpQkFBaUI7Z0JBSEUsUUFBUTs7SUFxRzdCLGtDQUFDO0NBQUEsQUFuRkQsSUFtRkM7U0FsRlksMkJBQTJCOzs7Ozs7SUFFcEMsb0RBQzBFOzs7OztJQUMxRSx3REFBNEM7Ozs7O0lBQzVDLCtDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ21zU2l0ZUNvbnRleHRTZWxlY3RvckNvbXBvbmVudCxcbiAgQ29udGV4dFNlcnZpY2VNYXAsXG4gIENVUlJFTkNZX0NPTlRFWFRfSUQsXG4gIExBTkdVQUdFX0NPTlRFWFRfSUQsXG4gIFNpdGVDb250ZXh0LFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dFR5cGUgfSBmcm9tICcuL3NpdGUtY29udGV4dC5tb2RlbCc7XG5cbmNvbnN0IExBQkVMUyA9IHtcbiAgW0xBTkdVQUdFX0NPTlRFWFRfSURdOiAnTGFuZ3VhZ2UnLFxuICBbQ1VSUkVOQ1lfQ09OVEVYVF9JRF06ICdDdXJyZW5jeScsXG59O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2l0ZUNvbnRleHRDb21wb25lbnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKClcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50RGF0YTogQ21zQ29tcG9uZW50RGF0YTxDbXNTaXRlQ29udGV4dFNlbGVjdG9yQ29tcG9uZW50PixcbiAgICBwcml2YXRlIGNvbnRleHRTZXJ2aWNlTWFwOiBDb250ZXh0U2VydmljZU1hcCxcbiAgICBwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yXG4gICkge31cblxuICBnZXRJdGVtcyhjb250ZXh0PzogU2l0ZUNvbnRleHRUeXBlKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRTZXJ2aWNlKGNvbnRleHQpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHNlcnZpY2U6IFNpdGVDb250ZXh0PGFueT4pID0+IHNlcnZpY2UuZ2V0QWxsKCkpLFxuICAgICAgc3dpdGNoTWFwKGl0ZW1zID0+XG4gICAgICAgIHRoaXMuZ2V0Q29udGV4dChjb250ZXh0KS5waXBlKFxuICAgICAgICAgIHN3aXRjaE1hcChjdHggPT4ge1xuICAgICAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChpdGVtLmxhYmVsID0gdGhpcy5nZXRPcHRpb25MYWJlbChpdGVtLCBjdHgpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG9mKGl0ZW1zKTtcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGdldEFjdGl2ZUl0ZW0oY29udGV4dD86IFNpdGVDb250ZXh0VHlwZSk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U2VydmljZShjb250ZXh0KS5waXBlKFxuICAgICAgc3dpdGNoTWFwKChzZXJ2aWNlOiBTaXRlQ29udGV4dDxhbnk+KSA9PiBzZXJ2aWNlLmdldEFjdGl2ZSgpKVxuICAgICk7XG4gIH1cblxuICBnZXRMYWJlbChjb250ZXh0PzogU2l0ZUNvbnRleHRUeXBlKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb250ZXh0KGNvbnRleHQpLnBpcGUoXG4gICAgICBtYXAoY3R4ID0+IHtcbiAgICAgICAgcmV0dXJuIExBQkVMU1tjdHhdO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgc2V0QWN0aXZlKHZhbHVlOiBzdHJpbmcsIGNvbnRleHQ/OiBTaXRlQ29udGV4dFR5cGUpOiB2b2lkIHtcbiAgICB0aGlzLmdldFNlcnZpY2UoY29udGV4dClcbiAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAuc3Vic2NyaWJlKHNlcnZpY2UgPT4ge1xuICAgICAgICBzZXJ2aWNlLnNldEFjdGl2ZSh2YWx1ZSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRTZXJ2aWNlKFxuICAgIGNvbnRleHQ/OiBTaXRlQ29udGV4dFR5cGVcbiAgKTogT2JzZXJ2YWJsZTxTaXRlQ29udGV4dDxhbnk+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29udGV4dChjb250ZXh0KS5waXBlKFxuICAgICAgbWFwKGN0eCA9PiB0aGlzLmdldEluamVjdGVkU2VydmljZShjdHgpKSxcbiAgICAgIGZpbHRlcihCb29sZWFuKVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0Q29udGV4dChjb250ZXh0PzogU2l0ZUNvbnRleHRUeXBlKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICBpZiAoY29udGV4dCkge1xuICAgICAgcmV0dXJuIG9mKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb21wb25lbnREYXRhKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21wb25lbnREYXRhLmRhdGEkLnBpcGUobWFwKGRhdGEgPT4gZGF0YS5jb250ZXh0KSk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGdldEluamVjdGVkU2VydmljZShjb250ZXh0OiBzdHJpbmcpOiBTaXRlQ29udGV4dDxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5pbmplY3Rvci5nZXQ8U2l0ZUNvbnRleHQ8YW55Pj4oXG4gICAgICB0aGlzLmNvbnRleHRTZXJ2aWNlTWFwW2NvbnRleHRdLFxuICAgICAgbnVsbFxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0T3B0aW9uTGFiZWwoaXRlbTogYW55LCBjb250ZXh0Pzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKGNvbnRleHQpIHtcbiAgICAgIGNhc2UgTEFOR1VBR0VfQ09OVEVYVF9JRDpcbiAgICAgICAgcmV0dXJuIGl0ZW0ubmF0aXZlTmFtZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIENVUlJFTkNZX0NPTlRFWFRfSUQ6XG4gICAgICAgIHJldHVybiBpdGVtLnN5bWJvbCArICcgJyArIGl0ZW0uaXNvY29kZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gaXRlbS5pc29jb2RlO1xuICAgIH1cbiAgfVxufVxuIl19