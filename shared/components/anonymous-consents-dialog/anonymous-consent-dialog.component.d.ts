import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { AnonymousConsent, AnonymousConsentsConfig, AnonymousConsentsService, ConsentTemplate } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ICON_TYPE } from '../../../cms-components/misc/icon/index';
import { FocusConfig } from '../../../layout/a11y/keyboard-focus/index';
import { LaunchDialogService } from '../../../layout/launch-dialog/services/launch-dialog.service';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AnonymousConsentDialogComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AnonymousConsentDialogComponent, "cx-anonymous-consent-dialog", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnQtZGlhbG9nLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJhbm9ueW1vdXMtY29uc2VudC1kaWFsb2cuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnQsIEFub255bW91c0NvbnNlbnRzQ29uZmlnLCBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UsIENvbnNlbnRUZW1wbGF0ZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2ljb24vaW5kZXgnO1xuaW1wb3J0IHsgRm9jdXNDb25maWcgfSBmcm9tICcuLi8uLi8uLi9sYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9pbmRleCc7XG5pbXBvcnQgeyBMYXVuY2hEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vbGF5b3V0L2xhdW5jaC1kaWFsb2cvc2VydmljZXMvbGF1bmNoLWRpYWxvZy5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEFub255bW91c0NvbnNlbnREaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJvdGVjdGVkIGNvbmZpZzogQW5vbnltb3VzQ29uc2VudHNDb25maWc7XG4gICAgcHJvdGVjdGVkIGFub255bW91c0NvbnNlbnRzU2VydmljZTogQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBlbDogRWxlbWVudFJlZjtcbiAgICBwcm90ZWN0ZWQgbGF1bmNoRGlhbG9nU2VydmljZTogTGF1bmNoRGlhbG9nU2VydmljZTtcbiAgICByb2xlOiBzdHJpbmc7XG4gICAgbW9kYWw6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zO1xuICAgIHNob3dMZWdhbERlc2NyaXB0aW9uOiBib29sZWFuO1xuICAgIGljb25UeXBlczogdHlwZW9mIElDT05fVFlQRTtcbiAgICByZXF1aXJlZENvbnNlbnRzOiBzdHJpbmdbXTtcbiAgICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICB0ZW1wbGF0ZXMkOiBPYnNlcnZhYmxlPENvbnNlbnRUZW1wbGF0ZVtdPjtcbiAgICBjb25zZW50cyQ6IE9ic2VydmFibGU8QW5vbnltb3VzQ29uc2VudFtdPjtcbiAgICBmb2N1c0NvbmZpZzogRm9jdXNDb25maWc7XG4gICAgaGFuZGxlQ2xpY2soZXZlbnQ6IFVJRXZlbnQpOiB2b2lkO1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogQW5vbnltb3VzQ29uc2VudHNDb25maWcsIGFub255bW91c0NvbnNlbnRzU2VydmljZTogQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLCBlbDogRWxlbWVudFJlZiwgbGF1bmNoRGlhbG9nU2VydmljZTogTGF1bmNoRGlhbG9nU2VydmljZSk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBjbG9zZShyZWFzb24/OiBhbnkpOiB2b2lkO1xuICAgIHJlamVjdEFsbCgpOiB2b2lkO1xuICAgIGFsbG93QWxsKCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBpc1JlcXVpcmVkQ29uc2VudDtcbiAgICBvbkNvbnNlbnRDaGFuZ2UoeyBnaXZlbiwgdGVtcGxhdGUsIH06IHtcbiAgICAgICAgZ2l2ZW46IGJvb2xlYW47XG4gICAgICAgIHRlbXBsYXRlOiBDb25zZW50VGVtcGxhdGU7XG4gICAgfSk6IHZvaWQ7XG4gICAgZ2V0Q29ycmVzcG9uZGluZ0NvbnNlbnQodGVtcGxhdGU6IENvbnNlbnRUZW1wbGF0ZSwgY29uc2VudHM/OiBBbm9ueW1vdXNDb25zZW50W10pOiBBbm9ueW1vdXNDb25zZW50O1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=