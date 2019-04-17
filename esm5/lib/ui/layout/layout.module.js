/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { ConfigModule, Config } from '@spartacus/core';
import { OutletRefModule } from '../../outlet/index';
import { StyleRefModule } from '../../outlet/style-ref/style-ref.module';
import { BreakpointService } from './breakpoint/breakpoint.service';
import { defaultLayoutConfig } from './config/default-layout-config';
import { LayoutConfig } from './config/layout-config';
import { MainModule } from './main/main.module';
/** @type {?} */
var layoutModules = [OutletRefModule, StyleRefModule];
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule.decorators = [
        { type: NgModule, args: [{
                    imports: tslib_1.__spread([
                        MainModule
                    ], layoutModules, [
                        ConfigModule.withConfig(defaultLayoutConfig),
                    ]),
                    providers: [
                        { provide: LayoutConfig, useExisting: Config },
                        BreakpointService,
                    ],
                    exports: tslib_1.__spread([MainModule], layoutModules),
                },] }
    ];
    return LayoutModule;
}());
export { LayoutModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi91aS9sYXlvdXQvbGF5b3V0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRXpFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0lBRTFDLGFBQWEsR0FBRyxDQUFDLGVBQWUsRUFBRSxjQUFjLENBQUM7QUFFdkQ7SUFBQTtJQVkyQixDQUFDOztnQkFaM0IsUUFBUSxTQUFDO29CQUNSLE9BQU87d0JBQ0wsVUFBVTt1QkFDUCxhQUFhO3dCQUNoQixZQUFZLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDO3NCQUM3QztvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7d0JBQzlDLGlCQUFpQjtxQkFDbEI7b0JBQ0QsT0FBTyxvQkFBRyxVQUFVLEdBQUssYUFBYSxDQUFDO2lCQUN4Qzs7SUFDMEIsbUJBQUM7Q0FBQSxBQVo1QixJQVk0QjtTQUFmLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb25maWdNb2R1bGUsIENvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmltcG9ydCB7IE91dGxldFJlZk1vZHVsZSB9IGZyb20gJy4uLy4uL291dGxldC9pbmRleCc7XG5pbXBvcnQgeyBTdHlsZVJlZk1vZHVsZSB9IGZyb20gJy4uLy4uL291dGxldC9zdHlsZS1yZWYvc3R5bGUtcmVmLm1vZHVsZSc7XG5cbmltcG9ydCB7IEJyZWFrcG9pbnRTZXJ2aWNlIH0gZnJvbSAnLi9icmVha3BvaW50L2JyZWFrcG9pbnQuc2VydmljZSc7XG5pbXBvcnQgeyBkZWZhdWx0TGF5b3V0Q29uZmlnIH0gZnJvbSAnLi9jb25maWcvZGVmYXVsdC1sYXlvdXQtY29uZmlnJztcbmltcG9ydCB7IExheW91dENvbmZpZyB9IGZyb20gJy4vY29uZmlnL2xheW91dC1jb25maWcnO1xuaW1wb3J0IHsgTWFpbk1vZHVsZSB9IGZyb20gJy4vbWFpbi9tYWluLm1vZHVsZSc7XG5cbmNvbnN0IGxheW91dE1vZHVsZXMgPSBbT3V0bGV0UmVmTW9kdWxlLCBTdHlsZVJlZk1vZHVsZV07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBNYWluTW9kdWxlLFxuICAgIC4uLmxheW91dE1vZHVsZXMsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoZGVmYXVsdExheW91dENvbmZpZyksXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogTGF5b3V0Q29uZmlnLCB1c2VFeGlzdGluZzogQ29uZmlnIH0sXG4gICAgQnJlYWtwb2ludFNlcnZpY2UsXG4gIF0sXG4gIGV4cG9ydHM6IFtNYWluTW9kdWxlLCAuLi5sYXlvdXRNb2R1bGVzXSxcbn0pXG5leHBvcnQgY2xhc3MgTGF5b3V0TW9kdWxlIHt9XG4iXX0=