import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalMessageService, GlobalMessageType, GlobalMessageEntities } from '@spartacus/core';
import { ICON_TYPES } from '../../../cms-components/misc/icon/index';
export declare class GlobalMessageComponent implements OnInit {
    protected globalMessageService: GlobalMessageService;
    iconTypes: typeof ICON_TYPES;
    messages$: Observable<GlobalMessageEntities>;
    messageType: typeof GlobalMessageType;
    constructor(globalMessageService: GlobalMessageService);
    ngOnInit(): void;
    clear(type: GlobalMessageType, index: number): void;
}
