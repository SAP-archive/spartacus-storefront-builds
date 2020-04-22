import { ElementRef, EventEmitter, Renderer2 } from '@angular/core';
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
    protected renderer: Renderer2;
    private _isDialog;
    /**
     * Indicates that the facet navigation is rendered in dialog.
     */
    set isDialog(value: boolean);
    get isDialog(): boolean;
    /** Emits when the list must close */
    closeList: EventEmitter<any>;
    /** The list of all facet and values related to the products in the list */
    facetList$: Observable<FacetList>;
    iconTypes: typeof ICON_TYPE;
    dialogFocusConfig: FocusConfig;
    handleClick(): void;
    constructor(facetService: FacetService, elementRef: ElementRef, renderer: Renderer2);
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
    block(event?: MouseEvent): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FacetListComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<FacetListComponent, "cx-facet-list", never, { "isDialog": "isDialog"; }, { "closeList": "closeList"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtbGlzdC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiZmFjZXQtbGlzdC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmFjZXQgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRm9jdXNDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9sYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9pbmRleCc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi8uLi9taXNjL2ljb24vaWNvbi5tb2RlbCc7XG5pbXBvcnQgeyBGYWNldExpc3QgfSBmcm9tICcuLi9mYWNldC5tb2RlbCc7XG5pbXBvcnQgeyBGYWNldENvbXBvbmVudCB9IGZyb20gJy4uL2ZhY2V0L2ZhY2V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWNldFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9mYWNldC5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEZhY2V0TGlzdENvbXBvbmVudCB7XG4gICAgcHJvdGVjdGVkIGZhY2V0U2VydmljZTogRmFjZXRTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyO1xuICAgIHByaXZhdGUgX2lzRGlhbG9nO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB0aGF0IHRoZSBmYWNldCBuYXZpZ2F0aW9uIGlzIHJlbmRlcmVkIGluIGRpYWxvZy5cbiAgICAgKi9cbiAgICBzZXQgaXNEaWFsb2codmFsdWU6IGJvb2xlYW4pO1xuICAgIGdldCBpc0RpYWxvZygpOiBib29sZWFuO1xuICAgIC8qKiBFbWl0cyB3aGVuIHRoZSBsaXN0IG11c3QgY2xvc2UgKi9cbiAgICBjbG9zZUxpc3Q6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgIC8qKiBUaGUgbGlzdCBvZiBhbGwgZmFjZXQgYW5kIHZhbHVlcyByZWxhdGVkIHRvIHRoZSBwcm9kdWN0cyBpbiB0aGUgbGlzdCAqL1xuICAgIGZhY2V0TGlzdCQ6IE9ic2VydmFibGU8RmFjZXRMaXN0PjtcbiAgICBpY29uVHlwZXM6IHR5cGVvZiBJQ09OX1RZUEU7XG4gICAgZGlhbG9nRm9jdXNDb25maWc6IEZvY3VzQ29uZmlnO1xuICAgIGhhbmRsZUNsaWNrKCk6IHZvaWQ7XG4gICAgY29uc3RydWN0b3IoZmFjZXRTZXJ2aWNlOiBGYWNldFNlcnZpY2UsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIpO1xuICAgIC8qKlxuICAgICAqIFRvZ2dsZXMgdGhlIGZhY2V0IGdyb3VwIGluIGNhc2UgaXQgaXMgbm90IGV4cGFuZGVkLlxuICAgICAqL1xuICAgIGV4cGFuZEZhY2V0R3JvdXAoZmFjZXQ6IEZhY2V0LCByZWY6IEZhY2V0Q29tcG9uZW50KTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgdGhhdCB0aGUgZmFjZXQgZ3JvdXAgaGFzIGJlZW4gZXhwYW5kZWQuXG4gICAgICovXG4gICAgaXNFeHBhbmRlZChmYWNldDogRmFjZXQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB0aGF0IHRoZSBmYWNldCBncm91cCBoYXMgYmVlbiBjb2xsYXBzZWQuXG4gICAgICovXG4gICAgaXNDb2xsYXBzZWQoZmFjZXQ6IEZhY2V0KTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBjbG9zZShldmVudD86IGJvb2xlYW4pOiB2b2lkO1xuICAgIGJsb2NrKGV2ZW50PzogTW91c2VFdmVudCk6IHZvaWQ7XG59XG4iXX0=