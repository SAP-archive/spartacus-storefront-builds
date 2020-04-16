import { Injector } from '@angular/core';
import { CmsMappingService } from '../../../services/cms-mapping.service';
/**
 * Used to prepare injector for CMS components.
 *
 * Injector will take into account configured providers and provides CmsComponentData
 * for specified component's uid
 */
import * as ɵngcc0 from '@angular/core';
export declare class CmsInjectorService {
    protected cmsMapping: CmsMappingService;
    protected injector: Injector;
    constructor(cmsMapping: CmsMappingService, injector: Injector);
    private getCmsData;
    getInjector(type: string, uid: string, parentInjector?: Injector): Injector;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CmsInjectorService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWluamVjdG9yLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiY21zLWluamVjdG9yLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FBUUE7Ozs7Ozs7QUFNQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNNYXBwaW5nU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2Ntcy1tYXBwaW5nLnNlcnZpY2UnO1xuLyoqXG4gKiBVc2VkIHRvIHByZXBhcmUgaW5qZWN0b3IgZm9yIENNUyBjb21wb25lbnRzLlxuICpcbiAqIEluamVjdG9yIHdpbGwgdGFrZSBpbnRvIGFjY291bnQgY29uZmlndXJlZCBwcm92aWRlcnMgYW5kIHByb3ZpZGVzIENtc0NvbXBvbmVudERhdGFcbiAqIGZvciBzcGVjaWZpZWQgY29tcG9uZW50J3MgdWlkXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENtc0luamVjdG9yU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIGNtc01hcHBpbmc6IENtc01hcHBpbmdTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3I7XG4gICAgY29uc3RydWN0b3IoY21zTWFwcGluZzogQ21zTWFwcGluZ1NlcnZpY2UsIGluamVjdG9yOiBJbmplY3Rvcik7XG4gICAgcHJpdmF0ZSBnZXRDbXNEYXRhO1xuICAgIGdldEluamVjdG9yKHR5cGU6IHN0cmluZywgdWlkOiBzdHJpbmcsIHBhcmVudEluamVjdG9yPzogSW5qZWN0b3IpOiBJbmplY3Rvcjtcbn1cbiJdfQ==