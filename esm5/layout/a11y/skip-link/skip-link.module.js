import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, ComponentFactoryResolver, NgModule, } from '@angular/core';
import { Config, I18nModule, provideDefaultConfig } from '@spartacus/core';
import { OutletPosition } from '../../../cms-structure/outlet/outlet.model';
import { SkipLinkComponent } from './component/skip-link.component';
import { defaultSkipLinkConfig } from './config/default-skip-link.config';
import { SkipLinkConfig } from './config/skip-link.config';
import { SkipLinkDirective } from './directive/skip-link.directive';
import { OutletService } from '../../../cms-structure/outlet/outlet.service';
var SkipLinkModule = /** @class */ (function () {
    function SkipLinkModule() {
    }
    SkipLinkModule = __decorate([
        NgModule({
            imports: [CommonModule, I18nModule],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpcC1saW5rLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9hMTF5L3NraXAtbGluay9za2lwLWxpbmsubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLGVBQWUsRUFDZix3QkFBd0IsRUFDeEIsUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFtQjdFO0lBQUE7SUFBNkIsQ0FBQztJQUFqQixjQUFjO1FBakIxQixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDO1lBQ25DLFlBQVksRUFBRSxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO1lBQzVCLGVBQWUsRUFBRSxDQUFDLGlCQUFpQixDQUFDO1lBRXBDLFNBQVMsRUFBRTtnQkFDVCxvQkFBb0IsQ0FBQyxxQkFBcUIsQ0FBQztnQkFDM0MsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7Z0JBQ2hEO29CQUNFLE9BQU8sRUFBRSxlQUFlO29CQUN4QixVQUFVLEVBQUUsZUFBZTtvQkFDM0IsSUFBSSxFQUFFLENBQUMsd0JBQXdCLEVBQUUsYUFBYSxDQUFDO29CQUMvQyxLQUFLLEVBQUUsSUFBSTtpQkFDWjthQUNGO1NBQ0YsQ0FBQztPQUNXLGNBQWMsQ0FBRztJQUFELHFCQUFDO0NBQUEsQUFBOUIsSUFBOEI7U0FBakIsY0FBYztBQUUzQjs7R0FFRztBQUNILE1BQU0sVUFBVSxlQUFlLENBQzdCLHdCQUFrRCxFQUNsRCxhQUE0QjtJQUU1QixJQUFNLE9BQU8sR0FBRztRQUNkLElBQU0sT0FBTyxHQUFHLHdCQUF3QixDQUFDLHVCQUF1QixDQUM5RCxpQkFBaUIsQ0FDbEIsQ0FBQztRQUNGLGFBQWEsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFPLE9BQU8sRUFBRSxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUUsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBBUFBfSU5JVElBTElaRVIsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgTmdNb2R1bGUsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnLCBJMThuTW9kdWxlLCBwcm92aWRlRGVmYXVsdENvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPdXRsZXRQb3NpdGlvbiB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvb3V0bGV0L291dGxldC5tb2RlbCc7XG5pbXBvcnQgeyBTa2lwTGlua0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L3NraXAtbGluay5jb21wb25lbnQnO1xuaW1wb3J0IHsgZGVmYXVsdFNraXBMaW5rQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvZGVmYXVsdC1za2lwLWxpbmsuY29uZmlnJztcbmltcG9ydCB7IFNraXBMaW5rQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvc2tpcC1saW5rLmNvbmZpZyc7XG5pbXBvcnQgeyBTa2lwTGlua0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlL3NraXAtbGluay5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgT3V0bGV0U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvb3V0bGV0L291dGxldC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSTE4bk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1NraXBMaW5rQ29tcG9uZW50LCBTa2lwTGlua0RpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtTa2lwTGlua0RpcmVjdGl2ZV0sXG4gIGVudHJ5Q29tcG9uZW50czogW1NraXBMaW5rQ29tcG9uZW50XSxcblxuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyhkZWZhdWx0U2tpcExpbmtDb25maWcpLFxuICAgIHsgcHJvdmlkZTogU2tpcExpbmtDb25maWcsIHVzZUV4aXN0aW5nOiBDb25maWcgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICB1c2VGYWN0b3J5OiBza2lwTGlua0ZhY3RvcnksXG4gICAgICBkZXBzOiBbQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBPdXRsZXRTZXJ2aWNlXSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFNraXBMaW5rTW9kdWxlIHt9XG5cbi8qKlxuICogQWRkcyB0aGUgc2tpcCBsaW5rIGNvbXBvbmVudCBiZWZvcmUgdGhlIGN4LXN0b3JlZnJvbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBza2lwTGlua0ZhY3RvcnkoXG4gIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBvdXRsZXRTZXJ2aWNlOiBPdXRsZXRTZXJ2aWNlXG4pIHtcbiAgY29uc3QgaXNSZWFkeSA9ICgpID0+IHtcbiAgICBjb25zdCBmYWN0b3J5ID0gY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxuICAgICAgU2tpcExpbmtDb21wb25lbnRcbiAgICApO1xuICAgIG91dGxldFNlcnZpY2UuYWRkKCdjeC1zdG9yZWZyb250JywgPGFueT5mYWN0b3J5LCBPdXRsZXRQb3NpdGlvbi5CRUZPUkUpO1xuICB9O1xuICByZXR1cm4gaXNSZWFkeTtcbn1cbiJdfQ==