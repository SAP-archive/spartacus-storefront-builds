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
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NavigationUIComponent, "cx-navigation-ui", never, { "flyout": "flyout"; "isOpen": "isOpen"; "node": "node"; "wrapAfter": "wrapAfter"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi11aS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibmF2aWdhdGlvbi11aS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0NBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgT25EZXN0cm95LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi9taXNjL2ljb24vaW5kZXgnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbk5vZGUgfSBmcm9tICcuL25hdmlnYXRpb24tbm9kZS5tb2RlbCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBOYXZpZ2F0aW9uVUlDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgcm91dGVyO1xuICAgIHByaXZhdGUgcmVuZGVyZXI7XG4gICAgcHJpdmF0ZSBlbGVtUmVmO1xuICAgIC8qKlxuICAgICAqIFRoZSBuYXZpZ2F0aW9uIG5vZGUgdG8gcmVuZGVyLlxuICAgICAqL1xuICAgIG5vZGU6IE5hdmlnYXRpb25Ob2RlO1xuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgY2hpbGQgbm9kZXMgdGhhdCBtdXN0IGJlIHdyYXBwZWQuXG4gICAgICovXG4gICAgd3JhcEFmdGVyOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogdGhlIGljb24gdHlwZSB0aGF0IHdpbGwgYmUgdXNlZCBmb3IgbmF2aWdhdGlvbiBub2Rlc1xuICAgICAqIHdpdGggY2hpbGRyZW4uXG4gICAgICovXG4gICAgaWNvblR5cGU6IHR5cGVvZiBJQ09OX1RZUEU7XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIG5hdmlnYXRpb24gc2hvdWxkIHN1cHBvcnQgZmx5b3V0LlxuICAgICAqIElmIGZseW91dCBpcyBzZXQgdG8gdHJ1ZSwgdGhlXG4gICAgICogbmVzdGVkIGNoaWxkIG5hdmlnYXRpb24gbm9kZXMgd2lsbCBvbmx5IGFwcGVhciBvbiBob3ZlciBvciBmb2N1cy5cbiAgICAgKi9cbiAgICBmbHlvdXQ6IGJvb2xlYW47XG4gICAgaXNPcGVuOiBib29sZWFuO1xuICAgIHByaXZhdGUgb3Blbk5vZGVzO1xuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9ucztcbiAgICBwcml2YXRlIHJlc2l6ZTtcbiAgICBvblJlc2l6ZSgpOiB2b2lkO1xuICAgIGNvbnN0cnVjdG9yKHJvdXRlcjogUm91dGVyLCByZW5kZXJlcjogUmVuZGVyZXIyLCBlbGVtUmVmOiBFbGVtZW50UmVmKTtcbiAgICB0b2dnbGVPcGVuKGV2ZW50OiBVSUV2ZW50KTogdm9pZDtcbiAgICBiYWNrKCk6IHZvaWQ7XG4gICAgY2xlYXIoKTogdm9pZDtcbiAgICBvbk1vdXNlRW50ZXIoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkO1xuICAgIGdldFRvdGFsRGVwdGgobm9kZTogTmF2aWdhdGlvbk5vZGUsIGRlcHRoPzogbnVtYmVyKTogbnVtYmVyO1xuICAgIGdldENvbHVtbkNvdW50KGxlbmd0aDogbnVtYmVyKTogbnVtYmVyO1xuICAgIGZvY3VzQWZ0ZXJQcmV2aW91c0NsaWNrZWQoZXZlbnQ6IE1vdXNlRXZlbnQpOiBEb2N1bWVudDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIHByaXZhdGUgYWxpZ25XcmFwcGVyVG9SaWdodElmU3RpY2tPdXQ7XG4gICAgcHJpdmF0ZSBhbGlnbldyYXBwZXJzVG9SaWdodElmU3RpY2tPdXQ7XG4gICAgcHJpdmF0ZSB1cGRhdGVDbGFzc2VzO1xufVxuIl19