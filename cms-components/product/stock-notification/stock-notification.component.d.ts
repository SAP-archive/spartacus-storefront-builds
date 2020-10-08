import { OnInit, OnDestroy } from '@angular/core';
import { UserInterestsService, UserNotificationPreferenceService, AuthService, GlobalMessageService, TranslationService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CurrentProductService } from '../current-product.service';
import { ModalService } from '../../../shared/components/modal/modal.service';
import * as ɵngcc0 from '@angular/core';
export declare class StockNotificationComponent implements OnInit, OnDestroy {
    private authService;
    private currentProductService;
    private globalMessageService;
    private translationService;
    private interestsService;
    private modalService;
    private notificationPrefService;
    hasProductInterests$: Observable<boolean>;
    prefsEnabled$: Observable<boolean>;
    outOfStock$: Observable<boolean>;
    isRemoveInterestLoading$: Observable<boolean>;
    anonymous: boolean;
    private enabledPrefs;
    private productCode;
    private subscribeSuccess$;
    private subscriptions;
    constructor(authService: AuthService, currentProductService: CurrentProductService, globalMessageService: GlobalMessageService, translationService: TranslationService, interestsService: UserInterestsService, modalService: ModalService, notificationPrefService: UserNotificationPreferenceService);
    ngOnInit(): void;
    subscribe(): void;
    unsubscribe(): void;
    private onInterestRemovingSuccess;
    private onInterestAddingError;
    private openDialog;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StockNotificationComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<StockNotificationComponent, "cx-stock-notification", never, {}, {}, never, never>;
}

//# sourceMappingURL=stock-notification.component.d.ts.map