/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule, UrlTranslationModule, I18nModule, } from '@spartacus/core';
import { CloseAccountComponent } from './components/close-account/close-account.component';
import { RouterModule } from '@angular/router';
import { CloseAccountModalComponent } from './components/close-account-modal/close-account-modal.component';
import { SpinnerModule } from '../../ui/components/spinner/spinner.module';
export class CloseAccountModule {
}
CloseAccountModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    UrlTranslationModule,
                    I18nModule,
                    SpinnerModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            CloseAccountComponent: { selector: 'cx-close-account' },
                        },
                    }))),
                ],
                declarations: [CloseAccountComponent, CloseAccountModalComponent],
                exports: [CloseAccountComponent],
                entryComponents: [CloseAccountComponent, CloseAccountModalComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvc2UtYWNjb3VudC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvbXktYWNjb3VudC9jbG9zZS1hY2NvdW50L2Nsb3NlLWFjY291bnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQ0wsWUFBWSxFQUVaLG9CQUFvQixFQUNwQixVQUFVLEdBQ1gsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDNUcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBbUIzRSxNQUFNLE9BQU8sa0JBQWtCOzs7WUFqQjlCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixZQUFZO29CQUNaLG9CQUFvQjtvQkFDcEIsVUFBVTtvQkFDVixhQUFhO29CQUNiLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7d0JBQ2pDLGFBQWEsRUFBRTs0QkFDYixxQkFBcUIsRUFBRSxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRTt5QkFDeEQ7cUJBQ0YsRUFBQSxDQUFDO2lCQUNIO2dCQUNELFlBQVksRUFBRSxDQUFDLHFCQUFxQixFQUFFLDBCQUEwQixDQUFDO2dCQUNqRSxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztnQkFDaEMsZUFBZSxFQUFFLENBQUMscUJBQXFCLEVBQUUsMEJBQTBCLENBQUM7YUFDckUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHtcbiAgQ29uZmlnTW9kdWxlLFxuICBDbXNDb25maWcsXG4gIFVybFRyYW5zbGF0aW9uTW9kdWxlLFxuICBJMThuTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5pbXBvcnQgeyBDbG9zZUFjY291bnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2xvc2UtYWNjb3VudC9jbG9zZS1hY2NvdW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ2xvc2VBY2NvdW50TW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2xvc2UtYWNjb3VudC1tb2RhbC9jbG9zZS1hY2NvdW50LW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTcGlubmVyTW9kdWxlIH0gZnJvbSAnLi4vLi4vdWkvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgVXJsVHJhbnNsYXRpb25Nb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBTcGlubmVyTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBDbG9zZUFjY291bnRDb21wb25lbnQ6IHsgc2VsZWN0b3I6ICdjeC1jbG9zZS1hY2NvdW50JyB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQ2xvc2VBY2NvdW50Q29tcG9uZW50LCBDbG9zZUFjY291bnRNb2RhbENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtDbG9zZUFjY291bnRDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtDbG9zZUFjY291bnRDb21wb25lbnQsIENsb3NlQWNjb3VudE1vZGFsQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQ2xvc2VBY2NvdW50TW9kdWxlIHt9XG4iXX0=