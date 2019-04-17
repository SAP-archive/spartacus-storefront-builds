/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ConfigModule, Config, CmsConfig, CmsModule as CmsCoreModule, defaultCmsModuleConfig, } from '@spartacus/core';
// guards
import { guards } from './guards/index';
import { OutletModule } from '../outlet/outlet.module';
import { OutletDirective } from '../outlet/outlet.directive';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9jbXMvY21zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQsT0FBTyxFQUNMLFlBQVksRUFDWixNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsSUFBSSxhQUFhLEVBQzFCLHNCQUFzQixHQUN2QixNQUFNLGlCQUFpQixDQUFDOztBQUd6QixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQWM3RCxNQUFNLE9BQU8sU0FBUzs7O1lBWnJCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixnQkFBZ0I7b0JBQ2hCLFlBQVksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUM7b0JBQy9DLFlBQVk7b0JBQ1osYUFBYTtpQkFDZDtnQkFDRCxTQUFTLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxDQUFDO2dCQUNuRSxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO2FBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQge1xuICBDb25maWdNb2R1bGUsXG4gIENvbmZpZyxcbiAgQ21zQ29uZmlnLFxuICBDbXNNb2R1bGUgYXMgQ21zQ29yZU1vZHVsZSxcbiAgZGVmYXVsdENtc01vZHVsZUNvbmZpZyxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuLy8gZ3VhcmRzXG5pbXBvcnQgeyBndWFyZHMgfSBmcm9tICcuL2d1YXJkcy9pbmRleCc7XG5cbmltcG9ydCB7IE91dGxldE1vZHVsZSB9IGZyb20gJy4uL291dGxldC9vdXRsZXQubW9kdWxlJztcbmltcG9ydCB7IE91dGxldERpcmVjdGl2ZSB9IGZyb20gJy4uL291dGxldC9vdXRsZXQuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKGRlZmF1bHRDbXNNb2R1bGVDb25maWcpLFxuICAgIE91dGxldE1vZHVsZSxcbiAgICBDbXNDb3JlTW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFsuLi5ndWFyZHMsIHsgcHJvdmlkZTogQ21zQ29uZmlnLCB1c2VFeGlzdGluZzogQ29uZmlnIH1dLFxuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBleHBvcnRzOiBbT3V0bGV0RGlyZWN0aXZlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ21zTW9kdWxlIHt9XG4iXX0=