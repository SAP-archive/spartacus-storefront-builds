import { BehaviorSubject, Observable } from 'rxjs';
import { PageLayoutService } from './page-layout.service';
export declare class PageLayoutComponent {
    protected pageLayoutService: PageLayoutService;
    set section(value: string);
    readonly section$: BehaviorSubject<string>;
    readonly templateName$: Observable<string>;
    readonly layoutName$: Observable<string>;
    readonly slots$: Observable<string[]>;
    readonly pageFoldSlot$: Observable<string>;
    constructor(pageLayoutService: PageLayoutService);
}
