import { GlobalMessageService, WindowRef } from '@spartacus/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PWAModuleConfig } from '../pwa.module-config';
export declare class AddToHomeScreenService {
    protected config: PWAModuleConfig;
    protected globalMessageService: GlobalMessageService;
    protected winRef: WindowRef;
    protected deferredEvent: any;
    protected canPrompt: BehaviorSubject<boolean>;
    canPrompt$: Observable<boolean>;
    constructor(config: PWAModuleConfig, globalMessageService: GlobalMessageService, winRef: WindowRef);
    init(): void;
    enableAddToHomeScreen(): void;
    disableAddToHomeScreen(): void;
    firePrompt(): void;
}
