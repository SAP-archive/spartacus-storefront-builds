import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthGuard, I18nModule, provideDefaultConfig, } from '@spartacus/core';
import { SpinnerModule } from '../../../shared/components/spinner/spinner.module';
import { NotificationPreferenceComponent } from './notification-preference.component';
export class NotificationPreferenceModule {
}
NotificationPreferenceModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLXByZWZlcmVuY2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L25vdGlmaWNhdGlvbi1wcmVmZXJlbmNlL25vdGlmaWNhdGlvbi1wcmVmZXJlbmNlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQ0wsU0FBUyxFQUVULFVBQVUsRUFDVixvQkFBb0IsR0FDckIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDbEYsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFrQnRGLE1BQU0sT0FBTyw0QkFBNEI7OztZQWhCeEMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLCtCQUErQixDQUFDO2dCQUMvQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLFVBQVUsQ0FBQztnQkFDbEQsU0FBUyxFQUFFO29CQUNULG9CQUFvQixDQUFZO3dCQUM5QixhQUFhLEVBQUU7NEJBQ2IsK0JBQStCLEVBQUU7Z0NBQy9CLFNBQVMsRUFBRSwrQkFBK0I7Z0NBQzFDLE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQzs2QkFDcEI7eUJBQ0Y7cUJBQ0YsQ0FBQztpQkFDSDtnQkFDRCxPQUFPLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztnQkFDMUMsZUFBZSxFQUFFLENBQUMsK0JBQStCLENBQUM7YUFDbkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEF1dGhHdWFyZCxcbiAgQ21zQ29uZmlnLFxuICBJMThuTW9kdWxlLFxuICBwcm92aWRlRGVmYXVsdENvbmZpZyxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFNwaW5uZXJNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIubW9kdWxlJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblByZWZlcmVuY2VDb21wb25lbnQgfSBmcm9tICcuL25vdGlmaWNhdGlvbi1wcmVmZXJlbmNlLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW05vdGlmaWNhdGlvblByZWZlcmVuY2VDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBTcGlubmVyTW9kdWxlLCBJMThuTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIE5vdGlmaWNhdGlvblByZWZlcmVuY2VDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IE5vdGlmaWNhdGlvblByZWZlcmVuY2VDb21wb25lbnQsXG4gICAgICAgICAgZ3VhcmRzOiBbQXV0aEd1YXJkXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGV4cG9ydHM6IFtOb3RpZmljYXRpb25QcmVmZXJlbmNlQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbTm90aWZpY2F0aW9uUHJlZmVyZW5jZUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvblByZWZlcmVuY2VNb2R1bGUge31cbiJdfQ==