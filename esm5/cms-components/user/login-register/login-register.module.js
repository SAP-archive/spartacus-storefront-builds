import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CheckoutModule, I18nModule, NotAuthGuard, provideDefaultConfig, UrlModule, } from '@spartacus/core';
import { PageSlotModule } from '../../../cms-structure/page/slot/page-slot.module';
import { LoginRegisterComponent } from './login-register.component';
var LoginRegisterModule = /** @class */ (function () {
    function LoginRegisterModule() {
    }
    LoginRegisterModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule,
                UrlModule,
                PageSlotModule,
                I18nModule,
                CheckoutModule,
            ],
            providers: [
                provideDefaultConfig({
                    cmsComponents: {
                        ReturningCustomerRegisterComponent: {
                            component: LoginRegisterComponent,
                            guards: [NotAuthGuard],
                        },
                    },
                }),
            ],
            declarations: [LoginRegisterComponent],
            entryComponents: [LoginRegisterComponent],
            exports: [LoginRegisterComponent],
        })
    ], LoginRegisterModule);
    return LoginRegisterModule;
}());
export { LoginRegisterModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tcmVnaXN0ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvdXNlci9sb2dpbi1yZWdpc3Rlci9sb2dpbi1yZWdpc3Rlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsY0FBYyxFQUVkLFVBQVUsRUFDVixZQUFZLEVBQ1osb0JBQW9CLEVBQ3BCLFNBQVMsR0FDVixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNuRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQXlCcEU7SUFBQTtJQUFrQyxDQUFDO0lBQXRCLG1CQUFtQjtRQXZCL0IsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1osWUFBWTtnQkFDWixTQUFTO2dCQUNULGNBQWM7Z0JBQ2QsVUFBVTtnQkFDVixjQUFjO2FBQ2Y7WUFDRCxTQUFTLEVBQUU7Z0JBQ1Qsb0JBQW9CLENBQVk7b0JBQzlCLGFBQWEsRUFBRTt3QkFDYixrQ0FBa0MsRUFBRTs0QkFDbEMsU0FBUyxFQUFFLHNCQUFzQjs0QkFDakMsTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDO3lCQUN2QjtxQkFDRjtpQkFDRixDQUFDO2FBQ0g7WUFDRCxZQUFZLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztZQUN0QyxlQUFlLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztZQUN6QyxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUNsQyxDQUFDO09BQ1csbUJBQW1CLENBQUc7SUFBRCwwQkFBQztDQUFBLEFBQW5DLElBQW1DO1NBQXRCLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIENoZWNrb3V0TW9kdWxlLFxuICBDbXNDb25maWcsXG4gIEkxOG5Nb2R1bGUsXG4gIE5vdEF1dGhHdWFyZCxcbiAgcHJvdmlkZURlZmF1bHRDb25maWcsXG4gIFVybE1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFBhZ2VTbG90TW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL3Nsb3QvcGFnZS1zbG90Lm1vZHVsZSc7XG5pbXBvcnQgeyBMb2dpblJlZ2lzdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi1yZWdpc3Rlci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBVcmxNb2R1bGUsXG4gICAgUGFnZVNsb3RNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBDaGVja291dE1vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIFJldHVybmluZ0N1c3RvbWVyUmVnaXN0ZXJDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IExvZ2luUmVnaXN0ZXJDb21wb25lbnQsXG4gICAgICAgICAgZ3VhcmRzOiBbTm90QXV0aEd1YXJkXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0xvZ2luUmVnaXN0ZXJDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtMb2dpblJlZ2lzdGVyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0xvZ2luUmVnaXN0ZXJDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dpblJlZ2lzdGVyTW9kdWxlIHt9XG4iXX0=