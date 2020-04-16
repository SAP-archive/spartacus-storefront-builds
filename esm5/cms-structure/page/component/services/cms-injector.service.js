import { __decorate, __read, __spread } from "tslib";
import { Injectable, Injector } from '@angular/core';
import { CmsComponentData } from '../../model';
import { CmsService } from '@spartacus/core';
import { CmsMappingService } from '../../../services/cms-mapping.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/cms-mapping.service";
/**
 * Used to prepare injector for CMS components.
 *
 * Injector will take into account configured providers and provides CmsComponentData
 * for specified component's uid
 */
var CmsInjectorService = /** @class */ (function () {
    function CmsInjectorService(cmsMapping, injector) {
        this.cmsMapping = cmsMapping;
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
        var configProviders = (_b = (_a = this.cmsMapping.getComponentMapping(type)) === null || _a === void 0 ? void 0 : _a.providers) !== null && _b !== void 0 ? _b : [];
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
        { type: CmsMappingService },
        { type: Injector }
    ]; };
    CmsInjectorService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CmsInjectorService_Factory() { return new CmsInjectorService(i0.ɵɵinject(i1.CmsMappingService), i0.ɵɵinject(i0.INJECTOR)); }, token: CmsInjectorService, providedIn: "root" });
    CmsInjectorService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CmsInjectorService);
    return CmsInjectorService;
}());
export { CmsInjectorService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWluamVjdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3BhZ2UvY29tcG9uZW50L3NlcnZpY2VzL2Ntcy1pbmplY3Rvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDL0MsT0FBTyxFQUFnQixVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7O0FBRTFFOzs7OztHQUtHO0FBSUg7SUFDRSw0QkFDWSxVQUE2QixFQUM3QixRQUFrQjtRQURsQixlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQUM3QixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQzNCLENBQUM7SUFFSSx1Q0FBVSxHQUFsQixVQUNFLEdBQVcsRUFDWCxjQUF5QjtRQUV6QixPQUFPO1lBQ0wsR0FBRyxFQUFFLEdBQUc7WUFDUixLQUFLLEVBQUUsQ0FBQyxjQUFjLGFBQWQsY0FBYyxjQUFkLGNBQWMsR0FBSSxJQUFJLENBQUMsUUFBUSxDQUFDO2lCQUNyQyxHQUFHLENBQUMsVUFBVSxDQUFDO2lCQUNmLGdCQUFnQixDQUFJLEdBQUcsQ0FBQztTQUM1QixDQUFDO0lBQ0osQ0FBQztJQUVNLHdDQUFXLEdBQWxCLFVBQ0UsSUFBWSxFQUNaLEdBQVcsRUFDWCxjQUF5Qjs7UUFFekIsSUFBTSxlQUFlLGVBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLDBDQUFFLFNBQVMsbUNBQUksRUFBRSxDQUFDO1FBQzdELE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNyQixTQUFTO2dCQUNQO29CQUNFLE9BQU8sRUFBRSxnQkFBZ0I7b0JBQ3pCLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztpQkFDL0I7ZUFDRSxlQUFlLENBQ25CO1lBQ0QsTUFBTSxFQUFFLGNBQWMsYUFBZCxjQUFjLGNBQWQsY0FBYyxHQUFJLElBQUksQ0FBQyxRQUFRO1NBQ3hDLENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQWpDdUIsaUJBQWlCO2dCQUNuQixRQUFROzs7SUFIbkIsa0JBQWtCO1FBSDlCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxrQkFBa0IsQ0FvQzlCOzZCQWxERDtDQWtEQyxBQXBDRCxJQW9DQztTQXBDWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uL21vZGVsJztcbmltcG9ydCB7IENtc0NvbXBvbmVudCwgQ21zU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDbXNNYXBwaW5nU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2Ntcy1tYXBwaW5nLnNlcnZpY2UnO1xuXG4vKipcbiAqIFVzZWQgdG8gcHJlcGFyZSBpbmplY3RvciBmb3IgQ01TIGNvbXBvbmVudHMuXG4gKlxuICogSW5qZWN0b3Igd2lsbCB0YWtlIGludG8gYWNjb3VudCBjb25maWd1cmVkIHByb3ZpZGVycyBhbmQgcHJvdmlkZXMgQ21zQ29tcG9uZW50RGF0YVxuICogZm9yIHNwZWNpZmllZCBjb21wb25lbnQncyB1aWRcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENtc0luamVjdG9yU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjbXNNYXBwaW5nOiBDbXNNYXBwaW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yXG4gICkge31cblxuICBwcml2YXRlIGdldENtc0RhdGE8VCBleHRlbmRzIENtc0NvbXBvbmVudD4oXG4gICAgdWlkOiBzdHJpbmcsXG4gICAgcGFyZW50SW5qZWN0b3I/OiBJbmplY3RvclxuICApOiBDbXNDb21wb25lbnREYXRhPFQ+IHtcbiAgICByZXR1cm4ge1xuICAgICAgdWlkOiB1aWQsXG4gICAgICBkYXRhJDogKHBhcmVudEluamVjdG9yID8/IHRoaXMuaW5qZWN0b3IpXG4gICAgICAgIC5nZXQoQ21zU2VydmljZSlcbiAgICAgICAgLmdldENvbXBvbmVudERhdGE8VD4odWlkKSxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGdldEluamVjdG9yKFxuICAgIHR5cGU6IHN0cmluZyxcbiAgICB1aWQ6IHN0cmluZyxcbiAgICBwYXJlbnRJbmplY3Rvcj86IEluamVjdG9yXG4gICk6IEluamVjdG9yIHtcbiAgICBjb25zdCBjb25maWdQcm92aWRlcnMgPVxuICAgICAgdGhpcy5jbXNNYXBwaW5nLmdldENvbXBvbmVudE1hcHBpbmcodHlwZSk/LnByb3ZpZGVycyA/PyBbXTtcbiAgICByZXR1cm4gSW5qZWN0b3IuY3JlYXRlKHtcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQ21zQ29tcG9uZW50RGF0YSxcbiAgICAgICAgICB1c2VWYWx1ZTogdGhpcy5nZXRDbXNEYXRhKHVpZCksXG4gICAgICAgIH0sXG4gICAgICAgIC4uLmNvbmZpZ1Byb3ZpZGVycyxcbiAgICAgIF0sXG4gICAgICBwYXJlbnQ6IHBhcmVudEluamVjdG9yID8/IHRoaXMuaW5qZWN0b3IsXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==