import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfigModule } from '@spartacus/core';
import { HamburgerMenuComponent } from './hamburger-menu.component';
var HamburgerMenuModule = /** @class */ (function () {
    function HamburgerMenuModule() {
    }
    HamburgerMenuModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ConfigModule.withConfig({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFtYnVyZ2VyLW1lbnUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2hlYWRlci9oYW1idXJnZXItbWVudS9oYW1idXJnZXItbWVudS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBYSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQWdCcEU7SUFBQTtJQUFrQyxDQUFDO0lBQXRCLG1CQUFtQjtRQWYvQixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixZQUFZLENBQUMsVUFBVSxDQUFZO29CQUNqQyxhQUFhLEVBQUU7d0JBQ2Isc0JBQXNCLEVBQUU7NEJBQ3RCLFNBQVMsRUFBRSxzQkFBc0I7eUJBQ2xDO3FCQUNGO2lCQUNGLENBQUM7YUFDSDtZQUNELFlBQVksRUFBRSxDQUFDLHNCQUFzQixDQUFDO1lBQ3RDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO1lBQ2pDLGVBQWUsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQzFDLENBQUM7T0FDVyxtQkFBbUIsQ0FBRztJQUFELDBCQUFDO0NBQUEsQUFBbkMsSUFBbUM7U0FBdEIsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNDb25maWcsIENvbmZpZ01vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBIYW1idXJnZXJNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9oYW1idXJnZXItbWVudS5jb21wb25lbnQnO1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgSGFtYnVyZ2VyTWVudUNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogSGFtYnVyZ2VyTWVudUNvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0hhbWJ1cmdlck1lbnVDb21wb25lbnRdLFxuICBleHBvcnRzOiBbSGFtYnVyZ2VyTWVudUNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0hhbWJ1cmdlck1lbnVDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBIYW1idXJnZXJNZW51TW9kdWxlIHt9XG4iXX0=