import { PWAModuleConfig } from '../pwa.module-config';
import { GlobalMessageService, WindowRef } from '@spartacus/core';
import { Observable } from 'rxjs';
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
}
