/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input, HostBinding, Renderer2, } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ICON_TYPE } from '../../misc/icon/index';
/** @type {?} */
var COLUMN_SIZE = 10;
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
    // Recursively break nodes with more than COLUMN_SIZE into sub nodes to create columns
    // Recursively break nodes with more than COLUMN_SIZE into sub nodes to create columns
    /**
     * @param {?} node
     * @param {?} columnSize
     * @return {?}
     */
    NavigationUIComponent.prototype.breakNodesIntoColumns = 
    // Recursively break nodes with more than COLUMN_SIZE into sub nodes to create columns
    /**
     * @param {?} node
     * @param {?} columnSize
     * @return {?}
     */
    function (node, columnSize) {
        var _this = this;
        var _a;
        if (node.hasOwnProperty('children')) {
            // Check if too many children for column
            if (node.children.length > columnSize) {
                /** @type {?} */
                var clonedNode = tslib_1.__assign({}, node);
                node.children = [];
                // Break node into subnodes with children length of columnSize
                while (clonedNode.children.length > 0) {
                    /** @type {?} */
                    var newSubNode = { title: null, children: [] };
                    (_a = newSubNode.children).push.apply(_a, tslib_1.__spread(clonedNode.children.splice(0, columnSize)));
                    node.children.push(newSubNode);
                }
            }
            // Recursively do the same with child nodes
            node.children.forEach((/**
             * @param {?} child
             * @return {?}
             */
            function (child) {
                child = _this.breakNodesIntoColumns(child, columnSize);
            }));
        }
        return node;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NavigationUIComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        // Recursively break into columns once node exists on component
        if (changes.node.currentValue) {
            this.node = this.breakNodesIntoColumns(this.node, COLUMN_SIZE);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi11aS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24vbmF2aWdhdGlvbi11aS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBQ0wsV0FBVyxFQUNYLFNBQVMsR0FHVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0lBRzVDLFdBQVcsR0FBRyxFQUFFO0FBRXRCO0lBNEJFLCtCQUFvQixNQUFjLEVBQVUsUUFBbUI7UUFBL0QsaUJBSUM7UUFKbUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7Ozs7O1FBYi9ELGFBQVEsR0FBRyxTQUFTLENBQUM7Ozs7OztRQU9pQixXQUFNLEdBQUcsSUFBSSxDQUFDO1FBRWIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUU5QyxjQUFTLEdBQWtCLEVBQUUsQ0FBQztRQUdwQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07YUFDZixJQUFJLENBQUMsTUFBTTs7OztRQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxZQUFZLGFBQWEsRUFBOUIsQ0FBOEIsRUFBQyxDQUFDO2FBQ3JELFNBQVM7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsS0FBSyxFQUFFLEVBQVosQ0FBWSxFQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCwwQ0FBVTs7OztJQUFWLFVBQVcsS0FBYztRQUN2QixJQUFJLElBQUksQ0FB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SjVCLFNBQVM7Ozt1QkFvQlIsS0FBSzt5QkFhTCxLQUFLLFlBQUksV0FBVyxTQUFDLGNBQWM7eUJBRW5DLEtBQUssWUFBSSxXQUFXLFNBQUMsZUFBZTs7SUErRnZDLDRCQUFDO0NBQUEsQUF2SEQsSUF1SEM7U0FsSFkscUJBQXFCOzs7Ozs7SUFJaEMscUNBQThCOzs7Ozs7SUFNOUIseUNBQXFCOzs7Ozs7O0lBT3JCLHVDQUFvRDs7SUFFcEQsdUNBQXNEOzs7OztJQUV0RCwwQ0FBc0M7Ozs7O0lBRTFCLHVDQUFzQjs7Ozs7SUFBRSx5Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgSG9zdEJpbmRpbmcsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgT25DaGFuZ2VzLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi9taXNjL2ljb24vaW5kZXgnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbk5vZGUgfSBmcm9tICcuL25hdmlnYXRpb24tbm9kZS5tb2RlbCc7XG5cbmNvbnN0IENPTFVNTl9TSVpFID0gMTA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW5hdmlnYXRpb24tdWknLFxuICB0ZW1wbGF0ZVVybDogJy4vbmF2aWdhdGlvbi11aS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uVUlDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICAvKipcbiAgICogVGhlIG5hdmlnYXRpb24gbm9kZSB0byByZW5kZXIuXG4gICAqL1xuICBASW5wdXQoKSBub2RlOiBOYXZpZ2F0aW9uTm9kZTtcblxuICAvKipcbiAgICogdGhlIGljb24gdHlwZSB0aGF0IHdpbGwgYmUgdXNlZCBmb3IgbmF2aWdhdGlvbiBub2Rlc1xuICAgKiB3aXRoIGNoaWxkcmVuLlxuICAgKi9cbiAgaWNvblR5cGUgPSBJQ09OX1RZUEU7XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBuYXZpZ2F0aW9uIHNob3VsZCBzdXBwb3J0IGZseW91dC5cbiAgICogSWYgZmx5b3V0IGlzIHNldCB0byB0cnVlLCB0aGVcbiAgICogbmVzdGVkIGNoaWxkIG5hdml0YXRpb24gbm9kZXMgd2lsbCBvbmx5IGFwcGVhciBvbiBob3ZlciBvciBmb2N1cy5cbiAgICovXG4gIEBJbnB1dCgpIEBIb3N0QmluZGluZygnY2xhc3MuZmx5b3V0JykgZmx5b3V0ID0gdHJ1ZTtcblxuICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2NsYXNzLmlzLW9wZW4nKSBpc09wZW4gPSBmYWxzZTtcblxuICBwcml2YXRlIG9wZW5Ob2RlczogSFRNTEVsZW1lbnRbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMucm91dGVyLmV2ZW50c1xuICAgICAgLnBpcGUoZmlsdGVyKGV2ZW50ID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2xlYXIoKSk7XG4gIH1cblxuICB0b2dnbGVPcGVuKGV2ZW50OiBVSUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3Blbk5vZGVzLmluY2x1ZGVzKDxIVE1MRWxlbWVudD5ldmVudC5jdXJyZW50VGFyZ2V0KSkge1xuICAgICAgdGhpcy5vcGVuTm9kZXMgPSB0aGlzLm9wZW5Ob2Rlcy5maWx0ZXIobiA9PiBuICE9PSBldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoPEhUTUxFbGVtZW50PmV2ZW50LmN1cnJlbnRUYXJnZXQsICdpcy1vcGVuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3Blbk5vZGVzLnB1c2goPEhUTUxFbGVtZW50PmV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlQ2xhc3NlcygpO1xuXG4gICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBiYWNrKCk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoXG4gICAgICB0aGlzLm9wZW5Ob2Rlc1t0aGlzLm9wZW5Ob2Rlcy5sZW5ndGggLSAxXSxcbiAgICAgICdpcy1vcGVuJ1xuICAgICk7XG4gICAgdGhpcy5vcGVuTm9kZXMucG9wKCk7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzKCk7XG4gIH1cblxuICBjbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLm9wZW5Ob2RlcyA9IFtdO1xuICAgIHRoaXMudXBkYXRlQ2xhc3NlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVDbGFzc2VzKCk6IHZvaWQge1xuICAgIHRoaXMub3Blbk5vZGVzLmZvckVhY2goKG5vZGUsIGkpID0+IHtcbiAgICAgIGlmIChpICsgMSA8IHRoaXMub3Blbk5vZGVzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKG5vZGUsICdpcy1vcGVuZWQnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhub2RlLCAnaXMtb3BlbicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhub2RlLCAnaXMtb3BlbmVkJyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3Mobm9kZSwgJ2lzLW9wZW4nKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuaXNPcGVuID0gdGhpcy5vcGVuTm9kZXMubGVuZ3RoID4gMDtcbiAgfVxuXG4gIGdldERlcHRoKG5vZGU6IE5hdmlnYXRpb25Ob2RlLCBkZXB0aCA9IDApOiBudW1iZXIge1xuICAgIGlmIChub2RlLmNoaWxkcmVuICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIE1hdGgubWF4KC4uLm5vZGUuY2hpbGRyZW4ubWFwKG4gPT4gdGhpcy5nZXREZXB0aChuLCBkZXB0aCArIDEpKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkZXB0aDtcbiAgICB9XG4gIH1cblxuICAvLyBSZWN1cnNpdmVseSBicmVhayBub2RlcyB3aXRoIG1vcmUgdGhhbiBDT0xVTU5fU0laRSBpbnRvIHN1YiBub2RlcyB0byBjcmVhdGUgY29sdW1uc1xuICBicmVha05vZGVzSW50b0NvbHVtbnMoXG4gICAgbm9kZTogTmF2aWdhdGlvbk5vZGUsXG4gICAgY29sdW1uU2l6ZTogbnVtYmVyXG4gICk6IE5hdmlnYXRpb25Ob2RlIHtcbiAgICBpZiAobm9kZS5oYXNPd25Qcm9wZXJ0eSgnY2hpbGRyZW4nKSkge1xuICAgICAgLy8gQ2hlY2sgaWYgdG9vIG1hbnkgY2hpbGRyZW4gZm9yIGNvbHVtblxuICAgICAgaWYgKG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gY29sdW1uU2l6ZSkge1xuICAgICAgICBjb25zdCBjbG9uZWROb2RlOiBOYXZpZ2F0aW9uTm9kZSA9IHsgLi4ubm9kZSB9O1xuICAgICAgICBub2RlLmNoaWxkcmVuID0gW107XG4gICAgICAgIC8vIEJyZWFrIG5vZGUgaW50byBzdWJub2RlcyB3aXRoIGNoaWxkcmVuIGxlbmd0aCBvZiBjb2x1bW5TaXplXG4gICAgICAgIHdoaWxlIChjbG9uZWROb2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCBuZXdTdWJOb2RlOiBOYXZpZ2F0aW9uTm9kZSA9IHsgdGl0bGU6IG51bGwsIGNoaWxkcmVuOiBbXSB9O1xuICAgICAgICAgIG5ld1N1Yk5vZGUuY2hpbGRyZW4ucHVzaChcbiAgICAgICAgICAgIC4uLmNsb25lZE5vZGUuY2hpbGRyZW4uc3BsaWNlKDAsIGNvbHVtblNpemUpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBub2RlLmNoaWxkcmVuLnB1c2gobmV3U3ViTm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gUmVjdXJzaXZlbHkgZG8gdGhlIHNhbWUgd2l0aCBjaGlsZCBub2Rlc1xuICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgY2hpbGQgPSB0aGlzLmJyZWFrTm9kZXNJbnRvQ29sdW1ucyhjaGlsZCwgY29sdW1uU2l6ZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAvLyBSZWN1cnNpdmVseSBicmVhayBpbnRvIGNvbHVtbnMgb25jZSBub2RlIGV4aXN0cyBvbiBjb21wb25lbnRcbiAgICBpZiAoY2hhbmdlcy5ub2RlLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgdGhpcy5ub2RlID0gdGhpcy5icmVha05vZGVzSW50b0NvbHVtbnModGhpcy5ub2RlLCBDT0xVTU5fU0laRSk7XG4gICAgfVxuICB9XG59XG4iXX0=