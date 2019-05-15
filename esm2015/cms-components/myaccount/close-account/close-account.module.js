/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard, ConfigModule, I18nModule, UrlModule, } from '@spartacus/core';
import { SpinnerModule } from '../../../shared/components/spinner/spinner.module';
import { CloseAccountModalComponent } from './components/close-account-modal/close-account-modal.component';
import { IconModule } from '../../../cms-components/misc/icon/index';
import { CloseAccountComponent } from './components/close-account/close-account.component';
export class CloseAccountModule {
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
                                selector: 'cx-close-account',
                                guards: [AuthGuard],
                            },
                        },
                    }))),
                ],
                declarations: [CloseAccountComponent, CloseAccountModalComponent],
                exports: [CloseAccountComponent],
                entryComponents: [CloseAccountComponent, CloseAccountModalComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvc2UtYWNjb3VudC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvY2xvc2UtYWNjb3VudC9jbG9zZS1hY2NvdW50Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxTQUFTLEVBRVQsWUFBWSxFQUNaLFVBQVUsRUFDVixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDbEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDNUcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBdUIzRixNQUFNLE9BQU8sa0JBQWtCOzs7WUFyQjlCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixZQUFZO29CQUNaLFNBQVM7b0JBQ1QsVUFBVTtvQkFDVixVQUFVO29CQUNWLGFBQWE7b0JBQ2IsWUFBWSxDQUFDLFVBQVUsQ0FBQyxtQkFBVzt3QkFDakMsYUFBYSxFQUFFOzRCQUNiLHFCQUFxQixFQUFFO2dDQUNyQixRQUFRLEVBQUUsa0JBQWtCO2dDQUM1QixNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUM7NkJBQ3BCO3lCQUNGO3FCQUNGLEVBQUEsQ0FBQztpQkFDSDtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSwwQkFBMEIsQ0FBQztnQkFDakUsT0FBTyxFQUFFLENBQUMscUJBQXFCLENBQUM7Z0JBQ2hDLGVBQWUsRUFBRSxDQUFDLHFCQUFxQixFQUFFLDBCQUEwQixDQUFDO2FBQ3JFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQXV0aEd1YXJkLFxuICBDbXNDb25maWcsXG4gIENvbmZpZ01vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbiAgVXJsTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgU3Bpbm5lck1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci5tb2R1bGUnO1xuaW1wb3J0IHsgQ2xvc2VBY2NvdW50TW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2xvc2UtYWNjb3VudC1tb2RhbC9jbG9zZS1hY2NvdW50LW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2luZGV4JztcbmltcG9ydCB7IENsb3NlQWNjb3VudENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jbG9zZS1hY2NvdW50L2Nsb3NlLWFjY291bnQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgVXJsTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgSWNvbk1vZHVsZSxcbiAgICBTcGlubmVyTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBDbG9zZUFjY291bnRDb21wb25lbnQ6IHtcbiAgICAgICAgICBzZWxlY3RvcjogJ2N4LWNsb3NlLWFjY291bnQnLFxuICAgICAgICAgIGd1YXJkczogW0F1dGhHdWFyZF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtDbG9zZUFjY291bnRDb21wb25lbnQsIENsb3NlQWNjb3VudE1vZGFsQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0Nsb3NlQWNjb3VudENvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0Nsb3NlQWNjb3VudENvbXBvbmVudCwgQ2xvc2VBY2NvdW50TW9kYWxDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBDbG9zZUFjY291bnRNb2R1bGUge31cbiJdfQ==