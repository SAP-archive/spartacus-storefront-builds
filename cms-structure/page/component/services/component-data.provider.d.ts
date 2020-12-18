import { CmsService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CmsComponentsService } from '../../../services/cms-components.service';
/**
 * Provides data for `CmsComponentData`. This is used while component is injected
 * dynamically, so that the component implementation can access the data.
 *
 * The data is resolved from dynamic data (CMS api) as well as static configured data.
 */
export declare class ComponentDataProvider {
    protected componentsService: CmsComponentsService;
    protected cmsService: CmsService;
    constructor(componentsService: CmsComponentsService, cmsService: CmsService);
    /**
     * Return the component data for a component given by the `uid`.
     *
     * If the `type` is provided, static component data (if available) is
     * merged into the component data. The static data is complemented and
     * overridden with data retrieved from the cms service.
     */
    get<T>(uid: string, type?: string): Observable<T>;
}
