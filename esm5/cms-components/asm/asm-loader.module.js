/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { PageComponentModule } from '../../cms-structure/index';
import { AsmEnablerService } from './services/asm-enabler.service';
/**
 * The ASM loader module takes care of loading the ASM UI
 * only in case there's a reason to do so.
 */
var AsmLoaderModule = /** @class */ (function () {
    function AsmLoaderModule() {
    }
    AsmLoaderModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, PageComponentModule],
                    providers: [
                        {
                            provide: APP_INITIALIZER,
                            useFactory: asmFactory,
                            deps: [AsmEnablerService],
                            multi: true,
                        },
                    ],
                },] }
    ];
    return AsmLoaderModule;
}());
export { AsmLoaderModule };
/**
 *
 * We do not like to block the UI, which is why we delgate loading of ASM
 * to a real component; the router and state aren't available in an optimized
 * way during the APP_INITIALIZER.
 * @param {?} asmEnablerService
 * @return {?}
 */
export function asmFactory(asmEnablerService) {
    /** @type {?} */
    var isReady = (/**
     * @return {?}
     */
    function () {
        asmEnablerService.load();
    });
    return isReady;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLWxvYWRlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9hc20vYXNtLWxvYWRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7QUFNbkU7SUFBQTtJQVc4QixDQUFDOztnQkFYOUIsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxtQkFBbUIsQ0FBQztvQkFDNUMsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxlQUFlOzRCQUN4QixVQUFVLEVBQUUsVUFBVTs0QkFDdEIsSUFBSSxFQUFFLENBQUMsaUJBQWlCLENBQUM7NEJBQ3pCLEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO2lCQUNGOztJQUM2QixzQkFBQztDQUFBLEFBWC9CLElBVytCO1NBQWxCLGVBQWU7Ozs7Ozs7OztBQVE1QixNQUFNLFVBQVUsVUFBVSxDQUFDLGlCQUFvQzs7UUFDdkQsT0FBTzs7O0lBQUc7UUFDZCxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDLENBQUE7SUFDRCxPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFQUF9JTklUSUFMSVpFUiwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2VDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuLi8uLi9jbXMtc3RydWN0dXJlL2luZGV4JztcbmltcG9ydCB7IEFzbUVuYWJsZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hc20tZW5hYmxlci5zZXJ2aWNlJztcblxuLyoqXG4gKiBUaGUgQVNNIGxvYWRlciBtb2R1bGUgdGFrZXMgY2FyZSBvZiBsb2FkaW5nIHRoZSBBU00gVUlcbiAqIG9ubHkgaW4gY2FzZSB0aGVyZSdzIGEgcmVhc29uIHRvIGRvIHNvLlxuICovXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBQYWdlQ29tcG9uZW50TW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgdXNlRmFjdG9yeTogYXNtRmFjdG9yeSxcbiAgICAgIGRlcHM6IFtBc21FbmFibGVyU2VydmljZV0sXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBBc21Mb2FkZXJNb2R1bGUge31cblxuLyoqXG4gKlxuICogV2UgZG8gbm90IGxpa2UgdG8gYmxvY2sgdGhlIFVJLCB3aGljaCBpcyB3aHkgd2UgZGVsZ2F0ZSBsb2FkaW5nIG9mIEFTTVxuICogdG8gYSByZWFsIGNvbXBvbmVudDsgdGhlIHJvdXRlciBhbmQgc3RhdGUgYXJlbid0IGF2YWlsYWJsZSBpbiBhbiBvcHRpbWl6ZWRcbiAqIHdheSBkdXJpbmcgdGhlIEFQUF9JTklUSUFMSVpFUi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzbUZhY3RvcnkoYXNtRW5hYmxlclNlcnZpY2U6IEFzbUVuYWJsZXJTZXJ2aWNlKSB7XG4gIGNvbnN0IGlzUmVhZHkgPSAoKSA9PiB7XG4gICAgYXNtRW5hYmxlclNlcnZpY2UubG9hZCgpO1xuICB9O1xuICByZXR1cm4gaXNSZWFkeTtcbn1cbiJdfQ==