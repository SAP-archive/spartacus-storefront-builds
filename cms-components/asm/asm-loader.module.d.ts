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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLWxvYWRlci5tb2R1bGUuZC50cyIsInNvdXJjZXMiOlsiYXNtLWxvYWRlci5tb2R1bGUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFLQTs7O0FBQ0E7Ozs7Ozs7OyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFzbUVuYWJsZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hc20tZW5hYmxlci5zZXJ2aWNlJztcbi8qKlxuICogVGhlIEFTTSBsb2FkZXIgbW9kdWxlIHRha2VzIGNhcmUgb2YgbG9hZGluZyB0aGUgQVNNIFVJXG4gKiBvbmx5IGluIGNhc2UgdGhlcmUncyBhIHJlYXNvbiB0byBkbyBzby5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQXNtTG9hZGVyTW9kdWxlIHtcbn1cbi8qKlxuICpcbiAqIFdlIGRvIG5vdCBsaWtlIHRvIGJsb2NrIHRoZSBVSSwgd2hpY2ggaXMgd2h5IHdlIGRlbGdhdGUgbG9hZGluZyBvZiBBU01cbiAqIHRvIGEgcmVhbCBjb21wb25lbnQ7IHRoZSByb3V0ZXIgYW5kIHN0YXRlIGFyZW4ndCBhdmFpbGFibGUgaW4gYW4gb3B0aW1pemVkXG4gKiB3YXkgZHVyaW5nIHRoZSBBUFBfSU5JVElBTElaRVIuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGFzbUZhY3RvcnkoYXNtRW5hYmxlclNlcnZpY2U6IEFzbUVuYWJsZXJTZXJ2aWNlKTogKCkgPT4gdm9pZDtcbiJdfQ==