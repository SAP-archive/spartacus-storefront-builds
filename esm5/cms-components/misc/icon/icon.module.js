import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { provideDefaultConfig } from '@spartacus/core';
import { defaultIconConfig } from './default-icon.config';
import { fontawesomeIconConfig } from './fontawesome-icon.config';
import { IconComponent } from './icon.component';
var IconModule = /** @class */ (function () {
    function IconModule() {
    }
    IconModule = __decorate([
        NgModule({
            declarations: [IconComponent],
            imports: [CommonModule],
            providers: [
                provideDefaultConfig(defaultIconConfig),
                // TODO: move the opinionated fontawesome config to a recipe
                provideDefaultConfig(fontawesomeIconConfig),
            ],
            exports: [IconComponent],
        })
    ], IconModule);
    return IconModule;
}());
export { IconModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9taXNjL2ljb24vaWNvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQVlqRDtJQUFBO0lBQXlCLENBQUM7SUFBYixVQUFVO1FBVnRCLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxDQUFDLGFBQWEsQ0FBQztZQUM3QixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7WUFDdkIsU0FBUyxFQUFFO2dCQUNULG9CQUFvQixDQUFDLGlCQUFpQixDQUFDO2dCQUN2Qyw0REFBNEQ7Z0JBQzVELG9CQUFvQixDQUFDLHFCQUFxQixDQUFDO2FBQzVDO1lBQ0QsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDO1NBQ3pCLENBQUM7T0FDVyxVQUFVLENBQUc7SUFBRCxpQkFBQztDQUFBLEFBQTFCLElBQTBCO1NBQWIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcHJvdmlkZURlZmF1bHRDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgZGVmYXVsdEljb25Db25maWcgfSBmcm9tICcuL2RlZmF1bHQtaWNvbi5jb25maWcnO1xuaW1wb3J0IHsgZm9udGF3ZXNvbWVJY29uQ29uZmlnIH0gZnJvbSAnLi9mb250YXdlc29tZS1pY29uLmNvbmZpZyc7XG5pbXBvcnQgeyBJY29uQ29tcG9uZW50IH0gZnJvbSAnLi9pY29uLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0ljb25Db21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoZGVmYXVsdEljb25Db25maWcpLFxuICAgIC8vIFRPRE86IG1vdmUgdGhlIG9waW5pb25hdGVkIGZvbnRhd2Vzb21lIGNvbmZpZyB0byBhIHJlY2lwZVxuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKGZvbnRhd2Vzb21lSWNvbkNvbmZpZyksXG4gIF0sXG4gIGV4cG9ydHM6IFtJY29uQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgSWNvbk1vZHVsZSB7fVxuIl19