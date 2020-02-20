import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfigModule, I18nModule } from '@spartacus/core';
import { OutletModule } from '../../../cms-structure/outlet/outlet.module';
import { PageComponentModule } from '../../../cms-structure/page/component/page-component.module';
import { TabParagraphContainerComponent } from './tab-paragraph-container.component';
let TabParagraphContainerModule = class TabParagraphContainerModule {
};
TabParagraphContainerModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            ConfigModule.withConfig({
                cmsComponents: {
                    CMSTabParagraphContainer: {
                        component: TabParagraphContainerComponent,
                    },
                },
            }),
            PageComponentModule,
            OutletModule,
            I18nModule,
        ],
        declarations: [TabParagraphContainerComponent],
        entryComponents: [TabParagraphContainerComponent],
        exports: [TabParagraphContainerComponent],
    })
], TabParagraphContainerModule);
export { TabParagraphContainerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLXBhcmFncmFwaC1jb250YWluZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY29udGVudC90YWItcGFyYWdyYXBoLWNvbnRhaW5lci90YWItcGFyYWdyYXBoLWNvbnRhaW5lci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBYSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBb0JyRixJQUFhLDJCQUEyQixHQUF4QyxNQUFhLDJCQUEyQjtDQUFHLENBQUE7QUFBOUIsMkJBQTJCO0lBbEJ2QyxRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxZQUFZO1lBQ1osWUFBWSxDQUFDLFVBQVUsQ0FBWTtnQkFDakMsYUFBYSxFQUFFO29CQUNiLHdCQUF3QixFQUFFO3dCQUN4QixTQUFTLEVBQUUsOEJBQThCO3FCQUMxQztpQkFDRjthQUNGLENBQUM7WUFDRixtQkFBbUI7WUFDbkIsWUFBWTtZQUNaLFVBQVU7U0FDWDtRQUNELFlBQVksRUFBRSxDQUFDLDhCQUE4QixDQUFDO1FBQzlDLGVBQWUsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1FBQ2pELE9BQU8sRUFBRSxDQUFDLDhCQUE4QixDQUFDO0tBQzFDLENBQUM7R0FDVywyQkFBMkIsQ0FBRztTQUE5QiwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc0NvbmZpZywgQ29uZmlnTW9kdWxlLCBJMThuTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE91dGxldE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvb3V0bGV0L291dGxldC5tb2R1bGUnO1xuaW1wb3J0IHsgUGFnZUNvbXBvbmVudE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9jb21wb25lbnQvcGFnZS1jb21wb25lbnQubW9kdWxlJztcbmltcG9ydCB7IFRhYlBhcmFncmFwaENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdGFiLXBhcmFncmFwaC1jb250YWluZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgQ01TVGFiUGFyYWdyYXBoQ29udGFpbmVyOiB7XG4gICAgICAgICAgY29tcG9uZW50OiBUYWJQYXJhZ3JhcGhDb250YWluZXJDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIFBhZ2VDb21wb25lbnRNb2R1bGUsXG4gICAgT3V0bGV0TW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1RhYlBhcmFncmFwaENvbnRhaW5lckNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1RhYlBhcmFncmFwaENvbnRhaW5lckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtUYWJQYXJhZ3JhcGhDb250YWluZXJDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJQYXJhZ3JhcGhDb250YWluZXJNb2R1bGUge31cbiJdfQ==