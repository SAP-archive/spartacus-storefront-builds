import { Observable } from 'rxjs';
import { SkipLink } from '../config/skip-link.config';
import { SkipLinkService } from '../service/skip-link.service';
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
}
