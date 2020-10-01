import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { I18nModule, provideDefaultConfig } from '@spartacus/core';
import { CartNotEmptyGuard } from '../../../cart/cart-not-empty.guard';
import { IconModule } from '../../../misc/icon/icon.module';
import { CheckoutAuthGuard } from '../../guards/checkout-auth.guard';
import { ScheduleReplenishmentOrderComponent } from './schedule-replenishment-order.component';
export class ScheduleReplenishmentOrderModule {
}
ScheduleReplenishmentOrderModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, RouterModule, I18nModule, IconModule],
                providers: [
                    provideDefaultConfig({
                        cmsComponents: {
                            CheckoutScheduleReplenishmentOrder: {
                                component: ScheduleReplenishmentOrderComponent,
                                guards: [CheckoutAuthGuard, CartNotEmptyGuard],
                            },
                        },
                    }),
                ],
                declarations: [ScheduleReplenishmentOrderComponent],
                entryComponents: [ScheduleReplenishmentOrderComponent],
                exports: [ScheduleReplenishmentOrderComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUtcmVwbGVuaXNobWVudC1vcmRlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtY29tcG9uZW50cy9jaGVja291dC9jb21wb25lbnRzL3NjaGVkdWxlLXJlcGxlbmlzaG1lbnQtb3JkZXIvc2NoZWR1bGUtcmVwbGVuaXNobWVudC1vcmRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBYSxVQUFVLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFrQi9GLE1BQU0sT0FBTyxnQ0FBZ0M7OztZQWhCNUMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQztnQkFDN0QsU0FBUyxFQUFFO29CQUNULG9CQUFvQixDQUFZO3dCQUM5QixhQUFhLEVBQUU7NEJBQ2Isa0NBQWtDLEVBQUU7Z0NBQ2xDLFNBQVMsRUFBRSxtQ0FBbUM7Z0NBQzlDLE1BQU0sRUFBRSxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDOzZCQUMvQzt5QkFDRjtxQkFDRixDQUFDO2lCQUNIO2dCQUNELFlBQVksRUFBRSxDQUFDLG1DQUFtQyxDQUFDO2dCQUNuRCxlQUFlLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztnQkFDdEQsT0FBTyxFQUFFLENBQUMsbUNBQW1DLENBQUM7YUFDL0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDbXNDb25maWcsIEkxOG5Nb2R1bGUsIHByb3ZpZGVEZWZhdWx0Q29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENhcnROb3RFbXB0eUd1YXJkIH0gZnJvbSAnLi4vLi4vLi4vY2FydC9jYXJ0LW5vdC1lbXB0eS5ndWFyZCc7XG5pbXBvcnQgeyBJY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vbWlzYy9pY29uL2ljb24ubW9kdWxlJztcbmltcG9ydCB7IENoZWNrb3V0QXV0aEd1YXJkIH0gZnJvbSAnLi4vLi4vZ3VhcmRzL2NoZWNrb3V0LWF1dGguZ3VhcmQnO1xuaW1wb3J0IHsgU2NoZWR1bGVSZXBsZW5pc2htZW50T3JkZXJDb21wb25lbnQgfSBmcm9tICcuL3NjaGVkdWxlLXJlcGxlbmlzaG1lbnQtb3JkZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUm91dGVyTW9kdWxlLCBJMThuTW9kdWxlLCBJY29uTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIENoZWNrb3V0U2NoZWR1bGVSZXBsZW5pc2htZW50T3JkZXI6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IFNjaGVkdWxlUmVwbGVuaXNobWVudE9yZGVyQ29tcG9uZW50LFxuICAgICAgICAgIGd1YXJkczogW0NoZWNrb3V0QXV0aEd1YXJkLCBDYXJ0Tm90RW1wdHlHdWFyZF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtTY2hlZHVsZVJlcGxlbmlzaG1lbnRPcmRlckNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1NjaGVkdWxlUmVwbGVuaXNobWVudE9yZGVyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1NjaGVkdWxlUmVwbGVuaXNobWVudE9yZGVyQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgU2NoZWR1bGVSZXBsZW5pc2htZW50T3JkZXJNb2R1bGUge31cbiJdfQ==