import { Observable } from 'rxjs';
import { SkipLink } from '../config/skip-link.config';
import { SkipLinkService } from '../service/skip-link.service';
import * as ɵngcc0 from '@angular/core';
export declare class SkipLinkComponent {
    private skipLinkService;
    skipLinks$: Observable<SkipLink[]>;
    constructor(skipLinkService: SkipLinkService);
    scrollToTarget(skipLink: SkipLink, event: MouseEvent): void;
    /**
     * Hides the skip link by removing the focus.
     */
    blur(event: MouseEvent): void;
    tabNext(event: MouseEvent): void;
    tabPrev(event: MouseEvent): void;
    private isElement;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SkipLinkComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SkipLinkComponent, "cx-skip-link", never, {}, {}, never>;
}

//# sourceMappingURL=skip-link.component.d.ts.map