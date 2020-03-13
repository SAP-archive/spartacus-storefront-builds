var ViewConfigModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { ViewConfig } from './view-config';
import { Config, provideDefaultConfig } from '@spartacus/core';
let ViewConfigModule = ViewConfigModule_1 = class ViewConfigModule {
    static forRoot() {
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
    }
};
ViewConfigModule = ViewConfigModule_1 = __decorate([
    NgModule({})
], ViewConfigModule);
export { ViewConfigModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1jb25maWcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbmZpZy92aWV3LWNvbmZpZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUcvRCxJQUFhLGdCQUFnQix3QkFBN0IsTUFBYSxnQkFBZ0I7SUFDM0IsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLGtCQUFnQjtZQUMxQixTQUFTLEVBQUU7Z0JBQ1Qsb0JBQW9CLENBQUM7b0JBQ25CLElBQUksRUFBRSxFQUFFO2lCQUNULENBQUM7Z0JBQ0Y7b0JBQ0UsT0FBTyxFQUFFLFVBQVU7b0JBQ25CLFdBQVcsRUFBRSxNQUFNO2lCQUNwQjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBZlksZ0JBQWdCO0lBRDVCLFFBQVEsQ0FBQyxFQUFFLENBQUM7R0FDQSxnQkFBZ0IsQ0FlNUI7U0FmWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmlld0NvbmZpZyB9IGZyb20gJy4vdmlldy1jb25maWcnO1xuaW1wb3J0IHsgQ29uZmlnLCBwcm92aWRlRGVmYXVsdENvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBOZ01vZHVsZSh7fSlcbmV4cG9ydCBjbGFzcyBWaWV3Q29uZmlnTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxWaWV3Q29uZmlnTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBWaWV3Q29uZmlnTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKHtcbiAgICAgICAgICB2aWV3OiB7fSxcbiAgICAgICAgfSksXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBWaWV3Q29uZmlnLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBDb25maWcsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==