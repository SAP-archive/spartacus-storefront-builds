import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Config, ConfigModule } from '@spartacus/core';
import { defaultQualtricsConfig } from './config/default-qualtrics-config';
import { QualtricsConfig } from './config/qualtrics-config';
import { QualtricsComponent } from './qualtrics.component';
var QualtricsModule = /** @class */ (function () {
    function QualtricsModule() {
    }
    QualtricsModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                HttpClientModule,
                ConfigModule.withConfig({
                    cmsComponents: {
                        QualtricsComponent: {
                            component: QualtricsComponent,
                        },
                    },
                }),
                ConfigModule.withConfig(defaultQualtricsConfig),
            ],
            declarations: [QualtricsComponent],
            entryComponents: [QualtricsComponent],
            providers: [
                {
                    provide: QualtricsConfig,
                    useExisting: Config,
                },
            ],
        })
    ], QualtricsModule);
    return QualtricsModule;
}());
export { QualtricsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhbHRyaWNzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL21pc2MvcXVhbHRyaWNzL3F1YWx0cmljcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBYSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDM0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBd0IzRDtJQUFBO0lBQThCLENBQUM7SUFBbEIsZUFBZTtRQXRCM0IsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1osZ0JBQWdCO2dCQUNoQixZQUFZLENBQUMsVUFBVSxDQUFZO29CQUNqQyxhQUFhLEVBQUU7d0JBQ2Isa0JBQWtCLEVBQUU7NEJBQ2xCLFNBQVMsRUFBRSxrQkFBa0I7eUJBQzlCO3FCQUNGO2lCQUNGLENBQUM7Z0JBQ0YsWUFBWSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQzthQUNoRDtZQUNELFlBQVksRUFBRSxDQUFDLGtCQUFrQixDQUFDO1lBQ2xDLGVBQWUsRUFBRSxDQUFDLGtCQUFrQixDQUFDO1lBQ3JDLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsZUFBZTtvQkFDeEIsV0FBVyxFQUFFLE1BQU07aUJBQ3BCO2FBQ0Y7U0FDRixDQUFDO09BQ1csZUFBZSxDQUFHO0lBQUQsc0JBQUM7Q0FBQSxBQUEvQixJQUErQjtTQUFsQixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29uZmlnLCBDb25maWcsIENvbmZpZ01vZHVsZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBkZWZhdWx0UXVhbHRyaWNzQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvZGVmYXVsdC1xdWFsdHJpY3MtY29uZmlnJztcbmltcG9ydCB7IFF1YWx0cmljc0NvbmZpZyB9IGZyb20gJy4vY29uZmlnL3F1YWx0cmljcy1jb25maWcnO1xuaW1wb3J0IHsgUXVhbHRyaWNzQ29tcG9uZW50IH0gZnJvbSAnLi9xdWFsdHJpY3MuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKDxDbXNDb25maWc+e1xuICAgICAgY21zQ29tcG9uZW50czoge1xuICAgICAgICBRdWFsdHJpY3NDb21wb25lbnQ6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IFF1YWx0cmljc0NvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoZGVmYXVsdFF1YWx0cmljc0NvbmZpZyksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1F1YWx0cmljc0NvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1F1YWx0cmljc0NvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFF1YWx0cmljc0NvbmZpZyxcbiAgICAgIHVzZUV4aXN0aW5nOiBDb25maWcsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUXVhbHRyaWNzTW9kdWxlIHt9XG4iXX0=