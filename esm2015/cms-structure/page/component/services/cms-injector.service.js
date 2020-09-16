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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWluamVjdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtc3RydWN0dXJlL3BhZ2UvY29tcG9uZW50L3NlcnZpY2VzL2Ntcy1pbmplY3Rvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMvQyxPQUFPLEVBQWdCLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDOzs7QUFFOUU7Ozs7O0dBS0c7QUFJSCxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCLFlBQ1ksb0JBQTBDLEVBQzFDLFFBQWtCO1FBRGxCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUMzQixDQUFDO0lBRUksVUFBVSxDQUNoQixHQUFXLEVBQ1gsY0FBeUI7UUFFekIsT0FBTztZQUNMLEdBQUcsRUFBRSxHQUFHO1lBQ1IsS0FBSyxFQUFFLENBQUMsY0FBYyxhQUFkLGNBQWMsY0FBZCxjQUFjLEdBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQztpQkFDckMsR0FBRyxDQUFDLFVBQVUsQ0FBQztpQkFDZixnQkFBZ0IsQ0FBSSxHQUFHLENBQUM7U0FDNUIsQ0FBQztJQUNKLENBQUM7SUFFTSxXQUFXLENBQ2hCLElBQVksRUFDWixHQUFXLEVBQ1gsY0FBeUI7O1FBRXpCLE1BQU0sZUFBZSxlQUNuQixJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQywwQ0FBRSxTQUFTLG1DQUFJLEVBQUUsQ0FBQztRQUU5RCxNQUFNLHNCQUFzQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFNUUsSUFBSSxzQkFBc0IsYUFBdEIsc0JBQXNCLHVCQUF0QixzQkFBc0IsQ0FBRSxNQUFNLEVBQUU7WUFDbEMsY0FBYyxHQUFHLElBQUksZ0JBQWdCLENBQ25DLGNBQWMsYUFBZCxjQUFjLGNBQWQsY0FBYyxHQUFJLElBQUksQ0FBQyxRQUFRLEVBQy9CLHNCQUFzQixDQUN2QixDQUFDO1NBQ0g7UUFFRCxPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDckIsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxnQkFBZ0I7b0JBQ3pCLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztpQkFDL0I7Z0JBQ0QsR0FBRyxlQUFlO2FBQ25CO1lBQ0QsTUFBTSxFQUFFLGNBQWMsYUFBZCxjQUFjLGNBQWQsY0FBYyxHQUFJLElBQUksQ0FBQyxRQUFRO1NBQ3hDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7WUFoREYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFYUSxvQkFBb0I7WUFIUixRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi9tb2RlbCc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnQsIENtc1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9jbXMtY29tcG9uZW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IENvbWJpbmVkSW5qZWN0b3IgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvdXRpbHMvY29tYmluZWQtaW5qZWN0b3InO1xuXG4vKipcbiAqIFVzZWQgdG8gcHJlcGFyZSBpbmplY3RvciBmb3IgQ01TIGNvbXBvbmVudHMuXG4gKlxuICogSW5qZWN0b3Igd2lsbCB0YWtlIGludG8gYWNjb3VudCBjb25maWd1cmVkIHByb3ZpZGVycyBhbmQgcHJvdmlkZXMgQ21zQ29tcG9uZW50RGF0YVxuICogZm9yIHNwZWNpZmllZCBjb21wb25lbnQncyB1aWRcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENtc0luamVjdG9yU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjbXNDb21wb25lbnRzU2VydmljZTogQ21zQ29tcG9uZW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3RvclxuICApIHt9XG5cbiAgcHJpdmF0ZSBnZXRDbXNEYXRhPFQgZXh0ZW5kcyBDbXNDb21wb25lbnQ+KFxuICAgIHVpZDogc3RyaW5nLFxuICAgIHBhcmVudEluamVjdG9yPzogSW5qZWN0b3JcbiAgKTogQ21zQ29tcG9uZW50RGF0YTxUPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVpZDogdWlkLFxuICAgICAgZGF0YSQ6IChwYXJlbnRJbmplY3RvciA/PyB0aGlzLmluamVjdG9yKVxuICAgICAgICAuZ2V0KENtc1NlcnZpY2UpXG4gICAgICAgIC5nZXRDb21wb25lbnREYXRhPFQ+KHVpZCksXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRJbmplY3RvcihcbiAgICB0eXBlOiBzdHJpbmcsXG4gICAgdWlkOiBzdHJpbmcsXG4gICAgcGFyZW50SW5qZWN0b3I/OiBJbmplY3RvclxuICApOiBJbmplY3RvciB7XG4gICAgY29uc3QgY29uZmlnUHJvdmlkZXJzID1cbiAgICAgIHRoaXMuY21zQ29tcG9uZW50c1NlcnZpY2UuZ2V0TWFwcGluZyh0eXBlKT8ucHJvdmlkZXJzID8/IFtdO1xuXG4gICAgY29uc3QgY29tcGxlbWVudGFyeUluamVjdG9ycyA9IHRoaXMuY21zQ29tcG9uZW50c1NlcnZpY2UuZ2V0SW5qZWN0b3JzKHR5cGUpO1xuXG4gICAgaWYgKGNvbXBsZW1lbnRhcnlJbmplY3RvcnM/Lmxlbmd0aCkge1xuICAgICAgcGFyZW50SW5qZWN0b3IgPSBuZXcgQ29tYmluZWRJbmplY3RvcihcbiAgICAgICAgcGFyZW50SW5qZWN0b3IgPz8gdGhpcy5pbmplY3RvcixcbiAgICAgICAgY29tcGxlbWVudGFyeUluamVjdG9yc1xuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gSW5qZWN0b3IuY3JlYXRlKHtcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQ21zQ29tcG9uZW50RGF0YSxcbiAgICAgICAgICB1c2VWYWx1ZTogdGhpcy5nZXRDbXNEYXRhKHVpZCksXG4gICAgICAgIH0sXG4gICAgICAgIC4uLmNvbmZpZ1Byb3ZpZGVycyxcbiAgICAgIF0sXG4gICAgICBwYXJlbnQ6IHBhcmVudEluamVjdG9yID8/IHRoaXMuaW5qZWN0b3IsXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==