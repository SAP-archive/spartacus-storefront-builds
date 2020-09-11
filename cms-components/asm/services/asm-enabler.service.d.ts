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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLWVuYWJsZXIuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJhc20tZW5hYmxlci5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IExhdW5jaERpYWxvZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9sYXlvdXQvbGF1bmNoLWRpYWxvZy9zZXJ2aWNlcy9sYXVuY2gtZGlhbG9nLnNlcnZpY2UnO1xuLyoqXG4gKiBUaGUgQXNtRW5hYmxlclNlcnZpY2UgaXMgdXNlZCB0byBlbmFibGUgQVNNIGZvciB0aG9zZSBzY2VuYXJpbydzXG4gKiB3aGVyZSBpdCdzIGFjdHVhbGx5IHVzZWQuIFRoaXMgc2VydmljZSBpcyBhZGRlZCB0byBhdm9pZCBhbnkgcG9sdXRpb25cbiAqIG9mIHRoZSBVSSBhbmQgcnVudGltZSBwZXJmb3JtYW5jZSBmb3IgdGhlIG9yZGluYXJ5IHByb2R1Y3Rpb24gdXNlci5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQXNtRW5hYmxlclNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBsb2NhdGlvbjogTG9jYXRpb247XG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmO1xuICAgIHByb3RlY3RlZCBsYXVuY2hEaWFsb2dTZXJ2aWNlOiBMYXVuY2hEaWFsb2dTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKGxvY2F0aW9uOiBMb2NhdGlvbiwgd2luUmVmOiBXaW5kb3dSZWYsIGxhdW5jaERpYWxvZ1NlcnZpY2U6IExhdW5jaERpYWxvZ1NlcnZpY2UpO1xuICAgIC8qKlxuICAgICAqIExvYWRzIHRoZSBBU00gVUkgaWYgbmVlZGVkLiBUaGUgQVNNIFVJIHdpbGwgYmUgYWRkZWQgYmFzZWQgb24gdGhlXG4gICAgICogZXhpc3RlbmNlIG9mIGEgVVJMIHBhcmFtZXRlciBvciBwcmV2aW91cyB1c2FnZSBnaXZlbiBieSBsb2NhbCBzdG9yYWdlLlxuICAgICAqL1xuICAgIGxvYWQoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgQVNNIG1vZHVsZSBpcyBlbmFibGVkLlxuICAgICAqL1xuICAgIGlzRW5hYmxlZCgpOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIEFTTSBpcyBsYXVuY2hlZCB0aHJvdWdoIHRoZSBVUkwsXG4gICAgICogdXNpbmcgdGhlIGFzbSBmbGFnIGluIHRoZSBVUkwuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGlzTGF1bmNoZWQoKTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBFdmFsdWF0ZXMgbG9jYWwgc3RvcmFnZSB3aGVyZSB3ZSBwZXJzaXN0IHRoZSB1c2FnZSBvZiBBU00uXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGlzVXNlZEJlZm9yZSgpOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIEFTTSBVSSBieSB1c2luZyB0aGUgYGN4LXN0b3JlZnJvbnRgIG91dGxldC5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYWRkVWkoKTogdm9pZDtcbn1cbiJdfQ==