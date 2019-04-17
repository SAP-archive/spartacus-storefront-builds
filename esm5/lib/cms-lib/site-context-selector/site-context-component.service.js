var _a;
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
    Object.defineProperty(SiteContextComponentService.prototype, "items$", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            return this.service$.pipe(switchMap(function (service) { return service.getAll(); }), switchMap(function (items) {
                return _this.context$.pipe(switchMap(function (context) {
                    items.forEach(function (item) {
                        return (item.label = _this.getOptionLabel(item, context));
                    });
                    return of(items);
                }));
            }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SiteContextComponentService.prototype, "activeItem$", {
        get: /**
         * @return {?}
         */
        function () {
            return this.service$.pipe(switchMap(function (service) { return service.getActive(); }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SiteContextComponentService.prototype, "label$", {
        get: /**
         * @return {?}
         */
        function () {
            return this.componentData.data$.pipe(map(function (data) {
                return LABELS[data.context];
            }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SiteContextComponentService.prototype, "active", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.service$.pipe(take(1)).subscribe(function (service) {
                service.setActive(value);
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SiteContextComponentService.prototype, "service$", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            var _this = this;
            return this.context$.pipe(map(function (context) { return _this.getService(context); }), filter(Boolean));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SiteContextComponentService.prototype, "context$", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return this.componentData.data$.pipe(map(function (data) { return data.context; }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @protected
     * @param {?} context
     * @return {?}
     */
    SiteContextComponentService.prototype.getService = /**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LWNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL2Ntcy1saWIvc2l0ZS1jb250ZXh0LXNlbGVjdG9yL3NpdGUtY29udGV4dC1jb21wb25lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUN4RixPQUFPLEVBRUwsaUJBQWlCLEVBQ2pCLG1CQUFtQixFQUNuQixtQkFBbUIsR0FFcEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7SUFFeEQsTUFBTTtJQUNWLEdBQUMsbUJBQW1CLElBQUcsVUFBVTtJQUNqQyxHQUFDLG1CQUFtQixJQUFHLFVBQVU7T0FDbEM7QUFFRDtJQUVFLHFDQUVZLGFBQWdFLEVBQ2xFLGlCQUFvQyxFQUNsQyxRQUFrQjtRQUZsQixrQkFBYSxHQUFiLGFBQWEsQ0FBbUQ7UUFDbEUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNsQyxhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQzNCLENBQUM7SUFFSixzQkFBSSwrQ0FBTTs7OztRQUFWO1lBQUEsaUJBY0M7WUFiQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN2QixTQUFTLENBQUMsVUFBQyxPQUF5QixJQUFLLE9BQUEsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFoQixDQUFnQixDQUFDLEVBQzFELFNBQVMsQ0FBQyxVQUFBLEtBQUs7Z0JBQ2IsT0FBQSxL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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcbmltcG9ydCB7XG4gIENtc1NpdGVDb250ZXh0U2VsZWN0b3JDb21wb25lbnQsXG4gIENvbnRleHRTZXJ2aWNlTWFwLFxuICBDVVJSRU5DWV9DT05URVhUX0lELFxuICBMQU5HVUFHRV9DT05URVhUX0lELFxuICBTaXRlQ29udGV4dCxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGZpbHRlciwgc3dpdGNoTWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5jb25zdCBMQUJFTFMgPSB7XG4gIFtMQU5HVUFHRV9DT05URVhUX0lEXTogJ0xhbmd1YWdlJyxcbiAgW0NVUlJFTkNZX0NPTlRFWFRfSURdOiAnQ3VycmVuY3knLFxufTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNpdGVDb250ZXh0Q29tcG9uZW50U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgcHJvdGVjdGVkIGNvbXBvbmVudERhdGE6IENtc0NvbXBvbmVudERhdGE8Q21zU2l0ZUNvbnRleHRTZWxlY3RvckNvbXBvbmVudD4sXG4gICAgcHJpdmF0ZSBjb250ZXh0U2VydmljZU1hcDogQ29udGV4dFNlcnZpY2VNYXAsXG4gICAgcHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3RvclxuICApIHt9XG5cbiAgZ2V0IGl0ZW1zJCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnNlcnZpY2UkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHNlcnZpY2U6IFNpdGVDb250ZXh0PGFueT4pID0+IHNlcnZpY2UuZ2V0QWxsKCkpLFxuICAgICAgc3dpdGNoTWFwKGl0ZW1zID0+XG4gICAgICAgIHRoaXMuY29udGV4dCQucGlwZShcbiAgICAgICAgICBzd2l0Y2hNYXAoY29udGV4dCA9PiB7XG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKGl0ZW0ubGFiZWwgPSB0aGlzLmdldE9wdGlvbkxhYmVsKGl0ZW0sIGNvbnRleHQpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG9mKGl0ZW1zKTtcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGdldCBhY3RpdmVJdGVtJCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnNlcnZpY2UkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHNlcnZpY2U6IFNpdGVDb250ZXh0PGFueT4pID0+IHNlcnZpY2UuZ2V0QWN0aXZlKCkpXG4gICAgKTtcbiAgfVxuXG4gIGdldCBsYWJlbCQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnREYXRhLmRhdGEkLnBpcGUoXG4gICAgICBtYXAoZGF0YSA9PiB7XG4gICAgICAgIHJldHVybiBMQUJFTFNbZGF0YS5jb250ZXh0XTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHNldCBhY3RpdmUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuc2VydmljZSQucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoc2VydmljZSA9PiB7XG4gICAgICBzZXJ2aWNlLnNldEFjdGl2ZSh2YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IHNlcnZpY2UkKCk6IE9ic2VydmFibGU8U2l0ZUNvbnRleHQ8YW55Pj4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQkLnBpcGUoXG4gICAgICBtYXAoY29udGV4dCA9PiB0aGlzLmdldFNlcnZpY2UoY29udGV4dCkpLFxuICAgICAgZmlsdGVyKEJvb2xlYW4pXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgY29udGV4dCQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnREYXRhLmRhdGEkLnBpcGUobWFwKGRhdGEgPT4gZGF0YS5jb250ZXh0KSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0U2VydmljZShjb250ZXh0OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5pbmplY3Rvci5nZXQ8U2l0ZUNvbnRleHQ8YW55Pj4oXG4gICAgICB0aGlzLmNvbnRleHRTZXJ2aWNlTWFwW2NvbnRleHRdLFxuICAgICAgbnVsbFxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0T3B0aW9uTGFiZWwoaXRlbTogYW55LCBjb250ZXh0Pzogc3RyaW5nKSB7XG4gICAgc3dpdGNoIChjb250ZXh0KSB7XG4gICAgICBjYXNlIExBTkdVQUdFX0NPTlRFWFRfSUQ6XG4gICAgICAgIHJldHVybiBpdGVtLm5hdGl2ZU5hbWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBDVVJSRU5DWV9DT05URVhUX0lEOlxuICAgICAgICByZXR1cm4gaXRlbS5zeW1ib2wgKyAnICcgKyBpdGVtLmlzb2NvZGU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGl0ZW0uaXNvY29kZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==