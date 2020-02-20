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
        return activeModal;
    }
    getActiveModal() {
        const modal = this.modals[this.modals.length - 1];
        return modal ? modal : null;
    }
    dismissActiveModal(reason) {
        const modal = this.getActiveModal();
        if (modal) {
            modal.dismiss(reason);
            this.modals.pop();
        }
    }
    closeActiveModal(reason) {
        const modal = this.getActiveModal();
        if (modal) {
            modal.close(reason);
            this.modals.pop();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL21vZGFsL21vZGFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7QUFJdEQ7O0dBRUc7QUFJSCxJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0lBRXZCLFlBQW9CLGVBQXlCO1FBQXpCLG9CQUFlLEdBQWYsZUFBZSxDQUFVO1FBRHJDLFdBQU0sR0FBZSxFQUFFLENBQUM7SUFDZ0IsQ0FBQztJQUVqRCxJQUFJLENBQUMsT0FBWSxFQUFFLE9BQXNCO1FBQ3ZDLElBQUksV0FBcUIsQ0FBQztRQUUxQixXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRTlCLE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxjQUFjO1FBQ1osTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsRCxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQUVELGtCQUFrQixDQUFDLE1BQVk7UUFDN0IsTUFBTSxLQUFLLEdBQWEsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRTlDLElBQUksS0FBSyxFQUFFO1lBQ1QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQztJQUVELGdCQUFnQixDQUFDLE1BQVk7UUFDM0IsTUFBTSxLQUFLLEdBQWEsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRTlDLElBQUksS0FBSyxFQUFFO1lBQ1QsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQztDQUNGLENBQUE7O1lBakNzQyxRQUFROzs7QUFGbEMsWUFBWTtJQUh4QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csWUFBWSxDQW1DeEI7U0FuQ1ksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYk1vZGFsIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgTW9kYWxSZWYgfSBmcm9tICcuL21vZGFsLXJlZic7XG5pbXBvcnQgeyBNb2RhbE9wdGlvbnMgfSBmcm9tICcuL21vZGFsLW9wdGlvbnMnO1xuXG4vKipcbiAqIEEgc2VydmljZSB0byBoYW5kbGUgbW9kYWxcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsU2VydmljZSB7XG4gIHByaXZhdGUgbW9kYWxzOiBNb2RhbFJlZltdID0gW107XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdiTW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbCkge31cblxuICBvcGVuKGNvbnRlbnQ6IGFueSwgb3B0aW9ucz86IE1vZGFsT3B0aW9ucyk6IE1vZGFsUmVmIHtcbiAgICBsZXQgYWN0aXZlTW9kYWw6IE1vZGFsUmVmO1xuXG4gICAgYWN0aXZlTW9kYWwgPSB0aGlzLm5nYk1vZGFsU2VydmljZS5vcGVuKGNvbnRlbnQsIG9wdGlvbnMpO1xuICAgIHRoaXMubW9kYWxzLnB1c2goYWN0aXZlTW9kYWwpO1xuXG4gICAgcmV0dXJuIGFjdGl2ZU1vZGFsO1xuICB9XG5cbiAgZ2V0QWN0aXZlTW9kYWwoKTogTW9kYWxSZWYge1xuICAgIGNvbnN0IG1vZGFsID0gdGhpcy5tb2RhbHNbdGhpcy5tb2RhbHMubGVuZ3RoIC0gMV07XG4gICAgcmV0dXJuIG1vZGFsID8gbW9kYWwgOiBudWxsO1xuICB9XG5cbiAgZGlzbWlzc0FjdGl2ZU1vZGFsKHJlYXNvbj86IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IG1vZGFsOiBNb2RhbFJlZiA9IHRoaXMuZ2V0QWN0aXZlTW9kYWwoKTtcblxuICAgIGlmIChtb2RhbCkge1xuICAgICAgbW9kYWwuZGlzbWlzcyhyZWFzb24pO1xuICAgICAgdGhpcy5tb2RhbHMucG9wKCk7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VBY3RpdmVNb2RhbChyZWFzb24/OiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCBtb2RhbDogTW9kYWxSZWYgPSB0aGlzLmdldEFjdGl2ZU1vZGFsKCk7XG5cbiAgICBpZiAobW9kYWwpIHtcbiAgICAgIG1vZGFsLmNsb3NlKHJlYXNvbik7XG4gICAgICB0aGlzLm1vZGFscy5wb3AoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==