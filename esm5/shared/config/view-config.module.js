/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { ViewConfig } from './view-config';
import { Config, provideConfig } from '@spartacus/core';
var ViewConfigModule = /** @class */ (function () {
    function ViewConfigModule() {
    }
    /**
     * @return {?}
     */
    ViewConfigModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: ViewConfigModule,
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
    ViewConfigModule.decorators = [
        { type: NgModule, args: [{},] }
    ];
    return ViewConfigModule;
}());
export { ViewConfigModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1jb25maWcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbmZpZy92aWV3LWNvbmZpZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV4RDtJQUFBO0lBZ0JBLENBQUM7Ozs7SUFkUSx3QkFBTzs7O0lBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixTQUFTLEVBQUU7Z0JBQ1QsYUFBYSxDQUFDO29CQUNaLElBQUksRUFBRSxFQUFFO2lCQUNULENBQUM7Z0JBQ0Y7b0JBQ0UsT0FBTyxFQUFFLFVBQVU7b0JBQ25CLFdBQVcsRUFBRSxNQUFNO2lCQUNwQjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQWZGLFFBQVEsU0FBQyxFQUFFOztJQWdCWix1QkFBQztDQUFBLEFBaEJELElBZ0JDO1NBZlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZpZXdDb25maWcgfSBmcm9tICcuL3ZpZXctY29uZmlnJztcbmltcG9ydCB7IENvbmZpZywgcHJvdmlkZUNvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBOZ01vZHVsZSh7fSlcbmV4cG9ydCBjbGFzcyBWaWV3Q29uZmlnTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxWaWV3Q29uZmlnTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBWaWV3Q29uZmlnTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHByb3ZpZGVDb25maWcoe1xuICAgICAgICAgIHZpZXc6IHt9LFxuICAgICAgICB9KSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFZpZXdDb25maWcsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IENvbmZpZyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19