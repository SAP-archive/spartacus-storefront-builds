import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap";
/**
 * A service to handle modal
 */
let ModalService = class ModalService {
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
};
ModalService.ctorParameters = () => [
    { type: NgbModal }
];
ModalService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ModalService_Factory() { return new ModalService(i0.ɵɵinject(i1.NgbModal)); }, token: ModalService, providedIn: "root" });
ModalService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], ModalService);
export { ModalService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL21vZGFsL21vZGFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7QUFJdEQ7O0dBRUc7QUFJSCxJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0lBRXZCLFlBQW9CLGVBQXlCO1FBQXpCLG9CQUFlLEdBQWYsZUFBZSxDQUFVO1FBRHJDLFdBQU0sR0FBZSxFQUFFLENBQUM7SUFDZ0IsQ0FBQztJQUVqRCxJQUFJLENBQUMsT0FBWSxFQUFFLE9BQXNCO1FBQ3ZDLElBQUksV0FBcUIsQ0FBQztRQUUxQixXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUUxQyxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBRVMsdUJBQXVCLENBQUMsS0FBZTtRQUMvQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUU7WUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGNBQWM7UUFDWixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUM5QixDQUFDO0lBRUQsa0JBQWtCLENBQUMsTUFBWTtRQUM3QixNQUFNLEtBQUssR0FBYSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFOUMsSUFBSSxLQUFLLEVBQUU7WUFDVCxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztJQUVELGdCQUFnQixDQUFDLE1BQVk7UUFDM0IsTUFBTSxLQUFLLEdBQWEsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRTlDLElBQUksS0FBSyxFQUFFO1lBQ1QsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNyQjtJQUNILENBQUM7Q0FDRixDQUFBOztZQXRDc0MsUUFBUTs7O0FBRmxDLFlBQVk7SUFIeEIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLFlBQVksQ0F3Q3hCO1NBeENZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JNb2RhbCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IE1vZGFsT3B0aW9ucyB9IGZyb20gJy4vbW9kYWwtb3B0aW9ucyc7XG5pbXBvcnQgeyBNb2RhbFJlZiB9IGZyb20gJy4vbW9kYWwtcmVmJztcblxuLyoqXG4gKiBBIHNlcnZpY2UgdG8gaGFuZGxlIG1vZGFsXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbFNlcnZpY2Uge1xuICBwcml2YXRlIG1vZGFsczogTW9kYWxSZWZbXSA9IFtdO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nYk1vZGFsU2VydmljZTogTmdiTW9kYWwpIHt9XG5cbiAgb3Blbihjb250ZW50OiBhbnksIG9wdGlvbnM/OiBNb2RhbE9wdGlvbnMpOiBNb2RhbFJlZiB7XG4gICAgbGV0IGFjdGl2ZU1vZGFsOiBNb2RhbFJlZjtcblxuICAgIGFjdGl2ZU1vZGFsID0gdGhpcy5uZ2JNb2RhbFNlcnZpY2Uub3Blbihjb250ZW50LCBvcHRpb25zKTtcbiAgICB0aGlzLm1vZGFscy5wdXNoKGFjdGl2ZU1vZGFsKTtcbiAgICB0aGlzLmhhbmRsZU1vZGFsUmVtb3ZlRXZlbnRzKGFjdGl2ZU1vZGFsKTtcblxuICAgIHJldHVybiBhY3RpdmVNb2RhbDtcbiAgfVxuXG4gIHByb3RlY3RlZCBoYW5kbGVNb2RhbFJlbW92ZUV2ZW50cyhtb2RhbDogTW9kYWxSZWYpOiB2b2lkIHtcbiAgICBtb2RhbC5yZXN1bHQuZmluYWxseSgoKSA9PiB7XG4gICAgICB0aGlzLm1vZGFscyA9IHRoaXMubW9kYWxzLmZpbHRlcigobSkgPT4gbSAhPT0gbW9kYWwpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0QWN0aXZlTW9kYWwoKTogTW9kYWxSZWYge1xuICAgIGNvbnN0IG1vZGFsID0gdGhpcy5tb2RhbHNbdGhpcy5tb2RhbHMubGVuZ3RoIC0gMV07XG4gICAgcmV0dXJuIG1vZGFsID8gbW9kYWwgOiBudWxsO1xuICB9XG5cbiAgZGlzbWlzc0FjdGl2ZU1vZGFsKHJlYXNvbj86IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IG1vZGFsOiBNb2RhbFJlZiA9IHRoaXMuZ2V0QWN0aXZlTW9kYWwoKTtcblxuICAgIGlmIChtb2RhbCkge1xuICAgICAgbW9kYWwuZGlzbWlzcyhyZWFzb24pO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlQWN0aXZlTW9kYWwocmVhc29uPzogYW55KTogdm9pZCB7XG4gICAgY29uc3QgbW9kYWw6IE1vZGFsUmVmID0gdGhpcy5nZXRBY3RpdmVNb2RhbCgpO1xuXG4gICAgaWYgKG1vZGFsKSB7XG4gICAgICBtb2RhbC5jbG9zZShyZWFzb24pO1xuICAgIH1cbiAgfVxufVxuIl19