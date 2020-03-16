import { Observable } from 'rxjs';
import { SkipLink } from '../config/skip-link.config';
import { SkipLinkService } from '../service/skip-link.service';
import * as ɵngcc0 from '@angular/core';
export declare class SkipLinkComponent {
    private skipLinkService;
    skipLinks$: Observable<SkipLink[]>;
    constructor(skipLinkService: SkipLinkService);
    scrollToTarget(skipLink: SkipLink): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SkipLinkComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SkipLinkComponent, "cx-skip-link", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpcC1saW5rLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJza2lwLWxpbmsuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7OztBQUtBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU2tpcExpbmsgfSBmcm9tICcuLi9jb25maWcvc2tpcC1saW5rLmNvbmZpZyc7XG5pbXBvcnQgeyBTa2lwTGlua1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL3NraXAtbGluay5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFNraXBMaW5rQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIHNraXBMaW5rU2VydmljZTtcbiAgICBza2lwTGlua3MkOiBPYnNlcnZhYmxlPFNraXBMaW5rW10+O1xuICAgIGNvbnN0cnVjdG9yKHNraXBMaW5rU2VydmljZTogU2tpcExpbmtTZXJ2aWNlKTtcbiAgICBzY3JvbGxUb1RhcmdldChza2lwTGluazogU2tpcExpbmspOiB2b2lkO1xufVxuIl19