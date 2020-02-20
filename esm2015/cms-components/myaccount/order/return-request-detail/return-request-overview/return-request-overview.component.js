import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy, } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ReturnRequestService } from '../return-request.service';
let ReturnRequestOverviewComponent = class ReturnRequestOverviewComponent {
    constructor(returnRequestService) {
        this.returnRequestService = returnRequestService;
        this.returnRequest$ = this.returnRequestService
            .getReturnRequest()
            .pipe(tap(returnRequest => (this.rma = returnRequest.rma)));
        this.isCancelling$ = this.returnRequestService.isCancelling$;
    }
    ngOnInit() {
        this.subscription = this.returnRequestService.isCancelSuccess$.subscribe(success => {
            if (success) {
                this.returnRequestService.cancelSuccess(this.rma);
            }
        });
    }
    cancelReturn(returnRequestCode) {
        this.returnRequestService.cancelReturnRequest(returnRequestCode);
    }
    back() {
        this.returnRequestService.backToList();
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
ReturnRequestOverviewComponent.ctorParameters = () => [
    { type: ReturnRequestService }
];
ReturnRequestOverviewComponent = __decorate([
    Component({
        selector: 'cx-return-request-overview',
        template: "<ng-container *ngIf=\"returnRequest$ | async as returnRequest\">\n  <div class=\"cx-nav row\">\n    <div class=\"col-xs-12 col-md-4 col-lg-3\">\n      <button (click)=\"back()\" class=\"btn btn-block btn-action\">\n        {{ 'common.back' | cxTranslate }}\n      </button>\n    </div>\n\n    <div class=\"col-xs-12 col-md-4 col-lg-3\">\n      <button\n        *ngIf=\"returnRequest.cancellable\"\n        class=\"btn btn-block btn-primary\"\n        (click)=\"cancelReturn(returnRequest.rma)\"\n        [disabled]=\"isCancelling$ | async\"\n      >\n        {{ 'returnRequest.cancel' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n  <div class=\"cx-header row\">\n    <div class=\"cx-detail col-sm-12 col-md-4\">\n      <div class=\"cx-detail-label\">\n        {{ 'returnRequest.returnRequestId' | cxTranslate }}\n      </div>\n      <div class=\"cx-detail-value\">{{ returnRequest.rma }}</div>\n    </div>\n    <div class=\"cx-detail col-sm-12 col-md-4\">\n      <div class=\"cx-detail-label\">\n        {{ 'returnRequest.orderCode' | cxTranslate }}\n      </div>\n      <div class=\"cx-detail-value\">{{ returnRequest.order?.code }}</div>\n    </div>\n    <div class=\"cx-detail col-sm-12 col-md-4\">\n      <div class=\"cx-detail-label\">\n        {{ 'returnRequest.status' | cxTranslate }}\n      </div>\n      <div class=\"cx-detail-value\">\n        {{\n          'returnRequestList.statusDisplay'\n            | cxTranslate: { context: returnRequest.status }\n        }}\n      </div>\n    </div>\n  </div>\n</ng-container>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], ReturnRequestOverviewComponent);
export { ReturnRequestOverviewComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0dXJuLXJlcXVlc3Qtb3ZlcnZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL3JldHVybi1yZXF1ZXN0LWRldGFpbC9yZXR1cm4tcmVxdWVzdC1vdmVydmlldy9yZXR1cm4tcmVxdWVzdC1vdmVydmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsdUJBQXVCLEdBR3hCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQU9qRSxJQUFhLDhCQUE4QixHQUEzQyxNQUFhLDhCQUE4QjtJQUN6QyxZQUFzQixvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUtoRSxtQkFBYyxHQUVWLElBQUksQ0FBQyxvQkFBb0I7YUFDMUIsZ0JBQWdCLEVBQUU7YUFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTlELGtCQUFhLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQztJQVhXLENBQUM7SUFhcEUsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FDdEUsT0FBTyxDQUFDLEVBQUU7WUFDUixJQUFJLE9BQU8sRUFBRTtnQkFDWCxJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNuRDtRQUNILENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELFlBQVksQ0FBQyxpQkFBeUI7UUFDcEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNqQztJQUNILENBQUM7Q0FDRixDQUFBOztZQXBDNkMsb0JBQW9COztBQURyRCw4QkFBOEI7SUFMMUMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLDRCQUE0QjtRQUN0QyxtaERBQXVEO1FBQ3ZELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO0tBQ2hELENBQUM7R0FDVyw4QkFBOEIsQ0FxQzFDO1NBckNZLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUmV0dXJuUmVxdWVzdCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBSZXR1cm5SZXF1ZXN0U2VydmljZSB9IGZyb20gJy4uL3JldHVybi1yZXF1ZXN0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1yZXR1cm4tcmVxdWVzdC1vdmVydmlldycsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXR1cm4tcmVxdWVzdC1vdmVydmlldy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBSZXR1cm5SZXF1ZXN0T3ZlcnZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCByZXR1cm5SZXF1ZXN0U2VydmljZTogUmV0dXJuUmVxdWVzdFNlcnZpY2UpIHt9XG5cbiAgcm1hOiBzdHJpbmc7XG4gIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIHJldHVyblJlcXVlc3QkOiBPYnNlcnZhYmxlPFxuICAgIFJldHVyblJlcXVlc3RcbiAgPiA9IHRoaXMucmV0dXJuUmVxdWVzdFNlcnZpY2VcbiAgICAuZ2V0UmV0dXJuUmVxdWVzdCgpXG4gICAgLnBpcGUodGFwKHJldHVyblJlcXVlc3QgPT4gKHRoaXMucm1hID0gcmV0dXJuUmVxdWVzdC5ybWEpKSk7XG5cbiAgaXNDYW5jZWxsaW5nJCA9IHRoaXMucmV0dXJuUmVxdWVzdFNlcnZpY2UuaXNDYW5jZWxsaW5nJDtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMucmV0dXJuUmVxdWVzdFNlcnZpY2UuaXNDYW5jZWxTdWNjZXNzJC5zdWJzY3JpYmUoXG4gICAgICBzdWNjZXNzID0+IHtcbiAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICB0aGlzLnJldHVyblJlcXVlc3RTZXJ2aWNlLmNhbmNlbFN1Y2Nlc3ModGhpcy5ybWEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGNhbmNlbFJldHVybihyZXR1cm5SZXF1ZXN0Q29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5yZXR1cm5SZXF1ZXN0U2VydmljZS5jYW5jZWxSZXR1cm5SZXF1ZXN0KHJldHVyblJlcXVlc3RDb2RlKTtcbiAgfVxuXG4gIGJhY2soKTogdm9pZCB7XG4gICAgdGhpcy5yZXR1cm5SZXF1ZXN0U2VydmljZS5iYWNrVG9MaXN0KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=