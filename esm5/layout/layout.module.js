/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { Config } from '@spartacus/core';
import { OutletRefModule } from '../cms-structure/outlet/outlet-ref/outlet-ref.module';
import { LayoutConfig } from './config/layout-config';
/** @type {?} */
var layoutModules = [OutletRefModule];
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule.decorators = [
        { type: NgModule, args: [{
                    imports: tslib_1.__spread(layoutModules),
                    providers: [{ provide: LayoutConfig, useExisting: Config }],
                    exports: tslib_1.__spread(layoutModules),
                },] }
    ];
    return LayoutModule;
}());
export { LayoutModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9sYXlvdXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7SUFFaEQsYUFBYSxHQUFHLENBQUMsZUFBZSxDQUFDO0FBRXZDO0lBQUE7SUFLMkIsQ0FBQzs7Z0JBTDNCLFFBQVEsU0FBQztvQkFDUixPQUFPLG1CQUFNLGFBQWEsQ0FBQztvQkFDM0IsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsQ0FBQztvQkFDM0QsT0FBTyxtQkFBTSxhQUFhLENBQUM7aUJBQzVCOztJQUMwQixtQkFBQztDQUFBLEFBTDVCLElBSzRCO1NBQWYsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT3V0bGV0UmVmTW9kdWxlIH0gZnJvbSAnLi4vY21zLXN0cnVjdHVyZS9vdXRsZXQvb3V0bGV0LXJlZi9vdXRsZXQtcmVmLm1vZHVsZSc7XG5pbXBvcnQgeyBMYXlvdXRDb25maWcgfSBmcm9tICcuL2NvbmZpZy9sYXlvdXQtY29uZmlnJztcblxuY29uc3QgbGF5b3V0TW9kdWxlcyA9IFtPdXRsZXRSZWZNb2R1bGVdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbLi4ubGF5b3V0TW9kdWxlc10sXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTGF5b3V0Q29uZmlnLCB1c2VFeGlzdGluZzogQ29uZmlnIH1dLFxuICBleHBvcnRzOiBbLi4ubGF5b3V0TW9kdWxlc10sXG59KVxuZXhwb3J0IGNsYXNzIExheW91dE1vZHVsZSB7fVxuIl19