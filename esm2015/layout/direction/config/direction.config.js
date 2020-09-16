import { Injectable } from '@angular/core';
import { Config } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
/**
 * The direction config provides an easy way to configure "ltr" versus "rtl" direction
 * for the storefront. The direction can be configured to detect the direction by language.
 *
 * The following configuration detects rtl languages by isoCode for Arabic and Hebrew:
 *
 * ```typescript
 * direction: {
 *   detect: true,
 *   default: DirectionMode.LTR,
 *   rtlLanguages: ['ar', 'he']
 * }
 * ```
 */
export class DirectionConfig {
}
DirectionConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function DirectionConfig_Factory() { return i0.ɵɵinject(i1.Config); }, token: DirectionConfig, providedIn: "root" });
DirectionConfig.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
                useExisting: Config,
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aW9uLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2xheW91dC9kaXJlY3Rpb24vY29uZmlnL2RpcmVjdGlvbi5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQUd6Qzs7Ozs7Ozs7Ozs7OztHQWFHO0FBS0gsTUFBTSxPQUFnQixlQUFlOzs7O1lBSnBDLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTtnQkFDbEIsV0FBVyxFQUFFLE1BQU07YUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgRGlyZWN0aW9uIH0gZnJvbSAnLi9kaXJlY3Rpb24ubW9kZWwnO1xuXG4vKipcbiAqIFRoZSBkaXJlY3Rpb24gY29uZmlnIHByb3ZpZGVzIGFuIGVhc3kgd2F5IHRvIGNvbmZpZ3VyZSBcImx0clwiIHZlcnN1cyBcInJ0bFwiIGRpcmVjdGlvblxuICogZm9yIHRoZSBzdG9yZWZyb250LiBUaGUgZGlyZWN0aW9uIGNhbiBiZSBjb25maWd1cmVkIHRvIGRldGVjdCB0aGUgZGlyZWN0aW9uIGJ5IGxhbmd1YWdlLlxuICpcbiAqIFRoZSBmb2xsb3dpbmcgY29uZmlndXJhdGlvbiBkZXRlY3RzIHJ0bCBsYW5ndWFnZXMgYnkgaXNvQ29kZSBmb3IgQXJhYmljIGFuZCBIZWJyZXc6XG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogZGlyZWN0aW9uOiB7XG4gKiAgIGRldGVjdDogdHJ1ZSxcbiAqICAgZGVmYXVsdDogRGlyZWN0aW9uTW9kZS5MVFIsXG4gKiAgIHJ0bExhbmd1YWdlczogWydhcicsICdoZSddXG4gKiB9XG4gKiBgYGBcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG4gIHVzZUV4aXN0aW5nOiBDb25maWcsXG59KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIERpcmVjdGlvbkNvbmZpZyB7XG4gIGRpcmVjdGlvbj86IERpcmVjdGlvbjtcbn1cbiJdfQ==