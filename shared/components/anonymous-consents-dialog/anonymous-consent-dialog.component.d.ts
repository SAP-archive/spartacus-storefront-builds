import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { AnonymousConsent, AnonymousConsentsConfig, AnonymousConsentsService, ConsentTemplate } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ICON_TYPE } from '../../../cms-components/misc/icon/index';
import { FocusConfig } from '../../../layout/a11y/keyboard-focus/index';
import { LaunchDialogService } from '../../../layout/launch-dialog/services/launch-dialog.service';
export declare class AnonymousConsentDialogComponent implements OnInit, OnDestroy {
    protected config: AnonymousConsentsConfig;
    protected anonymousConsentsService: AnonymousConsentsService;
    protected el: ElementRef;
    protected launchDialogService: LaunchDialogService;
    role: string;
    modal: boolean;
    private subscriptions;
    showLegalDescription: boolean;
    iconTypes: typeof ICON_TYPE;
    requiredConsents: string[];
    loading$: Observable<boolean>;
    templates$: Observable<ConsentTemplate[]>;
    consents$: Observable<AnonymousConsent[]>;
    focusConfig: FocusConfig;
    handleClick(event: UIEvent): void;
    constructor(config: AnonymousConsentsConfig, anonymousConsentsService: AnonymousConsentsService, el: ElementRef, launchDialogService: LaunchDialogService);
    ngOnInit(): void;
    close(reason?: any): void;
    rejectAll(): void;
    allowAll(): void;
    private isRequiredConsent;
    onConsentChange({ given, template, }: {
        given: boolean;
        template: ConsentTemplate;
    }): void;
    getCorrespondingConsent(template: ConsentTemplate, consents?: AnonymousConsent[]): AnonymousConsent;
    ngOnDestroy(): void;
}
