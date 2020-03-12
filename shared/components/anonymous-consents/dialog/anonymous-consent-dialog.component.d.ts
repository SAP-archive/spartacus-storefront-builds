import { OnDestroy, OnInit } from '@angular/core';
import { AnonymousConsent, AnonymousConsentsConfig, AnonymousConsentsService, ConsentTemplate } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ICON_TYPE } from '../../../../cms-components/misc/icon/index';
import { ModalService } from '../../modal/index';
import * as ɵngcc0 from '@angular/core';
export declare class AnonymousConsentDialogComponent implements OnInit, OnDestroy {
    private config;
    private modalService;
    private anonymousConsentsService;
    private subscriptions;
    showLegalDescription: boolean;
    iconTypes: typeof ICON_TYPE;
    requiredConsents: string[];
    loading$: Observable<boolean>;
    templates$: Observable<ConsentTemplate[]>;
    consents$: Observable<AnonymousConsent[]>;
    isLevel13: boolean;
    constructor(config: AnonymousConsentsConfig, modalService: ModalService, anonymousConsentsService: AnonymousConsentsService);
    ngOnInit(): void;
    closeModal(reason?: any): void;
    rejectAll(): void;
    allowAll(): void;
    private isRequiredConsent;
    onConsentChange({ given, template, }: {
        given: boolean;
        template: ConsentTemplate;
    }): void;
    getCorrespondingConsent(template: ConsentTemplate, consents?: AnonymousConsent[]): AnonymousConsent;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AnonymousConsentDialogComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AnonymousConsentDialogComponent, "cx-anonymous-consent-dialog", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnQtZGlhbG9nLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJhbm9ueW1vdXMtY29uc2VudC1kaWFsb2cuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50LCBBbm9ueW1vdXNDb25zZW50c0NvbmZpZywgQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLCBDb25zZW50VGVtcGxhdGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2luZGV4JztcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uL21vZGFsL2luZGV4JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEFub255bW91c0NvbnNlbnREaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBjb25maWc7XG4gICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U7XG4gICAgcHJpdmF0ZSBhbm9ueW1vdXNDb25zZW50c1NlcnZpY2U7XG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zO1xuICAgIHNob3dMZWdhbERlc2NyaXB0aW9uOiBib29sZWFuO1xuICAgIGljb25UeXBlczogdHlwZW9mIElDT05fVFlQRTtcbiAgICByZXF1aXJlZENvbnNlbnRzOiBzdHJpbmdbXTtcbiAgICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICB0ZW1wbGF0ZXMkOiBPYnNlcnZhYmxlPENvbnNlbnRUZW1wbGF0ZVtdPjtcbiAgICBjb25zZW50cyQ6IE9ic2VydmFibGU8QW5vbnltb3VzQ29uc2VudFtdPjtcbiAgICBpc0xldmVsMTM6IGJvb2xlYW47XG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBBbm9ueW1vdXNDb25zZW50c0NvbmZpZywgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsIGFub255bW91c0NvbnNlbnRzU2VydmljZTogQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIGNsb3NlTW9kYWwocmVhc29uPzogYW55KTogdm9pZDtcbiAgICByZWplY3RBbGwoKTogdm9pZDtcbiAgICBhbGxvd0FsbCgpOiB2b2lkO1xuICAgIHByaXZhdGUgaXNSZXF1aXJlZENvbnNlbnQ7XG4gICAgb25Db25zZW50Q2hhbmdlKHsgZ2l2ZW4sIHRlbXBsYXRlLCB9OiB7XG4gICAgICAgIGdpdmVuOiBib29sZWFuO1xuICAgICAgICB0ZW1wbGF0ZTogQ29uc2VudFRlbXBsYXRlO1xuICAgIH0pOiB2b2lkO1xuICAgIGdldENvcnJlc3BvbmRpbmdDb25zZW50KHRlbXBsYXRlOiBDb25zZW50VGVtcGxhdGUsIGNvbnNlbnRzPzogQW5vbnltb3VzQ29uc2VudFtdKTogQW5vbnltb3VzQ29uc2VudDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19