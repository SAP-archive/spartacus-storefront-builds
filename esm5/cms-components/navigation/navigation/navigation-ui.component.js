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
         * nested child navigation nodes will only appear on hover or focus.
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
        if (event.type === 'keydown') {
            event.preventDefault();
        }
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
    NavigationUIComponent.prototype.getTotalDepth = function (node, depth) {
        var _this = this;
        if (depth === void 0) { depth = 0; }
        if (node.children && node.children.length > 0) {
            return Math.max.apply(Math, __spread(node.children.map(function (n) { return _this.getTotalDepth(n, depth + 1); })));
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
            template: "<div\n  *ngIf=\"flyout && node?.children.length > 1\"\n  class=\"back is-open\"\n  (click)=\"back()\"\n>\n  <h5>\n    <cx-icon [type]=\"iconType.CARET_LEFT\"></cx-icon>\n    {{ 'common.back' | cxTranslate }}\n  </h5>\n</div>\n\n<ng-container *ngFor=\"let child of node?.children\">\n  <ng-container *ngTemplateOutlet=\"nav; context: { node: child, depth: 0 }\">\n  </ng-container>\n</ng-container>\n\n<!-- we generate links in a recursive manner -->\n<ng-template #nav let-node=\"node\" let-depth=\"depth\">\n  <nav\n    (click)=\"toggleOpen($event)\"\n    (mouseenter)=\"onMouseEnter($event)\"\n    (keydown.space)=\"toggleOpen($event)\"\n    (keydown.esc)=\"back()\"\n  >\n    <cx-generic-link\n      *ngIf=\"\n        node.url && (!node.children || node.children?.length === 0);\n        else heading\n      \"\n      [url]=\"node.url\"\n      [target]=\"node.target\"\n    >\n      {{ node.title }}\n      <cx-icon\n        *ngIf=\"flyout && node.children?.length > 0\"\n        [type]=\"iconType.CARET_DOWN\"\n      ></cx-icon>\n    </cx-generic-link>\n\n    <ng-template #heading>\n      <h5\n        [attr.aria-label]=\"node.title\"\n        [attr.tabindex]=\"flyout && (depth === 0 || node.url) ? 0 : -1\"\n      >\n        {{ node.title }}\n        <cx-icon\n          *ngIf=\"flyout && node.children?.length > 0\"\n          [type]=\"iconType.CARET_DOWN\"\n        ></cx-icon>\n      </h5>\n    </ng-template>\n\n    <!-- we add a wrapper to allow for better layout handling in CSS -->\n    <div class=\"wrapper\" *ngIf=\"node.children?.length > 0\">\n      <cx-generic-link\n        *ngIf=\"node.url\"\n        [url]=\"node.url\"\n        [target]=\"node.target\"\n        class=\"all\"\n      >\n        {{ 'navigation.shopAll' | cxTranslate: { navNode: node.title } }}\n      </cx-generic-link>\n      <div\n        class=\"childs\"\n        [attr.depth]=\"getTotalDepth(node)\"\n        [attr.wrap-after]=\"node.children?.length > wrapAfter ? wrapAfter : null\"\n        [attr.columns]=\"getColumnCount(node.children?.length)\"\n      >\n        <ng-container *ngFor=\"let child of node.children\">\n          <ng-container\n            *ngTemplateOutlet=\"nav; context: { node: child, depth: depth + 1 }\"\n          >\n          </ng-container>\n        </ng-container>\n      </div>\n    </div>\n  </nav>\n</ng-template>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], NavigationUIComponent);
    return NavigationUIComponent;
}());
export { NavigationUIComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi11aS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24vbmF2aWdhdGlvbi11aS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osV0FBVyxFQUNYLFlBQVksRUFDWixLQUFLLEVBQ0wsU0FBUyxFQUNULFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFRbEQ7SUFvQ0UsK0JBQ1UsTUFBYyxFQUNkLFFBQW1CLEVBQ25CLE9BQW1CO1FBSDdCLGlCQWVDO1FBZFMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQTdCcEIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBRW5DOzs7V0FHRztRQUNILGFBQVEsR0FBRyxTQUFTLENBQUM7UUFFckI7Ozs7V0FJRztRQUNtQyxXQUFNLEdBQUcsSUFBSSxDQUFDO1FBRWIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUU5QyxjQUFTLEdBQWtCLEVBQUUsQ0FBQztRQUM5QixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFZbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxH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QkFDN0MsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2FBQ3pDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUMxQyxDQUFDOztnQkFuSWlCLE1BQU07Z0JBQ0osU0FBUztnQkFDVixVQUFVOztJQW5DcEI7UUFBUixLQUFLLEVBQUU7dURBQXNCO0lBS3JCO1FBQVIsS0FBSyxFQUFFOzREQUFtQjtJQUNsQjtRQUFSLEtBQUssRUFBRTtvRUFBMkI7SUFhRztRQUFyQyxLQUFLLEVBQUUsRUFBRSxXQUFXLENBQUMsY0FBYyxDQUFDO3lEQUFlO0lBRWI7UUFBdEMsS0FBSyxFQUFFLEVBQUUsV0FBVyxDQUFDLGVBQWUsQ0FBQzt5REFBZ0I7SUFPdEQ7UUFEQyxZQUFZLENBQUMsZUFBZSxDQUFDO3lEQUc3QjtJQWxDVSxxQkFBcUI7UUFMakMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QiwreUVBQTZDO1lBQzdDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7T0FDVyxxQkFBcUIsQ0F5S2pDO0lBQUQsNEJBQUM7Q0FBQSxBQXpLRCxJQXlLQztTQXpLWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uL21pc2MvaWNvbi9pbmRleCc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uTm9kZSB9IGZyb20gJy4vbmF2aWdhdGlvbi1ub2RlLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtbmF2aWdhdGlvbi11aScsXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXZpZ2F0aW9uLXVpLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25VSUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBUaGUgbmF2aWdhdGlvbiBub2RlIHRvIHJlbmRlci5cbiAgICovXG4gIEBJbnB1dCgpIG5vZGU6IE5hdmlnYXRpb25Ob2RlO1xuXG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIGNoaWxkIG5vZGVzIHRoYXQgbXVzdCBiZSB3cmFwcGVkLlxuICAgKi9cbiAgQElucHV0KCkgd3JhcEFmdGVyOiBudW1iZXI7XG4gIEBJbnB1dCgpIGFsbG93QWxpZ25Ub1JpZ2h0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIHRoZSBpY29uIHR5cGUgdGhhdCB3aWxsIGJlIHVzZWQgZm9yIG5hdmlnYXRpb24gbm9kZXNcbiAgICogd2l0aCBjaGlsZHJlbi5cbiAgICovXG4gIGljb25UeXBlID0gSUNPTl9UWVBFO1xuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgbmF2aWdhdGlvbiBzaG91bGQgc3VwcG9ydCBmbHlvdXQuXG4gICAqIElmIGZseW91dCBpcyBzZXQgdG8gdHJ1ZSwgdGhlXG4gICAqIG5lc3RlZCBjaGlsZCBuYXZpZ2F0aW9uIG5vZGVzIHdpbGwgb25seSBhcHBlYXIgb24gaG92ZXIgb3IgZm9jdXMuXG4gICAqL1xuICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2NsYXNzLmZseW91dCcpIGZseW91dCA9IHRydWU7XG5cbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5pcy1vcGVuJykgaXNPcGVuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBvcGVuTm9kZXM6IEhUTUxFbGVtZW50W10gPSBbXTtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICBwcml2YXRlIHJlc2l6ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJylcbiAgb25SZXNpemUoKSB7XG4gICAgdGhpcy5yZXNpemUubmV4dCgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbGVtUmVmOiBFbGVtZW50UmVmXG4gICkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoXG4gICAgICB0aGlzLnJvdXRlci5ldmVudHNcbiAgICAgICAgLnBpcGUoZmlsdGVyKChldmVudCkgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSlcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNsZWFyKCkpXG4gICAgKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKFxuICAgICAgdGhpcy5yZXNpemUucGlwZShkZWJvdW5jZVRpbWUoNTApKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmFsaWduV3JhcHBlcnNUb1JpZ2h0SWZTdGlja091dCgpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgdG9nZ2xlT3BlbihldmVudDogVUlFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudC50eXBlID09PSAna2V5ZG93bicpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIGNvbnN0IG5vZGUgPSA8SFRNTEVsZW1lbnQ+ZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICBpZiAodGhpcy5vcGVuTm9kZXMuaW5jbHVkZXMobm9kZSkpIHtcbiAgICAgIGlmIChldmVudC50eXBlID09PSAna2V5ZG93bicpIHtcbiAgICAgICAgdGhpcy5iYWNrKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9wZW5Ob2RlcyA9IHRoaXMub3Blbk5vZGVzLmZpbHRlcigobikgPT4gbiAhPT0gbm9kZSk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3Mobm9kZSwgJ2lzLW9wZW4nKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGVuTm9kZXMucHVzaChub2RlKTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXMoKTtcblxuICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgYmFjaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vcGVuTm9kZXNbdGhpcy5vcGVuTm9kZXMubGVuZ3RoIC0gMV0pIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoXG4gICAgICAgIHRoaXMub3Blbk5vZGVzW3RoaXMub3Blbk5vZGVzLmxlbmd0aCAtIDFdLFxuICAgICAgICAnaXMtb3BlbidcbiAgICAgICk7XG4gICAgICB0aGlzLm9wZW5Ob2Rlcy5wb3AoKTtcbiAgICAgIHRoaXMudXBkYXRlQ2xhc3NlcygpO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMub3Blbk5vZGVzID0gW107XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzKCk7XG4gIH1cblxuICBvbk1vdXNlRW50ZXIoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICB0aGlzLmFsaWduV3JhcHBlclRvUmlnaHRJZlN0aWNrT3V0KDxIVE1MRWxlbWVudD5ldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICB0aGlzLmZvY3VzQWZ0ZXJQcmV2aW91c0NsaWNrZWQoZXZlbnQpO1xuICB9XG5cbiAgZ2V0VG90YWxEZXB0aChub2RlOiBOYXZpZ2F0aW9uTm9kZSwgZGVwdGggPSAwKTogbnVtYmVyIHtcbiAgICBpZiAobm9kZS5jaGlsZHJlbiAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBNYXRoLm1heChcbiAgICAgICAgLi4ubm9kZS5jaGlsZHJlbi5tYXAoKG4pID0+IHRoaXMuZ2V0VG90YWxEZXB0aChuLCBkZXB0aCArIDEpKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRlcHRoO1xuICAgIH1cbiAgfVxuXG4gIGdldENvbHVtbkNvdW50KGxlbmd0aDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChsZW5ndGggLyAodGhpcy53cmFwQWZ0ZXIgfHwgbGVuZ3RoKSk7XG4gIH1cblxuICBmb2N1c0FmdGVyUHJldmlvdXNDbGlja2VkKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0OiBIVE1MRWxlbWVudCA9IDxIVE1MRWxlbWVudD4oXG4gICAgICAoZXZlbnQudGFyZ2V0IHx8IGV2ZW50LnJlbGF0ZWRUYXJnZXQpXG4gICAgKTtcbiAgICBpZiAoXG4gICAgICB0YXJnZXQub3duZXJEb2N1bWVudC5hY3RpdmVFbGVtZW50Lm1hdGNoZXMoJ25hdlt0YWJpbmRleF0nKSAmJlxuICAgICAgdGFyZ2V0LnBhcmVudEVsZW1lbnQubWF0Y2hlcygnLmZseW91dCcpXG4gICAgKSB7XG4gICAgICB0YXJnZXQuZm9jdXMoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldC5vd25lckRvY3VtZW50O1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9ucykge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhbGlnbldyYXBwZXJUb1JpZ2h0SWZTdGlja091dChub2RlOiBIVE1MRWxlbWVudCkge1xuICAgIGlmICh0aGlzLmFsbG93QWxpZ25Ub1JpZ2h0KSB7XG4gICAgICBjb25zdCB3cmFwcGVyID0gPEhUTUxFbGVtZW50Pm5vZGUucXVlcnlTZWxlY3RvcignLndyYXBwZXInKTtcbiAgICAgIGNvbnN0IG5hdkJhciA9IDxIVE1MRWxlbWVudD50aGlzLmVsZW1SZWYubmF0aXZlRWxlbWVudDtcbiAgICAgIGlmICh3cmFwcGVyKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUod3JhcHBlciwgJ21hcmdpbi1sZWZ0Jyk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB3cmFwcGVyLm9mZnNldExlZnQgKyB3cmFwcGVyLm9mZnNldFdpZHRoID5cbiAgICAgICAgICBuYXZCYXIub2Zmc2V0TGVmdCArIG5hdkJhci5vZmZzZXRXaWR0aFxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgICAgd3JhcHBlcixcbiAgICAgICAgICAgICdtYXJnaW4tbGVmdCcsXG4gICAgICAgICAgICBgJHtub2RlLm9mZnNldFdpZHRoIC0gd3JhcHBlci5vZmZzZXRXaWR0aH1weGBcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhbGlnbldyYXBwZXJzVG9SaWdodElmU3RpY2tPdXQoKSB7XG4gICAgY29uc3QgbmF2cyA9IDxIVE1MQ29sbGVjdGlvbj50aGlzLmVsZW1SZWYubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzO1xuICAgIEFycmF5LmZyb20obmF2cylcbiAgICAgIC5maWx0ZXIoKG5vZGUpID0+IG5vZGUudGFnTmFtZSA9PT0gJ05BVicpXG4gICAgICAuZm9yRWFjaCgobmF2KSA9PiB0aGlzLmFsaWduV3JhcHBlclRvUmlnaHRJZlN0aWNrT3V0KDxIVE1MRWxlbWVudD5uYXYpKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQ2xhc3NlcygpOiB2b2lkIHtcbiAgICB0aGlzLm9wZW5Ob2Rlcy5mb3JFYWNoKChub2RlLCBpKSA9PiB7XG4gICAgICBpZiAoaSArIDEgPCB0aGlzLm9wZW5Ob2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhub2RlLCAnaXMtb3BlbmVkJyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3Mobm9kZSwgJ2lzLW9wZW4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3Mobm9kZSwgJ2lzLW9wZW5lZCcpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKG5vZGUsICdpcy1vcGVuJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmlzT3BlbiA9IHRoaXMub3Blbk5vZGVzLmxlbmd0aCA+IDA7XG4gIH1cbn1cbiJdfQ==