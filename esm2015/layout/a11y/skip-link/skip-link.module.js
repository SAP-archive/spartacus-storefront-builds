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
export class SkipLinkModule {
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
/**
 * Adds the skip link component before the cx-storefront.
 * @param {?} componentFactoryResolver
 * @param {?} outletService
 * @return {?}
 */
export function skipLinkFactory(componentFactoryResolver, outletService) {
    /** @type {?} */
    const isReady = (/**
     * @return {?}
     */
    () => {
        /** @type {?} */
        const factory = componentFactoryResolver.resolveComponentFactory(SkipLinkComponent);
        outletService.add('cx-storefront', (/** @type {?} */ (factory)), OutletPosition.BEFORE);
    });
    return isReady;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpcC1saW5rLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9hMTF5L3NraXAtbGluay9za2lwLWxpbmsubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLGVBQWUsRUFDZix3QkFBd0IsRUFDeEIsUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25FLE9BQU8sRUFDTCxjQUFjLEVBQ2QsYUFBYSxHQUNkLE1BQU0scUNBQXFDLENBQUM7QUFDN0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBc0JwRSxNQUFNLE9BQU8sY0FBYzs7O1lBcEIxQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osVUFBVTtvQkFDVixZQUFZLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDO2lCQUMvQztnQkFDRCxZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQztnQkFDcEQsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7Z0JBQzVCLGVBQWUsRUFBRSxDQUFDLGlCQUFpQixDQUFDO2dCQUVwQyxTQUFTLEVBQUU7b0JBQ1QsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7b0JBQ2hEO3dCQUNFLE9BQU8sRUFBRSxlQUFlO3dCQUN4QixVQUFVLEVBQUUsZUFBZTt3QkFDM0IsSUFBSSxFQUFFLENBQUMsd0JBQXdCLEVBQUUsYUFBYSxDQUFDO3dCQUMvQyxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjthQUNGOzs7Ozs7OztBQU1ELE1BQU0sVUFBVSxlQUFlLENBQzdCLHdCQUFrRCxFQUNsRCxhQUE0Qjs7VUFFdEIsT0FBTzs7O0lBQUcsR0FBRyxFQUFFOztjQUNiLE9BQU8sR0FBRyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FDOUQsaUJBQWlCLENBQ2xCO1FBQ0QsYUFBYSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsbUJBQUssT0FBTyxFQUFBLEVBQUUsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFFLENBQUMsQ0FBQTtJQUNELE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQVBQX0lOSVRJQUxJWkVSLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIE5nTW9kdWxlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZywgQ29uZmlnTW9kdWxlLCBJMThuTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7XG4gIE91dGxldFBvc2l0aW9uLFxuICBPdXRsZXRTZXJ2aWNlLFxufSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL291dGxldC9pbmRleCc7XG5pbXBvcnQgeyBTa2lwTGlua0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L3NraXAtbGluay5jb21wb25lbnQnO1xuaW1wb3J0IHsgZGVmYXVsdFNraXBMaW5rQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvZGVmYXVsdC1za2lwLWxpbmsuY29uZmlnJztcbmltcG9ydCB7IFNraXBMaW5rQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvc2tpcC1saW5rLmNvbmZpZyc7XG5pbXBvcnQgeyBTa2lwTGlua0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlL3NraXAtbGluay5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoZGVmYXVsdFNraXBMaW5rQ29uZmlnKSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbU2tpcExpbmtDb21wb25lbnQsIFNraXBMaW5rRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW1NraXBMaW5rRGlyZWN0aXZlXSxcbiAgZW50cnlDb21wb25lbnRzOiBbU2tpcExpbmtDb21wb25lbnRdLFxuXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogU2tpcExpbmtDb25maWcsIHVzZUV4aXN0aW5nOiBDb25maWcgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICB1c2VGYWN0b3J5OiBza2lwTGlua0ZhY3RvcnksXG4gICAgICBkZXBzOiBbQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBPdXRsZXRTZXJ2aWNlXSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFNraXBMaW5rTW9kdWxlIHt9XG5cbi8qKlxuICogQWRkcyB0aGUgc2tpcCBsaW5rIGNvbXBvbmVudCBiZWZvcmUgdGhlIGN4LXN0b3JlZnJvbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBza2lwTGlua0ZhY3RvcnkoXG4gIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBvdXRsZXRTZXJ2aWNlOiBPdXRsZXRTZXJ2aWNlXG4pIHtcbiAgY29uc3QgaXNSZWFkeSA9ICgpID0+IHtcbiAgICBjb25zdCBmYWN0b3J5ID0gY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxuICAgICAgU2tpcExpbmtDb21wb25lbnRcbiAgICApO1xuICAgIG91dGxldFNlcnZpY2UuYWRkKCdjeC1zdG9yZWZyb250JywgPGFueT5mYWN0b3J5LCBPdXRsZXRQb3NpdGlvbi5CRUZPUkUpO1xuICB9O1xuICByZXR1cm4gaXNSZWFkeTtcbn1cbiJdfQ==