import { Injectable, Injector } from '@angular/core';
import { CmsComponentData } from '../../model/cms-component-data';
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
export class CmsInjectorService {
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
}
CmsInjectorService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CmsInjectorService_Factory() { return new CmsInjectorService(i0.ɵɵinject(i1.CmsComponentsService), i0.ɵɵinject(i0.INJECTOR)); }, token: CmsInjectorService, providedIn: "root" });
CmsInjectorService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
CmsInjectorService.ctorParameters = () => [
    { type: CmsComponentsService },
    { type: Injector }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWluamVjdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtc3RydWN0dXJlL3BhZ2UvY29tcG9uZW50L3NlcnZpY2VzL2Ntcy1pbmplY3Rvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBZ0IsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMENBQTBDLENBQUM7OztBQUVoRjs7Ozs7R0FLRztBQUlILE1BQU0sT0FBTyxrQkFBa0I7SUFDN0IsWUFDWSxvQkFBMEMsRUFDMUMsUUFBa0I7UUFEbEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQzNCLENBQUM7SUFFSSxVQUFVLENBQ2hCLEdBQVcsRUFDWCxjQUF5QjtRQUV6QixPQUFPO1lBQ0wsR0FBRyxFQUFFLEdBQUc7WUFDUixLQUFLLEVBQUUsQ0FBQyxjQUFjLGFBQWQsY0FBYyxjQUFkLGNBQWMsR0FBSSxJQUFJLENBQUMsUUFBUSxDQUFDO2lCQUNyQyxHQUFHLENBQUMsVUFBVSxDQUFDO2lCQUNmLGdCQUFnQixDQUFJLEdBQUcsQ0FBQztTQUM1QixDQUFDO0lBQ0osQ0FBQztJQUVNLFdBQVcsQ0FDaEIsSUFBWSxFQUNaLEdBQVcsRUFDWCxjQUF5Qjs7UUFFekIsTUFBTSxlQUFlLGVBQ25CLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLDBDQUFFLFNBQVMsbUNBQUksRUFBRSxDQUFDO1FBRTlELE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNyQixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGdCQUFnQjtvQkFDekIsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO2lCQUMvQjtnQkFDRCxHQUFHLGVBQWU7YUFDbkI7WUFDRCxNQUFNLEVBQUUsY0FBYyxhQUFkLGNBQWMsY0FBZCxjQUFjLEdBQUksSUFBSSxDQUFDLFFBQVE7U0FDeEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztZQXZDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQVZRLG9CQUFvQjtZQUhSLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnQsIENtc1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9jbXMtY29tcG9uZW50cy5zZXJ2aWNlJztcblxuLyoqXG4gKiBVc2VkIHRvIHByZXBhcmUgaW5qZWN0b3IgZm9yIENNUyBjb21wb25lbnRzLlxuICpcbiAqIEluamVjdG9yIHdpbGwgdGFrZSBpbnRvIGFjY291bnQgY29uZmlndXJlZCBwcm92aWRlcnMgYW5kIHByb3ZpZGVzIENtc0NvbXBvbmVudERhdGFcbiAqIGZvciBzcGVjaWZpZWQgY29tcG9uZW50J3MgdWlkXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNJbmplY3RvclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY21zQ29tcG9uZW50c1NlcnZpY2U6IENtc0NvbXBvbmVudHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3JcbiAgKSB7fVxuXG4gIHByaXZhdGUgZ2V0Q21zRGF0YTxUIGV4dGVuZHMgQ21zQ29tcG9uZW50PihcbiAgICB1aWQ6IHN0cmluZyxcbiAgICBwYXJlbnRJbmplY3Rvcj86IEluamVjdG9yXG4gICk6IENtc0NvbXBvbmVudERhdGE8VD4ge1xuICAgIHJldHVybiB7XG4gICAgICB1aWQ6IHVpZCxcbiAgICAgIGRhdGEkOiAocGFyZW50SW5qZWN0b3IgPz8gdGhpcy5pbmplY3RvcilcbiAgICAgICAgLmdldChDbXNTZXJ2aWNlKVxuICAgICAgICAuZ2V0Q29tcG9uZW50RGF0YTxUPih1aWQpLFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgZ2V0SW5qZWN0b3IoXG4gICAgdHlwZTogc3RyaW5nLFxuICAgIHVpZDogc3RyaW5nLFxuICAgIHBhcmVudEluamVjdG9yPzogSW5qZWN0b3JcbiAgKTogSW5qZWN0b3Ige1xuICAgIGNvbnN0IGNvbmZpZ1Byb3ZpZGVycyA9XG4gICAgICB0aGlzLmNtc0NvbXBvbmVudHNTZXJ2aWNlLmdldE1hcHBpbmcodHlwZSk/LnByb3ZpZGVycyA/PyBbXTtcblxuICAgIHJldHVybiBJbmplY3Rvci5jcmVhdGUoe1xuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBDbXNDb21wb25lbnREYXRhLFxuICAgICAgICAgIHVzZVZhbHVlOiB0aGlzLmdldENtc0RhdGEodWlkKSxcbiAgICAgICAgfSxcbiAgICAgICAgLi4uY29uZmlnUHJvdmlkZXJzLFxuICAgICAgXSxcbiAgICAgIHBhcmVudDogcGFyZW50SW5qZWN0b3IgPz8gdGhpcy5pbmplY3RvcixcbiAgICB9KTtcbiAgfVxufVxuIl19