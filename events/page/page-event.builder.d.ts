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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1ldmVudC5idWlsZGVyLmQudHMiLCJzb3VyY2VzIjpbInBhZ2UtZXZlbnQuYnVpbGRlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7QUFRQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbnNTdWJqZWN0IH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRXZlbnRTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEhvbWVQYWdlRXZlbnQsIFBhZ2VFdmVudCB9IGZyb20gJy4vcGFnZS5ldmVudHMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUGFnZUV2ZW50QnVpbGRlciB7XG4gICAgcHJvdGVjdGVkIGFjdGlvbnM6IEFjdGlvbnNTdWJqZWN0O1xuICAgIHByb3RlY3RlZCBldmVudFNlcnZpY2U6IEV2ZW50U2VydmljZTtcbiAgICBjb25zdHJ1Y3RvcihhY3Rpb25zOiBBY3Rpb25zU3ViamVjdCwgZXZlbnRTZXJ2aWNlOiBFdmVudFNlcnZpY2UpO1xuICAgIHByb3RlY3RlZCByZWdpc3RlcigpOiB2b2lkO1xuICAgIHByb3RlY3RlZCBidWlsZFBhZ2VFdmVudCgpOiBPYnNlcnZhYmxlPFBhZ2VFdmVudD47XG4gICAgcHJvdGVjdGVkIGJ1aWxkSG9tZVBhZ2VFdmVudCgpOiBPYnNlcnZhYmxlPEhvbWVQYWdlRXZlbnQ+O1xuICAgIHByaXZhdGUgZ2V0TmF2aWdhdGVkRXZlbnQ7XG59XG4iXX0=