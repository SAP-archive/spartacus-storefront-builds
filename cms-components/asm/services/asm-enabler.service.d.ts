import { Location } from '@angular/common';
import { ComponentFactory, ComponentFactoryResolver } from '@angular/core';
import { WindowRef } from '@spartacus/core';
import { OutletService } from '../../../cms-structure/index';
/**
 * The AsmEnablerService is used to enable ASM for those scenario's
 * where it's actually used. This service is added to avoid any polution
 * of the UI and runtime performance for the ordinary production user.
 */
import * as ɵngcc0 from '@angular/core';
export declare class AsmEnablerService {
    protected location: Location;
    protected winRef: WindowRef;
    protected componentFactoryResolver: ComponentFactoryResolver;
    protected outletService: OutletService<ComponentFactory<any>>;
    /** indicates whether the ASM UI has been added already */
    private isUiAdded;
    constructor(location: Location, winRef: WindowRef, componentFactoryResolver: ComponentFactoryResolver, outletService: OutletService<ComponentFactory<any>>);
    /**
     * Loads the ASM UI if needed. The ASM UI will be added based on the
     * existence of a URL parameter or previous usage given by local storage.
     */
    load(): void;
    /**
     * Indicates whether the ASM module is enabled.
     */
    private isEnabled;
    /**
     * Indicates whether ASM is launched through the URL,
     * using the asm flag in the URL.
     */
    private isLaunched;
    /**
     * Evaluates local storage where we persist the usage of ASM.
     */
    private isUsedBefore;
    /**
     * Adds the ASM UI by using the `cx-storefront` outlet.
     */
    private addUi;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AsmEnablerService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLWVuYWJsZXIuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJhc20tZW5hYmxlci5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThCQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnRGYWN0b3J5LCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPdXRsZXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9pbmRleCc7XG4vKipcbiAqIFRoZSBBc21FbmFibGVyU2VydmljZSBpcyB1c2VkIHRvIGVuYWJsZSBBU00gZm9yIHRob3NlIHNjZW5hcmlvJ3NcbiAqIHdoZXJlIGl0J3MgYWN0dWFsbHkgdXNlZC4gVGhpcyBzZXJ2aWNlIGlzIGFkZGVkIHRvIGF2b2lkIGFueSBwb2x1dGlvblxuICogb2YgdGhlIFVJIGFuZCBydW50aW1lIHBlcmZvcm1hbmNlIGZvciB0aGUgb3JkaW5hcnkgcHJvZHVjdGlvbiB1c2VyLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBc21FbmFibGVyU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIGxvY2F0aW9uOiBMb2NhdGlvbjtcbiAgICBwcm90ZWN0ZWQgd2luUmVmOiBXaW5kb3dSZWY7XG4gICAgcHJvdGVjdGVkIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyO1xuICAgIHByb3RlY3RlZCBvdXRsZXRTZXJ2aWNlOiBPdXRsZXRTZXJ2aWNlPENvbXBvbmVudEZhY3Rvcnk8YW55Pj47XG4gICAgLyoqIGluZGljYXRlcyB3aGV0aGVyIHRoZSBBU00gVUkgaGFzIGJlZW4gYWRkZWQgYWxyZWFkeSAqL1xuICAgIHByaXZhdGUgaXNVaUFkZGVkO1xuICAgIGNvbnN0cnVjdG9yKGxvY2F0aW9uOiBMb2NhdGlvbiwgd2luUmVmOiBXaW5kb3dSZWYsIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBvdXRsZXRTZXJ2aWNlOiBPdXRsZXRTZXJ2aWNlPENvbXBvbmVudEZhY3Rvcnk8YW55Pj4pO1xuICAgIC8qKlxuICAgICAqIExvYWRzIHRoZSBBU00gVUkgaWYgbmVlZGVkLiBUaGUgQVNNIFVJIHdpbGwgYmUgYWRkZWQgYmFzZWQgb24gdGhlXG4gICAgICogZXhpc3RlbmNlIG9mIGEgVVJMIHBhcmFtZXRlciBvciBwcmV2aW91cyB1c2FnZSBnaXZlbiBieSBsb2NhbCBzdG9yYWdlLlxuICAgICAqL1xuICAgIGxvYWQoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgQVNNIG1vZHVsZSBpcyBlbmFibGVkLlxuICAgICAqL1xuICAgIHByaXZhdGUgaXNFbmFibGVkO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIEFTTSBpcyBsYXVuY2hlZCB0aHJvdWdoIHRoZSBVUkwsXG4gICAgICogdXNpbmcgdGhlIGFzbSBmbGFnIGluIHRoZSBVUkwuXG4gICAgICovXG4gICAgcHJpdmF0ZSBpc0xhdW5jaGVkO1xuICAgIC8qKlxuICAgICAqIEV2YWx1YXRlcyBsb2NhbCBzdG9yYWdlIHdoZXJlIHdlIHBlcnNpc3QgdGhlIHVzYWdlIG9mIEFTTS5cbiAgICAgKi9cbiAgICBwcml2YXRlIGlzVXNlZEJlZm9yZTtcbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBBU00gVUkgYnkgdXNpbmcgdGhlIGBjeC1zdG9yZWZyb250YCBvdXRsZXQuXG4gICAgICovXG4gICAgcHJpdmF0ZSBhZGRVaTtcbn1cbiJdfQ==