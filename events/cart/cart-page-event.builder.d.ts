import { ActionsSubject } from '@ngrx/store';
import { EventService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CartPageEvent } from './cart-page.events';
import * as ɵngcc0 from '@angular/core';
export declare class CartPageEventBuilder {
    protected actions: ActionsSubject;
    protected eventService: EventService;
    constructor(actions: ActionsSubject, eventService: EventService);
    protected register(): void;
    protected buildCartPageEvent(): Observable<CartPageEvent>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CartPageEventBuilder, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYWdlLWV2ZW50LmJ1aWxkZXIuZC50cyIsInNvdXJjZXMiOlsiY2FydC1wYWdlLWV2ZW50LmJ1aWxkZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7OztBQU1BIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uc1N1YmplY3QgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBFdmVudFNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2FydFBhZ2VFdmVudCB9IGZyb20gJy4vY2FydC1wYWdlLmV2ZW50cyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDYXJ0UGFnZUV2ZW50QnVpbGRlciB7XG4gICAgcHJvdGVjdGVkIGFjdGlvbnM6IEFjdGlvbnNTdWJqZWN0O1xuICAgIHByb3RlY3RlZCBldmVudFNlcnZpY2U6IEV2ZW50U2VydmljZTtcbiAgICBjb25zdHJ1Y3RvcihhY3Rpb25zOiBBY3Rpb25zU3ViamVjdCwgZXZlbnRTZXJ2aWNlOiBFdmVudFNlcnZpY2UpO1xuICAgIHByb3RlY3RlZCByZWdpc3RlcigpOiB2b2lkO1xuICAgIHByb3RlY3RlZCBidWlsZENhcnRQYWdlRXZlbnQoKTogT2JzZXJ2YWJsZTxDYXJ0UGFnZUV2ZW50Pjtcbn1cbiJdfQ==