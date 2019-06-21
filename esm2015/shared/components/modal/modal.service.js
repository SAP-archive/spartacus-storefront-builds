/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap";
/**
 * A service to handle modal
 */
export class ModalService {
    /**
     * @param {?} ngbModalService
     */
    constructor(ngbModalService) {
        this.ngbModalService = ngbModalService;
        this.modals = [];
    }
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    open(content, options) {
        /** @type {?} */
        let activeModal;
        activeModal = this.ngbModalService.open(content, options);
        this.modals.push(activeModal);
        return activeModal;
    }
    /**
     * @return {?}
     */
    getActiveModal() {
        /** @type {?} */
        const modal = this.modals[this.modals.length - 1];
        return modal ? modal : null;
    }
    /**
     * @param {?=} reason
     * @return {?}
     */
    dismissActiveModal(reason) {
        /** @type {?} */
        const modal = this.getActiveModal();
        if (modal) {
            modal.dismiss(reason);
            this.modals.pop();
        }
    }
    /**
     * @param {?=} reason
     * @return {?}
     */
    closeActiveModal(reason) {
        /** @type {?} */
        const modal = this.getActiveModal();
        if (modal) {
            modal.close(reason);
            this.modals.pop();
        }
    }
}
ModalService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ModalService.ctorParameters = () => [
    { type: NgbModal }
];
/** @nocollapse */ ModalService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ModalService_Factory() { return new ModalService(i0.ɵɵinject(i1.NgbModal)); }, token: ModalService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL21vZGFsL21vZGFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7Ozs7QUFVdEQsTUFBTSxPQUFPLFlBQVk7Ozs7SUFFdkIsWUFBb0IsZUFBeUI7UUFBekIsb0JBQWUsR0FBZixlQUFlLENBQVU7UUFEckMsV0FBTSxHQUFlLEVBQUUsQ0FBQztJQUNnQixDQUFDOzs7Ozs7SUFFakQsSUFBSSxDQUFDLE9BQVksRUFBRSxPQUFzQjs7WUFDbkMsV0FBcUI7UUFFekIsV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUU5QixPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsY0FBYzs7Y0FDTixLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDakQsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsa0JBQWtCLENBQUMsTUFBWTs7Y0FDdkIsS0FBSyxHQUFhLElBQUksQ0FBQyxjQUFjLEVBQUU7UUFFN0MsSUFBSSxLQUFLLEVBQUU7WUFDVCxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDbkI7SUFDSCxDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLE1BQVk7O2NBQ3JCLEtBQUssR0FBYSxJQUFJLENBQUMsY0FBYyxFQUFFO1FBRTdDLElBQUksS0FBSyxFQUFFO1lBQ1QsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQzs7O1lBckNGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVRRLFFBQVE7Ozs7Ozs7O0lBV2YsOEJBQWdDOzs7OztJQUNwQix1Q0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JNb2RhbCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IE1vZGFsUmVmIH0gZnJvbSAnLi9tb2RhbC1yZWYnO1xuaW1wb3J0IHsgTW9kYWxPcHRpb25zIH0gZnJvbSAnLi9tb2RhbC1vcHRpb25zJztcblxuLyoqXG4gKiBBIHNlcnZpY2UgdG8gaGFuZGxlIG1vZGFsXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBNb2RhbFNlcnZpY2Uge1xuICBwcml2YXRlIG1vZGFsczogTW9kYWxSZWZbXSA9IFtdO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nYk1vZGFsU2VydmljZTogTmdiTW9kYWwpIHt9XG5cbiAgb3Blbihjb250ZW50OiBhbnksIG9wdGlvbnM/OiBNb2RhbE9wdGlvbnMpOiBNb2RhbFJlZiB7XG4gICAgbGV0IGFjdGl2ZU1vZGFsOiBNb2RhbFJlZjtcblxuICAgIGFjdGl2ZU1vZGFsID0gdGhpcy5uZ2JNb2RhbFNlcnZpY2Uub3Blbihjb250ZW50LCBvcHRpb25zKTtcbiAgICB0aGlzLm1vZGFscy5wdXNoKGFjdGl2ZU1vZGFsKTtcblxuICAgIHJldHVybiBhY3RpdmVNb2RhbDtcbiAgfVxuXG4gIGdldEFjdGl2ZU1vZGFsKCk6IE1vZGFsUmVmIHtcbiAgICBjb25zdCBtb2RhbCA9IHRoaXMubW9kYWxzW3RoaXMubW9kYWxzLmxlbmd0aCAtIDFdO1xuICAgIHJldHVybiBtb2RhbCA/IG1vZGFsIDogbnVsbDtcbiAgfVxuXG4gIGRpc21pc3NBY3RpdmVNb2RhbChyZWFzb24/OiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCBtb2RhbDogTW9kYWxSZWYgPSB0aGlzLmdldEFjdGl2ZU1vZGFsKCk7XG5cbiAgICBpZiAobW9kYWwpIHtcbiAgICAgIG1vZGFsLmRpc21pc3MocmVhc29uKTtcbiAgICAgIHRoaXMubW9kYWxzLnBvcCgpO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlQWN0aXZlTW9kYWwocmVhc29uPzogYW55KTogdm9pZCB7XG4gICAgY29uc3QgbW9kYWw6IE1vZGFsUmVmID0gdGhpcy5nZXRBY3RpdmVNb2RhbCgpO1xuXG4gICAgaWYgKG1vZGFsKSB7XG4gICAgICBtb2RhbC5jbG9zZShyZWFzb24pO1xuICAgICAgdGhpcy5tb2RhbHMucG9wKCk7XG4gICAgfVxuICB9XG59XG4iXX0=