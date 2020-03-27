import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnDestroy, Renderer2, } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import { ICON_TYPE } from '../../misc/icon/index';
let NavigationUIComponent = class NavigationUIComponent {
    constructor(router, renderer, elemRef) {
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
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(() => this.clear()));
        this.subscriptions.add(this.resize.pipe(debounceTime(50)).subscribe(() => {
            this.alignWrappersToRightIfStickOut();
        }));
    }
    onResize() {
        this.resize.next();
    }
    toggleOpen(event) {
        event.preventDefault();
        const node = event.currentTarget;
        if (this.openNodes.includes(node)) {
            if (event.type === 'keydown') {
                this.back();
            }
            else {
                this.openNodes = this.openNodes.filter(n => n !== node);
                this.renderer.removeClass(node, 'is-open');
            }
        }
        else {
            this.openNodes.push(node);
        }
        this.updateClasses();
        event.stopImmediatePropagation();
        event.stopPropagation();
    }
    back() {
        if (this.openNodes[this.openNodes.length - 1]) {
            this.renderer.removeClass(this.openNodes[this.openNodes.length - 1], 'is-open');
            this.openNodes.pop();
            this.updateClasses();
        }
    }
    clear() {
        this.openNodes = [];
        this.updateClasses();
    }
    onMouseEnter(event) {
        this.alignWrapperToRightIfStickOut(event.currentTarget);
        this.focusAfterPreviousClicked(event);
    }
    getDepth(node, depth = 0) {
        if (node.children && node.children.length > 0) {
            return Math.max(...node.children.map(n => this.getDepth(n, depth + 1)));
        }
        else {
            return depth;
        }
    }
    getColumnCount(length) {
        return Math.round(length / (this.wrapAfter || length));
    }
    focusAfterPreviousClicked(event) {
        const target = ((event.target || event.relatedTarget));
        if (target.ownerDocument.activeElement.matches('nav[tabindex]') &&
            target.parentElement.matches('.flyout')) {
            target.focus();
        }
        return target.ownerDocument;
    }
    ngOnDestroy() {
        if (this.subscriptions) {
            this.subscriptions.unsubscribe();
        }
    }
    alignWrapperToRightIfStickOut(node) {
        if (this.allowAlignToRight) {
            const wrapper = node.querySelector('.wrapper');
            const navBar = this.elemRef.nativeElement;
            if (wrapper) {
                this.renderer.removeStyle(wrapper, 'margin-left');
                if (wrapper.offsetLeft + wrapper.offsetWidth >
                    navBar.offsetLeft + navBar.offsetWidth) {
                    this.renderer.setStyle(wrapper, 'margin-left', `${node.offsetWidth - wrapper.offsetWidth}px`);
                }
            }
        }
    }
    alignWrappersToRightIfStickOut() {
        const navs = this.elemRef.nativeElement.childNodes;
        Array.from(navs)
            .filter(node => node.tagName === 'NAV')
            .forEach(nav => this.alignWrapperToRightIfStickOut(nav));
    }
    updateClasses() {
        this.openNodes.forEach((node, i) => {
            if (i + 1 < this.openNodes.length) {
                this.renderer.addClass(node, 'is-opened');
                this.renderer.removeClass(node, 'is-open');
            }
            else {
                this.renderer.removeClass(node, 'is-opened');
                this.renderer.addClass(node, 'is-open');
            }
        });
        this.isOpen = this.openNodes.length > 0;
    }
    isTabbable(node) {
        return this.flyout && node.children && node.children.length;
    }
};
NavigationUIComponent.ctorParameters = () => [
    { type: Router },
    { type: Renderer2 },
    { type: ElementRef }
];
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
export { NavigationUIComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi11aS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24vbmF2aWdhdGlvbi11aS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osV0FBVyxFQUNYLFlBQVksRUFDWixLQUFLLEVBQ0wsU0FBUyxFQUNULFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFRbEQsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBcUI7SUFvQ2hDLFlBQ1UsTUFBYyxFQUNkLFFBQW1CLEVBQ25CLE9BQW1CO1FBRm5CLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUE3QnBCLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUVuQzs7O1dBR0c7UUFDSCxhQUFRLEdBQUcsU0FBUyxDQUFDO1FBRXJCOzs7O1dBSUc7UUFDbUMsV0FBTSxHQUFHLElBQUksQ0FBQztRQUViLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFFOUMsY0FBUyxHQUFrQixFQUFFLENBQUM7UUFDOUIsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25DLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBWWxDLElB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QUNsQixPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUM5RCxDQUFDO0NBQ0YsQ0FBQTs7WUFwSW1CLE1BQU07WUFDSixTQUFTO1lBQ1YsVUFBVTs7QUFuQ3BCO0lBQVIsS0FBSyxFQUFFO21EQUFzQjtBQUtyQjtJQUFSLEtBQUssRUFBRTt3REFBbUI7QUFDbEI7SUFBUixLQUFLLEVBQUU7Z0VBQTJCO0FBYUc7SUFBckMsS0FBSyxFQUFFLEVBQUUsV0FBVyxDQUFDLGNBQWMsQ0FBQztxREFBZTtBQUViO0lBQXRDLEtBQUssRUFBRSxFQUFFLFdBQVcsQ0FBQyxlQUFlLENBQUM7cURBQWdCO0FBT3REO0lBREMsWUFBWSxDQUFDLGVBQWUsQ0FBQztxREFHN0I7QUFsQ1UscUJBQXFCO0lBTGpDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsZ3RFQUE2QztRQUM3QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtLQUNoRCxDQUFDO0dBQ1cscUJBQXFCLENBeUtqQztTQXpLWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uL21pc2MvaWNvbi9pbmRleCc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uTm9kZSB9IGZyb20gJy4vbmF2aWdhdGlvbi1ub2RlLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtbmF2aWdhdGlvbi11aScsXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXZpZ2F0aW9uLXVpLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25VSUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBUaGUgbmF2aWdhdGlvbiBub2RlIHRvIHJlbmRlci5cbiAgICovXG4gIEBJbnB1dCgpIG5vZGU6IE5hdmlnYXRpb25Ob2RlO1xuXG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIGNoaWxkIG5vZGVzIHRoYXQgbXVzdCBiZSB3cmFwcGVkLlxuICAgKi9cbiAgQElucHV0KCkgd3JhcEFmdGVyOiBudW1iZXI7XG4gIEBJbnB1dCgpIGFsbG93QWxpZ25Ub1JpZ2h0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIHRoZSBpY29uIHR5cGUgdGhhdCB3aWxsIGJlIHVzZWQgZm9yIG5hdmlnYXRpb24gbm9kZXNcbiAgICogd2l0aCBjaGlsZHJlbi5cbiAgICovXG4gIGljb25UeXBlID0gSUNPTl9UWVBFO1xuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgbmF2aWdhdGlvbiBzaG91bGQgc3VwcG9ydCBmbHlvdXQuXG4gICAqIElmIGZseW91dCBpcyBzZXQgdG8gdHJ1ZSwgdGhlXG4gICAqIG5lc3RlZCBjaGlsZCBuYXZpdGF0aW9uIG5vZGVzIHdpbGwgb25seSBhcHBlYXIgb24gaG92ZXIgb3IgZm9jdXMuXG4gICAqL1xuICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2NsYXNzLmZseW91dCcpIGZseW91dCA9IHRydWU7XG5cbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5pcy1vcGVuJykgaXNPcGVuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBvcGVuTm9kZXM6IEhUTUxFbGVtZW50W10gPSBbXTtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICBwcml2YXRlIHJlc2l6ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJylcbiAgb25SZXNpemUoKSB7XG4gICAgdGhpcy5yZXNpemUubmV4dCgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbGVtUmVmOiBFbGVtZW50UmVmXG4gICkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoXG4gICAgICB0aGlzLnJvdXRlci5ldmVudHNcbiAgICAgICAgLnBpcGUoZmlsdGVyKGV2ZW50ID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jbGVhcigpKVxuICAgICk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcbiAgICAgIHRoaXMucmVzaXplLnBpcGUoZGVib3VuY2VUaW1lKDUwKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5hbGlnbldyYXBwZXJzVG9SaWdodElmU3RpY2tPdXQoKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHRvZ2dsZU9wZW4oZXZlbnQ6IFVJRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG5vZGUgPSA8SFRNTEVsZW1lbnQ+ZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICBpZiAodGhpcy5vcGVuTm9kZXMuaW5jbHVkZXMobm9kZSkpIHtcbiAgICAgIGlmIChldmVudC50eXBlID09PSAna2V5ZG93bicpIHtcbiAgICAgICAgdGhpcy5iYWNrKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9wZW5Ob2RlcyA9IHRoaXMub3Blbk5vZGVzLmZpbHRlcihuID0+IG4gIT09IG5vZGUpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKG5vZGUsICdpcy1vcGVuJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3Blbk5vZGVzLnB1c2gobm9kZSk7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVDbGFzc2VzKCk7XG5cbiAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGJhY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3Blbk5vZGVzW3RoaXMub3Blbk5vZGVzLmxlbmd0aCAtIDFdKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKFxuICAgICAgICB0aGlzLm9wZW5Ob2Rlc1t0aGlzLm9wZW5Ob2Rlcy5sZW5ndGggLSAxXSxcbiAgICAgICAgJ2lzLW9wZW4nXG4gICAgICApO1xuICAgICAgdGhpcy5vcGVuTm9kZXMucG9wKCk7XG4gICAgICB0aGlzLnVwZGF0ZUNsYXNzZXMoKTtcbiAgICB9XG4gIH1cblxuICBjbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLm9wZW5Ob2RlcyA9IFtdO1xuICAgIHRoaXMudXBkYXRlQ2xhc3NlcygpO1xuICB9XG5cbiAgb25Nb3VzZUVudGVyKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgdGhpcy5hbGlnbldyYXBwZXJUb1JpZ2h0SWZTdGlja091dCg8SFRNTEVsZW1lbnQ+ZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgdGhpcy5mb2N1c0FmdGVyUHJldmlvdXNDbGlja2VkKGV2ZW50KTtcbiAgfVxuXG4gIGdldERlcHRoKG5vZGU6IE5hdmlnYXRpb25Ob2RlLCBkZXB0aCA9IDApOiBudW1iZXIge1xuICAgIGlmIChub2RlLmNoaWxkcmVuICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIE1hdGgubWF4KC4uLm5vZGUuY2hpbGRyZW4ubWFwKG4gPT4gdGhpcy5nZXREZXB0aChuLCBkZXB0aCArIDEpKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkZXB0aDtcbiAgICB9XG4gIH1cblxuICBnZXRDb2x1bW5Db3VudChsZW5ndGg6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobGVuZ3RoIC8gKHRoaXMud3JhcEFmdGVyIHx8IGxlbmd0aCkpO1xuICB9XG5cbiAgZm9jdXNBZnRlclByZXZpb3VzQ2xpY2tlZChldmVudDogTW91c2VFdmVudCkge1xuICAgIGNvbnN0IHRhcmdldDogSFRNTEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+KFxuICAgICAgKGV2ZW50LnRhcmdldCB8fCBldmVudC5yZWxhdGVkVGFyZ2V0KVxuICAgICk7XG4gICAgaWYgKFxuICAgICAgdGFyZ2V0Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudC5tYXRjaGVzKCduYXZbdGFiaW5kZXhdJykgJiZcbiAgICAgIHRhcmdldC5wYXJlbnRFbGVtZW50Lm1hdGNoZXMoJy5mbHlvdXQnKVxuICAgICkge1xuICAgICAgdGFyZ2V0LmZvY3VzKCk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQub3duZXJEb2N1bWVudDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbnMpIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWxpZ25XcmFwcGVyVG9SaWdodElmU3RpY2tPdXQobm9kZTogSFRNTEVsZW1lbnQpIHtcbiAgICBpZiAodGhpcy5hbGxvd0FsaWduVG9SaWdodCkge1xuICAgICAgY29uc3Qgd3JhcHBlciA9IDxIVE1MRWxlbWVudD5ub2RlLnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJyk7XG4gICAgICBjb25zdCBuYXZCYXIgPSA8SFRNTEVsZW1lbnQ+dGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICBpZiAod3JhcHBlcikge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHdyYXBwZXIsICdtYXJnaW4tbGVmdCcpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgd3JhcHBlci5vZmZzZXRMZWZ0ICsgd3JhcHBlci5vZmZzZXRXaWR0aCA+XG4gICAgICAgICAgbmF2QmFyLm9mZnNldExlZnQgKyBuYXZCYXIub2Zmc2V0V2lkdGhcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICAgIHdyYXBwZXIsXG4gICAgICAgICAgICAnbWFyZ2luLWxlZnQnLFxuICAgICAgICAgICAgYCR7bm9kZS5vZmZzZXRXaWR0aCAtIHdyYXBwZXIub2Zmc2V0V2lkdGh9cHhgXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWxpZ25XcmFwcGVyc1RvUmlnaHRJZlN0aWNrT3V0KCkge1xuICAgIGNvbnN0IG5hdnMgPSA8SFRNTENvbGxlY3Rpb24+dGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGROb2RlcztcbiAgICBBcnJheS5mcm9tKG5hdnMpXG4gICAgICAuZmlsdGVyKG5vZGUgPT4gbm9kZS50YWdOYW1lID09PSAnTkFWJylcbiAgICAgIC5mb3JFYWNoKG5hdiA9PiB0aGlzLmFsaWduV3JhcHBlclRvUmlnaHRJZlN0aWNrT3V0KDxIVE1MRWxlbWVudD5uYXYpKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQ2xhc3NlcygpOiB2b2lkIHtcbiAgICB0aGlzLm9wZW5Ob2Rlcy5mb3JFYWNoKChub2RlLCBpKSA9PiB7XG4gICAgICBpZiAoaSArIDEgPCB0aGlzLm9wZW5Ob2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhub2RlLCAnaXMtb3BlbmVkJyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3Mobm9kZSwgJ2lzLW9wZW4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3Mobm9kZSwgJ2lzLW9wZW5lZCcpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKG5vZGUsICdpcy1vcGVuJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmlzT3BlbiA9IHRoaXMub3Blbk5vZGVzLmxlbmd0aCA+IDA7XG4gIH1cblxuICBpc1RhYmJhYmxlKG5vZGU6IGFueSkge1xuICAgIHJldHVybiB0aGlzLmZseW91dCAmJiBub2RlLmNoaWxkcmVuICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoO1xuICB9XG59XG4iXX0=