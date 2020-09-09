import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalRef } from './modal-ref';
import { ModalOptions } from './modal-options';
/**
 * A service to handle modal
 */
import * as ɵngcc0 from '@angular/core';
export declare class ModalService {
    private ngbModalService;
    private modals;
    constructor(ngbModalService: NgbModal);
    open(content: any, options?: ModalOptions): ModalRef;
    getActiveModal(): ModalRef;
    dismissActiveModal(reason?: any): void;
    closeActiveModal(reason?: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ModalService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJtb2RhbC5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFNQTs7Ozs7Ozs7O0FBUUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ2JNb2RhbCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IE1vZGFsUmVmIH0gZnJvbSAnLi9tb2RhbC1yZWYnO1xuaW1wb3J0IHsgTW9kYWxPcHRpb25zIH0gZnJvbSAnLi9tb2RhbC1vcHRpb25zJztcbi8qKlxuICogQSBzZXJ2aWNlIHRvIGhhbmRsZSBtb2RhbFxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBNb2RhbFNlcnZpY2Uge1xuICAgIHByaXZhdGUgbmdiTW9kYWxTZXJ2aWNlO1xuICAgIHByaXZhdGUgbW9kYWxzO1xuICAgIGNvbnN0cnVjdG9yKG5nYk1vZGFsU2VydmljZTogTmdiTW9kYWwpO1xuICAgIG9wZW4oY29udGVudDogYW55LCBvcHRpb25zPzogTW9kYWxPcHRpb25zKTogTW9kYWxSZWY7XG4gICAgZ2V0QWN0aXZlTW9kYWwoKTogTW9kYWxSZWY7XG4gICAgZGlzbWlzc0FjdGl2ZU1vZGFsKHJlYXNvbj86IGFueSk6IHZvaWQ7XG4gICAgY2xvc2VBY3RpdmVNb2RhbChyZWFzb24/OiBhbnkpOiB2b2lkO1xufVxuIl19