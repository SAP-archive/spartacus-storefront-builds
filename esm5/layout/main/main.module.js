/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GlobalMessageComponentModule } from '../../cms-components/misc/global-message/global-message.module';
import { UserComponentModule } from '../../cms-components/user/index';
import { SeoModule } from '../../cms-structure/index';
import { OutletRefModule } from '../../cms-structure/outlet/outlet-ref/outlet-ref.module';
import { PageLayoutModule } from '../../cms-structure/page/index';
import { PageSlotModule } from '../../cms-structure/page/slot/page-slot.module';
import { PwaModule } from '../../cms-structure/pwa/index';
import { CmsModule } from '../../lib/cms/cms.module';
import { StorefrontComponent } from './storefront.component';
var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        GlobalMessageComponentModule,
                        UserComponentModule,
                        CmsModule,
                        OutletRefModule,
                        PwaModule,
                        PageLayoutModule,
                        SeoModule,
                        PageSlotModule,
                    ],
                    declarations: [StorefrontComponent],
                    exports: [StorefrontComponent],
                },] }
    ];
    return MainModule;
}());
export { MainModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvbWFpbi9tYWluLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQzlHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seURBQXlELENBQUM7QUFDMUYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDckQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFN0Q7SUFBQTtJQWdCeUIsQ0FBQzs7Z0JBaEJ6QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWTt3QkFDWiw0QkFBNEI7d0JBQzVCLG1CQUFtQjt3QkFDbkIsU0FBUzt3QkFDVCxlQUFlO3dCQUNmLFNBQVM7d0JBQ1QsZ0JBQWdCO3dCQUNoQixTQUFTO3dCQUNULGNBQWM7cUJBQ2Y7b0JBQ0QsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7b0JBQ25DLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO2lCQUMvQjs7SUFDd0IsaUJBQUM7Q0FBQSxBQWhCMUIsSUFnQjBCO1NBQWIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2dsb2JhbC1tZXNzYWdlL2dsb2JhbC1tZXNzYWdlLm1vZHVsZSc7XG5pbXBvcnQgeyBVc2VyQ29tcG9uZW50TW9kdWxlIH0gZnJvbSAnLi4vLi4vY21zLWNvbXBvbmVudHMvdXNlci9pbmRleCc7XG5pbXBvcnQgeyBTZW9Nb2R1bGUgfSBmcm9tICcuLi8uLi9jbXMtc3RydWN0dXJlL2luZGV4JztcbmltcG9ydCB7IE91dGxldFJlZk1vZHVsZSB9IGZyb20gJy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvb3V0bGV0L291dGxldC1yZWYvb3V0bGV0LXJlZi5tb2R1bGUnO1xuaW1wb3J0IHsgUGFnZUxheW91dE1vZHVsZSB9IGZyb20gJy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9pbmRleCc7XG5pbXBvcnQgeyBQYWdlU2xvdE1vZHVsZSB9IGZyb20gJy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9zbG90L3BhZ2Utc2xvdC5tb2R1bGUnO1xuaW1wb3J0IHsgUHdhTW9kdWxlIH0gZnJvbSAnLi4vLi4vY21zLXN0cnVjdHVyZS9wd2EvaW5kZXgnO1xuaW1wb3J0IHsgQ21zTW9kdWxlIH0gZnJvbSAnLi4vLi4vbGliL2Ntcy9jbXMubW9kdWxlJztcbmltcG9ydCB7IFN0b3JlZnJvbnRDb21wb25lbnQgfSBmcm9tICcuL3N0b3JlZnJvbnQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgR2xvYmFsTWVzc2FnZUNvbXBvbmVudE1vZHVsZSxcbiAgICBVc2VyQ29tcG9uZW50TW9kdWxlLFxuICAgIENtc01vZHVsZSxcbiAgICBPdXRsZXRSZWZNb2R1bGUsXG4gICAgUHdhTW9kdWxlLFxuICAgIFBhZ2VMYXlvdXRNb2R1bGUsXG4gICAgU2VvTW9kdWxlLFxuICAgIFBhZ2VTbG90TW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtTdG9yZWZyb250Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW1N0b3JlZnJvbnRDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBNYWluTW9kdWxlIHt9XG4iXX0=