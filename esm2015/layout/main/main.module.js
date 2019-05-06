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
export class MainModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsYXlvdXQvbWFpbi9tYWluLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQzlHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seURBQXlELENBQUM7QUFDMUYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDckQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFrQjdELE1BQU0sT0FBTyxVQUFVOzs7WUFoQnRCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixZQUFZO29CQUNaLDRCQUE0QjtvQkFDNUIsbUJBQW1CO29CQUNuQixTQUFTO29CQUNULGVBQWU7b0JBQ2YsU0FBUztvQkFDVCxnQkFBZ0I7b0JBQ2hCLFNBQVM7b0JBQ1QsY0FBYztpQkFDZjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDbkMsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7YUFDL0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlQ29tcG9uZW50TW9kdWxlIH0gZnJvbSAnLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9nbG9iYWwtbWVzc2FnZS9nbG9iYWwtbWVzc2FnZS5tb2R1bGUnO1xuaW1wb3J0IHsgVXNlckNvbXBvbmVudE1vZHVsZSB9IGZyb20gJy4uLy4uL2Ntcy1jb21wb25lbnRzL3VzZXIvaW5kZXgnO1xuaW1wb3J0IHsgU2VvTW9kdWxlIH0gZnJvbSAnLi4vLi4vY21zLXN0cnVjdHVyZS9pbmRleCc7XG5pbXBvcnQgeyBPdXRsZXRSZWZNb2R1bGUgfSBmcm9tICcuLi8uLi9jbXMtc3RydWN0dXJlL291dGxldC9vdXRsZXQtcmVmL291dGxldC1yZWYubW9kdWxlJztcbmltcG9ydCB7IFBhZ2VMYXlvdXRNb2R1bGUgfSBmcm9tICcuLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvaW5kZXgnO1xuaW1wb3J0IHsgUGFnZVNsb3RNb2R1bGUgfSBmcm9tICcuLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2Uvc2xvdC9wYWdlLXNsb3QubW9kdWxlJztcbmltcG9ydCB7IFB3YU1vZHVsZSB9IGZyb20gJy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcHdhL2luZGV4JztcbmltcG9ydCB7IENtc01vZHVsZSB9IGZyb20gJy4uLy4uL2xpYi9jbXMvY21zLm1vZHVsZSc7XG5pbXBvcnQgeyBTdG9yZWZyb250Q29tcG9uZW50IH0gZnJvbSAnLi9zdG9yZWZyb250LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIEdsb2JhbE1lc3NhZ2VDb21wb25lbnRNb2R1bGUsXG4gICAgVXNlckNvbXBvbmVudE1vZHVsZSxcbiAgICBDbXNNb2R1bGUsXG4gICAgT3V0bGV0UmVmTW9kdWxlLFxuICAgIFB3YU1vZHVsZSxcbiAgICBQYWdlTGF5b3V0TW9kdWxlLFxuICAgIFNlb01vZHVsZSxcbiAgICBQYWdlU2xvdE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbU3RvcmVmcm9udENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTdG9yZWZyb250Q29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgTWFpbk1vZHVsZSB7fVxuIl19