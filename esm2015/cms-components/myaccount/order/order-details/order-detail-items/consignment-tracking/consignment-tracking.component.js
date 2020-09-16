import { Component, Input } from '@angular/core';
import { UserOrderService, } from '@spartacus/core';
import { ModalService, } from '../../../../../../shared/components/modal/index';
import { TrackingEventsComponent } from './tracking-events/tracking-events.component';
export class ConsignmentTrackingComponent {
    constructor(userOrderService, modalService) {
        this.userOrderService = userOrderService;
        this.modalService = modalService;
        this.consignmentStatus = [
            'SHIPPED',
            'IN_TRANSIT',
            'DELIVERY_COMPLETED',
            'DELIVERY_REJECTED',
            'DELIVERING',
        ];
    }
    ngOnInit() {
        this.consignmentTracking$ = this.userOrderService.getConsignmentTracking();
    }
    openTrackingDialog(consignment) {
        this.userOrderService.loadConsignmentTracking(this.orderCode, consignment.code);
        let modalInstance;
        this.modalRef = this.modalService.open(TrackingEventsComponent, {
            centered: true,
            size: 'lg',
        });
        modalInstance = this.modalRef.componentInstance;
        modalInstance.tracking$ = this.consignmentTracking$;
        modalInstance.shipDate = consignment.statusDate;
        modalInstance.consignmentCode = consignment.code;
    }
    ngOnDestroy() {
        this.userOrderService.clearConsignmentTracking();
    }
}
ConsignmentTrackingComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-consignment-tracking',
                template: "<ng-container *ngIf=\"consignment && consignment.status\">\n  <div *ngIf=\"consignmentStatus.includes(consignment.status)\">\n    <button\n      (click)=\"openTrackingDialog(consignment)\"\n      class=\"btn btn-action btn-track\"\n      type=\"button\"\n    >\n      {{ 'orderDetails.consignmentTracking.action' | cxTranslate }}\n    </button>\n  </div>\n</ng-container>\n"
            },] }
];
ConsignmentTrackingComponent.ctorParameters = () => [
    { type: UserOrderService },
    { type: ModalService }
];
ConsignmentTrackingComponent.propDecorators = {
    consignment: [{ type: Input }],
    orderCode: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc2lnbm1lbnQtdHJhY2tpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlsLWl0ZW1zL2NvbnNpZ25tZW50LXRyYWNraW5nL2NvbnNpZ25tZW50LXRyYWNraW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUdMLGdCQUFnQixHQUNqQixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFFTCxZQUFZLEdBQ2IsTUFBTSxpREFBaUQsQ0FBQztBQUN6RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQU10RixNQUFNLE9BQU8sNEJBQTRCO0lBZ0J2QyxZQUNVLGdCQUFrQyxFQUNsQyxZQUEwQjtRQUQxQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBakJwQyxzQkFBaUIsR0FBYTtZQUM1QixTQUFTO1lBQ1QsWUFBWTtZQUNaLG9CQUFvQjtZQUNwQixtQkFBbUI7WUFDbkIsWUFBWTtTQUNiLENBQUM7SUFZQyxDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUM3RSxDQUFDO0lBRUQsa0JBQWtCLENBQUMsV0FBd0I7UUFDekMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHVCQUF1QixDQUMzQyxJQUFJLENBQUMsU0FBUyxFQUNkLFdBQVcsQ0FBQyxJQUFJLENBQ2pCLENBQUM7UUFDRixJQUFJLGFBQWtCLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtZQUM5RCxRQUFRLEVBQUUsSUFBSTtZQUNkLElBQUksRUFBRSxJQUFJO1NBQ1gsQ0FBQyxDQUFDO1FBRUgsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUM7UUFDaEQsYUFBYSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUM7UUFDcEQsYUFBYSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDO1FBQ2hELGFBQWEsQ0FBQyxlQUFlLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQztJQUNuRCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0lBQ25ELENBQUM7OztZQWhERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsaVlBQW9EO2FBQ3JEOzs7WUFaQyxnQkFBZ0I7WUFLaEIsWUFBWTs7OzBCQWtCWCxLQUFLO3dCQUVMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29uc2lnbm1lbnQsXG4gIENvbnNpZ25tZW50VHJhY2tpbmcsXG4gIFVzZXJPcmRlclNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBNb2RhbFJlZixcbiAgTW9kYWxTZXJ2aWNlLFxufSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9tb2RhbC9pbmRleCc7XG5pbXBvcnQgeyBUcmFja2luZ0V2ZW50c0NvbXBvbmVudCB9IGZyb20gJy4vdHJhY2tpbmctZXZlbnRzL3RyYWNraW5nLWV2ZW50cy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jb25zaWdubWVudC10cmFja2luZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb25zaWdubWVudC10cmFja2luZy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbnNpZ25tZW50VHJhY2tpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGNvbnNpZ25tZW50U3RhdHVzOiBzdHJpbmdbXSA9IFtcbiAgICAnU0hJUFBFRCcsXG4gICAgJ0lOX1RSQU5TSVQnLFxuICAgICdERUxJVkVSWV9DT01QTEVURUQnLFxuICAgICdERUxJVkVSWV9SRUpFQ1RFRCcsXG4gICAgJ0RFTElWRVJJTkcnLFxuICBdO1xuICBtb2RhbFJlZjogTW9kYWxSZWY7XG5cbiAgQElucHV0KClcbiAgY29uc2lnbm1lbnQ6IENvbnNpZ25tZW50O1xuICBASW5wdXQoKVxuICBvcmRlckNvZGU6IHN0cmluZztcbiAgY29uc2lnbm1lbnRUcmFja2luZyQ6IE9ic2VydmFibGU8Q29uc2lnbm1lbnRUcmFja2luZz47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB1c2VyT3JkZXJTZXJ2aWNlOiBVc2VyT3JkZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY29uc2lnbm1lbnRUcmFja2luZyQgPSB0aGlzLnVzZXJPcmRlclNlcnZpY2UuZ2V0Q29uc2lnbm1lbnRUcmFja2luZygpO1xuICB9XG5cbiAgb3BlblRyYWNraW5nRGlhbG9nKGNvbnNpZ25tZW50OiBDb25zaWdubWVudCkge1xuICAgIHRoaXMudXNlck9yZGVyU2VydmljZS5sb2FkQ29uc2lnbm1lbnRUcmFja2luZyhcbiAgICAgIHRoaXMub3JkZXJDb2RlLFxuICAgICAgY29uc2lnbm1lbnQuY29kZVxuICAgICk7XG4gICAgbGV0IG1vZGFsSW5zdGFuY2U6IGFueTtcbiAgICB0aGlzLm1vZGFsUmVmID0gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihUcmFja2luZ0V2ZW50c0NvbXBvbmVudCwge1xuICAgICAgY2VudGVyZWQ6IHRydWUsXG4gICAgICBzaXplOiAnbGcnLFxuICAgIH0pO1xuXG4gICAgbW9kYWxJbnN0YW5jZSA9IHRoaXMubW9kYWxSZWYuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgbW9kYWxJbnN0YW5jZS50cmFja2luZyQgPSB0aGlzLmNvbnNpZ25tZW50VHJhY2tpbmckO1xuICAgIG1vZGFsSW5zdGFuY2Uuc2hpcERhdGUgPSBjb25zaWdubWVudC5zdGF0dXNEYXRlO1xuICAgIG1vZGFsSW5zdGFuY2UuY29uc2lnbm1lbnRDb2RlID0gY29uc2lnbm1lbnQuY29kZTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudXNlck9yZGVyU2VydmljZS5jbGVhckNvbnNpZ25tZW50VHJhY2tpbmcoKTtcbiAgfVxufVxuIl19