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
    isEnabled(): boolean;
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AsmEnablerService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLWVuYWJsZXIuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJhc20tZW5hYmxlci5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudEZhY3RvcnksIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE91dGxldFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL2luZGV4Jztcbi8qKlxuICogVGhlIEFzbUVuYWJsZXJTZXJ2aWNlIGlzIHVzZWQgdG8gZW5hYmxlIEFTTSBmb3IgdGhvc2Ugc2NlbmFyaW8nc1xuICogd2hlcmUgaXQncyBhY3R1YWxseSB1c2VkLiBUaGlzIHNlcnZpY2UgaXMgYWRkZWQgdG8gYXZvaWQgYW55IHBvbHV0aW9uXG4gKiBvZiB0aGUgVUkgYW5kIHJ1bnRpbWUgcGVyZm9ybWFuY2UgZm9yIHRoZSBvcmRpbmFyeSBwcm9kdWN0aW9uIHVzZXIuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEFzbUVuYWJsZXJTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgbG9jYXRpb246IExvY2F0aW9uO1xuICAgIHByb3RlY3RlZCB3aW5SZWY6IFdpbmRvd1JlZjtcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI7XG4gICAgcHJvdGVjdGVkIG91dGxldFNlcnZpY2U6IE91dGxldFNlcnZpY2U8Q29tcG9uZW50RmFjdG9yeTxhbnk+PjtcbiAgICAvKiogaW5kaWNhdGVzIHdoZXRoZXIgdGhlIEFTTSBVSSBoYXMgYmVlbiBhZGRlZCBhbHJlYWR5ICovXG4gICAgcHJpdmF0ZSBpc1VpQWRkZWQ7XG4gICAgY29uc3RydWN0b3IobG9jYXRpb246IExvY2F0aW9uLCB3aW5SZWY6IFdpbmRvd1JlZiwgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIG91dGxldFNlcnZpY2U6IE91dGxldFNlcnZpY2U8Q29tcG9uZW50RmFjdG9yeTxhbnk+Pik7XG4gICAgLyoqXG4gICAgICogTG9hZHMgdGhlIEFTTSBVSSBpZiBuZWVkZWQuIFRoZSBBU00gVUkgd2lsbCBiZSBhZGRlZCBiYXNlZCBvbiB0aGVcbiAgICAgKiBleGlzdGVuY2Ugb2YgYSBVUkwgcGFyYW1ldGVyIG9yIHByZXZpb3VzIHVzYWdlIGdpdmVuIGJ5IGxvY2FsIHN0b3JhZ2UuXG4gICAgICovXG4gICAgbG9hZCgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBBU00gbW9kdWxlIGlzIGVuYWJsZWQuXG4gICAgICovXG4gICAgaXNFbmFibGVkKCk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIgQVNNIGlzIGxhdW5jaGVkIHRocm91Z2ggdGhlIFVSTCxcbiAgICAgKiB1c2luZyB0aGUgYXNtIGZsYWcgaW4gdGhlIFVSTC5cbiAgICAgKi9cbiAgICBwcml2YXRlIGlzTGF1bmNoZWQ7XG4gICAgLyoqXG4gICAgICogRXZhbHVhdGVzIGxvY2FsIHN0b3JhZ2Ugd2hlcmUgd2UgcGVyc2lzdCB0aGUgdXNhZ2Ugb2YgQVNNLlxuICAgICAqL1xuICAgIHByaXZhdGUgaXNVc2VkQmVmb3JlO1xuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIEFTTSBVSSBieSB1c2luZyB0aGUgYGN4LXN0b3JlZnJvbnRgIG91dGxldC5cbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZFVpO1xufVxuIl19