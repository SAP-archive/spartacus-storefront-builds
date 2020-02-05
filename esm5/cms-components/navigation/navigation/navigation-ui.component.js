/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, Renderer2, } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import { ICON_TYPE } from '../../misc/icon/index';
var NavigationUIComponent = /** @class */ (function () {
    function NavigationUIComponent(router, renderer, elemRef) {
        var _this = this;
        this.router = router;
        this.renderer = renderer;
        this.elemRef = elemRef;
        this.allowAlignToRight = false;
        /**
         * the icon type that will be used for navigation nodes
         * with children.
         */
        this.iconType = ICON_TYPE;
        /**
         * Indicates whether the navigation should support flyout.
         * If flyout is set to true, the
         * nested child navitation nodes will only appear on hover or focus.
         */
        this.flyout = true;
        this.isOpen = false;
        this.openNodes = [];
        this.subscriptions = new Subscription();
        this.resize = new EventEmitter();
        this.subscriptions.add(this.router.events
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event instanceof NavigationEnd; })))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.clear(); })));
        this.subscriptions.add(this.resize.pipe(debounceTime(50)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.alignWrappersToRightIfStickOut();
        })));
    }
    /**
     * @return {?}
     */
    NavigationUIComponent.prototype.onResize = /**
     * @return {?}
     */
    function () {
        this.resize.next();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NavigationUIComponent.prototype.toggleOpen = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var node = (/** @type {?} */ (event.currentTarget));
        if (this.openNodes.includes(node)) {
            this.openNodes = this.openNodes.filter((/**
             * @param {?} n
             * @return {?}
             */
            function (n) { return n !== node; }));
            this.renderer.removeClass(node, 'is-open');
        }
        else {
            this.openNodes.push(node);
        }
        this.updateClasses();
        event.stopImmediatePropagation();
        event.stopPropagation();
    };
    /**
     * @return {?}
     */
    NavigationUIComponent.prototype.back = /**
     * @return {?}
     */
    function () {
        this.renderer.removeClass(this.openNodes[this.openNodes.length - 1], 'is-open');
        this.openNodes.pop();
        this.updateClasses();
    };
    /**
     * @return {?}
     */
    NavigationUIComponent.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.openNodes = [];
        this.updateClasses();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NavigationUIComponent.prototype.onMouseEnter = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.alignWrapperToRightIfStickOut((/** @type {?} */ (event.currentTarget)));
        this.focusAfterPreviousClicked(event);
    };
    /**
     * @param {?} node
     * @param {?=} depth
     * @return {?}
     */
    NavigationUIComponent.prototype.getDepth = /**
     * @param {?} node
     * @param {?=} depth
     * @return {?}
     */
    function (node, depth) {
        var _this = this;
        if (depth === void 0) { depth = 0; }
        if (node.children && node.children.length > 0) {
            return Math.max.apply(Math, tslib_1.__spread(node.children.map((/**
             * @param {?} n
             * @return {?}
             */
            function (n) { return _this.getDepth(n, depth + 1); }))));
        }
        else {
            return depth;
        }
    };
    /**
     * @param {?} length
     * @return {?}
     */
    NavigationUIComponent.prototype.getColumnCount = /**
     * @param {?} length
     * @return {?}
     */
    function (length) {
        return Math.round(length / (this.wrapAfter || length));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NavigationUIComponent.prototype.focusAfterPreviousClicked = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var target = (/** @type {?} */ (((event.target || event.relatedTarget))));
        if (target.ownerDocument.activeElement.matches('nav[tabindex]') &&
            target.parentElement.matches('.flyout')) {
            target.focus();
        }
        return target.ownerDocument;
    };
    /**
     * @return {?}
     */
    NavigationUIComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.subscriptions) {
            this.subscriptions.unsubscribe();
        }
    };
    /**
     * @private
     * @param {?} node
     * @return {?}
     */
    NavigationUIComponent.prototype.alignWrapperToRightIfStickOut = /**
     * @private
     * @param {?} node
     * @return {?}
     */
    function (node) {
        if (this.allowAlignToRight) {
            /** @type {?} */
            var wrapper = (/** @type {?} */ (node.querySelector('.wrapper')));
            /** @type {?} */
            var navBar = (/** @type {?} */ (this.elemRef.nativeElement));
            if (wrapper) {
                this.renderer.removeStyle(wrapper, 'margin-left');
                if (wrapper.offsetLeft + wrapper.offsetWidth >
                    navBar.offsetLeft + navBar.offsetWidth) {
                    this.renderer.setStyle(wrapper, 'margin-left', node.offsetWidth - wrapper.offsetWidth + "px");
                }
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    NavigationUIComponent.prototype.alignWrappersToRightIfStickOut = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var navs = (/** @type {?} */ (this.elemRef.nativeElement.childNodes));
        Array.from(navs)
            .filter((/**
         * @param {?} node
         * @return {?}
         */
        function (node) { return node.tagName === 'NAV'; }))
            .forEach((/**
         * @param {?} nav
         * @return {?}
         */
        function (nav) { return _this.alignWrapperToRightIfStickOut((/** @type {?} */ (nav))); }));
    };
    /**
     * @private
     * @return {?}
     */
    NavigationUIComponent.prototype.updateClasses = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.openNodes.forEach((/**
         * @param {?} node
         * @param {?} i
         * @return {?}
         */
        function (node, i) {
            if (i + 1 < _this.openNodes.length) {
                _this.renderer.addClass(node, 'is-opened');
                _this.renderer.removeClass(node, 'is-open');
            }
            else {
                _this.renderer.removeClass(node, 'is-opened');
                _this.renderer.addClass(node, 'is-open');
            }
        }));
        this.isOpen = this.openNodes.length > 0;
    };
    NavigationUIComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-navigation-ui',
                    template: "<div\n  *ngIf=\"flyout && node?.children.length > 1\"\n  class=\"back is-open\"\n  (click)=\"back()\"\n>\n  <h5>\n    <cx-icon [type]=\"iconType.CARET_LEFT\"></cx-icon>\n    {{ 'common.back' | cxTranslate }}\n  </h5>\n</div>\n\n<ng-container *ngFor=\"let child of node?.children\">\n  <ng-container *ngTemplateOutlet=\"nav; context: { node: child }\">\n  </ng-container>\n</ng-container>\n\n<!-- we generate links in a recursive manner -->\n<ng-template #nav let-node=\"node\">\n  <nav\n    tabindex=\"0\"\n    (click)=\"toggleOpen($event)\"\n    (mouseenter)=\"onMouseEnter($event)\"\n  >\n    <cx-generic-link\n      *ngIf=\"\n        node.url && (!node.children || node.children?.length === 0);\n        else heading\n      \"\n      [url]=\"node.url\"\n      [target]=\"node.target\"\n    >\n      {{ node.title }}\n      <cx-icon\n        *ngIf=\"flyout && node.children?.length > 0\"\n        [type]=\"iconType.CARET_DOWN\"\n      ></cx-icon>\n    </cx-generic-link>\n\n    <ng-template #heading>\n      <h5 [attr.aria-label]=\"node.title\">\n        {{ node.title }}\n        <cx-icon\n          *ngIf=\"flyout && node.children?.length > 0\"\n          [type]=\"iconType.CARET_DOWN\"\n        ></cx-icon>\n      </h5>\n    </ng-template>\n\n    <!-- we add a wrapper to allow for better layout handling in CSS -->\n    <div class=\"wrapper\" *ngIf=\"node.children?.length > 0\">\n      <cx-generic-link\n        *ngIf=\"node.url\"\n        [url]=\"node.url\"\n        [target]=\"node.target\"\n        class=\"all\"\n      >\n        {{ 'navigation.shopAll' | cxTranslate: { navNode: node.title } }}\n      </cx-generic-link>\n      <div\n        class=\"childs\"\n        [attr.depth]=\"getDepth(node)\"\n        [attr.wrap-after]=\"node.children?.length > wrapAfter ? wrapAfter : null\"\n        [attr.columns]=\"getColumnCount(node.children?.length)\"\n      >\n        <ng-container *ngFor=\"let child of node.children\">\n          <ng-container *ngTemplateOutlet=\"nav; context: { node: child }\">\n          </ng-container>\n        </ng-container>\n      </div>\n    </div>\n  </nav>\n</ng-template>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NavigationUIComponent.ctorParameters = function () { return [
        { type: Router },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    NavigationUIComponent.propDecorators = {
        node: [{ type: Input }],
        wrapAfter: [{ type: Input }],
        allowAlignToRight: [{ type: Input }],
        flyout: [{ type: Input }, { type: HostBinding, args: ['class.flyout',] }],
        isOpen: [{ type: Input }, { type: HostBinding, args: ['class.is-open',] }],
        onResize: [{ type: HostListener, args: ['window:resize',] }]
    };
    return NavigationUIComponent;
}());
export { NavigationUIComponent };
if (false) {
    /**
     * The navigation node to render.
     * @type {?}
     */
    NavigationUIComponent.prototype.node;
    /**
     * The number of child nodes that must be wrapped.
     * @type {?}
     */
    NavigationUIComponent.prototype.wrapAfter;
    /** @type {?} */
    NavigationUIComponent.prototype.allowAlignToRight;
    /**
     * the icon type that will be used for navigation nodes
     * with children.
     * @type {?}
     */
    NavigationUIComponent.prototype.iconType;
    /**
     * Indicates whether the navigation should support flyout.
     * If flyout is set to true, the
     * nested child navitation nodes will only appear on hover or focus.
     * @type {?}
     */
    NavigationUIComponent.prototype.flyout;
    /** @type {?} */
    NavigationUIComponent.prototype.isOpen;
    /**
     * @type {?}
     * @private
     */
    NavigationUIComponent.prototype.openNodes;
    /**
     * @type {?}
     * @private
     */
    NavigationUIComponent.prototype.subscriptions;
    /**
     * @type {?}
     * @private
     */
    NavigationUIComponent.prototype.resize;
    /**
     * @type {?}
     * @private
     */
    NavigationUIComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    NavigationUIComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NavigationUIComponent.prototype.elemRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi11aS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24vbmF2aWdhdGlvbi11aS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxZQUFZLEVBQ1osS0FBSyxFQUVMLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHbEQ7SUF5Q0UsK0JBQ1UsTUFBYyxFQUNkLFFBQW1CLEVBQ25CLE9BQW1CO1FBSDdCLGlCQWVDO1FBZFMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQTdCcEIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDOzs7OztRQU1uQyxhQUFRLEdBQUcsU0FBUyxDQUFDOzs7Ozs7UUFPaUIsV0FBTSxHQUFHLElBQUksQ0FBQztRQUViLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFFOUMsY0FBUyxHQUFrQixFQUFFLENBQUM7UUFDOUIsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25DLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBWWxDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUNwQixJQUFJLENBQUMsTUFB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LEdBQUcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7O2dCQWxLRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsZ2xFQUE2QztvQkFDN0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQVZ1QixNQUFNO2dCQUY1QixTQUFTO2dCQU5ULFVBQVU7Ozt1QkF1QlQsS0FBSzs0QkFLTCxLQUFLO29DQUNMLEtBQUs7eUJBYUwsS0FBSyxZQUFJLFdBQVcsU0FBQyxjQUFjO3lCQUVuQyxLQUFLLFlBQUksV0FBVyxTQUFDLGVBQWU7MkJBTXBDLFlBQVksU0FBQyxlQUFlOztJQStIL0IsNEJBQUM7Q0FBQSxBQW5LRCxJQW1LQztTQTlKWSxxQkFBcUI7Ozs7OztJQUloQyxxQ0FBOEI7Ozs7O0lBSzlCLDBDQUEyQjs7SUFDM0Isa0RBQW1DOzs7Ozs7SUFNbkMseUNBQXFCOzs7Ozs7O0lBT3JCLHVDQUFvRDs7SUFFcEQsdUNBQXNEOzs7OztJQUV0RCwwQ0FBc0M7Ozs7O0lBQ3RDLDhDQUEyQzs7Ozs7SUFDM0MsdUNBQW9DOzs7OztJQVFsQyx1Q0FBc0I7Ozs7O0lBQ3RCLHlDQUEyQjs7Ozs7SUFDM0Isd0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi9taXNjL2ljb24vaW5kZXgnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbk5vZGUgfSBmcm9tICcuL25hdmlnYXRpb24tbm9kZS5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW5hdmlnYXRpb24tdWknLFxuICB0ZW1wbGF0ZVVybDogJy4vbmF2aWdhdGlvbi11aS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uVUlDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogVGhlIG5hdmlnYXRpb24gbm9kZSB0byByZW5kZXIuXG4gICAqL1xuICBASW5wdXQoKSBub2RlOiBOYXZpZ2F0aW9uTm9kZTtcblxuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBjaGlsZCBub2RlcyB0aGF0IG11c3QgYmUgd3JhcHBlZC5cbiAgICovXG4gIEBJbnB1dCgpIHdyYXBBZnRlcjogbnVtYmVyO1xuICBASW5wdXQoKSBhbGxvd0FsaWduVG9SaWdodCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiB0aGUgaWNvbiB0eXBlIHRoYXQgd2lsbCBiZSB1c2VkIGZvciBuYXZpZ2F0aW9uIG5vZGVzXG4gICAqIHdpdGggY2hpbGRyZW4uXG4gICAqL1xuICBpY29uVHlwZSA9IElDT05fVFlQRTtcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIG5hdmlnYXRpb24gc2hvdWxkIHN1cHBvcnQgZmx5b3V0LlxuICAgKiBJZiBmbHlvdXQgaXMgc2V0IHRvIHRydWUsIHRoZVxuICAgKiBuZXN0ZWQgY2hpbGQgbmF2aXRhdGlvbiBub2RlcyB3aWxsIG9ubHkgYXBwZWFyIG9uIGhvdmVyIG9yIGZvY3VzLlxuICAgKi9cbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5mbHlvdXQnKSBmbHlvdXQgPSB0cnVlO1xuXG4gIEBJbnB1dCgpIEBIb3N0QmluZGluZygnY2xhc3MuaXMtb3BlbicpIGlzT3BlbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgb3Blbk5vZGVzOiBIVE1MRWxlbWVudFtdID0gW107XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9ucyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgcHJpdmF0ZSByZXNpemUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScpXG4gIG9uUmVzaXplKCkge1xuICAgIHRoaXMucmVzaXplLm5leHQoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWxlbVJlZjogRWxlbWVudFJlZlxuICApIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKFxuICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzXG4gICAgICAgIC5waXBlKGZpbHRlcihldmVudCA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2xlYXIoKSlcbiAgICApO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoXG4gICAgICB0aGlzLnJlc2l6ZS5waXBlKGRlYm91bmNlVGltZSg1MCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWxpZ25XcmFwcGVyc1RvUmlnaHRJZlN0aWNrT3V0KCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICB0b2dnbGVPcGVuKGV2ZW50OiBVSUV2ZW50KTogdm9pZCB7XG4gICAgY29uc3Qgbm9kZSA9IDxIVE1MRWxlbWVudD5ldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIGlmICh0aGlzLm9wZW5Ob2Rlcy5pbmNsdWRlcyhub2RlKSkge1xuICAgICAgdGhpcy5vcGVuTm9kZXMgPSB0aGlzLm9wZW5Ob2Rlcy5maWx0ZXIobiA9PiBuICE9PSBub2RlKTtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3Mobm9kZSwgJ2lzLW9wZW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGVuTm9kZXMucHVzaChub2RlKTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXMoKTtcblxuICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgYmFjaygpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKFxuICAgICAgdGhpcy5vcGVuTm9kZXNbdGhpcy5vcGVuTm9kZXMubGVuZ3RoIC0gMV0sXG4gICAgICAnaXMtb3BlbidcbiAgICApO1xuICAgIHRoaXMub3Blbk5vZGVzLnBvcCgpO1xuICAgIHRoaXMudXBkYXRlQ2xhc3NlcygpO1xuICB9XG5cbiAgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5vcGVuTm9kZXMgPSBbXTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXMoKTtcbiAgfVxuXG4gIG9uTW91c2VFbnRlcihldmVudDogTW91c2VFdmVudCkge1xuICAgIHRoaXMuYWxpZ25XcmFwcGVyVG9SaWdodElmU3RpY2tPdXQoPEhUTUxFbGVtZW50PmV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgIHRoaXMuZm9jdXNBZnRlclByZXZpb3VzQ2xpY2tlZChldmVudCk7XG4gIH1cblxuICBnZXREZXB0aChub2RlOiBOYXZpZ2F0aW9uTm9kZSwgZGVwdGggPSAwKTogbnVtYmVyIHtcbiAgICBpZiAobm9kZS5jaGlsZHJlbiAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBNYXRoLm1heCguLi5ub2RlLmNoaWxkcmVuLm1hcChuID0+IHRoaXMuZ2V0RGVwdGgobiwgZGVwdGggKyAxKSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZGVwdGg7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q29sdW1uQ291bnQobGVuZ3RoOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKGxlbmd0aCAvICh0aGlzLndyYXBBZnRlciB8fCBsZW5ndGgpKTtcbiAgfVxuXG4gIGZvY3VzQWZ0ZXJQcmV2aW91c0NsaWNrZWQoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQ6IEhUTUxFbGVtZW50ID0gPEhUTUxFbGVtZW50PihcbiAgICAgIChldmVudC50YXJnZXQgfHwgZXZlbnQucmVsYXRlZFRhcmdldClcbiAgICApO1xuICAgIGlmIChcbiAgICAgIHRhcmdldC5vd25lckRvY3VtZW50LmFjdGl2ZUVsZW1lbnQubWF0Y2hlcygnbmF2W3RhYmluZGV4XScpICYmXG4gICAgICB0YXJnZXQucGFyZW50RWxlbWVudC5tYXRjaGVzKCcuZmx5b3V0JylcbiAgICApIHtcbiAgICAgIHRhcmdldC5mb2N1cygpO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0Lm93bmVyRG9jdW1lbnQ7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb25zKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbnMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFsaWduV3JhcHBlclRvUmlnaHRJZlN0aWNrT3V0KG5vZGU6IEhUTUxFbGVtZW50KSB7XG4gICAgaWYgKHRoaXMuYWxsb3dBbGlnblRvUmlnaHQpIHtcbiAgICAgIGNvbnN0IHdyYXBwZXIgPSA8SFRNTEVsZW1lbnQ+bm9kZS5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpO1xuICAgICAgY29uc3QgbmF2QmFyID0gPEhUTUxFbGVtZW50PnRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgaWYgKHdyYXBwZXIpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh3cmFwcGVyLCAnbWFyZ2luLWxlZnQnKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHdyYXBwZXIub2Zmc2V0TGVmdCArIHdyYXBwZXIub2Zmc2V0V2lkdGggPlxuICAgICAgICAgIG5hdkJhci5vZmZzZXRMZWZ0ICsgbmF2QmFyLm9mZnNldFdpZHRoXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgICAgICB3cmFwcGVyLFxuICAgICAgICAgICAgJ21hcmdpbi1sZWZ0JyxcbiAgICAgICAgICAgIGAke25vZGUub2Zmc2V0V2lkdGggLSB3cmFwcGVyLm9mZnNldFdpZHRofXB4YFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFsaWduV3JhcHBlcnNUb1JpZ2h0SWZTdGlja091dCgpIHtcbiAgICBjb25zdCBuYXZzID0gPEhUTUxDb2xsZWN0aW9uPnRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXM7XG4gICAgQXJyYXkuZnJvbShuYXZzKVxuICAgICAgLmZpbHRlcihub2RlID0+IG5vZGUudGFnTmFtZSA9PT0gJ05BVicpXG4gICAgICAuZm9yRWFjaChuYXYgPT4gdGhpcy5hbGlnbldyYXBwZXJUb1JpZ2h0SWZTdGlja091dCg8SFRNTEVsZW1lbnQ+bmF2KSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUNsYXNzZXMoKTogdm9pZCB7XG4gICAgdGhpcy5vcGVuTm9kZXMuZm9yRWFjaCgobm9kZSwgaSkgPT4ge1xuICAgICAgaWYgKGkgKyAxIDwgdGhpcy5vcGVuTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3Mobm9kZSwgJ2lzLW9wZW5lZCcpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKG5vZGUsICdpcy1vcGVuJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKG5vZGUsICdpcy1vcGVuZWQnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhub2RlLCAnaXMtb3BlbicpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5pc09wZW4gPSB0aGlzLm9wZW5Ob2Rlcy5sZW5ndGggPiAwO1xuICB9XG59XG4iXX0=