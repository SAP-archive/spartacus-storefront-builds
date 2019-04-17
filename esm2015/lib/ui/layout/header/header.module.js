/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UrlTranslationModule, I18nModule } from '@spartacus/core';
import { CmsModule } from '../../../cms/cms.module';
import { PwaModule } from '../../../pwa/pwa.module';
import { LoginModule } from '../../../user/login/login.module';
import { HeaderComponent } from './header.component';
import { HeaderSkipperComponent } from './header-skipper/header-skipper.component';
import { PageSlotModule } from '../../../../cms-structure/page/slot/page-slot.module';
export class HeaderModule {
}
HeaderModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    CmsModule,
                    LoginModule,
                    RouterModule,
                    PwaModule,
                    UrlTranslationModule,
                    PageSlotModule,
                    I18nModule,
                ],
                declarations: [HeaderComponent, HeaderSkipperComponent],
                exports: [HeaderComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi91aS9sYXlvdXQvaGVhZGVyL2hlYWRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDL0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQWdCdEYsTUFBTSxPQUFPLFlBQVk7OztZQWR4QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osU0FBUztvQkFDVCxXQUFXO29CQUNYLFlBQVk7b0JBQ1osU0FBUztvQkFDVCxvQkFBb0I7b0JBQ3BCLGNBQWM7b0JBQ2QsVUFBVTtpQkFDWDtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxlQUFlLEVBQUUsc0JBQXNCLENBQUM7Z0JBQ3ZELE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQzthQUMzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVXJsVHJhbnNsYXRpb25Nb2R1bGUsIEkxOG5Nb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ21zTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY21zL2Ntcy5tb2R1bGUnO1xuaW1wb3J0IHsgUHdhTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vcHdhL3B3YS5tb2R1bGUnO1xuaW1wb3J0IHsgTG9naW5Nb2R1bGUgfSBmcm9tICcuLi8uLi8uLi91c2VyL2xvZ2luL2xvZ2luLm1vZHVsZSc7XG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgSGVhZGVyU2tpcHBlckNvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyLXNraXBwZXIvaGVhZGVyLXNraXBwZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2VTbG90TW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL3Nsb3QvcGFnZS1zbG90Lm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ21zTW9kdWxlLFxuICAgIExvZ2luTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBQd2FNb2R1bGUsXG4gICAgVXJsVHJhbnNsYXRpb25Nb2R1bGUsXG4gICAgUGFnZVNsb3RNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbSGVhZGVyQ29tcG9uZW50LCBIZWFkZXJTa2lwcGVyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0hlYWRlckNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlck1vZHVsZSB7fVxuIl19