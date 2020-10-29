import { ActionsSubject } from '@ngrx/store';
import { EventService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { HomePageEvent, PageEvent } from './page.events';
import * as ɵngcc0 from '@angular/core';
export declare class PageEventBuilder {
    protected actions: ActionsSubject;
    protected eventService: EventService;
    constructor(actions: ActionsSubject, eventService: EventService);
    protected register(): void;
    protected buildPageEvent(): Observable<PageEvent>;
    protected buildHomePageEvent(): Observable<HomePageEvent>;
    private getNavigatedEvent;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PageEventBuilder, never>;
}

//# sourceMappingURL=page-event.builder.d.ts.map