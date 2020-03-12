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
     * nested child navitation nodes will only appear on hover or focus.
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
    getDepth(node: NavigationNode, depth?: number): number;
    getColumnCount(length: number): number;
    focusAfterPreviousClicked(event: MouseEvent): Document;
    ngOnDestroy(): void;
    private alignWrapperToRightIfStickOut;
    private alignWrappersToRightIfStickOut;
    private updateClasses;
    isTabbable(node: any): any;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NavigationUIComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NavigationUIComponent, "cx-navigation-ui", never, {
    "allowAlignToRight": "allowAlignToRight";
    "flyout": "flyout";
    "isOpen": "isOpen";
    "node": "node";
    "wrapAfter": "wrapAfter";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi11aS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibmF2aWdhdGlvbi11aS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBPbkRlc3Ryb3ksIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uL21pc2MvaWNvbi9pbmRleCc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uTm9kZSB9IGZyb20gJy4vbmF2aWdhdGlvbi1ub2RlLm1vZGVsJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE5hdmlnYXRpb25VSUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSByb3V0ZXI7XG4gICAgcHJpdmF0ZSByZW5kZXJlcjtcbiAgICBwcml2YXRlIGVsZW1SZWY7XG4gICAgLyoqXG4gICAgICogVGhlIG5hdmlnYXRpb24gbm9kZSB0byByZW5kZXIuXG4gICAgICovXG4gICAgbm9kZTogTmF2aWdhdGlvbk5vZGU7XG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiBjaGlsZCBub2RlcyB0aGF0IG11c3QgYmUgd3JhcHBlZC5cbiAgICAgKi9cbiAgICB3cmFwQWZ0ZXI6IG51bWJlcjtcbiAgICBhbGxvd0FsaWduVG9SaWdodDogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiB0aGUgaWNvbiB0eXBlIHRoYXQgd2lsbCBiZSB1c2VkIGZvciBuYXZpZ2F0aW9uIG5vZGVzXG4gICAgICogd2l0aCBjaGlsZHJlbi5cbiAgICAgKi9cbiAgICBpY29uVHlwZTogdHlwZW9mIElDT05fVFlQRTtcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgbmF2aWdhdGlvbiBzaG91bGQgc3VwcG9ydCBmbHlvdXQuXG4gICAgICogSWYgZmx5b3V0IGlzIHNldCB0byB0cnVlLCB0aGVcbiAgICAgKiBuZXN0ZWQgY2hpbGQgbmF2aXRhdGlvbiBub2RlcyB3aWxsIG9ubHkgYXBwZWFyIG9uIGhvdmVyIG9yIGZvY3VzLlxuICAgICAqL1xuICAgIGZseW91dDogYm9vbGVhbjtcbiAgICBpc09wZW46IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBvcGVuTm9kZXM7XG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zO1xuICAgIHByaXZhdGUgcmVzaXplO1xuICAgIG9uUmVzaXplKCk6IHZvaWQ7XG4gICAgY29uc3RydWN0b3Iocm91dGVyOiBSb3V0ZXIsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIGVsZW1SZWY6IEVsZW1lbnRSZWYpO1xuICAgIHRvZ2dsZU9wZW4oZXZlbnQ6IFVJRXZlbnQpOiB2b2lkO1xuICAgIGJhY2soKTogdm9pZDtcbiAgICBjbGVhcigpOiB2b2lkO1xuICAgIG9uTW91c2VFbnRlcihldmVudDogTW91c2VFdmVudCk6IHZvaWQ7XG4gICAgZ2V0RGVwdGgobm9kZTogTmF2aWdhdGlvbk5vZGUsIGRlcHRoPzogbnVtYmVyKTogbnVtYmVyO1xuICAgIGdldENvbHVtbkNvdW50KGxlbmd0aDogbnVtYmVyKTogbnVtYmVyO1xuICAgIGZvY3VzQWZ0ZXJQcmV2aW91c0NsaWNrZWQoZXZlbnQ6IE1vdXNlRXZlbnQpOiBEb2N1bWVudDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIHByaXZhdGUgYWxpZ25XcmFwcGVyVG9SaWdodElmU3RpY2tPdXQ7XG4gICAgcHJpdmF0ZSBhbGlnbldyYXBwZXJzVG9SaWdodElmU3RpY2tPdXQ7XG4gICAgcHJpdmF0ZSB1cGRhdGVDbGFzc2VzO1xuICAgIGlzVGFiYmFibGUobm9kZTogYW55KTogYW55O1xufVxuIl19