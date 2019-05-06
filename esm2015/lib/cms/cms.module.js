/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CmsConfig, CmsModule as CmsCoreModule, Config, ConfigModule, defaultCmsModuleConfig, } from '@spartacus/core';
import { OutletDirective } from '../../cms-structure/outlet/outlet.directive';
import { OutletModule } from '../../cms-structure/outlet/outlet.module';
// guards
import { guards } from './guards/index';
export class CmsModule {
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
                providers: [...guards, { provide: CmsConfig, useExisting: Config }],
                declarations: [],
                exports: [OutletDirective],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jbXMvY21zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUNMLFNBQVMsRUFDVCxTQUFTLElBQUksYUFBYSxFQUMxQixNQUFNLEVBQ04sWUFBWSxFQUNaLHNCQUFzQixHQUN2QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMENBQTBDLENBQUM7O0FBRXhFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQWN4QyxNQUFNLE9BQU8sU0FBUzs7O1lBWnJCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixnQkFBZ0I7b0JBQ2hCLFlBQVksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUM7b0JBQy9DLFlBQVk7b0JBQ1osYUFBYTtpQkFDZDtnQkFDRCxTQUFTLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxDQUFDO2dCQUNuRSxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO2FBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ21zQ29uZmlnLFxuICBDbXNNb2R1bGUgYXMgQ21zQ29yZU1vZHVsZSxcbiAgQ29uZmlnLFxuICBDb25maWdNb2R1bGUsXG4gIGRlZmF1bHRDbXNNb2R1bGVDb25maWcsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPdXRsZXREaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9jbXMtc3RydWN0dXJlL291dGxldC9vdXRsZXQuZGlyZWN0aXZlJztcbmltcG9ydCB7IE91dGxldE1vZHVsZSB9IGZyb20gJy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvb3V0bGV0L291dGxldC5tb2R1bGUnO1xuLy8gZ3VhcmRzXG5pbXBvcnQgeyBndWFyZHMgfSBmcm9tICcuL2d1YXJkcy9pbmRleCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyhkZWZhdWx0Q21zTW9kdWxlQ29uZmlnKSxcbiAgICBPdXRsZXRNb2R1bGUsXG4gICAgQ21zQ29yZU1vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbLi4uZ3VhcmRzLCB7IHByb3ZpZGU6IENtc0NvbmZpZywgdXNlRXhpc3Rpbmc6IENvbmZpZyB9XSxcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgZXhwb3J0czogW091dGxldERpcmVjdGl2ZV0sXG59KVxuZXhwb3J0IGNsYXNzIENtc01vZHVsZSB7fVxuIl19