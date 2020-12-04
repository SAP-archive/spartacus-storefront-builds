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

//# sourceMappingURL=cart-page-event.builder.d.ts.map