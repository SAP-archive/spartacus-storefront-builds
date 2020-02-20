import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParagraphComponent } from './paragraph.component';
import { ConfigModule } from '@spartacus/core';
var CmsParagraphModule = /** @class */ (function () {
    function CmsParagraphModule() {
    }
    CmsParagraphModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        CMSParagraphComponent: {
                            component: ParagraphComponent,
                        },
                        CMSTabParagraphComponent: {
                            component: ParagraphComponent,
                        },
                    },
                }),
            ],
            declarations: [ParagraphComponent],
            exports: [ParagraphComponent],
            entryComponents: [ParagraphComponent],
        })
    ], CmsParagraphModule);
    return CmsParagraphModule;
}());
export { CmsParagraphModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYWdyYXBoLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NvbnRlbnQvcGFyYWdyYXBoL3BhcmFncmFwaC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQXFCL0M7SUFBQTtJQUFpQyxDQUFDO0lBQXJCLGtCQUFrQjtRQWxCOUIsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1osWUFBWSxDQUFDLFVBQVUsQ0FBWTtvQkFDakMsYUFBYSxFQUFFO3dCQUNiLHFCQUFxQixFQUFFOzRCQUNyQixTQUFTLEVBQUUsa0JBQWtCO3lCQUM5Qjt3QkFDRCx3QkFBd0IsRUFBRTs0QkFDeEIsU0FBUyxFQUFFLGtCQUFrQjt5QkFDOUI7cUJBQ0Y7aUJBQ0YsQ0FBQzthQUNIO1lBQ0QsWUFBWSxFQUFFLENBQUMsa0JBQWtCLENBQUM7WUFDbEMsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUM7WUFDN0IsZUFBZSxFQUFFLENBQUMsa0JBQWtCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGtCQUFrQixDQUFHO0lBQUQseUJBQUM7Q0FBQSxBQUFsQyxJQUFrQztTQUFyQixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFBhcmFncmFwaENvbXBvbmVudCB9IGZyb20gJy4vcGFyYWdyYXBoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb25maWdNb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQ01TUGFyYWdyYXBoQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBQYXJhZ3JhcGhDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICAgIENNU1RhYlBhcmFncmFwaENvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogUGFyYWdyYXBoQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUGFyYWdyYXBoQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1BhcmFncmFwaENvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1BhcmFncmFwaENvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIENtc1BhcmFncmFwaE1vZHVsZSB7fVxuIl19