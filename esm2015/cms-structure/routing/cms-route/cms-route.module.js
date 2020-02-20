import { __decorate } from "tslib";
import { NgModule, APP_INITIALIZER, Injector } from '@angular/core';
import { addCmsRoute } from './add-cms-route';
const ɵ0 = addCmsRoute;
let CmsRouteModule = class CmsRouteModule {
};
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
export { CmsRouteModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXJvdXRlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvcm91dGluZy9jbXMtcm91dGUvY21zLXJvdXRlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztXQVE1QixXQUFXO0FBSTdCLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7Q0FBRyxDQUFBO0FBQWpCLGNBQWM7SUFWMUIsUUFBUSxDQUFDO1FBQ1IsU0FBUyxFQUFFO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGVBQWU7Z0JBQ3hCLEtBQUssRUFBRSxJQUFJO2dCQUNYLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFDaEIsVUFBVSxJQUFhO2FBQ3hCO1NBQ0Y7S0FDRixDQUFDO0dBQ1csY0FBYyxDQUFHO1NBQWpCLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQVBQX0lOSVRJQUxJWkVSLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYWRkQ21zUm91dGUgfSBmcm9tICcuL2FkZC1jbXMtcm91dGUnO1xuXG5ATmdNb2R1bGUoe1xuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgIGRlcHM6IFtJbmplY3Rvcl0sXG4gICAgICB1c2VGYWN0b3J5OiBhZGRDbXNSb3V0ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNSb3V0ZU1vZHVsZSB7fVxuIl19