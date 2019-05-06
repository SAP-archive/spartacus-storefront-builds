import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalMessageService, GlobalMessageType, GlobalMessageEntities } from '@spartacus/core';
export declare class GlobalMessageComponent implements OnInit {
    protected globalMessageService: GlobalMessageService;
    messages$: Observable<GlobalMessageEntities>;
    messageType: typeof GlobalMessageType;
    constructor(globalMessageService: GlobalMessageService);
    ngOnInit(): void;
    clear(type: GlobalMessageType, index: number): void;
}
