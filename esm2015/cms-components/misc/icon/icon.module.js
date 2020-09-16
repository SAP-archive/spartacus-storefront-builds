import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { provideDefaultConfig } from '@spartacus/core';
import { defaultIconConfig } from './default-icon.config';
import { fontawesomeIconConfig } from './fontawesome-icon.config';
import { IconComponent } from './icon.component';
export class IconModule {
}
IconModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IconComponent],
                imports: [CommonModule],
                providers: [
                    provideDefaultConfig(defaultIconConfig),
                    // TODO: move the opinionated fontawesome config to a recipe
                    provideDefaultConfig(fontawesomeIconConfig),
                ],
                exports: [IconComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtY29tcG9uZW50cy9taXNjL2ljb24vaWNvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBWWpELE1BQU0sT0FBTyxVQUFVOzs7WUFWdEIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGFBQWEsQ0FBQztnQkFDN0IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixTQUFTLEVBQUU7b0JBQ1Qsb0JBQW9CLENBQUMsaUJBQWlCLENBQUM7b0JBQ3ZDLDREQUE0RDtvQkFDNUQsb0JBQW9CLENBQUMscUJBQXFCLENBQUM7aUJBQzVDO2dCQUNELE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQzthQUN6QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcHJvdmlkZURlZmF1bHRDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgZGVmYXVsdEljb25Db25maWcgfSBmcm9tICcuL2RlZmF1bHQtaWNvbi5jb25maWcnO1xuaW1wb3J0IHsgZm9udGF3ZXNvbWVJY29uQ29uZmlnIH0gZnJvbSAnLi9mb250YXdlc29tZS1pY29uLmNvbmZpZyc7XG5pbXBvcnQgeyBJY29uQ29tcG9uZW50IH0gZnJvbSAnLi9pY29uLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0ljb25Db21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoZGVmYXVsdEljb25Db25maWcpLFxuICAgIC8vIFRPRE86IG1vdmUgdGhlIG9waW5pb25hdGVkIGZvbnRhd2Vzb21lIGNvbmZpZyB0byBhIHJlY2lwZVxuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKGZvbnRhd2Vzb21lSWNvbkNvbmZpZyksXG4gIF0sXG4gIGV4cG9ydHM6IFtJY29uQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgSWNvbk1vZHVsZSB7fVxuIl19