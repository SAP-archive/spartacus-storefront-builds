import { Observable } from 'rxjs';
import { SiteContextComponentService } from './site-context-component.service';
import { SiteContext } from '@spartacus/core';
export declare class SiteContextSelectorComponent {
    private componentService;
    siteContextService: SiteContext<any>;
    constructor(componentService: SiteContextComponentService);
    readonly items$: Observable<any>;
    readonly activeItem$: Observable<string>;
    active: string;
    readonly label$: Observable<any>;
}
