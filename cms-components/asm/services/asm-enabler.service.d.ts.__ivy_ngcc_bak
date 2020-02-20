import { Location } from '@angular/common';
import { ComponentFactory, ComponentFactoryResolver } from '@angular/core';
import { WindowRef } from '@spartacus/core';
import { OutletService } from '../../../cms-structure/index';
/**
 * The AsmEnablerService is used to enable ASM for those scenario's
 * where it's actually used. This service is added to avoid any polution
 * of the UI and runtime performance for the ordinary production user.
 */
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
}
