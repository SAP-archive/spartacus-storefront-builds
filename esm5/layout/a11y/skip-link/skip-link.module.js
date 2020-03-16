import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, ComponentFactoryResolver, NgModule, } from '@angular/core';
import { Config, ConfigModule, I18nModule, provideDefaultConfig, } from '@spartacus/core';
import { OutletPosition } from '../../../cms-structure/outlet/outlet.model';
import { OutletService } from '../../../cms-structure/outlet/outlet.service';
import { KeyboardFocusModule } from '../keyboard-focus/keyboard-focus.module';
import { SkipLinkComponent } from './component/skip-link.component';
import { defaultSkipLinkConfig } from './config/default-skip-link.config';
import { SkipLinkConfig } from './config/skip-link.config';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpcC1saW5rLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9hMTF5L3NraXAtbGluay9za2lwLWxpbmsubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLGVBQWUsRUFDZix3QkFBd0IsRUFDeEIsUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFVBQVUsRUFDVixvQkFBb0IsR0FDckIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQXdCcEU7SUFBQTtJQUE2QixDQUFDO0lBQWpCLGNBQWM7UUF0QjFCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLFVBQVU7Z0JBQ1YsWUFBWSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQztnQkFDOUMsbUJBQW1CO2FBQ3BCO1lBQ0QsWUFBWSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUM7WUFDcEQsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7WUFDNUIsZUFBZSxFQUFFLENBQUMsaUJBQWlCLENBQUM7WUFFcEMsU0FBUyxFQUFFO2dCQUNULG9CQUFvQixDQUFDLHFCQUFxQixDQUFDO2dCQUMzQyxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtnQkFDaEQ7b0JBQ0UsT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLFVBQVUsRUFBRSxlQUFlO29CQUMzQixJQUFJLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxhQUFhLENBQUM7b0JBQy9DLEtBQUssRUFBRSxJQUFJO2lCQUNaO2FBQ0Y7U0FDRixDQUFDO09BQ1csY0FBYyxDQUFHO0lBQUQscUJBQUM7Q0FBQSxBQUE5QixJQUE4QjtTQUFqQixjQUFjO0FBRTNCOztHQUVHO0FBQ0gsTUFBTSxVQUFVLGVBQWUsQ0FDN0Isd0JBQWtELEVBQ2xELGFBQTRCO0lBRTVCLElBQU0sT0FBTyxHQUFHO1FBQ2QsSUFBTSxPQUFPLEdBQUcsd0JBQXdCLENBQUMsdUJBQXVCLENBQzlELGlCQUFpQixDQUNsQixDQUFDO1FBQ0YsYUFBYSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQU8sT0FBTyxFQUFFLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxRSxDQUFDLENBQUM7SUFDRixPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFQUF9JTklUSUFMSVpFUixcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBOZ01vZHVsZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb25maWcsXG4gIENvbmZpZ01vZHVsZSxcbiAgSTE4bk1vZHVsZSxcbiAgcHJvdmlkZURlZmF1bHRDb25maWcsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPdXRsZXRQb3NpdGlvbiB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvb3V0bGV0L291dGxldC5tb2RlbCc7XG5pbXBvcnQgeyBPdXRsZXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9vdXRsZXQvb3V0bGV0LnNlcnZpY2UnO1xuaW1wb3J0IHsgS2V5Ym9hcmRGb2N1c01vZHVsZSB9IGZyb20gJy4uL2tleWJvYXJkLWZvY3VzL2tleWJvYXJkLWZvY3VzLm1vZHVsZSc7XG5pbXBvcnQgeyBTa2lwTGlua0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L3NraXAtbGluay5jb21wb25lbnQnO1xuaW1wb3J0IHsgZGVmYXVsdFNraXBMaW5rQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvZGVmYXVsdC1za2lwLWxpbmsuY29uZmlnJztcbmltcG9ydCB7IFNraXBMaW5rQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvc2tpcC1saW5rLmNvbmZpZyc7XG5pbXBvcnQgeyBTa2lwTGlua0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlL3NraXAtbGluay5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEkxOG5Nb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoZGVmYXVsdFNraXBMaW5rQ29uZmlnKSxcbiAgICBLZXlib2FyZEZvY3VzTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtTa2lwTGlua0NvbXBvbmVudCwgU2tpcExpbmtEaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbU2tpcExpbmtEaXJlY3RpdmVdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtTa2lwTGlua0NvbXBvbmVudF0sXG5cbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoZGVmYXVsdFNraXBMaW5rQ29uZmlnKSxcbiAgICB7IHByb3ZpZGU6IFNraXBMaW5rQ29uZmlnLCB1c2VFeGlzdGluZzogQ29uZmlnIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgdXNlRmFjdG9yeTogc2tpcExpbmtGYWN0b3J5LFxuICAgICAgZGVwczogW0NvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgT3V0bGV0U2VydmljZV0sXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTa2lwTGlua01vZHVsZSB7fVxuXG4vKipcbiAqIEFkZHMgdGhlIHNraXAgbGluayBjb21wb25lbnQgYmVmb3JlIHRoZSBjeC1zdG9yZWZyb250LlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2tpcExpbmtGYWN0b3J5KFxuICBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgb3V0bGV0U2VydmljZTogT3V0bGV0U2VydmljZVxuKSB7XG4gIGNvbnN0IGlzUmVhZHkgPSAoKSA9PiB7XG4gICAgY29uc3QgZmFjdG9yeSA9IGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShcbiAgICAgIFNraXBMaW5rQ29tcG9uZW50XG4gICAgKTtcbiAgICBvdXRsZXRTZXJ2aWNlLmFkZCgnY3gtc3RvcmVmcm9udCcsIDxhbnk+ZmFjdG9yeSwgT3V0bGV0UG9zaXRpb24uQkVGT1JFKTtcbiAgfTtcbiAgcmV0dXJuIGlzUmVhZHk7XG59XG4iXX0=