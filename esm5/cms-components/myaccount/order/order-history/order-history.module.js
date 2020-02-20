import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { AuthGuard, ConfigModule, I18nModule, UrlModule, UserService, } from '@spartacus/core';
import { ListNavigationModule } from '../../../../shared/components/list-navigation/list-navigation.module';
import { CmsPageGuard } from '../../../../cms-structure/guards/cms-page.guard';
import { PageLayoutComponent } from '../../../../cms-structure/page/page-layout/page-layout.component';
import { OrderHistoryComponent } from './order-history.component';
var ɵ0 = { cxRoute: 'orders' };
var OrderHistoryModule = /** @class */ (function () {
    function OrderHistoryModule() {
    }
    OrderHistoryModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule.forChild([
                    {
                        path: null,
                        canActivate: [AuthGuard, CmsPageGuard],
                        component: PageLayoutComponent,
                        data: ɵ0,
                    },
                ]),
                ConfigModule.withConfig({
                    cmsComponents: {
                        AccountOrderHistoryComponent: {
                            component: OrderHistoryComponent,
                            guards: [AuthGuard],
                        },
                    },
                }),
                RouterModule,
                FormsModule,
                NgSelectModule,
                ListNavigationModule,
                UrlModule,
                I18nModule,
            ],
            declarations: [OrderHistoryComponent],
            exports: [OrderHistoryComponent],
            providers: [UserService],
            entryComponents: [OrderHistoryComponent],
        })
    ], OrderHistoryModule);
    return OrderHistoryModule;
}());
export { OrderHistoryModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItaGlzdG9yeS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvb3JkZXItaGlzdG9yeS9vcmRlci1oaXN0b3J5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFNBQVMsRUFDVCxXQUFXLEdBQ1osTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUM1RyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDL0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDdkcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7U0FVcEQsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFO0FBdUJuQztJQUFBO0lBQWlDLENBQUM7SUFBckIsa0JBQWtCO1FBL0I5QixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixZQUFZLENBQUMsUUFBUSxDQUFDO29CQUNwQjt3QkFDRSxJQUFJLEVBQUUsSUFBSTt3QkFDVixXQUFXLEVBQUUsQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDO3dCQUN0QyxTQUFTLEVBQUUsbUJBQW1CO3dCQUM5QixJQUFJLElBQXVCO3FCQUM1QjtpQkFDRixDQUFDO2dCQUNGLFlBQVksQ0FBQyxVQUFVLENBQVk7b0JBQ2pDLGFBQWEsRUFBRTt3QkFDYiw0QkFBNEIsRUFBRTs0QkFDNUIsU0FBUyxFQUFFLHFCQUFxQjs0QkFDaEMsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDO3lCQUNwQjtxQkFDRjtpQkFDRixDQUFDO2dCQUNGLFlBQVk7Z0JBQ1osV0FBVztnQkFDWCxjQUFjO2dCQUNkLG9CQUFvQjtnQkFDcEIsU0FBUztnQkFDVCxVQUFVO2FBQ1g7WUFDRCxZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztZQUNyQyxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztZQUNoQyxTQUFTLEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFDeEIsZUFBZSxFQUFFLENBQUMscUJBQXFCLENBQUM7U0FDekMsQ0FBQztPQUNXLGtCQUFrQixDQUFHO0lBQUQseUJBQUM7Q0FBQSxBQUFsQyxJQUFrQztTQUFyQixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5nU2VsZWN0TW9kdWxlIH0gZnJvbSAnQG5nLXNlbGVjdC9uZy1zZWxlY3QnO1xuaW1wb3J0IHtcbiAgQXV0aEd1YXJkLFxuICBDbXNDb25maWcsXG4gIENvbmZpZ01vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbiAgVXJsTW9kdWxlLFxuICBVc2VyU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IExpc3ROYXZpZ2F0aW9uTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvbGlzdC1uYXZpZ2F0aW9uL2xpc3QtbmF2aWdhdGlvbi5tb2R1bGUnO1xuaW1wb3J0IHsgQ21zUGFnZUd1YXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9ndWFyZHMvY21zLXBhZ2UuZ3VhcmQnO1xuaW1wb3J0IHsgUGFnZUxheW91dENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9wYWdlLWxheW91dC9wYWdlLWxheW91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3JkZXJIaXN0b3J5Q29tcG9uZW50IH0gZnJvbSAnLi9vcmRlci1oaXN0b3J5LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmQsIENtc1BhZ2VHdWFyZF0sXG4gICAgICAgIGNvbXBvbmVudDogUGFnZUxheW91dENvbXBvbmVudCxcbiAgICAgICAgZGF0YTogeyBjeFJvdXRlOiAnb3JkZXJzJyB9LFxuICAgICAgfSxcbiAgICBdKSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQWNjb3VudE9yZGVySGlzdG9yeUNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogT3JkZXJIaXN0b3J5Q29tcG9uZW50LFxuICAgICAgICAgIGd1YXJkczogW0F1dGhHdWFyZF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBOZ1NlbGVjdE1vZHVsZSxcbiAgICBMaXN0TmF2aWdhdGlvbk1vZHVsZSxcbiAgICBVcmxNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbT3JkZXJIaXN0b3J5Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW09yZGVySGlzdG9yeUNvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXSxcbiAgZW50cnlDb21wb25lbnRzOiBbT3JkZXJIaXN0b3J5Q29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJIaXN0b3J5TW9kdWxlIHt9XG4iXX0=