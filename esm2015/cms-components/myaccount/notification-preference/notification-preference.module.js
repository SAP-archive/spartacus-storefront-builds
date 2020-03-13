import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthGuard, I18nModule, provideDefaultConfig, } from '@spartacus/core';
import { SpinnerModule } from '../../../shared/components/spinner/spinner.module';
import { NotificationPreferenceComponent } from './notification-preference.component';
let NotificationPreferenceModule = class NotificationPreferenceModule {
};
NotificationPreferenceModule = __decorate([
    NgModule({
        declarations: [NotificationPreferenceComponent],
        imports: [CommonModule, SpinnerModule, I18nModule],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    NotificationPreferenceComponent: {
                        component: NotificationPreferenceComponent,
                        guards: [AuthGuard],
                    },
                },
            }),
        ],
        exports: [NotificationPreferenceComponent],
        entryComponents: [NotificationPreferenceComponent],
    })
], NotificationPreferenceModule);
export { NotificationPreferenceModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLXByZWZlcmVuY2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L25vdGlmaWNhdGlvbi1wcmVmZXJlbmNlL25vdGlmaWNhdGlvbi1wcmVmZXJlbmNlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUNMLFNBQVMsRUFFVCxVQUFVLEVBQ1Ysb0JBQW9CLEdBQ3JCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ2xGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBa0J0RixJQUFhLDRCQUE0QixHQUF6QyxNQUFhLDRCQUE0QjtDQUFHLENBQUE7QUFBL0IsNEJBQTRCO0lBaEJ4QyxRQUFRLENBQUM7UUFDUixZQUFZLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztRQUMvQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLFVBQVUsQ0FBQztRQUNsRCxTQUFTLEVBQUU7WUFDVCxvQkFBb0IsQ0FBWTtnQkFDOUIsYUFBYSxFQUFFO29CQUNiLCtCQUErQixFQUFFO3dCQUMvQixTQUFTLEVBQUUsK0JBQStCO3dCQUMxQyxNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUM7cUJBQ3BCO2lCQUNGO2FBQ0YsQ0FBQztTQUNIO1FBQ0QsT0FBTyxFQUFFLENBQUMsK0JBQStCLENBQUM7UUFDMUMsZUFBZSxFQUFFLENBQUMsK0JBQStCLENBQUM7S0FDbkQsQ0FBQztHQUNXLDRCQUE0QixDQUFHO1NBQS9CLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQXV0aEd1YXJkLFxuICBDbXNDb25maWcsXG4gIEkxOG5Nb2R1bGUsXG4gIHByb3ZpZGVEZWZhdWx0Q29uZmlnLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgU3Bpbm5lck1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci5tb2R1bGUnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uUHJlZmVyZW5jZUNvbXBvbmVudCB9IGZyb20gJy4vbm90aWZpY2F0aW9uLXByZWZlcmVuY2UuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTm90aWZpY2F0aW9uUHJlZmVyZW5jZUNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFNwaW5uZXJNb2R1bGUsIEkxOG5Nb2R1bGVdLFxuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgTm90aWZpY2F0aW9uUHJlZmVyZW5jZUNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogTm90aWZpY2F0aW9uUHJlZmVyZW5jZUNvbXBvbmVudCxcbiAgICAgICAgICBndWFyZHM6IFtBdXRoR3VhcmRdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZXhwb3J0czogW05vdGlmaWNhdGlvblByZWZlcmVuY2VDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtOb3RpZmljYXRpb25QcmVmZXJlbmNlQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uUHJlZmVyZW5jZU1vZHVsZSB7fVxuIl19