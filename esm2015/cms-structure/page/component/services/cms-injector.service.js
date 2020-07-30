import { __decorate } from "tslib";
import { Injectable, Injector } from '@angular/core';
import { CmsComponentData } from '../../model';
import { CmsService } from '@spartacus/core';
import { CmsComponentsService } from '../../../services/cms-components.service';
import { CombinedInjector } from '../../../../shared/utils/combined-injector';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/cms-components.service";
/**
 * Used to prepare injector for CMS components.
 *
 * Injector will take into account configured providers and provides CmsComponentData
 * for specified component's uid
 */
let CmsInjectorService = class CmsInjectorService {
    constructor(cmsComponentsService, injector) {
        this.cmsComponentsService = cmsComponentsService;
        this.injector = injector;
    }
    getCmsData(uid, parentInjector) {
        return {
            uid: uid,
            data$: (parentInjector !== null && parentInjector !== void 0 ? parentInjector : this.injector)
                .get(CmsService)
                .getComponentData(uid),
        };
    }
    getInjector(type, uid, parentInjector) {
        var _a, _b;
        const configProviders = (_b = (_a = this.cmsComponentsService.getMapping(type)) === null || _a === void 0 ? void 0 : _a.providers) !== null && _b !== void 0 ? _b : [];
        const complementaryInjectors = this.cmsComponentsService.getInjectors(type);
        if (complementaryInjectors === null || complementaryInjectors === void 0 ? void 0 : complementaryInjectors.length) {
            parentInjector = new CombinedInjector(parentInjector !== null && parentInjector !== void 0 ? parentInjector : this.injector, complementaryInjectors);
        }
        return Injector.create({
            providers: [
                {
                    provide: CmsComponentData,
                    useValue: this.getCmsData(uid),
                },
                ...configProviders,
            ],
            parent: parentInjector !== null && parentInjector !== void 0 ? parentInjector : this.injector,
        });
    }
};
CmsInjectorService.ctorParameters = () => [
    { type: CmsComponentsService },
    { type: Injector }
];
CmsInjectorService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CmsInjectorService_Factory() { return new CmsInjectorService(i0.ɵɵinject(i1.CmsComponentsService), i0.ɵɵinject(i0.INJECTOR)); }, token: CmsInjectorService, providedIn: "root" });
CmsInjectorService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CmsInjectorService);
export { CmsInjectorService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWluamVjdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3BhZ2UvY29tcG9uZW50L3NlcnZpY2VzL2Ntcy1pbmplY3Rvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDL0MsT0FBTyxFQUFnQixVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNoRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7O0FBRTlFOzs7OztHQUtHO0FBSUgsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUFDN0IsWUFDWSxvQkFBMEMsRUFDMUMsUUFBa0I7UUFEbEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQzNCLENBQUM7SUFFSSxVQUFVLENBQ2hCLEdBQVcsRUFDWCxjQUF5QjtRQUV6QixPQUFPO1lBQ0wsR0FBRyxFQUFFLEdBQUc7WUFDUixLQUFLLEVBQUUsQ0FBQyxjQUFjLGFBQWQsY0FBYyxjQUFkLGNBQWMsR0FBSSxJQUFJLENBQUMsUUFBUSxDQUFDO2lCQUNyQyxHQUFHLENBQUMsVUFBVSxDQUFDO2lCQUNmLGdCQUFnQixDQUFJLEdBQUcsQ0FBQztTQUM1QixDQUFDO0lBQ0osQ0FBQztJQUVNLFdBQVcsQ0FDaEIsSUFBWSxFQUNaLEdBQVcsRUFDWCxjQUF5Qjs7UUFFekIsTUFBTSxlQUFlLGVBQ25CLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLDBDQUFFLFNBQVMsbUNBQUksRUFBRSxDQUFDO1FBRTlELE1BQU0sc0JBQXNCLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU1RSxJQUFJLHNCQUFzQixhQUF0QixzQkFBc0IsdUJBQXRCLHNCQUFzQixDQUFFLE1BQU0sRUFBRTtZQUNsQyxjQUFjLEdBQUcsSUFBSSxnQkFBZ0IsQ0FDbkMsY0FBYyxhQUFkLGNBQWMsY0FBZCxjQUFjLEdBQUksSUFBSSxDQUFDLFFBQVEsRUFDL0Isc0JBQXNCLENBQ3ZCLENBQUM7U0FDSDtRQUVELE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNyQixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGdCQUFnQjtvQkFDekIsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO2lCQUMvQjtnQkFDRCxHQUFHLGVBQWU7YUFDbkI7WUFDRCxNQUFNLEVBQUUsY0FBYyxhQUFkLGNBQWMsY0FBZCxjQUFjLEdBQUksSUFBSSxDQUFDLFFBQVE7U0FDeEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUE7O1lBNUNtQyxvQkFBb0I7WUFDaEMsUUFBUTs7O0FBSG5CLGtCQUFrQjtJQUg5QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csa0JBQWtCLENBOEM5QjtTQTlDWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uL21vZGVsJztcbmltcG9ydCB7IENtc0NvbXBvbmVudCwgQ21zU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnRzU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2Ntcy1jb21wb25lbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tYmluZWRJbmplY3RvciB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC91dGlscy9jb21iaW5lZC1pbmplY3Rvcic7XG5cbi8qKlxuICogVXNlZCB0byBwcmVwYXJlIGluamVjdG9yIGZvciBDTVMgY29tcG9uZW50cy5cbiAqXG4gKiBJbmplY3RvciB3aWxsIHRha2UgaW50byBhY2NvdW50IGNvbmZpZ3VyZWQgcHJvdmlkZXJzIGFuZCBwcm92aWRlcyBDbXNDb21wb25lbnREYXRhXG4gKiBmb3Igc3BlY2lmaWVkIGNvbXBvbmVudCdzIHVpZFxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ21zSW5qZWN0b3JTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNtc0NvbXBvbmVudHNTZXJ2aWNlOiBDbXNDb21wb25lbnRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yXG4gICkge31cblxuICBwcml2YXRlIGdldENtc0RhdGE8VCBleHRlbmRzIENtc0NvbXBvbmVudD4oXG4gICAgdWlkOiBzdHJpbmcsXG4gICAgcGFyZW50SW5qZWN0b3I/OiBJbmplY3RvclxuICApOiBDbXNDb21wb25lbnREYXRhPFQ+IHtcbiAgICByZXR1cm4ge1xuICAgICAgdWlkOiB1aWQsXG4gICAgICBkYXRhJDogKHBhcmVudEluamVjdG9yID8/IHRoaXMuaW5qZWN0b3IpXG4gICAgICAgIC5nZXQoQ21zU2VydmljZSlcbiAgICAgICAgLmdldENvbXBvbmVudERhdGE8VD4odWlkKSxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGdldEluamVjdG9yKFxuICAgIHR5cGU6IHN0cmluZyxcbiAgICB1aWQ6IHN0cmluZyxcbiAgICBwYXJlbnRJbmplY3Rvcj86IEluamVjdG9yXG4gICk6IEluamVjdG9yIHtcbiAgICBjb25zdCBjb25maWdQcm92aWRlcnMgPVxuICAgICAgdGhpcy5jbXNDb21wb25lbnRzU2VydmljZS5nZXRNYXBwaW5nKHR5cGUpPy5wcm92aWRlcnMgPz8gW107XG5cbiAgICBjb25zdCBjb21wbGVtZW50YXJ5SW5qZWN0b3JzID0gdGhpcy5jbXNDb21wb25lbnRzU2VydmljZS5nZXRJbmplY3RvcnModHlwZSk7XG5cbiAgICBpZiAoY29tcGxlbWVudGFyeUluamVjdG9ycz8ubGVuZ3RoKSB7XG4gICAgICBwYXJlbnRJbmplY3RvciA9IG5ldyBDb21iaW5lZEluamVjdG9yKFxuICAgICAgICBwYXJlbnRJbmplY3RvciA/PyB0aGlzLmluamVjdG9yLFxuICAgICAgICBjb21wbGVtZW50YXJ5SW5qZWN0b3JzXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBJbmplY3Rvci5jcmVhdGUoe1xuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBDbXNDb21wb25lbnREYXRhLFxuICAgICAgICAgIHVzZVZhbHVlOiB0aGlzLmdldENtc0RhdGEodWlkKSxcbiAgICAgICAgfSxcbiAgICAgICAgLi4uY29uZmlnUHJvdmlkZXJzLFxuICAgICAgXSxcbiAgICAgIHBhcmVudDogcGFyZW50SW5qZWN0b3IgPz8gdGhpcy5pbmplY3RvcixcbiAgICB9KTtcbiAgfVxufVxuIl19