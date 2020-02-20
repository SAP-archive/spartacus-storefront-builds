import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, ComponentFactoryResolver, NgModule, } from '@angular/core';
import { Config, ConfigModule, I18nModule } from '@spartacus/core';
import { OutletPosition } from '../../../cms-structure/outlet/outlet.model';
import { SkipLinkComponent } from './component/skip-link.component';
import { defaultSkipLinkConfig } from './config/default-skip-link.config';
import { SkipLinkConfig } from './config/skip-link.config';
import { SkipLinkDirective } from './directive/skip-link.directive';
import { OutletService } from '../../../cms-structure/outlet/outlet.service';
let SkipLinkModule = class SkipLinkModule {
};
SkipLinkModule = __decorate([
    NgModule({
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
    })
], SkipLinkModule);
export { SkipLinkModule };
/**
 * Adds the skip link component before the cx-storefront.
 */
export function skipLinkFactory(componentFactoryResolver, outletService) {
    const isReady = () => {
        const factory = componentFactoryResolver.resolveComponentFactory(SkipLinkComponent);
        outletService.add('cx-storefront', factory, OutletPosition.BEFORE);
    };
    return isReady;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpcC1saW5rLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9hMTF5L3NraXAtbGluay9za2lwLWxpbmsubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLGVBQWUsRUFDZix3QkFBd0IsRUFDeEIsUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBc0I3RSxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0NBQUcsQ0FBQTtBQUFqQixjQUFjO0lBcEIxQixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxZQUFZO1lBQ1osVUFBVTtZQUNWLFlBQVksQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUM7U0FDL0M7UUFDRCxZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQztRQUNwRCxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztRQUM1QixlQUFlLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztRQUVwQyxTQUFTLEVBQUU7WUFDVCxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtZQUNoRDtnQkFDRSxPQUFPLEVBQUUsZUFBZTtnQkFDeEIsVUFBVSxFQUFFLGVBQWU7Z0JBQzNCLElBQUksRUFBRSxDQUFDLHdCQUF3QixFQUFFLGFBQWEsQ0FBQztnQkFDL0MsS0FBSyxFQUFFLElBQUk7YUFDWjtTQUNGO0tBQ0YsQ0FBQztHQUNXLGNBQWMsQ0FBRztTQUFqQixjQUFjO0FBRTNCOztHQUVHO0FBQ0gsTUFBTSxVQUFVLGVBQWUsQ0FDN0Isd0JBQWtELEVBQ2xELGFBQTRCO0lBRTVCLE1BQU0sT0FBTyxHQUFHLEdBQUcsRUFBRTtRQUNuQixNQUFNLE9BQU8sR0FBRyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FDOUQsaUJBQWlCLENBQ2xCLENBQUM7UUFDRixhQUFhLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBTyxPQUFPLEVBQUUsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFFLENBQUMsQ0FBQztJQUNGLE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQVBQX0lOSVRJQUxJWkVSLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIE5nTW9kdWxlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZywgQ29uZmlnTW9kdWxlLCBJMThuTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE91dGxldFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9vdXRsZXQvb3V0bGV0Lm1vZGVsJztcbmltcG9ydCB7IFNraXBMaW5rQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvc2tpcC1saW5rLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBkZWZhdWx0U2tpcExpbmtDb25maWcgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LXNraXAtbGluay5jb25maWcnO1xuaW1wb3J0IHsgU2tpcExpbmtDb25maWcgfSBmcm9tICcuL2NvbmZpZy9za2lwLWxpbmsuY29uZmlnJztcbmltcG9ydCB7IFNraXBMaW5rRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmUvc2tpcC1saW5rLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBPdXRsZXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9vdXRsZXQvb3V0bGV0LnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoZGVmYXVsdFNraXBMaW5rQ29uZmlnKSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbU2tpcExpbmtDb21wb25lbnQsIFNraXBMaW5rRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW1NraXBMaW5rRGlyZWN0aXZlXSxcbiAgZW50cnlDb21wb25lbnRzOiBbU2tpcExpbmtDb21wb25lbnRdLFxuXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogU2tpcExpbmtDb25maWcsIHVzZUV4aXN0aW5nOiBDb25maWcgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICB1c2VGYWN0b3J5OiBza2lwTGlua0ZhY3RvcnksXG4gICAgICBkZXBzOiBbQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBPdXRsZXRTZXJ2aWNlXSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFNraXBMaW5rTW9kdWxlIHt9XG5cbi8qKlxuICogQWRkcyB0aGUgc2tpcCBsaW5rIGNvbXBvbmVudCBiZWZvcmUgdGhlIGN4LXN0b3JlZnJvbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBza2lwTGlua0ZhY3RvcnkoXG4gIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBvdXRsZXRTZXJ2aWNlOiBPdXRsZXRTZXJ2aWNlXG4pIHtcbiAgY29uc3QgaXNSZWFkeSA9ICgpID0+IHtcbiAgICBjb25zdCBmYWN0b3J5ID0gY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxuICAgICAgU2tpcExpbmtDb21wb25lbnRcbiAgICApO1xuICAgIG91dGxldFNlcnZpY2UuYWRkKCdjeC1zdG9yZWZyb250JywgPGFueT5mYWN0b3J5LCBPdXRsZXRQb3NpdGlvbi5CRUZPUkUpO1xuICB9O1xuICByZXR1cm4gaXNSZWFkeTtcbn1cbiJdfQ==