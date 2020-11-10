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

//# sourceMappingURL=direction.config.d.ts.map