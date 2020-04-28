var _a;
import { __assign, __decorate, __param, __values } from "tslib";
import { Injectable, Injector, Optional } from '@angular/core';
import { CmsSiteContextSelectorComponent, ContextServiceMap, CURRENCY_CONTEXT_ID, LANGUAGE_CONTEXT_ID, SiteContext, } from '@spartacus/core';
import { of } from 'rxjs';
import { filter, map, switchMap, take } from 'rxjs/operators';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
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
    SiteContextComponentService.prototype.getItems = function (context) {
        var _this = this;
        return this.getService(context).pipe(switchMap(function (service) { return service.getAll(); }), switchMap(function (items) {
            return _this.getContext(context).pipe(switchMap(function (ctx) {
                var e_1, _a;
                var itemsCopy = [];
                try {
                    for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                        var item = items_1_1.value;
                        itemsCopy.push(__assign(__assign({}, item), { label: _this.getOptionLabel(item, ctx) }));
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
            }));
        }));
    };
    SiteContextComponentService.prototype.getActiveItem = function (context) {
        return this.getService(context).pipe(switchMap(function (service) { return service.getActive(); }));
    };
    SiteContextComponentService.prototype.getLabel = function (context) {
        return this.getContext(context).pipe(map(function (ctx) {
            return LABELS[ctx];
        }));
    };
    SiteContextComponentService.prototype.setActive = function (value, context) {
        this.getService(context)
            .pipe(take(1))
            .subscribe(function (service) {
            service.setActive(value);
        });
    };
    SiteContextComponentService.prototype.getService = function (context) {
        var _this = this;
        return this.getContext(context).pipe(map(function (ctx) { return (ctx ? _this.getInjectedService(ctx) : undefined); }), filter(function (s) { return !!s; }));
    };
    SiteContextComponentService.prototype.getContext = function (context) {
        if (context) {
            return of(context);
        }
        else if (this.componentData) {
            return this.componentData.data$.pipe(map(function (data) { return data === null || data === void 0 ? void 0 : data.context; }), map(function (ctx) {
                switch (ctx) {
                    case 'LANGUAGE':
                        return LANGUAGE_CONTEXT_ID;
                    case 'CURRENCY':
                        return CURRENCY_CONTEXT_ID;
                    default:
                        return ctx;
                }
            }));
        }
    };
    SiteContextComponentService.prototype.getInjectedService = function (context) {
        return this.injector.get(this.contextServiceMap[context], null);
    };
    SiteContextComponentService.prototype.getOptionLabel = function (item, context) {
        switch (context) {
            case LANGUAGE_CONTEXT_ID:
                return item.nativeName;
            case CURRENCY_CONTEXT_ID:
                return item.symbol + ' ' + item.isocode;
            default:
                return item.isocode;
        }
    };
    SiteContextComponentService.ctorParameters = function () { return [
        { type: CmsComponentData, decorators: [{ type: Optional }] },
        { type: ContextServiceMap },
        { type: Injector }
    ]; };
    SiteContextComponentService = __decorate([
        Injectable(),
        __param(0, Optional())
    ], SiteContextComponentService);
    return SiteContextComponentService;
}());
export { SiteContextComponentService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LWNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbWlzYy9zaXRlLWNvbnRleHQtc2VsZWN0b3Ivc2l0ZS1jb250ZXh0LWNvbXBvbmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sRUFDTCwrQkFBK0IsRUFDL0IsaUJBQWlCLEVBQ2pCLG1CQUFtQixFQUNuQixtQkFBbUIsRUFDbkIsV0FBVyxHQUNaLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFHeEYsSUFBTSxNQUFNO0lBQ1YsR0FBQyxtQkFBbUIsSUFBRyxVQUFVO0lBQ2pDLEdBQUMsbUJBQW1CLElBQUcsVUFBVTtPQUNsQyxDQUFDO0FBR0Y7SUFDRSxxQ0FFWSxhQUFnRSxFQUNsRSxpQkFBb0MsRUFDbEMsUUFBa0I7UUFGbEIsa0JBQWEsR0FBYixhQUFhLENBQW1EO1FBQ2xFLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDbEMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUMzQixDQUFDO0lBRUosOENBQVEsR0FBUixVQUFTLE9BQXlCO1FBQWxDLGlCQWtCQztRQWpCQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUNsQyxTQUFTLENBQUMsVUFBQyxPQUF5QixJQUFLLE9BQUEsT0FBTyxDQUFDLE1BQU0sRUFB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LENBQUMsR0FBRyxDQUN0QixJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEVBQy9CLElBQUksQ0FDTCxDQUFDO0lBQ0osQ0FBQztJQUVTLG9EQUFjLEdBQXhCLFVBQXlCLElBQVMsRUFBRSxPQUFnQjtRQUNsRCxRQUFRLE9BQU8sRUFBRTtZQUNmLEtBQUssbUJBQW1CO2dCQUN0QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDekIsS0FBSyxtQkFBbUI7Z0JBQ3RCLE9BQU8sSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUMxQztnQkFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDdkI7SUFDSCxDQUFDOztnQkE1RjBCLGdCQUFnQix1QkFEeEMsUUFBUTtnQkFFa0IsaUJBQWlCO2dCQUN4QixRQUFROztJQUxuQiwyQkFBMkI7UUFEdkMsVUFBVSxFQUFFO1FBR1IsV0FBQSxRQUFRLEVBQUUsQ0FBQTtPQUZGLDJCQUEyQixDQWdHdkM7SUFBRCxrQ0FBQztDQUFBLEFBaEdELElBZ0dDO1NBaEdZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ21zU2l0ZUNvbnRleHRTZWxlY3RvckNvbXBvbmVudCxcbiAgQ29udGV4dFNlcnZpY2VNYXAsXG4gIENVUlJFTkNZX0NPTlRFWFRfSUQsXG4gIExBTkdVQUdFX0NPTlRFWFRfSUQsXG4gIFNpdGVDb250ZXh0LFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dFR5cGUgfSBmcm9tICcuL3NpdGUtY29udGV4dC5tb2RlbCc7XG5cbmNvbnN0IExBQkVMUyA9IHtcbiAgW0xBTkdVQUdFX0NPTlRFWFRfSURdOiAnTGFuZ3VhZ2UnLFxuICBbQ1VSUkVOQ1lfQ09OVEVYVF9JRF06ICdDdXJyZW5jeScsXG59O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2l0ZUNvbnRleHRDb21wb25lbnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKClcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50RGF0YTogQ21zQ29tcG9uZW50RGF0YTxDbXNTaXRlQ29udGV4dFNlbGVjdG9yQ29tcG9uZW50PixcbiAgICBwcml2YXRlIGNvbnRleHRTZXJ2aWNlTWFwOiBDb250ZXh0U2VydmljZU1hcCxcbiAgICBwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yXG4gICkge31cblxuICBnZXRJdGVtcyhjb250ZXh0PzogU2l0ZUNvbnRleHRUeXBlKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRTZXJ2aWNlKGNvbnRleHQpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHNlcnZpY2U6IFNpdGVDb250ZXh0PGFueT4pID0+IHNlcnZpY2UuZ2V0QWxsKCkpLFxuICAgICAgc3dpdGNoTWFwKChpdGVtcykgPT5cbiAgICAgICAgdGhpcy5nZXRDb250ZXh0KGNvbnRleHQpLnBpcGUoXG4gICAgICAgICAgc3dpdGNoTWFwKChjdHgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zQ29weSA9IFtdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgICAgICAgIGl0ZW1zQ29weS5wdXNoKHtcbiAgICAgICAgICAgICAgICAuLi5pdGVtLFxuICAgICAgICAgICAgICAgIGxhYmVsOiB0aGlzLmdldE9wdGlvbkxhYmVsKGl0ZW0sIGN0eCksXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9mKGl0ZW1zQ29weSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBnZXRBY3RpdmVJdGVtKGNvbnRleHQ/OiBTaXRlQ29udGV4dFR5cGUpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmdldFNlcnZpY2UoY29udGV4dCkucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoc2VydmljZTogU2l0ZUNvbnRleHQ8YW55PikgPT4gc2VydmljZS5nZXRBY3RpdmUoKSlcbiAgICApO1xuICB9XG5cbiAgZ2V0TGFiZWwoY29udGV4dD86IFNpdGVDb250ZXh0VHlwZSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29udGV4dChjb250ZXh0KS5waXBlKFxuICAgICAgbWFwKChjdHgpID0+IHtcbiAgICAgICAgcmV0dXJuIExBQkVMU1tjdHhdO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgc2V0QWN0aXZlKHZhbHVlOiBzdHJpbmcsIGNvbnRleHQ/OiBTaXRlQ29udGV4dFR5cGUpOiB2b2lkIHtcbiAgICB0aGlzLmdldFNlcnZpY2UoY29udGV4dClcbiAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAuc3Vic2NyaWJlKChzZXJ2aWNlKSA9PiB7XG4gICAgICAgIHNlcnZpY2Uuc2V0QWN0aXZlKHZhbHVlKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFNlcnZpY2UoXG4gICAgY29udGV4dD86IFNpdGVDb250ZXh0VHlwZVxuICApOiBPYnNlcnZhYmxlPFNpdGVDb250ZXh0PGFueT4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb250ZXh0KGNvbnRleHQpLnBpcGUoXG4gICAgICBtYXAoKGN0eDogc3RyaW5nKSA9PiAoY3R4ID8gdGhpcy5nZXRJbmplY3RlZFNlcnZpY2UoY3R4KSA6IHVuZGVmaW5lZCkpLFxuICAgICAgZmlsdGVyKChzKSA9PiAhIXMpXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRDb250ZXh0KGNvbnRleHQ/OiBTaXRlQ29udGV4dFR5cGUpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIGlmIChjb250ZXh0KSB7XG4gICAgICByZXR1cm4gb2YoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbXBvbmVudERhdGEpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudERhdGEuZGF0YSQucGlwZShcbiAgICAgICAgbWFwKChkYXRhKSA9PiBkYXRhPy5jb250ZXh0KSxcbiAgICAgICAgbWFwKChjdHgpID0+IHtcbiAgICAgICAgICBzd2l0Y2ggKGN0eCkge1xuICAgICAgICAgICAgY2FzZSAnTEFOR1VBR0UnOlxuICAgICAgICAgICAgICByZXR1cm4gTEFOR1VBR0VfQ09OVEVYVF9JRDtcbiAgICAgICAgICAgIGNhc2UgJ0NVUlJFTkNZJzpcbiAgICAgICAgICAgICAgcmV0dXJuIENVUlJFTkNZX0NPTlRFWFRfSUQ7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZXR1cm4gY3R4O1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGdldEluamVjdGVkU2VydmljZShjb250ZXh0OiBzdHJpbmcpOiBTaXRlQ29udGV4dDxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5pbmplY3Rvci5nZXQ8U2l0ZUNvbnRleHQ8YW55Pj4oXG4gICAgICB0aGlzLmNvbnRleHRTZXJ2aWNlTWFwW2NvbnRleHRdLFxuICAgICAgbnVsbFxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0T3B0aW9uTGFiZWwoaXRlbTogYW55LCBjb250ZXh0Pzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKGNvbnRleHQpIHtcbiAgICAgIGNhc2UgTEFOR1VBR0VfQ09OVEVYVF9JRDpcbiAgICAgICAgcmV0dXJuIGl0ZW0ubmF0aXZlTmFtZTtcbiAgICAgIGNhc2UgQ1VSUkVOQ1lfQ09OVEVYVF9JRDpcbiAgICAgICAgcmV0dXJuIGl0ZW0uc3ltYm9sICsgJyAnICsgaXRlbS5pc29jb2RlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGl0ZW0uaXNvY29kZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==