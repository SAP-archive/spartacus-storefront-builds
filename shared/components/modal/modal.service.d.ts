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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ModalService>;
}

//# sourceMappingURL=modal.service.d.ts.map