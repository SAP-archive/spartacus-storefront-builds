import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { ViewConfig } from './view-config';
import { Config, provideDefaultConfig } from '@spartacus/core';
var ViewConfigModule = /** @class */ (function () {
    function ViewConfigModule() {
    }
    ViewConfigModule_1 = ViewConfigModule;
    ViewConfigModule.forRoot = function () {
        return {
            ngModule: ViewConfigModule_1,
            providers: [
                provideDefaultConfig({
                    view: {},
                }),
                {
                    provide: ViewConfig,
                    useExisting: Config,
                },
            ],
        };
    };
    var ViewConfigModule_1;
    ViewConfigModule = ViewConfigModule_1 = __decorate([
        NgModule({})
    ], ViewConfigModule);
    return ViewConfigModule;
}());
export { ViewConfigModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1jb25maWcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbmZpZy92aWV3LWNvbmZpZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRy9EO0lBQUE7SUFlQSxDQUFDO3lCQWZZLGdCQUFnQjtJQUNwQix3QkFBTyxHQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxrQkFBZ0I7WUFDMUIsU0FBUyxFQUFFO2dCQUNULG9CQUFvQixDQUFDO29CQUNuQixJQUFJLEVBQUUsRUFBRTtpQkFDVCxDQUFDO2dCQUNGO29CQUNFLE9BQU8sRUFBRSxVQUFVO29CQUNuQixXQUFXLEVBQUUsTUFBTTtpQkFDcEI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOztJQWRVLGdCQUFnQjtRQUQ1QixRQUFRLENBQUMsRUFBRSxDQUFDO09BQ0EsZ0JBQWdCLENBZTVCO0lBQUQsdUJBQUM7Q0FBQSxBQWZELElBZUM7U0FmWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmlld0NvbmZpZyB9IGZyb20gJy4vdmlldy1jb25maWcnO1xuaW1wb3J0IHsgQ29uZmlnLCBwcm92aWRlRGVmYXVsdENvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBOZ01vZHVsZSh7fSlcbmV4cG9ydCBjbGFzcyBWaWV3Q29uZmlnTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxWaWV3Q29uZmlnTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBWaWV3Q29uZmlnTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKHtcbiAgICAgICAgICB2aWV3OiB7fSxcbiAgICAgICAgfSksXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBWaWV3Q29uZmlnLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBDb25maWcsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==