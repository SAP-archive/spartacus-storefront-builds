/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Config, ConfigModule } from '@spartacus/core';
import { fontawesomeIconConfig } from './fontawesome-icon.config';
import { IconComponent } from './icon.component';
import { IconConfig } from './icon.model';
export class IconModule {
}
IconModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IconComponent],
                imports: [CommonModule, ConfigModule.withConfig(fontawesomeIconConfig)],
                providers: [{ provide: IconConfig, useExisting: Config }],
                exports: [IconComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9taXNjL2ljb24vaWNvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFRMUMsTUFBTSxPQUFPLFVBQVU7OztZQU50QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsYUFBYSxDQUFDO2dCQUM3QixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2dCQUN2RSxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxDQUFDO2dCQUN6RCxPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUM7YUFDekIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZywgQ29uZmlnTW9kdWxlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGZvbnRhd2Vzb21lSWNvbkNvbmZpZyB9IGZyb20gJy4vZm9udGF3ZXNvbWUtaWNvbi5jb25maWcnO1xuaW1wb3J0IHsgSWNvbkNvbXBvbmVudCB9IGZyb20gJy4vaWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWNvbkNvbmZpZyB9IGZyb20gJy4vaWNvbi5tb2RlbCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0ljb25Db21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBDb25maWdNb2R1bGUud2l0aENvbmZpZyhmb250YXdlc29tZUljb25Db25maWcpXSxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBJY29uQ29uZmlnLCB1c2VFeGlzdGluZzogQ29uZmlnIH1dLFxuICBleHBvcnRzOiBbSWNvbkNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEljb25Nb2R1bGUge31cbiJdfQ==