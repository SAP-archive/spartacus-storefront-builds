import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { provideDefaultConfig } from '@spartacus/core';
import { defaultQualtricsConfig } from './config/default-qualtrics-config';
import { QualtricsComponent } from './qualtrics.component';
export class QualtricsModule {
}
QualtricsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhbHRyaWNzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1jb21wb25lbnRzL21pc2MvcXVhbHRyaWNzL3F1YWx0cmljcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFhLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDM0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFpQjNELE1BQU0sT0FBTyxlQUFlOzs7WUFmM0IsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsWUFBWSxFQUFFLENBQUMsa0JBQWtCLENBQUM7Z0JBQ2xDLGVBQWUsRUFBRSxDQUFDLGtCQUFrQixDQUFDO2dCQUNyQyxTQUFTLEVBQUU7b0JBQ1Qsb0JBQW9CLENBQVk7d0JBQzlCLGFBQWEsRUFBRTs0QkFDYixrQkFBa0IsRUFBRTtnQ0FDbEIsU0FBUyxFQUFFLGtCQUFrQjs2QkFDOUI7eUJBQ0Y7cUJBQ0YsQ0FBQztvQkFDRixvQkFBb0IsQ0FBQyxzQkFBc0IsQ0FBQztpQkFDN0M7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ21zQ29uZmlnLCBwcm92aWRlRGVmYXVsdENvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBkZWZhdWx0UXVhbHRyaWNzQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvZGVmYXVsdC1xdWFsdHJpY3MtY29uZmlnJztcbmltcG9ydCB7IFF1YWx0cmljc0NvbXBvbmVudCB9IGZyb20gJy4vcXVhbHRyaWNzLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtRdWFsdHJpY3NDb21wb25lbnRdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtRdWFsdHJpY3NDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyg8Q21zQ29uZmlnPntcbiAgICAgIGNtc0NvbXBvbmVudHM6IHtcbiAgICAgICAgUXVhbHRyaWNzQ29tcG9uZW50OiB7XG4gICAgICAgICAgY29tcG9uZW50OiBRdWFsdHJpY3NDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKGRlZmF1bHRRdWFsdHJpY3NDb25maWcpLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBRdWFsdHJpY3NNb2R1bGUge31cbiJdfQ==