/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ConfigModule, Config, CmsConfig, CmsModule as CmsCoreModule, defaultCmsModuleConfig, } from '@spartacus/core';
// guards
import { guards } from './guards/index';
import { OutletModule } from '../outlet/outlet.module';
import { OutletDirective } from '../outlet/outlet.directive';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jbXMvY21zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhELE9BQU8sRUFDTCxZQUFZLEVBQ1osTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLElBQUksYUFBYSxFQUMxQixzQkFBc0IsR0FDdkIsTUFBTSxpQkFBaUIsQ0FBQzs7QUFHekIsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFN0Q7SUFBQTtJQVl3QixDQUFDOztnQkFaeEIsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGdCQUFnQjt3QkFDaEIsWUFBWSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQzt3QkFDL0MsWUFBWTt3QkFDWixhQUFhO3FCQUNkO29CQUNELFNBQVMsbUJBQU0sTUFBTSxHQUFFLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLEVBQUM7b0JBQ25FLFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7aUJBQzNCOztJQUN1QixnQkFBQztDQUFBLEFBWnpCLElBWXlCO1NBQVosU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHtcbiAgQ29uZmlnTW9kdWxlLFxuICBDb25maWcsXG4gIENtc0NvbmZpZyxcbiAgQ21zTW9kdWxlIGFzIENtc0NvcmVNb2R1bGUsXG4gIGRlZmF1bHRDbXNNb2R1bGVDb25maWcsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbi8vIGd1YXJkc1xuaW1wb3J0IHsgZ3VhcmRzIH0gZnJvbSAnLi9ndWFyZHMvaW5kZXgnO1xuXG5pbXBvcnQgeyBPdXRsZXRNb2R1bGUgfSBmcm9tICcuLi9vdXRsZXQvb3V0bGV0Lm1vZHVsZSc7XG5pbXBvcnQgeyBPdXRsZXREaXJlY3RpdmUgfSBmcm9tICcuLi9vdXRsZXQvb3V0bGV0LmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyhkZWZhdWx0Q21zTW9kdWxlQ29uZmlnKSxcbiAgICBPdXRsZXRNb2R1bGUsXG4gICAgQ21zQ29yZU1vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbLi4uZ3VhcmRzLCB7IHByb3ZpZGU6IENtc0NvbmZpZywgdXNlRXhpc3Rpbmc6IENvbmZpZyB9XSxcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgZXhwb3J0czogW091dGxldERpcmVjdGl2ZV0sXG59KVxuZXhwb3J0IGNsYXNzIENtc01vZHVsZSB7fVxuIl19