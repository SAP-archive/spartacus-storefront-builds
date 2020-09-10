import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfigModule, I18nModule } from '@spartacus/core';
import { CartNotEmptyGuard } from '../../../cart';
import { CheckoutAuthGuard } from '../../guards';
import { CostCenterComponent } from './cost-center.component';
let CostCenterModule = class CostCenterModule {
};
CostCenterModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            I18nModule,
            ConfigModule.withConfig({
                cmsComponents: {
                    CheckoutCostCenterComponent: {
                        component: CostCenterComponent,
                        guards: [CheckoutAuthGuard, CartNotEmptyGuard],
                    },
                },
            }),
        ],
        declarations: [CostCenterComponent],
        entryComponents: [CostCenterComponent],
    })
], CostCenterModule);
export { CostCenterModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zdC1jZW50ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY29tcG9uZW50cy9jb3N0LWNlbnRlci9jb3N0LWNlbnRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBYSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNqRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQWtCOUQsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7Q0FBRyxDQUFBO0FBQW5CLGdCQUFnQjtJQWhCNUIsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLFVBQVU7WUFDVixZQUFZLENBQUMsVUFBVSxDQUFZO2dCQUNqQyxhQUFhLEVBQUU7b0JBQ2IsMkJBQTJCLEVBQUU7d0JBQzNCLFNBQVMsRUFBRSxtQkFBbUI7d0JBQzlCLE1BQU0sRUFBRSxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDO3FCQUMvQztpQkFDRjthQUNGLENBQUM7U0FDSDtRQUNELFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO1FBQ25DLGVBQWUsRUFBRSxDQUFDLG1CQUFtQixDQUFDO0tBQ3ZDLENBQUM7R0FDVyxnQkFBZ0IsQ0FBRztTQUFuQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc0NvbmZpZywgQ29uZmlnTW9kdWxlLCBJMThuTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENhcnROb3RFbXB0eUd1YXJkIH0gZnJvbSAnLi4vLi4vLi4vY2FydCc7XG5pbXBvcnQgeyBDaGVja291dEF1dGhHdWFyZCB9IGZyb20gJy4uLy4uL2d1YXJkcyc7XG5pbXBvcnQgeyBDb3N0Q2VudGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb3N0LWNlbnRlci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIENoZWNrb3V0Q29zdENlbnRlckNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogQ29zdENlbnRlckNvbXBvbmVudCxcbiAgICAgICAgICBndWFyZHM6IFtDaGVja291dEF1dGhHdWFyZCwgQ2FydE5vdEVtcHR5R3VhcmRdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQ29zdENlbnRlckNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0Nvc3RDZW50ZXJDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3N0Q2VudGVyTW9kdWxlIHt9XG4iXX0=