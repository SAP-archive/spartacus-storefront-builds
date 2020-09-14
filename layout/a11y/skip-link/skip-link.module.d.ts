import { ComponentFactoryResolver } from '@angular/core';
import { OutletService } from '../../../cms-structure/outlet/outlet.service';
export declare class SkipLinkModule {
}
/**
 * Adds the skip link component before the cx-storefront.
 */
export declare function skipLinkFactory(componentFactoryResolver: ComponentFactoryResolver, outletService: OutletService): () => void;
