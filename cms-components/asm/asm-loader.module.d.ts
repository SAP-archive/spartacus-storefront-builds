import { AsmEnablerService } from './services/asm-enabler.service';
/**
 * The ASM loader module takes care of loading the ASM UI
 * only in case there's a reason to do so.
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '../../cms-structure/page/component/page-component.module';
export declare class AsmLoaderModule {
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<AsmLoaderModule, never, [typeof ɵngcc1.CommonModule, typeof ɵngcc2.PageComponentModule], never>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<AsmLoaderModule>;
}
/**
 *
 * We do not like to block the UI, which is why we delgate loading of ASM
 * to a real component; the router and state aren't available in an optimized
 * way during the APP_INITIALIZER.
 */
export declare function asmFactory(asmEnablerService: AsmEnablerService): () => void;

//# sourceMappingURL=asm-loader.module.d.ts.map