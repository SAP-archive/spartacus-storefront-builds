import { OnDestroy, ViewContainerRef } from '@angular/core';
import { AnonymousConsentsService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { AnonymousConsentLaunchDialogService } from '../anonymous-consent-launch-dialog.service';
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
}
