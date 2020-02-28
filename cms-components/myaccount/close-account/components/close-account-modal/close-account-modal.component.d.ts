import { OnDestroy, OnInit } from '@angular/core';
import { AuthService, GlobalMessageService, RoutingService, TranslationService, UserService, UserToken } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ICON_TYPE } from '../../../../../cms-components/misc/icon/icon.model';
import { ModalService } from '../../../../../shared/components/modal/modal.service';
import * as ɵngcc0 from '@angular/core';
export declare class CloseAccountModalComponent implements OnInit, OnDestroy {
    protected modalService: ModalService;
    private userService;
    private authService;
    private globalMessageService;
    private routingService;
    private translationService;
    iconTypes: typeof ICON_TYPE;
    private subscription;
    userToken$: Observable<UserToken>;
    isLoading$: Observable<boolean>;
    constructor(modalService: ModalService, userService: UserService, authService: AuthService, globalMessageService: GlobalMessageService, routingService: RoutingService, translationService: TranslationService);
    ngOnInit(): void;
    onSuccess(success: boolean): void;
    onError(error: boolean): void;
    dismissModal(reason?: any): void;
    closeAccount(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CloseAccountModalComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CloseAccountModalComponent, "cx-close-account-modal", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvc2UtYWNjb3VudC1tb2RhbC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiY2xvc2UtYWNjb3VudC1tb2RhbC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSwgR2xvYmFsTWVzc2FnZVNlcnZpY2UsIFJvdXRpbmdTZXJ2aWNlLCBUcmFuc2xhdGlvblNlcnZpY2UsIFVzZXJTZXJ2aWNlLCBVc2VyVG9rZW4gfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2ljb24ubW9kZWwnO1xuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDbG9zZUFjY291bnRNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcm90ZWN0ZWQgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2U7XG4gICAgcHJpdmF0ZSB1c2VyU2VydmljZTtcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlO1xuICAgIHByaXZhdGUgZ2xvYmFsTWVzc2FnZVNlcnZpY2U7XG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTtcbiAgICBwcml2YXRlIHRyYW5zbGF0aW9uU2VydmljZTtcbiAgICBpY29uVHlwZXM6IHR5cGVvZiBJQ09OX1RZUEU7XG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb247XG4gICAgdXNlclRva2VuJDogT2JzZXJ2YWJsZTxVc2VyVG9rZW4+O1xuICAgIGlzTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgY29uc3RydWN0b3IobW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSwgdHJhbnNsYXRpb25TZXJ2aWNlOiBUcmFuc2xhdGlvblNlcnZpY2UpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgb25TdWNjZXNzKHN1Y2Nlc3M6IGJvb2xlYW4pOiB2b2lkO1xuICAgIG9uRXJyb3IoZXJyb3I6IGJvb2xlYW4pOiB2b2lkO1xuICAgIGRpc21pc3NNb2RhbChyZWFzb24/OiBhbnkpOiB2b2lkO1xuICAgIGNsb3NlQWNjb3VudCgpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=