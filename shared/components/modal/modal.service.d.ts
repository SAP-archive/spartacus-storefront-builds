import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalOptions } from './modal-options';
import { ModalRef } from './modal-ref';
/**
 * A service to handle modal
 */
import * as ɵngcc0 from '@angular/core';
export declare class ModalService {
    private ngbModalService;
    private modals;
    constructor(ngbModalService: NgbModal);
    open(content: any, options?: ModalOptions): ModalRef;
    protected handleModalRemoveEvents(modal: ModalRef): void;
    getActiveModal(): ModalRef;
    dismissActiveModal(reason?: any): void;
    closeActiveModal(reason?: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ModalService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJtb2RhbC5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFNQTs7Ozs7Ozs7OztBQVNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdiTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBNb2RhbE9wdGlvbnMgfSBmcm9tICcuL21vZGFsLW9wdGlvbnMnO1xuaW1wb3J0IHsgTW9kYWxSZWYgfSBmcm9tICcuL21vZGFsLXJlZic7XG4vKipcbiAqIEEgc2VydmljZSB0byBoYW5kbGUgbW9kYWxcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTW9kYWxTZXJ2aWNlIHtcbiAgICBwcml2YXRlIG5nYk1vZGFsU2VydmljZTtcbiAgICBwcml2YXRlIG1vZGFscztcbiAgICBjb25zdHJ1Y3RvcihuZ2JNb2RhbFNlcnZpY2U6IE5nYk1vZGFsKTtcbiAgICBvcGVuKGNvbnRlbnQ6IGFueSwgb3B0aW9ucz86IE1vZGFsT3B0aW9ucyk6IE1vZGFsUmVmO1xuICAgIHByb3RlY3RlZCBoYW5kbGVNb2RhbFJlbW92ZUV2ZW50cyhtb2RhbDogTW9kYWxSZWYpOiB2b2lkO1xuICAgIGdldEFjdGl2ZU1vZGFsKCk6IE1vZGFsUmVmO1xuICAgIGRpc21pc3NBY3RpdmVNb2RhbChyZWFzb24/OiBhbnkpOiB2b2lkO1xuICAgIGNsb3NlQWN0aXZlTW9kYWwocmVhc29uPzogYW55KTogdm9pZDtcbn1cbiJdfQ==