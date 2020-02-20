import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfigModule, I18nModule, UrlModule, } from '@spartacus/core';
import { IconModule } from '../../misc/icon/icon.module';
import { MediaModule } from '../../../shared/components/media/media.module';
import { HighlightPipe } from './highlight.pipe';
import { SearchBoxComponent } from './search-box.component';
var SearchBoxModule = /** @class */ (function () {
    function SearchBoxModule() {
    }
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
    return SearchBoxModule;
}());
export { SearchBoxModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsWUFBWSxFQUNaLFVBQVUsRUFDVixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQXFCNUQ7SUFBQTtJQUE4QixDQUFDO0lBQWxCLGVBQWU7UUFwQjNCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLFlBQVk7Z0JBQ1osV0FBVztnQkFDWCxZQUFZLENBQUMsVUFBVSxDQUFZO29CQUNqQyxhQUFhLEVBQUU7d0JBQ2Isa0JBQWtCLEVBQUU7NEJBQ2xCLFNBQVMsRUFBRSxrQkFBa0I7eUJBQzlCO3FCQUNGO2lCQUNGLENBQUM7Z0JBQ0YsVUFBVTtnQkFDVixTQUFTO2dCQUNULFVBQVU7YUFDWDtZQUNELFlBQVksRUFBRSxDQUFDLGtCQUFrQixFQUFFLGFBQWEsQ0FBQztZQUNqRCxlQUFlLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztZQUNyQyxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztTQUM5QixDQUFDO09BQ1csZUFBZSxDQUFHO0lBQUQsc0JBQUM7Q0FBQSxBQUEvQixJQUErQjtTQUFsQixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQ21zQ29uZmlnLFxuICBDb25maWdNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG4gIFVybE1vZHVsZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEljb25Nb2R1bGUgfSBmcm9tICcuLi8uLi9taXNjL2ljb24vaWNvbi5tb2R1bGUnO1xuaW1wb3J0IHsgTWVkaWFNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9tZWRpYS9tZWRpYS5tb2R1bGUnO1xuaW1wb3J0IHsgSGlnaGxpZ2h0UGlwZSB9IGZyb20gJy4vaGlnaGxpZ2h0LnBpcGUnO1xuaW1wb3J0IHsgU2VhcmNoQm94Q29tcG9uZW50IH0gZnJvbSAnLi9zZWFyY2gtYm94LmNvbXBvbmVudCc7XG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBNZWRpYU1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgU2VhcmNoQm94Q29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBTZWFyY2hCb3hDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIEljb25Nb2R1bGUsXG4gICAgVXJsTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1NlYXJjaEJveENvbXBvbmVudCwgSGlnaGxpZ2h0UGlwZV0sXG4gIGVudHJ5Q29tcG9uZW50czogW1NlYXJjaEJveENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTZWFyY2hCb3hDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hCb3hNb2R1bGUge31cbiJdfQ==