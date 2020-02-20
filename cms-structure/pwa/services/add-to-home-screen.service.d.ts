import { GlobalMessageService, WindowRef } from '@spartacus/core';
import { Observable } from 'rxjs';
import { PWAModuleConfig } from '../pwa.module-config';
import * as ɵngcc0 from '@angular/core';
export declare class AddToHomeScreenService {
    private config;
    private globalMessageService;
    private winRef;
    private deferredEvent;
    private canPrompt;
    canPrompt$: Observable<boolean>;
    constructor(config: PWAModuleConfig, globalMessageService: GlobalMessageService, winRef: WindowRef);
    init(): void;
    enableAddToHomeScreen(): void;
    disableAddToHomeScreen(): void;
    firePrompt(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AddToHomeScreenService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<AddToHomeScreenService>;
}

//# sourceMappingURL=add-to-home-screen.service.d.ts.map