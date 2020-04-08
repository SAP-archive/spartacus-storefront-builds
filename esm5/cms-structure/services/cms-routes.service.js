import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { CmsRoutesImplService } from './cms-routes-impl.service';
import * as i0 from "@angular/core";
import * as i1 from "./cms-routes-impl.service";
// Public injection token for the private implementation of the service `CmsRoutesImplService`.
// After #7070, this class should be replaced with a real implementation.
var CmsRoutesService = /** @class */ (function () {
    function CmsRoutesService() {
    }
    CmsRoutesService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CmsRoutesService_Factory() { return i0.ɵɵinject(i1.CmsRoutesImplService); }, token: CmsRoutesService, providedIn: "root" });
    CmsRoutesService = __decorate([
        Injectable({
            providedIn: 'root',
            useExisting: CmsRoutesImplService,
        })
    ], CmsRoutesService);
    return CmsRoutesService;
}());
export { CmsRoutesService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXJvdXRlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLXN0cnVjdHVyZS9zZXJ2aWNlcy9jbXMtcm91dGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7OztBQUVqRSwrRkFBK0Y7QUFDL0YseUVBQXlFO0FBS3pFO0lBQUE7S0FPQzs7SUFQcUIsZ0JBQWdCO1FBSnJDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7U0FDbEMsQ0FBQztPQUNvQixnQkFBZ0IsQ0FPckM7MkJBakJEO0NBaUJDLEFBUEQsSUFPQztTQVBxQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDbXNSb3V0ZXNJbXBsU2VydmljZSB9IGZyb20gJy4vY21zLXJvdXRlcy1pbXBsLnNlcnZpY2UnO1xuXG4vLyBQdWJsaWMgaW5qZWN0aW9uIHRva2VuIGZvciB0aGUgcHJpdmF0ZSBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgc2VydmljZSBgQ21zUm91dGVzSW1wbFNlcnZpY2VgLlxuLy8gQWZ0ZXIgIzcwNzAsIHRoaXMgY2xhc3Mgc2hvdWxkIGJlIHJlcGxhY2VkIHdpdGggYSByZWFsIGltcGxlbWVudGF0aW9uLlxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG4gIHVzZUV4aXN0aW5nOiBDbXNSb3V0ZXNJbXBsU2VydmljZSxcbn0pXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ21zUm91dGVzU2VydmljZSB7XG4gIGFic3RyYWN0IGhhbmRsZUNtc1JvdXRlc0luR3VhcmQoXG4gICAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LFxuICAgIGNvbXBvbmVudFR5cGVzOiBzdHJpbmdbXSxcbiAgICBjdXJyZW50VXJsOiBzdHJpbmcsXG4gICAgY3VycmVudFBhZ2VMYWJlbDogc3RyaW5nXG4gICk6IGJvb2xlYW47XG59XG4iXX0=