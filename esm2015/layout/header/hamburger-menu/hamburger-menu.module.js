import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfigModule } from '@spartacus/core';
import { HamburgerMenuComponent } from './hamburger-menu.component';
let HamburgerMenuModule = class HamburgerMenuModule {
};
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
export { HamburgerMenuModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFtYnVyZ2VyLW1lbnUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGF5b3V0L2hlYWRlci9oYW1idXJnZXItbWVudS9oYW1idXJnZXItbWVudS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBYSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQWdCcEUsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7Q0FBRyxDQUFBO0FBQXRCLG1CQUFtQjtJQWYvQixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxZQUFZO1lBQ1osWUFBWSxDQUFDLFVBQVUsQ0FBWTtnQkFDakMsYUFBYSxFQUFFO29CQUNiLHNCQUFzQixFQUFFO3dCQUN0QixTQUFTLEVBQUUsc0JBQXNCO3FCQUNsQztpQkFDRjthQUNGLENBQUM7U0FDSDtRQUNELFlBQVksRUFBRSxDQUFDLHNCQUFzQixDQUFDO1FBQ3RDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO1FBQ2pDLGVBQWUsRUFBRSxDQUFDLHNCQUFzQixDQUFDO0tBQzFDLENBQUM7R0FDVyxtQkFBbUIsQ0FBRztTQUF0QixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc0NvbmZpZywgQ29uZmlnTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEhhbWJ1cmdlck1lbnVDb21wb25lbnQgfSBmcm9tICcuL2hhbWJ1cmdlci1tZW51LmNvbXBvbmVudCc7XG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBIYW1idXJnZXJNZW51Q29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBIYW1idXJnZXJNZW51Q29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbSGFtYnVyZ2VyTWVudUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtIYW1idXJnZXJNZW51Q29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbSGFtYnVyZ2VyTWVudUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEhhbWJ1cmdlck1lbnVNb2R1bGUge31cbiJdfQ==