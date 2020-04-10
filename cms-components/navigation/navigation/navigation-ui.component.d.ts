import { ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { ICON_TYPE } from '../../misc/icon/index';
import { NavigationNode } from './navigation-node.model';
import * as ɵngcc0 from '@angular/core';
export declare class NavigationUIComponent implements OnDestroy {
    private router;
    private renderer;
    private elemRef;
    /**
     * The navigation node to render.
     */
    node: NavigationNode;
    /**
     * The number of child nodes that must be wrapped.
     */
    wrapAfter: number;
    allowAlignToRight: boolean;
    /**
     * the icon type that will be used for navigation nodes
     * with children.
     */
    iconType: typeof ICON_TYPE;
    /**
     * Indicates whether the navigation should support flyout.
     * If flyout is set to true, the
     * nested child navigation nodes will only appear on hover or focus.
     */
    flyout: boolean;
    isOpen: boolean;
    private openNodes;
    private subscriptions;
    private resize;
    onResize(): void;
    constructor(router: Router, renderer: Renderer2, elemRef: ElementRef);
    toggleOpen(event: UIEvent): void;
    back(): void;
    clear(): void;
    onMouseEnter(event: MouseEvent): void;
    getTotalDepth(node: NavigationNode, depth?: number): number;
    getColumnCount(length: number): number;
    focusAfterPreviousClicked(event: MouseEvent): Document;
    ngOnDestroy(): void;
    private alignWrapperToRightIfStickOut;
    private alignWrappersToRightIfStickOut;
    private updateClasses;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NavigationUIComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NavigationUIComponent, "cx-navigation-ui", never, { "allowAlignToRight": "allowAlignToRight"; "flyout": "flyout"; "isOpen": "isOpen"; "node": "node"; "wrapAfter": "wrapAfter"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi11aS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibmF2aWdhdGlvbi11aS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIE9uRGVzdHJveSwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vbWlzYy9pY29uL2luZGV4JztcbmltcG9ydCB7IE5hdmlnYXRpb25Ob2RlIH0gZnJvbSAnLi9uYXZpZ2F0aW9uLW5vZGUubW9kZWwnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTmF2aWdhdGlvblVJQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIHJvdXRlcjtcbiAgICBwcml2YXRlIHJlbmRlcmVyO1xuICAgIHByaXZhdGUgZWxlbVJlZjtcbiAgICAvKipcbiAgICAgKiBUaGUgbmF2aWdhdGlvbiBub2RlIHRvIHJlbmRlci5cbiAgICAgKi9cbiAgICBub2RlOiBOYXZpZ2F0aW9uTm9kZTtcbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIG9mIGNoaWxkIG5vZGVzIHRoYXQgbXVzdCBiZSB3cmFwcGVkLlxuICAgICAqL1xuICAgIHdyYXBBZnRlcjogbnVtYmVyO1xuICAgIGFsbG93QWxpZ25Ub1JpZ2h0OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIHRoZSBpY29uIHR5cGUgdGhhdCB3aWxsIGJlIHVzZWQgZm9yIG5hdmlnYXRpb24gbm9kZXNcbiAgICAgKiB3aXRoIGNoaWxkcmVuLlxuICAgICAqL1xuICAgIGljb25UeXBlOiB0eXBlb2YgSUNPTl9UWVBFO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBuYXZpZ2F0aW9uIHNob3VsZCBzdXBwb3J0IGZseW91dC5cbiAgICAgKiBJZiBmbHlvdXQgaXMgc2V0IHRvIHRydWUsIHRoZVxuICAgICAqIG5lc3RlZCBjaGlsZCBuYXZpZ2F0aW9uIG5vZGVzIHdpbGwgb25seSBhcHBlYXIgb24gaG92ZXIgb3IgZm9jdXMuXG4gICAgICovXG4gICAgZmx5b3V0OiBib29sZWFuO1xuICAgIGlzT3BlbjogYm9vbGVhbjtcbiAgICBwcml2YXRlIG9wZW5Ob2RlcztcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbnM7XG4gICAgcHJpdmF0ZSByZXNpemU7XG4gICAgb25SZXNpemUoKTogdm9pZDtcbiAgICBjb25zdHJ1Y3Rvcihyb3V0ZXI6IFJvdXRlciwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgZWxlbVJlZjogRWxlbWVudFJlZik7XG4gICAgdG9nZ2xlT3BlbihldmVudDogVUlFdmVudCk6IHZvaWQ7XG4gICAgYmFjaygpOiB2b2lkO1xuICAgIGNsZWFyKCk6IHZvaWQ7XG4gICAgb25Nb3VzZUVudGVyKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZDtcbiAgICBnZXRUb3RhbERlcHRoKG5vZGU6IE5hdmlnYXRpb25Ob2RlLCBkZXB0aD86IG51bWJlcik6IG51bWJlcjtcbiAgICBnZXRDb2x1bW5Db3VudChsZW5ndGg6IG51bWJlcik6IG51bWJlcjtcbiAgICBmb2N1c0FmdGVyUHJldmlvdXNDbGlja2VkKGV2ZW50OiBNb3VzZUV2ZW50KTogRG9jdW1lbnQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbiAgICBwcml2YXRlIGFsaWduV3JhcHBlclRvUmlnaHRJZlN0aWNrT3V0O1xuICAgIHByaXZhdGUgYWxpZ25XcmFwcGVyc1RvUmlnaHRJZlN0aWNrT3V0O1xuICAgIHByaXZhdGUgdXBkYXRlQ2xhc3Nlcztcbn1cbiJdfQ==