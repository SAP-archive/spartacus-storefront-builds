import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard, ConfigModule, I18nModule, UrlModule, } from '@spartacus/core';
import { ListNavigationModule } from '../../../../shared/components/list-navigation/list-navigation.module';
import { OrderReturnRequestListComponent } from './order-return-request-list.component';
let ReturnRequestListModule = class ReturnRequestListModule {
};
ReturnRequestListModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            ConfigModule.withConfig({
                cmsComponents: {
                    OrderReturnRequestListComponent: {
                        component: OrderReturnRequestListComponent,
                        guards: [AuthGuard],
                    },
                },
            }),
            RouterModule,
            ListNavigationModule,
            UrlModule,
            I18nModule,
        ],
        declarations: [OrderReturnRequestListComponent],
        exports: [OrderReturnRequestListComponent],
        entryComponents: [OrderReturnRequestListComponent],
    })
], ReturnRequestListModule);
export { ReturnRequestListModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItcmV0dXJuLXJlcXVlc3QtbGlzdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvcmV0dXJuLXJlcXVlc3QtbGlzdC9vcmRlci1yZXR1cm4tcmVxdWVzdC1saXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxTQUFTLEVBRVQsWUFBWSxFQUNaLFVBQVUsRUFDVixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUM1RyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQXNCeEYsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBdUI7Q0FBRyxDQUFBO0FBQTFCLHVCQUF1QjtJQXBCbkMsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLFlBQVksQ0FBQyxVQUFVLENBQVk7Z0JBQ2pDLGFBQWEsRUFBRTtvQkFDYiwrQkFBK0IsRUFBRTt3QkFDL0IsU0FBUyxFQUFFLCtCQUErQjt3QkFDMUMsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDO3FCQUNwQjtpQkFDRjthQUNGLENBQUM7WUFDRixZQUFZO1lBQ1osb0JBQW9CO1lBQ3BCLFNBQVM7WUFDVCxVQUFVO1NBQ1g7UUFDRCxZQUFZLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztRQUMvQyxPQUFPLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztRQUMxQyxlQUFlLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztLQUNuRCxDQUFDO0dBQ1csdUJBQXVCLENBQUc7U0FBMUIsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQXV0aEd1YXJkLFxuICBDbXNDb25maWcsXG4gIENvbmZpZ01vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbiAgVXJsTW9kdWxlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgTGlzdE5hdmlnYXRpb25Nb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9saXN0LW5hdmlnYXRpb24vbGlzdC1uYXZpZ2F0aW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBPcmRlclJldHVyblJlcXVlc3RMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9vcmRlci1yZXR1cm4tcmVxdWVzdC1saXN0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoPENtc0NvbmZpZz57XG4gICAgICBjbXNDb21wb25lbnRzOiB7XG4gICAgICAgIE9yZGVyUmV0dXJuUmVxdWVzdExpc3RDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IE9yZGVyUmV0dXJuUmVxdWVzdExpc3RDb21wb25lbnQsXG4gICAgICAgICAgZ3VhcmRzOiBbQXV0aEd1YXJkXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIExpc3ROYXZpZ2F0aW9uTW9kdWxlLFxuICAgIFVybE1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtPcmRlclJldHVyblJlcXVlc3RMaXN0Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW09yZGVyUmV0dXJuUmVxdWVzdExpc3RDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtPcmRlclJldHVyblJlcXVlc3RMaXN0Q29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUmV0dXJuUmVxdWVzdExpc3RNb2R1bGUge31cbiJdfQ==