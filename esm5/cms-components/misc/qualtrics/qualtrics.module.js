import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Config, provideDefaultConfig } from '@spartacus/core';
import { defaultQualtricsConfig } from './config/default-qualtrics-config';
import { QualtricsConfig } from './config/qualtrics-config';
import { QualtricsComponent } from './qualtrics.component';
var QualtricsModule = /** @class */ (function () {
    function QualtricsModule() {
    }
    QualtricsModule = __decorate([
        NgModule({
            imports: [CommonModule, HttpClientModule],
            declarations: [QualtricsComponent],
            entryComponents: [QualtricsComponent],
            providers: [
                provideDefaultConfig({
                    cmsComponents: {
                        QualtricsComponent: {
                            component: QualtricsComponent,
                        },
                    },
                }),
                provideDefaultConfig(defaultQualtricsConfig),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhbHRyaWNzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL21pc2MvcXVhbHRyaWNzL3F1YWx0cmljcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBYSxNQUFNLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFzQjNEO0lBQUE7SUFBOEIsQ0FBQztJQUFsQixlQUFlO1FBcEIzQixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7WUFDekMsWUFBWSxFQUFFLENBQUMsa0JBQWtCLENBQUM7WUFDbEMsZUFBZSxFQUFFLENBQUMsa0JBQWtCLENBQUM7WUFDckMsU0FBUyxFQUFFO2dCQUNULG9CQUFvQixDQUFZO29CQUM5QixhQUFhLEVBQUU7d0JBQ2Isa0JBQWtCLEVBQUU7NEJBQ2xCLFNBQVMsRUFBRSxrQkFBa0I7eUJBQzlCO3FCQUNGO2lCQUNGLENBQUM7Z0JBQ0Ysb0JBQW9CLENBQUMsc0JBQXNCLENBQUM7Z0JBRTVDO29CQUNFLE9BQU8sRUFBRSxlQUFlO29CQUN4QixXQUFXLEVBQUUsTUFBTTtpQkFDcEI7YUFDRjtTQUNGLENBQUM7T0FDVyxlQUFlLENBQUc7SUFBRCxzQkFBQztDQUFBLEFBQS9CLElBQStCO1NBQWxCLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNDb25maWcsIENvbmZpZywgcHJvdmlkZURlZmF1bHRDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgZGVmYXVsdFF1YWx0cmljc0NvbmZpZyB9IGZyb20gJy4vY29uZmlnL2RlZmF1bHQtcXVhbHRyaWNzLWNvbmZpZyc7XG5pbXBvcnQgeyBRdWFsdHJpY3NDb25maWcgfSBmcm9tICcuL2NvbmZpZy9xdWFsdHJpY3MtY29uZmlnJztcbmltcG9ydCB7IFF1YWx0cmljc0NvbXBvbmVudCB9IGZyb20gJy4vcXVhbHRyaWNzLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEh0dHBDbGllbnRNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtRdWFsdHJpY3NDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtRdWFsdHJpY3NDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgUXVhbHRyaWNzQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBRdWFsdHJpY3NDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKGRlZmF1bHRRdWFsdHJpY3NDb25maWcpLFxuXG4gICAge1xuICAgICAgcHJvdmlkZTogUXVhbHRyaWNzQ29uZmlnLFxuICAgICAgdXNlRXhpc3Rpbmc6IENvbmZpZyxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBRdWFsdHJpY3NNb2R1bGUge31cbiJdfQ==