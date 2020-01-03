/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, ComponentFactoryResolver, NgModule, } from '@angular/core';
import { Config, ConfigModule, I18nModule } from '@spartacus/core';
import { OutletPosition, OutletService, } from '../../../cms-structure/outlet/index';
import { SkipLinkComponent } from './component/skip-link.component';
import { defaultSkipLinkConfig } from './config/default-skip-link.config';
import { SkipLinkConfig } from './config/skip-link.config';
import { SkipLinkDirective } from './directive/skip-link.directive';
var SkipLinkModule = /** @class */ (function () {
    function SkipLinkModule() {
    }
    SkipLinkModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        I18nModule,
                        ConfigModule.withConfig(defaultSkipLinkConfig),
                    ],
                    declarations: [SkipLinkComponent, SkipLinkDirective],
                    exports: [SkipLinkDirective],
                    entryComponents: [SkipLinkComponent],
                    providers: [
                        { provide: SkipLinkConfig, useExisting: Config },
                        {
                            provide: APP_INITIALIZER,
                            useFactory: skipLinkFactory,
                            deps: [ComponentFactoryResolver, OutletService],
                            multi: true,
                        },
                    ],
                },] }
    ];
    return SkipLinkModule;
}());
export { SkipLinkModule };
/**
 * Adds the skip link component before the cx-storefront.
 * @param {?} componentFactoryResolver
 * @param {?} outletService
 * @return {?}
 */
export function skipLinkFactory(componentFactoryResolver, outletService) {
    /** @type {?} */
    var isReady = (/**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var factory = componentFactoryResolver.resolveComponentFactory(SkipLinkComponent);
        outletService.add('cx-storefront', (/** @type {?} */ (factory)), OutletPosition.BEFORE);
    });
    return isReady;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpcC1saW5rLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9hMTF5L3NraXAtbGluay9za2lwLWxpbmsubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLGVBQWUsRUFDZix3QkFBd0IsRUFDeEIsUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25FLE9BQU8sRUFDTCxjQUFjLEVBQ2QsYUFBYSxHQUNkLE1BQU0scUNBQXFDLENBQUM7QUFDN0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRXBFO0lBQUE7SUFvQjZCLENBQUM7O2dCQXBCN0IsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFVBQVU7d0JBQ1YsWUFBWSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQztxQkFDL0M7b0JBQ0QsWUFBWSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUM7b0JBQ3BELE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO29CQUM1QixlQUFlLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFFcEMsU0FBUyxFQUFFO3dCQUNULEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO3dCQUNoRDs0QkFDRSxPQUFPLEVBQUUsZUFBZTs0QkFDeEIsVUFBVSxFQUFFLGVBQWU7NEJBQzNCLElBQUksRUFBRSxDQUFDLHdCQUF3QixFQUFFLGFBQWEsQ0FBQzs0QkFDL0MsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7aUJBQ0Y7O0lBQzRCLHFCQUFDO0NBQUEsQUFwQjlCLElBb0I4QjtTQUFqQixjQUFjOzs7Ozs7O0FBSzNCLE1BQU0sVUFBVSxlQUFlLENBQzdCLHdCQUFrRCxFQUNsRCxhQUE0Qjs7UUFFdEIsT0FBTzs7O0lBQUc7O1lBQ1IsT0FBTyxHQUFHLHdCQUF3QixDQUFDLHVCQUF1QixDQUM5RCxpQkFBaUIsQ0FDbEI7UUFDRCxhQUFhLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxtQkFBSyxPQUFPLEVBQUEsRUFBRSxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUUsQ0FBQyxDQUFBO0lBQ0QsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBBUFBfSU5JVElBTElaRVIsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgTmdNb2R1bGUsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnLCBDb25maWdNb2R1bGUsIEkxOG5Nb2R1bGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHtcbiAgT3V0bGV0UG9zaXRpb24sXG4gIE91dGxldFNlcnZpY2UsXG59IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvb3V0bGV0L2luZGV4JztcbmltcG9ydCB7IFNraXBMaW5rQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvc2tpcC1saW5rLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBkZWZhdWx0U2tpcExpbmtDb25maWcgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LXNraXAtbGluay5jb25maWcnO1xuaW1wb3J0IHsgU2tpcExpbmtDb25maWcgfSBmcm9tICcuL2NvbmZpZy9za2lwLWxpbmsuY29uZmlnJztcbmltcG9ydCB7IFNraXBMaW5rRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmUvc2tpcC1saW5rLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSTE4bk1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyhkZWZhdWx0U2tpcExpbmtDb25maWcpLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtTa2lwTGlua0NvbXBvbmVudCwgU2tpcExpbmtEaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbU2tpcExpbmtEaXJlY3RpdmVdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtTa2lwTGlua0NvbXBvbmVudF0sXG5cbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBTa2lwTGlua0NvbmZpZywgdXNlRXhpc3Rpbmc6IENvbmZpZyB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICAgIHVzZUZhY3Rvcnk6IHNraXBMaW5rRmFjdG9yeSxcbiAgICAgIGRlcHM6IFtDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIE91dGxldFNlcnZpY2VdLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU2tpcExpbmtNb2R1bGUge31cblxuLyoqXG4gKiBBZGRzIHRoZSBza2lwIGxpbmsgY29tcG9uZW50IGJlZm9yZSB0aGUgY3gtc3RvcmVmcm9udC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNraXBMaW5rRmFjdG9yeShcbiAgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIG91dGxldFNlcnZpY2U6IE91dGxldFNlcnZpY2Vcbikge1xuICBjb25zdCBpc1JlYWR5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGZhY3RvcnkgPSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoXG4gICAgICBTa2lwTGlua0NvbXBvbmVudFxuICAgICk7XG4gICAgb3V0bGV0U2VydmljZS5hZGQoJ2N4LXN0b3JlZnJvbnQnLCA8YW55PmZhY3RvcnksIE91dGxldFBvc2l0aW9uLkJFRk9SRSk7XG4gIH07XG4gIHJldHVybiBpc1JlYWR5O1xufVxuIl19