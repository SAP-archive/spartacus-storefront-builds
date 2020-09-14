import { BREAKPOINT } from '../../../../layout/config/layout-config';
import { TableStructureConfiguration } from '../table.model';
/**
 * Helper configuration to introduce a breakpoint specific table configuration.
 */
import * as ɵngcc0 from '@angular/core';
export interface TableConfiguration extends TableStructureConfiguration {
    breakpoint?: BREAKPOINT;
}
/**
 * The `TableConfig` provides table configurations. The configuration allows for a
 * an optional breakpoint specific structure, so a dedicated table structure per
 * screen size can be generated (see `TableService`).
 *
 * The string based key is used to define a configuration for a specific type. The type
 * binds to a specific component, such as the cost-center table. The various table types
 * should be exposed by feature modules, to ease the configuration.
 *
 * The `TableConfiguration` is added in an array, so that any opinionated default configurations
 * can be replaced by customer configurations.
 */
export declare abstract class TableConfig {
    table: {
        [key: string]: TableConfiguration[];
    };
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TableConfig, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29uZmlnLmQudHMiLCJzb3VyY2VzIjpbInRhYmxlLmNvbmZpZy5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCUkVBS1BPSU5UIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGF5b3V0L2NvbmZpZy9sYXlvdXQtY29uZmlnJztcbmltcG9ydCB7IFRhYmxlU3RydWN0dXJlQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL3RhYmxlLm1vZGVsJztcbi8qKlxuICogSGVscGVyIGNvbmZpZ3VyYXRpb24gdG8gaW50cm9kdWNlIGEgYnJlYWtwb2ludCBzcGVjaWZpYyB0YWJsZSBjb25maWd1cmF0aW9uLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlQ29uZmlndXJhdGlvbiBleHRlbmRzIFRhYmxlU3RydWN0dXJlQ29uZmlndXJhdGlvbiB7XG4gICAgYnJlYWtwb2ludD86IEJSRUFLUE9JTlQ7XG59XG4vKipcbiAqIFRoZSBgVGFibGVDb25maWdgIHByb3ZpZGVzIHRhYmxlIGNvbmZpZ3VyYXRpb25zLiBUaGUgY29uZmlndXJhdGlvbiBhbGxvd3MgZm9yIGFcbiAqIGFuIG9wdGlvbmFsIGJyZWFrcG9pbnQgc3BlY2lmaWMgc3RydWN0dXJlLCBzbyBhIGRlZGljYXRlZCB0YWJsZSBzdHJ1Y3R1cmUgcGVyXG4gKiBzY3JlZW4gc2l6ZSBjYW4gYmUgZ2VuZXJhdGVkIChzZWUgYFRhYmxlU2VydmljZWApLlxuICpcbiAqIFRoZSBzdHJpbmcgYmFzZWQga2V5IGlzIHVzZWQgdG8gZGVmaW5lIGEgY29uZmlndXJhdGlvbiBmb3IgYSBzcGVjaWZpYyB0eXBlLiBUaGUgdHlwZVxuICogYmluZHMgdG8gYSBzcGVjaWZpYyBjb21wb25lbnQsIHN1Y2ggYXMgdGhlIGNvc3QtY2VudGVyIHRhYmxlLiBUaGUgdmFyaW91cyB0YWJsZSB0eXBlc1xuICogc2hvdWxkIGJlIGV4cG9zZWQgYnkgZmVhdHVyZSBtb2R1bGVzLCB0byBlYXNlIHRoZSBjb25maWd1cmF0aW9uLlxuICpcbiAqIFRoZSBgVGFibGVDb25maWd1cmF0aW9uYCBpcyBhZGRlZCBpbiBhbiBhcnJheSwgc28gdGhhdCBhbnkgb3BpbmlvbmF0ZWQgZGVmYXVsdCBjb25maWd1cmF0aW9uc1xuICogY2FuIGJlIHJlcGxhY2VkIGJ5IGN1c3RvbWVyIGNvbmZpZ3VyYXRpb25zLlxuICovXG5leHBvcnQgZGVjbGFyZSBhYnN0cmFjdCBjbGFzcyBUYWJsZUNvbmZpZyB7XG4gICAgdGFibGU6IHtcbiAgICAgICAgW2tleTogc3RyaW5nXTogVGFibGVDb25maWd1cmF0aW9uW107XG4gICAgfTtcbn1cbiJdfQ==