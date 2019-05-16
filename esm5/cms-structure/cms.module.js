/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, CmsModule as CmsCoreModule, Config, ConfigModule, defaultCmsModuleConfig, } from '@spartacus/core';
import { CmsPageGuard } from './guards/index';
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
                    providers: [CmsPageGuard, { provide: CmsConfig, useExisting: Config }],
                },] }
    ];
    return CmsModule;
}());
export { CmsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1zdHJ1Y3R1cmUvY21zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUNMLFNBQVMsRUFDVCxTQUFTLElBQUksYUFBYSxFQUMxQixNQUFNLEVBQ04sWUFBWSxFQUNaLHNCQUFzQixHQUN2QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU5QztJQUFBO0lBUXdCLENBQUM7O2dCQVJ4QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQzt3QkFDL0MsYUFBYTtxQkFDZDtvQkFDRCxTQUFTLEVBQUUsQ0FBQyxZQUFZLEVBQUUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsQ0FBQztpQkFDdkU7O0lBQ3VCLGdCQUFDO0NBQUEsQUFSekIsSUFReUI7U0FBWixTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDbXNDb25maWcsXG4gIENtc01vZHVsZSBhcyBDbXNDb3JlTW9kdWxlLFxuICBDb25maWcsXG4gIENvbmZpZ01vZHVsZSxcbiAgZGVmYXVsdENtc01vZHVsZUNvbmZpZyxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENtc1BhZ2VHdWFyZCB9IGZyb20gJy4vZ3VhcmRzL2luZGV4JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyhkZWZhdWx0Q21zTW9kdWxlQ29uZmlnKSxcbiAgICBDbXNDb3JlTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtDbXNQYWdlR3VhcmQsIHsgcHJvdmlkZTogQ21zQ29uZmlnLCB1c2VFeGlzdGluZzogQ29uZmlnIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNNb2R1bGUge31cbiJdfQ==