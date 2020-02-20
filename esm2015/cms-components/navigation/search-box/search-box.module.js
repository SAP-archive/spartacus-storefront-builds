import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigModule, I18nModule, UrlModule, } from '@spartacus/core';
import { IconModule } from '../../misc/icon/icon.module';
import { MediaModule } from '../../../shared/components/media/media.module';
import { HighlightPipe } from './highlight.pipe';
import { SearchBoxComponent } from './search-box.component';
let SearchBoxModule = class SearchBoxModule {
};
SearchBoxModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule,
            MediaModule,
            ConfigModule.withConfig({
                cmsComponents: {
                    SearchBoxComponent: {
                        component: SearchBoxComponent,
                    },
                },
            }),
            IconModule,
            UrlModule,
            I18nModule,
        ],
        declarations: [SearchBoxComponent, HighlightPipe],
        entryComponents: [SearchBoxComponent],
        exports: [SearchBoxComponent],
    })
], SearchBoxModule);
export { SearchBoxModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsWUFBWSxFQUNaLFVBQVUsRUFDVixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQXFCNUQsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtDQUFHLENBQUE7QUFBbEIsZUFBZTtJQXBCM0IsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLFlBQVk7WUFDWixXQUFXO1lBQ1gsWUFBWSxDQUFDLFVBQVUsQ0FBWTtnQkFDakMsYUFBYSxFQUFFO29CQUNiLGtCQUFrQixFQUFFO3dCQUNsQixTQUFTLEVBQUUsa0JBQWtCO3FCQUM5QjtpQkFDRjthQUNGLENBQUM7WUFDRixVQUFVO1lBQ1YsU0FBUztZQUNULFVBQVU7U0FDWDtRQUNELFlBQVksRUFBRSxDQUFDLGtCQUFrQixFQUFFLGFBQWEsQ0FBQztRQUNqRCxlQUFlLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztRQUNyQyxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztLQUM5QixDQUFDO0dBQ1csZUFBZSxDQUFHO1NBQWxCLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBDbXNDb25maWcsXG4gIENvbmZpZ01vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbiAgVXJsTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgSWNvbk1vZHVsZSB9IGZyb20gJy4uLy4uL21pc2MvaWNvbi9pY29uLm1vZHVsZSc7XG5pbXBvcnQgeyBNZWRpYU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL21lZGlhL21lZGlhLm1vZHVsZSc7XG5pbXBvcnQgeyBIaWdobGlnaHRQaXBlIH0gZnJvbSAnLi9oaWdobGlnaHQucGlwZSc7XG5pbXBvcnQgeyBTZWFyY2hCb3hDb21wb25lbnQgfSBmcm9tICcuL3NlYXJjaC1ib3guY29tcG9uZW50JztcbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIE1lZGlhTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBTZWFyY2hCb3hDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IFNlYXJjaEJveENvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgSWNvbk1vZHVsZSxcbiAgICBVcmxNb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbU2VhcmNoQm94Q29tcG9uZW50LCBIaWdobGlnaHRQaXBlXSxcbiAgZW50cnlDb21wb25lbnRzOiBbU2VhcmNoQm94Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW1NlYXJjaEJveENvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaEJveE1vZHVsZSB7fVxuIl19