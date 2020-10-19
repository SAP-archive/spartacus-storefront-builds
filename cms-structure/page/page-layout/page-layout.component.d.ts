import { BehaviorSubject, Observable } from 'rxjs';
import { PageLayoutService } from './page-layout.service';
import * as ɵngcc0 from '@angular/core';
export declare class PageLayoutComponent {
    protected pageLayoutService: PageLayoutService;
    set section(value: string);
    readonly section$: BehaviorSubject<string>;
    readonly templateName$: Observable<string>;
    readonly layoutName$: Observable<string>;
    readonly slots$: Observable<string[]>;
    readonly pageFoldSlot$: Observable<string>;
    constructor(pageLayoutService: PageLayoutService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PageLayoutComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PageLayoutComponent, "cx-page-layout", never, { "section": "section"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=page-layout.component.d.ts.map