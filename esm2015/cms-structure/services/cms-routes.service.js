import { Injectable } from '@angular/core';
import { CmsRoutesImplService } from './cms-routes-impl.service';
import * as i0 from "@angular/core";
import * as i1 from "./cms-routes-impl.service";
// Public injection token for the private implementation of the service `CmsRoutesImplService`.
// After #7070, this class should be replaced with a real implementation.
export class CmsRoutesService {
}
CmsRoutesService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CmsRoutesService_Factory() { return i0.ɵɵinject(i1.CmsRoutesImplService); }, token: CmsRoutesService, providedIn: "root" });
CmsRoutesService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
                useExisting: CmsRoutesImplService,
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXJvdXRlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLXN0cnVjdHVyZS9zZXJ2aWNlcy9jbXMtcm91dGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7O0FBRWpFLCtGQUErRjtBQUMvRix5RUFBeUU7QUFLekUsTUFBTSxPQUFnQixnQkFBZ0I7Ozs7WUFKckMsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2dCQUNsQixXQUFXLEVBQUUsb0JBQW9CO2FBQ2xDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZUNvbnRleHQgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ21zUm91dGVzSW1wbFNlcnZpY2UgfSBmcm9tICcuL2Ntcy1yb3V0ZXMtaW1wbC5zZXJ2aWNlJztcblxuLy8gUHVibGljIGluamVjdGlvbiB0b2tlbiBmb3IgdGhlIHByaXZhdGUgaW1wbGVtZW50YXRpb24gb2YgdGhlIHNlcnZpY2UgYENtc1JvdXRlc0ltcGxTZXJ2aWNlYC5cbi8vIEFmdGVyICM3MDcwLCB0aGlzIGNsYXNzIHNob3VsZCBiZSByZXBsYWNlZCB3aXRoIGEgcmVhbCBpbXBsZW1lbnRhdGlvbi5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxuICB1c2VFeGlzdGluZzogQ21zUm91dGVzSW1wbFNlcnZpY2UsXG59KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENtc1JvdXRlc1NlcnZpY2Uge1xuICBhYnN0cmFjdCBoYW5kbGVDbXNSb3V0ZXNJbkd1YXJkKFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCxcbiAgICBjb21wb25lbnRUeXBlczogc3RyaW5nW10sXG4gICAgY3VycmVudFVybDogc3RyaW5nLFxuICAgIGN1cnJlbnRQYWdlTGFiZWw6IHN0cmluZ1xuICApOiBib29sZWFuO1xufVxuIl19