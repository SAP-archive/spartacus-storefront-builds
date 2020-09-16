import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { provideDefaultConfig } from '@spartacus/core';
import { HamburgerMenuComponent } from './hamburger-menu.component';
export class HamburgerMenuModule {
}
HamburgerMenuModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFtYnVyZ2VyLW1lbnUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvbGF5b3V0L2hlYWRlci9oYW1idXJnZXItbWVudS9oYW1idXJnZXItbWVudS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFhLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFpQnBFLE1BQU0sT0FBTyxtQkFBbUI7OztZQWYvQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixTQUFTLEVBQUU7b0JBQ1Qsb0JBQW9CLENBQVk7d0JBQzlCLGFBQWEsRUFBRTs0QkFDYixzQkFBc0IsRUFBRTtnQ0FDdEIsU0FBUyxFQUFFLHNCQUFzQjs2QkFDbEM7eUJBQ0Y7cUJBQ0YsQ0FBQztpQkFDSDtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztnQkFDdEMsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7Z0JBQ2pDLGVBQWUsRUFBRSxDQUFDLHNCQUFzQixDQUFDO2FBQzFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNDb25maWcsIHByb3ZpZGVEZWZhdWx0Q29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEhhbWJ1cmdlck1lbnVDb21wb25lbnQgfSBmcm9tICcuL2hhbWJ1cmdlci1tZW51LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgSGFtYnVyZ2VyTWVudUNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogSGFtYnVyZ2VyTWVudUNvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0hhbWJ1cmdlck1lbnVDb21wb25lbnRdLFxuICBleHBvcnRzOiBbSGFtYnVyZ2VyTWVudUNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0hhbWJ1cmdlck1lbnVDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBIYW1idXJnZXJNZW51TW9kdWxlIHt9XG4iXX0=