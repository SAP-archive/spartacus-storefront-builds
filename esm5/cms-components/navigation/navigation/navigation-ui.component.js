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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi11aS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24vbmF2aWdhdGlvbi11aS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osV0FBVyxFQUNYLFlBQVksRUFDWixLQUFLLEVBQ0wsU0FBUyxFQUNULFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFRbEQ7SUFvQ0UsK0JBQ1UsTUFBYyxFQUNkLFFBQW1CLEVBQ25CLE9BQW1CO1FBSDdCLGlCQWVDO1FBZFMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQTdCcEIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBRW5DOzs7V0FHRztRQUNILGFBQVEsR0FBRyxTQUFTLENBQUM7UUFFckI7Ozs7V0FJRztRQUNtQyxXQUFNLEdBQUcsSUFBSSxDQUFDO1FBRWIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUU5QyxjQUFTLEdBQWtCLEVBQUUsQ0FBQztRQUM5QixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFZbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxH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TSxFQUFFO2dCQUNqQyxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7Z0JBQzFDLEtBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQzthQUM1QztpQkFBTTtnQkFDTCxLQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7Z0JBQzdDLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQzthQUN6QztRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Z0JBdklpQixNQUFNO2dCQUNKLFNBQVM7Z0JBQ1YsVUFBVTs7SUFuQ3BCO1FBQVIsS0FBSyxFQUFFO3VEQUFzQjtJQUtyQjtRQUFSLEtBQUssRUFBRTs0REFBbUI7SUFDbEI7UUFBUixLQUFLLEVBQUU7b0VBQTJCO0lBYUc7UUFBckMsS0FBSyxFQUFFLEVBQUUsV0FBVyxDQUFDLGNBQWMsQ0FBQzt5REFBZTtJQUViO1FBQXRDLEtBQUssRUFBRSxFQUFFLFdBQVcsQ0FBQyxlQUFlLENBQUM7eURBQWdCO0lBT3REO1FBREMsWUFBWSxDQUFDLGVBQWUsQ0FBQzt5REFHN0I7SUFsQ1UscUJBQXFCO1FBTGpDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsdXZFQUE2QztZQUM3QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDO09BQ1cscUJBQXFCLENBNktqQztJQUFELDRCQUFDO0NBQUEsQUE3S0QsSUE2S0M7U0E3S1kscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi9taXNjL2ljb24vaW5kZXgnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbk5vZGUgfSBmcm9tICcuL25hdmlnYXRpb24tbm9kZS5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW5hdmlnYXRpb24tdWknLFxuICB0ZW1wbGF0ZVVybDogJy4vbmF2aWdhdGlvbi11aS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uVUlDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogVGhlIG5hdmlnYXRpb24gbm9kZSB0byByZW5kZXIuXG4gICAqL1xuICBASW5wdXQoKSBub2RlOiBOYXZpZ2F0aW9uTm9kZTtcblxuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBjaGlsZCBub2RlcyB0aGF0IG11c3QgYmUgd3JhcHBlZC5cbiAgICovXG4gIEBJbnB1dCgpIHdyYXBBZnRlcjogbnVtYmVyO1xuICBASW5wdXQoKSBhbGxvd0FsaWduVG9SaWdodCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiB0aGUgaWNvbiB0eXBlIHRoYXQgd2lsbCBiZSB1c2VkIGZvciBuYXZpZ2F0aW9uIG5vZGVzXG4gICAqIHdpdGggY2hpbGRyZW4uXG4gICAqL1xuICBpY29uVHlwZSA9IElDT05fVFlQRTtcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIG5hdmlnYXRpb24gc2hvdWxkIHN1cHBvcnQgZmx5b3V0LlxuICAgKiBJZiBmbHlvdXQgaXMgc2V0IHRvIHRydWUsIHRoZVxuICAgKiBuZXN0ZWQgY2hpbGQgbmF2aXRhdGlvbiBub2RlcyB3aWxsIG9ubHkgYXBwZWFyIG9uIGhvdmVyIG9yIGZvY3VzLlxuICAgKi9cbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5mbHlvdXQnKSBmbHlvdXQgPSB0cnVlO1xuXG4gIEBJbnB1dCgpIEBIb3N0QmluZGluZygnY2xhc3MuaXMtb3BlbicpIGlzT3BlbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgb3Blbk5vZGVzOiBIVE1MRWxlbWVudFtdID0gW107XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9ucyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgcHJpdmF0ZSByZXNpemUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScpXG4gIG9uUmVzaXplKCkge1xuICAgIHRoaXMucmVzaXplLm5leHQoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWxlbVJlZjogRWxlbWVudFJlZlxuICApIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKFxuICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzXG4gICAgICAgIC5waXBlKGZpbHRlcigoZXZlbnQpID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jbGVhcigpKVxuICAgICk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcbiAgICAgIHRoaXMucmVzaXplLnBpcGUoZGVib3VuY2VUaW1lKDUwKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5hbGlnbldyYXBwZXJzVG9SaWdodElmU3RpY2tPdXQoKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGhhbmRsZUZvY3VzKGV2ZW50OiBVSUV2ZW50KTogdm9pZCB7XG4gICAgY29uc3Qgbm9kZSA9IDxIVE1MRWxlbWVudD50aGlzLnJlbmRlcmVyLnBhcmVudE5vZGUoZXZlbnQudGFyZ2V0KTtcbiAgICBpZiAobm9kZS50YWdOYW1lID09PSAnTkFWJykge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhub2RlLCAnaXMtb3BlbicpO1xuICAgICAgdGhpcy5jbGVhcigpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZU9wZW4oZXZlbnQ6IFVJRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG5vZGUgPSA8SFRNTEVsZW1lbnQ+ZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICBpZiAodGhpcy5vcGVuTm9kZXMuaW5jbHVkZXMobm9kZSkpIHtcbiAgICAgIGlmIChldmVudC50eXBlID09PSAna2V5ZG93bicpIHtcbiAgICAgICAgdGhpcy5iYWNrKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9wZW5Ob2RlcyA9IHRoaXMub3Blbk5vZGVzLmZpbHRlcigobikgPT4gbiAhPT0gbm9kZSk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3Mobm9kZSwgJ2lzLW9wZW4nKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGVuTm9kZXMucHVzaChub2RlKTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXMoKTtcblxuICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgYmFjaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vcGVuTm9kZXNbdGhpcy5vcGVuTm9kZXMubGVuZ3RoIC0gMV0pIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoXG4gICAgICAgIHRoaXMub3Blbk5vZGVzW3RoaXMub3Blbk5vZGVzLmxlbmd0aCAtIDFdLFxuICAgICAgICAnaXMtb3BlbidcbiAgICAgICk7XG4gICAgICB0aGlzLm9wZW5Ob2Rlcy5wb3AoKTtcbiAgICAgIHRoaXMudXBkYXRlQ2xhc3NlcygpO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMub3Blbk5vZGVzID0gW107XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzKCk7XG4gIH1cblxuICBvbk1vdXNlRW50ZXIoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICB0aGlzLmFsaWduV3JhcHBlclRvUmlnaHRJZlN0aWNrT3V0KDxIVE1MRWxlbWVudD5ldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICB0aGlzLmZvY3VzQWZ0ZXJQcmV2aW91c0NsaWNrZWQoZXZlbnQpO1xuICB9XG5cbiAgZ2V0RGVwdGgobm9kZTogTmF2aWdhdGlvbk5vZGUsIGRlcHRoID0gMCk6IG51bWJlciB7XG4gICAgaWYgKG5vZGUuY2hpbGRyZW4gJiYgbm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gTWF0aC5tYXgoLi4ubm9kZS5jaGlsZHJlbi5tYXAoKG4pID0+IHRoaXMuZ2V0RGVwdGgobiwgZGVwdGggKyAxKSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZGVwdGg7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q29sdW1uQ291bnQobGVuZ3RoOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKGxlbmd0aCAvICh0aGlzLndyYXBBZnRlciB8fCBsZW5ndGgpKTtcbiAgfVxuXG4gIGZvY3VzQWZ0ZXJQcmV2aW91c0NsaWNrZWQoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQ6IEhUTUxFbGVtZW50ID0gPEhUTUxFbGVtZW50PihcbiAgICAgIChldmVudC50YXJnZXQgfHwgZXZlbnQucmVsYXRlZFRhcmdldClcbiAgICApO1xuICAgIGlmIChcbiAgICAgIHRhcmdldC5vd25lckRvY3VtZW50LmFjdGl2ZUVsZW1lbnQubWF0Y2hlcygnbmF2W3RhYmluZGV4XScpICYmXG4gICAgICB0YXJnZXQucGFyZW50RWxlbWVudC5tYXRjaGVzKCcuZmx5b3V0JylcbiAgICApIHtcbiAgICAgIHRhcmdldC5mb2N1cygpO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0Lm93bmVyRG9jdW1lbnQ7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb25zKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbnMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFsaWduV3JhcHBlclRvUmlnaHRJZlN0aWNrT3V0KG5vZGU6IEhUTUxFbGVtZW50KSB7XG4gICAgaWYgKHRoaXMuYWxsb3dBbGlnblRvUmlnaHQpIHtcbiAgICAgIGNvbnN0IHdyYXBwZXIgPSA8SFRNTEVsZW1lbnQ+bm9kZS5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpO1xuICAgICAgY29uc3QgbmF2QmFyID0gPEhUTUxFbGVtZW50PnRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgaWYgKHdyYXBwZXIpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh3cmFwcGVyLCAnbWFyZ2luLWxlZnQnKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHdyYXBwZXIub2Zmc2V0TGVmdCArIHdyYXBwZXIub2Zmc2V0V2lkdGggPlxuICAgICAgICAgIG5hdkJhci5vZmZzZXRMZWZ0ICsgbmF2QmFyLm9mZnNldFdpZHRoXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgICAgICB3cmFwcGVyLFxuICAgICAgICAgICAgJ21hcmdpbi1sZWZ0JyxcbiAgICAgICAgICAgIGAke25vZGUub2Zmc2V0V2lkdGggLSB3cmFwcGVyLm9mZnNldFdpZHRofXB4YFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFsaWduV3JhcHBlcnNUb1JpZ2h0SWZTdGlja091dCgpIHtcbiAgICBjb25zdCBuYXZzID0gPEhUTUxDb2xsZWN0aW9uPnRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXM7XG4gICAgQXJyYXkuZnJvbShuYXZzKVxuICAgICAgLmZpbHRlcigobm9kZSkgPT4gbm9kZS50YWdOYW1lID09PSAnTkFWJylcbiAgICAgIC5mb3JFYWNoKChuYXYpID0+IHRoaXMuYWxpZ25XcmFwcGVyVG9SaWdodElmU3RpY2tPdXQoPEhUTUxFbGVtZW50Pm5hdikpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVDbGFzc2VzKCk6IHZvaWQge1xuICAgIHRoaXMub3Blbk5vZGVzLmZvckVhY2goKG5vZGUsIGkpID0+IHtcbiAgICAgIGlmIChpICsgMSA8IHRoaXMub3Blbk5vZGVzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKG5vZGUsICdpcy1vcGVuZWQnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhub2RlLCAnaXMtb3BlbicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhub2RlLCAnaXMtb3BlbmVkJyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3Mobm9kZSwgJ2lzLW9wZW4nKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuaXNPcGVuID0gdGhpcy5vcGVuTm9kZXMubGVuZ3RoID4gMDtcbiAgfVxufVxuIl19