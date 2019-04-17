import { ServerConfig } from '@spartacus/core';
export declare abstract class PWAModuleConfig extends ServerConfig {
    pwa?: {
        enabled?: boolean;
        addToHomeScreen?: boolean;
    };
}
export declare const defaultPWAModuleConfig: PWAModuleConfig;
