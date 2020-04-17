import { ChangeDetectorRef, ElementRef, QueryList } from '@angular/core';
import { Facet, FacetValue } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ICON_TYPE } from '../../../../../cms-components/misc/icon/icon.model';
import { FocusDirective } from '../../../../../layout/a11y/keyboard-focus/focus.directive';
import { FacetCollapseState } from '../facet.model';
import { FacetService } from '../services/facet.service';
import * as ɵngcc0 from '@angular/core';
export declare class FacetComponent {
    protected facetService: FacetService;
    protected elementRef: ElementRef<HTMLElement>;
    protected cd: ChangeDetectorRef;
    protected _facet: Facet;
    state$: Observable<FacetCollapseState>;
    /** configurable icon that is used to collapse the facet group  */
    expandIcon: ICON_TYPE;
    collapseIcon: ICON_TYPE;
    isMultiSelect: boolean;
    values: QueryList<ElementRef<HTMLElement>>;
    keyboardFocus: FocusDirective;
    set facet(value: Facet);
    get facet(): Facet;
    constructor(facetService: FacetService, elementRef: ElementRef<HTMLElement>, cd: ChangeDetectorRef);
    /**
     * Handles clicking the heading of the facet group, which means toggling
     * the visibility of the group (collapse / expand) and optionally focusing
     * the group.
     */
    toggleGroup(event: UIEvent): void;
    get isExpanded(): boolean;
    openLink(event: KeyboardEvent): void;
    /**
     * Increases the number of visible values for the facet. This is delegated
     * to `facetService.increaseVisibleValues`.
     */
    increaseVisibleValues(): void;
    /**
     * Decreases the number of visible values for the facet. This is delegated
     * to `facetService.decreaseVisibleValues`.
     */
    decreaseVisibleValues(): void;
    getLinkParams(value: FacetValue): {
        query: string;
    };
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FacetComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<FacetComponent, "cx-facet", never, { "expandIcon": "expandIcon"; "collapseIcon": "collapseIcon"; "facet": "facet"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImZhY2V0LmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9DQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZhY2V0LCBGYWNldFZhbHVlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaWNvbi9pY29uLm1vZGVsJztcbmltcG9ydCB7IEZvY3VzRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGF5b3V0L2ExMXkva2V5Ym9hcmQtZm9jdXMvZm9jdXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IEZhY2V0Q29sbGFwc2VTdGF0ZSB9IGZyb20gJy4uL2ZhY2V0Lm1vZGVsJztcbmltcG9ydCB7IEZhY2V0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2ZhY2V0LnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRmFjZXRDb21wb25lbnQge1xuICAgIHByb3RlY3RlZCBmYWNldFNlcnZpY2U6IEZhY2V0U2VydmljZTtcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG4gICAgcHJvdGVjdGVkIGNkOiBDaGFuZ2VEZXRlY3RvclJlZjtcbiAgICBwcm90ZWN0ZWQgX2ZhY2V0OiBGYWNldDtcbiAgICBzdGF0ZSQ6IE9ic2VydmFibGU8RmFjZXRDb2xsYXBzZVN0YXRlPjtcbiAgICAvKiogY29uZmlndXJhYmxlIGljb24gdGhhdCBpcyB1c2VkIHRvIGNvbGxhcHNlIHRoZSBmYWNldCBncm91cCAgKi9cbiAgICBleHBhbmRJY29uOiBJQ09OX1RZUEU7XG4gICAgY29sbGFwc2VJY29uOiBJQ09OX1RZUEU7XG4gICAgaXNNdWx0aVNlbGVjdDogYm9vbGVhbjtcbiAgICB2YWx1ZXM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPEhUTUxFbGVtZW50Pj47XG4gICAga2V5Ym9hcmRGb2N1czogRm9jdXNEaXJlY3RpdmU7XG4gICAgc2V0IGZhY2V0KHZhbHVlOiBGYWNldCk7XG4gICAgZ2V0IGZhY2V0KCk6IEZhY2V0O1xuICAgIGNvbnN0cnVjdG9yKGZhY2V0U2VydmljZTogRmFjZXRTZXJ2aWNlLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PiwgY2Q6IENoYW5nZURldGVjdG9yUmVmKTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIGNsaWNraW5nIHRoZSBoZWFkaW5nIG9mIHRoZSBmYWNldCBncm91cCwgd2hpY2ggbWVhbnMgdG9nZ2xpbmdcbiAgICAgKiB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgZ3JvdXAgKGNvbGxhcHNlIC8gZXhwYW5kKSBhbmQgb3B0aW9uYWxseSBmb2N1c2luZ1xuICAgICAqIHRoZSBncm91cC5cbiAgICAgKi9cbiAgICB0b2dnbGVHcm91cChldmVudDogVUlFdmVudCk6IHZvaWQ7XG4gICAgZ2V0IGlzRXhwYW5kZWQoKTogYm9vbGVhbjtcbiAgICBvcGVuTGluayhldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogSW5jcmVhc2VzIHRoZSBudW1iZXIgb2YgdmlzaWJsZSB2YWx1ZXMgZm9yIHRoZSBmYWNldC4gVGhpcyBpcyBkZWxlZ2F0ZWRcbiAgICAgKiB0byBgZmFjZXRTZXJ2aWNlLmluY3JlYXNlVmlzaWJsZVZhbHVlc2AuXG4gICAgICovXG4gICAgaW5jcmVhc2VWaXNpYmxlVmFsdWVzKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogRGVjcmVhc2VzIHRoZSBudW1iZXIgb2YgdmlzaWJsZSB2YWx1ZXMgZm9yIHRoZSBmYWNldC4gVGhpcyBpcyBkZWxlZ2F0ZWRcbiAgICAgKiB0byBgZmFjZXRTZXJ2aWNlLmRlY3JlYXNlVmlzaWJsZVZhbHVlc2AuXG4gICAgICovXG4gICAgZGVjcmVhc2VWaXNpYmxlVmFsdWVzKCk6IHZvaWQ7XG4gICAgZ2V0TGlua1BhcmFtcyh2YWx1ZTogRmFjZXRWYWx1ZSk6IHtcbiAgICAgICAgcXVlcnk6IHN0cmluZztcbiAgICB9O1xufVxuIl19