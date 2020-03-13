import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { I18nModule, provideDefaultConfig } from '@spartacus/core';
import { OutletModule } from '../../../cms-structure/outlet/outlet.module';
import { PageComponentModule } from '../../../cms-structure/page/component/page-component.module';
import { TabParagraphContainerComponent } from './tab-paragraph-container.component';
let TabParagraphContainerModule = class TabParagraphContainerModule {
};
TabParagraphContainerModule = __decorate([
    NgModule({
        imports: [CommonModule, PageComponentModule, OutletModule, I18nModule],
        providers: [
            provideDefaultConfig({
                cmsComponents: {
                    CMSTabParagraphContainer: {
                        component: TabParagraphContainerComponent,
                    },
                },
            }),
        ],
        declarations: [TabParagraphContainerComponent],
        entryComponents: [TabParagraphContainerComponent],
        exports: [TabParagraphContainerComponent],
    })
], TabParagraphContainerModule);
export { TabParagraphContainerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLXBhcmFncmFwaC1jb250YWluZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY29udGVudC90YWItcGFyYWdyYXBoLWNvbnRhaW5lci90YWItcGFyYWdyYXBoLWNvbnRhaW5lci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBYSxVQUFVLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDM0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDbEcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFpQnJGLElBQWEsMkJBQTJCLEdBQXhDLE1BQWEsMkJBQTJCO0NBQUcsQ0FBQTtBQUE5QiwyQkFBMkI7SUFmdkMsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLG1CQUFtQixFQUFFLFlBQVksRUFBRSxVQUFVLENBQUM7UUFDdEUsU0FBUyxFQUFFO1lBQ1Qsb0JBQW9CLENBQVk7Z0JBQzlCLGFBQWEsRUFBRTtvQkFDYix3QkFBd0IsRUFBRTt3QkFDeEIsU0FBUyxFQUFFLDhCQUE4QjtxQkFDMUM7aUJBQ0Y7YUFDRixDQUFDO1NBQ0g7UUFDRCxZQUFZLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztRQUM5QyxlQUFlLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztRQUNqRCxPQUFPLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztLQUMxQyxDQUFDO0dBQ1csMkJBQTJCLENBQUc7U0FBOUIsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNDb25maWcsIEkxOG5Nb2R1bGUsIHByb3ZpZGVEZWZhdWx0Q29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE91dGxldE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvb3V0bGV0L291dGxldC5tb2R1bGUnO1xuaW1wb3J0IHsgUGFnZUNvbXBvbmVudE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9jb21wb25lbnQvcGFnZS1jb21wb25lbnQubW9kdWxlJztcbmltcG9ydCB7IFRhYlBhcmFncmFwaENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdGFiLXBhcmFncmFwaC1jb250YWluZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUGFnZUNvbXBvbmVudE1vZHVsZSwgT3V0bGV0TW9kdWxlLCBJMThuTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIENNU1RhYlBhcmFncmFwaENvbnRhaW5lcjoge1xuICAgICAgICAgIGNvbXBvbmVudDogVGFiUGFyYWdyYXBoQ29udGFpbmVyQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbVGFiUGFyYWdyYXBoQ29udGFpbmVyQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbVGFiUGFyYWdyYXBoQ29udGFpbmVyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1RhYlBhcmFncmFwaENvbnRhaW5lckNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFRhYlBhcmFncmFwaENvbnRhaW5lck1vZHVsZSB7fVxuIl19