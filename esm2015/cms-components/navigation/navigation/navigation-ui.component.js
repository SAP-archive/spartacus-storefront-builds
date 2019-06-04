/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, HostBinding, Input, Renderer2, } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ICON_TYPE } from '../../misc/icon/index';
export class NavigationUIComponent {
    /**
     * @param {?} router
     * @param {?} renderer
     */
    constructor(router, renderer) {
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
        event => event instanceof NavigationEnd)))
            .subscribe((/**
         * @return {?}
         */
        () => this.clear()));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    toggleOpen(event) {
        if (this.openNodes.includes((/** @type {?} */ (event.currentTarget)))) {
            this.openNodes = this.openNodes.filter((/**
             * @param {?} n
             * @return {?}
             */
            n => n !== event.currentTarget));
            this.renderer.removeClass((/** @type {?} */ (event.currentTarget)), 'is-open');
        }
        else {
            this.openNodes.push((/** @type {?} */ (event.currentTarget)));
        }
        this.updateClasses();
        event.stopImmediatePropagation();
        event.stopPropagation();
    }
    /**
     * @return {?}
     */
    back() {
        this.renderer.removeClass(this.openNodes[this.openNodes.length - 1], 'is-open');
        this.openNodes.pop();
        this.updateClasses();
    }
    /**
     * @return {?}
     */
    clear() {
        this.openNodes = [];
        this.updateClasses();
    }
    /**
     * @private
     * @return {?}
     */
    updateClasses() {
        this.openNodes.forEach((/**
         * @param {?} node
         * @param {?} i
         * @return {?}
         */
        (node, i) => {
            if (i + 1 < this.openNodes.length) {
                this.renderer.addClass(node, 'is-opened');
                this.renderer.removeClass(node, 'is-open');
            }
            else {
                this.renderer.removeClass(node, 'is-opened');
                this.renderer.addClass(node, 'is-open');
            }
        }));
        this.isOpen = this.openNodes.length > 0;
    }
    /**
     * @param {?} node
     * @param {?=} depth
     * @return {?}
     */
    getDepth(node, depth = 0) {
        if (node.children && node.children.length > 0) {
            return Math.max(...node.children.map((/**
             * @param {?} n
             * @return {?}
             */
            n => this.getDepth(n, depth + 1))));
        }
        else {
            return depth;
        }
    }
}
NavigationUIComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-navigation-ui',
                template: "<div\n  *ngIf=\"flyout && node?.children.length > 1\"\n  class=\"back is-open\"\n  (click)=\"back()\"\n>\n  <h5>\n    <cx-icon [type]=\"iconType.CARET_LEFT\"></cx-icon>\n    {{ 'common.back' | cxTranslate }}\n  </h5>\n</div>\n\n<ng-container *ngFor=\"let child of node?.children\">\n  <ng-container *ngTemplateOutlet=\"nav; context: { node: child }\">\n  </ng-container>\n</ng-container>\n\n<!-- we generate links in a recursive manner -->\n<ng-template #nav let-node=\"node\">\n  <nav tabindex=\"0\" (click)=\"toggleOpen($event)\">\n    <cx-generic-link\n      *ngIf=\"\n        node.url && (!node.children || node.children?.length === 0);\n        else heading\n      \"\n      [url]=\"node.url\"\n    >\n      {{ node.title }}\n      <cx-icon\n        *ngIf=\"flyout && node.children?.length > 0\"\n        [type]=\"iconType.CARET_DOWN\"\n      ></cx-icon>\n    </cx-generic-link>\n\n    <ng-template #heading>\n      <h5 [attr.aria-label]=\"node.title\">\n        {{ node.title }}\n        <cx-icon\n          *ngIf=\"flyout && node.children?.length > 0\"\n          [type]=\"iconType.CARET_DOWN\"\n        ></cx-icon>\n      </h5>\n    </ng-template>\n\n    <!-- we add a wrapper to allow for better layout handling in CSS -->\n    <div class=\"wrapper\" *ngIf=\"node.children?.length > 0\">\n      <cx-generic-link *ngIf=\"node.url\" [url]=\"node.url\" class=\"all\">\n        {{ 'navigation.shopAll' | cxTranslate: { navNode: node.title } }}\n      </cx-generic-link>\n\n      <div class=\"childs\" [attr.depth]=\"getDepth(node)\">\n        <ng-container *ngFor=\"let child of node.children\">\n          <ng-container *ngTemplateOutlet=\"nav; context: { node: child }\">\n          </ng-container>\n        </ng-container>\n      </div>\n    </div>\n  </nav>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NavigationUIComponent.ctorParameters = () => [
    { type: Router },
    { type: Renderer2 }
];
NavigationUIComponent.propDecorators = {
    node: [{ type: Input }],
    flyout: [{ type: Input }, { type: HostBinding, args: ['class.flyout',] }],
    isOpen: [{ type: Input }, { type: HostBinding, args: ['class.is-open',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi11aS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24vbmF2aWdhdGlvbi11aS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFdBQVcsRUFDWCxLQUFLLEVBQ0wsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQVFsRCxNQUFNLE9BQU8scUJBQXFCOzs7OztJQXVCaEMsWUFBb0IsTUFBYyxFQUFVLFFBQW1CO1FBQTNDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXOzs7OztRQWIvRCxhQUFRLEdBQUcsU0FBUyxDQUFDOzs7Ozs7UUFPaUIsV0FBTSxHQUFHLElBQUksQ0FBQztRQUViLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFFOUMsY0FBUyxHQUFrQixFQUFFLENBQUM7UUFHcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO2FBQ2YsSUFBSSxDQUFDLE1BQU07Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssWUFBWSxhQUFhLEVBQUMsQ0FBQzthQUNyRCxTQUFTOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUMsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxLQUFjO1FBQ3ZCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsbUJBQWEsS0FBSyxDQUFDLGFB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Ozs7O0lBRXRELDBDQUFzQzs7Ozs7SUFFMUIsdUNBQXNCOzs7OztJQUFFLHlDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi9taXNjL2ljb24vaW5kZXgnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbk5vZGUgfSBmcm9tICcuL25hdmlnYXRpb24tbm9kZS5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW5hdmlnYXRpb24tdWknLFxuICB0ZW1wbGF0ZVVybDogJy4vbmF2aWdhdGlvbi11aS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uVUlDb21wb25lbnQge1xuICAvKipcbiAgICogVGhlIG5hdmlnYXRpb24gbm9kZSB0byByZW5kZXIuXG4gICAqL1xuICBASW5wdXQoKSBub2RlOiBOYXZpZ2F0aW9uTm9kZTtcblxuICAvKipcbiAgICogdGhlIGljb24gdHlwZSB0aGF0IHdpbGwgYmUgdXNlZCBmb3IgbmF2aWdhdGlvbiBub2Rlc1xuICAgKiB3aXRoIGNoaWxkcmVuLlxuICAgKi9cbiAgaWNvblR5cGUgPSBJQ09OX1RZUEU7XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBuYXZpZ2F0aW9uIHNob3VsZCBzdXBwb3J0IGZseW91dC5cbiAgICogSWYgZmx5b3V0IGlzIHNldCB0byB0cnVlLCB0aGVcbiAgICogbmVzdGVkIGNoaWxkIG5hdml0YXRpb24gbm9kZXMgd2lsbCBvbmx5IGFwcGVhciBvbiBob3ZlciBvciBmb2N1cy5cbiAgICovXG4gIEBJbnB1dCgpIEBIb3N0QmluZGluZygnY2xhc3MuZmx5b3V0JykgZmx5b3V0ID0gdHJ1ZTtcblxuICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2NsYXNzLmlzLW9wZW4nKSBpc09wZW4gPSBmYWxzZTtcblxuICBwcml2YXRlIG9wZW5Ob2RlczogSFRNTEVsZW1lbnRbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMucm91dGVyLmV2ZW50c1xuICAgICAgLnBpcGUoZmlsdGVyKGV2ZW50ID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2xlYXIoKSk7XG4gIH1cblxuICB0b2dnbGVPcGVuKGV2ZW50OiBVSUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3Blbk5vZGVzLmluY2x1ZGVzKDxIVE1MRWxlbWVudD5ldmVudC5jdXJyZW50VGFyZ2V0KSkge1xuICAgICAgdGhpcy5vcGVuTm9kZXMgPSB0aGlzLm9wZW5Ob2Rlcy5maWx0ZXIobiA9PiBuICE9PSBldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoPEhUTUxFbGVtZW50PmV2ZW50LmN1cnJlbnRUYXJnZXQsICdpcy1vcGVuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3Blbk5vZGVzLnB1c2goPEhUTUxFbGVtZW50PmV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlQ2xhc3NlcygpO1xuXG4gICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBiYWNrKCk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoXG4gICAgICB0aGlzLm9wZW5Ob2Rlc1t0aGlzLm9wZW5Ob2Rlcy5sZW5ndGggLSAxXSxcbiAgICAgICdpcy1vcGVuJ1xuICAgICk7XG4gICAgdGhpcy5vcGVuTm9kZXMucG9wKCk7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzKCk7XG4gIH1cblxuICBjbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLm9wZW5Ob2RlcyA9IFtdO1xuICAgIHRoaXMudXBkYXRlQ2xhc3NlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVDbGFzc2VzKCk6IHZvaWQge1xuICAgIHRoaXMub3Blbk5vZGVzLmZvckVhY2goKG5vZGUsIGkpID0+IHtcbiAgICAgIGlmIChpICsgMSA8IHRoaXMub3Blbk5vZGVzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKG5vZGUsICdpcy1vcGVuZWQnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhub2RlLCAnaXMtb3BlbicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhub2RlLCAnaXMtb3BlbmVkJyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3Mobm9kZSwgJ2lzLW9wZW4nKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuaXNPcGVuID0gdGhpcy5vcGVuTm9kZXMubGVuZ3RoID4gMDtcbiAgfVxuXG4gIGdldERlcHRoKG5vZGU6IE5hdmlnYXRpb25Ob2RlLCBkZXB0aCA9IDApOiBudW1iZXIge1xuICAgIGlmIChub2RlLmNoaWxkcmVuICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIE1hdGgubWF4KC4uLm5vZGUuY2hpbGRyZW4ubWFwKG4gPT4gdGhpcy5nZXREZXB0aChuLCBkZXB0aCArIDEpKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkZXB0aDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==