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
var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
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
    return HeaderModule;
}());
export { HeaderModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi91aS9sYXlvdXQvaGVhZGVyL2hlYWRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDL0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUV0RjtJQUFBO0lBYzJCLENBQUM7O2dCQWQzQixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osU0FBUzt3QkFDVCxXQUFXO3dCQUNYLFlBQVk7d0JBQ1osU0FBUzt3QkFDVCxvQkFBb0I7d0JBQ3BCLGNBQWM7d0JBQ2QsVUFBVTtxQkFDWDtvQkFDRCxZQUFZLEVBQUUsQ0FBQyxlQUFlLEVBQUUsc0JBQXNCLENBQUM7b0JBQ3ZELE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQztpQkFDM0I7O0lBQzBCLG1CQUFDO0NBQUEsQUFkNUIsSUFjNEI7U0FBZixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBVcmxUcmFuc2xhdGlvbk1vZHVsZSwgSTE4bk1vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDbXNNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jbXMvY21zLm1vZHVsZSc7XG5pbXBvcnQgeyBQd2FNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9wd2EvcHdhLm1vZHVsZSc7XG5pbXBvcnQgeyBMb2dpbk1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3VzZXIvbG9naW4vbG9naW4ubW9kdWxlJztcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZWFkZXJTa2lwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXItc2tpcHBlci9oZWFkZXItc2tpcHBlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnZVNsb3RNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2Uvc2xvdC9wYWdlLXNsb3QubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDbXNNb2R1bGUsXG4gICAgTG9naW5Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIFB3YU1vZHVsZSxcbiAgICBVcmxUcmFuc2xhdGlvbk1vZHVsZSxcbiAgICBQYWdlU2xvdE1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtIZWFkZXJDb21wb25lbnQsIEhlYWRlclNraXBwZXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbSGVhZGVyQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyTW9kdWxlIHt9XG4iXX0=