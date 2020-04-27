import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { I18nModule, provideDefaultConfig, } from '@spartacus/core';
import { CartSharedModule } from '../cart-shared/cart-shared.module';
import { SaveForLaterComponent } from './save-for-later.component';
var SaveForLaterModule = /** @class */ (function () {
    function SaveForLaterModule() {
    }
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
                }),
            ],
            declarations: [SaveForLaterComponent],
            exports: [SaveForLaterComponent],
            entryComponents: [SaveForLaterComponent],
        })
    ], SaveForLaterModule);
    return SaveForLaterModule;
}());
export { SaveForLaterModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZS1mb3ItbGF0ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9zYXZlLWZvci1sYXRlci9zYXZlLWZvci1sYXRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFHTCxVQUFVLEVBQ1Ysb0JBQW9CLEdBQ3JCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFpQm5FO0lBQUE7SUFBaUMsQ0FBQztJQUFyQixrQkFBa0I7UUFmOUIsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQztZQUNyRCxTQUFTLEVBQUU7Z0JBQ1Qsb0JBQW9CLENBQTZCO29CQUMvQyxhQUFhLEVBQUU7d0JBQ2IscUJBQXFCLEVBQUU7NEJBQ3JCLFNBQVMsRUFBRSxxQkFBcUI7eUJBQ2pDO3FCQUNGO2lCQUNGLENBQUM7YUFDSDtZQUNELFlBQVksRUFBRSxDQUFDLHFCQUFxQixDQUFDO1lBQ3JDLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO1lBQ2hDLGVBQWUsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1NBQ3pDLENBQUM7T0FDVyxrQkFBa0IsQ0FBRztJQUFELHlCQUFDO0NBQUEsQUFBbEMsSUFBa0M7U0FBckIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDbXNDb25maWcsXG4gIEZlYXR1cmVzQ29uZmlnLFxuICBJMThuTW9kdWxlLFxuICBwcm92aWRlRGVmYXVsdENvbmZpZyxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IENhcnRTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9jYXJ0LXNoYXJlZC9jYXJ0LXNoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgU2F2ZUZvckxhdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zYXZlLWZvci1sYXRlci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBJMThuTW9kdWxlLCBDYXJ0U2hhcmVkTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoPENtc0NvbmZpZyB8IEZlYXR1cmVzQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgU2F2ZUZvckxhdGVyQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBTYXZlRm9yTGF0ZXJDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtTYXZlRm9yTGF0ZXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbU2F2ZUZvckxhdGVyQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbU2F2ZUZvckxhdGVyQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgU2F2ZUZvckxhdGVyTW9kdWxlIHt9XG4iXX0=