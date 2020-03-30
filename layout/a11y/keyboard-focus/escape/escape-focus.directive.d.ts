import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import { EscapeFocusConfig } from '../keyboard-focus.model';
import { PersistFocusDirective } from '../persist/persist-focus.directive';
import { EscapeFocusService } from './escape-focus.service';
/**
 * Directive to focus the host element whenever the `escape` key is captured.
 * UiEvents bubble up by nature, which is why the `cxEscGroup` can be used
 * on a tree of elements. Each time the escape key is used, the focus will
 * move up in the DOM tree.
 *
 */
import * as ɵngcc0 from '@angular/core';
export declare class EscapeFocusDirective extends PersistFocusDirective implements OnInit {
    protected elementRef: ElementRef;
    protected service: EscapeFocusService;
    protected defaultConfig: EscapeFocusConfig;
    protected config: EscapeFocusConfig;
    esc: EventEmitter<boolean>;
    /**
     * Handles the escape key event.
     * @param event the native keyboard event which contains the escape keydown event
     */
    handleEscape(event: KeyboardEvent): void;
    constructor(elementRef: ElementRef, service: EscapeFocusService);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<EscapeFocusDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<EscapeFocusDirective, never, never, {}, { "esc": "esc"; }, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNjYXBlLWZvY3VzLmRpcmVjdGl2ZS5kLnRzIiwic291cmNlcyI6WyJlc2NhcGUtZm9jdXMuZGlyZWN0aXZlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQVdBOzs7Ozs7Ozs7Ozs7Ozs7QUFhQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFc2NhcGVGb2N1c0NvbmZpZyB9IGZyb20gJy4uL2tleWJvYXJkLWZvY3VzLm1vZGVsJztcbmltcG9ydCB7IFBlcnNpc3RGb2N1c0RpcmVjdGl2ZSB9IGZyb20gJy4uL3BlcnNpc3QvcGVyc2lzdC1mb2N1cy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRXNjYXBlRm9jdXNTZXJ2aWNlIH0gZnJvbSAnLi9lc2NhcGUtZm9jdXMuc2VydmljZSc7XG4vKipcbiAqIERpcmVjdGl2ZSB0byBmb2N1cyB0aGUgaG9zdCBlbGVtZW50IHdoZW5ldmVyIHRoZSBgZXNjYXBlYCBrZXkgaXMgY2FwdHVyZWQuXG4gKiBVaUV2ZW50cyBidWJibGUgdXAgYnkgbmF0dXJlLCB3aGljaCBpcyB3aHkgdGhlIGBjeEVzY0dyb3VwYCBjYW4gYmUgdXNlZFxuICogb24gYSB0cmVlIG9mIGVsZW1lbnRzLiBFYWNoIHRpbWUgdGhlIGVzY2FwZSBrZXkgaXMgdXNlZCwgdGhlIGZvY3VzIHdpbGxcbiAqIG1vdmUgdXAgaW4gdGhlIERPTSB0cmVlLlxuICpcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRXNjYXBlRm9jdXNEaXJlY3RpdmUgZXh0ZW5kcyBQZXJzaXN0Rm9jdXNEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgIHByb3RlY3RlZCBzZXJ2aWNlOiBFc2NhcGVGb2N1c1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGRlZmF1bHRDb25maWc6IEVzY2FwZUZvY3VzQ29uZmlnO1xuICAgIHByb3RlY3RlZCBjb25maWc6IEVzY2FwZUZvY3VzQ29uZmlnO1xuICAgIGVzYzogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdGhlIGVzY2FwZSBrZXkgZXZlbnQuXG4gICAgICogQHBhcmFtIGV2ZW50IHRoZSBuYXRpdmUga2V5Ym9hcmQgZXZlbnQgd2hpY2ggY29udGFpbnMgdGhlIGVzY2FwZSBrZXlkb3duIGV2ZW50XG4gICAgICovXG4gICAgaGFuZGxlRXNjYXBlKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZDtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBzZXJ2aWNlOiBFc2NhcGVGb2N1c1NlcnZpY2UpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG59XG4iXX0=