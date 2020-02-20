import { __decorate } from "tslib";
import { NgModule, APP_INITIALIZER, Injector } from '@angular/core';
import { addCmsRoute } from './add-cms-route';
var ɵ0 = addCmsRoute;
var CmsRouteModule = /** @class */ (function () {
    function CmsRouteModule() {
    }
    CmsRouteModule = __decorate([
        NgModule({
            providers: [
                {
                    provide: APP_INITIALIZER,
                    multi: true,
                    deps: [Injector],
                    useFactory: ɵ0,
                },
            ],
        })
    ], CmsRouteModule);
    return CmsRouteModule;
}());
export { CmsRouteModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXJvdXRlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcm91dGluZy9jbXMtcm91dGUvY21zLXJvdXRlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztTQVE1QixXQUFXO0FBSTdCO0lBQUE7SUFBNkIsQ0FBQztJQUFqQixjQUFjO1FBVjFCLFFBQVEsQ0FBQztZQUNSLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsZUFBZTtvQkFDeEIsS0FBSyxFQUFFLElBQUk7b0JBQ1gsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDO29CQUNoQixVQUFVLElBQWE7aUJBQ3hCO2FBQ0Y7U0FDRixDQUFDO09BQ1csY0FBYyxDQUFHO0lBQUQscUJBQUM7Q0FBQSxBQUE5QixJQUE4QjtTQUFqQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIEFQUF9JTklUSUFMSVpFUiwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFkZENtc1JvdXRlIH0gZnJvbSAnLi9hZGQtY21zLXJvdXRlJztcblxuQE5nTW9kdWxlKHtcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgICBkZXBzOiBbSW5qZWN0b3JdLFxuICAgICAgdXNlRmFjdG9yeTogYWRkQ21zUm91dGUsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ21zUm91dGVNb2R1bGUge31cbiJdfQ==