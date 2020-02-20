import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { ViewConfig } from './view-config';
import { Config, provideConfig } from '@spartacus/core';
var ViewConfigModule = /** @class */ (function () {
    function ViewConfigModule() {
    }
    ViewConfigModule_1 = ViewConfigModule;
    ViewConfigModule.forRoot = function () {
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
    };
    var ViewConfigModule_1;
    ViewConfigModule = ViewConfigModule_1 = __decorate([
        NgModule({})
    ], ViewConfigModule);
    return ViewConfigModule;
}());
export { ViewConfigModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1jb25maWcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbmZpZy92aWV3LWNvbmZpZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUd4RDtJQUFBO0lBZUEsQ0FBQzt5QkFmWSxnQkFBZ0I7SUFDcEIsd0JBQU8sR0FBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsa0JBQWdCO1lBQzFCLFNBQVMsRUFBRTtnQkFDVCxhQUFhLENBQUM7b0JBQ1osSUFBSSxFQUFFLEVBQUU7aUJBQ1QsQ0FBQztnQkFDRjtvQkFDRSxPQUFPLEVBQUUsVUFBVTtvQkFDbkIsV0FBVyxFQUFFLE1BQU07aUJBQ3BCO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7SUFkVSxnQkFBZ0I7UUFENUIsUUFBUSxDQUFDLEVBQUUsQ0FBQztPQUNBLGdCQUFnQixDQWU1QjtJQUFELHVCQUFDO0NBQUEsQUFmRCxJQWVDO1NBZlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZpZXdDb25maWcgfSBmcm9tICcuL3ZpZXctY29uZmlnJztcbmltcG9ydCB7IENvbmZpZywgcHJvdmlkZUNvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBOZ01vZHVsZSh7fSlcbmV4cG9ydCBjbGFzcyBWaWV3Q29uZmlnTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxWaWV3Q29uZmlnTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBWaWV3Q29uZmlnTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHByb3ZpZGVDb25maWcoe1xuICAgICAgICAgIHZpZXc6IHt9LFxuICAgICAgICB9KSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFZpZXdDb25maWcsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IENvbmZpZyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19