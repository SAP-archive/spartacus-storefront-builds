import { ActionsSubject } from '@ngrx/store';
import { EventService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { HomePageVisitedEvent, PageVisitedEvent } from './page.events';
export declare class PageEventBuilder {
    protected actions: ActionsSubject;
    protected eventService: EventService;
    constructor(actions: ActionsSubject, eventService: EventService);
    protected register(): void;
    protected buildPageVisitedEvent(): Observable<PageVisitedEvent>;
    protected buildHomePageVisitedEvent(): Observable<HomePageVisitedEvent>;
    private getNavigatedEvent;
}
