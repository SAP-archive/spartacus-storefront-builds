/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CmsConfig, CmsModule as CmsCoreModule, Config, ConfigModule, defaultCmsModuleConfig, } from '@spartacus/core';
import { OutletDirective } from '../../cms-structure/outlet/outlet.directive';
import { OutletModule } from '../../cms-structure/outlet/outlet.module';
// guards
import { guards } from './guards/index';
var CmsModule = /** @class */ (function () {
    function CmsModule() {
    }
    CmsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        HttpClientModule,
                        ConfigModule.withConfig(defaultCmsModuleConfig),
                        OutletModule,
                        CmsCoreModule,
                    ],
                    providers: tslib_1.__spread(guards, [{ provide: CmsConfig, useExisting: Config }]),
                    declarations: [],
                    exports: [OutletDirective],
                },] }
    ];
    return CmsModule;
}());
export { CmsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jbXMvY21zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFDTCxTQUFTLEVBQ1QsU0FBUyxJQUFJLGFBQWEsRUFDMUIsTUFBTSxFQUNOLFlBQVksRUFDWixzQkFBc0IsR0FDdkIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDOUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBDQUEwQyxDQUFDOztBQUV4RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEM7SUFBQTtJQVl3QixDQUFDOztnQkFaeEIsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGdCQUFnQjt3QkFDaEIsWUFBWSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQzt3QkFDL0MsWUFBWTt3QkFDWixhQUFhO3FCQUNkO29CQUNELFNBQVMsbUJBQU0sTUFBTSxHQUFFLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLEVBQUM7b0JBQ25FLFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7aUJBQzNCOztJQUN1QixnQkFBQztDQUFBLEFBWnpCLElBWXlCO1NBQVosU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENtc0NvbmZpZyxcbiAgQ21zTW9kdWxlIGFzIENtc0NvcmVNb2R1bGUsXG4gIENvbmZpZyxcbiAgQ29uZmlnTW9kdWxlLFxuICBkZWZhdWx0Q21zTW9kdWxlQ29uZmlnLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT3V0bGV0RGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vY21zLXN0cnVjdHVyZS9vdXRsZXQvb3V0bGV0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBPdXRsZXRNb2R1bGUgfSBmcm9tICcuLi8uLi9jbXMtc3RydWN0dXJlL291dGxldC9vdXRsZXQubW9kdWxlJztcbi8vIGd1YXJkc1xuaW1wb3J0IHsgZ3VhcmRzIH0gZnJvbSAnLi9ndWFyZHMvaW5kZXgnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoZGVmYXVsdENtc01vZHVsZUNvbmZpZyksXG4gICAgT3V0bGV0TW9kdWxlLFxuICAgIENtc0NvcmVNb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogWy4uLmd1YXJkcywgeyBwcm92aWRlOiBDbXNDb25maWcsIHVzZUV4aXN0aW5nOiBDb25maWcgfV0sXG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGV4cG9ydHM6IFtPdXRsZXREaXJlY3RpdmVdLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNNb2R1bGUge31cbiJdfQ==