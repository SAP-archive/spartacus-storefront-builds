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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NavigationUIComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NavigationUIComponent, "cx-navigation-ui", never, {
    "allowAlignToRight": "allowAlignToRight";
    "flyout": "flyout";
    "isOpen": "isOpen";
    "node": "node";
    "wrapAfter": "wrapAfter";
}, {}, never>;
}

//# sourceMappingURL=navigation-ui.component.d.ts.map