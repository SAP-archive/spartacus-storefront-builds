import { OnDestroy, OnInit } from '@angular/core';
import { AnonymousConsentsService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ModalService } from '../../../shared/components/modal/index';
export declare class AnonymousConsentManagementBannerComponent implements OnInit, OnDestroy {
    private modalService;
    private anonymousConsentsService;
    private subscriptions;
    anonymousConsentsFeature: string;
    bannerVisible$: Observable<boolean>;
    templatesUpdated$: Observable<boolean>;
    constructor(modalService: ModalService, anonymousConsentsService: AnonymousConsentsService);
    ngOnInit(): void;
    viewDetails(): void;
    allowAll(): void;
    hideBanner(): void;
    ngOnDestroy(): void;
}
