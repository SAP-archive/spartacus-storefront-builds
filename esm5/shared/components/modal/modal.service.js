/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    ModalService.prototype.open = /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (content, options) {
        /** @type {?} */
        var activeModal;
        activeModal = this.ngbModalService.open(content, options);
        this.modals.push(activeModal);
        return activeModal;
    };
    /**
     * @return {?}
     */
    ModalService.prototype.getActiveModal = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var modal = this.modals[this.modals.length - 1];
        return modal ? modal : null;
    };
    /**
     * @param {?=} reason
     * @return {?}
     */
    ModalService.prototype.dismissActiveModal = /**
     * @param {?=} reason
     * @return {?}
     */
    function (reason) {
        /** @type {?} */
        var modal = this.getActiveModal();
        if (modal) {
            modal.dismiss(reason);
            this.modals.pop();
        }
    };
    /**
     * @param {?=} reason
     * @return {?}
     */
    ModalService.prototype.closeActiveModal = /**
     * @param {?=} reason
     * @return {?}
     */
    function (reason) {
        /** @type {?} */
        var modal = this.getActiveModal();
        if (modal) {
            modal.close(reason);
            this.modals.pop();
        }
    };
    ModalService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ModalService.ctorParameters = function () { return [
        { type: NgbModal }
    ]; };
    /** @nocollapse */ ModalService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ModalService_Factory() { return new ModalService(i0.ɵɵinject(i1.NgbModal)); }, token: ModalService, providedIn: "root" });
    return ModalService;
}());
export { ModalService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ModalService.prototype.modals;
    /**
     * @type {?}
     * @private
     */
    ModalService.prototype.ngbModalService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL21vZGFsL21vZGFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7Ozs7QUFPdEQ7SUFLRSxzQkFBb0IsZUFBeUI7UUFBekIsb0JBQWUsR0FBZixlQUFlLENBQVU7UUFEckMsV0FBTSxHQUFlLEVBQUUsQ0FBQztJQUNnQixDQUFDOzs7Ozs7SUFFakQsMkJBQUk7Ozs7O0lBQUosVUFBSyxPQUFZLEVBQUUsT0FBc0I7O1lBQ25DLFdBQXFCO1FBRXpCLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFOUIsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELHFDQUFjOzs7SUFBZDs7WUFDUSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDakQsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQseUNBQWtCOzs7O0lBQWxCLFVBQW1CLE1BQVk7O1lBQ3ZCLEtBQUssR0FBYSxJQUFJLENBQUMsY0FBYyxFQUFFO1FBRTdDLElBQUksS0FBSyxFQUFFO1lBQ1QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQzs7Ozs7SUFFRCx1Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsTUFBWTs7WUFDckIsS0FBSyxHQUFhLElBQUksQ0FBQyxjQUFjLEVBQUU7UUFFN0MsSUFBSSxLQUFLLEVBQUU7WUFDVCxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDbkI7SUFDSCxDQUFDOztnQkFyQ0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFUUSxRQUFROzs7dUJBRGpCO0NBOENDLEFBdENELElBc0NDO1NBbkNZLFlBQVk7Ozs7OztJQUN2Qiw4QkFBZ0M7Ozs7O0lBQ3BCLHVDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYk1vZGFsIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgTW9kYWxSZWYgfSBmcm9tICcuL21vZGFsLXJlZic7XG5pbXBvcnQgeyBNb2RhbE9wdGlvbnMgfSBmcm9tICcuL21vZGFsLW9wdGlvbnMnO1xuXG4vKipcbiAqIEEgc2VydmljZSB0byBoYW5kbGUgbW9kYWxcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsU2VydmljZSB7XG4gIHByaXZhdGUgbW9kYWxzOiBNb2RhbFJlZltdID0gW107XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdiTW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbCkge31cblxuICBvcGVuKGNvbnRlbnQ6IGFueSwgb3B0aW9ucz86IE1vZGFsT3B0aW9ucyk6IE1vZGFsUmVmIHtcbiAgICBsZXQgYWN0aXZlTW9kYWw6IE1vZGFsUmVmO1xuXG4gICAgYWN0aXZlTW9kYWwgPSB0aGlzLm5nYk1vZGFsU2VydmljZS5vcGVuKGNvbnRlbnQsIG9wdGlvbnMpO1xuICAgIHRoaXMubW9kYWxzLnB1c2goYWN0aXZlTW9kYWwpO1xuXG4gICAgcmV0dXJuIGFjdGl2ZU1vZGFsO1xuICB9XG5cbiAgZ2V0QWN0aXZlTW9kYWwoKTogTW9kYWxSZWYge1xuICAgIGNvbnN0IG1vZGFsID0gdGhpcy5tb2RhbHNbdGhpcy5tb2RhbHMubGVuZ3RoIC0gMV07XG4gICAgcmV0dXJuIG1vZGFsID8gbW9kYWwgOiBudWxsO1xuICB9XG5cbiAgZGlzbWlzc0FjdGl2ZU1vZGFsKHJlYXNvbj86IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IG1vZGFsOiBNb2RhbFJlZiA9IHRoaXMuZ2V0QWN0aXZlTW9kYWwoKTtcblxuICAgIGlmIChtb2RhbCkge1xuICAgICAgbW9kYWwuZGlzbWlzcyhyZWFzb24pO1xuICAgICAgdGhpcy5tb2RhbHMucG9wKCk7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VBY3RpdmVNb2RhbChyZWFzb24/OiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCBtb2RhbDogTW9kYWxSZWYgPSB0aGlzLmdldEFjdGl2ZU1vZGFsKCk7XG5cbiAgICBpZiAobW9kYWwpIHtcbiAgICAgIG1vZGFsLmNsb3NlKHJlYXNvbik7XG4gICAgICB0aGlzLm1vZGFscy5wb3AoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==