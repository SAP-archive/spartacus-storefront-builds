import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap";
/**
 * A service to handle modal
 */
export class ModalService {
    constructor(ngbModalService) {
        this.ngbModalService = ngbModalService;
        this.modals = [];
    }
    open(content, options) {
        let activeModal;
        activeModal = this.ngbModalService.open(content, options);
        this.modals.push(activeModal);
        this.handleModalRemoveEvents(activeModal);
        return activeModal;
    }
    handleModalRemoveEvents(modal) {
        modal.result.finally(() => {
            this.modals = this.modals.filter((m) => m !== modal);
        });
    }
    getActiveModal() {
        const modal = this.modals[this.modals.length - 1];
        return modal ? modal : null;
    }
    dismissActiveModal(reason) {
        const modal = this.getActiveModal();
        if (modal) {
            modal.dismiss(reason);
        }
    }
    closeActiveModal(reason) {
        const modal = this.getActiveModal();
        if (modal) {
            modal.close(reason);
        }
    }
}
ModalService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ModalService_Factory() { return new ModalService(i0.ɵɵinject(i1.NgbModal)); }, token: ModalService, providedIn: "root" });
ModalService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
ModalService.ctorParameters = () => [
    { type: NgbModal }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL21vZGFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7OztBQUl0RDs7R0FFRztBQUlILE1BQU0sT0FBTyxZQUFZO0lBRXZCLFlBQW9CLGVBQXlCO1FBQXpCLG9CQUFlLEdBQWYsZUFBZSxDQUFVO1FBRHJDLFdBQU0sR0FBZSxFQUFFLENBQUM7SUFDZ0IsQ0FBQztJQUVqRCxJQUFJLENBQUMsT0FBWSxFQUFFLE9BQXNCO1FBQ3ZDLElBQUksV0FBcUIsQ0FBQztRQUUxQixXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUUxQyxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBRVMsdUJBQXVCLENBQUMsS0FBZTtRQUMvQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUU7WUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGNBQWM7UUFDWixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUM5QixDQUFDO0lBRUQsa0JBQWtCLENBQUMsTUFBWTtRQUM3QixNQUFNLEtBQUssR0FBYSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFOUMsSUFBSSxLQUFLLEVBQUU7WUFDVCxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztJQUVELGdCQUFnQixDQUFDLE1BQVk7UUFDM0IsTUFBTSxLQUFLLEdBQWEsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRTlDLElBQUksS0FBSyxFQUFFO1lBQ1QsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNyQjtJQUNILENBQUM7Ozs7WUExQ0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFUUSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBNb2RhbE9wdGlvbnMgfSBmcm9tICcuL21vZGFsLW9wdGlvbnMnO1xuaW1wb3J0IHsgTW9kYWxSZWYgfSBmcm9tICcuL21vZGFsLXJlZic7XG5cbi8qKlxuICogQSBzZXJ2aWNlIHRvIGhhbmRsZSBtb2RhbFxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBtb2RhbHM6IE1vZGFsUmVmW10gPSBbXTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ2JNb2RhbFNlcnZpY2U6IE5nYk1vZGFsKSB7fVxuXG4gIG9wZW4oY29udGVudDogYW55LCBvcHRpb25zPzogTW9kYWxPcHRpb25zKTogTW9kYWxSZWYge1xuICAgIGxldCBhY3RpdmVNb2RhbDogTW9kYWxSZWY7XG5cbiAgICBhY3RpdmVNb2RhbCA9IHRoaXMubmdiTW9kYWxTZXJ2aWNlLm9wZW4oY29udGVudCwgb3B0aW9ucyk7XG4gICAgdGhpcy5tb2RhbHMucHVzaChhY3RpdmVNb2RhbCk7XG4gICAgdGhpcy5oYW5kbGVNb2RhbFJlbW92ZUV2ZW50cyhhY3RpdmVNb2RhbCk7XG5cbiAgICByZXR1cm4gYWN0aXZlTW9kYWw7XG4gIH1cblxuICBwcm90ZWN0ZWQgaGFuZGxlTW9kYWxSZW1vdmVFdmVudHMobW9kYWw6IE1vZGFsUmVmKTogdm9pZCB7XG4gICAgbW9kYWwucmVzdWx0LmZpbmFsbHkoKCkgPT4ge1xuICAgICAgdGhpcy5tb2RhbHMgPSB0aGlzLm1vZGFscy5maWx0ZXIoKG0pID0+IG0gIT09IG1vZGFsKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldEFjdGl2ZU1vZGFsKCk6IE1vZGFsUmVmIHtcbiAgICBjb25zdCBtb2RhbCA9IHRoaXMubW9kYWxzW3RoaXMubW9kYWxzLmxlbmd0aCAtIDFdO1xuICAgIHJldHVybiBtb2RhbCA/IG1vZGFsIDogbnVsbDtcbiAgfVxuXG4gIGRpc21pc3NBY3RpdmVNb2RhbChyZWFzb24/OiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCBtb2RhbDogTW9kYWxSZWYgPSB0aGlzLmdldEFjdGl2ZU1vZGFsKCk7XG5cbiAgICBpZiAobW9kYWwpIHtcbiAgICAgIG1vZGFsLmRpc21pc3MocmVhc29uKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZUFjdGl2ZU1vZGFsKHJlYXNvbj86IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IG1vZGFsOiBNb2RhbFJlZiA9IHRoaXMuZ2V0QWN0aXZlTW9kYWwoKTtcblxuICAgIGlmIChtb2RhbCkge1xuICAgICAgbW9kYWwuY2xvc2UocmVhc29uKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==