import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FeatureConfigService, provideDefaultConfig } from '@spartacus/core';
import { defaultDirectionConfig } from './config/default-direction.config';
import { DirectionService } from './direction.service';
export function initHtmlDirAttribute(directionService, featureConfigService) {
    const result = () => {
        if (featureConfigService.isLevel('2.1')) {
            return directionService.initialize();
        }
    };
    return result;
}
/**
 * Provides a configuration and APP_INITIALIZER to add the correct (language drive) html direction.
 */
export class DirectionModule {
}
DirectionModule.decorators = [
    { type: NgModule, args: [{
                providers: [
                    {
                        provide: APP_INITIALIZER,
                        multi: true,
                        useFactory: initHtmlDirAttribute,
                        deps: [DirectionService, FeatureConfigService],
                    },
                    provideDefaultConfig(defaultDirectionConfig),
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2xheW91dC9kaXJlY3Rpb24vZGlyZWN0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM3RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV2RCxNQUFNLFVBQVUsb0JBQW9CLENBQ2xDLGdCQUFrQyxFQUNsQyxvQkFBMEM7SUFFMUMsTUFBTSxNQUFNLEdBQUcsR0FBRyxFQUFFO1FBQ2xCLElBQUksb0JBQW9CLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3ZDLE9BQU8sZ0JBQWdCLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDdEM7SUFDSCxDQUFDLENBQUM7SUFDRixPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBRUQ7O0dBRUc7QUFZSCxNQUFNLE9BQU8sZUFBZTs7O1lBWDNCLFFBQVEsU0FBQztnQkFDUixTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGVBQWU7d0JBQ3hCLEtBQUssRUFBRSxJQUFJO3dCQUNYLFVBQVUsRUFBRSxvQkFBb0I7d0JBQ2hDLElBQUksRUFBRSxDQUFDLGdCQUFnQixFQUFFLG9CQUFvQixDQUFDO3FCQUMvQztvQkFDRCxvQkFBb0IsQ0FBQyxzQkFBc0IsQ0FBQztpQkFDN0M7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQUF9JTklUSUFMSVpFUiwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZlYXR1cmVDb25maWdTZXJ2aWNlLCBwcm92aWRlRGVmYXVsdENvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBkZWZhdWx0RGlyZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvZGVmYXVsdC1kaXJlY3Rpb24uY29uZmlnJztcbmltcG9ydCB7IERpcmVjdGlvblNlcnZpY2UgfSBmcm9tICcuL2RpcmVjdGlvbi5zZXJ2aWNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRIdG1sRGlyQXR0cmlidXRlKFxuICBkaXJlY3Rpb25TZXJ2aWNlOiBEaXJlY3Rpb25TZXJ2aWNlLFxuICBmZWF0dXJlQ29uZmlnU2VydmljZTogRmVhdHVyZUNvbmZpZ1NlcnZpY2Vcbikge1xuICBjb25zdCByZXN1bHQgPSAoKSA9PiB7XG4gICAgaWYgKGZlYXR1cmVDb25maWdTZXJ2aWNlLmlzTGV2ZWwoJzIuMScpKSB7XG4gICAgICByZXR1cm4gZGlyZWN0aW9uU2VydmljZS5pbml0aWFsaXplKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFByb3ZpZGVzIGEgY29uZmlndXJhdGlvbiBhbmQgQVBQX0lOSVRJQUxJWkVSIHRvIGFkZCB0aGUgY29ycmVjdCAobGFuZ3VhZ2UgZHJpdmUpIGh0bWwgZGlyZWN0aW9uLlxuICovXG5ATmdNb2R1bGUoe1xuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgIHVzZUZhY3Rvcnk6IGluaXRIdG1sRGlyQXR0cmlidXRlLFxuICAgICAgZGVwczogW0RpcmVjdGlvblNlcnZpY2UsIEZlYXR1cmVDb25maWdTZXJ2aWNlXSxcbiAgICB9LFxuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKGRlZmF1bHREaXJlY3Rpb25Db25maWcpLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBEaXJlY3Rpb25Nb2R1bGUge31cbiJdfQ==