var ViewConfigModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { ViewConfig } from './view-config';
import { Config, provideConfig } from '@spartacus/core';
let ViewConfigModule = ViewConfigModule_1 = class ViewConfigModule {
    static forRoot() {
        return {
            ngModule: ViewConfigModule_1,
            providers: [
                provideConfig({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1jb25maWcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbmZpZy92aWV3LWNvbmZpZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHeEQsSUFBYSxnQkFBZ0Isd0JBQTdCLE1BQWEsZ0JBQWdCO0lBQzNCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxrQkFBZ0I7WUFDMUIsU0FBUyxFQUFFO2dCQUNULGFBQWEsQ0FBQztvQkFDWixJQUFJLEVBQUUsRUFBRTtpQkFDVCxDQUFDO2dCQUNGO29CQUNFLE9BQU8sRUFBRSxVQUFVO29CQUNuQixXQUFXLEVBQUUsTUFBTTtpQkFDcEI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQWZZLGdCQUFnQjtJQUQ1QixRQUFRLENBQUMsRUFBRSxDQUFDO0dBQ0EsZ0JBQWdCLENBZTVCO1NBZlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZpZXdDb25maWcgfSBmcm9tICcuL3ZpZXctY29uZmlnJztcbmltcG9ydCB7IENvbmZpZywgcHJvdmlkZUNvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBOZ01vZHVsZSh7fSlcbmV4cG9ydCBjbGFzcyBWaWV3Q29uZmlnTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxWaWV3Q29uZmlnTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBWaWV3Q29uZmlnTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHByb3ZpZGVDb25maWcoe1xuICAgICAgICAgIHZpZXc6IHt9LFxuICAgICAgICB9KSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFZpZXdDb25maWcsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IENvbmZpZyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19