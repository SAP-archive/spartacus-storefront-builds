import { Injectable } from '@angular/core';
import { CmsService } from '@spartacus/core';
import { defer } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CmsComponentsService } from '../../../services/cms-components.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../services/cms-components.service";
import * as i2 from "@spartacus/core";
/**
 * Provides data for `CmsComponentData`. This is used while component is injected
 * dynamically, so that the component implementation can access the data.
 *
 * The data is resolved from dynamic data (CMS api) as well as static configured data.
 */
export class ComponentDataProvider {
    constructor(componentsService, cmsService) {
        this.componentsService = componentsService;
        this.cmsService = cmsService;
    }
    /**
     * Return the component data for a component given by the `uid`.
     *
     * If the `type` is provided, static component data (if available) is
     * merged into the component data. The static data is complemented and
     * overridden with data retrieved from the cms service.
     */
    get(uid, type) {
        return defer(() => {
            let staticComponentData;
            if (type) {
                staticComponentData = this.componentsService.getStaticData(type);
            }
            if (staticComponentData) {
                return this.cmsService.getComponentData(uid).pipe(map((data) => (Object.assign(Object.assign({}, staticComponentData), data))), startWith(staticComponentData));
            }
            else {
                return this.cmsService.getComponentData(uid);
            }
        });
    }
}
ComponentDataProvider.ɵprov = i0.ɵɵdefineInjectable({ factory: function ComponentDataProvider_Factory() { return new ComponentDataProvider(i0.ɵɵinject(i1.CmsComponentsService), i0.ɵɵinject(i2.CmsService)); }, token: ComponentDataProvider, providedIn: "root" });
ComponentDataProvider.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
ComponentDataProvider.ctorParameters = () => [
    { type: CmsComponentsService },
    { type: CmsService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWRhdGEucHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtc3RydWN0dXJlL3BhZ2UvY29tcG9uZW50L3NlcnZpY2VzL2NvbXBvbmVudC1kYXRhLnByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxLQUFLLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDekMsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQzs7OztBQUVoRjs7Ozs7R0FLRztBQUlILE1BQU0sT0FBTyxxQkFBcUI7SUFDaEMsWUFDWSxpQkFBdUMsRUFDdkMsVUFBc0I7UUFEdEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFzQjtRQUN2QyxlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQy9CLENBQUM7SUFFSjs7Ozs7O09BTUc7SUFDSCxHQUFHLENBQUksR0FBVyxFQUFFLElBQWE7UUFDL0IsT0FBTyxLQUFLLENBQUMsR0FBRyxFQUFFO1lBQ2hCLElBQUksbUJBQXNCLENBQUM7WUFFM0IsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBSSxJQUFJLENBQUMsQ0FBQzthQUNyRTtZQUVELElBQUksbUJBQW1CLEVBQUU7Z0JBQ3ZCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQ2xELEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsaUNBQ1QsbUJBQW1CLEdBQ25CLElBQUksRUFDUCxDQUFDLEVBQ0gsU0FBUyxDQUFDLG1CQUFtQixDQUFDLENBQy9CLENBQUM7YUFDSDtpQkFBTTtnQkFDTCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUksR0FBRyxDQUFDLENBQUM7YUFDakQ7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7WUFwQ0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFWUSxvQkFBb0I7WUFIcEIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgZGVmZXIsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3RhcnRXaXRoIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9jbXMtY29tcG9uZW50cy5zZXJ2aWNlJztcblxuLyoqXG4gKiBQcm92aWRlcyBkYXRhIGZvciBgQ21zQ29tcG9uZW50RGF0YWAuIFRoaXMgaXMgdXNlZCB3aGlsZSBjb21wb25lbnQgaXMgaW5qZWN0ZWRcbiAqIGR5bmFtaWNhbGx5LCBzbyB0aGF0IHRoZSBjb21wb25lbnQgaW1wbGVtZW50YXRpb24gY2FuIGFjY2VzcyB0aGUgZGF0YS5cbiAqXG4gKiBUaGUgZGF0YSBpcyByZXNvbHZlZCBmcm9tIGR5bmFtaWMgZGF0YSAoQ01TIGFwaSkgYXMgd2VsbCBhcyBzdGF0aWMgY29uZmlndXJlZCBkYXRhLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50RGF0YVByb3ZpZGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNvbXBvbmVudHNTZXJ2aWNlOiBDbXNDb21wb25lbnRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY21zU2VydmljZTogQ21zU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgY29tcG9uZW50IGRhdGEgZm9yIGEgY29tcG9uZW50IGdpdmVuIGJ5IHRoZSBgdWlkYC5cbiAgICpcbiAgICogSWYgdGhlIGB0eXBlYCBpcyBwcm92aWRlZCwgc3RhdGljIGNvbXBvbmVudCBkYXRhIChpZiBhdmFpbGFibGUpIGlzXG4gICAqIG1lcmdlZCBpbnRvIHRoZSBjb21wb25lbnQgZGF0YS4gVGhlIHN0YXRpYyBkYXRhIGlzIGNvbXBsZW1lbnRlZCBhbmRcbiAgICogb3ZlcnJpZGRlbiB3aXRoIGRhdGEgcmV0cmlldmVkIGZyb20gdGhlIGNtcyBzZXJ2aWNlLlxuICAgKi9cbiAgZ2V0PFQ+KHVpZDogc3RyaW5nLCB0eXBlPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIGRlZmVyKCgpID0+IHtcbiAgICAgIGxldCBzdGF0aWNDb21wb25lbnREYXRhOiBUO1xuXG4gICAgICBpZiAodHlwZSkge1xuICAgICAgICBzdGF0aWNDb21wb25lbnREYXRhID0gdGhpcy5jb21wb25lbnRzU2VydmljZS5nZXRTdGF0aWNEYXRhPFQ+KHR5cGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGljQ29tcG9uZW50RGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jbXNTZXJ2aWNlLmdldENvbXBvbmVudERhdGE8VD4odWlkKS5waXBlKFxuICAgICAgICAgIG1hcCgoZGF0YSkgPT4gKHtcbiAgICAgICAgICAgIC4uLnN0YXRpY0NvbXBvbmVudERhdGEsXG4gICAgICAgICAgICAuLi5kYXRhLFxuICAgICAgICAgIH0pKSxcbiAgICAgICAgICBzdGFydFdpdGgoc3RhdGljQ29tcG9uZW50RGF0YSlcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNtc1NlcnZpY2UuZ2V0Q29tcG9uZW50RGF0YTxUPih1aWQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=