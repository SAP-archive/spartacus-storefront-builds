var _a;
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
        return this.getService(context).pipe(switchMap((/**
         * @param {?} service
         * @return {?}
         */
        function (service) { return service.getAll(); })), switchMap((/**
         * @param {?} items
         * @return {?}
         */
        function (items) {
            return _this.getContext(context).pipe(switchMap((/**
             * @param {?} ctx
             * @return {?}
             */
            function (ctx) {
                var e_1, _a;
                /** @type {?} */
                var itemsCopy = [];
                try {
                    for (var items_1 = tslib_1.__values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                        var item = items_1_1.value;
                        itemsCopy.push(tslib_1.__assign({}, item, { label: _this.getOptionLabel(item, ctx) }));
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                return of(itemsCopy);
            })));
        })));
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
        return this.getService(context).pipe(switchMap((/**
         * @param {?} service
         * @return {?}
         */
        function (service) { return service.getActive(); })));
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
        return this.getContext(context).pipe(map((/**
         * @param {?} ctx
         * @return {?}
         */
        function (ctx) {
            return LABELS[ctx];
        })));
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
            .subscribe((/**
         * @param {?} service
         * @return {?}
         */
        function (service) {
            service.setActive(value);
        }));
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
        return this.getContext(context).pipe(map((/**
         * @param {?} ctx
         * @return {?}
         */
        function (ctx) { return _this.getInjectedService(ctx); })), filter((/**
         * @param {?} s
         * @return {?}
         */
        function (s) { return !!s; })));
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
            return this.componentData.data$.pipe(map((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return data.context; })), map((/**
             * @param {?} ctx
             * @return {?}
             */
            function (ctx) {
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
            case CURRENCY_CONTEXT_ID:
                return item.symbol + ' ' + item.isocode;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LWNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbWlzYy9zaXRlLWNvbnRleHQtc2VsZWN0b3Ivc2l0ZS1jb250ZXh0LWNvbXBvbmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBRUwsaUJBQWlCLEVBQ2pCLG1CQUFtQixFQUNuQixtQkFBbUIsR0FFcEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQzs7SUFHbEYsTUFBTTtJQUNWLEdBQUMsbUJBQW1CLElBQUcsVUFBVTtJQUNqQyxHQUFDLG1CQUFtQixJQUFHLFVBQVU7T0FDbEM7QUFFRDtJQUVFLHFDQUVZLGFBQWdFLEVBQ2xFLGlCQUFvQyxFQUNsQyxRQUFrQjtRQUZsQixrQkFBYSxHQUFiLGFBQWEsQ0FBbUQ7UUFDbEUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNsQyxhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQzNCLENBQUM7Ozs7O0lBRUosOENBQVE7Ozs7SUFBUixVQUFTLE9BQXlCO1FBQWxDLGlCQWtCQztRQWpCQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUNsQyxTQUFTOzs7O1FBQUMsVUFBQyxPQUF5QixJQUFLLE9BQUEsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFoQixDQUFnQixFQUFD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LENBQ3RCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsRUFDL0IsSUFBSSxDQUNMLENBQUM7SUFDSixDQUFDOzs7Ozs7O0lBRVMsb0RBQWM7Ozs7OztJQUF4QixVQUF5QixJQUFTLEVBQUUsT0FBZ0I7UUFDbEQsUUFBUSxPQUFPLEVBQUU7WUFDZixLQUFLLG1CQUFtQjtnQkFDdEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3pCLEtBQUssbUJBQW1CO2dCQUN0QixPQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDMUM7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7Z0JBaEdGLFVBQVU7Ozs7Z0JBUkYsZ0JBQWdCLHVCQVdwQixRQUFRO2dCQWxCWCxpQkFBaUI7Z0JBSEUsUUFBUTs7SUFtSDdCLGtDQUFDO0NBQUEsQUFqR0QsSUFpR0M7U0FoR1ksMkJBQTJCOzs7Ozs7SUFFcEMsb0RBQzBFOzs7OztJQUMxRSx3REFBNEM7Ozs7O0lBQzVDLCtDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ21zU2l0ZUNvbnRleHRTZWxlY3RvckNvbXBvbmVudCxcbiAgQ29udGV4dFNlcnZpY2VNYXAsXG4gIENVUlJFTkNZX0NPTlRFWFRfSUQsXG4gIExBTkdVQUdFX0NPTlRFWFRfSUQsXG4gIFNpdGVDb250ZXh0LFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dFR5cGUgfSBmcm9tICcuL3NpdGUtY29udGV4dC5tb2RlbCc7XG5cbmNvbnN0IExBQkVMUyA9IHtcbiAgW0xBTkdVQUdFX0NPTlRFWFRfSURdOiAnTGFuZ3VhZ2UnLFxuICBbQ1VSUkVOQ1lfQ09OVEVYVF9JRF06ICdDdXJyZW5jeScsXG59O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2l0ZUNvbnRleHRDb21wb25lbnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKClcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50RGF0YTogQ21zQ29tcG9uZW50RGF0YTxDbXNTaXRlQ29udGV4dFNlbGVjdG9yQ29tcG9uZW50PixcbiAgICBwcml2YXRlIGNvbnRleHRTZXJ2aWNlTWFwOiBDb250ZXh0U2VydmljZU1hcCxcbiAgICBwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yXG4gICkge31cblxuICBnZXRJdGVtcyhjb250ZXh0PzogU2l0ZUNvbnRleHRUeXBlKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRTZXJ2aWNlKGNvbnRleHQpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHNlcnZpY2U6IFNpdGVDb250ZXh0PGFueT4pID0+IHNlcnZpY2UuZ2V0QWxsKCkpLFxuICAgICAgc3dpdGNoTWFwKGl0ZW1zID0+XG4gICAgICAgIHRoaXMuZ2V0Q29udGV4dChjb250ZXh0KS5waXBlKFxuICAgICAgICAgIHN3aXRjaE1hcChjdHggPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbXNDb3B5ID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgICAgICAgaXRlbXNDb3B5LnB1c2goe1xuICAgICAgICAgICAgICAgIC4uLml0ZW0sXG4gICAgICAgICAgICAgICAgbGFiZWw6IHRoaXMuZ2V0T3B0aW9uTGFiZWwoaXRlbSwgY3R4KSxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb2YoaXRlbXNDb3B5KTtcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGdldEFjdGl2ZUl0ZW0oY29udGV4dD86IFNpdGVDb250ZXh0VHlwZSk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U2VydmljZShjb250ZXh0KS5waXBlKFxuICAgICAgc3dpdGNoTWFwKChzZXJ2aWNlOiBTaXRlQ29udGV4dDxhbnk+KSA9PiBzZXJ2aWNlLmdldEFjdGl2ZSgpKVxuICAgICk7XG4gIH1cblxuICBnZXRMYWJlbChjb250ZXh0PzogU2l0ZUNvbnRleHRUeXBlKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb250ZXh0KGNvbnRleHQpLnBpcGUoXG4gICAgICBtYXAoY3R4ID0+IHtcbiAgICAgICAgcmV0dXJuIExBQkVMU1tjdHhdO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgc2V0QWN0aXZlKHZhbHVlOiBzdHJpbmcsIGNvbnRleHQ/OiBTaXRlQ29udGV4dFR5cGUpOiB2b2lkIHtcbiAgICB0aGlzLmdldFNlcnZpY2UoY29udGV4dClcbiAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAuc3Vic2NyaWJlKHNlcnZpY2UgPT4ge1xuICAgICAgICBzZXJ2aWNlLnNldEFjdGl2ZSh2YWx1ZSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRTZXJ2aWNlKFxuICAgIGNvbnRleHQ/OiBTaXRlQ29udGV4dFR5cGVcbiAgKTogT2JzZXJ2YWJsZTxTaXRlQ29udGV4dDxhbnk+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29udGV4dChjb250ZXh0KS5waXBlKFxuICAgICAgbWFwKChjdHg6IHN0cmluZykgPT4gdGhpcy5nZXRJbmplY3RlZFNlcnZpY2UoY3R4KSksXG4gICAgICBmaWx0ZXIocyA9PiAhIXMpXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRDb250ZXh0KGNvbnRleHQ/OiBTaXRlQ29udGV4dFR5cGUpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIGlmIChjb250ZXh0KSB7XG4gICAgICByZXR1cm4gb2YoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbXBvbmVudERhdGEpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudERhdGEuZGF0YSQucGlwZShcbiAgICAgICAgbWFwKGRhdGEgPT4gZGF0YS5jb250ZXh0KSxcbiAgICAgICAgbWFwKGN0eCA9PiB7XG4gICAgICAgICAgc3dpdGNoIChjdHgpIHtcbiAgICAgICAgICAgIGNhc2UgJ0xBTkdVQUdFJzpcbiAgICAgICAgICAgICAgcmV0dXJuIExBTkdVQUdFX0NPTlRFWFRfSUQ7XG4gICAgICAgICAgICBjYXNlICdDVVJSRU5DWSc6XG4gICAgICAgICAgICAgIHJldHVybiBDVVJSRU5DWV9DT05URVhUX0lEO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmV0dXJuIGN0eDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRJbmplY3RlZFNlcnZpY2UoY29udGV4dDogc3RyaW5nKTogU2l0ZUNvbnRleHQ8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0PFNpdGVDb250ZXh0PGFueT4+KFxuICAgICAgdGhpcy5jb250ZXh0U2VydmljZU1hcFtjb250ZXh0XSxcbiAgICAgIG51bGxcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldE9wdGlvbkxhYmVsKGl0ZW06IGFueSwgY29udGV4dD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgc3dpdGNoIChjb250ZXh0KSB7XG4gICAgICBjYXNlIExBTkdVQUdFX0NPTlRFWFRfSUQ6XG4gICAgICAgIHJldHVybiBpdGVtLm5hdGl2ZU5hbWU7XG4gICAgICBjYXNlIENVUlJFTkNZX0NPTlRFWFRfSUQ6XG4gICAgICAgIHJldHVybiBpdGVtLnN5bWJvbCArICcgJyArIGl0ZW0uaXNvY29kZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBpdGVtLmlzb2NvZGU7XG4gICAgfVxuICB9XG59XG4iXX0=