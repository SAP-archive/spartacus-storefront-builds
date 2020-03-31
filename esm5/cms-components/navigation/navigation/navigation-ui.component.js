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
            template: "<div\n  *ngIf=\"flyout && node?.children.length > 1\"\n  class=\"back is-open\"\n  (click)=\"back()\"\n>\n  <h5>\n    <cx-icon [type]=\"iconType.CARET_LEFT\"></cx-icon>\n    {{ 'common.back' | cxTranslate }}\n  </h5>\n</div>\n\n<ng-container *ngFor=\"let child of node?.children\">\n  <ng-container *ngTemplateOutlet=\"nav; context: { node: child }\">\n  </ng-container>\n</ng-container>\n\n<!-- we generate links in a recursive manner -->\n<ng-template #nav let-node=\"node\">\n  <nav\n    (click)=\"toggleOpen($event)\"\n    (mouseenter)=\"onMouseEnter($event)\"\n    (keydown.space)=\"toggleOpen($event)\"\n    (keydown.esc)=\"back()\"\n  >\n    <cx-generic-link\n      *ngIf=\"\n        node.url && (!node.children || node.children?.length === 0);\n        else heading\n      \"\n      [url]=\"node.url\"\n      [target]=\"node.target\"\n    >\n      {{ node.title }}\n      <cx-icon\n        *ngIf=\"flyout && node.children?.length > 0\"\n        [type]=\"iconType.CARET_DOWN\"\n      ></cx-icon>\n    </cx-generic-link>\n\n    <ng-template #heading>\n      <h5\n        [attr.aria-label]=\"node.title\"\n        [attr.tabindex]=\"flyout && node.url ? 0 : -1\"\n      >\n        {{ node.title }}\n        <cx-icon\n          *ngIf=\"flyout && node.children?.length > 0\"\n          [type]=\"iconType.CARET_DOWN\"\n        ></cx-icon>\n      </h5>\n    </ng-template>\n\n    <!-- we add a wrapper to allow for better layout handling in CSS -->\n    <div class=\"wrapper\" *ngIf=\"node.children?.length > 0\">\n      <cx-generic-link\n        *ngIf=\"node.url\"\n        [url]=\"node.url\"\n        [target]=\"node.target\"\n        class=\"all\"\n      >\n        {{ 'navigation.shopAll' | cxTranslate: { navNode: node.title } }}\n      </cx-generic-link>\n      <div\n        class=\"childs\"\n        [attr.depth]=\"getDepth(node)\"\n        [attr.wrap-after]=\"node.children?.length > wrapAfter ? wrapAfter : null\"\n        [attr.columns]=\"getColumnCount(node.children?.length)\"\n      >\n        <ng-container *ngFor=\"let child of node.children\">\n          <ng-container *ngTemplateOutlet=\"nav; context: { node: child }\">\n          </ng-container>\n        </ng-container>\n      </div>\n    </div>\n  </nav>\n</ng-template>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], NavigationUIComponent);
    return NavigationUIComponent;
}());
export { NavigationUIComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi11aS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24vbmF2aWdhdGlvbi11aS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osV0FBVyxFQUNYLFlBQVksRUFDWixLQUFLLEVBQ0wsU0FBUyxFQUNULFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFRbEQ7SUFvQ0UsK0JBQ1UsTUFBYyxFQUNkLFFBQW1CLEVBQ25CLE9BQW1CO1FBSDdCLGlCQWVDO1FBZFMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQTdCcEIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBRW5DOzs7V0FHRztRQUNILGFBQVEsR0FBRyxTQUFTLENBQUM7UUFFckI7Ozs7V0FJRztRQUNtQyxXQUFNLEdBQUcsSUFBSSxDQUFDO1FBRWIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUU5QyxjQUFTLEdBQWtCLEVBQUUsQ0FBQztRQUM5QixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFZbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxH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U0FBUyxDQUFDLENBQUM7YUFDekM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCwwQ0FBVSxHQUFWLFVBQVcsSUFBUztRQUNsQixPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUM5RCxDQUFDOztnQkFuSWlCLE1BQU07Z0JBQ0osU0FBUztnQkFDVixVQUFVOztJQW5DcEI7UUFBUixLQUFLLEVBQUU7dURBQXNCO0lBS3JCO1FBQVIsS0FBSyxFQUFFOzREQUFtQjtJQUNsQjtRQUFSLEtBQUssRUFBRTtvRUFBMkI7SUFhRztRQUFyQyxLQUFLLEVBQUUsRUFBRSxXQUFXLENBQUMsY0FBYyxDQUFDO3lEQUFlO0lBRWI7UUFBdEMsS0FBSyxFQUFFLEVBQUUsV0FBVyxDQUFDLGVBQWUsQ0FBQzt5REFBZ0I7SUFPdEQ7UUFEQyxZQUFZLENBQUMsZUFBZSxDQUFDO3lEQUc3QjtJQWxDVSxxQkFBcUI7UUFMakMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixndEVBQTZDO1lBQzdDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7T0FDVyxxQkFBcUIsQ0F5S2pDO0lBQUQsNEJBQUM7Q0FBQSxBQXpLRCxJQXlLQztTQXpLWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uL21pc2MvaWNvbi9pbmRleCc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uTm9kZSB9IGZyb20gJy4vbmF2aWdhdGlvbi1ub2RlLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtbmF2aWdhdGlvbi11aScsXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXZpZ2F0aW9uLXVpLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25VSUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBUaGUgbmF2aWdhdGlvbiBub2RlIHRvIHJlbmRlci5cbiAgICovXG4gIEBJbnB1dCgpIG5vZGU6IE5hdmlnYXRpb25Ob2RlO1xuXG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIGNoaWxkIG5vZGVzIHRoYXQgbXVzdCBiZSB3cmFwcGVkLlxuICAgKi9cbiAgQElucHV0KCkgd3JhcEFmdGVyOiBudW1iZXI7XG4gIEBJbnB1dCgpIGFsbG93QWxpZ25Ub1JpZ2h0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIHRoZSBpY29uIHR5cGUgdGhhdCB3aWxsIGJlIHVzZWQgZm9yIG5hdmlnYXRpb24gbm9kZXNcbiAgICogd2l0aCBjaGlsZHJlbi5cbiAgICovXG4gIGljb25UeXBlID0gSUNPTl9UWVBFO1xuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgbmF2aWdhdGlvbiBzaG91bGQgc3VwcG9ydCBmbHlvdXQuXG4gICAqIElmIGZseW91dCBpcyBzZXQgdG8gdHJ1ZSwgdGhlXG4gICAqIG5lc3RlZCBjaGlsZCBuYXZpdGF0aW9uIG5vZGVzIHdpbGwgb25seSBhcHBlYXIgb24gaG92ZXIgb3IgZm9jdXMuXG4gICAqL1xuICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2NsYXNzLmZseW91dCcpIGZseW91dCA9IHRydWU7XG5cbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5pcy1vcGVuJykgaXNPcGVuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBvcGVuTm9kZXM6IEhUTUxFbGVtZW50W10gPSBbXTtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICBwcml2YXRlIHJlc2l6ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJylcbiAgb25SZXNpemUoKSB7XG4gICAgdGhpcy5yZXNpemUubmV4dCgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbGVtUmVmOiBFbGVtZW50UmVmXG4gICkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoXG4gICAgICB0aGlzLnJvdXRlci5ldmVudHNcbiAgICAgICAgLnBpcGUoZmlsdGVyKChldmVudCkgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSlcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNsZWFyKCkpXG4gICAgKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKFxuICAgICAgdGhpcy5yZXNpemUucGlwZShkZWJvdW5jZVRpbWUoNTApKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmFsaWduV3JhcHBlcnNUb1JpZ2h0SWZTdGlja091dCgpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgdG9nZ2xlT3BlbihldmVudDogVUlFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3Qgbm9kZSA9IDxIVE1MRWxlbWVudD5ldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIGlmICh0aGlzLm9wZW5Ob2Rlcy5pbmNsdWRlcyhub2RlKSkge1xuICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdrZXlkb3duJykge1xuICAgICAgICB0aGlzLmJhY2soKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub3Blbk5vZGVzID0gdGhpcy5vcGVuTm9kZXMuZmlsdGVyKChuKSA9PiBuICE9PSBub2RlKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhub2RlLCAnaXMtb3BlbicpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wZW5Ob2Rlcy5wdXNoKG5vZGUpO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlQ2xhc3NlcygpO1xuXG4gICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBiYWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm9wZW5Ob2Rlc1t0aGlzLm9wZW5Ob2Rlcy5sZW5ndGggLSAxXSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhcbiAgICAgICAgdGhpcy5vcGVuTm9kZXNbdGhpcy5vcGVuTm9kZXMubGVuZ3RoIC0gMV0sXG4gICAgICAgICdpcy1vcGVuJ1xuICAgICAgKTtcbiAgICAgIHRoaXMub3Blbk5vZGVzLnBvcCgpO1xuICAgICAgdGhpcy51cGRhdGVDbGFzc2VzKCk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5vcGVuTm9kZXMgPSBbXTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXMoKTtcbiAgfVxuXG4gIG9uTW91c2VFbnRlcihldmVudDogTW91c2VFdmVudCkge1xuICAgIHRoaXMuYWxpZ25XcmFwcGVyVG9SaWdodElmU3RpY2tPdXQoPEhUTUxFbGVtZW50PmV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgIHRoaXMuZm9jdXNBZnRlclByZXZpb3VzQ2xpY2tlZChldmVudCk7XG4gIH1cblxuICBnZXREZXB0aChub2RlOiBOYXZpZ2F0aW9uTm9kZSwgZGVwdGggPSAwKTogbnVtYmVyIHtcbiAgICBpZiAobm9kZS5jaGlsZHJlbiAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBNYXRoLm1heCguLi5ub2RlLmNoaWxkcmVuLm1hcCgobikgPT4gdGhpcy5nZXREZXB0aChuLCBkZXB0aCArIDEpKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkZXB0aDtcbiAgICB9XG4gIH1cblxuICBnZXRDb2x1bW5Db3VudChsZW5ndGg6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobGVuZ3RoIC8gKHRoaXMud3JhcEFmdGVyIHx8IGxlbmd0aCkpO1xuICB9XG5cbiAgZm9jdXNBZnRlclByZXZpb3VzQ2xpY2tlZChldmVudDogTW91c2VFdmVudCkge1xuICAgIGNvbnN0IHRhcmdldDogSFRNTEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+KFxuICAgICAgKGV2ZW50LnRhcmdldCB8fCBldmVudC5yZWxhdGVkVGFyZ2V0KVxuICAgICk7XG4gICAgaWYgKFxuICAgICAgdGFyZ2V0Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudC5tYXRjaGVzKCduYXZbdGFiaW5kZXhdJykgJiZcbiAgICAgIHRhcmdldC5wYXJlbnRFbGVtZW50Lm1hdGNoZXMoJy5mbHlvdXQnKVxuICAgICkge1xuICAgICAgdGFyZ2V0LmZvY3VzKCk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQub3duZXJEb2N1bWVudDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbnMpIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWxpZ25XcmFwcGVyVG9SaWdodElmU3RpY2tPdXQobm9kZTogSFRNTEVsZW1lbnQpIHtcbiAgICBpZiAodGhpcy5hbGxvd0FsaWduVG9SaWdodCkge1xuICAgICAgY29uc3Qgd3JhcHBlciA9IDxIVE1MRWxlbWVudD5ub2RlLnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJyk7XG4gICAgICBjb25zdCBuYXZCYXIgPSA8SFRNTEVsZW1lbnQ+dGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICBpZiAod3JhcHBlcikge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHdyYXBwZXIsICdtYXJnaW4tbGVmdCcpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgd3JhcHBlci5vZmZzZXRMZWZ0ICsgd3JhcHBlci5vZmZzZXRXaWR0aCA+XG4gICAgICAgICAgbmF2QmFyLm9mZnNldExlZnQgKyBuYXZCYXIub2Zmc2V0V2lkdGhcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICAgIHdyYXBwZXIsXG4gICAgICAgICAgICAnbWFyZ2luLWxlZnQnLFxuICAgICAgICAgICAgYCR7bm9kZS5vZmZzZXRXaWR0aCAtIHdyYXBwZXIub2Zmc2V0V2lkdGh9cHhgXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWxpZ25XcmFwcGVyc1RvUmlnaHRJZlN0aWNrT3V0KCkge1xuICAgIGNvbnN0IG5hdnMgPSA8SFRNTENvbGxlY3Rpb24+dGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGROb2RlcztcbiAgICBBcnJheS5mcm9tKG5hdnMpXG4gICAgICAuZmlsdGVyKChub2RlKSA9PiBub2RlLnRhZ05hbWUgPT09ICdOQVYnKVxuICAgICAgLmZvckVhY2goKG5hdikgPT4gdGhpcy5hbGlnbldyYXBwZXJUb1JpZ2h0SWZTdGlja091dCg8SFRNTEVsZW1lbnQ+bmF2KSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUNsYXNzZXMoKTogdm9pZCB7XG4gICAgdGhpcy5vcGVuTm9kZXMuZm9yRWFjaCgobm9kZSwgaSkgPT4ge1xuICAgICAgaWYgKGkgKyAxIDwgdGhpcy5vcGVuTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3Mobm9kZSwgJ2lzLW9wZW5lZCcpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKG5vZGUsICdpcy1vcGVuJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKG5vZGUsICdpcy1vcGVuZWQnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhub2RlLCAnaXMtb3BlbicpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5pc09wZW4gPSB0aGlzLm9wZW5Ob2Rlcy5sZW5ndGggPiAwO1xuICB9XG5cbiAgaXNUYWJiYWJsZShub2RlOiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5mbHlvdXQgJiYgbm9kZS5jaGlsZHJlbiAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aDtcbiAgfVxufVxuIl19