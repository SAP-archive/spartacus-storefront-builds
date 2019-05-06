/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Config, ConfigModule } from '@spartacus/core';
import { defaultIconConfig } from './default-icon-config';
import { IconComponent } from './icon.component';
import { IconConfig } from './icon.config';
var IconModule = /** @class */ (function () {
    function IconModule() {
    }
    IconModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [IconComponent],
                    imports: [CommonModule, ConfigModule.withConfig(defaultIconConfig)],
                    providers: [{ provide: IconConfig, useExisting: Config }],
                    exports: [IconComponent],
                },] }
    ];
    return IconModule;
}());
export { IconModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9taXNjL2ljb24vaWNvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0M7SUFBQTtJQU15QixDQUFDOztnQkFOekIsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLGFBQWEsQ0FBQztvQkFDN0IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQztvQkFDbkUsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsQ0FBQztvQkFDekQsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDO2lCQUN6Qjs7SUFDd0IsaUJBQUM7Q0FBQSxBQU4xQixJQU0wQjtTQUFiLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZywgQ29uZmlnTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuaW1wb3J0IHsgZGVmYXVsdEljb25Db25maWcgfSBmcm9tICcuL2RlZmF1bHQtaWNvbi1jb25maWcnO1xuaW1wb3J0IHsgSWNvbkNvbXBvbmVudCB9IGZyb20gJy4vaWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWNvbkNvbmZpZyB9IGZyb20gJy4vaWNvbi5jb25maWcnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtJY29uQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoZGVmYXVsdEljb25Db25maWcpXSxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBJY29uQ29uZmlnLCB1c2VFeGlzdGluZzogQ29uZmlnIH1dLFxuICBleHBvcnRzOiBbSWNvbkNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEljb25Nb2R1bGUge31cbiJdfQ==