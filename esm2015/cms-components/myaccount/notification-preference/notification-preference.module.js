/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthGuard, ConfigModule, I18nModule, } from '@spartacus/core';
import { SpinnerModule } from '../../../shared/components/spinner/spinner.module';
import { NotificationPreferenceComponent } from './notification-preference.component';
export class NotificationPreferenceModule {
}
NotificationPreferenceModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NotificationPreferenceComponent],
                imports: [
                    CommonModule,
                    SpinnerModule,
                    I18nModule,
                    ConfigModule.withConfig((/** @type {?} */ ({
                        cmsComponents: {
                            NotificationPreferenceComponent: {
                                component: NotificationPreferenceComponent,
                                guards: [AuthGuard],
                            },
                        },
                    }))),
                ],
                exports: [NotificationPreferenceComponent],
                entryComponents: [NotificationPreferenceComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLXByZWZlcmVuY2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L25vdGlmaWNhdGlvbi1wcmVmZXJlbmNlL25vdGlmaWNhdGlvbi1wcmVmZXJlbmNlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osVUFBVSxHQUNYLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ2xGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBb0J0RixNQUFNLE9BQU8sNEJBQTRCOzs7WUFsQnhDLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztnQkFDL0MsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixVQUFVO29CQUNWLFlBQVksQ0FBQyxVQUFVLENBQUMsbUJBQVc7d0JBQ2pDLGFBQWEsRUFBRTs0QkFDYiwrQkFBK0IsRUFBRTtnQ0FDL0IsU0FBUyxFQUFFLCtCQUErQjtnQ0FDMUMsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDOzZCQUNwQjt5QkFDRjtxQkFDRixFQUFBLENBQUM7aUJBQ0g7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsK0JBQStCLENBQUM7Z0JBQzFDLGVBQWUsRUFBRSxDQUFDLCtCQUErQixDQUFDO2FBQ25EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBdXRoR3VhcmQsXG4gIENtc0NvbmZpZyxcbiAgQ29uZmlnTW9kdWxlLFxuICBJMThuTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgU3Bpbm5lck1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci5tb2R1bGUnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uUHJlZmVyZW5jZUNvbXBvbmVudCB9IGZyb20gJy4vbm90aWZpY2F0aW9uLXByZWZlcmVuY2UuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTm90aWZpY2F0aW9uUHJlZmVyZW5jZUNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgU3Bpbm5lck1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBOb3RpZmljYXRpb25QcmVmZXJlbmNlQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBOb3RpZmljYXRpb25QcmVmZXJlbmNlQ29tcG9uZW50LFxuICAgICAgICAgIGd1YXJkczogW0F1dGhHdWFyZF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBleHBvcnRzOiBbTm90aWZpY2F0aW9uUHJlZmVyZW5jZUNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW05vdGlmaWNhdGlvblByZWZlcmVuY2VDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25QcmVmZXJlbmNlTW9kdWxlIHt9XG4iXX0=