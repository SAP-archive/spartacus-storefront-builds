import { PageContext } from '@spartacus/core';
export declare abstract class CmsRoutesService {
    abstract handleCmsRoutesInGuard(pageContext: PageContext, componentTypes: string[], currentUrl: string, currentPageLabel: string): boolean;
}
