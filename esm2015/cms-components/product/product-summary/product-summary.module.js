import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfigModule, I18nModule } from '@spartacus/core';
import { OutletModule } from '../../../cms-structure/outlet/outlet.module';
import { ProductSummaryComponent } from './product-summary.component';
let ProductSummaryModule = class ProductSummaryModule {
};
ProductSummaryModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            OutletModule,
            I18nModule,
            ConfigModule.withConfig({
                cmsComponents: {
                    ProductSummaryComponent: {
                        component: ProductSummaryComponent,
                    },
                },
            }),
        ],
        declarations: [ProductSummaryComponent],
        entryComponents: [ProductSummaryComponent],
        exports: [ProductSummaryComponent],
    })
], ProductSummaryModule);
export { ProductSummaryModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zdW1tYXJ5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1zdW1tYXJ5L3Byb2R1Y3Qtc3VtbWFyeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBYSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBbUJ0RSxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtDQUFHLENBQUE7QUFBdkIsb0JBQW9CO0lBakJoQyxRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxZQUFZO1lBQ1osWUFBWTtZQUNaLFVBQVU7WUFDVixZQUFZLENBQUMsVUFBVSxDQUFZO2dCQUNqQyxhQUFhLEVBQUU7b0JBQ2IsdUJBQXVCLEVBQUU7d0JBQ3ZCLFNBQVMsRUFBRSx1QkFBdUI7cUJBQ25DO2lCQUNGO2FBQ0YsQ0FBQztTQUNIO1FBQ0QsWUFBWSxFQUFFLENBQUMsdUJBQXVCLENBQUM7UUFDdkMsZUFBZSxFQUFFLENBQUMsdUJBQXVCLENBQUM7UUFDMUMsT0FBTyxFQUFFLENBQUMsdUJBQXVCLENBQUM7S0FDbkMsQ0FBQztHQUNXLG9CQUFvQixDQUFHO1NBQXZCLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29uZmlnLCBDb25maWdNb2R1bGUsIEkxOG5Nb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT3V0bGV0TW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9vdXRsZXQvb3V0bGV0Lm1vZHVsZSc7XG5pbXBvcnQgeyBQcm9kdWN0U3VtbWFyeUNvbXBvbmVudCB9IGZyb20gJy4vcHJvZHVjdC1zdW1tYXJ5LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgT3V0bGV0TW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIFByb2R1Y3RTdW1tYXJ5Q29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBQcm9kdWN0U3VtbWFyeUNvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1Byb2R1Y3RTdW1tYXJ5Q29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbUHJvZHVjdFN1bW1hcnlDb21wb25lbnRdLFxuICBleHBvcnRzOiBbUHJvZHVjdFN1bW1hcnlDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0U3VtbWFyeU1vZHVsZSB7fVxuIl19