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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2UuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImdsb2JhbC1tZXNzYWdlLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7O0FBUUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VFbnRpdGllcywgR2xvYmFsTWVzc2FnZVNlcnZpY2UsIEdsb2JhbE1lc3NhZ2VUeXBlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaWNvbi9pY29uLm1vZGVsJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEdsb2JhbE1lc3NhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByb3RlY3RlZCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2U7XG4gICAgaWNvblR5cGVzOiB0eXBlb2YgSUNPTl9UWVBFO1xuICAgIG1lc3NhZ2VzJDogT2JzZXJ2YWJsZTxHbG9iYWxNZXNzYWdlRW50aXRpZXM+O1xuICAgIG1lc3NhZ2VUeXBlOiB0eXBlb2YgR2xvYmFsTWVzc2FnZVR5cGU7XG4gICAgY29uc3RydWN0b3IoZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIGNsZWFyKHR5cGU6IEdsb2JhbE1lc3NhZ2VUeXBlLCBpbmRleDogbnVtYmVyKTogdm9pZDtcbn1cbiJdfQ==