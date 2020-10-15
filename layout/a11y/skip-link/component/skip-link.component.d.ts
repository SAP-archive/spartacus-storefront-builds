import { Observable } from 'rxjs';
import { SkipLink } from '../config/skip-link.config';
import { SkipLinkService } from '../service/skip-link.service';
import * as ɵngcc0 from '@angular/core';
export declare class SkipLinkComponent {
    private skipLinkService;
    skipLinks$: Observable<SkipLink[]>;
    constructor(skipLinkService: SkipLinkService);
    scrollToTarget(skipLink: SkipLink): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SkipLinkComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SkipLinkComponent, "cx-skip-link", never, {}, {}, never, never>;
}

//# sourceMappingURL=skip-link.component.d.ts.map