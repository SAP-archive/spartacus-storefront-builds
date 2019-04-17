import { Injector } from '@angular/core';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
import { CmsSiteContextSelectorComponent, ContextServiceMap, SiteContext } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class SiteContextComponentService {
    protected componentData: CmsComponentData<CmsSiteContextSelectorComponent>;
    private contextServiceMap;
    protected injector: Injector;
    constructor(componentData: CmsComponentData<CmsSiteContextSelectorComponent>, contextServiceMap: ContextServiceMap, injector: Injector);
    readonly items$: Observable<any>;
    readonly activeItem$: Observable<string>;
    readonly label$: Observable<any>;
    active: string;
    protected readonly service$: Observable<SiteContext<any>>;
    protected readonly context$: Observable<string>;
    protected getService(context: string): SiteContext<any>;
    protected getOptionLabel(item: any, context?: string): any;
}
