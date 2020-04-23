import { __decorate, __read, __spread } from "tslib";
import { Injectable, Injector } from '@angular/core';
import { CmsComponentData } from '../../model';
import { CmsService } from '@spartacus/core';
import { CmsComponentsService } from '../../../services/cms-components.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/cms-components.service";
/**
 * Used to prepare injector for CMS components.
 *
 * Injector will take into account configured providers and provides CmsComponentData
 * for specified component's uid
 */
var CmsInjectorService = /** @class */ (function () {
    function CmsInjectorService(cmsComponentsService, injector) {
        this.cmsComponentsService = cmsComponentsService;
        this.injector = injector;
    }
    CmsInjectorService.prototype.getCmsData = function (uid, parentInjector) {
        return {
            uid: uid,
            data$: (parentInjector !== null && parentInjector !== void 0 ? parentInjector : this.injector)
                .get(CmsService)
                .getComponentData(uid),
        };
    };
    CmsInjectorService.prototype.getInjector = function (type, uid, parentInjector) {
        var _a, _b;
        var configProviders = (_b = (_a = this.cmsComponentsService.getMapping(type)) === null || _a === void 0 ? void 0 : _a.providers) !== null && _b !== void 0 ? _b : [];
        return Injector.create({
            providers: __spread([
                {
                    provide: CmsComponentData,
                    useValue: this.getCmsData(uid),
                }
            ], configProviders),
            parent: parentInjector !== null && parentInjector !== void 0 ? parentInjector : this.injector,
        });
    };
    CmsInjectorService.ctorParameters = function () { return [
        { type: CmsComponentsService },
        { type: Injector }
    ]; };
    CmsInjectorService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CmsInjectorService_Factory() { return new CmsInjectorService(i0.ɵɵinject(i1.CmsComponentsService), i0.ɵɵinject(i0.INJECTOR)); }, token: CmsInjectorService, providedIn: "root" });
    CmsInjectorService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CmsInjectorService);
    return CmsInjectorService;
}());
export { CmsInjectorService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWluamVjdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3BhZ2UvY29tcG9uZW50L3NlcnZpY2VzL2Ntcy1pbmplY3Rvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDL0MsT0FBTyxFQUFnQixVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQzs7O0FBRWhGOzs7OztHQUtHO0FBSUg7SUFDRSw0QkFDWSxvQkFBMEMsRUFDMUMsUUFBa0I7UUFEbEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQzNCLENBQUM7SUFFSSx1Q0FBVSxHQUFsQixVQUNFLEdBQVcsRUFDWCxjQUF5QjtRQUV6QixPQUFPO1lBQ0wsR0FBRyxFQUFFLEdBQUc7WUFDUixLQUFLLEVBQUUsQ0FBQyxjQUFjLGFBQWQsY0FBYyxjQUFkLGNBQWMsR0FBSSxJQUFJLENBQUMsUUFBUSxDQUFDO2lCQUNyQyxHQUFHLENBQUMsVUFBVSxDQUFDO2lCQUNmLGdCQUFnQixDQUFJLEdBQUcsQ0FBQztTQUM1QixDQUFDO0lBQ0osQ0FBQztJQUVNLHdDQUFXLEdBQWxCLFVBQ0UsSUFBWSxFQUNaLEdBQVcsRUFDWCxjQUF5Qjs7UUFFekIsSUFBTSxlQUFlLGVBQ25CLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLDBDQUFFLFNBQVMsbUNBQUksRUFBRSxDQUFDO1FBQzlELE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNyQixTQUFTO2dCQUNQO29CQUNFLE9BQU8sRUFBRSxnQkFBZ0I7b0JBQ3pCLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztpQkFDL0I7ZUFDRSxlQUFlLENBQ25CO1lBQ0QsTUFBTSxFQUFFLGNBQWMsYUFBZCxjQUFjLGNBQWQsY0FBYyxHQUFJLElBQUksQ0FBQyxRQUFRO1NBQ3hDLENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQWpDaUMsb0JBQW9CO2dCQUNoQyxRQUFROzs7SUFIbkIsa0JBQWtCO1FBSDlCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxrQkFBa0IsQ0FvQzlCOzZCQWxERDtDQWtEQyxBQXBDRCxJQW9DQztTQXBDWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uL21vZGVsJztcbmltcG9ydCB7IENtc0NvbXBvbmVudCwgQ21zU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnRzU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2Ntcy1jb21wb25lbnRzLnNlcnZpY2UnO1xuXG4vKipcbiAqIFVzZWQgdG8gcHJlcGFyZSBpbmplY3RvciBmb3IgQ01TIGNvbXBvbmVudHMuXG4gKlxuICogSW5qZWN0b3Igd2lsbCB0YWtlIGludG8gYWNjb3VudCBjb25maWd1cmVkIHByb3ZpZGVycyBhbmQgcHJvdmlkZXMgQ21zQ29tcG9uZW50RGF0YVxuICogZm9yIHNwZWNpZmllZCBjb21wb25lbnQncyB1aWRcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENtc0luamVjdG9yU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjbXNDb21wb25lbnRzU2VydmljZTogQ21zQ29tcG9uZW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3RvclxuICApIHt9XG5cbiAgcHJpdmF0ZSBnZXRDbXNEYXRhPFQgZXh0ZW5kcyBDbXNDb21wb25lbnQ+KFxuICAgIHVpZDogc3RyaW5nLFxuICAgIHBhcmVudEluamVjdG9yPzogSW5qZWN0b3JcbiAgKTogQ21zQ29tcG9uZW50RGF0YTxUPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVpZDogdWlkLFxuICAgICAgZGF0YSQ6IChwYXJlbnRJbmplY3RvciA/PyB0aGlzLmluamVjdG9yKVxuICAgICAgICAuZ2V0KENtc1NlcnZpY2UpXG4gICAgICAgIC5nZXRDb21wb25lbnREYXRhPFQ+KHVpZCksXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRJbmplY3RvcihcbiAgICB0eXBlOiBzdHJpbmcsXG4gICAgdWlkOiBzdHJpbmcsXG4gICAgcGFyZW50SW5qZWN0b3I/OiBJbmplY3RvclxuICApOiBJbmplY3RvciB7XG4gICAgY29uc3QgY29uZmlnUHJvdmlkZXJzID1cbiAgICAgIHRoaXMuY21zQ29tcG9uZW50c1NlcnZpY2UuZ2V0TWFwcGluZyh0eXBlKT8ucHJvdmlkZXJzID8/IFtdO1xuICAgIHJldHVybiBJbmplY3Rvci5jcmVhdGUoe1xuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBDbXNDb21wb25lbnREYXRhLFxuICAgICAgICAgIHVzZVZhbHVlOiB0aGlzLmdldENtc0RhdGEodWlkKSxcbiAgICAgICAgfSxcbiAgICAgICAgLi4uY29uZmlnUHJvdmlkZXJzLFxuICAgICAgXSxcbiAgICAgIHBhcmVudDogcGFyZW50SW5qZWN0b3IgPz8gdGhpcy5pbmplY3RvcixcbiAgICB9KTtcbiAgfVxufVxuIl19