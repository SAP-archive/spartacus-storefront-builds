import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard, ConfigModule, I18nModule, UrlModule, } from '@spartacus/core';
import { ListNavigationModule } from '../../../../shared/components/list-navigation/list-navigation.module';
import { OrderReturnRequestListComponent } from './order-return-request-list.component';
var ReturnRequestListModule = /** @class */ (function () {
    function ReturnRequestListModule() {
    }
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
    return ReturnRequestListModule;
}());
export { ReturnRequestListModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItcmV0dXJuLXJlcXVlc3QtbGlzdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvcmV0dXJuLXJlcXVlc3QtbGlzdC9vcmRlci1yZXR1cm4tcmVxdWVzdC1saXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxTQUFTLEVBRVQsWUFBWSxFQUNaLFVBQVUsRUFDVixTQUFTLEdBQ1YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUM1RyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQXNCeEY7SUFBQTtJQUFzQyxDQUFDO0lBQTFCLHVCQUF1QjtRQXBCbkMsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1osWUFBWSxDQUFDLFVBQVUsQ0FBWTtvQkFDakMsYUFBYSxFQUFFO3dCQUNiLCtCQUErQixFQUFFOzRCQUMvQixTQUFTLEVBQUUsK0JBQStCOzRCQUMxQyxNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUM7eUJBQ3BCO3FCQUNGO2lCQUNGLENBQUM7Z0JBQ0YsWUFBWTtnQkFDWixvQkFBb0I7Z0JBQ3BCLFNBQVM7Z0JBQ1QsVUFBVTthQUNYO1lBQ0QsWUFBWSxFQUFFLENBQUMsK0JBQStCLENBQUM7WUFDL0MsT0FBTyxFQUFFLENBQUMsK0JBQStCLENBQUM7WUFDMUMsZUFBZSxFQUFFLENBQUMsK0JBQStCLENBQUM7U0FDbkQsQ0FBQztPQUNXLHVCQUF1QixDQUFHO0lBQUQsOEJBQUM7Q0FBQSxBQUF2QyxJQUF1QztTQUExQix1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBBdXRoR3VhcmQsXG4gIENtc0NvbmZpZyxcbiAgQ29uZmlnTW9kdWxlLFxuICBJMThuTW9kdWxlLFxuICBVcmxNb2R1bGUsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBMaXN0TmF2aWdhdGlvbk1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2xpc3QtbmF2aWdhdGlvbi9saXN0LW5hdmlnYXRpb24ubW9kdWxlJztcbmltcG9ydCB7IE9yZGVyUmV0dXJuUmVxdWVzdExpc3RDb21wb25lbnQgfSBmcm9tICcuL29yZGVyLXJldHVybi1yZXF1ZXN0LWxpc3QuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgT3JkZXJSZXR1cm5SZXF1ZXN0TGlzdENvbXBvbmVudDoge1xuICAgICAgICAgIGNvbXBvbmVudDogT3JkZXJSZXR1cm5SZXF1ZXN0TGlzdENvbXBvbmVudCxcbiAgICAgICAgICBndWFyZHM6IFtBdXRoR3VhcmRdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgTGlzdE5hdmlnYXRpb25Nb2R1bGUsXG4gICAgVXJsTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW09yZGVyUmV0dXJuUmVxdWVzdExpc3RDb21wb25lbnRdLFxuICBleHBvcnRzOiBbT3JkZXJSZXR1cm5SZXF1ZXN0TGlzdENvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW09yZGVyUmV0dXJuUmVxdWVzdExpc3RDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBSZXR1cm5SZXF1ZXN0TGlzdE1vZHVsZSB7fVxuIl19