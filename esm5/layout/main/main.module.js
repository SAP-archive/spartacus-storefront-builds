import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeaturesConfigModule } from '@spartacus/core';
import { GlobalMessageComponentModule } from '../../cms-components/misc/global-message/global-message.module';
import { OutletModule } from '../../cms-structure/outlet/outlet.module';
import { OutletRefModule } from '../../cms-structure/outlet/outlet-ref/outlet-ref.module';
import { PageLayoutModule } from '../../cms-structure/page/page-layout/page-layout.module';
import { PageSlotModule } from '../../cms-structure/page/slot/page-slot.module';
import { PwaModule } from '../../cms-structure/pwa/pwa.module';
import { SeoModule } from '../../cms-structure/seo/seo.module';
import { AnonymousConsentsModule } from '../../shared/components/anonymous-consents/anonymous-consents.module';
import { StorefrontComponent } from './storefront.component';
var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule,
                GlobalMessageComponentModule,
                OutletModule,
                OutletRefModule,
                PwaModule,
                PageLayoutModule,
                SeoModule,
                PageSlotModule,
                AnonymousConsentsModule,
                FeaturesConfigModule,
            ],
            declarations: [StorefrontComponent],
            exports: [StorefrontComponent],
        })
    ], MainModule);
    return MainModule;
}());
export { MainModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvbWFpbi9tYWluLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQzlHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seURBQXlELENBQUM7QUFDMUYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDM0YsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMvRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDL0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFDL0csT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFtQjdEO0lBQUE7SUFBeUIsQ0FBQztJQUFiLFVBQVU7UUFqQnRCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLFlBQVk7Z0JBQ1osNEJBQTRCO2dCQUM1QixZQUFZO2dCQUNaLGVBQWU7Z0JBQ2YsU0FBUztnQkFDVCxnQkFBZ0I7Z0JBQ2hCLFNBQVM7Z0JBQ1QsY0FBYztnQkFDZCx1QkFBdUI7Z0JBQ3ZCLG9CQUFvQjthQUNyQjtZQUNELFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO1lBQ25DLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO1NBQy9CLENBQUM7T0FDVyxVQUFVLENBQUc7SUFBRCxpQkFBQztDQUFBLEFBQTFCLElBQTBCO1NBQWIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEZlYXR1cmVzQ29uZmlnTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2dsb2JhbC1tZXNzYWdlL2dsb2JhbC1tZXNzYWdlLm1vZHVsZSc7XG5pbXBvcnQgeyBPdXRsZXRNb2R1bGUgfSBmcm9tICcuLi8uLi9jbXMtc3RydWN0dXJlL291dGxldC9vdXRsZXQubW9kdWxlJztcbmltcG9ydCB7IE91dGxldFJlZk1vZHVsZSB9IGZyb20gJy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvb3V0bGV0L291dGxldC1yZWYvb3V0bGV0LXJlZi5tb2R1bGUnO1xuaW1wb3J0IHsgUGFnZUxheW91dE1vZHVsZSB9IGZyb20gJy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9wYWdlLWxheW91dC9wYWdlLWxheW91dC5tb2R1bGUnO1xuaW1wb3J0IHsgUGFnZVNsb3RNb2R1bGUgfSBmcm9tICcuLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2Uvc2xvdC9wYWdlLXNsb3QubW9kdWxlJztcbmltcG9ydCB7IFB3YU1vZHVsZSB9IGZyb20gJy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcHdhL3B3YS5tb2R1bGUnO1xuaW1wb3J0IHsgU2VvTW9kdWxlIH0gZnJvbSAnLi4vLi4vY21zLXN0cnVjdHVyZS9zZW8vc2VvLm1vZHVsZSc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50c01vZHVsZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2Fub255bW91cy1jb25zZW50cy9hbm9ueW1vdXMtY29uc2VudHMubW9kdWxlJztcbmltcG9ydCB7IFN0b3JlZnJvbnRDb21wb25lbnQgfSBmcm9tICcuL3N0b3JlZnJvbnQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgR2xvYmFsTWVzc2FnZUNvbXBvbmVudE1vZHVsZSxcbiAgICBPdXRsZXRNb2R1bGUsXG4gICAgT3V0bGV0UmVmTW9kdWxlLFxuICAgIFB3YU1vZHVsZSxcbiAgICBQYWdlTGF5b3V0TW9kdWxlLFxuICAgIFNlb01vZHVsZSxcbiAgICBQYWdlU2xvdE1vZHVsZSxcbiAgICBBbm9ueW1vdXNDb25zZW50c01vZHVsZSxcbiAgICBGZWF0dXJlc0NvbmZpZ01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbU3RvcmVmcm9udENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTdG9yZWZyb250Q29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgTWFpbk1vZHVsZSB7fVxuIl19