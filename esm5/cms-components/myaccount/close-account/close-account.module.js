/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard, ConfigModule, I18nModule, UrlModule, } from '@spartacus/core';
import { SpinnerModule } from '../../../shared/components/spinner/spinner.module';
import { CloseAccountModalComponent } from './components/close-account-modal/close-account-modal.component';
import { IconModule } from '../../../cms-components/misc/icon/index';
import { CloseAccountComponent } from './components/close-account/close-account.component';
var CloseAccountModule = /** @class */ (function () {
    function CloseAccountModule() {
    }
    CloseAccountModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        UrlModule,
                        I18nModule,
                        IconModule,
                        SpinnerModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                CloseAccountComponent: {
                                    component: CloseAccountComponent,
                                    guards: [AuthGuard],
                                },
                            },
                        }))),
                    ],
                    declarations: [CloseAccountComponent, CloseAccountModalComponent],
                    exports: [CloseAccountComponent, CloseAccountModalComponent],
                    entryComponents: [CloseAccountComponent, CloseAccountModalComponent],
                },] }
    ];
    return CloseAccountModule;
}());
export { CloseAccountModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvc2UtYWNjb3VudC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvY2xvc2UtYWNjb3VudC9jbG9zZS1hY2NvdW50Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxTQUFTLEVBRVQsWUFBWSxFQUNaLFVBQVUsRUFDVixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDbEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDNUcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBRTNGO0lBQUE7SUFxQmlDLENBQUM7O2dCQXJCakMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFlBQVk7d0JBQ1osU0FBUzt3QkFDVCxVQUFVO3dCQUNWLFVBQVU7d0JBQ1YsYUFBYTt3QkFDYixZQUFZLENBQUMsVUFBVSxDQUFDLG1CQUFXOzRCQUNqQyxhQUFhLEVBQUU7Z0NBQ2IscUJBQXFCLEVBQUU7b0NBQ3JCLFNBQVMsRUFBRSxxQkFBcUI7b0NBQ2hDLE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQztpQ0FDcEI7NkJBQ0Y7eUJBQ0YsRUFBQSxDQUFDO3FCQUNIO29CQUNELFlBQVksRUFBRSxDQUFDLHFCQUFxQixFQUFFLDBCQUEwQixDQUFDO29CQUNqRSxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSwwQkFBMEIsQ0FBQztvQkFDNUQsZUFBZSxFQUFFLENBQUMscUJBQXFCLEVBQUUsMEJBQTBCLENBQUM7aUJBQ3JFOztJQUNnQyx5QkFBQztDQUFBLEFBckJsQyxJQXFCa0M7U0FBckIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQXV0aEd1YXJkLFxuICBDbXNDb25maWcsXG4gIENvbmZpZ01vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbiAgVXJsTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgU3Bpbm5lck1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci5tb2R1bGUnO1xuaW1wb3J0IHsgQ2xvc2VBY2NvdW50TW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2xvc2UtYWNjb3VudC1tb2RhbC9jbG9zZS1hY2NvdW50LW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2luZGV4JztcbmltcG9ydCB7IENsb3NlQWNjb3VudENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jbG9zZS1hY2NvdW50L2Nsb3NlLWFjY291bnQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgVXJsTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgSWNvbk1vZHVsZSxcbiAgICBTcGlubmVyTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBDbG9zZUFjY291bnRDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IENsb3NlQWNjb3VudENvbXBvbmVudCxcbiAgICAgICAgICBndWFyZHM6IFtBdXRoR3VhcmRdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQ2xvc2VBY2NvdW50Q29tcG9uZW50LCBDbG9zZUFjY291bnRNb2RhbENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtDbG9zZUFjY291bnRDb21wb25lbnQsIENsb3NlQWNjb3VudE1vZGFsQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbQ2xvc2VBY2NvdW50Q29tcG9uZW50LCBDbG9zZUFjY291bnRNb2RhbENvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIENsb3NlQWNjb3VudE1vZHVsZSB7fVxuIl19