import { AuthConfig, CmsConfig, GlobalMessageConfig, I18nConfig, KymaConfig, OccConfig, PersonalizationConfig, RoutingConfig, SiteContextConfig, StateConfig } from '@spartacus/core';
import { CheckoutConfig } from './cms-components/checkout/config/checkout-config';
import { IconConfig } from './cms-components/misc/icon/index';
import { PWAModuleConfig } from './cms-structure/pwa/index';
import { LayoutConfig } from './layout/config/layout-config';
import { FeatureToggles } from './feature-toggles';
import { ViewConfig } from './shared/config/view-config';
export declare type StorefrontConfig = AuthConfig | CmsConfig | OccConfig | StateConfig | PWAModuleConfig | SiteContextConfig | LayoutConfig | RoutingConfig | I18nConfig | PersonalizationConfig | IconConfig | CheckoutConfig | KymaConfig | GlobalMessageConfig | ViewConfig | FeatureToggles;
