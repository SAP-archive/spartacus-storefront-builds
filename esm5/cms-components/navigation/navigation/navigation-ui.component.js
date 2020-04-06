import { __decorate, __read, __spread } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnDestroy, Renderer2, } from '@angular/core';
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
            .pipe(filter(function (event) { return event instanceof NavigationEnd; }))
            .subscribe(function () { return _this.clear(); }));
        this.subscriptions.add(this.resize.pipe(debounceTime(50)).subscribe(function () {
            _this.alignWrappersToRightIfStickOut();
        }));
    }
    NavigationUIComponent.prototype.onResize = function () {
        this.resize.next();
    };
    NavigationUIComponent.prototype.handleFocus = function (event) {
        var node = this.renderer.parentNode(event.target);
        if (node.tagName === 'NAV') {
            this.renderer.removeClass(node, 'is-open');
            this.clear();
        }
    };
    NavigationUIComponent.prototype.toggleOpen = function (event) {
        event.preventDefault();
        var node = event.currentTarget;
        if (this.openNodes.includes(node)) {
            if (event.type === 'keydown') {
                this.back();
            }
            else {
                this.openNodes = this.openNodes.filter(function (n) { return n !== node; });
                this.renderer.removeClass(node, 'is-open');
            }
        }
        else {
            this.openNodes.push(node);
        }
        this.updateClasses();
        event.stopImmediatePropagation();
        event.stopPropagation();
    };
    NavigationUIComponent.prototype.back = function () {
        if (this.openNodes[this.openNodes.length - 1]) {
            this.renderer.removeClass(this.openNodes[this.openNodes.length - 1], 'is-open');
            this.openNodes.pop();
            this.updateClasses();
        }
    };
    NavigationUIComponent.prototype.clear = function () {
        this.openNodes = [];
        this.updateClasses();
    };
    NavigationUIComponent.prototype.onMouseEnter = function (event) {
        this.alignWrapperToRightIfStickOut(event.currentTarget);
        this.focusAfterPreviousClicked(event);
    };
    NavigationUIComponent.prototype.getDepth = function (node, depth) {
        var _this = this;
        if (depth === void 0) { depth = 0; }
        if (node.children && node.children.length > 0) {
            return Math.max.apply(Math, __spread(node.children.map(function (n) { return _this.getDepth(n, depth + 1); })));
        }
        else {
            return depth;
        }
    };
    NavigationUIComponent.prototype.getColumnCount = function (length) {
        return Math.round(length / (this.wrapAfter || length));
    };
    NavigationUIComponent.prototype.focusAfterPreviousClicked = function (event) {
        var target = ((event.target || event.relatedTarget));
        if (target.ownerDocument.activeElement.matches('nav[tabindex]') &&
            target.parentElement.matches('.flyout')) {
            target.focus();
        }
        return target.ownerDocument;
    };
    NavigationUIComponent.prototype.ngOnDestroy = function () {
        if (this.subscriptions) {
            this.subscriptions.unsubscribe();
        }
    };
    NavigationUIComponent.prototype.alignWrapperToRightIfStickOut = function (node) {
        if (this.allowAlignToRight) {
            var wrapper = node.querySelector('.wrapper');
            var navBar = this.elemRef.nativeElement;
            if (wrapper) {
                this.renderer.removeStyle(wrapper, 'margin-left');
                if (wrapper.offsetLeft + wrapper.offsetWidth >
                    navBar.offsetLeft + navBar.offsetWidth) {
                    this.renderer.setStyle(wrapper, 'margin-left', node.offsetWidth - wrapper.offsetWidth + "px");
                }
            }
        }
    };
    NavigationUIComponent.prototype.alignWrappersToRightIfStickOut = function () {
        var _this = this;
        var navs = this.elemRef.nativeElement.childNodes;
        Array.from(navs)
            .filter(function (node) { return node.tagName === 'NAV'; })
            .forEach(function (nav) { return _this.alignWrapperToRightIfStickOut(nav); });
    };
    NavigationUIComponent.prototype.updateClasses = function () {
        var _this = this;
        this.openNodes.forEach(function (node, i) {
            if (i + 1 < _this.openNodes.length) {
                _this.renderer.addClass(node, 'is-opened');
                _this.renderer.removeClass(node, 'is-open');
            }
            else {
                _this.renderer.removeClass(node, 'is-opened');
                _this.renderer.addClass(node, 'is-open');
            }
        });
        this.isOpen = this.openNodes.length > 0;
    };
    NavigationUIComponent.prototype.isTabbable = function (node) {
        return this.flyout && node.children && node.children.length;
    };
    NavigationUIComponent.ctorParameters = function () { return [
        { type: Router },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], NavigationUIComponent.prototype, "node", void 0);
    __decorate([
        Input()
    ], NavigationUIComponent.prototype, "wrapAfter", void 0);
    __decorate([
        Input()
    ], NavigationUIComponent.prototype, "allowAlignToRight", void 0);
    __decorate([
        Input(), HostBinding('class.flyout')
    ], NavigationUIComponent.prototype, "flyout", void 0);
    __decorate([
        Input(), HostBinding('class.is-open')
    ], NavigationUIComponent.prototype, "isOpen", void 0);
    __decorate([
        HostListener('window:resize')
    ], NavigationUIComponent.prototype, "onResize", null);
    NavigationUIComponent = __decorate([
        Component({
            selector: 'cx-navigation-ui',
            template: "<div\n  *ngIf=\"flyout && node?.children.length > 1\"\n  class=\"back is-open\"\n  (click)=\"back()\"\n>\n  <h5>\n    <cx-icon [type]=\"iconType.CARET_LEFT\"></cx-icon>\n    {{ 'common.back' | cxTranslate }}\n  </h5>\n</div>\n\n<ng-container *ngFor=\"let child of node?.children\">\n  <ng-container *ngTemplateOutlet=\"nav; context: { node: child }\">\n  </ng-container>\n</ng-container>\n\n<!-- we generate links in a recursive manner -->\n<ng-template #nav let-node=\"node\">\n  <nav\n    (click)=\"toggleOpen($event)\"\n    (mouseenter)=\"onMouseEnter($event)\"\n    (keydown.space)=\"toggleOpen($event)\"\n    (keydown.esc)=\"back()\"\n    (focusin)=\"handleFocus($event)\"\n  >\n    <cx-generic-link\n      *ngIf=\"\n        node.url && (!node.children || node.children?.length === 0);\n        else heading\n      \"\n      [url]=\"node.url\"\n      [target]=\"node.target\"\n    >\n      {{ node.title }}\n      <cx-icon\n        *ngIf=\"flyout && node.children?.length > 0\"\n        [type]=\"iconType.CARET_DOWN\"\n      ></cx-icon>\n    </cx-generic-link>\n\n    <ng-template #heading>\n      <h5\n        [attr.aria-label]=\"node.title\"\n        [attr.tabindex]=\"flyout && node.url ? 0 : -1\"\n      >\n        {{ node.title }}\n        <cx-icon\n          *ngIf=\"flyout && node.children?.length > 0\"\n          [type]=\"iconType.CARET_DOWN\"\n        ></cx-icon>\n      </h5>\n    </ng-template>\n\n    <!-- we add a wrapper to allow for better layout handling in CSS -->\n    <div class=\"wrapper\" *ngIf=\"node.children?.length > 0\">\n      <cx-generic-link\n        *ngIf=\"node.url\"\n        [url]=\"node.url\"\n        [target]=\"node.target\"\n        class=\"all\"\n      >\n        {{ 'navigation.shopAll' | cxTranslate: { navNode: node.title } }}\n      </cx-generic-link>\n      <div\n        class=\"childs\"\n        [attr.depth]=\"getDepth(node)\"\n        [attr.wrap-after]=\"node.children?.length > wrapAfter ? wrapAfter : null\"\n        [attr.columns]=\"getColumnCount(node.children?.length)\"\n      >\n        <ng-container *ngFor=\"let child of node.children\">\n          <ng-container *ngTemplateOutlet=\"nav; context: { node: child }\">\n          </ng-container>\n        </ng-container>\n      </div>\n    </div>\n  </nav>\n</ng-template>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], NavigationUIComponent);
    return NavigationUIComponent;
}());
export { NavigationUIComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi11aS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24vbmF2aWdhdGlvbi11aS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osV0FBVyxFQUNYLFlBQVksRUFDWixLQUFLLEVBQ0wsU0FBUyxFQUNULFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFRbEQ7SUFvQ0UsK0JBQ1UsTUFBYyxFQUNkLFFBQW1CLEVBQ25CLE9BQW1CO1FBSDdCLGlCQWVDO1FBZFMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQTdCcEIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBRW5DOzs7V0FHRztRQUNILGFBQVEsR0FBRyxTQUFTLENBQUM7UUFFckI7Ozs7V0FJRztRQUNtQyxXQUFNLEdBQUcsSUFBSSxDQUFDO1FBRWIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUU5QyxjQUFTLEdBQWtCLEVBQUUsQ0FBQztRQUM5QixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFZbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxH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LElBaUxDO1NBakxZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vbWlzYy9pY29uL2luZGV4JztcbmltcG9ydCB7IE5hdmlnYXRpb25Ob2RlIH0gZnJvbSAnLi9uYXZpZ2F0aW9uLW5vZGUubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1uYXZpZ2F0aW9uLXVpJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25hdmlnYXRpb24tdWkuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvblVJQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIFRoZSBuYXZpZ2F0aW9uIG5vZGUgdG8gcmVuZGVyLlxuICAgKi9cbiAgQElucHV0KCkgbm9kZTogTmF2aWdhdGlvbk5vZGU7XG5cbiAgLyoqXG4gICAqIFRoZSBudW1iZXIgb2YgY2hpbGQgbm9kZXMgdGhhdCBtdXN0IGJlIHdyYXBwZWQuXG4gICAqL1xuICBASW5wdXQoKSB3cmFwQWZ0ZXI6IG51bWJlcjtcbiAgQElucHV0KCkgYWxsb3dBbGlnblRvUmlnaHQgPSBmYWxzZTtcblxuICAvKipcbiAgICogdGhlIGljb24gdHlwZSB0aGF0IHdpbGwgYmUgdXNlZCBmb3IgbmF2aWdhdGlvbiBub2Rlc1xuICAgKiB3aXRoIGNoaWxkcmVuLlxuICAgKi9cbiAgaWNvblR5cGUgPSBJQ09OX1RZUEU7XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBuYXZpZ2F0aW9uIHNob3VsZCBzdXBwb3J0IGZseW91dC5cbiAgICogSWYgZmx5b3V0IGlzIHNldCB0byB0cnVlLCB0aGVcbiAgICogbmVzdGVkIGNoaWxkIG5hdml0YXRpb24gbm9kZXMgd2lsbCBvbmx5IGFwcGVhciBvbiBob3ZlciBvciBmb2N1cy5cbiAgICovXG4gIEBJbnB1dCgpIEBIb3N0QmluZGluZygnY2xhc3MuZmx5b3V0JykgZmx5b3V0ID0gdHJ1ZTtcblxuICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2NsYXNzLmlzLW9wZW4nKSBpc09wZW4gPSBmYWxzZTtcblxuICBwcml2YXRlIG9wZW5Ob2RlczogSFRNTEVsZW1lbnRbXSA9IFtdO1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbnMgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gIHByaXZhdGUgcmVzaXplID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnKVxuICBvblJlc2l6ZSgpIHtcbiAgICB0aGlzLnJlc2l6ZS5uZXh0KCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGVsZW1SZWY6IEVsZW1lbnRSZWZcbiAgKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcbiAgICAgIHRoaXMucm91dGVyLmV2ZW50c1xuICAgICAgICAucGlwZShmaWx0ZXIoKGV2ZW50KSA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2xlYXIoKSlcbiAgICApO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoXG4gICAgICB0aGlzLnJlc2l6ZS5waXBlKGRlYm91bmNlVGltZSg1MCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWxpZ25XcmFwcGVyc1RvUmlnaHRJZlN0aWNrT3V0KCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBoYW5kbGVGb2N1cyhldmVudDogVUlFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IG5vZGUgPSA8SFRNTEVsZW1lbnQ+dGhpcy5yZW5kZXJlci5wYXJlbnROb2RlKGV2ZW50LnRhcmdldCk7XG4gICAgaWYgKG5vZGUudGFnTmFtZSA9PT0gJ05BVicpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3Mobm9kZSwgJ2lzLW9wZW4nKTtcbiAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVPcGVuKGV2ZW50OiBVSUV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBub2RlID0gPEhUTUxFbGVtZW50PmV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgaWYgKHRoaXMub3Blbk5vZGVzLmluY2x1ZGVzKG5vZGUpKSB7XG4gICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2tleWRvd24nKSB7XG4gICAgICAgIHRoaXMuYmFjaygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vcGVuTm9kZXMgPSB0aGlzLm9wZW5Ob2Rlcy5maWx0ZXIoKG4pID0+IG4gIT09IG5vZGUpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKG5vZGUsICdpcy1vcGVuJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3Blbk5vZGVzLnB1c2gobm9kZSk7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVDbGFzc2VzKCk7XG5cbiAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGJhY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3Blbk5vZGVzW3RoaXMub3Blbk5vZGVzLmxlbmd0aCAtIDFdKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKFxuICAgICAgICB0aGlzLm9wZW5Ob2Rlc1t0aGlzLm9wZW5Ob2Rlcy5sZW5ndGggLSAxXSxcbiAgICAgICAgJ2lzLW9wZW4nXG4gICAgICApO1xuICAgICAgdGhpcy5vcGVuTm9kZXMucG9wKCk7XG4gICAgICB0aGlzLnVwZGF0ZUNsYXNzZXMoKTtcbiAgICB9XG4gIH1cblxuICBjbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLm9wZW5Ob2RlcyA9IFtdO1xuICAgIHRoaXMudXBkYXRlQ2xhc3NlcygpO1xuICB9XG5cbiAgb25Nb3VzZUVudGVyKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgdGhpcy5hbGlnbldyYXBwZXJUb1JpZ2h0SWZTdGlja091dCg8SFRNTEVsZW1lbnQ+ZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgdGhpcy5mb2N1c0FmdGVyUHJldmlvdXNDbGlja2VkKGV2ZW50KTtcbiAgfVxuXG4gIGdldERlcHRoKG5vZGU6IE5hdmlnYXRpb25Ob2RlLCBkZXB0aCA9IDApOiBudW1iZXIge1xuICAgIGlmIChub2RlLmNoaWxkcmVuICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIE1hdGgubWF4KC4uLm5vZGUuY2hpbGRyZW4ubWFwKChuKSA9PiB0aGlzLmdldERlcHRoKG4sIGRlcHRoICsgMSkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRlcHRoO1xuICAgIH1cbiAgfVxuXG4gIGdldENvbHVtbkNvdW50KGxlbmd0aDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChsZW5ndGggLyAodGhpcy53cmFwQWZ0ZXIgfHwgbGVuZ3RoKSk7XG4gIH1cblxuICBmb2N1c0FmdGVyUHJldmlvdXNDbGlja2VkKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0OiBIVE1MRWxlbWVudCA9IDxIVE1MRWxlbWVudD4oXG4gICAgICAoZXZlbnQudGFyZ2V0IHx8IGV2ZW50LnJlbGF0ZWRUYXJnZXQpXG4gICAgKTtcbiAgICBpZiAoXG4gICAgICB0YXJnZXQub3duZXJEb2N1bWVudC5hY3RpdmVFbGVtZW50Lm1hdGNoZXMoJ25hdlt0YWJpbmRleF0nKSAmJlxuICAgICAgdGFyZ2V0LnBhcmVudEVsZW1lbnQubWF0Y2hlcygnLmZseW91dCcpXG4gICAgKSB7XG4gICAgICB0YXJnZXQuZm9jdXMoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldC5vd25lckRvY3VtZW50O1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9ucykge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhbGlnbldyYXBwZXJUb1JpZ2h0SWZTdGlja091dChub2RlOiBIVE1MRWxlbWVudCkge1xuICAgIGlmICh0aGlzLmFsbG93QWxpZ25Ub1JpZ2h0KSB7XG4gICAgICBjb25zdCB3cmFwcGVyID0gPEhUTUxFbGVtZW50Pm5vZGUucXVlcnlTZWxlY3RvcignLndyYXBwZXInKTtcbiAgICAgIGNvbnN0IG5hdkJhciA9IDxIVE1MRWxlbWVudD50aGlzLmVsZW1SZWYubmF0aXZlRWxlbWVudDtcbiAgICAgIGlmICh3cmFwcGVyKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUod3JhcHBlciwgJ21hcmdpbi1sZWZ0Jyk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB3cmFwcGVyLm9mZnNldExlZnQgKyB3cmFwcGVyLm9mZnNldFdpZHRoID5cbiAgICAgICAgICBuYXZCYXIub2Zmc2V0TGVmdCArIG5hdkJhci5vZmZzZXRXaWR0aFxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgICAgd3JhcHBlcixcbiAgICAgICAgICAgICdtYXJnaW4tbGVmdCcsXG4gICAgICAgICAgICBgJHtub2RlLm9mZnNldFdpZHRoIC0gd3JhcHBlci5vZmZzZXRXaWR0aH1weGBcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhbGlnbldyYXBwZXJzVG9SaWdodElmU3RpY2tPdXQoKSB7XG4gICAgY29uc3QgbmF2cyA9IDxIVE1MQ29sbGVjdGlvbj50aGlzLmVsZW1SZWYubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzO1xuICAgIEFycmF5LmZyb20obmF2cylcbiAgICAgIC5maWx0ZXIoKG5vZGUpID0+IG5vZGUudGFnTmFtZSA9PT0gJ05BVicpXG4gICAgICAuZm9yRWFjaCgobmF2KSA9PiB0aGlzLmFsaWduV3JhcHBlclRvUmlnaHRJZlN0aWNrT3V0KDxIVE1MRWxlbWVudD5uYXYpKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQ2xhc3NlcygpOiB2b2lkIHtcbiAgICB0aGlzLm9wZW5Ob2Rlcy5mb3JFYWNoKChub2RlLCBpKSA9PiB7XG4gICAgICBpZiAoaSArIDEgPCB0aGlzLm9wZW5Ob2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhub2RlLCAnaXMtb3BlbmVkJyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3Mobm9kZSwgJ2lzLW9wZW4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3Mobm9kZSwgJ2lzLW9wZW5lZCcpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKG5vZGUsICdpcy1vcGVuJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmlzT3BlbiA9IHRoaXMub3Blbk5vZGVzLmxlbmd0aCA+IDA7XG4gIH1cblxuICBpc1RhYmJhYmxlKG5vZGU6IGFueSkge1xuICAgIHJldHVybiB0aGlzLmZseW91dCAmJiBub2RlLmNoaWxkcmVuICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoO1xuICB9XG59XG4iXX0=