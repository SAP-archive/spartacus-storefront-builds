import { OnInit } from '@angular/core';
import { GlobalMessageEntities, GlobalMessageService, GlobalMessageType } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ICON_TYPE } from '../../../cms-components/misc/icon/icon.model';
import * as ɵngcc0 from '@angular/core';
export declare class GlobalMessageComponent implements OnInit {
    protected globalMessageService: GlobalMessageService;
    iconTypes: typeof ICON_TYPE;
    messages$: Observable<GlobalMessageEntities>;
    messageType: typeof GlobalMessageType;
    constructor(globalMessageService: GlobalMessageService);
    ngOnInit(): void;
    clear(type: GlobalMessageType, index: number): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GlobalMessageComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<GlobalMessageComponent, "cx-global-message", never, {}, {}, never, never>;
}

//# sourceMappingURL=global-message.component.d.ts.map