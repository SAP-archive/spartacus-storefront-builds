import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AddToHomeScreenService } from '../services/add-to-home-screen.service';
import * as ɵngcc0 from '@angular/core';
export declare abstract class AddToHomeScreenComponent implements OnInit {
    protected addToHomeScreenService: AddToHomeScreenService;
    canPrompt$: Observable<boolean>;
    constructor(addToHomeScreenService: AddToHomeScreenService);
    ngOnInit(): void;
    prompt(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AddToHomeScreenComponent>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<AddToHomeScreenComponent, never, never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLWhvbWUtc2NyZWVuLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJhZGQtdG8taG9tZS1zY3JlZW4uY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7QUFNQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWRkVG9Ib21lU2NyZWVuU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2FkZC10by1ob21lLXNjcmVlbi5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGFic3RyYWN0IGNsYXNzIEFkZFRvSG9tZVNjcmVlbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJvdGVjdGVkIGFkZFRvSG9tZVNjcmVlblNlcnZpY2U6IEFkZFRvSG9tZVNjcmVlblNlcnZpY2U7XG4gICAgY2FuUHJvbXB0JDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBjb25zdHJ1Y3RvcihhZGRUb0hvbWVTY3JlZW5TZXJ2aWNlOiBBZGRUb0hvbWVTY3JlZW5TZXJ2aWNlKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIHByb21wdCgpOiB2b2lkO1xufVxuIl19