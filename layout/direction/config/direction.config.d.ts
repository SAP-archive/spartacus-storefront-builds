import { Direction } from './direction.model';
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
import * as ɵngcc0 from '@angular/core';
export declare abstract class DirectionConfig {
    direction?: Direction;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DirectionConfig, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aW9uLmNvbmZpZy5kLnRzIiwic291cmNlcyI6WyJkaXJlY3Rpb24uY29uZmlnLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQTs7O0FBRUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3Rpb24gfSBmcm9tICcuL2RpcmVjdGlvbi5tb2RlbCc7XG4vKipcbiAqIFRoZSBkaXJlY3Rpb24gY29uZmlnIHByb3ZpZGVzIGFuIGVhc3kgd2F5IHRvIGNvbmZpZ3VyZSBcImx0clwiIHZlcnN1cyBcInJ0bFwiIGRpcmVjdGlvblxuICogZm9yIHRoZSBzdG9yZWZyb250LiBUaGUgZGlyZWN0aW9uIGNhbiBiZSBjb25maWd1cmVkIHRvIGRldGVjdCB0aGUgZGlyZWN0aW9uIGJ5IGxhbmd1YWdlLlxuICpcbiAqIFRoZSBmb2xsb3dpbmcgY29uZmlndXJhdGlvbiBkZXRlY3RzIHJ0bCBsYW5ndWFnZXMgYnkgaXNvQ29kZSBmb3IgQXJhYmljIGFuZCBIZWJyZXc6XG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogZGlyZWN0aW9uOiB7XG4gKiAgIGRldGVjdDogdHJ1ZSxcbiAqICAgZGVmYXVsdDogRGlyZWN0aW9uTW9kZS5MVFIsXG4gKiAgIHJ0bExhbmd1YWdlczogWydhcicsICdoZSddXG4gKiB9XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGRlY2xhcmUgYWJzdHJhY3QgY2xhc3MgRGlyZWN0aW9uQ29uZmlnIHtcbiAgICBkaXJlY3Rpb24/OiBEaXJlY3Rpb247XG59XG4iXX0=