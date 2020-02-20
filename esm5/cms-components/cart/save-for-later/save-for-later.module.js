import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaveForLaterComponent } from './save-for-later.component';
import { ConfigModule, I18nModule, } from '@spartacus/core';
import { CartSharedModule } from '../cart-shared/cart-shared.module';
var SaveForLaterModule = /** @class */ (function () {
    function SaveForLaterModule() {
    }
    SaveForLaterModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        SaveForLaterComponent: {
                            component: SaveForLaterComponent,
                        },
                    },
                    features: {
                        saveForLater: '1.5',
                    },
                }),
                I18nModule,
                CartSharedModule,
            ],
            declarations: [SaveForLaterComponent],
            exports: [SaveForLaterComponent],
            entryComponents: [SaveForLaterComponent],
        })
    ], SaveForLaterModule);
    return SaveForLaterModule;
}());
export { SaveForLaterModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZS1mb3ItbGF0ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9zYXZlLWZvci1sYXRlci9zYXZlLWZvci1sYXRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFDTCxZQUFZLEVBRVosVUFBVSxHQUVYLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFzQnJFO0lBQUE7SUFBaUMsQ0FBQztJQUFyQixrQkFBa0I7UUFwQjlCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLFlBQVksQ0FBQyxVQUFVLENBQTZCO29CQUNsRCxhQUFhLEVBQUU7d0JBQ2IscUJBQXFCLEVBQUU7NEJBQ3JCLFNBQVMsRUFBRSxxQkFBcUI7eUJBQ2pDO3FCQUNGO29CQUNELFFBQVEsRUFBRTt3QkFDUixZQUFZLEVBQUUsS0FBSztxQkFDcEI7aUJBQ0YsQ0FBQztnQkFDRixVQUFVO2dCQUNWLGdCQUFnQjthQUNqQjtZQUNELFlBQVksRUFBRSxDQUFDLHFCQUFxQixDQUFDO1lBQ3JDLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO1lBQ2hDLGVBQWUsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1NBQ3pDLENBQUM7T0FDVyxrQkFBa0IsQ0FBRztJQUFELHlCQUFDO0NBQUEsQUFBbEMsSUFBa0M7U0FBckIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTYXZlRm9yTGF0ZXJDb21wb25lbnQgfSBmcm9tICcuL3NhdmUtZm9yLWxhdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICBDb25maWdNb2R1bGUsXG4gIENtc0NvbmZpZyxcbiAgSTE4bk1vZHVsZSxcbiAgRmVhdHVyZXNDb25maWcsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDYXJ0U2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vY2FydC1zaGFyZWQvY2FydC1zaGFyZWQubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnIHwgRmVhdHVyZXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBTYXZlRm9yTGF0ZXJDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IFNhdmVGb3JMYXRlckNvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBmZWF0dXJlczoge1xuICAgICAgICBzYXZlRm9yTGF0ZXI6ICcxLjUnLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBJMThuTW9kdWxlLFxuICAgIENhcnRTaGFyZWRNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1NhdmVGb3JMYXRlckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTYXZlRm9yTGF0ZXJDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtTYXZlRm9yTGF0ZXJDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBTYXZlRm9yTGF0ZXJNb2R1bGUge31cbiJdfQ==