import * as tslib_1 from "tslib";
var _a;
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
        function (ctx) { return _this.getInjectedService(ctx); })), filter(Boolean));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LWNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbWlzYy9zaXRlLWNvbnRleHQtc2VsZWN0b3Ivc2l0ZS1jb250ZXh0LWNvbXBvbmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBRUwsaUJBQWlCLEVBQ2pCLG1CQUFtQixFQUNuQixtQkFBbUIsR0FFcEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQzs7SUFHbEYsTUFBTTtJQUNWLEdBQUMsbUJBQW1CLElBQUcsVUFBVTtJQUNqQyxHQUFDLG1CQUFtQixJQUFHLFVBQVU7T0FDbEM7QUFFRDtJQUVFLHFDQUVZLGFBQWdFLEVBQ2xFLGlCQUFvQyxFQUNsQyxRQUFrQjtRQUZsQixrQkFBYSxHQUFiLGFBQWEsQ0FBbUQ7UUFDbEUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNsQyxhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQzNCLENBQUM7Ozs7O0lBRUosOENBQVE7Ozs7SUFBUixVQUFTLE9BQXlCO1FBQWxDLGlCQWtCQztRQWpCQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUNsQyxTQUFTOzs7O1FBQUMsVUFBQyxPQUF5QixJQUFLLE9BQUEsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFoQixDQUFnQixFQUFD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QixJQUFJLENBQ0wsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFFUyxvREFBYzs7Ozs7O0lBQXhCLFVBQXlCLElBQVMsRUFBRSxPQUFnQjtRQUNsRCxRQUFRLE9BQU8sRUFBRTtZQUNmLEtBQUssbUJBQW1CO2dCQUN0QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDekIsS0FBSyxtQkFBbUI7Z0JBQ3RCLE9BQU8sSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUMxQztnQkFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDdkI7SUFDSCxDQUFDOztnQkFoR0YsVUFBVTs7OztnQkFSRixnQkFBZ0IsdUJBV3BCLFFBQVE7Z0JBbEJYLGlCQUFpQjtnQkFIRSxRQUFROztJQW1IN0Isa0NBQUM7Q0FBQSxBQWpHRCxJQWlHQztTQWhHWSwyQkFBMkI7Ozs7OztJQUVwQyxvREFDMEU7Ozs7O0lBQzFFLHdEQUE0Qzs7Ozs7SUFDNUMsK0NBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDbXNTaXRlQ29udGV4dFNlbGVjdG9yQ29tcG9uZW50LFxuICBDb250ZXh0U2VydmljZU1hcCxcbiAgQ1VSUkVOQ1lfQ09OVEVYVF9JRCxcbiAgTEFOR1VBR0VfQ09OVEVYVF9JRCxcbiAgU2l0ZUNvbnRleHQsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcbmltcG9ydCB7IFNpdGVDb250ZXh0VHlwZSB9IGZyb20gJy4vc2l0ZS1jb250ZXh0Lm1vZGVsJztcblxuY29uc3QgTEFCRUxTID0ge1xuICBbTEFOR1VBR0VfQ09OVEVYVF9JRF06ICdMYW5ndWFnZScsXG4gIFtDVVJSRU5DWV9DT05URVhUX0lEXTogJ0N1cnJlbmN5Jyxcbn07XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTaXRlQ29udGV4dENvbXBvbmVudFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIHByb3RlY3RlZCBjb21wb25lbnREYXRhOiBDbXNDb21wb25lbnREYXRhPENtc1NpdGVDb250ZXh0U2VsZWN0b3JDb21wb25lbnQ+LFxuICAgIHByaXZhdGUgY29udGV4dFNlcnZpY2VNYXA6IENvbnRleHRTZXJ2aWNlTWFwLFxuICAgIHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3JcbiAgKSB7fVxuXG4gIGdldEl0ZW1zKGNvbnRleHQ/OiBTaXRlQ29udGV4dFR5cGUpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmdldFNlcnZpY2UoY29udGV4dCkucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoc2VydmljZTogU2l0ZUNvbnRleHQ8YW55PikgPT4gc2VydmljZS5nZXRBbGwoKSksXG4gICAgICBzd2l0Y2hNYXAoaXRlbXMgPT5cbiAgICAgICAgdGhpcy5nZXRDb250ZXh0KGNvbnRleHQpLnBpcGUoXG4gICAgICAgICAgc3dpdGNoTWFwKGN0eCA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtc0NvcHkgPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICAgICAgICBpdGVtc0NvcHkucHVzaCh7XG4gICAgICAgICAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgICAgICAgICBsYWJlbDogdGhpcy5nZXRPcHRpb25MYWJlbChpdGVtLCBjdHgpLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvZihpdGVtc0NvcHkpO1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgZ2V0QWN0aXZlSXRlbShjb250ZXh0PzogU2l0ZUNvbnRleHRUeXBlKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRTZXJ2aWNlKGNvbnRleHQpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHNlcnZpY2U6IFNpdGVDb250ZXh0PGFueT4pID0+IHNlcnZpY2UuZ2V0QWN0aXZlKCkpXG4gICAgKTtcbiAgfVxuXG4gIGdldExhYmVsKGNvbnRleHQ/OiBTaXRlQ29udGV4dFR5cGUpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmdldENvbnRleHQoY29udGV4dCkucGlwZShcbiAgICAgIG1hcChjdHggPT4ge1xuICAgICAgICByZXR1cm4gTEFCRUxTW2N0eF07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBzZXRBY3RpdmUodmFsdWU6IHN0cmluZywgY29udGV4dD86IFNpdGVDb250ZXh0VHlwZSk6IHZvaWQge1xuICAgIHRoaXMuZ2V0U2VydmljZShjb250ZXh0KVxuICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUoc2VydmljZSA9PiB7XG4gICAgICAgIHNlcnZpY2Uuc2V0QWN0aXZlKHZhbHVlKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFNlcnZpY2UoXG4gICAgY29udGV4dD86IFNpdGVDb250ZXh0VHlwZVxuICApOiBPYnNlcnZhYmxlPFNpdGVDb250ZXh0PGFueT4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb250ZXh0KGNvbnRleHQpLnBpcGUoXG4gICAgICBtYXAoY3R4ID0+IHRoaXMuZ2V0SW5qZWN0ZWRTZXJ2aWNlKGN0eCkpLFxuICAgICAgZmlsdGVyKEJvb2xlYW4pXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRDb250ZXh0KGNvbnRleHQ/OiBTaXRlQ29udGV4dFR5cGUpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIGlmIChjb250ZXh0KSB7XG4gICAgICByZXR1cm4gb2YoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbXBvbmVudERhdGEpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudERhdGEuZGF0YSQucGlwZShcbiAgICAgICAgbWFwKGRhdGEgPT4gZGF0YS5jb250ZXh0KSxcbiAgICAgICAgbWFwKGN0eCA9PiB7XG4gICAgICAgICAgc3dpdGNoIChjdHgpIHtcbiAgICAgICAgICAgIGNhc2UgJ0xBTkdVQUdFJzpcbiAgICAgICAgICAgICAgcmV0dXJuIExBTkdVQUdFX0NPTlRFWFRfSUQ7XG4gICAgICAgICAgICBjYXNlICdDVVJSRU5DWSc6XG4gICAgICAgICAgICAgIHJldHVybiBDVVJSRU5DWV9DT05URVhUX0lEO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmV0dXJuIGN0eDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRJbmplY3RlZFNlcnZpY2UoY29udGV4dDogc3RyaW5nKTogU2l0ZUNvbnRleHQ8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0PFNpdGVDb250ZXh0PGFueT4+KFxuICAgICAgdGhpcy5jb250ZXh0U2VydmljZU1hcFtjb250ZXh0XSxcbiAgICAgIG51bGxcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldE9wdGlvbkxhYmVsKGl0ZW06IGFueSwgY29udGV4dD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgc3dpdGNoIChjb250ZXh0KSB7XG4gICAgICBjYXNlIExBTkdVQUdFX0NPTlRFWFRfSUQ6XG4gICAgICAgIHJldHVybiBpdGVtLm5hdGl2ZU5hbWU7XG4gICAgICBjYXNlIENVUlJFTkNZX0NPTlRFWFRfSUQ6XG4gICAgICAgIHJldHVybiBpdGVtLnN5bWJvbCArICcgJyArIGl0ZW0uaXNvY29kZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBpdGVtLmlzb2NvZGU7XG4gICAgfVxuICB9XG59XG4iXX0=