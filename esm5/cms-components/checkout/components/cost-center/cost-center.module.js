import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfigModule, I18nModule } from '@spartacus/core';
import { CartNotEmptyGuard } from '../../../cart';
import { CheckoutAuthGuard } from '../../guards';
import { CostCenterComponent } from './cost-center.component';
var CostCenterModule = /** @class */ (function () {
    function CostCenterModule() {
    }
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
    return CostCenterModule;
}());
export { CostCenterModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zdC1jZW50ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY29tcG9uZW50cy9jb3N0LWNlbnRlci9jb3N0LWNlbnRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBYSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNqRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQWtCOUQ7SUFBQTtJQUErQixDQUFDO0lBQW5CLGdCQUFnQjtRQWhCNUIsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1osVUFBVTtnQkFDVixZQUFZLENBQUMsVUFBVSxDQUFZO29CQUNqQyxhQUFhLEVBQUU7d0JBQ2IsMkJBQTJCLEVBQUU7NEJBQzNCLFNBQVMsRUFBRSxtQkFBbUI7NEJBQzlCLE1BQU0sRUFBRSxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDO3lCQUMvQztxQkFDRjtpQkFDRixDQUFDO2FBQ0g7WUFDRCxZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztZQUNuQyxlQUFlLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztTQUN2QyxDQUFDO09BQ1csZ0JBQWdCLENBQUc7SUFBRCx1QkFBQztDQUFBLEFBQWhDLElBQWdDO1NBQW5CLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29uZmlnLCBDb25maWdNb2R1bGUsIEkxOG5Nb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ2FydE5vdEVtcHR5R3VhcmQgfSBmcm9tICcuLi8uLi8uLi9jYXJ0JztcbmltcG9ydCB7IENoZWNrb3V0QXV0aEd1YXJkIH0gZnJvbSAnLi4vLi4vZ3VhcmRzJztcbmltcG9ydCB7IENvc3RDZW50ZXJDb21wb25lbnQgfSBmcm9tICcuL2Nvc3QtY2VudGVyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQ2hlY2tvdXRDb3N0Q2VudGVyQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBDb3N0Q2VudGVyQ29tcG9uZW50LFxuICAgICAgICAgIGd1YXJkczogW0NoZWNrb3V0QXV0aEd1YXJkLCBDYXJ0Tm90RW1wdHlHdWFyZF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtDb3N0Q2VudGVyQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbQ29zdENlbnRlckNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIENvc3RDZW50ZXJNb2R1bGUge31cbiJdfQ==