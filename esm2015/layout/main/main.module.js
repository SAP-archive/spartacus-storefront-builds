/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeaturesConfigModule } from '@spartacus/core';
import { GlobalMessageComponentModule } from '../../cms-components/misc/global-message/global-message.module';
import { OutletRefModule } from '../../cms-structure/outlet/outlet-ref/outlet-ref.module';
import { PageLayoutModule } from '../../cms-structure/page/page-layout/page-layout.module';
import { PageSlotModule } from '../../cms-structure/page/slot/page-slot.module';
import { PwaModule } from '../../cms-structure/pwa/pwa.module';
import { SeoModule } from '../../cms-structure/seo/seo.module';
import { StorefrontComponent } from './storefront.component';
export class MainModule {
}
MainModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    GlobalMessageComponentModule,
                    OutletRefModule,
                    PwaModule,
                    PageLayoutModule,
                    SeoModule,
                    PageSlotModule,
                    FeaturesConfigModule,
                ],
                declarations: [StorefrontComponent],
                exports: [StorefrontComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvbWFpbi9tYWluLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQzlHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUMxRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDaEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQWdCN0QsTUFBTSxPQUFPLFVBQVU7OztZQWZ0QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osWUFBWTtvQkFDWiw0QkFBNEI7b0JBQzVCLGVBQWU7b0JBQ2YsU0FBUztvQkFDVCxnQkFBZ0I7b0JBQ2hCLFNBQVM7b0JBQ1QsY0FBYztvQkFDZCxvQkFBb0I7aUJBQ3JCO2dCQUNELFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO2dCQUNuQyxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzthQUMvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEZlYXR1cmVzQ29uZmlnTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2dsb2JhbC1tZXNzYWdlL2dsb2JhbC1tZXNzYWdlLm1vZHVsZSc7XG5pbXBvcnQgeyBPdXRsZXRSZWZNb2R1bGUgfSBmcm9tICcuLi8uLi9jbXMtc3RydWN0dXJlL291dGxldC9vdXRsZXQtcmVmL291dGxldC1yZWYubW9kdWxlJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRNb2R1bGUgfSBmcm9tICcuLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvcGFnZS1sYXlvdXQvcGFnZS1sYXlvdXQubW9kdWxlJztcbmltcG9ydCB7IFBhZ2VTbG90TW9kdWxlIH0gZnJvbSAnLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL3Nsb3QvcGFnZS1zbG90Lm1vZHVsZSc7XG5pbXBvcnQgeyBQd2FNb2R1bGUgfSBmcm9tICcuLi8uLi9jbXMtc3RydWN0dXJlL3B3YS9wd2EubW9kdWxlJztcbmltcG9ydCB7IFNlb01vZHVsZSB9IGZyb20gJy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvc2VvL3Nlby5tb2R1bGUnO1xuaW1wb3J0IHsgU3RvcmVmcm9udENvbXBvbmVudCB9IGZyb20gJy4vc3RvcmVmcm9udC5jb21wb25lbnQnO1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgR2xvYmFsTWVzc2FnZUNvbXBvbmVudE1vZHVsZSxcbiAgICBPdXRsZXRSZWZNb2R1bGUsXG4gICAgUHdhTW9kdWxlLFxuICAgIFBhZ2VMYXlvdXRNb2R1bGUsXG4gICAgU2VvTW9kdWxlLFxuICAgIFBhZ2VTbG90TW9kdWxlLFxuICAgIEZlYXR1cmVzQ29uZmlnTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtTdG9yZWZyb250Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW1N0b3JlZnJvbnRDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBNYWluTW9kdWxlIHt9XG4iXX0=