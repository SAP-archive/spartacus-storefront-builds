/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderModule } from './../header/header.module';
import { UiFrameworkModule } from '../../ui-framework/ui-framework.module';
import { CmsModule } from '../../../cms/cms.module';
import { GlobalMessageComponentModule } from '../../../global-message/global-message.module';
import { PwaModule } from './../../../pwa/pwa.module';
import { OutletRefModule } from '../../../outlet/outlet-ref/outlet-ref.module';
import { LoginModule } from '../../../user/login/login.module';
import { StorefrontComponent } from './storefront.component';
import { PageLayoutModule } from '../../../cms/page-layout/page-layout.module';
import { SeoModule } from '../../../../cms-structure/index';
import { PageSlotModule } from '../../../../cms-structure/page/slot/page-slot.module';
import { UserComponentModule } from '../../../user/user.module';
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
                    LoginModule,
                    HeaderModule,
                    UiFrameworkModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvdWkvbGF5b3V0L21haW4vbWFpbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzdGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRS9ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM1RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDdEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFxQmhFLE1BQU0sT0FBTyxVQUFVOzs7WUFuQnRCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixZQUFZO29CQUNaLDRCQUE0QjtvQkFDNUIsbUJBQW1CO29CQUNuQixTQUFTO29CQUNULFdBQVc7b0JBQ1gsWUFBWTtvQkFDWixpQkFBaUI7b0JBQ2pCLGVBQWU7b0JBQ2YsU0FBUztvQkFDVCxnQkFBZ0I7b0JBQ2hCLFNBQVM7b0JBQ1QsY0FBYztpQkFDZjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDbkMsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7YUFDL0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEhlYWRlck1vZHVsZSB9IGZyb20gJy4vLi4vaGVhZGVyL2hlYWRlci5tb2R1bGUnO1xuaW1wb3J0IHsgVWlGcmFtZXdvcmtNb2R1bGUgfSBmcm9tICcuLi8uLi91aS1mcmFtZXdvcmsvdWktZnJhbWV3b3JrLm1vZHVsZSc7XG5pbXBvcnQgeyBDbXNNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jbXMvY21zLm1vZHVsZSc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlQ29tcG9uZW50TW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsLW1lc3NhZ2UvZ2xvYmFsLW1lc3NhZ2UubW9kdWxlJztcbmltcG9ydCB7IFB3YU1vZHVsZSB9IGZyb20gJy4vLi4vLi4vLi4vcHdhL3B3YS5tb2R1bGUnO1xuaW1wb3J0IHsgT3V0bGV0UmVmTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vb3V0bGV0L291dGxldC1yZWYvb3V0bGV0LXJlZi5tb2R1bGUnO1xuaW1wb3J0IHsgTG9naW5Nb2R1bGUgfSBmcm9tICcuLi8uLi8uLi91c2VyL2xvZ2luL2xvZ2luLm1vZHVsZSc7XG5cbmltcG9ydCB7IFN0b3JlZnJvbnRDb21wb25lbnQgfSBmcm9tICcuL3N0b3JlZnJvbnQuY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2VMYXlvdXRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jbXMvcGFnZS1sYXlvdXQvcGFnZS1sYXlvdXQubW9kdWxlJztcbmltcG9ydCB7IFNlb01vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvaW5kZXgnO1xuaW1wb3J0IHsgUGFnZVNsb3RNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2Uvc2xvdC9wYWdlLXNsb3QubW9kdWxlJztcbmltcG9ydCB7IFVzZXJDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi91c2VyL3VzZXIubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgR2xvYmFsTWVzc2FnZUNvbXBvbmVudE1vZHVsZSxcbiAgICBVc2VyQ29tcG9uZW50TW9kdWxlLFxuICAgIENtc01vZHVsZSxcbiAgICBMb2dpbk1vZHVsZSxcbiAgICBIZWFkZXJNb2R1bGUsXG4gICAgVWlGcmFtZXdvcmtNb2R1bGUsXG4gICAgT3V0bGV0UmVmTW9kdWxlLFxuICAgIFB3YU1vZHVsZSxcbiAgICBQYWdlTGF5b3V0TW9kdWxlLFxuICAgIFNlb01vZHVsZSxcbiAgICBQYWdlU2xvdE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbU3RvcmVmcm9udENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTdG9yZWZyb250Q29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgTWFpbk1vZHVsZSB7fVxuIl19