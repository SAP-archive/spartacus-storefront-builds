import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigModule } from '@spartacus/core';
import { LinkComponent } from './link.component';
import { GenericLinkModule } from '../../../shared/components/generic-link/generic-link.module';
var LinkModule = /** @class */ (function () {
    function LinkModule() {
    }
    LinkModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule,
                GenericLinkModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        CMSLinkComponent: { component: LinkComponent },
                    },
                }),
            ],
            declarations: [LinkComponent],
            exports: [LinkComponent],
            entryComponents: [LinkComponent],
        })
    ], LinkModule);
    return LinkModule;
}());
export { LinkModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jb250ZW50L2xpbmsvbGluay5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQWEsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBaUJoRztJQUFBO0lBQXlCLENBQUM7SUFBYixVQUFVO1FBZnRCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLFlBQVk7Z0JBQ1osaUJBQWlCO2dCQUNqQixZQUFZLENBQUMsVUFBVSxDQUFZO29CQUNqQyxhQUFhLEVBQUU7d0JBQ2IsZ0JBQWdCLEVBQUUsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFO3FCQUMvQztpQkFDRixDQUFDO2FBQ0g7WUFDRCxZQUFZLEVBQUUsQ0FBQyxhQUFhLENBQUM7WUFDN0IsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDO1lBQ3hCLGVBQWUsRUFBRSxDQUFDLGFBQWEsQ0FBQztTQUNqQyxDQUFDO09BQ1csVUFBVSxDQUFHO0lBQUQsaUJBQUM7Q0FBQSxBQUExQixJQUEwQjtTQUFiLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDbXNDb25maWcsIENvbmZpZ01vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBMaW5rQ29tcG9uZW50IH0gZnJvbSAnLi9saW5rLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHZW5lcmljTGlua01vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2dlbmVyaWMtbGluay9nZW5lcmljLWxpbmsubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgR2VuZXJpY0xpbmtNb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIENNU0xpbmtDb21wb25lbnQ6IHsgY29tcG9uZW50OiBMaW5rQ29tcG9uZW50IH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtMaW5rQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0xpbmtDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtMaW5rQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgTGlua01vZHVsZSB7fVxuIl19