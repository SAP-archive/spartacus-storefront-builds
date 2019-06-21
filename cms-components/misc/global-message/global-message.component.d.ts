import { OnInit } from '@angular/core';
import { GlobalMessageEntities, GlobalMessageService, GlobalMessageType } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ICON_TYPE } from '../../../cms-components/misc/icon/index';
export declare class GlobalMessageComponent implements OnInit {
    protected globalMessageService: GlobalMessageService;
    iconTypes: typeof ICON_TYPE;
    messages$: Observable<GlobalMessageEntities>;
    messageType: typeof GlobalMessageType;
    constructor(globalMessageService: GlobalMessageService);
    ngOnInit(): void;
    clear(type: GlobalMessageType, index: number): void;
}
