import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigModule, I18nModule } from '@spartacus/core';
import { GenericLinkModule } from '../../../shared/components/generic-link/generic-link.module';
import { NavigationModule } from '../navigation/navigation.module';
import { FooterNavigationComponent } from './footer-navigation.component';
var FooterNavigationModule = /** @class */ (function () {
    function FooterNavigationModule() {
    }
    FooterNavigationModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule,
                NavigationModule,
                GenericLinkModule,
                I18nModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        FooterNavigationComponent: {
                            component: FooterNavigationComponent,
                        },
                    },
                }),
            ],
            declarations: [FooterNavigationComponent],
            entryComponents: [FooterNavigationComponent],
            exports: [FooterNavigationComponent],
        })
    ], FooterNavigationModule);
    return FooterNavigationModule;
}());
export { FooterNavigationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLW5hdmlnYXRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbmF2aWdhdGlvbi9mb290ZXItbmF2aWdhdGlvbi9mb290ZXItbmF2aWdhdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQWEsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBcUIxRTtJQUFBO0lBQXFDLENBQUM7SUFBekIsc0JBQXNCO1FBbkJsQyxRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixZQUFZO2dCQUNaLGdCQUFnQjtnQkFDaEIsaUJBQWlCO2dCQUNqQixVQUFVO2dCQUNWLFlBQVksQ0FBQyxVQUFVLENBQVk7b0JBQ2pDLGFBQWEsRUFBRTt3QkFDYix5QkFBeUIsRUFBRTs0QkFDekIsU0FBUyxFQUFFLHlCQUF5Qjt5QkFDckM7cUJBQ0Y7aUJBQ0YsQ0FBQzthQUNIO1lBQ0QsWUFBWSxFQUFFLENBQUMseUJBQXlCLENBQUM7WUFDekMsZUFBZSxFQUFFLENBQUMseUJBQXlCLENBQUM7WUFDNUMsT0FBTyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDckMsQ0FBQztPQUNXLHNCQUFzQixDQUFHO0lBQUQsNkJBQUM7Q0FBQSxBQUF0QyxJQUFzQztTQUF6QixzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDbXNDb25maWcsIENvbmZpZ01vZHVsZSwgSTE4bk1vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBHZW5lcmljTGlua01vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2dlbmVyaWMtbGluay9nZW5lcmljLWxpbmsubW9kdWxlJztcbmltcG9ydCB7IE5hdmlnYXRpb25Nb2R1bGUgfSBmcm9tICcuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24ubW9kdWxlJztcbmltcG9ydCB7IEZvb3Rlck5hdmlnYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2Zvb3Rlci1uYXZpZ2F0aW9uLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIE5hdmlnYXRpb25Nb2R1bGUsXG4gICAgR2VuZXJpY0xpbmtNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgRm9vdGVyTmF2aWdhdGlvbkNvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogRm9vdGVyTmF2aWdhdGlvbkNvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0Zvb3Rlck5hdmlnYXRpb25Db21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtGb290ZXJOYXZpZ2F0aW9uQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0Zvb3Rlck5hdmlnYXRpb25Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBGb290ZXJOYXZpZ2F0aW9uTW9kdWxlIHt9XG4iXX0=