import { Injector } from '@angular/core';
import { CmsComponentsService } from '../../../services/cms-components.service';
/**
 * Used to prepare injector for CMS components.
 *
 * Injector will take into account configured providers and provides CmsComponentData
 * for specified component's uid
 */
import * as ɵngcc0 from '@angular/core';
export declare class CmsInjectorService {
    protected cmsComponentsService: CmsComponentsService;
    protected injector: Injector;
    constructor(cmsComponentsService: CmsComponentsService, injector: Injector);
    private getCmsData;
    getInjector(type: string, uid: string, parentInjector?: Injector): Injector;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CmsInjectorService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWluamVjdG9yLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiY21zLWluamVjdG9yLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FBUUE7Ozs7Ozs7QUFNQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnRzU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2Ntcy1jb21wb25lbnRzLnNlcnZpY2UnO1xuLyoqXG4gKiBVc2VkIHRvIHByZXBhcmUgaW5qZWN0b3IgZm9yIENNUyBjb21wb25lbnRzLlxuICpcbiAqIEluamVjdG9yIHdpbGwgdGFrZSBpbnRvIGFjY291bnQgY29uZmlndXJlZCBwcm92aWRlcnMgYW5kIHByb3ZpZGVzIENtc0NvbXBvbmVudERhdGFcbiAqIGZvciBzcGVjaWZpZWQgY29tcG9uZW50J3MgdWlkXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENtc0luamVjdG9yU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIGNtc0NvbXBvbmVudHNTZXJ2aWNlOiBDbXNDb21wb25lbnRzU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yO1xuICAgIGNvbnN0cnVjdG9yKGNtc0NvbXBvbmVudHNTZXJ2aWNlOiBDbXNDb21wb25lbnRzU2VydmljZSwgaW5qZWN0b3I6IEluamVjdG9yKTtcbiAgICBwcml2YXRlIGdldENtc0RhdGE7XG4gICAgZ2V0SW5qZWN0b3IodHlwZTogc3RyaW5nLCB1aWQ6IHN0cmluZywgcGFyZW50SW5qZWN0b3I/OiBJbmplY3Rvcik6IEluamVjdG9yO1xufVxuIl19