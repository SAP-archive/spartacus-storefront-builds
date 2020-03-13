import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { provideDefaultConfig } from '@spartacus/core';
import { HamburgerMenuComponent } from './hamburger-menu.component';
var HamburgerMenuModule = /** @class */ (function () {
    function HamburgerMenuModule() {
    }
    HamburgerMenuModule = __decorate([
        NgModule({
            imports: [CommonModule],
            providers: [
                provideDefaultConfig({
                    cmsComponents: {
                        HamburgerMenuComponent: {
                            component: HamburgerMenuComponent,
                        },
                    },
                }),
            ],
            declarations: [HamburgerMenuComponent],
            exports: [HamburgerMenuComponent],
            entryComponents: [HamburgerMenuComponent],
        })
    ], HamburgerMenuModule);
    return HamburgerMenuModule;
}());
export { HamburgerMenuModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFtYnVyZ2VyLW1lbnUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2hlYWRlci9oYW1idXJnZXItbWVudS9oYW1idXJnZXItbWVudS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBYSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBaUJwRTtJQUFBO0lBQWtDLENBQUM7SUFBdEIsbUJBQW1CO1FBZi9CLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztZQUN2QixTQUFTLEVBQUU7Z0JBQ1Qsb0JBQW9CLENBQVk7b0JBQzlCLGFBQWEsRUFBRTt3QkFDYixzQkFBc0IsRUFBRTs0QkFDdEIsU0FBUyxFQUFFLHNCQUFzQjt5QkFDbEM7cUJBQ0Y7aUJBQ0YsQ0FBQzthQUNIO1lBQ0QsWUFBWSxFQUFFLENBQUMsc0JBQXNCLENBQUM7WUFDdEMsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7WUFDakMsZUFBZSxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDMUMsQ0FBQztPQUNXLG1CQUFtQixDQUFHO0lBQUQsMEJBQUM7Q0FBQSxBQUFuQyxJQUFtQztTQUF0QixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc0NvbmZpZywgcHJvdmlkZURlZmF1bHRDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgSGFtYnVyZ2VyTWVudUNvbXBvbmVudCB9IGZyb20gJy4vaGFtYnVyZ2VyLW1lbnUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBIYW1idXJnZXJNZW51Q29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBIYW1idXJnZXJNZW51Q29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbSGFtYnVyZ2VyTWVudUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtIYW1idXJnZXJNZW51Q29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbSGFtYnVyZ2VyTWVudUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEhhbWJ1cmdlck1lbnVNb2R1bGUge31cbiJdfQ==