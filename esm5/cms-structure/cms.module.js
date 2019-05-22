/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, CmsModule as CmsCoreModule, Config, ConfigModule, defaultCmsModuleConfig, } from '@spartacus/core';
var CmsModule = /** @class */ (function () {
    function CmsModule() {
    }
    CmsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        ConfigModule.withConfig(defaultCmsModuleConfig),
                        CmsCoreModule,
                    ],
                    providers: [{ provide: CmsConfig, useExisting: Config }],
                },] }
    ];
    return CmsModule;
}());
export { CmsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvY21zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUNMLFNBQVMsRUFDVCxTQUFTLElBQUksYUFBYSxFQUMxQixNQUFNLEVBQ04sWUFBWSxFQUNaLHNCQUFzQixHQUN2QixNQUFNLGlCQUFpQixDQUFDO0FBRXpCO0lBQUE7SUFRd0IsQ0FBQzs7Z0JBUnhCLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDO3dCQUMvQyxhQUFhO3FCQUNkO29CQUNELFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLENBQUM7aUJBQ3pEOztJQUN1QixnQkFBQztDQUFBLEFBUnpCLElBUXlCO1NBQVosU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ21zQ29uZmlnLFxuICBDbXNNb2R1bGUgYXMgQ21zQ29yZU1vZHVsZSxcbiAgQ29uZmlnLFxuICBDb25maWdNb2R1bGUsXG4gIGRlZmF1bHRDbXNNb2R1bGVDb25maWcsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoZGVmYXVsdENtc01vZHVsZUNvbmZpZyksXG4gICAgQ21zQ29yZU1vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBDbXNDb25maWcsIHVzZUV4aXN0aW5nOiBDb25maWcgfV0sXG59KVxuZXhwb3J0IGNsYXNzIENtc01vZHVsZSB7fVxuIl19