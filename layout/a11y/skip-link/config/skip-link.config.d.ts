import * as ɵngcc0 from '@angular/core';
export declare abstract class SkipLinkConfig {
    skipLinks?: SkipLink[];
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SkipLinkConfig, never>;
}
export declare abstract class SkipLink {
    key: string;
    i18nKey: string;
    target?: HTMLElement;
    position?: SkipLinkScrollPosition;
}
export declare enum SkipLinkScrollPosition {
    BEFORE = "BEFORE",
    AFTER = "AFTER"
}

//# sourceMappingURL=skip-link.config.d.ts.map