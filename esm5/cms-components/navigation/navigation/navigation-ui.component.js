/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, HostBinding, Input, Renderer2, } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ICON_TYPE } from '../../misc/icon/index';
var NavigationUIComponent = /** @class */ (function () {
    function NavigationUIComponent(router, renderer) {
        var _this = this;
        this.router = router;
        this.renderer = renderer;
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
        this.router.events
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event instanceof NavigationEnd; })))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.clear(); }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    NavigationUIComponent.prototype.toggleOpen = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.openNodes.includes((/** @type {?} */ (event.currentTarget)))) {
            this.openNodes = this.openNodes.filter((/**
             * @param {?} n
             * @return {?}
             */
            function (n) { return n !== event.currentTarget; }));
            this.renderer.removeClass((/** @type {?} */ (event.currentTarget)), 'is-open');
        }
        else {
            this.openNodes.push((/** @type {?} */ (event.currentTarget)));
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
    NavigationUIComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-navigation-ui',
                    template: "<div\n  *ngIf=\"flyout && node?.children.length > 1\"\n  class=\"back is-open\"\n  (click)=\"back()\"\n>\n  <h5>\n    <cx-icon [type]=\"iconType.CARET_LEFT\"></cx-icon>\n    {{ 'common.back' | cxTranslate }}\n  </h5>\n</div>\n\n<ng-container *ngFor=\"let child of node?.children\">\n  <ng-container *ngTemplateOutlet=\"nav; context: { node: child }\">\n  </ng-container>\n</ng-container>\n\n<!-- we generate links in a recursive manner -->\n<ng-template #nav let-node=\"node\">\n  <nav tabindex=\"0\" (click)=\"toggleOpen($event)\">\n    <cx-generic-link\n      *ngIf=\"\n        node.url && (!node.children || node.children?.length === 0);\n        else heading\n      \"\n      [url]=\"node.url\"\n    >\n      {{ node.title }}\n      <cx-icon\n        *ngIf=\"flyout && node.children?.length > 0\"\n        [type]=\"iconType.CARET_DOWN\"\n      ></cx-icon>\n    </cx-generic-link>\n\n    <ng-template #heading>\n      <h5 [attr.aria-label]=\"node.title\">\n        {{ node.title }}\n        <cx-icon\n          *ngIf=\"flyout && node.children?.length > 0\"\n          [type]=\"iconType.CARET_DOWN\"\n        ></cx-icon>\n      </h5>\n    </ng-template>\n\n    <!-- we add a wrapper to allow for better layout handling in CSS -->\n    <div class=\"wrapper\" *ngIf=\"node.children?.length > 0\">\n      <cx-generic-link *ngIf=\"node.url\" [url]=\"node.url\" class=\"all\">\n        {{ 'navigation.shopAll' | cxTranslate: { navNode: node.title } }}\n      </cx-generic-link>\n\n      <div class=\"childs\" [attr.depth]=\"getDepth(node)\">\n        <ng-container *ngFor=\"let child of node.children\">\n          <ng-container *ngTemplateOutlet=\"nav; context: { node: child }\">\n          </ng-container>\n        </ng-container>\n      </div>\n    </div>\n  </nav>\n</ng-template>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NavigationUIComponent.ctorParameters = function () { return [
        { type: Router },
        { type: Renderer2 }
    ]; };
    NavigationUIComponent.propDecorators = {
        node: [{ type: Input }],
        flyout: [{ type: Input }, { type: HostBinding, args: ['class.flyout',] }],
        isOpen: [{ type: Input }, { type: HostBinding, args: ['class.is-open',] }]
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
    NavigationUIComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    NavigationUIComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi11aS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24vbmF2aWdhdGlvbi11aS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxXQUFXLEVBQ1gsS0FBSyxFQUNMLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHbEQ7SUE0QkUsK0JBQW9CLE1BQWMsRUFBVSxRQUFtQjtRQUEvRCxpQkFJQztRQUptQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVzs7Ozs7UUFiL0QsYUFBUSxHQUFHLFNBQVMsQ0FBQzs7Ozs7O1FBT2lCLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFFYixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRTlDLGNBQVMsR0FBa0IsRUFBRSxDQUFDO1FBR3BDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTthQUNmLElBQUksQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLFlBQVksYUFBYSxFQUE5QixDQUE4QixFQUFDLENBQUM7YUFDckQsU0FBUzs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxLQUFLLEVBQUUsRUFBWixDQUFZLEVBQUMsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUVELDBDQUFVOzs7O0lBQVYsVUFBVyxLQUFjO1FBQ3ZCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMs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QUFjO3lCQUVuQyxLQUFLLFlBQUksV0FBVyxTQUFDLGVBQWU7O0lBMkR2Qyw0QkFBQztDQUFBLEFBbkZELElBbUZDO1NBOUVZLHFCQUFxQjs7Ozs7O0lBSWhDLHFDQUE4Qjs7Ozs7O0lBTTlCLHlDQUFxQjs7Ozs7OztJQU9yQix1Q0FBb0Q7O0lBRXBELHVDQUFzRDs7Ozs7SUFFdEQsMENBQXNDOzs7OztJQUUxQix1Q0FBc0I7Ozs7O0lBQUUseUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uL21pc2MvaWNvbi9pbmRleCc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uTm9kZSB9IGZyb20gJy4vbmF2aWdhdGlvbi1ub2RlLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtbmF2aWdhdGlvbi11aScsXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXZpZ2F0aW9uLXVpLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25VSUNvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBUaGUgbmF2aWdhdGlvbiBub2RlIHRvIHJlbmRlci5cbiAgICovXG4gIEBJbnB1dCgpIG5vZGU6IE5hdmlnYXRpb25Ob2RlO1xuXG4gIC8qKlxuICAgKiB0aGUgaWNvbiB0eXBlIHRoYXQgd2lsbCBiZSB1c2VkIGZvciBuYXZpZ2F0aW9uIG5vZGVzXG4gICAqIHdpdGggY2hpbGRyZW4uXG4gICAqL1xuICBpY29uVHlwZSA9IElDT05fVFlQRTtcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIG5hdmlnYXRpb24gc2hvdWxkIHN1cHBvcnQgZmx5b3V0LlxuICAgKiBJZiBmbHlvdXQgaXMgc2V0IHRvIHRydWUsIHRoZVxuICAgKiBuZXN0ZWQgY2hpbGQgbmF2aXRhdGlvbiBub2RlcyB3aWxsIG9ubHkgYXBwZWFyIG9uIGhvdmVyIG9yIGZvY3VzLlxuICAgKi9cbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5mbHlvdXQnKSBmbHlvdXQgPSB0cnVlO1xuXG4gIEBJbnB1dCgpIEBIb3N0QmluZGluZygnY2xhc3MuaXMtb3BlbicpIGlzT3BlbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgb3Blbk5vZGVzOiBIVE1MRWxlbWVudFtdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzXG4gICAgICAucGlwZShmaWx0ZXIoZXZlbnQgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jbGVhcigpKTtcbiAgfVxuXG4gIHRvZ2dsZU9wZW4oZXZlbnQ6IFVJRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vcGVuTm9kZXMuaW5jbHVkZXMoPEhUTUxFbGVtZW50PmV2ZW50LmN1cnJlbnRUYXJnZXQpKSB7XG4gICAgICB0aGlzLm9wZW5Ob2RlcyA9IHRoaXMub3Blbk5vZGVzLmZpbHRlcihuID0+IG4gIT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyg8SFRNTEVsZW1lbnQ+ZXZlbnQuY3VycmVudFRhcmdldCwgJ2lzLW9wZW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGVuTm9kZXMucHVzaCg8SFRNTEVsZW1lbnQ+ZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVDbGFzc2VzKCk7XG5cbiAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGJhY2soKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhcbiAgICAgIHRoaXMub3Blbk5vZGVzW3RoaXMub3Blbk5vZGVzLmxlbmd0aCAtIDFdLFxuICAgICAgJ2lzLW9wZW4nXG4gICAgKTtcbiAgICB0aGlzLm9wZW5Ob2Rlcy5wb3AoKTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXMoKTtcbiAgfVxuXG4gIGNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMub3Blbk5vZGVzID0gW107XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzKCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUNsYXNzZXMoKTogdm9pZCB7XG4gICAgdGhpcy5vcGVuTm9kZXMuZm9yRWFjaCgobm9kZSwgaSkgPT4ge1xuICAgICAgaWYgKGkgKyAxIDwgdGhpcy5vcGVuTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3Mobm9kZSwgJ2lzLW9wZW5lZCcpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKG5vZGUsICdpcy1vcGVuJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKG5vZGUsICdpcy1vcGVuZWQnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhub2RlLCAnaXMtb3BlbicpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5pc09wZW4gPSB0aGlzLm9wZW5Ob2Rlcy5sZW5ndGggPiAwO1xuICB9XG5cbiAgZ2V0RGVwdGgobm9kZTogTmF2aWdhdGlvbk5vZGUsIGRlcHRoID0gMCk6IG51bWJlciB7XG4gICAgaWYgKG5vZGUuY2hpbGRyZW4gJiYgbm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gTWF0aC5tYXgoLi4ubm9kZS5jaGlsZHJlbi5tYXAobiA9PiB0aGlzLmdldERlcHRoKG4sIGRlcHRoICsgMSkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRlcHRoO1xuICAgIH1cbiAgfVxufVxuIl19