import { ElementRef, EventEmitter } from '@angular/core';
import { Facet } from '@spartacus/core';
import { Observable } from 'rxjs';
import { FocusConfig } from '../../../../../layout/a11y/keyboard-focus/index';
import { ICON_TYPE } from '../../../../misc/icon/icon.model';
import { FacetList } from '../facet.model';
import { FacetComponent } from '../facet/facet.component';
import { FacetService } from '../services/facet.service';
import * as ɵngcc0 from '@angular/core';
export declare class FacetListComponent {
    protected facetService: FacetService;
    protected elementRef: ElementRef;
    /**
     * Indicates that the facet navigation is rendered in dialog.
     */
    isDialog: boolean;
    /** Emits when the list must close */
    closeList: EventEmitter<any>;
    /** The list of all facet and values related to the products in the list */
    facetList$: Observable<FacetList>;
    iconTypes: typeof ICON_TYPE;
    dialogFocusConfig: FocusConfig;
    constructor(facetService: FacetService, elementRef: ElementRef);
    /**
     * Toggles the facet group in case it is not expanded.
     */
    expandFacetGroup(facet: Facet, ref: FacetComponent): void;
    /**
     * Indicates that the facet group has been expanded.
     */
    isExpanded(facet: Facet): Observable<boolean>;
    /**
     * Indicates that the facet group has been collapsed.
     */
    isCollapsed(facet: Facet): Observable<boolean>;
    close(event?: boolean): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FacetListComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<FacetListComponent, "cx-facet-list", never, { "isDialog": "isDialog"; }, { "closeList": "closeList"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtbGlzdC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiZmFjZXQtbGlzdC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGYWNldCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBGb2N1c0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xheW91dC9hMTF5L2tleWJvYXJkLWZvY3VzL2luZGV4JztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uLy4uL21pc2MvaWNvbi9pY29uLm1vZGVsJztcbmltcG9ydCB7IEZhY2V0TGlzdCB9IGZyb20gJy4uL2ZhY2V0Lm1vZGVsJztcbmltcG9ydCB7IEZhY2V0Q29tcG9uZW50IH0gZnJvbSAnLi4vZmFjZXQvZmFjZXQuY29tcG9uZW50JztcbmltcG9ydCB7IEZhY2V0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2ZhY2V0LnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRmFjZXRMaXN0Q29tcG9uZW50IHtcbiAgICBwcm90ZWN0ZWQgZmFjZXRTZXJ2aWNlOiBGYWNldFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHRoYXQgdGhlIGZhY2V0IG5hdmlnYXRpb24gaXMgcmVuZGVyZWQgaW4gZGlhbG9nLlxuICAgICAqL1xuICAgIGlzRGlhbG9nOiBib29sZWFuO1xuICAgIC8qKiBFbWl0cyB3aGVuIHRoZSBsaXN0IG11c3QgY2xvc2UgKi9cbiAgICBjbG9zZUxpc3Q6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIC8qKiBUaGUgbGlzdCBvZiBhbGwgZmFjZXQgYW5kIHZhbHVlcyByZWxhdGVkIHRvIHRoZSBwcm9kdWN0cyBpbiB0aGUgbGlzdCAqL1xuICAgIGZhY2V0TGlzdCQ6IE9ic2VydmFibGU8RmFjZXRMaXN0PjtcbiAgICBpY29uVHlwZXM6IHR5cGVvZiBJQ09OX1RZUEU7XG4gICAgZGlhbG9nRm9jdXNDb25maWc6IEZvY3VzQ29uZmlnO1xuICAgIGNvbnN0cnVjdG9yKGZhY2V0U2VydmljZTogRmFjZXRTZXJ2aWNlLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKTtcbiAgICAvKipcbiAgICAgKiBUb2dnbGVzIHRoZSBmYWNldCBncm91cCBpbiBjYXNlIGl0IGlzIG5vdCBleHBhbmRlZC5cbiAgICAgKi9cbiAgICBleHBhbmRGYWNldEdyb3VwKGZhY2V0OiBGYWNldCwgcmVmOiBGYWNldENvbXBvbmVudCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHRoYXQgdGhlIGZhY2V0IGdyb3VwIGhhcyBiZWVuIGV4cGFuZGVkLlxuICAgICAqL1xuICAgIGlzRXhwYW5kZWQoZmFjZXQ6IEZhY2V0KTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgdGhhdCB0aGUgZmFjZXQgZ3JvdXAgaGFzIGJlZW4gY29sbGFwc2VkLlxuICAgICAqL1xuICAgIGlzQ29sbGFwc2VkKGZhY2V0OiBGYWNldCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgY2xvc2UoZXZlbnQ/OiBib29sZWFuKTogdm9pZDtcbn1cbiJdfQ==