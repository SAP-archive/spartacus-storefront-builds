import { Injectable, Injector } from '@angular/core';
import { CmsComponentsService } from '../../../services/cms-components.service';
import { CmsComponentData } from '../../model/cms-component-data';
import { ComponentDataProvider } from './component-data.provider';
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
    getInjector(type, uid, parentInjector) {
        var _a, _b;
        const configProviders = (_b = (_a = this.cmsComponentsService.getMapping(type)) === null || _a === void 0 ? void 0 : _a.providers) !== null && _b !== void 0 ? _b : [];
        return Injector.create({
            providers: [
                {
                    provide: CmsComponentData,
                    useFactory: (dataProvider) => ({
                        uid,
                        data$: dataProvider.get(uid, type),
                    }),
                    deps: [ComponentDataProvider],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWluamVjdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtc3RydWN0dXJlL3BhZ2UvY29tcG9uZW50L3NlcnZpY2VzL2Ntcy1pbmplY3Rvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7QUFFbEU7Ozs7O0dBS0c7QUFJSCxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCLFlBQ1ksb0JBQTBDLEVBQzFDLFFBQWtCO1FBRGxCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUMzQixDQUFDO0lBRUcsV0FBVyxDQUNoQixJQUFZLEVBQ1osR0FBVyxFQUNYLGNBQXlCOztRQUV6QixNQUFNLGVBQWUsZUFDbkIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsMENBQUUsU0FBUyxtQ0FBSSxFQUFFLENBQUM7UUFDOUQsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3JCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsZ0JBQWdCO29CQUN6QixVQUFVLEVBQUUsQ0FBQyxZQUFtQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO3dCQUNwRCxHQUFHO3dCQUNILEtBQUssRUFBRSxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUM7cUJBQ25DLENBQUM7b0JBQ0YsSUFBSSxFQUFFLENBQUMscUJBQXFCLENBQUM7aUJBQzlCO2dCQUNELEdBQUcsZUFBZTthQUNuQjtZQUNELE1BQU0sRUFBRSxjQUFjLGFBQWQsY0FBYyxjQUFkLGNBQWMsR0FBSSxJQUFJLENBQUMsUUFBUTtTQUN4QyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O1lBOUJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBWlEsb0JBQW9CO1lBRFIsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnRzU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2Ntcy1jb21wb25lbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5pbXBvcnQgeyBDb21wb25lbnREYXRhUHJvdmlkZXIgfSBmcm9tICcuL2NvbXBvbmVudC1kYXRhLnByb3ZpZGVyJztcblxuLyoqXG4gKiBVc2VkIHRvIHByZXBhcmUgaW5qZWN0b3IgZm9yIENNUyBjb21wb25lbnRzLlxuICpcbiAqIEluamVjdG9yIHdpbGwgdGFrZSBpbnRvIGFjY291bnQgY29uZmlndXJlZCBwcm92aWRlcnMgYW5kIHByb3ZpZGVzIENtc0NvbXBvbmVudERhdGFcbiAqIGZvciBzcGVjaWZpZWQgY29tcG9uZW50J3MgdWlkXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNJbmplY3RvclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY21zQ29tcG9uZW50c1NlcnZpY2U6IENtc0NvbXBvbmVudHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3JcbiAgKSB7fVxuXG4gIHB1YmxpYyBnZXRJbmplY3RvcihcbiAgICB0eXBlOiBzdHJpbmcsXG4gICAgdWlkOiBzdHJpbmcsXG4gICAgcGFyZW50SW5qZWN0b3I/OiBJbmplY3RvclxuICApOiBJbmplY3RvciB7XG4gICAgY29uc3QgY29uZmlnUHJvdmlkZXJzID1cbiAgICAgIHRoaXMuY21zQ29tcG9uZW50c1NlcnZpY2UuZ2V0TWFwcGluZyh0eXBlKT8ucHJvdmlkZXJzID8/IFtdO1xuICAgIHJldHVybiBJbmplY3Rvci5jcmVhdGUoe1xuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBDbXNDb21wb25lbnREYXRhLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IChkYXRhUHJvdmlkZXI6IENvbXBvbmVudERhdGFQcm92aWRlcikgPT4gKHtcbiAgICAgICAgICAgIHVpZCxcbiAgICAgICAgICAgIGRhdGEkOiBkYXRhUHJvdmlkZXIuZ2V0KHVpZCwgdHlwZSksXG4gICAgICAgICAgfSksXG4gICAgICAgICAgZGVwczogW0NvbXBvbmVudERhdGFQcm92aWRlcl0sXG4gICAgICAgIH0sXG4gICAgICAgIC4uLmNvbmZpZ1Byb3ZpZGVycyxcbiAgICAgIF0sXG4gICAgICBwYXJlbnQ6IHBhcmVudEluamVjdG9yID8/IHRoaXMuaW5qZWN0b3IsXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==