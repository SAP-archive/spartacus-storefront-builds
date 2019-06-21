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
            function (data) { return data.context; })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LWNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbWlzYy9zaXRlLWNvbnRleHQtc2VsZWN0b3Ivc2l0ZS1jb250ZXh0LWNvbXBvbmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBRUwsaUJBQWlCLEVBQ2pCLG1CQUFtQixFQUNuQixtQkFBbUIsR0FFcEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQzs7SUFHbEYsTUFBTTtJQUNWLEdBQUMsbUJBQW1CLElBQUcsVUFBVTtJQUNqQyxHQUFDLG1CQUFtQixJQUFHLFVBQVU7T0FDbEM7QUFFRDtJQUVFLHFDQUVZLGFBQWdFLEVBQ2xFLGlCQUFvQyxFQUNsQyxRQUFrQjtRQUZsQixrQkFBYSxHQUFiLGFBQWEsQ0FBbUQ7UUFDbEUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNsQyxhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQzNCLENBQUM7Ozs7O0lBRUosOENBQVE7Ozs7SUFBUixVQUFTLE9BQXlCO1FBQWxDLGlCQWtCQztRQWpCQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUNsQyxTQUFTOzs7O1FBQUMsVUFBQyxPQUF5QixJQUFLLE9BQUEsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFoQixDQUFnQixFQUFDLEVBQzFELFNBQVM7Ozs7UUFBQyxVQUFBLEtBQUs7WUFDYixPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUMzQixTQUFTOzs7O1lBQUMsVUFBQSxHQUFHOzs7b0JBQ0wsU0FBUyxHQUFHLEVBQUU7O29CQUNwQixLQUFtQixJQUFBLFVBQUEsaUJBQUEsS0FBSyxDQUFBLDRCQUFBLCtDQUFFO3dCQUFyQixJQUFNLElBQUksa0JBQUE7d0JBQ2IsU0FBUyxDQUFDLElBQUksc0JBQ1QsSUFBSSxJQUNQLEtBQUssRUFBRSxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsSUFDckMsQ0FBQztxQkFDSjs7Ozs7Ozs7O2dCQUNELE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsRUFBQyxDQUNIO1FBWEQsQ0FXQyxFQUNGLENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsbURBQWE7Ozs7SUFBYixVQUFjLE9BQXlCO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQ2xDLFNBQVM7Ozs7UUFBQyxVQUFDLE9BQXlCLElBQUssT0FBQSxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQW5CLENBQW1CLEVBQUMsQ0FDOUQsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsOENBQVE7Ozs7SUFBUixVQUFTLE9BQXlCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQ2xDLEdBQUc7Ozs7UUFBQyxVQUFBLEdBQUc7WUFDTCxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRUQsK0NBQVM7Ozs7O0lBQVQsVUFBVSxLQUFhLEVBQUUsT0FBeUI7UUFDaEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7YUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNiLFNBQVM7Ozs7UUFBQyxVQUFBLE9BQU87WUFDaEIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7OztJQUVTLGdEQUFVOzs7OztJQUFwQixVQUNFLE9BQXlCO1FBRDNCLGlCQU9DO1FBSkMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDbEMsR0FBRzs7OztRQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxFQUE1QixDQUE0QixFQUFDLEVBQ3hDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FDaEIsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVTLGdEQUFVOzs7OztJQUFwQixVQUFxQixPQUF5QjtRQUM1QyxJQUFJLE9BQU8sRUFBRTtZQUNYLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3BCO2FBQU0sSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQzdCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7WUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxPQUFPLEVBQVosQ0FBWSxFQUFDLENBQUMsQ0FBQztTQUNqRTtJQUNILENBQUM7Ozs7OztJQUVTLHdEQUFrQjs7Ozs7SUFBNUIsVUFBNkIsT0FBZTtRQUMxQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUN0QixJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEVBQy9CLElBQUksQ0FDTCxDQUFDO0lBQ0osQ0FBQzs7Ozs7OztJQUVTLG9EQUFjOzs7Ozs7SUFBeEIsVUFBeUIsSUFBUyxFQUFFLE9BQWdCO1FBQ2xELFFBQVEsT0FBTyxFQUFFO1lBQ2YsS0FBSyxtQkFBbUI7Z0JBQ3RCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUN6QixLQUFLLG1CQUFtQjtnQkFDdEIsT0FBTyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQzFDO2dCQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUN2QjtJQUNILENBQUM7O2dCQXBGRixVQUFVOzs7O2dCQVJGLGdCQUFnQix1QkFXcEIsUUFBUTtnQkFsQlgsaUJBQWlCO2dCQUhFLFFBQVE7O0lBdUc3QixrQ0FBQztDQUFBLEFBckZELElBcUZDO1NBcEZZLDJCQUEyQjs7Ozs7O0lBRXBDLG9EQUMwRTs7Ozs7SUFDMUUsd0RBQTRDOzs7OztJQUM1QywrQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENtc1NpdGVDb250ZXh0U2VsZWN0b3JDb21wb25lbnQsXG4gIENvbnRleHRTZXJ2aWNlTWFwLFxuICBDVVJSRU5DWV9DT05URVhUX0lELFxuICBMQU5HVUFHRV9DT05URVhUX0lELFxuICBTaXRlQ29udGV4dCxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9jbXMtY29tcG9uZW50LWRhdGEnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRUeXBlIH0gZnJvbSAnLi9zaXRlLWNvbnRleHQubW9kZWwnO1xuXG5jb25zdCBMQUJFTFMgPSB7XG4gIFtMQU5HVUFHRV9DT05URVhUX0lEXTogJ0xhbmd1YWdlJyxcbiAgW0NVUlJFTkNZX0NPTlRFWFRfSURdOiAnQ3VycmVuY3knLFxufTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNpdGVDb250ZXh0Q29tcG9uZW50U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgcHJvdGVjdGVkIGNvbXBvbmVudERhdGE6IENtc0NvbXBvbmVudERhdGE8Q21zU2l0ZUNvbnRleHRTZWxlY3RvckNvbXBvbmVudD4sXG4gICAgcHJpdmF0ZSBjb250ZXh0U2VydmljZU1hcDogQ29udGV4dFNlcnZpY2VNYXAsXG4gICAgcHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3RvclxuICApIHt9XG5cbiAgZ2V0SXRlbXMoY29udGV4dD86IFNpdGVDb250ZXh0VHlwZSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U2VydmljZShjb250ZXh0KS5waXBlKFxuICAgICAgc3dpdGNoTWFwKChzZXJ2aWNlOiBTaXRlQ29udGV4dDxhbnk+KSA9PiBzZXJ2aWNlLmdldEFsbCgpKSxcbiAgICAgIHN3aXRjaE1hcChpdGVtcyA9PlxuICAgICAgICB0aGlzLmdldENvbnRleHQoY29udGV4dCkucGlwZShcbiAgICAgICAgICBzd2l0Y2hNYXAoY3R4ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zQ29weSA9IFtdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgICAgICAgIGl0ZW1zQ29weS5wdXNoKHtcbiAgICAgICAgICAgICAgICAuLi5pdGVtLFxuICAgICAgICAgICAgICAgIGxhYmVsOiB0aGlzLmdldE9wdGlvbkxhYmVsKGl0ZW0sIGN0eCksXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9mKGl0ZW1zQ29weSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBnZXRBY3RpdmVJdGVtKGNvbnRleHQ/OiBTaXRlQ29udGV4dFR5cGUpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmdldFNlcnZpY2UoY29udGV4dCkucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoc2VydmljZTogU2l0ZUNvbnRleHQ8YW55PikgPT4gc2VydmljZS5nZXRBY3RpdmUoKSlcbiAgICApO1xuICB9XG5cbiAgZ2V0TGFiZWwoY29udGV4dD86IFNpdGVDb250ZXh0VHlwZSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29udGV4dChjb250ZXh0KS5waXBlKFxuICAgICAgbWFwKGN0eCA9PiB7XG4gICAgICAgIHJldHVybiBMQUJFTFNbY3R4XTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHNldEFjdGl2ZSh2YWx1ZTogc3RyaW5nLCBjb250ZXh0PzogU2l0ZUNvbnRleHRUeXBlKTogdm9pZCB7XG4gICAgdGhpcy5nZXRTZXJ2aWNlKGNvbnRleHQpXG4gICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgLnN1YnNjcmliZShzZXJ2aWNlID0+IHtcbiAgICAgICAgc2VydmljZS5zZXRBY3RpdmUodmFsdWUpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0U2VydmljZShcbiAgICBjb250ZXh0PzogU2l0ZUNvbnRleHRUeXBlXG4gICk6IE9ic2VydmFibGU8U2l0ZUNvbnRleHQ8YW55Pj4ge1xuICAgIHJldHVybiB0aGlzLmdldENvbnRleHQoY29udGV4dCkucGlwZShcbiAgICAgIG1hcChjdHggPT4gdGhpcy5nZXRJbmplY3RlZFNlcnZpY2UoY3R4KSksXG4gICAgICBmaWx0ZXIoQm9vbGVhbilcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldENvbnRleHQoY29udGV4dD86IFNpdGVDb250ZXh0VHlwZSk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgaWYgKGNvbnRleHQpIHtcbiAgICAgIHJldHVybiBvZihjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29tcG9uZW50RGF0YSkge1xuICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50RGF0YS5kYXRhJC5waXBlKG1hcChkYXRhID0+IGRhdGEuY29udGV4dCkpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRJbmplY3RlZFNlcnZpY2UoY29udGV4dDogc3RyaW5nKTogU2l0ZUNvbnRleHQ8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0PFNpdGVDb250ZXh0PGFueT4+KFxuICAgICAgdGhpcy5jb250ZXh0U2VydmljZU1hcFtjb250ZXh0XSxcbiAgICAgIG51bGxcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldE9wdGlvbkxhYmVsKGl0ZW06IGFueSwgY29udGV4dD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgc3dpdGNoIChjb250ZXh0KSB7XG4gICAgICBjYXNlIExBTkdVQUdFX0NPTlRFWFRfSUQ6XG4gICAgICAgIHJldHVybiBpdGVtLm5hdGl2ZU5hbWU7XG4gICAgICBjYXNlIENVUlJFTkNZX0NPTlRFWFRfSUQ6XG4gICAgICAgIHJldHVybiBpdGVtLnN5bWJvbCArICcgJyArIGl0ZW0uaXNvY29kZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBpdGVtLmlzb2NvZGU7XG4gICAgfVxuICB9XG59XG4iXX0=