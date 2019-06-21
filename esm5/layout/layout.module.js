/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { Config } from '@spartacus/core';
import { OutletRefModule } from '../cms-structure/outlet/index';
import { LayoutConfig } from './config/layout-config';
import { MainModule } from './main/main.module';
/** @type {?} */
var layoutModules = [OutletRefModule];
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule.decorators = [
        { type: NgModule, args: [{
                    imports: tslib_1.__spread([MainModule], layoutModules),
                    providers: [{ provide: LayoutConfig, useExisting: Config }],
                    exports: tslib_1.__spread([MainModule], layoutModules),
                },] }
    ];
    return LayoutModule;
}());
export { LayoutModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9sYXlvdXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0lBRTFDLGFBQWEsR0FBRyxDQUFDLGVBQWUsQ0FBQztBQUV2QztJQUFBO0lBSzJCLENBQUM7O2dCQUwzQixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxvQkFBRyxVQUFVLEdBQUssYUFBYSxDQUFDO29CQUN2QyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxDQUFDO29CQUMzRCxPQUFPLG9CQUFHLFVBQVUsR0FBSyxhQUFhLENBQUM7aUJBQ3hDOztJQUMwQixtQkFBQztDQUFBLEFBTDVCLElBSzRCO1NBQWYsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT3V0bGV0UmVmTW9kdWxlIH0gZnJvbSAnLi4vY21zLXN0cnVjdHVyZS9vdXRsZXQvaW5kZXgnO1xuaW1wb3J0IHsgTGF5b3V0Q29uZmlnIH0gZnJvbSAnLi9jb25maWcvbGF5b3V0LWNvbmZpZyc7XG5pbXBvcnQgeyBNYWluTW9kdWxlIH0gZnJvbSAnLi9tYWluL21haW4ubW9kdWxlJztcblxuY29uc3QgbGF5b3V0TW9kdWxlcyA9IFtPdXRsZXRSZWZNb2R1bGVdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTWFpbk1vZHVsZSwgLi4ubGF5b3V0TW9kdWxlc10sXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTGF5b3V0Q29uZmlnLCB1c2VFeGlzdGluZzogQ29uZmlnIH1dLFxuICBleHBvcnRzOiBbTWFpbk1vZHVsZSwgLi4ubGF5b3V0TW9kdWxlc10sXG59KVxuZXhwb3J0IGNsYXNzIExheW91dE1vZHVsZSB7fVxuIl19