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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLWxvYWRlci5tb2R1bGUuZC50cyIsInNvdXJjZXMiOlsiYXNtLWxvYWRlci5tb2R1bGUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFLQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBc21FbmFibGVyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYXNtLWVuYWJsZXIuc2VydmljZSc7XG4vKipcbiAqIFRoZSBBU00gbG9hZGVyIG1vZHVsZSB0YWtlcyBjYXJlIG9mIGxvYWRpbmcgdGhlIEFTTSBVSVxuICogb25seSBpbiBjYXNlIHRoZXJlJ3MgYSByZWFzb24gdG8gZG8gc28uXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEFzbUxvYWRlck1vZHVsZSB7XG59XG4vKipcbiAqXG4gKiBXZSBkbyBub3QgbGlrZSB0byBibG9jayB0aGUgVUksIHdoaWNoIGlzIHdoeSB3ZSBkZWxnYXRlIGxvYWRpbmcgb2YgQVNNXG4gKiB0byBhIHJlYWwgY29tcG9uZW50OyB0aGUgcm91dGVyIGFuZCBzdGF0ZSBhcmVuJ3QgYXZhaWxhYmxlIGluIGFuIG9wdGltaXplZFxuICogd2F5IGR1cmluZyB0aGUgQVBQX0lOSVRJQUxJWkVSLlxuICovXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBhc21GYWN0b3J5KGFzbUVuYWJsZXJTZXJ2aWNlOiBBc21FbmFibGVyU2VydmljZSk6ICgpID0+IHZvaWQ7XG4iXX0=