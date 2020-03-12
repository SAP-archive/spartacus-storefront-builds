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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpcC1saW5rLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJza2lwLWxpbmsuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7QUFZQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNraXBMaW5rIH0gZnJvbSAnLi4vY29uZmlnL3NraXAtbGluay5jb25maWcnO1xuaW1wb3J0IHsgU2tpcExpbmtTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9za2lwLWxpbmsuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTa2lwTGlua0NvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBza2lwTGlua1NlcnZpY2U7XG4gICAgc2tpcExpbmtzJDogT2JzZXJ2YWJsZTxTa2lwTGlua1tdPjtcbiAgICBjb25zdHJ1Y3Rvcihza2lwTGlua1NlcnZpY2U6IFNraXBMaW5rU2VydmljZSk7XG4gICAgc2Nyb2xsVG9UYXJnZXQoc2tpcExpbms6IFNraXBMaW5rLCBldmVudDogTW91c2VFdmVudCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogSGlkZXMgdGhlIHNraXAgbGluayBieSByZW1vdmluZyB0aGUgZm9jdXMuXG4gICAgICovXG4gICAgYmx1cihldmVudDogTW91c2VFdmVudCk6IHZvaWQ7XG4gICAgdGFiTmV4dChldmVudDogTW91c2VFdmVudCk6IHZvaWQ7XG4gICAgdGFiUHJldihldmVudDogTW91c2VFdmVudCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBpc0VsZW1lbnQ7XG59XG4iXX0=