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
        return this.getContext(context).pipe(map(function (ctx) { return _this.getInjectedService(ctx); }), filter(function (s) { return !!s; }));
    };
    SiteContextComponentService.prototype.getContext = function (context) {
        if (context) {
            return of(context);
        }
        else if (this.componentData) {
            return this.componentData.data$.pipe(map(function (data) { return data.context; }), map(function (ctx) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LWNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbWlzYy9zaXRlLWNvbnRleHQtc2VsZWN0b3Ivc2l0ZS1jb250ZXh0LWNvbXBvbmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sRUFDTCwrQkFBK0IsRUFDL0IsaUJBQWlCLEVBQ2pCLG1CQUFtQixFQUNuQixtQkFBbUIsRUFDbkIsV0FBVyxHQUNaLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFHeEYsSUFBTSxNQUFNO0lBQ1YsR0FBQyxtQkFBbUIsSUFBRyxVQUFVO0lBQ2pDLEdBQUMsbUJBQW1CLElBQUcsVUFBVTtPQUNsQyxDQUFDO0FBR0Y7SUFDRSxxQ0FFWSxhQUFnRSxFQUNsRSxpQkFBb0MsRUFDbEMsUUFBa0I7UUFGbEIsa0JBQWEsR0FBYixhQUFhLENBQW1EO1FBQ2xFLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDbEMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUMzQixDQUFDO0lBRUosOENBQVEsR0FBUixVQUFTLE9BQXlCO1FBQWxDLGlCQWtCQztRQWpCQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUNsQyxTQUFTLENBQUMsVUFBQyxPQUF5QixJQUFLLE9BQUEsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFoQixDQUFnQixDQUFDLEVBQzFELFNBQVMsQ0FBQyxVQUFBLEtBQUs7WUFDYixPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUMzQixTQUFTLENBQUMsVUFBQSxHQUFHOztnQkFDWCxJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUM7O29CQUNyQixLQUFtQixJQUFBLFVBQUEsU0FBQSxLQUFLLENBQUEsNEJBQUEsK0NBQUU7d0JBQXJCLElBQU0sSUFBSSxrQkFBQTt3QkFDYixTQUFTLENBQUMsSUFBSSx1QkFDVCxJQUFJLEtBQ1AsS0FBSyxFQUFFLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUNyQyxDQUFDO3FCQUNKOzs7Ozs7Ozs7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQ0g7UUFYRCxDQVdDLENBQ0YsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELG1EQUFhLEdBQWIsVUFBYyxPQUF5QjtRQUNyQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUNsQyxTQUFTLENBQUMsVUFBQyxPQUF5QixJQUFLLE9BQUEsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFuQixDQUFtQixDQUFDLENBQzlELENBQUM7SUFDSixDQUFDO0lBRUQsOENBQVEsR0FBUixVQUFTLE9BQXlCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQ2xDLEdBQUcsQ0FBQyxVQUFBLEdBQUc7WUFDTCxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVELCtDQUFTLEdBQVQsVUFBVSxLQUFhLEVBQUUsT0FBeUI7UUFDaEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7YUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNiLFNBQVMsQ0FBQyxVQUFBLE9BQU87WUFDaEIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFUyxnREFBVSxHQUFwQixVQUNFLE9BQXlCO1FBRDNCLGlCQU9DO1FBSkMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDbEMsR0FBRyxDQUFDLFVBQUMsR0FBVyxJQUFLLE9BQUEsS0FBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxFQUE1QixDQUE0QixDQUFDLEVBQ2xELE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxDQUFDLEVBQUgsQ0FBRyxDQUFDLENBQ2pCLENBQUM7SUFDSixDQUFDO0lBRVMsZ0RBQVUsR0FBcEIsVUFBcUIsT0FBeUI7UUFDNUMsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNwQjthQUFNLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUM3QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDbEMsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLE9BQU8sRUFBWixDQUFZLENBQUMsRUFDekIsR0FBRyxDQUFDLFVBQUEsR0FBRztnQkFDTCxRQUFRLEdBQUcsRUFBRTtvQkFDWCxLQUFLLFVBQVU7d0JBQ2IsT0FBTyxtQkFBbUIsQ0FBQztvQkFDN0IsS0FBSyxVQUFVO3dCQUNiLE9BQU8sbUJBQW1CLENBQUM7b0JBQzdCO3dCQUNFLE9BQU8sR0FBRyxDQUFDO2lCQUNkO1lBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVTLHdEQUFrQixHQUE1QixVQUE2QixPQUFlO1FBQzFDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQ3RCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsRUFDL0IsSUFBSSxDQUNMLENBQUM7SUFDSixDQUFDO0lBRVMsb0RBQWMsR0FBeEIsVUFBeUIsSUFBUyxFQUFFLE9BQWdCO1FBQ2xELFFBQVEsT0FBTyxFQUFFO1lBQ2YsS0FBSyxtQkFBbUI7Z0JBQ3RCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUN6QixLQUFLLG1CQUFtQjtnQkFDdEIsT0FBTyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQzFDO2dCQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUN2QjtJQUNILENBQUM7O2dCQTVGMEIsZ0JBQWdCLHVCQUR4QyxRQUFRO2dCQUVrQixpQkFBaUI7Z0JBQ3hCLFFBQVE7O0lBTG5CLDJCQUEyQjtRQUR2QyxVQUFVLEVBQUU7UUFHUixXQUFBLFFBQVEsRUFBRSxDQUFBO09BRkYsMkJBQTJCLENBZ0d2QztJQUFELGtDQUFDO0NBQUEsQUFoR0QsSUFnR0M7U0FoR1ksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDbXNTaXRlQ29udGV4dFNlbGVjdG9yQ29tcG9uZW50LFxuICBDb250ZXh0U2VydmljZU1hcCxcbiAgQ1VSUkVOQ1lfQ09OVEVYVF9JRCxcbiAgTEFOR1VBR0VfQ09OVEVYVF9JRCxcbiAgU2l0ZUNvbnRleHQsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcbmltcG9ydCB7IFNpdGVDb250ZXh0VHlwZSB9IGZyb20gJy4vc2l0ZS1jb250ZXh0Lm1vZGVsJztcblxuY29uc3QgTEFCRUxTID0ge1xuICBbTEFOR1VBR0VfQ09OVEVYVF9JRF06ICdMYW5ndWFnZScsXG4gIFtDVVJSRU5DWV9DT05URVhUX0lEXTogJ0N1cnJlbmN5Jyxcbn07XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTaXRlQ29udGV4dENvbXBvbmVudFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIHByb3RlY3RlZCBjb21wb25lbnREYXRhOiBDbXNDb21wb25lbnREYXRhPENtc1NpdGVDb250ZXh0U2VsZWN0b3JDb21wb25lbnQ+LFxuICAgIHByaXZhdGUgY29udGV4dFNlcnZpY2VNYXA6IENvbnRleHRTZXJ2aWNlTWFwLFxuICAgIHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3JcbiAgKSB7fVxuXG4gIGdldEl0ZW1zKGNvbnRleHQ/OiBTaXRlQ29udGV4dFR5cGUpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmdldFNlcnZpY2UoY29udGV4dCkucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoc2VydmljZTogU2l0ZUNvbnRleHQ8YW55PikgPT4gc2VydmljZS5nZXRBbGwoKSksXG4gICAgICBzd2l0Y2hNYXAoaXRlbXMgPT5cbiAgICAgICAgdGhpcy5nZXRDb250ZXh0KGNvbnRleHQpLnBpcGUoXG4gICAgICAgICAgc3dpdGNoTWFwKGN0eCA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtc0NvcHkgPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICAgICAgICBpdGVtc0NvcHkucHVzaCh7XG4gICAgICAgICAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgICAgICAgICBsYWJlbDogdGhpcy5nZXRPcHRpb25MYWJlbChpdGVtLCBjdHgpLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvZihpdGVtc0NvcHkpO1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgZ2V0QWN0aXZlSXRlbShjb250ZXh0PzogU2l0ZUNvbnRleHRUeXBlKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRTZXJ2aWNlKGNvbnRleHQpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHNlcnZpY2U6IFNpdGVDb250ZXh0PGFueT4pID0+IHNlcnZpY2UuZ2V0QWN0aXZlKCkpXG4gICAgKTtcbiAgfVxuXG4gIGdldExhYmVsKGNvbnRleHQ/OiBTaXRlQ29udGV4dFR5cGUpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmdldENvbnRleHQoY29udGV4dCkucGlwZShcbiAgICAgIG1hcChjdHggPT4ge1xuICAgICAgICByZXR1cm4gTEFCRUxTW2N0eF07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBzZXRBY3RpdmUodmFsdWU6IHN0cmluZywgY29udGV4dD86IFNpdGVDb250ZXh0VHlwZSk6IHZvaWQge1xuICAgIHRoaXMuZ2V0U2VydmljZShjb250ZXh0KVxuICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUoc2VydmljZSA9PiB7XG4gICAgICAgIHNlcnZpY2Uuc2V0QWN0aXZlKHZhbHVlKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFNlcnZpY2UoXG4gICAgY29udGV4dD86IFNpdGVDb250ZXh0VHlwZVxuICApOiBPYnNlcnZhYmxlPFNpdGVDb250ZXh0PGFueT4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb250ZXh0KGNvbnRleHQpLnBpcGUoXG4gICAgICBtYXAoKGN0eDogc3RyaW5nKSA9PiB0aGlzLmdldEluamVjdGVkU2VydmljZShjdHgpKSxcbiAgICAgIGZpbHRlcihzID0+ICEhcylcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldENvbnRleHQoY29udGV4dD86IFNpdGVDb250ZXh0VHlwZSk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgaWYgKGNvbnRleHQpIHtcbiAgICAgIHJldHVybiBvZihjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29tcG9uZW50RGF0YSkge1xuICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50RGF0YS5kYXRhJC5waXBlKFxuICAgICAgICBtYXAoZGF0YSA9PiBkYXRhLmNvbnRleHQpLFxuICAgICAgICBtYXAoY3R4ID0+IHtcbiAgICAgICAgICBzd2l0Y2ggKGN0eCkge1xuICAgICAgICAgICAgY2FzZSAnTEFOR1VBR0UnOlxuICAgICAgICAgICAgICByZXR1cm4gTEFOR1VBR0VfQ09OVEVYVF9JRDtcbiAgICAgICAgICAgIGNhc2UgJ0NVUlJFTkNZJzpcbiAgICAgICAgICAgICAgcmV0dXJuIENVUlJFTkNZX0NPTlRFWFRfSUQ7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZXR1cm4gY3R4O1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGdldEluamVjdGVkU2VydmljZShjb250ZXh0OiBzdHJpbmcpOiBTaXRlQ29udGV4dDxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5pbmplY3Rvci5nZXQ8U2l0ZUNvbnRleHQ8YW55Pj4oXG4gICAgICB0aGlzLmNvbnRleHRTZXJ2aWNlTWFwW2NvbnRleHRdLFxuICAgICAgbnVsbFxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0T3B0aW9uTGFiZWwoaXRlbTogYW55LCBjb250ZXh0Pzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKGNvbnRleHQpIHtcbiAgICAgIGNhc2UgTEFOR1VBR0VfQ09OVEVYVF9JRDpcbiAgICAgICAgcmV0dXJuIGl0ZW0ubmF0aXZlTmFtZTtcbiAgICAgIGNhc2UgQ1VSUkVOQ1lfQ09OVEVYVF9JRDpcbiAgICAgICAgcmV0dXJuIGl0ZW0uc3ltYm9sICsgJyAnICsgaXRlbS5pc29jb2RlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGl0ZW0uaXNvY29kZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==