import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap";
/**
 * A service to handle modal
 */
var ModalService = /** @class */ (function () {
    function ModalService(ngbModalService) {
        this.ngbModalService = ngbModalService;
        this.modals = [];
    }
    ModalService.prototype.open = function (content, options) {
        var activeModal;
        activeModal = this.ngbModalService.open(content, options);
        this.modals.push(activeModal);
        this.handleModalRemoveEvents(activeModal);
        return activeModal;
    };
    ModalService.prototype.handleModalRemoveEvents = function (modal) {
        var _this = this;
        modal.result.finally(function () {
            _this.modals = _this.modals.filter(function (m) { return m !== modal; });
        });
    };
    ModalService.prototype.getActiveModal = function () {
        var modal = this.modals[this.modals.length - 1];
        return modal ? modal : null;
    };
    ModalService.prototype.dismissActiveModal = function (reason) {
        var modal = this.getActiveModal();
        if (modal) {
            modal.dismiss(reason);
        }
    };
    ModalService.prototype.closeActiveModal = function (reason) {
        var modal = this.getActiveModal();
        if (modal) {
            modal.close(reason);
        }
    };
    ModalService.ctorParameters = function () { return [
        { type: NgbModal }
    ]; };
    ModalService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ModalService_Factory() { return new ModalService(i0.ɵɵinject(i1.NgbModal)); }, token: ModalService, providedIn: "root" });
    ModalService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], ModalService);
    return ModalService;
}());
export { ModalService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL21vZGFsL21vZGFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7QUFJdEQ7O0dBRUc7QUFJSDtJQUVFLHNCQUFvQixlQUF5QjtRQUF6QixvQkFBZSxHQUFmLGVBQWUsQ0FBVTtRQURyQyxXQUFNLEdBQWUsRUFBRSxDQUFDO0lBQ2dCLENBQUM7SUFFakQsMkJBQUksR0FBSixVQUFLLE9BQVksRUFBRSxPQUFzQjtRQUN2QyxJQUFJLFdBQXFCLENBQUM7UUFFMUIsV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsdUJBQXVCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFMUMsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUVTLDhDQUF1QixHQUFqQyxVQUFrQyxLQUFlO1FBQWpELGlCQUlDO1FBSEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDbkIsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsS0FBSyxLQUFLLEVBQVgsQ0FBVyxDQUFDLENBQUM7UUFDdkQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQscUNBQWMsR0FBZDtRQUNFLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEQsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFFRCx5Q0FBa0IsR0FBbEIsVUFBbUIsTUFBWTtRQUM3QixJQUFNLEtBQUssR0FBYSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFOUMsSUFBSSxLQUFLLEVBQUU7WUFDVCxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztJQUVELHVDQUFnQixHQUFoQixVQUFpQixNQUFZO1FBQzNCLElBQU0sS0FBSyxHQUFhLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUU5QyxJQUFJLEtBQUssRUFBRTtZQUNULEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDckI7SUFDSCxDQUFDOztnQkFyQ29DLFFBQVE7OztJQUZsQyxZQUFZO1FBSHhCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxZQUFZLENBd0N4Qjt1QkFuREQ7Q0FtREMsQUF4Q0QsSUF3Q0M7U0F4Q1ksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYk1vZGFsIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgTW9kYWxPcHRpb25zIH0gZnJvbSAnLi9tb2RhbC1vcHRpb25zJztcbmltcG9ydCB7IE1vZGFsUmVmIH0gZnJvbSAnLi9tb2RhbC1yZWYnO1xuXG4vKipcbiAqIEEgc2VydmljZSB0byBoYW5kbGUgbW9kYWxcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsU2VydmljZSB7XG4gIHByaXZhdGUgbW9kYWxzOiBNb2RhbFJlZltdID0gW107XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdiTW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbCkge31cblxuICBvcGVuKGNvbnRlbnQ6IGFueSwgb3B0aW9ucz86IE1vZGFsT3B0aW9ucyk6IE1vZGFsUmVmIHtcbiAgICBsZXQgYWN0aXZlTW9kYWw6IE1vZGFsUmVmO1xuXG4gICAgYWN0aXZlTW9kYWwgPSB0aGlzLm5nYk1vZGFsU2VydmljZS5vcGVuKGNvbnRlbnQsIG9wdGlvbnMpO1xuICAgIHRoaXMubW9kYWxzLnB1c2goYWN0aXZlTW9kYWwpO1xuICAgIHRoaXMuaGFuZGxlTW9kYWxSZW1vdmVFdmVudHMoYWN0aXZlTW9kYWwpO1xuXG4gICAgcmV0dXJuIGFjdGl2ZU1vZGFsO1xuICB9XG5cbiAgcHJvdGVjdGVkIGhhbmRsZU1vZGFsUmVtb3ZlRXZlbnRzKG1vZGFsOiBNb2RhbFJlZik6IHZvaWQge1xuICAgIG1vZGFsLnJlc3VsdC5maW5hbGx5KCgpID0+IHtcbiAgICAgIHRoaXMubW9kYWxzID0gdGhpcy5tb2RhbHMuZmlsdGVyKChtKSA9PiBtICE9PSBtb2RhbCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRBY3RpdmVNb2RhbCgpOiBNb2RhbFJlZiB7XG4gICAgY29uc3QgbW9kYWwgPSB0aGlzLm1vZGFsc1t0aGlzLm1vZGFscy5sZW5ndGggLSAxXTtcbiAgICByZXR1cm4gbW9kYWwgPyBtb2RhbCA6IG51bGw7XG4gIH1cblxuICBkaXNtaXNzQWN0aXZlTW9kYWwocmVhc29uPzogYW55KTogdm9pZCB7XG4gICAgY29uc3QgbW9kYWw6IE1vZGFsUmVmID0gdGhpcy5nZXRBY3RpdmVNb2RhbCgpO1xuXG4gICAgaWYgKG1vZGFsKSB7XG4gICAgICBtb2RhbC5kaXNtaXNzKHJlYXNvbik7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VBY3RpdmVNb2RhbChyZWFzb24/OiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCBtb2RhbDogTW9kYWxSZWYgPSB0aGlzLmdldEFjdGl2ZU1vZGFsKCk7XG5cbiAgICBpZiAobW9kYWwpIHtcbiAgICAgIG1vZGFsLmNsb3NlKHJlYXNvbik7XG4gICAgfVxuICB9XG59XG4iXX0=