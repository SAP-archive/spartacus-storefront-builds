import { OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ReturnRequest } from '@spartacus/core';
import { ReturnRequestService } from '../return-request.service';
import * as ɵngcc0 from '@angular/core';
export declare class ReturnRequestOverviewComponent implements OnInit, OnDestroy {
    protected returnRequestService: ReturnRequestService;
    constructor(returnRequestService: ReturnRequestService);
    rma: string;
    subscription: Subscription;
    returnRequest$: Observable<ReturnRequest>;
    isCancelling$: Observable<boolean>;
    ngOnInit(): void;
    cancelReturn(returnRequestCode: string): void;
    back(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ReturnRequestOverviewComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ReturnRequestOverviewComponent, "cx-return-request-overview", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0dXJuLXJlcXVlc3Qtb3ZlcnZpZXcuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInJldHVybi1yZXF1ZXN0LW92ZXJ2aWV3LmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7O0FBV0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBSZXR1cm5SZXF1ZXN0IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFJldHVyblJlcXVlc3RTZXJ2aWNlIH0gZnJvbSAnLi4vcmV0dXJuLXJlcXVlc3Quc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBSZXR1cm5SZXF1ZXN0T3ZlcnZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJvdGVjdGVkIHJldHVyblJlcXVlc3RTZXJ2aWNlOiBSZXR1cm5SZXF1ZXN0U2VydmljZTtcbiAgICBjb25zdHJ1Y3RvcihyZXR1cm5SZXF1ZXN0U2VydmljZTogUmV0dXJuUmVxdWVzdFNlcnZpY2UpO1xuICAgIHJtYTogc3RyaW5nO1xuICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAgIHJldHVyblJlcXVlc3QkOiBPYnNlcnZhYmxlPFJldHVyblJlcXVlc3Q+O1xuICAgIGlzQ2FuY2VsbGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBjYW5jZWxSZXR1cm4ocmV0dXJuUmVxdWVzdENvZGU6IHN0cmluZyk6IHZvaWQ7XG4gICAgYmFjaygpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=