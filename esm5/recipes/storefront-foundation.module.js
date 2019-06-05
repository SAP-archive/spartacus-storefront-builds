/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { AuthModule, ConfigModule, I18nModule, provideConfigFromMetaTags, SiteContextModule, StateModule, } from '@spartacus/core';
import { RoutingModule } from '../cms-structure/routing/routing.module';
import { LayoutModule } from '../layout/layout.module';
var StorefrontFoundationModule = /** @class */ (function () {
    function StorefrontFoundationModule() {
    }
    StorefrontFoundationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        StateModule,
                        AuthModule.forRoot(),
                        ConfigModule.forRoot(),
                        RoutingModule,
                        I18nModule.forRoot(),
                        SiteContextModule.forRoot(),
                        LayoutModule,
                    ],
                    providers: tslib_1.__spread(provideConfigFromMetaTags()),
                },] }
    ];
    return StorefrontFoundationModule;
}());
export { StorefrontFoundationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmVmcm9udC1mb3VuZGF0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInJlY2lwZXMvc3RvcmVmcm9udC1mb3VuZGF0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUNMLFVBQVUsRUFDVixZQUFZLEVBQ1osVUFBVSxFQUNWLHlCQUF5QixFQUN6QixpQkFBaUIsRUFDakIsV0FBVyxHQUNaLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV2RDtJQUFBO0lBY3lDLENBQUM7O2dCQWR6QyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFdBQVc7d0JBQ1gsVUFBVSxDQUFDLE9BQU8sRUFBRTt3QkFDcEIsWUFBWSxDQUFDLE9BQU8sRUFBRTt3QkFDdEIsYUFBYTt3QkFDYixVQUFVLENBQUMsT0FBTyxFQUFFO3dCQUVwQixpQkFBaUIsQ0FBQyxPQUFPLEVBQUU7d0JBRTNCLFlBQVk7cUJBQ2I7b0JBQ0QsU0FBUyxtQkFBTSx5QkFBeUIsRUFBRSxDQUFDO2lCQUM1Qzs7SUFDd0MsaUNBQUM7Q0FBQSxBQWQxQyxJQWMwQztTQUE3QiwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQXV0aE1vZHVsZSxcbiAgQ29uZmlnTW9kdWxlLFxuICBJMThuTW9kdWxlLFxuICBwcm92aWRlQ29uZmlnRnJvbU1ldGFUYWdzLFxuICBTaXRlQ29udGV4dE1vZHVsZSxcbiAgU3RhdGVNb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi4vY21zLXN0cnVjdHVyZS9yb3V0aW5nL3JvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IExheW91dE1vZHVsZSB9IGZyb20gJy4uL2xheW91dC9sYXlvdXQubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFN0YXRlTW9kdWxlLFxuICAgIEF1dGhNb2R1bGUuZm9yUm9vdCgpLFxuICAgIENvbmZpZ01vZHVsZS5mb3JSb290KCksXG4gICAgUm91dGluZ01vZHVsZSxcbiAgICBJMThuTW9kdWxlLmZvclJvb3QoKSxcblxuICAgIFNpdGVDb250ZXh0TW9kdWxlLmZvclJvb3QoKSxcblxuICAgIExheW91dE1vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbLi4ucHJvdmlkZUNvbmZpZ0Zyb21NZXRhVGFncygpXSxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVmcm9udEZvdW5kYXRpb25Nb2R1bGUge31cbiJdfQ==