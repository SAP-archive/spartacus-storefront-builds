import { OnDestroy, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService, GlobalMessageService, RoutingService, TranslationService, UserService, UserToken } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ICON_TYPE } from '../../../../../cms-components/misc/icon/index';
export declare class CloseAccountModalComponent implements OnInit, OnDestroy {
    private activeModal;
    private userService;
    private authService;
    private globalMessageService;
    private routingService;
    private translationService;
    iconTypes: typeof ICON_TYPE;
    private subscription;
    userToken$: Observable<UserToken>;
    isLoading$: Observable<boolean>;
    constructor(activeModal: NgbActiveModal, userService: UserService, authService: AuthService, globalMessageService: GlobalMessageService, routingService: RoutingService, translationService: TranslationService);
    ngOnInit(): void;
    onSuccess(success: boolean): void;
    closeModal(): void;
    closeAccount(userId: string): void;
    ngOnDestroy(): void;
}
