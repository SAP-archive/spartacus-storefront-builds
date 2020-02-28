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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLWhvbWUtc2NyZWVuLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJhZGQtdG8taG9tZS1zY3JlZW4uY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7QUFNQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFkZFRvSG9tZVNjcmVlblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hZGQtdG8taG9tZS1zY3JlZW4uc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBhYnN0cmFjdCBjbGFzcyBBZGRUb0hvbWVTY3JlZW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByb3RlY3RlZCBhZGRUb0hvbWVTY3JlZW5TZXJ2aWNlOiBBZGRUb0hvbWVTY3JlZW5TZXJ2aWNlO1xuICAgIGNhblByb21wdCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgY29uc3RydWN0b3IoYWRkVG9Ib21lU2NyZWVuU2VydmljZTogQWRkVG9Ib21lU2NyZWVuU2VydmljZSk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBwcm9tcHQoKTogdm9pZDtcbn1cbiJdfQ==