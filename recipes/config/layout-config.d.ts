import { LayoutConfig } from '../../layout/config/layout-config';
/**
 * The layout configuration is used to define the overall layout of the storefront.
 * The configuration includes the following aspects:
 * - breakpoint layout (AKA screen layout)
 * - Page sections slot configuration (i.e. header vs footer)
 * - page template slot configuration (i.e. landing page template vs PDP page template)
 * - deferred loading configuration
 *
 * The page slot configurations is directly related to the data in the backend. If you use the
 * Spartacus sample-data, you will have an aligned setup. However, if you introduce custom page
 * templates and/or slots, you most likely need to further adjust or replace this configuration.
 */
export declare const layoutConfig: LayoutConfig;
/**
 * @deprecated the b2cLayoutConfig will be dropped with version 4.0.
 *
 * With Spartacus 3.0 we started to align various layout configurations. Moreover, we move
 * into a pattern where layout configurations are shattered through various (lazy loaded) modules.
 */
export declare const b2cLayoutConfig: LayoutConfig;
