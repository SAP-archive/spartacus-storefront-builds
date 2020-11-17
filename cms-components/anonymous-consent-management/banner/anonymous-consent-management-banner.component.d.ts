import { OnDestroy, ViewContainerRef } from '@angular/core';
import { AnonymousConsentsService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { AnonymousConsentLaunchDialogService } from '../anonymous-consent-launch-dialog.service';
import * as ɵngcc0 from '@angular/core';
export declare class AnonymousConsentManagementBannerComponent implements OnDestroy {
    protected anonymousConsentsService: AnonymousConsentsService;
    protected anonymousConsentLaunchDialogService: AnonymousConsentLaunchDialogService;
    protected vcr: ViewContainerRef;
    private subscriptions;
    bannerVisible$: Observable<boolean>;
    constructor(anonymousConsentsService: AnonymousConsentsService, anonymousConsentLaunchDialogService: AnonymousConsentLaunchDialogService, vcr: ViewContainerRef);
    viewDetails(): void;
    allowAll(): void;
    hideBanner(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AnonymousConsentManagementBannerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AnonymousConsentManagementBannerComponent, "cx-anonymous-consent-management-banner", never, {}, {}, never, never>;
}

//# sourceMappingURL=anonymous-consent-management-banner.component.d.ts.map