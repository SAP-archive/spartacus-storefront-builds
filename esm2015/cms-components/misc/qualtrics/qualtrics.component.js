import { __decorate } from "tslib";
import { Component, isDevMode } from '@angular/core';
import { QualtricsConfig } from './config/qualtrics-config';
import { QualtricsLoaderService } from './qualtrics-loader.service';
/**
 * Adds the Qualtrics deployment script whenever the component is loaded. The
 * deployment script is loaded from the global configuration (`qualtrics.scriptSource`).
 */
let QualtricsComponent = class QualtricsComponent {
    constructor(qualtricsLoader, config) {
        var _a;
        this.qualtricsLoader = qualtricsLoader;
        this.config = config;
        if ((_a = this.config.qualtrics) === null || _a === void 0 ? void 0 : _a.scriptSource) {
            this.qualtricsLoader.addScript(this.config.qualtrics.scriptSource);
        }
        else if (isDevMode()) {
            console.warn(`We're unable to add the Qualtrics deployment code as there is no script source defined in config.qualtrics.scriptSource.`);
        }
    }
};
QualtricsComponent.ctorParameters = () => [
    { type: QualtricsLoaderService },
    { type: QualtricsConfig }
];
QualtricsComponent = __decorate([
    Component({
        selector: 'cx-qualtrics',
        template: ``
    })
], QualtricsComponent);
export { QualtricsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhbHRyaWNzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL21pc2MvcXVhbHRyaWNzL3F1YWx0cmljcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRTs7O0dBR0c7QUFLSCxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtJQUM3QixZQUNZLGVBQXVDLEVBQ3ZDLE1BQXVCOztRQUR2QixvQkFBZSxHQUFmLGVBQWUsQ0FBd0I7UUFDdkMsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUFFakMsVUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsMENBQUUsWUFBWSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3BFO2FBQU0sSUFBSSxTQUFTLEVBQUUsRUFBRTtZQUN0QixPQUFPLENBQUMsSUFBSSxDQUNWLDBIQUEwSCxDQUMzSCxDQUFDO1NBQ0g7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUFYOEIsc0JBQXNCO1lBQy9CLGVBQWU7O0FBSHhCLGtCQUFrQjtJQUo5QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsY0FBYztRQUN4QixRQUFRLEVBQUUsRUFBRTtLQUNiLENBQUM7R0FDVyxrQkFBa0IsQ0FhOUI7U0FiWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGlzRGV2TW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUXVhbHRyaWNzQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvcXVhbHRyaWNzLWNvbmZpZyc7XG5pbXBvcnQgeyBRdWFsdHJpY3NMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi9xdWFsdHJpY3MtbG9hZGVyLnNlcnZpY2UnO1xuLyoqXG4gKiBBZGRzIHRoZSBRdWFsdHJpY3MgZGVwbG95bWVudCBzY3JpcHQgd2hlbmV2ZXIgdGhlIGNvbXBvbmVudCBpcyBsb2FkZWQuIFRoZVxuICogZGVwbG95bWVudCBzY3JpcHQgaXMgbG9hZGVkIGZyb20gdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uIChgcXVhbHRyaWNzLnNjcmlwdFNvdXJjZWApLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1xdWFsdHJpY3MnLFxuICB0ZW1wbGF0ZTogYGAsXG59KVxuZXhwb3J0IGNsYXNzIFF1YWx0cmljc0NvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBxdWFsdHJpY3NMb2FkZXI6IFF1YWx0cmljc0xvYWRlclNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogUXVhbHRyaWNzQ29uZmlnXG4gICkge1xuICAgIGlmICh0aGlzLmNvbmZpZy5xdWFsdHJpY3M/LnNjcmlwdFNvdXJjZSkge1xuICAgICAgdGhpcy5xdWFsdHJpY3NMb2FkZXIuYWRkU2NyaXB0KHRoaXMuY29uZmlnLnF1YWx0cmljcy5zY3JpcHRTb3VyY2UpO1xuICAgIH0gZWxzZSBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYFdlJ3JlIHVuYWJsZSB0byBhZGQgdGhlIFF1YWx0cmljcyBkZXBsb3ltZW50IGNvZGUgYXMgdGhlcmUgaXMgbm8gc2NyaXB0IHNvdXJjZSBkZWZpbmVkIGluIGNvbmZpZy5xdWFsdHJpY3Muc2NyaXB0U291cmNlLmBcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iXX0=