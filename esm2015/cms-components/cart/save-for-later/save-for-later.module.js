import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaveForLaterComponent } from './save-for-later.component';
import { I18nModule, provideDefaultConfig, } from '@spartacus/core';
import { CartSharedModule } from '../cart-shared/cart-shared.module';
let SaveForLaterModule = class SaveForLaterModule {
};
SaveForLaterModule = __decorate([
    NgModule({
        imports: [CommonModule, I18nModule, CartSharedModule],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    SaveForLaterComponent: {
                        component: SaveForLaterComponent,
                    },
                },
                features: {
                    saveForLater: '1.5',
                },
            }),
        ],
        declarations: [SaveForLaterComponent],
        exports: [SaveForLaterComponent],
        entryComponents: [SaveForLaterComponent],
    })
], SaveForLaterModule);
export { SaveForLaterModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZS1mb3ItbGF0ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9zYXZlLWZvci1sYXRlci9zYXZlLWZvci1sYXRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFHTCxVQUFVLEVBQ1Ysb0JBQW9CLEdBQ3JCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFvQnJFLElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0NBQUcsQ0FBQTtBQUFyQixrQkFBa0I7SUFsQjlCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxVQUFVLEVBQUUsZ0JBQWdCLENBQUM7UUFDckQsU0FBUyxFQUFFO1lBQ1Qsb0JBQW9CLENBQTZCO2dCQUMvQyxhQUFhLEVBQUU7b0JBQ2IscUJBQXFCLEVBQUU7d0JBQ3JCLFNBQVMsRUFBRSxxQkFBcUI7cUJBQ2pDO2lCQUNGO2dCQUNELFFBQVEsRUFBRTtvQkFDUixZQUFZLEVBQUUsS0FBSztpQkFDcEI7YUFDRixDQUFDO1NBQ0g7UUFDRCxZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztRQUNyQyxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztRQUNoQyxlQUFlLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztLQUN6QyxDQUFDO0dBQ1csa0JBQWtCLENBQUc7U0FBckIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTYXZlRm9yTGF0ZXJDb21wb25lbnQgfSBmcm9tICcuL3NhdmUtZm9yLWxhdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICBDbXNDb25maWcsXG4gIEZlYXR1cmVzQ29uZmlnLFxuICBJMThuTW9kdWxlLFxuICBwcm92aWRlRGVmYXVsdENvbmZpZyxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENhcnRTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9jYXJ0LXNoYXJlZC9jYXJ0LXNoYXJlZC5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBJMThuTW9kdWxlLCBDYXJ0U2hhcmVkTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoPENtc0NvbmZpZyB8IEZlYXR1cmVzQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgU2F2ZUZvckxhdGVyQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBTYXZlRm9yTGF0ZXJDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZmVhdHVyZXM6IHtcbiAgICAgICAgc2F2ZUZvckxhdGVyOiAnMS41JyxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1NhdmVGb3JMYXRlckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTYXZlRm9yTGF0ZXJDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtTYXZlRm9yTGF0ZXJDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBTYXZlRm9yTGF0ZXJNb2R1bGUge31cbiJdfQ==