import { __decorate } from "tslib";
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
let DirectionModule = class DirectionModule {
};
DirectionModule = __decorate([
    NgModule({
        providers: [
            {
                provide: APP_INITIALIZER,
                multi: true,
                useFactory: initHtmlDirAttribute,
                deps: [DirectionService, FeatureConfigService],
            },
            provideDefaultConfig(defaultDirectionConfig),
        ],
    })
], DirectionModule);
export { DirectionModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxheW91dC9kaXJlY3Rpb24vZGlyZWN0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDN0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdkQsTUFBTSxVQUFVLG9CQUFvQixDQUNsQyxnQkFBa0MsRUFDbEMsb0JBQTBDO0lBRTFDLE1BQU0sTUFBTSxHQUFHLEdBQUcsRUFBRTtRQUNsQixJQUFJLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN2QyxPQUFPLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUVEOztHQUVHO0FBWUgsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtDQUFHLENBQUE7QUFBbEIsZUFBZTtJQVgzQixRQUFRLENBQUM7UUFDUixTQUFTLEVBQUU7WUFDVDtnQkFDRSxPQUFPLEVBQUUsZUFBZTtnQkFDeEIsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsVUFBVSxFQUFFLG9CQUFvQjtnQkFDaEMsSUFBSSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsb0JBQW9CLENBQUM7YUFDL0M7WUFDRCxvQkFBb0IsQ0FBQyxzQkFBc0IsQ0FBQztTQUM3QztLQUNGLENBQUM7R0FDVyxlQUFlLENBQUc7U0FBbEIsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQUF9JTklUSUFMSVpFUiwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZlYXR1cmVDb25maWdTZXJ2aWNlLCBwcm92aWRlRGVmYXVsdENvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBkZWZhdWx0RGlyZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvZGVmYXVsdC1kaXJlY3Rpb24uY29uZmlnJztcbmltcG9ydCB7IERpcmVjdGlvblNlcnZpY2UgfSBmcm9tICcuL2RpcmVjdGlvbi5zZXJ2aWNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRIdG1sRGlyQXR0cmlidXRlKFxuICBkaXJlY3Rpb25TZXJ2aWNlOiBEaXJlY3Rpb25TZXJ2aWNlLFxuICBmZWF0dXJlQ29uZmlnU2VydmljZTogRmVhdHVyZUNvbmZpZ1NlcnZpY2Vcbikge1xuICBjb25zdCByZXN1bHQgPSAoKSA9PiB7XG4gICAgaWYgKGZlYXR1cmVDb25maWdTZXJ2aWNlLmlzTGV2ZWwoJzIuMScpKSB7XG4gICAgICByZXR1cm4gZGlyZWN0aW9uU2VydmljZS5pbml0aWFsaXplKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFByb3ZpZGVzIGEgY29uZmlndXJhdGlvbiBhbmQgQVBQX0lOSVRJQUxJWkVSIHRvIGFkZCB0aGUgY29ycmVjdCAobGFuZ3VhZ2UgZHJpdmUpIGh0bWwgZGlyZWN0aW9uLlxuICovXG5ATmdNb2R1bGUoe1xuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgIHVzZUZhY3Rvcnk6IGluaXRIdG1sRGlyQXR0cmlidXRlLFxuICAgICAgZGVwczogW0RpcmVjdGlvblNlcnZpY2UsIEZlYXR1cmVDb25maWdTZXJ2aWNlXSxcbiAgICB9LFxuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKGRlZmF1bHREaXJlY3Rpb25Db25maWcpLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBEaXJlY3Rpb25Nb2R1bGUge31cbiJdfQ==