import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, ComponentFactoryResolver, NgModule, } from '@angular/core';
import { ConfigModule, I18nModule, provideDefaultConfig, } from '@spartacus/core';
import { OutletPosition } from '../../../cms-structure/outlet/outlet.model';
import { OutletService } from '../../../cms-structure/outlet/outlet.service';
import { KeyboardFocusModule } from '../keyboard-focus/keyboard-focus.module';
import { SkipLinkComponent } from './component/skip-link.component';
import { defaultSkipLinkConfig } from './config/default-skip-link.config';
import { SkipLinkDirective } from './directive/skip-link.directive';
var SkipLinkModule = /** @class */ (function () {
    function SkipLinkModule() {
    }
    SkipLinkModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                I18nModule,
                ConfigModule.withConfig(defaultSkipLinkConfig),
                KeyboardFocusModule,
            ],
            declarations: [SkipLinkComponent, SkipLinkDirective],
            exports: [SkipLinkDirective],
            entryComponents: [SkipLinkComponent],
            providers: [
                provideDefaultConfig(defaultSkipLinkConfig),
                {
                    provide: APP_INITIALIZER,
                    useFactory: skipLinkFactory,
                    deps: [ComponentFactoryResolver, OutletService],
                    multi: true,
                },
            ],
        })
    ], SkipLinkModule);
    return SkipLinkModule;
}());
export { SkipLinkModule };
/**
 * Adds the skip link component before the cx-storefront.
 */
export function skipLinkFactory(componentFactoryResolver, outletService) {
    var isReady = function () {
        var factory = componentFactoryResolver.resolveComponentFactory(SkipLinkComponent);
        outletService.add('cx-storefront', factory, OutletPosition.BEFORE);
    };
    return isReady;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpcC1saW5rLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9hMTF5L3NraXAtbGluay9za2lwLWxpbmsubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLGVBQWUsRUFDZix3QkFBd0IsRUFDeEIsUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxZQUFZLEVBQ1osVUFBVSxFQUNWLG9CQUFvQixHQUNyQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDN0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUF1QnBFO0lBQUE7SUFBNkIsQ0FBQztJQUFqQixjQUFjO1FBckIxQixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixVQUFVO2dCQUNWLFlBQVksQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUM7Z0JBQzlDLG1CQUFtQjthQUNwQjtZQUNELFlBQVksRUFBRSxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO1lBQzVCLGVBQWUsRUFBRSxDQUFDLGlCQUFpQixDQUFDO1lBRXBDLFNBQVMsRUFBRTtnQkFDVCxvQkFBb0IsQ0FBQyxxQkFBcUIsQ0FBQztnQkFDM0M7b0JBQ0UsT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLFVBQVUsRUFBRSxlQUFlO29CQUMzQixJQUFJLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxhQUFhLENBQUM7b0JBQy9DLEtBQUssRUFBRSxJQUFJO2lCQUNaO2FBQ0Y7U0FDRixDQUFDO09BQ1csY0FBYyxDQUFHO0lBQUQscUJBQUM7Q0FBQSxBQUE5QixJQUE4QjtTQUFqQixjQUFjO0FBRTNCOztHQUVHO0FBQ0gsTUFBTSxVQUFVLGVBQWUsQ0FDN0Isd0JBQWtELEVBQ2xELGFBQTRCO0lBRTVCLElBQU0sT0FBTyxHQUFHO1FBQ2QsSUFBTSxPQUFPLEdBQUcsd0JBQXdCLENBQUMsdUJBQXVCLENBQzlELGlCQUFpQixDQUNsQixDQUFDO1FBQ0YsYUFBYSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQU8sT0FBTyxFQUFFLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxRSxDQUFDLENBQUM7SUFDRixPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFQUF9JTklUSUFMSVpFUixcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBOZ01vZHVsZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb25maWdNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG4gIHByb3ZpZGVEZWZhdWx0Q29uZmlnLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT3V0bGV0UG9zaXRpb24gfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL291dGxldC9vdXRsZXQubW9kZWwnO1xuaW1wb3J0IHsgT3V0bGV0U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvb3V0bGV0L291dGxldC5zZXJ2aWNlJztcbmltcG9ydCB7IEtleWJvYXJkRm9jdXNNb2R1bGUgfSBmcm9tICcuLi9rZXlib2FyZC1mb2N1cy9rZXlib2FyZC1mb2N1cy5tb2R1bGUnO1xuaW1wb3J0IHsgU2tpcExpbmtDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9za2lwLWxpbmsuY29tcG9uZW50JztcbmltcG9ydCB7IGRlZmF1bHRTa2lwTGlua0NvbmZpZyB9IGZyb20gJy4vY29uZmlnL2RlZmF1bHQtc2tpcC1saW5rLmNvbmZpZyc7XG5pbXBvcnQgeyBTa2lwTGlua0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlL3NraXAtbGluay5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoZGVmYXVsdFNraXBMaW5rQ29uZmlnKSxcbiAgICBLZXlib2FyZEZvY3VzTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtTa2lwTGlua0NvbXBvbmVudCwgU2tpcExpbmtEaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbU2tpcExpbmtEaXJlY3RpdmVdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtTa2lwTGlua0NvbXBvbmVudF0sXG5cbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoZGVmYXVsdFNraXBMaW5rQ29uZmlnKSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICB1c2VGYWN0b3J5OiBza2lwTGlua0ZhY3RvcnksXG4gICAgICBkZXBzOiBbQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBPdXRsZXRTZXJ2aWNlXSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFNraXBMaW5rTW9kdWxlIHt9XG5cbi8qKlxuICogQWRkcyB0aGUgc2tpcCBsaW5rIGNvbXBvbmVudCBiZWZvcmUgdGhlIGN4LXN0b3JlZnJvbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBza2lwTGlua0ZhY3RvcnkoXG4gIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBvdXRsZXRTZXJ2aWNlOiBPdXRsZXRTZXJ2aWNlXG4pIHtcbiAgY29uc3QgaXNSZWFkeSA9ICgpID0+IHtcbiAgICBjb25zdCBmYWN0b3J5ID0gY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxuICAgICAgU2tpcExpbmtDb21wb25lbnRcbiAgICApO1xuICAgIG91dGxldFNlcnZpY2UuYWRkKCdjeC1zdG9yZWZyb250JywgPGFueT5mYWN0b3J5LCBPdXRsZXRQb3NpdGlvbi5CRUZPUkUpO1xuICB9O1xuICByZXR1cm4gaXNSZWFkeTtcbn1cbiJdfQ==