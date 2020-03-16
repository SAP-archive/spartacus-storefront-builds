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
let SkipLinkModule = class SkipLinkModule {
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpcC1saW5rLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9hMTF5L3NraXAtbGluay9za2lwLWxpbmsubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLGVBQWUsRUFDZix3QkFBd0IsRUFDeEIsUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFVBQVUsRUFDVixvQkFBb0IsR0FDckIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQXdCcEUsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBYztDQUFHLENBQUE7QUFBakIsY0FBYztJQXRCMUIsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLFVBQVU7WUFDVixZQUFZLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDO1lBQzlDLG1CQUFtQjtTQUNwQjtRQUNELFlBQVksRUFBRSxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDO1FBQ3BELE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO1FBQzVCLGVBQWUsRUFBRSxDQUFDLGlCQUFpQixDQUFDO1FBRXBDLFNBQVMsRUFBRTtZQUNULG9CQUFvQixDQUFDLHFCQUFxQixDQUFDO1lBQzNDLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO1lBQ2hEO2dCQUNFLE9BQU8sRUFBRSxlQUFlO2dCQUN4QixVQUFVLEVBQUUsZUFBZTtnQkFDM0IsSUFBSSxFQUFFLENBQUMsd0JBQXdCLEVBQUUsYUFBYSxDQUFDO2dCQUMvQyxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0Y7S0FDRixDQUFDO0dBQ1csY0FBYyxDQUFHO1NBQWpCLGNBQWM7QUFFM0I7O0dBRUc7QUFDSCxNQUFNLFVBQVUsZUFBZSxDQUM3Qix3QkFBa0QsRUFDbEQsYUFBNEI7SUFFNUIsTUFBTSxPQUFPLEdBQUcsR0FBRyxFQUFFO1FBQ25CLE1BQU0sT0FBTyxHQUFHLHdCQUF3QixDQUFDLHVCQUF1QixDQUM5RCxpQkFBaUIsQ0FDbEIsQ0FBQztRQUNGLGFBQWEsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFPLE9BQU8sRUFBRSxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUUsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBBUFBfSU5JVElBTElaRVIsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgTmdNb2R1bGUsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29uZmlnLFxuICBDb25maWdNb2R1bGUsXG4gIEkxOG5Nb2R1bGUsXG4gIHByb3ZpZGVEZWZhdWx0Q29uZmlnLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT3V0bGV0UG9zaXRpb24gfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL291dGxldC9vdXRsZXQubW9kZWwnO1xuaW1wb3J0IHsgT3V0bGV0U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvb3V0bGV0L291dGxldC5zZXJ2aWNlJztcbmltcG9ydCB7IEtleWJvYXJkRm9jdXNNb2R1bGUgfSBmcm9tICcuLi9rZXlib2FyZC1mb2N1cy9rZXlib2FyZC1mb2N1cy5tb2R1bGUnO1xuaW1wb3J0IHsgU2tpcExpbmtDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9za2lwLWxpbmsuY29tcG9uZW50JztcbmltcG9ydCB7IGRlZmF1bHRTa2lwTGlua0NvbmZpZyB9IGZyb20gJy4vY29uZmlnL2RlZmF1bHQtc2tpcC1saW5rLmNvbmZpZyc7XG5pbXBvcnQgeyBTa2lwTGlua0NvbmZpZyB9IGZyb20gJy4vY29uZmlnL3NraXAtbGluay5jb25maWcnO1xuaW1wb3J0IHsgU2tpcExpbmtEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9za2lwLWxpbmsuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBJMThuTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKGRlZmF1bHRTa2lwTGlua0NvbmZpZyksXG4gICAgS2V5Ym9hcmRGb2N1c01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbU2tpcExpbmtDb21wb25lbnQsIFNraXBMaW5rRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW1NraXBMaW5rRGlyZWN0aXZlXSxcbiAgZW50cnlDb21wb25lbnRzOiBbU2tpcExpbmtDb21wb25lbnRdLFxuXG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKGRlZmF1bHRTa2lwTGlua0NvbmZpZyksXG4gICAgeyBwcm92aWRlOiBTa2lwTGlua0NvbmZpZywgdXNlRXhpc3Rpbmc6IENvbmZpZyB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICAgIHVzZUZhY3Rvcnk6IHNraXBMaW5rRmFjdG9yeSxcbiAgICAgIGRlcHM6IFtDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIE91dGxldFNlcnZpY2VdLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU2tpcExpbmtNb2R1bGUge31cblxuLyoqXG4gKiBBZGRzIHRoZSBza2lwIGxpbmsgY29tcG9uZW50IGJlZm9yZSB0aGUgY3gtc3RvcmVmcm9udC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNraXBMaW5rRmFjdG9yeShcbiAgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIG91dGxldFNlcnZpY2U6IE91dGxldFNlcnZpY2Vcbikge1xuICBjb25zdCBpc1JlYWR5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGZhY3RvcnkgPSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoXG4gICAgICBTa2lwTGlua0NvbXBvbmVudFxuICAgICk7XG4gICAgb3V0bGV0U2VydmljZS5hZGQoJ2N4LXN0b3JlZnJvbnQnLCA8YW55PmZhY3RvcnksIE91dGxldFBvc2l0aW9uLkJFRk9SRSk7XG4gIH07XG4gIHJldHVybiBpc1JlYWR5O1xufVxuIl19