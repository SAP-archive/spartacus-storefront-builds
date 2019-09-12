/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParagraphComponent } from './paragraph.component';
import { ConfigModule } from '@spartacus/core';
var CmsParagraphModule = /** @class */ (function () {
    function CmsParagraphModule() {
    }
    CmsParagraphModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        ConfigModule.withConfig((/** @type {?} */ ({
                            cmsComponents: {
                                CMSParagraphComponent: {
                                    component: ParagraphComponent,
                                },
                                CMSTabParagraphComponent: {
                                    component: ParagraphComponent,
                                },
                            },
                        }))),
                    ],
                    declarations: [ParagraphComponent],
                    exports: [ParagraphComponent],
                    entryComponents: [ParagraphComponent],
                },] }
    ];
    return CmsParagraphModule;
}());
export { CmsParagraphModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYWdyYXBoLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NvbnRlbnQvcGFyYWdyYXBoL3BhcmFncmFwaC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUcvQztJQUFBO0lBa0JpQyxDQUFDOztnQkFsQmpDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZLENBQUMsVUFBVSxDQUFDLG1CQUFXOzRCQUNqQyxhQUFhLEVBQUU7Z0NBQ2IscUJBQXFCLEVBQUU7b0NBQ3JCLFNBQVMsRUFBRSxrQkFBa0I7aUNBQzlCO2dDQUNELHdCQUF3QixFQUFFO29DQUN4QixTQUFTLEVBQUUsa0JBQWtCO2lDQUM5Qjs2QkFDRjt5QkFDRixFQUFBLENBQUM7cUJBQ0g7b0JBQ0QsWUFBWSxFQUFFLENBQUMsa0JBQWtCLENBQUM7b0JBQ2xDLE9BQU8sRUFBRSxDQUFDLGtCQUFrQixDQUFDO29CQUM3QixlQUFlLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztpQkFDdEM7O0lBQ2dDLHlCQUFDO0NBQUEsQUFsQmxDLElBa0JrQztTQUFyQixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFBhcmFncmFwaENvbXBvbmVudCB9IGZyb20gJy4vcGFyYWdyYXBoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb25maWdNb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQ01TUGFyYWdyYXBoQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBQYXJhZ3JhcGhDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICAgIENNU1RhYlBhcmFncmFwaENvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogUGFyYWdyYXBoQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUGFyYWdyYXBoQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1BhcmFncmFwaENvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1BhcmFncmFwaENvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIENtc1BhcmFncmFwaE1vZHVsZSB7fVxuIl19