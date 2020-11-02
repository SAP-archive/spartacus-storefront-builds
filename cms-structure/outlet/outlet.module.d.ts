import { ComponentFactory, ComponentFactoryResolver, ModuleWithProviders, Type } from '@angular/core';
import { ProvideOutletOptions } from './outlet.providers';
import { OutletService } from './outlet.service';
/**
 * @private
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './outlet.directive';
import * as ɵngcc2 from '@angular/common';
export declare function registerOutletsFactory(providedOutletOptions: ProvideOutletOptions[], componentFactoryResolver: ComponentFactoryResolver, outletService: OutletService<ComponentFactory<Type<any>>>): () => void;
export declare class OutletModule {
    static forRoot(): ModuleWithProviders<OutletModule>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<OutletModule, [typeof ɵngcc1.OutletDirective], [typeof ɵngcc2.CommonModule], [typeof ɵngcc1.OutletDirective]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<OutletModule>;
}

//# sourceMappingURL=outlet.module.d.ts.map