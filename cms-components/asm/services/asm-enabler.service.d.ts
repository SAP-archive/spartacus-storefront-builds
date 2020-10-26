import { Location } from '@angular/common';
import { WindowRef } from '@spartacus/core';
import { LaunchDialogService } from '../../../layout/launch-dialog/services/launch-dialog.service';
/**
 * The AsmEnablerService is used to enable ASM for those scenario's
 * where it's actually used. This service is added to avoid any polution
 * of the UI and runtime performance for the ordinary production user.
 */
import * as ɵngcc0 from '@angular/core';
export declare class AsmEnablerService {
    protected location: Location;
    protected winRef: WindowRef;
    protected launchDialogService: LaunchDialogService;
    constructor(location: Location, winRef: WindowRef, launchDialogService: LaunchDialogService);
    /**
     * Loads the ASM UI if needed. The ASM UI will be added based on the
     * existence of a URL parameter or previous usage given by local storage.
     */
    load(): void;
    /**
     * Indicates whether the ASM module is enabled.
     */
    isEnabled(): boolean;
    /**
     * Indicates whether ASM is launched through the URL,
     * using the asm flag in the URL.
     */
    protected isLaunched(): boolean;
    /**
     * Evaluates local storage where we persist the usage of ASM.
     */
    protected isUsedBefore(): boolean;
    /**
     * Adds the ASM UI by using the `cx-storefront` outlet.
     */
    protected addUi(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AsmEnablerService, never>;
}

//# sourceMappingURL=asm-enabler.service.d.ts.map