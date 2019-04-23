import { SiteContext } from '@spartacus/core';
import { Observable } from 'rxjs';
import { SiteContextComponentService } from './site-context-component.service';
import { SiteContextType } from './site-context.model';
export declare class SiteContextSelectorComponent {
    private componentService;
    siteContextService: SiteContext<any>;
    /**
     * the context type can be set as an input. If the context is
     * not given, the context will be loaded from the backend.
     */
    context: SiteContextType;
    constructor(componentService: SiteContextComponentService);
    readonly items$: Observable<any>;
    readonly activeItem$: Observable<string>;
    active: string;
    readonly label$: Observable<any>;
}
