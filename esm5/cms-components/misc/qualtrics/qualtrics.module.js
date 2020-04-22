import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { provideDefaultConfig } from '@spartacus/core';
import { defaultQualtricsConfig } from './config/default-qualtrics-config';
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
            ],
        })
    ], QualtricsModule);
    return QualtricsModule;
}());
export { QualtricsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhbHRyaWNzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL21pc2MvcXVhbHRyaWNzL3F1YWx0cmljcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBYSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBaUIzRDtJQUFBO0lBQThCLENBQUM7SUFBbEIsZUFBZTtRQWYzQixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7WUFDekMsWUFBWSxFQUFFLENBQUMsa0JBQWtCLENBQUM7WUFDbEMsZUFBZSxFQUFFLENBQUMsa0JBQWtCLENBQUM7WUFDckMsU0FBUyxFQUFFO2dCQUNULG9CQUFvQixDQUFZO29CQUM5QixhQUFhLEVBQUU7d0JBQ2Isa0JBQWtCLEVBQUU7NEJBQ2xCLFNBQVMsRUFBRSxrQkFBa0I7eUJBQzlCO3FCQUNGO2lCQUNGLENBQUM7Z0JBQ0Ysb0JBQW9CLENBQUMsc0JBQXNCLENBQUM7YUFDN0M7U0FDRixDQUFDO09BQ1csZUFBZSxDQUFHO0lBQUQsc0JBQUM7Q0FBQSxBQUEvQixJQUErQjtTQUFsQixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29uZmlnLCBwcm92aWRlRGVmYXVsdENvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBkZWZhdWx0UXVhbHRyaWNzQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvZGVmYXVsdC1xdWFsdHJpY3MtY29uZmlnJztcbmltcG9ydCB7IFF1YWx0cmljc0NvbXBvbmVudCB9IGZyb20gJy4vcXVhbHRyaWNzLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEh0dHBDbGllbnRNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtRdWFsdHJpY3NDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtRdWFsdHJpY3NDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgUXVhbHRyaWNzQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBRdWFsdHJpY3NDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKGRlZmF1bHRRdWFsdHJpY3NDb25maWcpLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBRdWFsdHJpY3NNb2R1bGUge31cbiJdfQ==